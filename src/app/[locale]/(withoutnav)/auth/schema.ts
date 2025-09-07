import { z } from "zod";

export const passwordSchema = z.string().min(8).max(18);

export const signInSchema = z.object({
  email: z.string().email({message: "Invalid email address"}),
  password: passwordSchema,
});

export const signUpSchema = signInSchema.merge(
    z.object({
        name: z.string().min(1, {message: "Name is required"}),
        confirmPassword: passwordSchema,
    })
).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});

export type SignInSchema = z.infer<typeof signInSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;



