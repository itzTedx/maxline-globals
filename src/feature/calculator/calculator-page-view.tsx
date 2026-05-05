import { Cta } from "../cta";
import { Services } from "../home/sections/services";
import { CalculatorSection } from "./sections/calculator-section";
import { HeroSection } from "./sections/hero";
import { HowItWorksSection } from "./sections/how-it-works-section";

export const CalculatorPageView = () => {
	return (
		<main>
			<HeroSection />
			<CalculatorSection />
			<HowItWorksSection />
			<Services />
			{/* <ExampleSection /> */}
			{/* <RouteSection /> */}
			{/* <CTASection /> */}
			<Cta />
		</main>
	);
};
