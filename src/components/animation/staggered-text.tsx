"use client";

import { AnimatePresence, motion } from "framer-motion";

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
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: staggerChildren,
        staggerDirection: -1,
      },
    },
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
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: duration / 2,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={text}
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
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
    </AnimatePresence>
  );
};
