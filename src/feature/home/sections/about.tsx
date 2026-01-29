"use client";

import { memo, useState } from "react";

import Image from "next/image";
import { useParams } from "next/navigation";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { TextAnimate } from "@/components/animation/text-animate";

import { TransportTypes } from "@/assets/transport-types";

import { cn } from "@/lib/utils";

export const AboutSection = memo(() => {
	const params = useParams<{ locale: string }>();
	const [active, setActive] = useState<"air" | "sea" | "road">("air");
	const t = useTranslations("HomePage");
	return (
		<section
			aria-labelledby="solutions-heading"
			className="container relative gap-x-4 gap-y-12 sm:grid sm:grid-cols-1 sm:overflow-hidden sm:pb-12 md:grid-cols-2 md:gap-x-9 md:gap-y-20 md:pb-20"
			itemScope
			itemType="https://schema.org/Organization"
		>
			<h2
				className="text-balance font-grotesk text-4xl text-brand-dark tracking-tight md:text-5xl lg:text-6xl"
				id="solutions-heading"
				itemProp="name"
			>
				<StaggeredText
					className="[&>span:nth-last-child(-n+3)]:text-secondary"
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

			<motion.div
				animate={{
					opacity: active === "air" ? 1 : 0,
					scale: active === "air" ? 1.05 : 1,
				}}
				className="absolute bottom-0 -left-1/2 hidden aspect-video h-[400px] translate-x-20 md:block md:h-[600px] lg:h-[800px]"
				itemProp="image"
				transition={{ duration: 0.5 }}
			>
				<Image
					alt="Cargo plane representing Maxline Global's air freight capabilities"
					className="object-contain"
					fill
					loading="lazy"
					quality={100}
					sizes="(max-width: 768px) 100vw,"
					src="/images/maxline-plane.webp"
				/>
			</motion.div>
			<motion.div
				animate={{
					opacity: active === "road" ? 1 : 0,
					scale: active === "road" ? 1.05 : 1,
				}}
				className="absolute -bottom-[20%] -left-1/2 hidden aspect-video h-[400px] translate-x-32 md:block md:h-[600px] lg:h-[750px]"
				itemProp="image"
				transition={{ duration: 0.5 }}
			>
				<Image
					alt="Cargo truck representing Maxline Global's road freight capabilities"
					className="object-contain"
					fill
					loading="lazy"
					quality={100}
					sizes="(max-width: 768px) 100vw,"
					src="/images/maxline-truck.webp"
				/>
			</motion.div>
			<motion.div
				animate={{
					opacity: active === "sea" ? 1 : 0,
					scale: active === "sea" ? 1.05 : 1,
				}}
				className="absolute -bottom-[20%] -left-1/2 hidden aspect-video h-[400px] translate-x-20 md:block md:h-[600px] lg:h-[800px]"
				itemProp="image"
				transition={{ duration: 0.5 }}
			>
				<Image
					alt="Cargo ship representing Maxline Global's sea freight capabilities"
					className="object-contain"
					fill
					loading="lazy"
					quality={100}
					sizes="(max-width: 768px) 100vw,"
					src="/images/maxline-ship.webp"
				/>
			</motion.div>
			<div
				className="relative flex items-center justify-center max-sm:scale-85 sm:col-start-1 md:col-start-2 rtl:-translate-x-4 rtl:md:col-start-1"
				itemProp="serviceType"
			>
				<div className="relative">
					<div
						className={cn(
							"group absolute top-[10%] size-4 translate-x-1/2 -translate-y-[12%] cursor-pointer rounded-full bg-white transition-colors ltr:left-[12%] rtl:right-[17%]",
							active === "air" && "ring-2 ring-primary"
						)}
						onMouseEnter={() => setActive("air")}
					>
						<div className="absolute -top-1/2 z-10 grid h-6 w-16 origin-right -translate-y-1/4 place-content-center rounded-sm bg-white font-medium text-xs transition-colors group-hover:bg-primary ltr:-translate-x-[85%] rtl:translate-x-[85%]">
							{t("about.type.air")}
						</div>
						<div className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/50 transition-colors group-hover:bg-primary/20" />
					</div>
					<div
						className={cn(
							"group absolute top-1/2 size-4 -translate-y-1/2 cursor-pointer rounded-full bg-white transition-colors ltr:left-0 ltr:-translate-x-1/2 rtl:right-0 rtl:translate-x-1/2",
							active === "sea" && "ring-2 ring-primary"
						)}
						onMouseEnter={() => setActive("sea")}
					>
						<div className="absolute -top-1/2 z-10 grid h-6 w-16 origin-right -translate-y-1/4 place-content-center rounded-sm bg-white font-medium text-xs transition-colors group-hover:bg-primary ltr:-translate-x-[85%] rtl:translate-x-[85%]">
							{t("about.type.sea")}
						</div>
						<div className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/50 transition-colors group-hover:bg-primary/20" />
					</div>
					<div
						className={cn(
							"group absolute bottom-[10%] size-4 -translate-x-1/2 translate-y-[12%] cursor-pointer rounded-full bg-white transition-colors ltr:left-[17%] rtl:right-[12%]",
							active === "road" && "ring-2 ring-primary"
						)}
						onMouseEnter={() => setActive("road")}
					>
						<div className="absolute -top-1/2 z-10 grid h-6 w-[4.5rem] origin-right -translate-y-1/4 place-content-center rounded-sm bg-white font-medium text-xs transition-colors group-hover:bg-primary ltr:-translate-x-[85%] rtl:translate-x-[85%]">
							{t("about.type.road")}
						</div>
						<div className="absolute top-1/2 left-1/2 size-6 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-white/50 transition-colors group-hover:bg-primary/20" />
					</div>
					<TransportTypes rtl={params.locale === "ar"} />
				</div>
			</div>

			<meta content="https://maxlineglobal.com" itemProp="url" />
			<meta content="https://maxlineglobal.com/logo.png" itemProp="logo" />
		</section>
	);
});

AboutSection.displayName = "AboutSection";
