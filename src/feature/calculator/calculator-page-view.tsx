import { Cta } from "../cta";
import { Services } from "../home/sections/services";
import { BenefitsSection } from "./sections/benifits";
import { CalculatorSection } from "./sections/calculator-section";
import { HeroSection } from "./sections/hero";
import { HowItWorksSection } from "./sections/how-it-works-section";
import { WhyThisMattersSection } from "./sections/why-matters-section";

export const CalculatorPageView = () => {
	return (
		<main>
			<HeroSection />
			<CalculatorSection />
			<HowItWorksSection />
			<WhyThisMattersSection />
			<Services />
			<BenefitsSection />
			{/* <ExampleSection /> */}
			{/* <RouteSection /> */}
			{/* <CTASection /> */}
			<Cta />
		</main>
	);
};
