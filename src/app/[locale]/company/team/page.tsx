import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Suspense } from "react";

import { getTranslations } from "next-intl/server";

import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/custom-button";
import { TEAMS } from "@/constants";
import { siteConfig } from "@/constants/site-config";
import { CompanySection } from "@/feature/about/sections/company";
import { Cta } from "@/feature/cta";

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const PAGE_TITLE = locale === "ar"
    ? "تعرف على فريق ماكسلاين جلوبال - خبراء اللوجستية الذين يقودون التميز في سلسلة التوريد"
    : "Meet the Maxline Global Team - Logistics Experts Driving Supply Chain Excellence";
  
  const PAGE_DESCRIPTION = locale === "ar"
    ? "تعرف على الفريق الخبير وراء ماكسلاين جلوبال. يقدم محترفونا في مجال اللوجستية حلول سلسلة إمداد مبتكرة وفعالة وموثوقة في جميع أنحاء العالم."
    : "Get to know the expert team behind Maxline Global. Our logistics professionals deliver innovative, efficient, and reliable supply chain solutions across the globe.";

  const keywords = locale === "ar"
    ? [
        "فريق ماكسلاين جلوبال",
        "خبراء اللوجستية",
        "فريق الشحن",
        "محترفو سلسلة التوريد",
        "متخصصو اللوجستية",
        "فريق حلول الشحن",
        "خبراء لوجستية مجلس التعاون الخليجي",
        "فريق التخليص الجمركي",
        "متخصصو التخزين",
        "خبراء شحنات المشاريع",
      ]
    : [
        "Maxline Global team",
        "logistics experts",
        "freight forwarding team",
        "supply chain professionals",
        "logistics specialists",
        "freight solutions team",
        "GCC logistics experts",
        "customs clearance team",
        "warehousing specialists",
        "project cargo experts",
      ];

  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords,
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: `${siteConfig.site}/${locale}/company/team`,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/team/team-hero.jpg",
          width: 1200,
          height: 630,
          alt: locale === "ar" 
            ? "فريق ماكسلاين جلوبال - محترفو اللوجستية الخبراء"
            : "Maxline Global Team - Expert Logistics Professionals",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: ["/images/team/team-hero.jpg"],
    },
    alternates: {
      canonical: `${siteConfig.site}/${locale}/company/team`,
      languages: {
        "en": `${siteConfig.site}/en/company/team`,
        "ar": `${siteConfig.site}/ar/company/team`,
      },
    },
  };
}

export default async function TeamPage() {
  const t = await getTranslations("TeamPage");
  return (
    <>
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Maxline Global Team",
            description: t("heroDescription"),
            url: `${siteConfig.site}/company/team`,
            logo: `${siteConfig.site}/logo.png`,
            sameAs: [
              "https://linkedin.com/company/maxlineglobal",
              "https://twitter.com/maxlineglobal",
            ],
            department: {
              "@type": "Organization",
              name: t("departmentName"),
              description: t("departmentDescription"),
            },
          }),
        }}
      />
      <main
        className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl"
        itemScope
        itemType="https://schema.org/Organization"
        role="main"
        aria-label="Team Information"
      >
        <HeroHeader
          subtitle={t("heroSubtitle")}
          title={t("heroTitle")}
          description={t("heroDescription")}
          className="container"
        />
        <meta itemProp="name" content="Maxline Global Team" />
        <meta itemProp="description" content={t("heroDescription")} />
        <meta itemProp="url" content={`${siteConfig.site}/company/team`} />
        <meta itemProp="logo" content={`${siteConfig.site}/logo.png`} />
        <section className="container">
          <h2 className="font-grotesk text-secondary text-center text-5xl">
            <StaggeredText text={t("leadershipTitle")} />
          </h2>
          <ul className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {TEAMS.map((team, i) => (
              <li
                key={`${team.nameKey}-${i}`}
                className="bg-brand-dark overflow-hidden rounded-xl"
              >
                <div className="relative aspect-5/6">
                  <Image
                    src={team.image}
                    fill
                    alt=""
                    className="object-cover"
                  />
                  <div className="from-brand-dark absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t to-transparent" />
                </div>
                <div className="text-background p-2 text-center">
                  <h3 className="font-grotesk text-4xl">
                    {t(team.nameKey as unknown as Parameters<typeof t>[0])}
                  </h3>

                  <p className="font-grotesk text-primary text-xl sm:text-lg">
                    {t(
                      team.designationKey as unknown as Parameters<typeof t>[0]
                    )}
                  </p>
                  {team.link && (
                    <Button
                      label={t("linkedinProfile")}
                      href={team.link}
                      openExternal
                      variant="secondary"
                      className="text-brand-dark mt-2 w-full"
                      textClassName="text-brand-dark"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        {/* <section className="container py-20">
          <h2 className="font-grotesk text-secondary text-center text-5xl">
            <StaggeredText text={t("specialistsTitle")} />
          </h2>
          <ul className="grid grid-cols-4 gap-6 pt-12">
            {Array.from({ length: 14 }).map((item, i) => (
              <li key={i} className="bg-brand-dark overflow-hidden rounded-xl">
                <div className="relative aspect-5/6">
                  <Image
                    src="/images/placeholder.jpg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                  <div className="from-brand-dark absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent" />
                </div>
                <div className="text-background p-2 text-center">
                  <h3 className="font-grotesk text-4xl">{t("personName")}</h3>
                  <p className="font-grotesk text-primary pb-6 text-xl">
                    {t("designation")}
                  </p>
                  <Button
                    label={t("linkedinProfile")}
                    href="/"
                    variant="secondary"
                    className="text-brand-dark w-full"
                    textClassName="text-brand-dark"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section> */}
        <Suspense fallback={<div>Loading...</div>}>
          <CompanySection />
        </Suspense>
        <div className="pt-20">
          <Cta />
        </div>
      </main>
    </>
  );
}
