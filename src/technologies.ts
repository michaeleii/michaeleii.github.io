import z from "zod";

const Technologies = z.enum([
  "react",
  "typescript",
  "tailwindcss",
  "nextjs",
  "express",
]);

type Technologies = z.infer<typeof Technologies>;
export default Technologies;
