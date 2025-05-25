import { z } from "zod";

export const AdminLoginSchema = z.object({
  email: z
    .string()
    .email("Please provide valid email address")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export type AdminLoginBody = z.infer<typeof AdminLoginSchema>;
