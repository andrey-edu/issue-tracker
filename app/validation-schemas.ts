import { z } from "zod";

// Раньше мы называли объект для валидации schema, но в больших
// проектах у нас может быть множество схем для разных задач.
// Поэтому назовем ее более осмысленно.
export const createIssueSchema = z.object({
  title: z.string({ required_error: "Title is required" }).min(1, "Title must contain at least 1 symbol").max(255),
  description: z.string({ required_error: "Description is required" }).min(1, "Description must contain at least 1 symbol")
});

export type IssueForm = z.infer<typeof createIssueSchema>;
