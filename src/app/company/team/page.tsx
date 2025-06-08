import { Metadata } from "next";
import Script from "next/script";

import { HeroHeader } from "@/components/hero-header";
import { siteConfig } from "@/constants/site-config";

const PAGE_TITLE =
  "Meet the Maxline Global Team - Logistics Experts Driving Supply Chain Excellence";
const PAGE_DESCRIPTION =
  "Get to know the expert team behind Maxline Global. Our logistics professionals deliver innovative, efficient, and reliable supply chain solutions across the globe.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
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
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: `${siteConfig.site}/company/team`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/team/team-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Maxline Global Team - Expert Logistics Professionals",
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
    canonical: `${siteConfig.site}/company/team`,
  },
};

export default function TeamPage() {
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
            description: PAGE_DESCRIPTION,
            url: `${siteConfig.site}/company/team`,
            logo: `${siteConfig.site}/logo.png`,
            sameAs: [
              "https://linkedin.com/company/maxlineglobal",
              "https://twitter.com/maxlineglobal",
            ],
            department: {
              "@type": "Organization",
              name: "Logistics Department",
              description:
                "Expert team handling freight forwarding, customs clearance, and supply chain solutions",
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
          subtitle="Our Team"
          title="Here's the team that works hard to Deliver your vision, faster"
          description={PAGE_DESCRIPTION}
        />
        <meta itemProp="name" content="Maxline Global Team" />
        <meta itemProp="description" content={PAGE_DESCRIPTION} />
        <meta itemProp="url" content={`${siteConfig.site}/company/team`} />
        <meta itemProp="logo" content={`${siteConfig.site}/logo.png`} />
        <meta
          itemProp="sameAs"
          content="https://linkedin.com/company/maxlineglobal"
        />
        <meta itemProp="sameAs" content="https://twitter.com/maxlineglobal" />
      </main>
    </>
  );
}
