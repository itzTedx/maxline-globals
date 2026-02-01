"use client";

import { memo } from "react";

import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { TextAnimate } from "@/components/animation/text-animate";

export const AboutSection = memo(() => {
	const t = useTranslations("HomePage");
	return (
		<section
			aria-labelledby="solutions-heading"
			className="container relative gap-x-4 gap-y-12 sm:grid sm:grid-cols-1 sm:overflow-hidden sm:pb-12 md:grid-cols-2 md:gap-x-9 md:gap-y-20 md:pb-20"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<h2
				className="text-balance font-grotesk text-4xl text-primary tracking-tight md:text-5xl lg:text-6xl"
				id="solutions-heading"
				itemProp="name"
			>
				<StaggeredText
					className="[&>span:nth-last-child(-n+3)]:text-accent-secondary"
					duration={0.5}
					staggerChildren={0.02}
					text={t("about.title")}
				/>
			</h2>

			<div itemProp="description">
				<TextAnimate
					animation="blurInUp"
					by="line"
					className="text-balance font-light text-brand-gray text-xl leading-relaxed md:text-2xl"
				>
					{t("about.description")}
				</TextAnimate>
			</div>

			<meta content="https://maxlineglobal.com" itemProp="url" />
			<meta content="https://maxlineglobal.com/logo.png" itemProp="logo" />
		</section>
	);
});

AboutSection.displayName = "AboutSection";
