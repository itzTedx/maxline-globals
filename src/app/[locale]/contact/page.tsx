import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { LocationCard } from "@/components/location-card";

import { XIcon } from "@/assets/x-icon";

import { HEAD_LOCATION, LOCATIONS } from "@/constants";
import { siteConfig, socialLinks } from "@/constants/site-config";
import { Cta } from "@/feature/cta";
import { ContactForm } from "@/feature/forms/contact-form";

// Dynamic metadata generation based on locale
export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations("meta.contact");

	const title = t("title");
	const description = t("description");
	const keywords = t("keywords");

	const SITE_URL = siteConfig.site;
	const HEADQUARTERS_IMAGE = "/images/head-office.webp";

	const openGraphData = {
		title,
		description,
		type: "website",
		locale: locale === "ar" ? "ar_SA" : "en_US",
		alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
		siteName: siteConfig.name,
		images: [
			{
				url: HEADQUARTERS_IMAGE,
				width: siteConfig.image.width,
				height: siteConfig.image.height,
				alt: siteConfig.image.alt,
			},
		],
	};

	const twitterData = {
		card: "summary_large_image",
		title,
		description,
		images: [HEADQUARTERS_IMAGE],
	};

	const robotsData = {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large" as const,
			"max-snippet": -1,
		},
	};

	return {
		title,
		description,
		keywords: [...siteConfig.keywords, keywords],
		openGraph: openGraphData,
		twitter: twitterData,
		robots: robotsData,
		alternates: {
			canonical: `${SITE_URL}/${locale}/contact`,
			languages: {
				en: `${SITE_URL}/en/contact`,
				ar: `${SITE_URL}/ar/contact`,
			},
		},
	};
}

