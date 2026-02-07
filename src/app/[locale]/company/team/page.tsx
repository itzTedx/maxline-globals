import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/custom-button";

import { TEAMS } from "@/constants";
import { siteConfig, socialLinks } from "@/constants/site-config";
import { Cta } from "@/feature/cta";
import { Clients } from "@/feature/home/sections/clients";

// Dynamic metadata generation based on locale
export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const t = await getTranslations("meta.team");

	const title = t("title");
	const description = t("description");
	const keywords = t("keywords");

	return {
		title: title,
		description: description,
		keywords,
		openGraph: {
			title: title,
			description: description,
			type: "website",
			url: `${siteConfig.site}/${locale}/company/team`,
			locale: locale === "ar" ? "ar_SA" : "en_US",
			alternateLocale: ["ar_SA", "en_US"],
			siteName: siteConfig.name,
			images: [
				{
					url: "/images/team/team-hero.jpg",
					width: 1200,
					height: 630,
					alt:
						locale === "ar"
							? "فريق ماكسلاين جلوبال - محترفو اللوجستية الخبراء"
							: "Maxline Global Team - Expert Logistics Professionals",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: title,
			description: description,
			images: ["/images/team/team-hero.jpg"],
		},
		alternates: {
			canonical: `${siteConfig.site}/${locale}/company/team`,
			languages: {
				en: `${siteConfig.site}/en/company/team`,
				ar: `${siteConfig.site}/ar/company/team`,
			},
		},
	};
}

export default async function TeamPage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("TeamPage");

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Maxline Global Team",
		description: t("heroDescription"),
		url: `${siteConfig.site}/company/team`,
		logo: `${siteConfig.site}/logo.png`,
		sameAs: [socialLinks.map((link) => link.href)],
		department: {
			"@type": "Organization",
			name: t("departmentName"),
			description: t("departmentDescription"),
		},
	};
	return (
		<>
			<Script id="team-schema" type="application/ld+json">
				{JSON.stringify(structuredData)}
			</Script>
			<main
				aria-label="Team Information"
				className="relative z-10"
				itemScope
				itemType="https://schema.org/Organization"
				role="main"
			>
				<HeroHeader
					className="container"
					description={t("heroDescription")}
					subtitle={t("heroSubtitle")}
					title={t("heroTitle")}
				/>
				<meta content="Maxline Global Team" itemProp="name" />
				<meta content={t("heroDescription")} itemProp="description" />
				<meta content={`${siteConfig.site}/company/team`} itemProp="url" />
				<meta content={`${siteConfig.site}/logo.png`} itemProp="logo" />
				<section className="container">
					<h2 className="text-center font-grotesk text-5xl text-accent-secondary">
						<StaggeredText text={t("leadershipTitle")} />
					</h2>
					<ul className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-4">
						{TEAMS.map((team, i) => (
							<li
								className="overflow-hidden rounded-xl bg-brand-dark"
								key={`${team.nameKey}-${i}`}
							>
								<div className="relative aspect-5/6">
									<Image
										alt=""
										className="object-cover"
										fill
										src={team.image}
									/>
									<div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-brand-dark to-transparent" />
								</div>
								<div className="p-6 text-center text-background">
									<h3 className="font-semibold text-3xl">
										{t(team.nameKey as unknown as Parameters<typeof t>[0])}
									</h3>

									<p className="font-display text-muted/60 text-xl uppercase">
										{t(
											team.designationKey as unknown as Parameters<typeof t>[0]
										)}
									</p>
									{team.link && (
										<Button
											className="mt-2 w-full text-accent-tertiary"
											href={team.link}
											label={t("linkedinProfile")}
											openExternal
											textClassName="text-secondary"
											variant="secondary"
										/>
									)}
								</div>
							</li>
						))}
					</ul>
				</section>

				<Clients />

				<div className="pt-20">
					<Cta />
				</div>
			</main>
		</>
	);
}
