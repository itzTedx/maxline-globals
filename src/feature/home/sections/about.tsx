import Image from "next/image";
import { memo } from "react";

import { TransportTypes } from "@/assets/transport-types";
import { StaggeredText } from "@/components/animation/staggered-text";
import { TextAnimate } from "@/components/animation/text-animate";

export const AboutSection = memo(() => {
  return (
    <section
      className="relative container grid grid-cols-1 gap-x-4 gap-y-12 pb-12 md:grid-cols-2 md:gap-x-9 md:gap-y-20 md:pb-20"
      aria-labelledby="solutions-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <h2
        id="solutions-heading"
        className="text-brand-dark font-grotesk text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl"
        itemProp="name"
      >
        <StaggeredText
          text="Reliable Logistics Solutions Across the Globe"
          className="[&>span:nth-last-child(-n+3)]:text-secondary"
          staggerChildren={0.02}
          duration={0.5}
        />
      </h2>

      <div itemProp="description">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-brand-gray text-xl leading-relaxed font-light text-balance md:text-2xl"
        >
          {`At Maxline Global, we connect businesses to markets across the world. With our comprehensive logistics solutions and commitment to service excellence, we ensure your cargo moves with speed, safety, and precision.`}
        </TextAnimate>
      </div>

      <div
        className="absolute -bottom-12 -left-1/2 hidden aspect-video h-[400px] translate-x-20 md:block md:h-[600px] lg:h-[831px]"
        itemProp="image"
      >
        <Image
          src="/images/maxline-plane.png"
          fill
          alt="Cargo plane representing Maxline Global's air freight capabilities"
          quality={100}
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw,"
        />
      </div>
      <div
        className="col-start-1 flex items-center justify-center md:col-start-2"
        itemProp="serviceType"
      >
        <TransportTypes />
      </div>

      <meta itemProp="url" content="https://maxlineglobal.com" />
      <meta itemProp="logo" content="https://maxlineglobal.com/logo.png" />
    </section>
  );
});

AboutSection.displayName = "AboutSection";
