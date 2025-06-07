import { StaggeredText } from "@/components/animation/staggered-text";

import { HeroImage } from "../components/hero-image";
import { TrackingInput } from "../components/tracking-input";

export const HeroSection = () => {
  return (
    <header className="py-10 md:py-16 lg:py-20" role="banner">
      <h1 className="text-brand-dark font-grotesk mx-auto max-w-5xl px-3 text-center text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
        <StaggeredText
          text="Delivering Excellence Across"
          staggerChildren={0.02}
          duration={0.4}
        />
        <span className="text-secondary">
          <StaggeredText
            text="Land, Air, and Sea"
            staggerChildren={0.02}
            duration={0.4}
          />
        </span>
      </h1>

      <TrackingInput />

      <HeroImage />
    </header>
  );
};
