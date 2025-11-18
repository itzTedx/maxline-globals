import { memo } from "react";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";

import { HeroImage } from "../components/hero-image";
import { TrackingInput } from "../components/tracking-input";

export const HeroSection = memo(() => {
  const t = useTranslations("HomePage");
  return (
    <header className="py-10 md:py-16 lg:py-20" role="banner">
      <div className="container mx-auto px-4">
        <h1 className="mx-auto max-w-5xl text-center font-grotesk text-4xl text-brand-dark tracking-tight sm:text-5xl md:text-6xl lg:text-[4.95rem]">
          <StaggeredText duration={0.3} staggerChildren={0.01} text={t("hero.title.firstLine")} />
          <span className="text-secondary">
            <StaggeredText duration={0.3} staggerChildren={0.01} text={t("hero.title.secondLine")} />
          </span>
        </h1>

        <div aria-label="Track your shipment" className="mt-8" role="search">
          <TrackingInput />
        </div>

        <div aria-label="Hero illustration" className="mt-12">
          <HeroImage />
        </div>
      </div>
    </header>
  );
});

HeroSection.displayName = "HeroSection";
