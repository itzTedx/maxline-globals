"use client";

import { motion } from "motion/react";

interface AnimatedTextProps {
	text: string;
	variant?: "fadeIn" | "slideUp";
	delay?: number;
	className?: string;
}

export const AnimatedText = ({
	text,
	variant = "fadeIn",
	delay = 0,
	className = "",
}: AnimatedTextProps) => {
	const variants = {
		fadeIn: {
			initial: { opacity: 0 },
			animate: { opacity: 1, transition: { duration: 0.8, delay } },
		},
		slideUp: {
			initial: { opacity: 0, y: 20 },
			animate: {
				opacity: 1,
				y: 0,
				transition: { duration: 0.8, delay, type: "spring" },
			},
		},
	};

	return (
		<motion.span
			className={className}
			initial="initial"
			variants={variants[variant]}
			viewport={{ once: true }}
			whileInView="animate"
		>
			{text}
		</motion.span>
	);
};
