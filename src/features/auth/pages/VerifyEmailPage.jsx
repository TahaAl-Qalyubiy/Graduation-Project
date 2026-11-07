import { Link } from "react-router-dom";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import { AUTH_ROUTES, VERIFY_CODE_LENGTH } from "../authData";

const CODE_SLOTS = Array.from({ length: VERIFY_CODE_LENGTH }, (_, i) => i + 1);

export default function VerifyEmailPage() {
	return (
		<AuthLayout variant="centered">
			<AuthCard
				icon={<MarkEmailReadOutlinedIcon />}
				title="Confirm Your Email"
				subtitle="Enter the 6-digit code we sent to your email address."
				footer={
					<Link
						to={AUTH_ROUTES.forgotPassword}
						className="inline-flex items-center gap-1.5 font-semibold text-(--primary) hover:text-(--primary-hover) hover:underline"
					>
						<ArrowBackIcon sx={{ fontSize: 18 }} />
						Use a different email
					</Link>
				}
			>
				<div className="space-y-6">
					<fieldset>
						<legend className="mb-2 block text-sm font-medium text-(--text)">
							Verification code
						</legend>
						<div className="flex justify-between gap-2">
							{CODE_SLOTS.map((slot) => (
								<input
									key={slot}
									type="text"
									inputMode="numeric"
									maxLength={1}
									aria-label={`Digit ${slot} of ${VERIFY_CODE_LENGTH}`}
									className="h-12 w-full min-w-0 rounded-xl border border-(--border) bg-(--surface-2) text-center text-lg font-semibold text-(--text) transition focus:border-(--primary) focus:outline-none focus:ring-4 focus:ring-(--primary)/15 sm:h-14"
								/>
							))}
						</div>
					</fieldset>

					<Link
						to={AUTH_ROUTES.resetPassword}
						className="flex h-12 w-full items-center justify-center rounded-xl bg-(--primary) text-base font-semibold text-white shadow-md transition hover:bg-(--primary-hover) focus:outline-none focus-visible:ring-4 focus-visible:ring-(--primary)/30 active:scale-[0.99]"
					>
						Continue
					</Link>

					<p className="text-center text-sm text-(--text2)">
						Didn&apos;t receive a code?{" "}
						<button
							type="button"
							className="font-semibold text-(--primary) hover:text-(--primary-hover) hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)"
						>
							Resend
						</button>
					</p>
				</div>
			</AuthCard>
		</AuthLayout>
	);
}
