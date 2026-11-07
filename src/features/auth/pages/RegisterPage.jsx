import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import AuthIllustration from "../components/AuthIllustration";
import { AUTH_ROUTES } from "../authData";

export default function RegisterPage() {
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
				<div className="space-y-5">
					<AuthInput
						label="Full Name"
						name="fullName"
						placeholder="Jane Doe"
						autoComplete="name"
						icon={<PersonOutlineIcon />}
					/>

					<AuthInput
						label="Work Email"
						type="email"
						name="email"
						placeholder="jane@company.com"
						autoComplete="email"
						icon={<BusinessCenterOutlinedIcon />}
					/>

					<div className="grid gap-5 sm:grid-cols-2">
						<AuthInput
							label="Password"
							type="password"
							name="password"
							placeholder="Create password"
							autoComplete="new-password"
							icon={<LockOutlinedIcon />}
						/>
						<AuthInput
							label="Confirm Password"
							type="password"
							name="confirmPassword"
							placeholder="Repeat password"
							autoComplete="new-password"
							icon={<LockOutlinedIcon />}
						/>
					</div>

					<label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-(--text2)">
						<input
							type="checkbox"
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

					<button
						type="button"
						className="h-12 w-full rounded-xl bg-(--primary) text-base font-semibold text-white shadow-md transition hover:bg-(--primary-hover) focus:outline-none focus-visible:ring-4 focus-visible:ring-(--primary)/30 active:scale-[0.99]"
					>
						Create Account
					</button>
				</div>
			</AuthCard>
		</AuthLayout>
	);
}
