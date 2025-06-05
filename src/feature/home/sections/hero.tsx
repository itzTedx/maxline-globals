import { IconArrowRight } from "@tabler/icons-react";

import { Input } from "@/components/ui/input";

import { HeroImage } from "../components/hero-image";

export const HeroSection = () => {
  return (
    <header className="py-10 md:py-16 lg:py-20" role="banner">
      <h1 className="text-brand-dark font-grotesk mx-auto max-w-5xl px-3 text-center text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
        Delivering Excellence Across{" "}
        <span className="text-secondary">Land, Air, and Sea</span>
      </h1>

      <div className="relative mx-auto my-6 max-w-[280px] sm:max-w-[320px] md:my-8 md:max-w-md">
        <Input
          id="track"
          aria-label="Track your shipment"
          className="pe-9 text-sm shadow-none md:text-base"
          placeholder="Track your shipment"
          type="text"
        />
        <button
          className="text-brand-dark bg-primary hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-1/2 end-1.5 flex size-8 -translate-y-1/2 items-center justify-center rounded transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:size-9"
          aria-label="Track Shipment"
        >
          <IconArrowRight size={16} aria-hidden="true" />
        </button>
      </div>

      <HeroImage />
    </header>
  );
};
