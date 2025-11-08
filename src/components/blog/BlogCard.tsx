import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    published_at: string | null;
    tags: string[] | null;
    content: string;
  };
}

const estimateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {post.featured_image && (
        <div className="h-48 overflow-hidden">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>
            {post.published_at
              ? format(new Date(post.published_at), 'MMM d, yyyy')
              : 'Draft'}
          </span>
          <span>•</span>
          <span>{estimateReadTime(post.content)} min read</span>
        </div>
        <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-muted-foreground line-clamp-3">
          {post.excerpt || post.content.substring(0, 150) + '...'}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Button variant="ghost" asChild className="w-full">
          <Link to={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
