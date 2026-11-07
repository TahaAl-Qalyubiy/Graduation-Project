import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { routes } from "../data/landingData";

export default function CTASection() {
	return (
		<section
			aria-labelledby="cta-heading"
			className="bg-(--bg) px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
		>
			<div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-(--primary) px-6 py-14 text-center sm:px-12 sm:py-16">
				{/* Decorative circles */}
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-(--surface)/10"
				/>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-(--surface)/10"
				/>

				<div className="relative">
					<h2
						id="cta-heading"
						className="text-3xl font-bold tracking-tight text-(--surface) sm:text-4xl"
					>
						Start Training with Persona Today
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-(--surface)/80 sm:text-lg">
						Register with your company email and begin your journey toward
						better customer service.
					</p>

					<Link
						to={routes.getStarted}
						className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-(--surface) px-7 text-base font-semibold text-(--primary) shadow-sm transition-colors hover:bg-(--surface-2) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--surface) sm:w-auto"
					>
						Get Started
						<ArrowForwardIcon
							sx={{ fontSize: 18 }}
							className="transition-transform group-hover:translate-x-0.5"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
