-- Add explicit deny policies for coaches table write operations
-- These should be updated to allow admin-only access once authentication is implemented

-- Policy: Deny all INSERT operations (to be updated for admin access later)
CREATE POLICY "Only admins can insert coaches (not yet implemented)"
ON public.coaches
FOR INSERT
TO authenticated
WITH CHECK (false);

-- Policy: Deny all UPDATE operations (to be updated for admin access later)
CREATE POLICY "Only admins can update coaches (not yet implemented)"
ON public.coaches
FOR UPDATE
TO authenticated
USING (false);

-- Policy: Deny all DELETE operations (to be updated for admin access later)
CREATE POLICY "Only admins can delete coaches (not yet implemented)"
ON public.coaches
FOR DELETE
TO authenticated
USING (false);