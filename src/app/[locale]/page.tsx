import { use } from "react";

import Script from "next/script";

import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { socialLinks } from "@/constants/site-config";
import { Certifications } from "@/feature/about/sections/certificates";
import { Cta } from "@/feature/cta";
import { Clients } from "@/feature/home/sections/clients";
import { Faqs } from "@/feature/home/sections/faq";
import { HeroSection } from "@/feature/home/sections/hero";
import { Industries } from "@/feature/home/sections/industries";
import { Services } from "@/feature/home/sections/services";
import { WhoWeAre } from "@/feature/home/sections/who-we-are";
import { InsightsCarousel } from "@/feature/insights/components/insights";
import { ServicesHighlight } from "@/feature/home/sections/services-highlight";

type Props = {
	params: Promise<{ locale: Locale }>;
};

const structuredData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Maxline Global",
	url: "https://maxlineglobal.com",
	logo: "https://maxlineglobal.com/logo.png",
	description:
		"Maxline Global provides comprehensive logistics solutions across land, air, and sea. Our integrated freight services ensure your cargo moves with speed, safety, and precision worldwide.",
	address: {
		"@type": "PostalAddress",
		addressCountry: "US",
	},
	sameAs: [socialLinks.map((link) => link.href)],
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "customer service",
	},
};

export default function Home({ params }: Props) {
	const { locale } = use(params);

	// Enable static rendering
	setRequestLocale(locale);

	return (
		<>
			<main>
				<HeroSection />
				<Clients />
				<WhoWeAre />
				<Services />
				<ServicesHighlight />
				<Certifications />
				<Industries />
				{/* <Features /> */}
				<Faqs />
				<InsightsCarousel />

				{/* <AboutSection />

					<Services />
					<FaqSection />
				*/}

				<Cta />
			</main>

			<Script id="schema-org" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
		</>
	);
}
