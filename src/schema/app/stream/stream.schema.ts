import { z } from "zod";

export const streamSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

export type FormStream = z.infer<typeof streamSchema>;
