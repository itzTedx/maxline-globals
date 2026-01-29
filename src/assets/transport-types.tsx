"use client";

import React, { useEffect, useRef } from "react";

import {
	easeInOut,
	motion,
	SVGMotionProps,
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
			fill="none"
			height="326"
			initial="hidden"
			viewBox="0 0 326 326"
			viewport={{ once: true }}
			whileInView="visible"
			width="326"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.circle
				cx="163"
				cy="163"
				fill="url(#pattern0_503_1621)"
				r="147"
				style={{ pathLength: 0 }}
				variants={largeCircleVariants}
			/>
			<motion.circle
				cx="163"
				cy="163"
				r="162.5"
				stroke="url(#paint0_linear_503_1621)"
				style={{ pathLength: 0 }}
				variants={largeCircleVariants}
			/>
			<image
				clipPath="url(#circleClip)"
				height="320"
				href="/images/transportation-types.jpg"
				preserveAspectRatio="xMidYMid slice"
				width="320"
				x="5"
				y="5"
			/>
			<defs>
				<clipPath id="circleClip">
					<circle cx="163" cy="163" r="150" />
				</clipPath>
				<pattern
					height="1"
					id="pattern0_503_1621"
					patternContentUnits="objectBoundingBox"
					width="1"
				>
					<use transform="scale(0.000308642)" xlinkHref="#image0_503_1621" />
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
