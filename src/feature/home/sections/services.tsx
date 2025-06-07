import { StaggeredText } from "@/components/animation/staggered-text";
import { SERVICES } from "@/constants";

import { ServicesGrid } from "../../services/services-grid";
import { ServicesBottomCTA } from "../components/services-bottom-cta";
import { ServicesCenteredContent } from "../components/services-centered-content";
import { ServicesHeroVideo } from "../components/services-hero-video";
import { ServicesSchema } from "../schema/services-schema";

export const ServicesSection = () => {
  return (
    <>
      <ServicesSchema services={SERVICES} />
      <section
        className="relative"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="relative overflow-hidden">
          <ServicesHeroVideo />
          <ServicesCenteredContent />
        </div>

        <div className="relative z-30">
          <h2
            id="services-heading"
            className="mx-auto max-w-3xl pb-10 text-center text-4xl font-medium tracking-tight text-balance text-[#5C5E70] max-md:pt-10 md:text-5xl lg:pb-20 lg:text-6xl"
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
        </div>
      </section>
    </>
  );
};
