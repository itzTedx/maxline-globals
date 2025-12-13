import { Metadata } from "next";
import Script from "next/script";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { HeroHeader } from "@/components/hero-header";

import { siteConfig, socialLinks } from "@/constants/site-config";
import { getInsights } from "@/feature/insights/actions/query";
import type { InsightMetadata } from "@/feature/insights/actions/types";
import { InsightCard } from "@/feature/insights/components/insight-card";

// Dynamic metadata generation based on locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "ar" ? "الرؤى والأخبار | ماكسلاين جلوبال لوجستكس" : "Insights & News | Maxline Global Logistics";

  const description =
    locale === "ar"
      ? "اكتشف الرؤى والاتجاهات والمنظورات الخبيرة التي تشكل مستقبل اللوجستية العالمية. من ابتكارات سلسلة التوريد إلى حلول الشحن، ابق على اطلاع بالأفكار التي تدفع الأعمال إلى الأمام."
      : "Discover insights, trends, and expert perspectives shaping the future of global logistics. From supply chain innovations to freight solutions, stay informed with the ideas that move businesses forward.";

  return {
    title,
    description,
    openGraph: {
      title,
      description:
        locale === "ar"
          ? "اكتشف الرؤى والاتجاهات والمنظورات الخبيرة التي تشكل مستقبل اللوجستية العالمية."
          : "Discover insights, trends, and expert perspectives shaping the future of global logistics.",
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
      siteName: "Maxline Global Logistics",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        locale === "ar"
          ? "اكتشف الرؤى والاتجاهات والمنظورات الخبيرة التي تشكل مستقبل اللوجستية العالمية."
          : "Discover insights, trends, and expert perspectives shaping the future of global logistics.",
    },
    alternates: {
      canonical: `https://www.maxlineglobal.com/${locale}/insights`,
      languages: {
        en: "https://www.maxlineglobal.com/en/insights",
        ar: "https://www.maxlineglobal.com/ar/insights",
      },
    },
  };
}

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");
  const insights = await getInsights({ locale });

  const structuredData = buildInsightsStructuredData({
    description: t("insights.description"),
    insights,
    locale,
  });
  const sectionDescriptionId = "insights-grid-description";

  return (
    <>
      <Script id={`insights-collection-schema-${locale}`} type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <main className="container relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl">
        <HeroHeader
          description={t("insights.description")}
          subtitle={t("insights.label")}
          title={t.rich("insights.title")}
        />
        <p className="sr-only" id={sectionDescriptionId}>
          {`${t("insights.label")} (${insights.length})`}
        </p>
        <section
          aria-describedby={sectionDescriptionId}
          aria-label="Insights and Articles"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {insights.map((insight) => (
            <InsightCard data={insight} key={insight.slug} />
          ))}
        </section>
      </main>
    </>
  );
}

function buildInsightsStructuredData({
  description,
  insights,
  locale,
}: {
  description: string;
  insights: InsightMetadata[];
  locale: Locale;
}) {
  const pageUrl = `${siteConfig.site}/${locale}/insights`;
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Insights`,
    description,
    url: pageUrl,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.site}/logo.png`,
      },
    },
    sameAs: [socialLinks.map((link) => link.href)],
    blogPost: insights.map((insight) => ({
      "@type": "BlogPosting",
      headline: insight.title,
      description: insight.description,
      image: insight.thumbnail,
      keywords: insight.keywords,
      datePublished: new Date(insight.date).toISOString(),
      url: `${pageUrl}/${insight.slug}`,
    })),
  };
}
