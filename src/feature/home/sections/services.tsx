import { StaggeredText } from "@/components/animation/staggered-text";
import { SERVICES } from "@/constants";

import { ServicesGrid } from "../../services/services-grid";
import { ServicesBottomCTA } from "../components/services-bottom-cta";
import { ServicesHeroVideo } from "../components/services-hero-video";
import { ServicesSchema } from "../schema/services-schema";

export const ServicesSection = () => {
  return (
    <>
      <ServicesSchema services={SERVICES} />
      <section
        className="container max-w-7xl overflow-hidden py-10 md:py-16 lg:py-20"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/Service"
      >
        <ServicesHeroVideo />

        <h2
          id="services-heading"
          className="mx-auto max-w-3xl pb-10 text-center text-4xl font-medium tracking-tight text-balance text-[#5C5E70] md:pb-16 md:text-5xl lg:pb-20 lg:text-6xl"
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
