import FeatureCard from "./FeatureCard";
import { features } from "../data/landingData";

export default function FeaturesSection() {
	return (
		<section
			id="features"
			aria-labelledby="features-heading"
			className="scroll-mt-16 border-y border-(--border) bg-(--surface) py-16 sm:py-20 lg:py-24"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-sm font-semibold uppercase tracking-wider text-(--secondary)">
						Features
					</p>
					<h2
						id="features-heading"
						className="mt-3 text-3xl font-bold tracking-tight text-(--text) sm:text-4xl"
					>
						Built for Telecom Training
					</h2>
					<p className="mt-4 text-base leading-relaxed text-(--text2) sm:text-lg">
						Persona combines realistic simulations and intelligent tools in one
						platform, so your team practices the full customer-service workflow.
					</p>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
					{features.map((feature) => (
						<FeatureCard
							key={feature.id}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
							highlights={feature.highlights}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
