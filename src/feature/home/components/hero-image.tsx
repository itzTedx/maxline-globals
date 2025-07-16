"use client";

import Image from "next/image";

import { motion } from "motion/react";

export const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/images/container-hero.webp"
        alt="Container ship docked at a port representing Maxline Global's sea freight services"
        height={580}
        width={1920}
        className="object-contain"
        priority
        loading="eager"
      />
    </motion.div>
  );
};
