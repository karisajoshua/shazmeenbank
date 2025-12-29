import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { User } from 'lucide-react';

interface CommentListProps {
  postId: string;
}

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

const CommentList = ({ postId }: CommentListProps) => {
  const { data: comments = [], isLoading } = useQuery({
    queryKey: ['blog-comments', postId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_comments')
        .select('id, author_name, content, created_at')
        .eq('post_id', postId)
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Comment[];
    },
  });

  if (isLoading) {
    return <p className="text-muted-foreground">Loading comments...</p>;
  }

  if (comments.length === 0) {
    return (
      <p className="text-muted-foreground">
        No comments yet. Be the first to share your thoughts!
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-foreground">
        Comments ({comments.length})
      </h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 rounded-lg bg-muted/30 border border-border"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{comment.author_name}</p>
                <p className="text-xs text-muted-foreground">
                  {format(new Date(comment.created_at), 'MMMM d, yyyy')}
                </p>
              </div>
            </div>
            <p className="text-foreground/90 pl-11">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
