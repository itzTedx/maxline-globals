"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  ease?: string;
}

export const StaggeredText = ({
  text,
  className,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.02,
  ease = "easeOut",
}: StaggeredTextProps) => {
  // Split text into words
  const words = text.split(" ");

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
        ease,
      },
    }),
  };

  // Word animation
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("overflow-hidden", className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block whitespace-pre"
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.span>
  );
};
