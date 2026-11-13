import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";

import { AUTH_ROUTES } from "../authData";
import { signinSchema } from "../schemas/authSchemas";

import { useSignin } from "../hooks/useSignin";

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const signinMutation = useSignin();
	const onSubmit = async (data) => {
		const { email, password } = data;

		try {
			await signinMutation.mutateAsync({ email, password });
		} catch {}
	};

	return (
		<AuthLayout variant="centered">
			<AuthCard
				title="Welcome Back"
				subtitle="Sign in to continue your training journey."
				footer={
					<>
						Don&apos;t have an account?{" "}
						<Link
							to={AUTH_ROUTES.register}
							className="font-semibold text-(--primary) hover:text-(--primary-hover) hover:underline"
						>
							Create Account
						</Link>
					</>
				}
			>
				<form
					noValidate
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-5"
				>
					<AuthInput
						label="Email"
						type="text"
						name="email"
						placeholder="you@company.com"
						autoComplete="email"
						inputMode="email"
						icon={<EmailOutlinedIcon />}
						registration={register("email")}
						error={errors.email?.message}
					/>

					<AuthInput
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password"
						autoComplete="current-password"
						icon={<LockOutlinedIcon />}
						registration={register("password")}
						error={errors.password?.message}
					/>

					<div className="flex flex-wrap items-center justify-between gap-3">
						<label className="flex cursor-pointer items-center gap-2.5 text-sm text-(--text2)">
							<input
								type="checkbox"
								className="h-4 w-4 cursor-pointer rounded border-(--border) accent-(--primary)"
							/>
							Remember me
						</label>

						<Link
							to={AUTH_ROUTES.forgotPassword}
							className="text-sm font-medium text-(--primary) hover:text-(--primary-hover) hover:underline"
						>
							Forgot Password?
						</Link>
					</div>

					{signinMutation.isError && (
						<div
							role="alert"
							className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
						>
							{getApiErrorMessage(signinMutation.error)}
						</div>
					)}

					{/* Success Message */}
					{signinMutation.isSuccess && (
						<div
							role="status"
							className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400"
						>
							Account created successfully!
						</div>
					)}

					<button
						type="submit"
						disabled={signinMutation.isPending}
						className="h-12 w-full rounded-xl bg-(--primary) text-base font-semibold text-white shadow-md transition hover:bg-(--primary-hover) disabled:cursor-not-allowed disabled:opacity-60"
					>
						{signinMutation.isPending ? "Submitting..." : "Sign In"}
					</button>
				</form>
			</AuthCard>
		</AuthLayout>
	);
}
