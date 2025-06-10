import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

import { XIcon } from "@/assets/x-icon";
import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/custom-button";
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

export default function ContactPage() {
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
              subtitle="Contact us"
              title={[
                { text: "Let's Move Your Business" },
                {
                  text: "Forward,",
                  className: "text-secondary",
                },
                { text: "Together" },
              ]}
              titleClassName="text-3xl md:text-4xl lg:text-[4rem]/18 mb-6"
              description="Get in touch to start a logistics project, explore partnership opportunities, or learn how Maxline Global delivers supply chain solutions with precision, speed, and care. We're here to support your business - every step of the way."
              isLogo={false}
            />
          </header>

          <section
            className="relative space-y-6 md:space-y-9"
            aria-labelledby="contact-locations"
          >
            <h2 id="contact-locations" className="sr-only">
              Contact Locations
            </h2>

            <article className="relative overflow-hidden rounded-2xl p-6 md:p-12">
              <div className="relative z-10">
                <h3 className="text-primary mb-1 text-xl md:text-2xl">
                  Corporate Headquarters
                </h3>
                <address className="text-lg font-medium text-white not-italic md:text-2xl">
                  P.O. Box: 232939, Jebel Ali Free Zone,
                  <br />
                  Dubai, United Arab Emirates.
                </address>
              </div>
              <Image
                src={HEADQUARTERS_IMAGE}
                alt="Maxline Global Corporate Headquarters in Dubai"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </article>

            <article className="relative overflow-hidden rounded-2xl p-6 md:p-12">
              <div className="relative z-10">
                <h3 className="text-primary mb-1 text-xl md:text-2xl">
                  Branch Office
                </h3>
                <address className="text-lg font-medium text-white not-italic md:text-2xl">
                  33, 6A Street, Ras Al khor Industrial Area - 2, Dubai, United
                  Arab Emirates.
                </address>
              </div>
              <Image
                src={HEADQUARTERS_IMAGE}
                alt="Maxline Global Branch Office in Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </article>

            <section aria-labelledby="contact-form-title">
              <h2 id="contact-form-title" className="sr-only">
                Contact Form
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
            alt="Maxline Global Logistics Operations"
            className="object-cover"
            sizes="100vw"
          />
          <figcaption className="sr-only">
            Maxline Global Logistics Operations Center
          </figcaption>
        </figure>
        <section className="container md:max-w-6xl">
          <h3 className="text-brand-dark font-grotesk mx-auto max-w-lg text-center text-2xl md:text-4xl lg:text-6xl">
            <StaggeredText
              text="Maxline Global Around the World"
              className="[&>span:nth-child(-n+2)]:text-secondary"
            />
          </h3>
          <p className="text-brand-gray mx-auto max-w-4xl pt-2 text-center text-lg font-light text-balance md:pt-4 md:text-xl lg:text-2xl">
            <StaggeredText text="Our strategically located offices empower us to manage international shipments with local insight. Wherever you are, Maxline is never far." />
          </p>
          <ul className="grid grid-cols-1 gap-9 pt-12 sm:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <li
                key={index}
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/images/placeholder.jpg"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-brand-dark pb-2 font-light">
                    <StaggeredText text="Head Office (UAE)" />
                  </p>
                  <h4 className="font-grotesk text-secondary px-4 pb-4 text-2xl">
                    <StaggeredText text="Maxline LLC, Mina Jebel Ali, Dubai Aid City, Dubai - United Arab Emirates" />
                  </h4>
                  <ul className="divide-primary/20 mb-4 divide-y">
                    <li className="py-1">
                      <StaggeredText
                        text="Phone: + 971 4 2822022"
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1">
                      <StaggeredText
                        text="Mobile: + 971 4 2822023"
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1">
                      <StaggeredText
                        text="Email: ajith@maxlineglobal.com"
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1">
                      <StaggeredText
                        text="Sales: reception@maxlineglobal.com"
                        delay={0.1}
                      />
                    </li>
                  </ul>
                  <Button label="View in map" className="w-full" />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="container py-20">
          <h3 className="text-secondary font-grotesk mx-auto max-w-lg text-center text-2xl md:text-4xl lg:text-6xl">
            <StaggeredText text="Branches" />
          </h3>

          <ul className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <li
                key={index}
                className="group overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/images/placeholder.jpg"
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-brand-dark pb-2 font-light">
                    <StaggeredText text="Head Office (UAE)" />
                  </p>
                  <h4 className="font-grotesk text-secondary px-4 pb-4 text-2xl">
                    <StaggeredText text="Maxline LLC, Mina Jebel Ali, Dubai Aid City, Dubai - United Arab Emirates" />
                  </h4>
                  <ul className="divide-primary/20 mb-4 divide-y">
                    <li className="py-1">
                      <StaggeredText
                        text="Phone: + 971 4 2822022"
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1">
                      <StaggeredText
                        text="Mobile: + 971 4 2822023"
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1">
                      <StaggeredText
                        text="Email: ajith@maxlineglobal.com"
                        delay={0.1}
                      />
                    </li>
                    <li className="py-1">
                      <StaggeredText
                        text="Sales: reception@maxlineglobal.com"
                        delay={0.1}
                      />
                    </li>
                  </ul>
                  <Button label="View in map" className="w-full" />
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
