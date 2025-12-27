-- Create free_resources table
CREATE TABLE public.free_resources (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  icon_name TEXT DEFAULT 'Heart',
  file_url TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.free_resources ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published resources
CREATE POLICY "Anyone can view published resources"
  ON public.free_resources FOR SELECT
  USING (status = 'published');

-- Allow admin full access for all operations
CREATE POLICY "Admins can insert resources"
  ON public.free_resources FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update resources"
  ON public.free_resources FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete resources"
  ON public.free_resources FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view all resources"
  ON public.free_resources FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Add trigger for updated_at
CREATE TRIGGER update_free_resources_updated_at
  BEFORE UPDATE ON public.free_resources
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();