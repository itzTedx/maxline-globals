"use client";

import { useRef } from "react";

import Image from "next/image";

import { IconArrowRight } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface ServicesCenteredContentProps {
  className?: string;
}

export const ServicesCenteredContent = ({ className }: ServicesCenteredContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Continuous animation based on scroll progress
  const leftX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-100, 0, 0, 0, -100]);
  const rightX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [100, 0, 0, 0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.8, 1, 1, 1, 0.8]);

  // Add clipPath animation for centered rectangle reveal
  const clipPath = useTransform(scrollYProgress, [0, 0.25], ["inset(50% 50% 50% 50%)", "inset(0% 0% 0% 0%)"]);

  // Add bottom-to-top animation for description and button
  const bottomToTop = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
  const t = useTranslations("HomePage");
  return (
    <motion.div
      className={cn(
        "md:-translate-y-1/2 z-20 px-4 text-center md:sticky md:top-1/2 md:left-1/2 md:px-6 lg:px-8",
        className
      )}
      ref={containerRef}
      style={{ opacity, scale }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="mb-6 font-grotesk font-medium text-3xl text-brand-dark tracking-tight md:mb-12 md:text-5xl lg:text-7xl"
          style={{
            y: useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [-50, 0, 0, 0, -50]),
          }}
        >
          {t("services.heading.first")}
          <br />
          <span className="text-secondary"> {t("services.heading.second")}</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-video"
            style={{ x: leftX, clipPath }}
          >
            <Image
              alt="Air Freight Services"
              className="h-full w-full object-cover"
              fill
              src="/images/warehouse.webp"
            />
          </motion.div>
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-video"
            style={{ x: rightX, clipPath }}
          >
            <Image
              alt="Sea Freight Services"
              className="h-full w-full object-cover"
              fill
              src="/images/airplane-container.webp"
            />
          </motion.div>
        </div>

        <motion.p
          className="my-6 font-light text-base text-brand-gray md:my-8 md:text-lg lg:text-xl"
          style={{
            y: bottomToTop,
          }}
        >
          {t("services.description")}
        </motion.p>
        <motion.div
          className="flex justify-center"
          style={{
            y: bottomToTop,
            opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
          }}
        >
          <Button asChild size="btnIcon">
            <Link className="group gap-3 text-brand-dark" href="/services">
              <LetterSwapPingPong
                className="w-full justify-start font-semibold"
                label={t("services.btnText")}
                reverse={false}
                staggerFrom="first"
              />
              <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary text-brand-dark transition duration-500 group-hover:bg-background">
                <IconArrowRight />
              </div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
