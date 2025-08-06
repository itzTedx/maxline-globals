import { Metadata } from "next";

import { IconClock, IconPackage, IconUsers } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

import SpotlightCard from "@/components/animation/spotlight-card";
import { HeroHeader } from "@/components/hero-header";
import { Cta } from "@/feature/cta";
import { QuoteForm } from "@/feature/forms/quote-form";
import { FaqSection } from "@/feature/home/sections/faq";

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === "ar" 
    ? "احصل على عرض أسعار لوجستي | ماكسلاين جلوبال"
    : "Get a Logistics Quote | Maxline Global";
  
  const description = locale === "ar"
    ? "احصل على عرض أسعار لوجستي مخصص من ماكسلاين جلوبال. حلول شحن سريعة وآمنة وذكية عبر البر والجو والبحر مع إرشاد الخبراء."
    : "Get a personalized logistics quote from Maxline Global. Fast, safe, and smart cargo solutions for land, air, and sea freight with expert guidance.";
  
  const keywords = locale === "ar"
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
        "en": "https://www.maxlineglobal.com/en/quote",
        "ar": "https://www.maxlineglobal.com/ar/quote",
      },
    },
  };
}

export default function QuotePage() {
  const t = useTranslations("QuotePage");

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
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <header className="container grid grid-cols-1 gap-3 pb-3 md:grid-cols-3">
        <HeroHeader
          className="col-span-1 mx-0 px-0 py-0 text-start md:col-span-2 lg:py-0 lg:pt-20 lg:pb-6"
          subtitle={t("hero.subtitle")}
          title={[
            { text: t("hero.title1") },
            {
              text: t("hero.title2"),
              className: "text-secondary",
            },
          ]}
          titleClassName="text-3xl lg:text-[4.5rem] mb-6 max-w-xl"
          description={t("hero.description")}
          descriptionClassName="mb-6"
          isLogo={false}
        />
      </header>

      <section aria-label="Quote Form">
        <QuoteForm />
      </section>

      <section className="container" aria-label="Our Features">
        <h2 className="font-grotesk text-brand-dark pt-10 pb-6 text-center text-4xl md:pt-20 md:pb-9 md:text-6xl">
          {t("features.sectionTitle")}
        </h2>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <SpotlightCard
              key={item.title}
              spotlightColor="rgba(0, 200, 255, 0.3)"
              className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
            >
              <div className="bg-muted flex size-16 items-center justify-center rounded-full md:size-20">
                <item.icon
                  className="text-brand-gray size-10 stroke-[1.5] md:size-12"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-grotesk text-brand-dark mt-8 mb-3 text-2xl md:mt-12 md:text-4xl">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">{item.description}</p>
            </SpotlightCard>
          ))}
        </ul>
      </section>

      <FaqSection />

      <Cta />
    </main>
  );
}
