import z from "zod";

const Technologies = z.enum([
  "react",
  "typescript",
  "tailwindcss",
  "nextjs",
  "express",
  "svelte",
  "html",
  "css",
  "javascript",
]);

type Technologies = z.infer<typeof Technologies>;
export default Technologies;
