import { Metadata } from "next";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { StaggeredText } from "@/components/animation/staggered-text";

import { Cta } from "@/feature/cta";

// Dynamic metadata generation based on locale
export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const title =
		locale === "ar"
			? "تتبع شحنتك | ماكسلاين جلوبال"
			: "Track Your Shipment | Maxline Global";

	const description =
		locale === "ar"
			? "تتبع حالة شحنتك مع نظام التتبع الفوري لماكسلاين جلوبال. احصل على تحديثات فورية حول موقع شحنتك وحالة التسليم."
			: "Track your shipment status with Maxline Global's real-time tracking system. Get instant updates on your cargo's location and delivery status.";

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			locale: locale === "ar" ? "ar_SA" : "en_US",
			alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
		},
		alternates: {
			canonical: `https://www.maxlineglobal.com/${locale}/track-shipment`,
			languages: {
				en: "https://www.maxlineglobal.com/en/track-shipment",
				ar: "https://www.maxlineglobal.com/ar/track-shipment",
			},
		},
	};
}

export default async function TrackingRedirect({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations("TrackingPage");
	return (
		<main
			className="relative z-10 overflow-hidden rounded-b-3xl bg-background pb-20 shadow-xl"
			itemScope
			itemType="https://schema.org/WebPage"
		>
			<div className="py-10 md:py-16">
				<h1 className="mx-auto max-w-4xl text-center font-grotesk text-4xl text-brand-dark tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
					<StaggeredText
						duration={0.3}
						staggerChildren={0.01}
						text={t("title")}
					/>
				</h1>
				<p className="mx-auto mt-4 max-w-5xl text-center text-lg text-muted-foreground tracking-tight">
					<StaggeredText
						duration={0.3}
						staggerChildren={0.01}
						text={t("description")}
					/>
				</p>

				{/* <div className="mt-8" role="search" aria-label="Track your shipment">
          <TrackingInput />
        </div> */}
			</div>
			<div className="mx-auto mt-4 mb-6 max-w-5xl text-center text-lg tracking-tight">
				<p>
					<StaggeredText
						delay={0.5}
						duration={0.3}
						staggerChildren={0.01}
						text={t("assistance")}
					/>
				</p>
			</div>
			<Cta />
		</main>
	);
}

// export default function TrackingRedirect() {
//   return (
//     <Suspense>
//       <RedirectWithLoading />;
//     </Suspense>
//   );
// }
