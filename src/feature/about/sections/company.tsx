"use client";

import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";

import { CLIENTS } from "@/constants/clients";

interface LogoRowProps {
	logos: typeof CLIENTS;
}

export const CompanySection = () => {
	const t = useTranslations("AboutPage");
	return (
		<section className="py-12 pb-30 md:overflow-hidden md:py-16 lg:py-20">
			<div className="container max-w-5xl text-center">
				<p className="z-10 text-lg text-secondary md:text-2xl">
					{t("clients.label")}
				</p>
				<h2 className="relative z-10 mb-16 font-grotesk text-3xl text-accent-tertiary tracking-tight md:text-4xl lg:text-6xl/16">
					<StaggeredText
						className="[&>span:nth-last-child(-n+2)]:text-secondary"
						duration={0.7}
						staggerChildren={0.03}
						text={t("clients.title")}
					/>
				</h2>
			</div>

			<div className="container relative w-full max-w-4xl">
				<LogoRow logos={CLIENTS} />
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

const LogoRow = ({ logos }: LogoRowProps) => {
	return (
		<AnimatePresence>
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
						key={logo.id}
						transition={{
							duration: 1.5,
							type: "spring",
							delay: logoIndex * 0.15,
						}}
					>
						<logo.Icon />
					</motion.div>
				))}
			</div>
		</AnimatePresence>
	);
};
