import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function LandingPage() {
	// Smooth scrolling for in-page section links, restored when leaving the page.
	useEffect(() => {
		const root = document.documentElement;
		const previous = root.style.scrollBehavior;
		root.style.scrollBehavior = "smooth";

		return () => {
			root.style.scrollBehavior = previous;
		};
	}, []);

	return (
		<div className="min-h-screen bg-(--bg) text-(--text) antialiased">
			<Navbar />
			<main>
				<HeroSection />
				<FeaturesSection />
				<HowItWorksSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
}
