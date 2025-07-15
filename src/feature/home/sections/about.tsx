"use client";

import Image from "next/image";
import { memo, useState } from "react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { TransportTypes } from "@/assets/transport-types";
import { StaggeredText } from "@/components/animation/staggered-text";
import { TextAnimate } from "@/components/animation/text-animate";
import { cn } from "@/lib/utils";

export const AboutSection = memo(() => {
  const [active, setActive] = useState<"air" | "sea" | "road">("air");
  const t = useTranslations("HomePage");
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
          text={t("about.title")}
          className="[&>span:nth-last-child(-n+3)]:text-secondary"
          staggerChildren={0.02}
          duration={0.5}
        />
      </h2>

      <div itemProp="description">
        <TextAnimate
          animation="blurInUp"
          by="line"
          className="text-brand-gray text-xl leading-relaxed font-light text-balance md:text-2xl"
        >
          {t("about.description")}
        </TextAnimate>
      </div>

      <motion.div
        className="absolute -bottom-0 -left-1/2 hidden aspect-video h-[400px] translate-x-20 md:block md:h-[600px] lg:h-[800px]"
        itemProp="image"
        animate={{
          opacity: active === "air" ? 1 : 0,
          scale: active === "air" ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/maxline-plane.webp"
          fill
          alt="Cargo plane representing Maxline Global's air freight capabilities"
          quality={100}
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw,"
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-[20%] -left-1/2 hidden aspect-video h-[400px] translate-x-32 md:block md:h-[600px] lg:h-[750px]"
        itemProp="image"
        animate={{
          opacity: active === "road" ? 1 : 0,
          scale: active === "road" ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/maxline-truck.webp"
          fill
          alt="Cargo truck representing Maxline Global's road freight capabilities"
          quality={100}
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw,"
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-[20%] -left-1/2 hidden aspect-video h-[400px] translate-x-20 md:block md:h-[600px] lg:h-[800px]"
        itemProp="image"
        animate={{
          opacity: active === "sea" ? 1 : 0,
          scale: active === "sea" ? 1.05 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/maxline-ship.webp"
          fill
          alt="Cargo ship representing Maxline Global's sea freight capabilities"
          quality={100}
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw,"
        />
      </motion.div>
      <div
        className="relative col-start-1 flex items-center justify-center md:col-start-2 rtl:md:col-start-1"
        itemProp="serviceType"
      >
        <div className="relative">
          <div
            className={cn(
              "group absolute top-[10%] left-[12%] size-4 translate-x-1/2 -translate-y-[12%] cursor-pointer rounded-full bg-white transition-colors",
              active === "air" && "ring-primary ring-2"
            )}
            onMouseEnter={() => setActive("air")}
          >
            <div className="group-hover:bg-primary absolute -top-1/2 z-10 grid h-6 w-16 origin-right -translate-x-[85%] -translate-y-1/4 place-content-center rounded-sm bg-white text-xs font-medium transition-colors">
              {t("about.type.air")}
            </div>
            <div className="group-hover:bg-primary/20 absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/50 transition-colors" />
          </div>
          <div
            className={cn(
              "group absolute top-1/2 left-0 size-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white transition-colors",
              active === "sea" && "ring-primary ring-2"
            )}
            onMouseEnter={() => setActive("sea")}
          >
            <div className="group-hover:bg-primary absolute -top-1/2 z-10 grid h-6 w-16 origin-right -translate-x-[85%] -translate-y-1/4 place-content-center rounded-sm bg-white text-xs font-medium transition-colors">
              {t("about.type.sea")}
            </div>
            <div className="group-hover:bg-primary/20 absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/50 transition-colors" />
          </div>
          <div
            className={cn(
              "group absolute bottom-[10%] left-[17%] size-4 -translate-x-1/2 translate-y-[12%] cursor-pointer rounded-full bg-white transition-colors",
              active === "road" && "ring-primary ring-2"
            )}
            onMouseEnter={() => setActive("road")}
          >
            <div className="group-hover:bg-primary absolute -top-1/2 z-10 grid h-6 w-[4.5rem] origin-right -translate-x-[85%] -translate-y-1/4 place-content-center rounded-sm bg-white text-xs font-medium transition-colors">
              {t("about.type.road")}
            </div>
            <div className="group-hover:bg-primary/20 absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/50 transition-colors" />
          </div>
          <TransportTypes />
        </div>
      </div>

      <meta itemProp="url" content="https://maxlineglobal.com" />
      <meta itemProp="logo" content="https://maxlineglobal.com/logo.png" />
    </section>
  );
});

AboutSection.displayName = "AboutSection";
