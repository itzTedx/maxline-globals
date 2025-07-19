import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { getTranslations } from "next-intl/server";

import { XIcon } from "@/assets/x-icon";
import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/custom-button";
import { HEAD_LOCATION, LOCATIONS } from "@/constants";
import { siteConfig } from "@/constants/site-config";
import { Cta } from "@/feature/cta";
import { ContactForm } from "@/feature/forms/contact-form";

const PAGE_TITLE =
  "Contact Maxline Global | Logistics & Supply Chain Solutions";
const PAGE_DESCRIPTION =
  "Get in touch with Maxline Global for logistics projects, partnership opportunities, and supply chain solutions. Contact our Dubai headquarters or branch office.";
const PAGE_KEYWORDS =
  "contact Maxline Global, logistics contact, supply chain solutions, Dubai logistics, UAE logistics";
const SITE_URL = siteConfig.site;
const HEADQUARTERS_IMAGE = "/images/head-office.webp";

const openGraphData = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  type: "website",
  locale: "en_US",
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
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
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
  sameAs: [
    "https://www.linkedin.com/company/maxline-global",
    "https://twitter.com/maxlineglobal",
  ],
};

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [...siteConfig.keywords, ...PAGE_KEYWORDS.split(", ")],
  openGraph: openGraphData,
  twitter: twitterData,
  robots: robotsData,
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <main
        className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl"
        role="main"
      >
        <article className="container grid grid-cols-1 gap-4 py-10 md:py-20 lg:grid-cols-2">
          <header className="z-10 h-fit px-0 py-0 text-start md:sticky md:top-[20vh]">
            <HeroHeader
              className="z-10 h-fit px-0 py-0 text-start md:sticky md:top-[20vh]"
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
              description={t("heroDescription")}
              isLogo={false}
            />
          </header>

          <section
            className="relative space-y-6 md:space-y-9"
            aria-labelledby="contact-locations"
          >
            <h2 id="contact-locations" className="sr-only">
              {t("contactLocations")}
            </h2>

            <article className="relative overflow-hidden rounded-2xl p-6 md:p-12">
              <div className="relative z-10">
                <h3 className="text-primary mb-1 text-xl md:text-2xl">
                  {t("corporateHeadquarters")}
                </h3>
                <address className="text-lg font-medium text-white not-italic md:text-2xl">
                  Maxline LLC, Mina Jebel Ali, Dubai Aid City, Dubai - United
                  Arab Emirates
                </address>
              </div>
              <Image
                src={HEADQUARTERS_IMAGE}
                alt={t("hqImageAlt")}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </article>

            <article className="relative overflow-hidden rounded-2xl p-6 md:p-12">
              <div className="relative z-10">
                <h3 className="text-primary mb-1 text-xl md:text-2xl">
                  {t("branchOffice")}
                </h3>
                <address className="text-lg font-medium text-white not-italic md:text-2xl">
                  {t("branchAddress")}
                </address>
              </div>
              <Image
                src={HEADQUARTERS_IMAGE}
                alt={t("branchImageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </article>

            <section aria-labelledby="contact-form-title">
              <h2 id="contact-form-title" className="sr-only">
                {t("contactForm")}
              </h2>
              <ContactForm />
            </section>

            <XIcon
              className="absolute right-0 -bottom-1/4 hidden -translate-y-1/4 md:block"
              aria-hidden="true"
            />
          </section>
        </article>

        <figure className="relative my-10 h-48 w-full md:my-20 md:h-72">
          <Image
            src="/images/contact-container.webp"
            fill
            alt={t("contactImageAlt")}
            className="object-cover"
            sizes="100vw"
          />
          <figcaption className="sr-only">
            {t("contactImageCaption")}
          </figcaption>
        </figure>
        <section className="container md:max-w-6xl">
          <h3 className="text-brand-dark font-grotesk mx-auto max-w-lg text-center text-2xl md:text-4xl lg:text-6xl">
            <StaggeredText
              text={t("aroundWorldTitle")}
              className="[&>span:nth-child(-n+2)]:text-secondary"
            />
          </h3>
          <p className="text-brand-gray mx-auto max-w-4xl pt-2 text-center text-lg font-light text-balance md:pt-4 md:text-xl lg:text-2xl">
            <StaggeredText text={t("aroundWorldDescription")} />
          </p>
          <ul className="grid grid-cols-1 gap-9 pt-12 sm:grid-cols-2">
            {HEAD_LOCATION.map((loc, index) => (
              <li
                key={index}
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={loc.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-brand-dark pb-2 font-light" dir="ltr">
                    <StaggeredText text={loc.title} />
                  </p>
                  <h4
                    className="font-grotesk text-secondary px-4 pb-4 text-2xl"
                    dir="ltr"
                  >
                    <StaggeredText text={loc.address} />
                  </h4>
                  <ul className="divide-primary/20 mb-4 divide-y">
                    <li className="py-1" dir="ltr">
                      <StaggeredText
                        text={`${t("phoneLabel")}: ${loc.phone}`}
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1" dir="ltr">
                      <StaggeredText
                        text={`${t("mobileLabel")}: ${loc.mobile}`}
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1">
                      <StaggeredText
                        text={`${t("emailLabel")}: ${loc.email}`}
                        delay={0.1}
                      />
                    </li>
                  </ul>
                  <Button
                    label={t("viewInMap")}
                    className="w-full"
                    href={loc.link}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="container py-20">
          <h3 className="text-secondary font-grotesk mx-auto max-w-lg text-center text-2xl md:text-4xl lg:text-6xl">
            <StaggeredText text={t("branchesTitle")} />
          </h3>

          <ul className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3">
            {LOCATIONS.map((loc, index) => (
              <li
                key={index}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-video shrink-0 overflow-hidden">
                  <Image
                    src={loc.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="flex h-full flex-col items-center justify-between p-2 text-center">
                  <div>
                    <p
                      className="text-brand-dark pb-2 font-light text-balance"
                      dir="ltr"
                    >
                      <StaggeredText text={loc.title} />
                    </p>
                    <h4
                      className="font-grotesk text-secondary px-4 pb-4 text-2xl"
                      dir="ltr"
                    >
                      <StaggeredText text={loc.address} />
                    </h4>
                    <ul className="divide-primary/20 mb-4 divide-y">
                      <li className="py-1">
                        <StaggeredText
                          text={`${t("phoneLabel")}: ${loc.phone}`}
                          delay={0.1}
                        />
                      </li>
                      <li className="py-1">
                        <StaggeredText
                          text={`${t("mobileLabel")}: ${loc.mobile}`}
                          delay={0.1}
                        />
                      </li>
                      <li className="py-1">
                        <StaggeredText
                          text={`${t("emailLabel")}: ${loc.email}`}
                          delay={0.1}
                        />
                      </li>
                    </ul>
                  </div>
                  <Button
                    label={t("viewInMap")}
                    className="w-full"
                    href={loc.link}
                  />
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
