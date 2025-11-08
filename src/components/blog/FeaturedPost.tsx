import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import featuredImage from '@/assets/blog/featured-fire.png';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    published_at: string | null;
    content: string;
  };
}

const estimateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={post.featured_image || featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>
                  {post.published_at
                    ? format(new Date(post.published_at), 'MMMM d, yyyy')
                    : 'Draft'}
                </span>
                <span>•</span>
                <span>{estimateReadTime(post.content)} min read</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {post.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {post.excerpt || post.content.substring(0, 200) + '...'}
              </p>
              <Button asChild className="gap-2">
                <Link to={`/blog/${post.slug}`}>
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
