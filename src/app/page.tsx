import { Suspense } from "react";

import { Cta } from "@/feature/cta";
import { AboutSection } from "@/feature/home/sections/about";
import { FaqSection } from "@/feature/home/sections/faq";
import { HeroSection } from "@/feature/home/sections/hero";
import { ServicesSection } from "@/feature/home/sections/services";
import { InsightsCarousel } from "@/feature/insights/components/insights-carousel";

export default function Home() {
  return (
    <>
      <main
        className="bg-background relative z-10 rounded-b-3xl pb-20"
        role="main"
      >
        <HeroSection />

        <AboutSection />

        <Suspense
          fallback={
            <div
              className="h-96 w-full animate-pulse bg-gray-200"
              aria-label="Loading content"
            />
          }
        >
          <ServicesSection />
        </Suspense>

        <FaqSection />

        <Suspense
          fallback={
            <div
              className="h-96 w-full animate-pulse bg-gray-200"
              aria-label="Loading content"
            />
          }
        >
          <InsightsCarousel />
        </Suspense>

        <Cta />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Maxline Global",
            url: "https://maxlineglobal.com",
            logo: "https://maxlineglobal.com/logo.png",
            description:
              "Maxline Global provides comprehensive logistics solutions across land, air, and sea. Our integrated freight services ensure your cargo moves with speed, safety, and precision worldwide.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
            },
          }),
        }}
      />
    </>
  );
}
