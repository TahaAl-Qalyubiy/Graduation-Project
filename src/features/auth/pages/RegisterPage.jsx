import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import AuthIllustration from "../components/AuthIllustration";

import { AUTH_ROUTES } from "../authData";
import { signupSchema } from "../schemas/authSchemas";

import { useSignup } from "../hooks/useSignup";
import { getApiErrorMessage } from "../../../utils/apiError";

export default function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
			terms: false,
		},
	});

	const signupMutation = useSignup();

	const onSubmit = async (data) => {
		const { email, password } = data;

		try {
			await signupMutation.mutateAsync({ email, password });
		} catch {}
	};

	return (
		<AuthLayout variant="split" aside={<AuthIllustration />}>
			<AuthCard
				bare
				showBrand={false}
				title="Create Your Account"
				subtitle="Start your journey with AI-powered customer service training."
				footer={
					<>
						Already have an account?{" "}
						<Link
							to={AUTH_ROUTES.login}
							className="font-semibold text-(--primary) hover:text-(--primary-hover) hover:underline"
						>
							Sign In
						</Link>
					</>
				}
			>
				<form
					noValidate
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-5"
				>
					{/* Work Email */}
					<AuthInput
						label="Work Email"
						type="email"
						name="email"
						placeholder="jane@company.com"
						autoComplete="email"
						icon={<BusinessCenterOutlinedIcon />}
						registration={register("email")}
						error={errors.email?.message}
					/>

					{/* Password Fields */}

					<AuthInput
						label="Password"
						type="password"
						name="password"
						placeholder="Create password"
						autoComplete="new-password"
						icon={<LockOutlinedIcon />}
						registration={register("password")}
						error={errors.password?.message}
					/>

					<AuthInput
						label="Confirm Password"
						type="password"
						name="confirmPassword"
						placeholder="Repeat password"
						autoComplete="new-password"
						icon={<LockOutlinedIcon />}
						registration={register("confirmPassword")}
						error={errors.confirmPassword?.message}
					/>

					{/* Terms and Conditions */}
					<div>
						<label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-(--text2)">
							<input
								type="checkbox"
								{...register("terms")}
								className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-(--border) accent-(--primary)"
							/>

							<span>
								I agree to the{" "}
								<a
									href="#terms"
									className="font-medium text-(--primary) hover:text-(--primary-hover) hover:underline"
								>
									Terms and Conditions
								</a>{" "}
								and{" "}
								<a
									href="#privacy"
									className="font-medium text-(--primary) hover:text-(--primary-hover) hover:underline"
								>
									Privacy Policy
								</a>
								.
							</span>
						</label>

						{errors.terms && (
							<p className="mt-2 text-sm text-red-500">
								{errors.terms.message}
							</p>
						)}
					</div>

					{/* Error Message */}
					{signupMutation.isError && (
						<div
							role="alert"
							className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
						>
							{getApiErrorMessage(signupMutation.error)}
						</div>
					)}

					{/* Success Message */}
					{signupMutation.isSuccess && (
						<div
							role="status"
							className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400"
						>
							Account created successfully!
						</div>
					)}

					{/* Submit Button */}
					<button
						type="submit"
						disabled={signupMutation.isPending}
						className="h-12 w-full rounded-xl bg-(--primary) text-base font-semibold text-white shadow-md transition hover:bg-(--primary-hover) focus:outline-none focus-visible:ring-4 focus-visible:ring-(--primary)/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
					>
						{signupMutation.isPending
							? "Creating Account..."
							: "Create Account"}
					</button>
				</form>
			</AuthCard>
		</AuthLayout>
	);
}
