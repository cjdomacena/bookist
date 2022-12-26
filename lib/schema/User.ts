import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(8),
  password: z.string().min(8),
});
