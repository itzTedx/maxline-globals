import { Metadata } from "next";
import Script from "next/script";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { siteConfig } from "@/constants/site-config";
import { Certifications } from "@/feature/about/sections/certificates";
import { AboutHeroSection } from "@/feature/about/sections/hero";
import { Principles } from "@/feature/about/sections/principles";
import { WhoWeAre } from "@/feature/about/sections/who-we-are";
import { Cta } from "@/feature/cta";
import { Clients } from "@/feature/home/sections/clients";
import { Faqs } from "@/feature/home/sections/faq";
import { organizationSchemaId } from "@/lib/schema/ids";

// Dynamic metadata generation based on locale
export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations("meta.about");

	const title = t("title");
	const description = t("description");
	const keywords = t("keywords");

	const ogTitle = t("title");
	const ogDescription = t("description");

	return {
		title,
		description,
		keywords,
		openGraph: {
			title: ogTitle,
			description: ogDescription,
			type: "website",
			url: `${siteConfig.site}/${locale}/company/about`,
			locale: locale === "ar" ? "ar_SA" : "en_US",
			alternateLocale: ["ar_SA", "en_US"],
			siteName: siteConfig.name,
			images: [
				{
					url: siteConfig.image.url,
					width: siteConfig.image.width,
					height: siteConfig.image.height,
					alt: siteConfig.image.alt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: ogTitle,
			description: ogDescription,
			images: [siteConfig.image.url],
		},
		alternates: {
			canonical: `${siteConfig.site}/${locale}/company/about`,
			languages: {
				en: `${siteConfig.site}/en/company/about`,
				ar: `${siteConfig.site}/ar/company/about`,
			},
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

interface Props {
	params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: Props) {
	const { locale } = await params;
	setRequestLocale(locale);

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "AboutPage",
		name: "About Maxline Global",
		description:
			"Learn about Maxline Global's history, leadership, values, and commitment to excellence in logistics and freight forwarding.",
		url: `${siteConfig.site}/${locale}/company/about`,
		publisher: {
			"@id": organizationSchemaId(),
		},
		mainEntity: {
			"@id": organizationSchemaId(),
		},
	};
	return (
		<>
			<Script id="about-schema" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<main className="relative z-10">
				<article>
					<AboutHeroSection />

					<WhoWeAre />

					<Principles />
					<Clients />
					<Certifications />
					{/* <CompanySection /> */}

					{/* <LeaderWords /> */}
					<Faqs />

					<Cta />
				</article>
			</main>
		</>
	);
}
