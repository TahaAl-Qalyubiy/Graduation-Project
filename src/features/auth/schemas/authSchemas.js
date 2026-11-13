import { z } from "zod";

const emailSchema = z
	.string()
	.trim()
	.min(1, "Email is required")
	.max(254, "Email must not exceed 254 characters")
	.pipe(
		z.email({
			error: "Please enter a valid email address",
		}),
	);

export const signupSchema = z
	.object({
		email: emailSchema,

		password: z
			.string()
			.min(1, "Password is required")
			.min(8, "Password must be at least 8 characters")
			.max(72, "Password must not exceed 72 characters"),

		confirmPassword: z.string().min(1, "Please confirm your password"),

		terms: z.boolean().refine((value) => value === true, {
			message: "You must accept the Terms and Conditions",
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export const signinSchema = z.object({
	email: emailSchema,

	password: z.string().min(1, "Password is required"),
});
