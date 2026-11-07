import { Link } from "react-router-dom";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { BRAND } from "../authData";

/**
 * Reusable auth layout.
 * variant="centered" -> single centered card
 * variant="split"    -> form on the left, `aside` on the right (hidden below lg)
 */
export function AuthBrand({ className = "" }) {
	return (
		<Link
			to="/"
			className={`inline-flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) ${className}`}
			aria-label={`${BRAND.name} home`}
		>
			<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--primary) text-white shadow-md">
				<PsychologyAltIcon fontSize="small" />
			</span>
			<span className="text-xl font-bold tracking-tight text-(--text)">
				{BRAND.name}
			</span>
		</Link>
	);
}

export default function AuthLayout({
	variant = "centered",
	aside = null,
	children,
}) {
	if (variant === "split") {
		return (
			<main className="min-h-screen w-full overflow-x-hidden bg-(--bg) text-(--text) lg:grid lg:grid-cols-2">
				<section className="flex min-h-screen flex-col px-5 py-8 sm:px-10 lg:px-14 xl:px-20">
					<AuthBrand />
					<div className="mx-auto flex w-full max-w-md flex-1 items-center py-10">
						<div className="w-full">{children}</div>
					</div>
					<p className="text-center text-xs text-(--text2) lg:text-left">
						© {new Date().getFullYear()} {BRAND.name}. All rights reserved.
					</p>
				</section>

				<aside className="hidden bg-(--bg2) p-6 lg:block">
					<div className="h-full w-full">{aside}</div>
				</aside>
			</main>
		);
	}

	return (
		<main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-(--bg) px-4 py-10 text-(--text) sm:px-6">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--primary) opacity-10 blur-3xl"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-(--secondary) opacity-10 blur-3xl"
			/>
			<div className="relative z-10 flex w-full flex-col items-center">
				{children}
			</div>
		</main>
	);
}
