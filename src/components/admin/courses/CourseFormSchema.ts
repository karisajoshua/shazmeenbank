import { z } from 'zod';

export const courseFormSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title must be less than 200 characters'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  total_modules: z.number().int().min(0, 'Must be 0 or greater'),
  status: z.enum(['draft', 'published'])
});

export type CourseFormValues = z.infer<typeof courseFormSchema>;
