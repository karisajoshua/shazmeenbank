import { z } from 'zod';

export const blogFormSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  slug: z.string().min(1, 'Slug is required').max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL-friendly (lowercase, numbers, hyphens only)'),
  excerpt: z.string().max(500, 'Excerpt must be less than 500 characters').optional(),
  content: z.string().min(1, 'Content is required'),
  featured_image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  tags: z.string().optional(),
  meta_description: z.string().max(160, 'Meta description must be less than 160 characters').optional(),
  status: z.enum(['draft', 'published']),
});

export type BlogFormValues = z.infer<typeof blogFormSchema>;
