"use client";

import { useScroll, useTransform } from "motion/react";

export function useFooterVisibility(footerRef: React.RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [99, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [99, 0.7], ["50px", "0px"]);
  const scale = useTransform(scrollYProgress, [99, 0.5], [0.98, 1]);

  return {
    opacity,
    y,
    scale,
    progress: scrollYProgress,
  };
}
