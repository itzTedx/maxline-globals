import { Metadata } from "next";

import { IconClock, IconPackage, IconUsers } from "@tabler/icons-react";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import SpotlightCard from "@/components/animation/spotlight-card";
import { HeroHeader } from "@/components/hero-header";

import { Cta } from "@/feature/cta";
import { QuoteForm } from "@/feature/forms/quote-form";
import { Faqs } from "@/feature/home/sections/faq";

// Dynamic metadata generation based on locale
export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const title =
		locale === "ar"
			? "احصل على عرض أسعار لوجستي | ماكسلاين جلوبال"
			: "Get a Logistics Quote | Maxline Global";

	const description =
		locale === "ar"
			? "احصل على عرض أسعار لوجستي مخصص من ماكسلاين جلوبال. حلول شحن سريعة وآمنة وذكية عبر البر والجو والبحر مع إرشاد الخبراء."
			: "Get a personalized logistics quote from Maxline Global. Fast, safe, and smart cargo solutions for land, air, and sea freight with expert guidance.";

	const keywords =
		locale === "ar"
			? "عرض أسعار لوجستي، شحن بضائع، خدمات الشحن، دعم الجمارك، التخزين، الشحن الجوي، الشحن البحري، الشحن البري"
			: "logistics quote, cargo shipping, freight services, customs support, warehousing, air freight, sea freight, land freight";

	return {
		title,
		description,
		keywords: keywords.split(", "),
		openGraph: {
			title,
			description,
			type: "website",
			locale: locale === "ar" ? "ar_SA" : "en_US",
			alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
		},
		alternates: {
			canonical: `https://www.maxlineglobal.com/${locale}/quote`,
			languages: {
				en: "https://www.maxlineglobal.com/en/quote",
				ar: "https://www.maxlineglobal.com/ar/quote",
			},
		},
	};
}

export default async function QuotePage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("QuotePage");

	const features = [
		{
			title: t("features.allInOne.title"),
			description: t("features.allInOne.description"),
			icon: IconPackage,
		},
		{
			title: t("features.fastResponse.title"),
			description: t("features.fastResponse.description"),
			icon: IconClock,
		},
		{
			title: t("features.expertGuidance.title"),
			description: t("features.expertGuidance.description"),
			icon: IconUsers,
		},
	];

	return (
		<main className="relative z-10">
			<header className="container grid grid-cols-1 gap-3 pb-3 md:grid-cols-3">
				<HeroHeader
					className="col-span-1 mx-0 px-0 py-0 text-start md:col-span-2 lg:py-0 lg:pt-20 lg:pb-6"
					description={t("hero.description")}
					descriptionClassName="mb-6"
					isLogo={false}
					subtitle={t("hero.subtitle")}
					title={[
						{ text: t("hero.title1") },
						{
							text: t("hero.title2"),
							className: "text-accent-secondary",
						},
					]}
					titleClassName="text-3xl lg:text-[4.5rem] mb-6 max-w-xl"
				/>
			</header>

			<section aria-label="Quote Form">
				<QuoteForm />
			</section>

			<section aria-label="Our Features" className="relative z-10">
				<h2 className="pt-10 pb-6 text-center font-display font-semibold text-2xl text-accent-tertiary uppercase tracking-wide md:pt-20 md:pb-9 md:text-6xl">
					{t("features.sectionTitle")}
				</h2>
				<ul className="container relative z-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
					{features.map((item) => (
						<SpotlightCard
							className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
							key={item.title}
							spotlightColor="rgba(0, 200, 255, 0.3)"
						>
							<div className="flex size-16 items-center justify-center rounded-full bg-muted md:size-20">
								<item.icon
									aria-hidden="true"
									className="size-10 stroke-[1.5] text-brand-gray md:size-12"
								/>
							</div>
							<h3 className="mt-8 mb-3 font-display font-semibold text-2xl text-accent-tertiary uppercase tracking-wide md:mt-12 md:text-4xl">
								{item.title}
							</h3>
							<p className="text-sm md:text-base">{item.description}</p>
						</SpotlightCard>
					))}
				</ul>
				<div className="absolute inset-0 bg-linear-to-t from-secondary" />
			</section>

			<Faqs />

			<Cta />
		</main>
	);
}
