import * as z from "zod";

export const resourceFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  icon_name: z.string().default("Heart"),
  file_url: z.string().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
});

export type ResourceFormValues = z.infer<typeof resourceFormSchema>;
