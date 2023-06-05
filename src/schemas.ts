import z from "zod";
import Technologies from "./technologies";

const blogSchema = z.object({
  title: z.string(),
  body: z.string(),
  createdAt: z.date(),
});

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  technologies: z.array(Technologies),
  link: z.string().url(),
});

export { blogSchema, projectSchema };
