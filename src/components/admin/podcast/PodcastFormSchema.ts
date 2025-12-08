import { z } from 'zod';

export const podcastFormSchema = z.object({
  episode_number: z.number().int().positive('Episode number must be positive'),
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().min(1, 'Description is required').max(2000, 'Description must be less than 2000 characters'),
  publish_date: z.date({ required_error: 'Publish date is required' }),
  image_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  spotify_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  apple_podcast_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  youtube_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  topics: z.array(z.string()).default([]),
  status: z.enum(['published', 'draft']).default('draft'),
});

export type PodcastFormValues = z.infer<typeof podcastFormSchema>;
