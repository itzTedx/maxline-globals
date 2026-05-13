import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import MDXContent from "@/components/markdown/mdx-component";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/constants/site-config";
import {
	getInsightBySlug,
	getInsights,
} from "@/feature/insights/actions/query";
import type { Insight } from "@/feature/insights/actions/types";
import { routing } from "@/i18n/routing";
import { organizationSchemaId } from "@/lib/schema/ids";
import { formatInsightDate } from "@/lib/utils";

interface Props {
	params: Promise<{ slug: string; locale: Locale }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug, locale } = await params;
	const insight = getInsightBySlug(slug, { locale });

	if (!insight)
		return {
			title: "Insight not found",
		};

	const pageUrl = `${siteConfig.site}/${locale}/insights/${slug}`;
	const openGraphLocale = getOpenGraphLocale(locale);
	const languages = buildLanguageAlternates(slug);
	const publishedTime = new Date(insight.metadata.date).toISOString();
	const alternateLocale = routing.locales
		.filter((value) => value !== locale)
		.map((value) => getOpenGraphLocale(value as Locale));

	return {
		title: insight.metadata.title,
		description: insight.metadata.description,
		keywords: insight.metadata.keywords,
		alternates: {
			canonical: pageUrl,
			languages,
		},
		openGraph: {
			title: insight.metadata.title,
			description: insight.metadata.description,
			url: pageUrl,
			siteName: siteConfig.name,
			locale: openGraphLocale,
			alternateLocale,
			type: "article",
			publishedTime,
			modifiedTime: publishedTime,
			images: [
				{
					url: insight.metadata.thumbnail,
					alt: insight.metadata.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: insight.metadata.title,
			description: insight.metadata.description,
			images: [insight.metadata.thumbnail],
		},
		other: {
			"article:section": insight.metadata.category,
		},
	};
}

export async function generateStaticParams({ params }: Props) {
	const { locale } = await params;
	const insights = getInsights({ locale });

	return insights.map((insight) => ({
		slug: insight.slug,
		locale,
	}));
}

export default async function InsightsSlugPage({ params }: Props) {
	const { slug, locale } = await params;
	setRequestLocale(locale);

	const navigationT = await getTranslations("Navigation");
	const insight = getInsightBySlug(slug, { locale });

	if (!insight) return notFound();

	const structuredDataGraph = buildInsightArticleGraph({
		insight,
		locale,
		homeLabel: navigationT("home"),
		insightsLabel: navigationT("insights"),
	});
	const gridDescriptionId = "article-content-description";

	return (
		<>
			<Script id={`insight-structured-data-${slug}`} type="application/ld+json">
				{JSON.stringify(structuredDataGraph)}
			</Script>

			<main className="container relative z-10 pb-20">
				<HeroHeader
					breadcrumb={
						<nav
							aria-label="Breadcrumb"
							className="container mx-auto mb-3 flex items-center justify-center gap-2 text-muted-foreground text-sm md:text-base lg:text-lg"
						>
							<ol className="flex flex-wrap items-center gap-2">
								<li>
									<Link
										className="transition hover:text-accent-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
										href={`/${locale}`}
									>
										{navigationT("home")}
									</Link>
								</li>
								<li aria-hidden="true">/</li>
								<li>
									<Link
										className="transition hover:text-accent-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
										href={`/${locale}/insights`}
									>
										{navigationT("insights")}
									</Link>
								</li>
								<li aria-hidden="true">/</li>
								<li>Event</li>
								<li
									aria-current="page"
									className="hidden"
									title={insight.metadata.title}
								>
									{insight.metadata.title}
								</li>
							</ol>
						</nav>
					}
					className="mx-auto max-w-6xl"
					description={insight.metadata.description}
					descriptionClassName="text-sm sm:text-lg md:text-xl"
					// subtitle={insight.metadata.category ?? 'Insights & News'}
					// subtitleClassName="text-xs text-muted-foreground uppercase tracking-wide sm:text-sm"
					title={insight.metadata.title}
					titleClassName="lg:text-6xl text-balance"
				>
					<p className="mt-4 text-muted-foreground">
						<StaggeredText
							duration={0.7}
							staggerChildren={0.03}
							text={formatInsightDate(insight.metadata.date, locale)}
						/>
					</p>
				</HeroHeader>
				<figure
					aria-describedby={gridDescriptionId}
					className="container relative -mt-12 mb-20 aspect-video max-w-7xl overflow-hidden rounded-3xl"
				>
					<Image
						alt={`${insight.metadata.title} cover image`}
						className="object-cover"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
						src={insight.metadata.thumbnail}
					/>
					<figcaption className="sr-only" id={gridDescriptionId}>
						{insight.metadata.description}
					</figcaption>
				</figure>
				<article className="prose sm:prose-lg prose-base lg:prose-xl mx-auto max-w-prose prose-headings:text-accent-tertiary prose-li:marker:text-brand-gray/50">
					<MDXContent
						components={{
							Image: (props) => (
								<Image {...props} className="rounded-lg shadow-lg" />
							),
							Link,
							Button: (props) => (
								<Button asChild {...props}>
									<Link
										className="not-prose"
										href={props.href}
										rel="noreferrer noopener"
										target="_blank"
									>
										{props.children}
									</Link>
								</Button>
							),
						}}
						source={insight.content}
					/>
				</article>
			</main>
		</>
	);
}

function buildLanguageAlternates(slug: string) {
	return routing.locales.reduce<Record<string, string>>((acc, locale) => {
		acc[locale] = `${siteConfig.site}/${locale}/insights/${slug}`;
		return acc;
	}, {});
}

function getOpenGraphLocale(locale: Locale) {
	return locale === "ar" ? "ar_SA" : "en_US";
}

function buildInsightArticleGraph({
	insight,
	locale,
	homeLabel,
	insightsLabel,
}: {
	insight: Insight;
	locale: Locale;
	homeLabel: string;
	insightsLabel: string;
}) {
	const pageUrl = `${siteConfig.site}/${locale}/insights/${insight.metadata.slug}`;
	const webPageId = `${pageUrl}#webpage`;
	const baseLocaleUrl = `${siteConfig.site}/${locale}`;
	const published = new Date(insight.metadata.date).toISOString();

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebPage",
				"@id": webPageId,
				url: pageUrl,
				name: insight.metadata.title,
				description: insight.metadata.description,
				inLanguage: locale,
				isPartOf: {
					"@type": "WebSite",
					"@id": `${baseLocaleUrl}#website`,
					url: baseLocaleUrl,
					name: siteConfig.name,
					publisher: { "@id": organizationSchemaId() },
				},
			},
			{
				"@type": "Article",
				"@id": `${pageUrl}#article`,
				headline: insight.metadata.title,
				description: insight.metadata.description,
				image: [insight.metadata.thumbnail],
				keywords: insight.metadata.keywords,
				articleSection: insight.metadata.category,
				inLanguage: locale,
				datePublished: published,
				dateModified: published,
				mainEntityOfPage: { "@id": webPageId },
				author: { "@id": organizationSchemaId() },
				publisher: { "@id": organizationSchemaId() },
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: [
					{
						"@type": "ListItem",
						position: 1,
						name: homeLabel,
						item: baseLocaleUrl,
					},
					{
						"@type": "ListItem",
						position: 2,
						name: insightsLabel,
						item: `${baseLocaleUrl}/insights`,
					},
					{
						"@type": "ListItem",
						position: 3,
						name: insight.metadata.title,
						item: pageUrl,
					},
				],
			},
		],
	};
}
