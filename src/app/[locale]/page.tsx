import { use } from "react";

import Script from "next/script";

import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { XIcon } from "@/assets/x-icon";

import { socialLinks } from "@/constants/site-config";
import { Certifications } from "@/feature/about/sections/certificates";
import { Cta } from "@/feature/cta";
import { Clients } from "@/feature/home/sections/clients";
import { Faqs } from "@/feature/home/sections/faq";
import { HeroSection } from "@/feature/home/sections/hero";
import { Industries } from "@/feature/home/sections/industries";
import { Services } from "@/feature/home/sections/services";
import WhoWeAre from "@/feature/home/sections/who-we-are";
import { InsightsCarousel } from "@/feature/insights/components/insights";

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

				<section className="relative overflow-hidden py-12 sm:py-16 md:py-20">
					<div className="container max-w-4xl space-y-4 text-center">
						<h2 className="font-display font-semibold text-4xl text-accent-tertiary uppercase sm:text-5xl md:text-6xl lg:text-7xl">
							Built to Empower Efficiency
						</h2>
						<p className="text-balance text-base text-muted-foreground sm:text-lg md:text-xl">
							Maxline turns fragmented workflows into unified strategies.
							Whether you're in the office or across the globe, we're one
							connected force
						</p>
					</div>
					<XIcon className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 scale-80 text-muted-foreground/40" />
				</section>
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
