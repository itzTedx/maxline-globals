import { memo } from "react";

import { StaggeredText } from "@/components/animation/staggered-text";

import { HeroImage } from "../components/hero-image";
import { TrackingInput } from "../components/tracking-input";

export const HeroSection = memo(() => {
  return (
    <header className="py-10 md:py-16 lg:py-20" role="banner">
      <div className="container mx-auto px-4">
        <h1 className="text-brand-dark font-grotesk mx-auto max-w-5xl text-center text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
          <StaggeredText
            text="Your Trusted Partner in"
            staggerChildren={0.01}
            duration={0.3}
          />
          <span className="text-secondary">
            <StaggeredText
              text="Logistics and Freight Delivery"
              staggerChildren={0.01}
              duration={0.3}
            />
          </span>
        </h1>

        <div className="mt-8" role="search" aria-label="Track your shipment">
          <TrackingInput />
        </div>

        <div className="mt-12" aria-label="Hero illustration">
          <HeroImage />
        </div>
      </div>
    </header>
  );
});

HeroSection.displayName = "HeroSection";
