import { Link } from "react-router-dom";
import LockResetIcon from "@mui/icons-material/LockReset";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import { AUTH_ROUTES } from "../authData";

export default function ResetPasswordPage() {
	return (
		<AuthLayout variant="centered">
			<AuthCard
				icon={<LockResetIcon />}
				title="Reset Password"
				subtitle="Choose a new password for your account."
				footer={
					<Link
						to={AUTH_ROUTES.login}
						className="inline-flex items-center gap-1.5 font-semibold text-(--primary) hover:text-(--primary-hover) hover:underline"
					>
						<ArrowBackIcon sx={{ fontSize: 18 }} />
						Back to Sign In
					</Link>
				}
			>
				<div className="space-y-5">
					<AuthInput
						label="New Password"
						type="password"
						name="newPassword"
						placeholder="Enter new password"
						autoComplete="new-password"
						icon={<LockOutlinedIcon />}
					/>
					<AuthInput
						label="Confirm Password"
						type="password"
						name="confirmPassword"
						placeholder="Repeat new password"
						autoComplete="new-password"
						icon={<LockOutlinedIcon />}
					/>

					<button
						type="button"
						className="h-12 w-full rounded-xl bg-(--primary) text-base font-semibold text-white shadow-md transition hover:bg-(--primary-hover) focus:outline-none focus-visible:ring-4 focus-visible:ring-(--primary)/30 active:scale-[0.99]"
					>
						Reset Password
					</button>
				</div>
			</AuthCard>
		</AuthLayout>
	);
}
