"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { IconArrowRight } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServicesCenteredContentProps {
  className?: string;
}

export const ServicesCenteredContent = ({
  className,
}: ServicesCenteredContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Continuous animation based on scroll progress
  const leftX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-100, 0, 0, 0, -100]
  );
  const rightX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [100, 0, 0, 0, 100]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.8, 1, 1, 1, 0.8]
  );

  // Add clipPath animation for centered rectangle reveal
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.25],
    ["inset(50% 50% 50% 50%)", "inset(0% 0% 0% 0%)"]
  );

  // Add bottom-to-top animation for description and button
  const bottomToTop = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "z-20 px-4 text-center md:sticky md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:px-6 lg:px-8",
        className
      )}
      style={{ opacity, scale }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-brand-dark font-grotesk mb-6 text-3xl font-medium tracking-tight md:mb-12 md:text-5xl lg:text-7xl"
          style={{
            y: useTransform(
              scrollYProgress,
              [0, 0.25, 0.5, 0.75, 1],
              [-50, 0, 0, 0, -50]
            ),
          }}
        >
          Built to Empower
          <br />
          <span className="text-secondary">Efficiency</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <motion.div
            style={{ x: leftX, clipPath }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-video"
          >
            <Image
              fill
              src="/images/warehouse.webp"
              alt="Air Freight Services"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ x: rightX, clipPath }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-video"
          >
            <Image
              fill
              src="/images/airplane-container.webp"
              alt="Sea Freight Services"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.p
          className="text-brand-gray my-6 text-base font-light md:my-8 md:text-lg lg:text-xl"
          style={{
            y: bottomToTop,
          }}
        >
          Maxline turns fragmented workflows into unified strategies. Whether
          you&apos;re in the office or across the globe, we&apos;re one
          connected force.
        </motion.p>
        <motion.div
          style={{
            y: bottomToTop,
            opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
          }}
          className="flex justify-center md:justify-start"
        >
          <Button asChild size="btnIcon">
            <Link href="/services" className="text-brand-dark group gap-3">
              <LetterSwapPingPong
                label="Explore our services"
                staggerFrom="first"
                reverse={false}
                className="w-full justify-start font-semibold"
              />
              <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
                <IconArrowRight />
              </div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
