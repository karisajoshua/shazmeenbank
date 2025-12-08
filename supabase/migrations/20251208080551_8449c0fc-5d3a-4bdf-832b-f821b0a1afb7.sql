-- Add youtube_url column to podcast_episodes table
ALTER TABLE public.podcast_episodes 
ADD COLUMN youtube_url TEXT;