export default async function ContactPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("ContactPage");

	const SITE_URL = siteConfig.site;
	const HEADQUARTERS_IMAGE = "/images/head-office.webp";

	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: siteConfig.name,
		url: SITE_URL,
		logo: `${SITE_URL}/images/logo.png`,
		description: siteConfig.description,
		contactPoint: [
			{
				"@type": "ContactPoint",
				telephone: "+971-4-123-4567",
				contactType: "customer service",
				areaServed: "AE",
				availableLanguage: ["English", "Arabic"],
			},
		],
		address: {
			"@type": "PostalAddress",
			streetAddress: "P.O. Box: 232939, Jebel Ali Free Zone",
			addressLocality: "Dubai",
			addressCountry: "AE",
		},
		sameAs: [socialLinks.map((link) => link.href)],
	};

	return (
		<>
			<Script id="structured-data" type="application/ld+json">
				{JSON.stringify(organizationSchema)}
			</Script>
			<main className="relative z-10" role="main">
				<article className="container grid grid-cols-1 gap-4 py-10 md:py-20 lg:grid-cols-2">
					<header className="z-10 h-fit px-0 py-0 text-start md:sticky md:top-[20vh]">
						<HeroHeader
							className="z-10 h-fit px-0 py-0 text-start md:sticky md:top-[20vh]"
							description={t("heroDescription")}
							isLogo={false}
							subtitle={t("subtitle")}
							title={[
								{ text: t("heroTitle1") },
								{
									text: t("heroTitle2"),
									className: "text-accent-secondary",
								},
								{ text: t("heroTitle3") },
							]}
							titleClassName="text-3xl md:text-4xl lg:text-[4rem]/18 mb-6"
						/>
					</header>

					<section
						aria-labelledby="contact-locations"
						className="relative space-y-6 md:space-y-9"
					>
						<h2 className="sr-only" id="contact-locations">
							{t("contactLocations")}
						</h2>

						<article className="relative overflow-hidden rounded-2xl p-6 md:p-12">
							<div className="relative z-10">
								<h3 className="mb-1 font-display font-semibold text-2xl text-accent uppercase tracking-wide md:text-3xl">
									{t("corporateHeadquarters")}
								</h3>
								<address className="font-medium text-lg text-white not-italic md:text-2xl">
									{t("hqAddress")}
								</address>
							</div>
							<Image
								alt={t("hqImageAlt")}
								className="object-cover"
								fill
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								src={HEADQUARTERS_IMAGE}
							/>
						</article>

						<section aria-labelledby="contact-form-title">
							<h2 className="sr-only" id="contact-form-title">
								{t("contactForm")}
							</h2>
							<ContactForm />
						</section>

						<XIcon
							aria-hidden="true"
							className="absolute right-0 -bottom-1/4 hidden -translate-y-1/4 opacity-20 md:block"
						/>
					</section>
				</article>

				<figure className="relative my-10 h-48 w-full md:my-20 md:h-72">
					<Image
						alt={t("contactImageAlt")}
						className="object-cover"
						fill
						sizes="100vw"
						src="/images/contact-container.webp"
					/>
					<figcaption className="sr-only">
						{t("contactImageCaption")}
					</figcaption>
				</figure>
				<section className="container md:max-w-6xl">
					<h3 className="mx-auto max-w-lg text-center font-display font-semibold text-2xl text-accent-tertiary uppercase tracking-wide md:text-4xl lg:text-6xl">
						<StaggeredText
							className="[&>span:nth-child(-n+2)]:text-accent-secondary"
							text={t("aroundWorldTitle")}
						/>
					</h3>
					<p className="mx-auto max-w-4xl text-balance pt-2 text-center font-light text-brand-gray text-lg md:pt-4 md:text-xl lg:text-2xl">
						<StaggeredText text={t("aroundWorldDescription")} />
					</p>
					<ul className="grid grid-cols-1 gap-9 pt-12 sm:grid-cols-2">
						{HEAD_LOCATION.map((loc, index) => (
							<LocationCard
								key={`${loc.title}-${index}`}
								labels={{
									emailLabel: t("emailLabel"),
									mobileLabel: t("mobileLabel"),
									phoneLabel: t("phoneLabel"),
									viewInMap: t("viewInMap"),
								}}
								location={loc}
							/>
						))}
					</ul>
				</section>
				<section className="container py-20">
					<h3 className="mx-auto max-w-lg text-center font-display font-semibold text-2xl text-accent-tertiary uppercase tracking-wide md:text-4xl lg:text-6xl">
						<StaggeredText text={t("branchesTitle")} />
					</h3>

					<ul className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3">
						{LOCATIONS.map((loc, index) => (
							<LocationCard
								key={`${loc.title}-${index}`}
								labels={{
									emailLabel: t("emailLabel"),
									mobileLabel: t("mobileLabel"),
									phoneLabel: t("phoneLabel"),
									viewInMap: t("viewInMap"),
								}}
								location={loc}
							/>
						))}
					</ul>
				</section>

				<section className="container py-10 md:py-16 lg:py-20">
					<div className="mx-auto max-w-7xl space-y-3">
						<h2 className="font-semibold text-accent-secondary text-xs uppercase tracking-[0.18em] md:text-sm">
							Max Line Global Vaahika Limited
						</h2>
						<div className="space-y-3 text-brand-gray text-xs leading-relaxed md:text-sm">
							<p className="text-justify">
								Max Line Global Vaahika Limited is a professionally managed
								logistics and freight solutions organization with a strong
								operational presence in India. The company originally commenced
								operations in 2013 under the name Max Line Inc., building a
								reputation for reliability, service excellence, and
								customer-focused logistics solutions.
							</p>
							<p className="text-justify">
								In recognition of its sustained business growth, expanding
								service portfolio, and the continued trust of its clients and
								partners, the organization was restructured in 2021 and formally
								incorporated as a Public Limited Company under the name Max Line
								Global Vaahika Limited. This transition marked a significant
								milestone in the company&apos;s journey toward greater scale,
								stronger governance, and enhanced global capabilities.
							</p>
							<p className="text-justify">
								Max Line India is also registered under the Ministry of Micro,
								Small &amp; Medium Enterprises (MSME), Government of India,
								holding Udyam Registration No.: Udyam-MH-17-0031335, reflecting
								its recognized contribution to India&apos;s growing logistics
								and trade ecosystem.
							</p>
							<p className="text-justify">
								With a commitment to operational excellence, regulatory
								compliance, and customer satisfaction, Max Line continues to
								deliver dependable, efficient, and scalable logistics solutions
								to clients across diverse industries.
							</p>
						</div>
					</div>
				</section>
				<Cta />
			</main>
		</>
	);
}
