import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(8),
  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const listingSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(8),
  description: z.string().optional(),
  price: z.number().min(1),
  isPublished: z.boolean().default(false),
  isbn: z
    .string()
    .regex(
      /^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/,
      "Must be a valid ISBN"
    )
    .optional(),
  status: z.enum(["sold", "active", "inactive"]).default("active"),
});
