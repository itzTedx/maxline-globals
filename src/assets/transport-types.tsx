"use client";

import React, { useEffect, useRef } from "react";

import {
  SVGMotionProps,
  easeInOut,
  motion,
  useAnimationControls,
} from "motion/react";

type TransportTypesProps = React.SVGProps<SVGSVGElement> & { rtl?: boolean };

export const TransportTypes = (props: TransportTypesProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (circleRef.current) {
      const circumference = 2 * Math.PI * 162.5; // 2πr where r is 162.5
      circleRef.current.style.strokeDasharray = `${circumference}`;
      controls.set({ strokeDashoffset: circumference });
    }
  }, [controls]);

  const largeCircleVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  const { rtl, ...svgProps } = props;

  // Gradient direction based on RTL
  const gradientProps = rtl
    ? { x1: "326", y1: "167", x2: "-0.999997", y2: "167" }
    : { x1: "-0.999997", y1: "167", x2: "326", y2: "167" };

  return (
    <motion.svg
      {...(svgProps as SVGMotionProps<SVGSVGElement>)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      width="326"
      height="326"
      viewBox="0 0 326 326"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        variants={largeCircleVariants}
        style={{ pathLength: 0 }}
        cx="163"
        cy="163"
        r="147"
        fill="url(#pattern0_503_1621)"
      />
      <motion.circle
        variants={largeCircleVariants}
        style={{ pathLength: 0 }}
        cx="163"
        cy="163"
        r="162.5"
        stroke="url(#paint0_linear_503_1621)"
      />
      <image
        href="/images/transportation-types.jpg"
        x="5"
        y="5"
        width="320"
        height="320"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#circleClip)"
      />
      <defs>
        <clipPath id="circleClip">
          <circle cx="163" cy="163" r="150" />
        </clipPath>
        <pattern
          id="pattern0_503_1621"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_503_1621" transform="scale(0.000308642)" />
        </pattern>
        <linearGradient
          id="paint0_linear_503_1621"
          {...gradientProps}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};
