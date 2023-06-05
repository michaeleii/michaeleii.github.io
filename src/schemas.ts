import z from "zod";
import Technologies from "./technologies";

const blogSchema = z.object({
  title: z.string(),
  body: z.string(),
  date: z.string(),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  technologies: z.array(Technologies),
});

export { blogSchema, projectSchema };
