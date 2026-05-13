import { Metadata } from "next";
import Script from "next/script";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { HeroHeader } from "@/components/hero-header";

import { SERVICES } from "@/constants";
import { siteConfig } from "@/constants/site-config";
import { Cta } from "@/feature/cta";
import { ServicesGrid } from "@/feature/services/services-grid";
import { organizationSchemaId } from "@/lib/schema/ids";
import { loadServiceMessages } from "@/lib/schema/load-service-messages";
import { serviceDictKeyFromHref } from "@/lib/schema/service-dict-keys";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "ServicesPage" });
	const pageUrl = `${siteConfig.site}/${locale}/services`;
	return {
		title: t("title"),
		description: t("description"),
		keywords: [...siteConfig.keywords, ...t("keywords").split(", ")],
		openGraph: {
			title: t("title"),
			description: t("description"),
			type: "website",
			locale: locale === "ar" ? "ar_SA" : "en_US",
			siteName: siteConfig.name,
			url: pageUrl,
			images: [
				{
					url: "/images/services-og.jpg",
					width: 1200,
					height: 630,
					alt: "Maxline Global Logistics Services",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: ["/images/services-og.jpg"],
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
		alternates: {
			canonical: pageUrl,
			languages: {
				en: `${siteConfig.site}/en/services`,
				ar: `${siteConfig.site}/ar/services`,
			},
		},
	} satisfies Metadata;
}

export default async function ServicesPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("ServicesPage");
	const messages = await loadServiceMessages(locale);

	const pageUrl = `${siteConfig.site}/${locale}/services`;

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: t("title"),
		description: t("description"),
		url: pageUrl,
		provider: {
			"@id": organizationSchemaId(),
		},
		mainEntity: {
			"@type": "ItemList",
			itemListElement: SERVICES.map((service, index) => {
				const slug = service.href.split("/").filter(Boolean).pop() ?? "";
				const dictKey = serviceDictKeyFromHref(service.href);
				const block =
					dictKey && messages[dictKey] && typeof messages[dictKey] === "object"
						? (messages[dictKey] as Record<string, unknown>).schema
						: undefined;
				const schema =
					block && typeof block === "object"
						? (block as Record<string, unknown>)
						: undefined;
				const name =
					(typeof schema?.name === "string" ? schema.name : null) ??
					service.title;
				const description =
					(typeof schema?.description === "string"
						? schema.description
						: null) ?? service.description;

				return {
					"@type": "ListItem",
					position: index + 1,
					item: {
						"@type": "Service",
						name,
						description,
						url: `${siteConfig.site}/${locale}/services/${slug}`,
						image: `${siteConfig.site}${service.image}`,
					},
				};
			}),
		},
	};
	return (
		<>
			<Script id="services-schema" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<main
				className="relative z-10 overflow-hidden"
				itemScope
				itemType="https://schema.org/WebPage"
			>
				<article>
					<HeroHeader
						className="container"
						description={t("description")}
						subtitle={t("subtitle")}
						title={t("mainTitle")}
					/>
					<section
						aria-label={t("ourServices")}
						className="container"
						itemScope
						itemType="https://schema.org/ItemList"
					>
						<ServicesGrid services={SERVICES} />
					</section>
					<Cta />
				</article>
			</main>
		</>
	);
}
