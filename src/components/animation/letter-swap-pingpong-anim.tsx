"use client";

import { useEffect, useRef, useState } from "react";

import { debounce } from "lodash";
import { AnimationOptions, motion, stagger, useAnimate } from "motion/react";

import { cn } from "@/lib/utils";

interface TextProps {
  label: string;
  reverse?: boolean;
  transition?: AnimationOptions;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  className?: string;
  onClick?: () => void;
}

// Utility to auto-detect RTL
function isRTL(text: string) {
  const rtlChars = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
  return rtlChars.test(text);
}

const LetterSwapPingPong = ({
  label,
  reverse = true,
  transition = {
    type: "spring",
    duration: 0.5,
  },
  staggerDuration = 0.02,
  staggerFrom = "first",
  className,
  onClick,
  ...props
}: TextProps) => {
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let dir: "ltr" | "rtl" = "ltr";
    if (containerRef.current) {
      // Try to get direction from the DOM
      const domDir = containerRef.current.dir || getComputedStyle(containerRef.current).direction;
      if (domDir === "rtl" || domDir === "ltr") {
        dir = domDir;
      } else if (isRTL(label)) {
        dir = "rtl";
      }
    } else if (isRTL(label)) {
      dir = "rtl";
    }
    setDirection(dir);
  }, [label]);

  // Adjust flex and stagger for RTL
  const flexDirection = direction === "rtl" ? "flex-row-reverse" : "";
  const effectiveStaggerFrom =
    direction === "rtl"
      ? staggerFrom === "first"
        ? "last"
        : staggerFrom === "last"
          ? "first"
          : staggerFrom
      : staggerFrom;

  const mergeTransition = (baseTransition: AnimationOptions) => ({
    ...baseTransition,
    delay: stagger(staggerDuration, {
      from: effectiveStaggerFrom,
    }),
  });

  const hoverStart = debounce(
    () => {
      if (isHovered) return;
      setIsHovered(true);

      animate(".letter", { y: reverse ? "100%" : "-100%" }, mergeTransition(transition));

      animate(
        ".letter-secondary",
        {
          top: "0%",
        },
        mergeTransition(transition)
      );
    },
    100,
    { leading: true, trailing: true }
  );

  const hoverEnd = debounce(
    () => {
      setIsHovered(false);

      animate(
        ".letter",
        {
          y: 0,
        },
        mergeTransition(transition)
      );

      animate(
        ".letter-secondary",
        {
          top: reverse ? "-100%" : "100%",
        },
        mergeTransition(transition)
      );
    },
    100,
    { leading: true, trailing: true }
  );

  return (
    <motion.span
      className={cn(className, "relative flex items-center justify-center overflow-hidden", flexDirection)}
      onClick={onClick}
      onHoverEnd={hoverEnd}
      onHoverStart={hoverStart}
      ref={(el) => {
        // Assign to both refs
        if (el) {
          (scope as React.MutableRefObject<HTMLSpanElement | null>).current = el;
          containerRef.current = el;
        }
      }}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {direction === "rtl" ? (
        <span aria-hidden={true} className="relative flex whitespace-pre">
          <motion.span className={"letter relative"} style={{ top: 0 }}>
            {label}
          </motion.span>
          <motion.span className="letter-secondary absolute" style={{ top: reverse ? "-100%" : "100%" }}>
            {label}
          </motion.span>
        </span>
      ) : (
        label.split("").map((letter: string, i: number) => {
          return (
            <span aria-hidden={true} className="relative flex whitespace-pre" key={i}>
              <motion.span className={"letter relative"} style={{ top: 0 }}>
                {letter}
              </motion.span>
              <motion.span className="letter-secondary absolute" style={{ top: reverse ? "-100%" : "100%" }}>
                {letter}
              </motion.span>
            </span>
          );
        })
      )}
    </motion.span>
  );
};

export default LetterSwapPingPong;
