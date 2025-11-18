'use client'

import React, { useEffect, useRef } from 'react'

import { motion, SVGMotionProps, useAnimationControls } from 'motion/react'

const easeInOut = (t: number) => 0.5 * (1 - Math.cos(Math.PI * t))

export const TransportTypes = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  const circleRef = useRef<SVGCircleElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (circleRef.current) {
      const circumference = 2 * Math.PI * 162.5 // 2πr where r is 162.5
      circleRef.current.style.strokeDasharray = `${circumference}`
      controls.set({ strokeDashoffset: circumference })
    }
  }, [controls])

  // const containerVariants = {
  //   hidden: {},
  //   visible: {
  //     transition: {
  //       delayChildren: 0.8,
  //       staggerChildren: 0.4, // Increased to give more time between groups
  //     },
  //   },
  // };

  // const boxGroupVariants = {
  //   hidden: {},
  //   visible: (i: number) => ({
  //     transition: {
  //       delayChildren: i * 0.4,
  //     },
  //   }),
  // };

  const largeCircleVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  }

  // const circleVariants = {
  //   hidden: { scale: 0 },
  //   visible: {
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       duration: 0.6,
  //       bounce: 0.4,
  //     },
  //   },
  // };

  // const pulseVariants = {
  //   hidden: { scale: 1 },
  //   visible: {
  //     scale: [0.8, 1.2, 0.8],
  //     opacity: [0, 0.8, 0],
  //     transition: {
  //       duration: 1.5,
  //       repeat: Infinity,
  //       ease: "easeInOut",
  //       delay: 0.8, // Start pulsing after the circle appears
  //     },
  //   },
  // };

  // const boxVariants = {
  //   hidden: { scale: 0, x: -20 },
  //   visible: {
  //     scale: 1,
  //     x: 0,
  //     transition: {
  //       type: "spring",
  //       duration: 0.5,
  //       bounce: 0.4,
  //     },
  //   },
  // };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: (i: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       delay: 2 + i * 0.8,
  //     },
  //   }),
  // };

  return (
    <motion.svg
      {...(props as SVGMotionProps<SVGSVGElement>)}
      fill="none"
      height="334"
      initial="hidden"
      viewBox="0 0 395 334"
      viewport={{ once: true }}
      whileInView="visible"
      width="395"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image
        clipPath="url(#circleClip)"
        height="300"
        href="/images/transportation-types.jpg"
        preserveAspectRatio="xMidYMid slice"
        width="300"
        x="83"
        y="21"
      />

      <motion.circle
        cx="232"
        cy="171"
        fill="none"
        r="162.5"
        stroke="url(#paint0_linear_3_6)"
        strokeWidth="1"
        style={{ pathLength: 0 }}
        variants={largeCircleVariants}
      />

      {/* <motion.g variants={containerVariants}>
       <motion.g variants={circleVariants}>
          <motion.circle
            variants={pulseVariants}
            cx="162"
            cy="25"
            r="10"
            fill="#00C8FF"
            fillOpacity="0.25"
          />
          <circle cx="162" cy="25" r="8" fill="white" />
        </motion.g>

        <motion.g variants={circleVariants}>
          <motion.circle
            variants={pulseVariants}
            cx="69"
            cy="171"
            r="10"
            fill="#00C8FF"
            fillOpacity="0.25"
          />
          <circle cx="69" cy="171" r="8" fill="white" />
        </motion.g>

        <motion.g variants={circleVariants}>
          <motion.circle
            variants={pulseVariants}
            cx="142"
            cy="308"
            r="10"
            fill="#00C8FF"
            fillOpacity="0.25"
          />
          <circle cx="142" cy="308" r="8" fill="white" />
        </motion.g>

        <motion.g variants={boxGroupVariants} custom={0}>
          <motion.rect
            x="102"
            width="61"
            height="26"
            rx="5"
            fill="white"
            variants={boxVariants}
          />
          <foreignObject x="102" y="0" width="61" height="26">
            <motion.text
              x="132.5"
              y="14"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
              variants={textVariants}
              custom={0}
              style={{
                fontSize: "12px",
                display: "block",
                textAlign: "center",
              }}
            >
              01 / Air
            </motion.text>
          </foreignObject>
        </motion.g>

        <motion.g variants={boxGroupVariants} custom={1}>
          <motion.rect
            y="145"
            width="69"
            height="26"
            rx="5"
            fill="white"
            variants={boxVariants}
          />
          <foreignObject x="0" y="145" width="69" height="26">
            <motion.text
              x="34.5"
              y="159"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
              variants={textVariants}
              custom={1}
              style={{
                fontSize: "12px",
                display: "block",
                textAlign: "center",
              }}
            >
              02 / Sea
            </motion.text>
          </foreignObject>
        </motion.g>

        <motion.g variants={boxGroupVariants} custom={2}>
          <motion.rect
            x="68"
            y="283"
            width="74"
            height="26"
            rx="5"
            fill="white"
            variants={boxVariants}
          />
          <foreignObject x="68" y="283" width="74" height="26">
            <motion.text
              x="105"
              y="309"
              fontSize="12"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
              variants={textVariants}
              custom={2}
              style={{
                fontSize: "12px",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              03 / Road
            </motion.text>
          </foreignObject>
        </motion.g> 
      </motion.g> */}

      <defs>
        <clipPath id="circleClip">
          <circle cx="233" cy="171" r="150" />
        </clipPath>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_3_6"
          x1="68"
          x2="395"
          y1="175"
          y2="175"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
