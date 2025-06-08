import { Metadata } from "next";
import Script from "next/script";

import { HeroHeader } from "@/components/hero-header";
import { SERVICES } from "@/constants";
import { siteConfig } from "@/constants/site-config";
import { Cta } from "@/feature/cta";
import { ServicesGrid } from "@/feature/services/services-grid";

const PAGE_TITLE = "Logistics Services | Maxline Global";
const PAGE_DESCRIPTION =
  "Explore our full suite of global logistics services—from air, sea, and road freight to warehousing, customs clearance, and project cargo management. Maxline Global delivers reliable, scalable, and end-to-end solutions for every supply chain challenge.";
const PAGE_KEYWORDS =
  "logistics services, global logistics, air freight, sea freight, road freight, warehousing, customs clearance, project cargo, supply chain solutions";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [...siteConfig.keywords, ...PAGE_KEYWORDS.split(", ")],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Maxline Global Logistics Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/images/services-og.jpg"],
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
  alternates: {
    canonical: `${siteConfig.site}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            url: `${siteConfig.site}/services`,
            provider: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.site,
              logo: `${siteConfig.site}/logo.png`,
            },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: SERVICES.map((service, index) => ({
                "@type": "Service",
                position: index + 1,
                name: service.title,
                description: service.description,
                url: `${siteConfig.site}${service.href}`,
                image: `${siteConfig.site}${service.image}`,
              })),
            },
          }),
        }}
      />
      <main
        className="bg-background relative z-10 overflow-hidden rounded-b-3xl pb-20 shadow-xl"
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <article>
          <HeroHeader
            subtitle="Services"
            className="container"
            title="Logistics Solutions That Move Business Forward"
            description={PAGE_DESCRIPTION}
          />
          <section
            className="container max-w-7xl"
            aria-label="Our Services"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <ServicesGrid services={SERVICES} isExpanded />
          </section>
          <Cta />
        </article>
      </main>
    </>
  );
}
