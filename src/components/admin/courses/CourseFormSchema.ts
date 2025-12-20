import { z } from 'zod';

export const courseFormSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  subtitle: z.string().optional().or(z.literal('')),
  description: z.string().min(1, 'Description is required'),
  duration_text: z.string().optional().or(z.literal('')),
  image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  total_modules: z.number().int().min(0, 'Must be 0 or greater'),
  learning_outcomes: z.array(z.string()).optional().default([]),
  cta_text: z.string().optional().or(z.literal('')),
  status: z.enum(['draft', 'published'])
});

export type CourseFormValues = z.infer<typeof courseFormSchema>;
