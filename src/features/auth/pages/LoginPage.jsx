import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import { AUTH_ROUTES } from "../authData";

export default function LoginPage() {
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
				<div className="space-y-5">
					<AuthInput
						label="Email"
						type="email"
						name="email"
						placeholder="you@company.com"
						autoComplete="email"
						icon={<EmailOutlinedIcon />}
					/>

					<AuthInput
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password"
						autoComplete="current-password"
						icon={<LockOutlinedIcon />}
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

					<button
						type="button"
						className="h-12 w-full rounded-xl bg-(--primary) text-base font-semibold text-white shadow-md transition hover:bg-(--primary-hover) focus:outline-none focus-visible:ring-4 focus-visible:ring-(--primary)/30 active:scale-[0.99]"
					>
						Sign In
					</button>
				</div>
			</AuthCard>
		</AuthLayout>
	);
}
