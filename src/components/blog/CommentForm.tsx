import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface CommentFormProps {
  postId: string;
}

const CommentForm = ({ postId }: CommentFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const submitMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from('blog_comments').insert({
        post_id: postId,
        author_name: name,
        author_email: email,
        content,
        status: 'pending',
      });
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Comment submitted! It will appear after approval.');
      setName('');
      setEmail('');
      setContent('');
    },
    onError: () => {
      toast.error('Failed to submit comment. Please try again.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    submitMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold text-foreground">Leave a Comment</h3>
      <p className="text-sm text-muted-foreground">
        Your comment will be reviewed before being published.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-background border-border"
        />
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background border-border"
        />
      </div>
      <Textarea
        placeholder="Write your comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={4}
        className="bg-background border-border"
      />
      <Button 
        type="submit" 
        disabled={submitMutation.isPending}
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {submitMutation.isPending ? 'Submitting...' : 'Submit Comment'}
      </Button>
    </form>
  );
};

export default CommentForm;
