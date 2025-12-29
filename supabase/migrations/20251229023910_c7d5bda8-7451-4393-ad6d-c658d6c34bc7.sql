-- Create blog_comments table for user comments on blog posts
CREATE TABLE public.blog_comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid NOT NULL,
  author_name text NOT NULL,
  author_email text NOT NULL,
  content text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

-- Anyone can view approved comments
CREATE POLICY "Anyone can view approved comments"
ON public.blog_comments
FOR SELECT
USING (status = 'approved');

-- Anyone can submit comments (will be moderated)
CREATE POLICY "Anyone can submit comments"
ON public.blog_comments
FOR INSERT
WITH CHECK (true);

-- Admins can view all comments
CREATE POLICY "Admins can view all comments"
ON public.blog_comments
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update comments (approve/reject)
CREATE POLICY "Admins can update comments"
ON public.blog_comments
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete comments
CREATE POLICY "Admins can delete comments"
ON public.blog_comments
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_blog_comments_updated_at
BEFORE UPDATE ON public.blog_comments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();