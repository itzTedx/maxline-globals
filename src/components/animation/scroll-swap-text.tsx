"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";

interface TextProps {
	label: string;
	containerRef: React.RefObject<HTMLDivElement | null>;
	offset?: [string, string];
	className?: string;
}

const ScrollAndSwapText = ({
	label,
	offset = ["0 0", "0 1"],
	className,
	containerRef,
	...props
}: TextProps) => {
	const ref = useRef<HTMLSpanElement>(null);

	const { scrollYProgress } = useScroll({
		container: containerRef,
		target: ref,
		// biome-ignore lint/suspicious/noExplicitAny: framer motion doesn't export the type, so we have to cast it
		offset: offset as any,
	});

	const top = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
	const bottom = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

	return (
		<span
			className={`relative flex items-center justify-center overflow-hidden p-0 ${className}`}
			ref={ref}
			{...props}
		>
			<span aria-hidden="true" className="relative text-transparent">
				{label}
			</span>
			<motion.span className="absolute" style={{ top: top }}>
				{label}
			</motion.span>
			<motion.span
				aria-hidden="true"
				className="absolute"
				style={{ top: bottom }}
			>
				{label}
			</motion.span>
		</span>
	);
};

export default ScrollAndSwapText;
