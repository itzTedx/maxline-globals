import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/custom-button";

import { XIcon } from "@/assets/x-icon";

import { HEAD_LOCATION, LOCATIONS } from "@/constants";
import { siteConfig, socialLinks } from "@/constants/site-config";
import { Cta } from "@/feature/cta";
import { ContactForm } from "@/feature/forms/contact-form";

// Dynamic metadata generation based on locale
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations("meta.about");

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

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
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
      <main className="relative z-10 rounded-b-3xl bg-background pb-20 shadow-xl" role="main">
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
                  className: "text-secondary",
                },
                { text: t("heroTitle3") },
              ]}
              titleClassName="text-3xl md:text-4xl lg:text-[4rem]/18 mb-6"
            />
          </header>

          <section aria-labelledby="contact-locations" className="relative space-y-6 md:space-y-9">
            <h2 className="sr-only" id="contact-locations">
              {t("contactLocations")}
            </h2>

            <article className="relative overflow-hidden rounded-2xl p-6 md:p-12">
              <div className="relative z-10">
                <h3 className="mb-1 text-primary text-xl md:text-2xl">{t("corporateHeadquarters")}</h3>
                <address className="font-medium text-lg text-white not-italic md:text-2xl">
                  {t("hqAddress")}
                  {/* Maxline LLC, Mina Jebel Ali, Dubai Aid City, Dubai - United
                  Arab Emirates */}
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

            <XIcon aria-hidden="true" className="-bottom-1/4 -translate-y-1/4 absolute right-0 hidden md:block" />
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
          <figcaption className="sr-only">{t("contactImageCaption")}</figcaption>
        </figure>
        <section className="container md:max-w-6xl">
          <h3 className="mx-auto max-w-lg text-center font-grotesk text-2xl text-brand-dark md:text-4xl lg:text-6xl">
            <StaggeredText className="[&>span:nth-child(-n+2)]:text-secondary" text={t("aroundWorldTitle")} />
          </h3>
          <p className="mx-auto max-w-4xl text-balance pt-2 text-center font-light text-brand-gray text-lg md:pt-4 md:text-xl lg:text-2xl">
            <StaggeredText text={t("aroundWorldDescription")} />
          </p>
          <ul className="grid grid-cols-1 gap-9 pt-12 sm:grid-cols-2">
            {HEAD_LOCATION.map((loc, index) => (
              <li className="group overflow-hidden rounded-2xl bg-white" key={`${loc.title}-${index}`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    alt=""
                    className="object-cover transition-transform duration-500 group-hover:scale-125"
                    fill
                    src={loc.image}
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="pb-2 font-light text-brand-dark" dir="ltr">
                    <StaggeredText text={loc.title} />
                  </p>
                  <h4 className="px-4 pb-4 font-grotesk text-2xl text-secondary" dir="ltr">
                    <StaggeredText text={loc.address} />
                  </h4>
                  <ul className="mb-4 divide-y divide-primary/20">
                    <li className="py-1" dir="ltr">
                      <StaggeredText delay={0.1} text={`${t("phoneLabel")}: ${loc.phone}`} />
                    </li>
                    <li className="py-1" dir="ltr">
                      <StaggeredText delay={0.1} text={`${t("mobileLabel")}: ${loc.mobile}`} />
                    </li>
                    <li className="py-1">
                      <StaggeredText delay={0.1} text={`${t("emailLabel")}: ${loc.email}`} />
                    </li>
                  </ul>
                  <Button className="w-full" href={loc.link} label={t("viewInMap")} />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="container py-20">
          <h3 className="mx-auto max-w-lg text-center font-grotesk text-2xl text-secondary md:text-4xl lg:text-6xl">
            <StaggeredText text={t("branchesTitle")} />
          </h3>

          <ul className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3">
            {LOCATIONS.map((loc, index) => (
              <li
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white"
                key={`${loc.title}-${index}`}
              >
                <div className="relative aspect-video shrink-0 overflow-hidden">
                  <Image
                    alt=""
                    className="object-cover transition-transform duration-500 group-hover:scale-125"
                    fill
                    src={loc.image}
                  />
                </div>
                <div className="flex h-full flex-col items-center justify-between p-2 text-center">
                  <div>
                    <p className="text-balance pb-2 font-light text-brand-dark" dir="ltr">
                      <StaggeredText text={loc.title} />
                    </p>
                    <h4 className="px-4 pb-4 font-grotesk text-2xl text-secondary" dir="ltr">
                      <StaggeredText text={loc.address} />
                    </h4>
                    <ul className="mb-4 divide-y divide-primary/20">
                      <li className="py-1">
                        <StaggeredText delay={0.1} text={`${t("phoneLabel")}: ${loc.phone}`} />
                      </li>
                      <li className="py-1">
                        <StaggeredText delay={0.1} text={`${t("mobileLabel")}: ${loc.mobile}`} />
                      </li>
                      <li className="py-1">
                        <StaggeredText delay={0.1} text={`${t("emailLabel")}: ${loc.email}`} />
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full" href={loc.link} label={t("viewInMap")} />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <Cta />
      </main>
    </>
  );
}
