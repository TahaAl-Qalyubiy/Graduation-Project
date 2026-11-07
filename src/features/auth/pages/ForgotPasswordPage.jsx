import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import AuthInput from "../components/AuthInput";
import { AUTH_ROUTES } from "../authData";

export default function ForgotPasswordPage() {
	return (
		<AuthLayout variant="centered">
			<AuthCard
				icon={<SearchIcon />}
				title="Find Your Account"
				subtitle="Enter the email linked to your account and we'll help you get back in."
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
						label="Email"
						type="email"
						name="email"
						placeholder="you@company.com"
						autoComplete="email"
						icon={<EmailOutlinedIcon />}
					/>

					<Link
						to={AUTH_ROUTES.verifyEmail}
						className="flex h-12 w-full items-center justify-center rounded-xl bg-(--primary) text-base font-semibold text-white shadow-md transition hover:bg-(--primary-hover) focus:outline-none focus-visible:ring-4 focus-visible:ring-(--primary)/30 active:scale-[0.99]"
					>
						Continue
					</Link>
				</div>
			</AuthCard>
		</AuthLayout>
	);
}
