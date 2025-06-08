import Image from "next/image";
import React from "react";

import SimpleMarquee from "@/components/animation/simple-marquee";
import { HeroHeader } from "@/components/hero-header";
import { CAROUSEL_IMAGES } from "@/constants";

const MarqueeItem = React.memo(
  ({ children }: { children: React.ReactNode }) => (
    <div className="mx-2.5 cursor-pointer duration-300 ease-in-out hover:scale-105">
      {children}
    </div>
  )
);

MarqueeItem.displayName = "MarqueeItem";

export const AboutHeroSection = () => {
  return (
    <div className="overflow-hidden">
      <HeroHeader
        className="container"
        subtitle="About us"
        title={[
          { text: "Building Smarter Supply Chains for a" },
          {
            text: "Connected World.",
            className: "text-secondary",
          },
        ]}
      />

      <section className="relative flex flex-col items-center justify-center overflow-hidden py-3">
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4">
          <SimpleMarquee
            className="w-full"
            baseVelocity={3}
            repeat={4}
            draggable
            scrollSpringConfig={{ damping: 50, stiffness: 400 }}
            slowDownFactor={0.1}
            slowdownOnHover
            slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
            scrollAwareDirection={true}
            useScrollVelocity={true}
            direction="left"
          >
            {CAROUSEL_IMAGES.map((src, i) => (
              <MarqueeItem key={i}>
                <div className="relative aspect-4/3 h-96">
                  <Image
                    src={src}
                    alt={`Logistics and supply chain image ${i + 1}`}
                    className="rounded-2xl object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 2}
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
              </MarqueeItem>
            ))}
          </SimpleMarquee>
        </div>
      </section>
    </div>
  );
};
