import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import DOMPurify from 'dompurify';
import CommentForm from '@/components/blog/CommentForm';
import CommentList from '@/components/blog/CommentList';

const estimateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      return data;
    },
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt || '',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {post.featured_image && (
            <div className="h-[400px] rounded-lg overflow-hidden mb-8">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>
                {post.published_at
                  ? format(new Date(post.published_at), 'MMMM d, yyyy')
                  : format(new Date(post.created_at), 'MMMM d, yyyy')}
              </span>
              <span>•</span>
              <span>{estimateReadTime(post.content)} min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-foreground prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />

            <div className="pt-8 border-t border-border flex justify-between items-center">
              <Button onClick={handleShare} variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button asChild>
                <Link to="/blog">Read More Articles</Link>
              </Button>
            </div>

            {/* Comments Section */}
            <div className="pt-8 border-t border-border space-y-8">
              <CommentList postId={post.id} />
              <CommentForm postId={post.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
