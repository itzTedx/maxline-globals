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
        "sticky top-1/2 left-1/2 z-20 -translate-y-1/2 text-center",
        className
      )}
      style={{ opacity, scale }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          className="text-brand-dark font-grotesk mb-12 text-4xl font-medium tracking-tight md:text-5xl lg:text-7xl"
          style={{
            y: useTransform(
              scrollYProgress,
              [0, 0.25, 0.5, 0.75, 1],
              [-100, 0, 0, 0, -100]
            ),
          }}
        >
          Built to Empower
          <br />
          <span className="text-secondary">Efficiency</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            style={{ x: leftX, clipPath }}
            className="relative aspect-video overflow-hidden rounded-lg"
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
            className="relative aspect-video overflow-hidden rounded-lg"
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
          className="text-brand-gray my-8 text-lg font-light md:text-xl"
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
