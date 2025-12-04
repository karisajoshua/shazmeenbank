-- Create storage bucket for admin media uploads
INSERT INTO storage.buckets (id, name, public)
VALUES ('admin-media', 'admin-media', true);

-- Allow admins to upload files
CREATE POLICY "Admins can upload media"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'admin-media' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- Allow admins to update files
CREATE POLICY "Admins can update media"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'admin-media' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- Allow admins to delete files
CREATE POLICY "Admins can delete media"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'admin-media' 
  AND has_role(auth.uid(), 'admin'::app_role)
);

-- Allow anyone to view media (public bucket)
CREATE POLICY "Anyone can view admin media"
ON storage.objects
FOR SELECT
USING (bucket_id = 'admin-media');