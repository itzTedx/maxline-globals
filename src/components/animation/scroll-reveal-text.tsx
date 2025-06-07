"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  children: string;
  className?: string;
}

export const ScrollRevealText = ({
  children,
  className = "",
}: ScrollRevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, filter: `blur(${blur}px)` }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
