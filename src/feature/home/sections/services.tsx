import { StaggeredText } from "@/components/animation/staggered-text";
import { SERVICES } from "@/constants";

import { ServicesBottomCTA } from "../components/services-bottom-cta";
import { ServicesGrid } from "../components/services-grid";
import { ServicesHeroVideo } from "../components/services-hero-video";
import { ServicesSchema } from "../schema/services-schema";

export const ServicesSection = () => {
  return (
    <>
      <ServicesSchema services={SERVICES} />
      <section
        className="container max-w-7xl py-20"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/Service"
      >
        <ServicesHeroVideo />

        <h2
          id="services-heading"
          className="mx-auto max-w-3xl pb-20 text-center text-6xl font-medium tracking-tight text-balance text-[#5C5E70]"
          itemProp="name"
        >
          <StaggeredText
            text="Integrated freight solutions tailored to your exact specifications."
            className="[&>span:nth-last-child(-n+2)]:text-secondary"
            staggerChildren={0.03}
            duration={0.7}
          />
        </h2>

        <ServicesGrid services={SERVICES} />
        <ServicesBottomCTA />
      </section>
    </>
  );
};
