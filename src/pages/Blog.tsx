import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogGrid from '@/components/blog/BlogGrid';

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['published-blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const featuredPost = posts?.[0];
  const otherPosts = posts?.slice(1) || [];

  return (
    <>
      <BlogHero />
      
      {isLoading ? (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">Loading articles...</p>
        </div>
      ) : posts?.length === 0 ? (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">Blog Coming Soon!</h2>
              <p className="text-xl text-muted-foreground">
                We're working on bringing you valuable content that will inspire and guide you on your journey.
                Our blog will be launching soon with articles on mindset, growth, and transformation.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {featuredPost && <FeaturedPost post={featuredPost} />}
          {otherPosts.length > 0 && <BlogGrid posts={otherPosts} />}
        </>
      )}
    </>
  );
};

export default Blog;