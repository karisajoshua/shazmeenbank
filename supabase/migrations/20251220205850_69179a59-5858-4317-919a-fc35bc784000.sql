-- Add new columns to courses table for richer content
ALTER TABLE public.courses 
ADD COLUMN IF NOT EXISTS subtitle text,
ADD COLUMN IF NOT EXISTS duration_text text,
ADD COLUMN IF NOT EXISTS cta_text text DEFAULT 'Enrollment opens soon. Get notified first when the course goes live.',
ADD COLUMN IF NOT EXISTS learning_outcomes text[] DEFAULT '{}';

-- Update existing courses table comments
COMMENT ON COLUMN public.courses.subtitle IS 'E.g. Video + workbook + meditations • Instant access after purchase';
COMMENT ON COLUMN public.courses.duration_text IS 'E.g. 8-Week Course, 90-minute masterclass';
COMMENT ON COLUMN public.courses.cta_text IS 'Call to action text for enrollment';
COMMENT ON COLUMN public.courses.learning_outcomes IS 'Array of learning outcomes for You will learn to section';