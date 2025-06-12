"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { Logo1, Logo2, Logo3, Logo4 } from "@/assets/mock-logos";
import { StaggeredText } from "@/components/animation/staggered-text";

interface LogoRowProps {
  logos: (typeof items)[number][number][];
  index: number;
  activeIndex: number;
}

const items = [
  [Logo1, Logo2, Logo3, Logo4],
  [Logo1, Logo2, Logo3, Logo4],
  [Logo1, Logo2, Logo3, Logo4],
];

export const CompanySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    const intervalId = setInterval(() => setActiveIndex(nextIndex), 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);
  return (
    <section className="overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container max-w-5xl text-center">
        <p className="text-secondary z-10 text-lg md:text-2xl">Our clients</p>
        <h2 className="font-grotesk text-brand-dark relative z-10 mb-16 text-3xl tracking-tight md:text-4xl lg:text-6xl/16">
          <StaggeredText
            text="These Companies Trust Us to Deliver Their Vision"
            className="[&>span:nth-last-child(-n+2)]:text-secondary"
            staggerChildren={0.03}
            duration={0.7}
          />
        </h2>
      </div>

      <div className="relative container w-full max-w-7xl">
        {items.map((logos, index) => (
          <LogoRow
            key={index}
            activeIndex={activeIndex}
            logos={logos}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export const MarqueeItem = React.memo(
  ({ children }: { children: React.ReactNode }) => (
    <div className="text-brand-gray mx-6 cursor-pointer duration-300 ease-in-out hover:scale-105">
      {children}
    </div>
  )
);

MarqueeItem.displayName = "MarqueeItem";

const LogoRow = ({ logos, index, activeIndex }: LogoRowProps) => {
  const isActive = index === activeIndex;

  return (
    <AnimatePresence>
      {isActive && (
        <div className="absolute top-0 left-0 grid h-full w-full grid-cols-4 gap-3 px-5 md:gap-x-6 md:px-8">
          {logos.map((logo, logoIndex) => (
            <motion.div
              key={logoIndex}
              className="scale-90"
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
              transition={{
                duration: 1.5,
                type: "spring",
                delay: logoIndex * 0.15,
              }}
            >
              {React.createElement(logo)}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};
