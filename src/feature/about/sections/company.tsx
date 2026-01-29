"use client";

import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";

import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from "@/assets/mock-logos";

interface LogoRowProps {
	logos: (typeof items)[number][number][];
	index: number;
	activeIndex: number;
}

const items = [
	[Logo1, Logo2, Logo3, Logo4],
	[Logo5, Logo6, Logo2, Logo3],
];

export const CompanySection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const t = useTranslations("AboutPage");

	useEffect(() => {
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		const intervalId = setInterval(() => setActiveIndex(nextIndex), 3000);

		return () => clearInterval(intervalId);
	}, [activeIndex]);
	return (
		<section className="py-12 pb-30 md:overflow-hidden md:py-16 lg:py-20">
			<div className="container max-w-5xl text-center">
				<p className="z-10 text-lg text-secondary md:text-2xl">
					{t("clients.label")}
				</p>
				<h2 className="relative z-10 mb-16 font-grotesk text-3xl text-brand-dark tracking-tight md:text-4xl lg:text-6xl/16">
					<StaggeredText
						className="[&>span:nth-last-child(-n+2)]:text-secondary"
						duration={0.7}
						staggerChildren={0.03}
						text={t("clients.title")}
					/>
				</h2>
			</div>

			<div className="container relative w-full max-w-4xl">
				{items.map((logos, index) => (
					<LogoRow
						activeIndex={activeIndex}
						index={index}
						// biome-ignore lint/suspicious/noArrayIndexKey: index is unique
						key={index}
						logos={logos}
					/>
				))}
			</div>
		</section>
	);
};

export const MarqueeItem = React.memo(
	({ children }: { children: React.ReactNode }) => (
		<div className="mx-6 cursor-pointer text-brand-gray duration-300 ease-in-out hover:scale-105">
			{children}
		</div>
	)
);

MarqueeItem.displayName = "MarqueeItem";

const LogoRow = ({ logos, index, activeIndex }: LogoRowProps) => {
	const isActive = index === activeIndex;

	return (
		<AnimatePresence>
			{isActive && (
				<div className="absolute top-0 left-0 grid h-full w-full grid-cols-2 items-center justify-center gap-9 px-5 md:grid-cols-4 md:gap-x-6 md:px-8">
					{logos.map((logo, logoIndex) => (
						<motion.div
							animate={{
								y: 0,
								opacity: 1,
								filter: "blur(0px)",
							}}
							className="grid scale-75 place-content-center sm:scale-90"
							exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
							initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
							// biome-ignore lint/suspicious/noArrayIndexKey: logoIndex is unique
							key={logoIndex}
							transition={{
								duration: 1.5,
								type: "spring",
								delay: logoIndex * 0.15,
							}}
						>
							{React.createElement(logo)}
						</motion.div>
					))}
				</div>
			)}
		</AnimatePresence>
	);
};
