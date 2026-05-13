import Script from "next/script";

import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { Certifications } from "@/feature/about/sections/certificates";
import { Cta } from "@/feature/cta";
import { Clients } from "@/feature/home/sections/clients";
import { Faqs } from "@/feature/home/sections/faq";
import { HeroSection } from "@/feature/home/sections/hero";
import { Industries } from "@/feature/home/sections/industries";
import { Services } from "@/feature/home/sections/services";
import { ServicesHighlight } from "@/feature/home/sections/services-highlight";
import { WhoWeAre } from "@/feature/home/sections/who-we-are";
import { InsightsCarousel } from "@/feature/insights/components/insights";
import { buildHomeStructuredDataGraph } from "@/lib/schema/home-json-ld";
import { loadServiceMessages } from "@/lib/schema/load-service-messages";

type Props = {
	params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
	const { locale } = await params;

	setRequestLocale(locale);

	const serviceMessages = await loadServiceMessages(locale);
	const homeStructuredData = buildHomeStructuredDataGraph(
		locale,
		serviceMessages
	);

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

				{/* 
					<AboutSection />
					<Services />
					<FaqSection />
				*/}

				<Cta />
			</main>

			<Script id="home-website-offer-catalog-schema" type="application/ld+json">
				{JSON.stringify(homeStructuredData)}
			</Script>
		</>
	);
}
