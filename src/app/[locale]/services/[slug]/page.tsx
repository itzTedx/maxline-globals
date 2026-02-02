import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Locale } from "next-intl";
import { getLocale, setRequestLocale } from "next-intl/server";

import SpotlightCard from "@/components/animation/spotlight-card";
import { StaggeredText } from "@/components/animation/staggered-text";
import MarqueeSection, { ServiceMessages } from "@/components/MarqueeSection";

import { socialLinks } from "@/constants/site-config";
import { Cta } from "@/feature/cta";
import { InsightsCarousel } from "@/feature/insights/components/insights";
import { Commitment } from "@/feature/services/commitment";
import { SERVICES } from "@/feature/services/data/constants";
import { Features } from "@/feature/services/features";
import { Hero } from "@/feature/services/hero";

type Params = Promise<{ slug: string; locale: Locale }>;

const slugToKey: Record<string, string> = {
	"land-freight": "landFreight",
	"air-freight": "airFreight",
	"sea-freight": "seaFreight",
	"project-cargo": "projectCargo",
	packing: "packing",
	warehousing: "warehousing",
	"exhibition-cargo": "exhibitionCargo",
	"movers-lashing": "moversLashing",
};

const getServiceMessages = async (locale: string) => {
	if (locale === "ar") {
		return (await import("@/dictionaries/services.ar.json")).default;
	}
	return (await import("@/dictionaries/services.en.json")).default;
};

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const { slug } = await params;
	const locale = await getLocale();
	const messages = await getServiceMessages(locale);
	const t = (key: string) => {
		const keys = key.split(".");
		let value: unknown = messages;
		for (const k of keys) {
			value = (value as Record<string, unknown>)?.[k];
			if (value === undefined) break;
		}
		return typeof value === "string" ? value : key;
	};
	const service = SERVICES.find((s) => s.slug === slug);
	const serviceKey = slugToKey[slug] || slug;

	if (!service)
		return {
			title: "Service not available right now",
		};

	return {
		title: `${t(`${serviceKey}.hero.title`)} - ${t("common.title")}`,
		description: t(`${serviceKey}.hero.description`),
		openGraph: {
			title: t(`${serviceKey}.hero.title`),
			description: t(`${serviceKey}.hero.description`),
			images: [
				{
					url: service.hero.image.src,
					width: 816,
					height: 626,
					alt: service.hero.image.alt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t(`${serviceKey}.hero.title`),
			description: t(`${serviceKey}.hero.description`),
			images: [service.hero.image.src],
		},
	};
}

export async function generateStaticParams() {
	return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Params }) {
	const { slug, locale } = await params;
	setRequestLocale(locale);

	const messages: Record<string, unknown> = await getServiceMessages(locale);
	const t = (key: string) => {
		const keys = key.split(".");
		let value: unknown = messages;
		for (const k of keys) {
			value = (value as Record<string, unknown>)?.[k];
			if (value === undefined) break;
		}
		return typeof value === "string" ? value : key;
	};
	const service = SERVICES.find((s) => s.slug === slug);
	const serviceKey = slugToKey[slug] || slug;

	if (!service) notFound();

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: t(`${serviceKey}.hero.title`),
		description: t(`${serviceKey}.hero.description`),
		provider: {
			"@type": "Organization",
			name: "Maxline Global",
			url: "https://maxlineglobal.com",
		},
		sameAs: [socialLinks.map((link) => link.href)],
		areaServed: [
			"UAE",
			"Saudi Arabia",
			"Oman",
			"Kuwait",
			"Bahrain",
			"Qatar",
			"United Kingdom",
		],
	};

	return (
		<>
			<Script id="structured-data" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<main
				aria-labelledby="page-title"
				className="relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl"
			>
				<Hero
					ctaLink={service.hero.ctaLink}
					ctaText={service.hero.ctaText}
					description={t(`${serviceKey}.hero.description`)}
					image={service.hero.image}
					title={t(`${serviceKey}.hero.title`)}
				/>
				<Features
					features={{
						title: t(`${serviceKey}.features.features.title`),
						description: t(`${serviceKey}.features.features.description`),
						items: service.features.features.items.map((_, i) => ({
							title: t(`${serviceKey}.features.features.items.${i}.title`),
							description: t(
								`${serviceKey}.features.features.items.${i}.description`
							),
						})),
					}}
					overview={{
						title: t(`${serviceKey}.features.overview.title`),
						description: t(`${serviceKey}.features.overview.description`),
					}}
				/>
				<MarqueeSection
					industries={service.industries}
					messages={messages as Record<string, ServiceMessages>}
					serviceKey={serviceKey}
				/>
				<section className="container py-10 md:py-20">
					<h4
						className="container relative z-10 mb-3 max-w-6xl text-balance text-center font-grotesk text-3xl text-brand-gray tracking-tight md:text-6xl/16"
						id="hero-title"
					>
						<StaggeredText
							className="[&>span:nth-child(2)]:text-secondary [&>span:nth-child(3)]:text-secondary [&>span:nth-child(4)]:text-secondary"
							duration={0.7}
							staggerChildren={0.03}
							text={
								t(`${serviceKey}.capabilitiesTitle`) ||
								"Expanded Land Freight Capabilities for Faster, Smarter Delivery"
							}
						/>
					</h4>
					<ul className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 md:gap-2 md:pt-9 lg:grid-cols-3">
						{service.capabilities.map((item, i) => (
							<SpotlightCard
								className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
								key={item.title}
								spotlightColor="rgba(0, 200, 255, 0.3)"
							>
								<div className="flex size-16 items-center justify-center rounded-full bg-muted md:size-20">
									<item.icon className="size-8 stroke-[1.5] text-brand-gray md:size-12" />
								</div>
								<h5 className="mt-8 mb-2 font-grotesk text-2xl text-brand-dark md:mt-12 md:mb-3 md:text-4xl">
									{t(`${serviceKey}.capabilities.${i}.title`)}
								</h5>
								<p className="text-sm md:text-base">
									{t(`${serviceKey}.capabilities.${i}.description`)}
								</p>
							</SpotlightCard>
						))}
					</ul>
				</section>
				<Commitment />
				<InsightsCarousel />
				<Cta />
			</main>
		</>
	);
}
