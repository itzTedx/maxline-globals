import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Suspense } from "react";

import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/custom-button";
import { siteConfig } from "@/constants/site-config";
import { CompanySection } from "@/feature/about/sections/company";
import { Cta } from "@/feature/cta";

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
          className="container"
        />
        <meta itemProp="name" content="Maxline Global Team" />
        <meta itemProp="description" content={PAGE_DESCRIPTION} />
        <meta itemProp="url" content={`${siteConfig.site}/company/team`} />
        <meta itemProp="logo" content={`${siteConfig.site}/logo.png`} />
        <section className="container">
          <h2 className="font-grotesk text-secondary text-center text-5xl">
            <StaggeredText text="Leadership That Moves the World" />
          </h2>
          <ul className="grid grid-cols-3 gap-6 pt-12">
            {Array.from({ length: 3 }).map((item, i) => (
              <li key={i} className="bg-brand-dark overflow-hidden rounded-xl">
                <div className="relative aspect-square">
                  <Image
                    src="/images/placeholder.jpg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                  <div className="from-brand-dark absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent" />
                </div>
                <div className="text-background p-2 text-center">
                  <h3 className="font-grotesk text-4xl">Person Name</h3>
                  <p className="font-grotesk text-primary pb-6 text-xl">
                    Designation
                  </p>
                  <Button
                    label="Linkedin Profile"
                    href="/"
                    variant="secondary"
                    className="w-full"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="container py-20">
          <h2 className="font-grotesk text-secondary text-center text-5xl">
            <StaggeredText text="Specialists in Motion" />
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
                  <h3 className="font-grotesk text-4xl">Person Name</h3>
                  <p className="font-grotesk text-primary pb-6 text-xl">
                    Designation
                  </p>
                  <Button
                    label="Linkedin Profile"
                    href="/"
                    variant="secondary"
                    className="text-brand-dark w-full"
                    textClassName="text-brand-dark"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          <CompanySection />
        </Suspense>
        <Cta />
      </main>
    </>
  );
}
