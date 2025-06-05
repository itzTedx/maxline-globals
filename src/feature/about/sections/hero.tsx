import Image from "next/image";
import React from "react";

import { XIcon } from "@/assets/x-icon";
import SimpleMarquee from "@/components/animation/simple-marquee";
import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { CAROUSEL_IMAGES } from "@/constants";

export const AboutHeroSection = () => {
  return (
    <div>
      <HeroHeader
        subtitle="About us"
        title="Building Smarter Supply Chains for a Connected World."
      />
      <header className="relative container max-w-7xl py-20 text-center">
        <p className="text-secondary z-10 text-2xl">About us</p>
        <h1 className="font-grotesk text-brand-dark relative z-10 text-8xl/26 tracking-tight">
          <StaggeredText
            text="Building Smarter Supply Chains for a Connected World."
            className="[&>span:nth-last-child(-n+2)]:text-secondary"
            staggerChildren={0.03}
            duration={0.7}
          />
        </h1>
        <XIcon className="absolute top-1/2 -translate-y-1/2 opacity-60" />
      </header>
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
                    alt={`Image ${i + 1}`}
                    className="rounded-2xl object-cover"
                    fill
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

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-2.5 cursor-pointer duration-300 ease-in-out hover:scale-105">
    {children}
  </div>
);
