"use client";

import Image from "next/image";

import { motion } from "motion/react";

export const HeroImage = () => {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      initial={{ opacity: 0, scale: 0.98, y: 30 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
    >
      <Image
        alt="Container ship docked at a port representing Maxline Global's sea freight services"
        className="object-contain"
        height={580}
        loading="eager"
        priority
        src="/images/container-hero.webp"
        width={1920}
      />
    </motion.div>
  );
};
