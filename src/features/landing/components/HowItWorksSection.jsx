import StepCard from "./StepCard";
import { steps } from "../data/landingData";

export default function HowItWorksSection() {
	return (
		<section
			id="how-it-works"
			aria-labelledby="how-it-works-heading"
			className="scroll-mt-16 bg-(--bg) py-16 sm:py-20 lg:py-24"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-wider text-(--secondary)">
						How It Works
					</p>
					<h2
						id="how-it-works-heading"
						className="mt-3 text-3xl font-bold tracking-tight text-(--text) sm:text-4xl"
					>
						How Persona Works
					</h2>
					<p className="mt-4 text-base leading-relaxed text-(--text2) sm:text-lg">
						A simple path from registration to real-world practice.
					</p>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
					{steps.map((step) => (
						<StepCard
							key={step.id}
							number={step.number}
							icon={step.icon}
							title={step.title}
							description={step.description}
							details={step.details}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
