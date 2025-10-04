import { Metadata } from "next";
import Link from "next/link";

import {
  IconArrowRight,
  IconClock,
  IconGlobe,
  IconHeart,
  IconStar,
  IconUsers,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import SpotlightCard from "@/components/animation/spotlight-card";
import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/constants/site-config";

// Dynamic metadata generation based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("meta.careers");

  const title = t("title");
  const description = t("description");
  const keywords = t("keywords");

  const ogTitle = t("title");
  const ogDescription = t("description");

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url: `${siteConfig.site}/${locale}/company/careers`,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: ["ar_SA", "en_US"],
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.image.url,
          width: siteConfig.image.width,
          height: siteConfig.image.height,
          alt: siteConfig.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [siteConfig.image.url],
    },
    alternates: {
      canonical: `${siteConfig.site}/${locale}/company/about`,
      languages: {
        en: `${siteConfig.site}/en/company/about`,
        ar: `${siteConfig.site}/ar/company/about`,
      },
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
  };
}

export default function CareersPage() {
  const t = useTranslations("CareersPage");

  const benefits = t.raw("benefits.list");

  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <HeroHeader
        subtitle={t("hero.subtitle")}
        title={[
          { text: t("hero.title.first") },
          { text: t("hero.title.second"), className: "text-secondary" },
          { text: t("hero.title.third") },
        ]}
        description={t("hero.description")}
        className="container"
      />

      {/* Mission Statement */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="col-span-2 space-y-6">
            <h2 className="font-grotesk text-brand-dark text-3xl md:text-4xl lg:text-5xl">
              <StaggeredText text={t("mission.title")} />
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl">
              {t("mission.description1")}
            </p>
            <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl">
              {t("mission.description2")}
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="space-y-4">
              <h3 className="font-grotesk text-brand-dark text-2xl md:text-3xl">
                {t("mission.whyChoose.title")}
              </h3>
              <ul className="grid gap-4">
                {t
                  .raw("mission.whyChoose.benefits")
                  .map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-secondary rounded-full p-2 text-white">
                        {index === 0 && <IconStar className="size-4" />}
                        {index === 1 && <IconUsers className="size-4" />}
                        {index === 2 && <IconGlobe className="size-4" />}
                        {index === 3 && <IconHeart className="size-4" />}
                      </div>
                      <span className="text-brand-gray">{benefit}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Separator />
      </div>

      {/* Benefits Section */}
      <section className="container py-12 md:py-20">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-grotesk text-brand-dark mb-4 text-3xl md:text-4xl lg:text-5xl">
            <StaggeredText text={t("benefits.title")} />
          </h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(
            (
              benefit: { title: string; description: string },
              index: number
            ) => (
              <SpotlightCard
                key={index}
                spotlightColor="rgba(0, 200, 255, 0.3)"
                className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
              >
                <div className="bg-muted flex size-16 items-center justify-center rounded-full md:size-20">
                  {index === 0 && (
                    <IconStar className="text-brand-gray size-8 stroke-[1.5] md:size-12" />
                  )}
                  {index === 1 && (
                    <IconUsers className="text-brand-gray size-8 stroke-[1.5] md:size-12" />
                  )}
                  {index === 2 && (
                    <IconHeart className="text-brand-gray size-8 stroke-[1.5] md:size-12" />
                  )}
                  {index === 3 && (
                    <IconGlobe className="text-brand-gray size-8 stroke-[1.5] md:size-12" />
                  )}
                  {index === 4 && (
                    <IconClock className="text-brand-gray size-8 stroke-[1.5] md:size-12" />
                  )}
                </div>
                <h5 className="font-grotesk text-brand-dark mt-8 mb-2 text-2xl md:mt-12 md:mb-3 md:text-4xl">
                  {benefit.title}
                </h5>
                <p className="text-sm md:text-base">{benefit.description}</p>
              </SpotlightCard>
            )
          )}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-grotesk text-brand-dark mb-6 text-3xl md:text-4xl lg:text-5xl">
            <StaggeredText text={t("cta.title")} />
          </h2>
          <p className="text-brand-gray mb-8 text-lg leading-relaxed font-light md:text-xl">
            {t("cta.description")}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="btnIcon">
              <Link
                href={`mailto:${t("cta.email")}`}
                className="text-brand-dark group gap-3"
              >
                <LetterSwapPingPong
                  label={t("cta.applyNow")}
                  staggerFrom="first"
                  reverse={false}
                  className="w-full justify-start font-semibold"
                />
                <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
                  <IconArrowRight />
                </div>
              </Link>
            </Button>
            <Button
              asChild
              size="btnIcon"
              variant="secondary"
              className="bg-white"
            >
              <Link
                href={`mailto:${t("cta.email")}`}
                className="text-brand-dark group gap-3"
              >
                <LetterSwapPingPong
                  label={t("cta.emailUs")}
                  staggerFrom="first"
                  reverse={false}
                  className="w-full justify-start font-semibold"
                />
                <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
                  <IconArrowRight />
                </div>
              </Link>
            </Button>
          </div>
          <p className="text-brand-gray mt-4 text-sm">
            {t("cta.resumeText")}{" "}
            <a
              href={`mailto:${t("cta.email")}`}
              className="text-secondary hover:underline"
            >
              {t("cta.email")}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
