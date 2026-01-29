import React from "react";

import Image from "next/image";

import { useTranslations } from "next-intl";

import SimpleMarquee from "@/components/animation/simple-marquee";
import { HeroHeader } from "@/components/hero-header";

import { CAROUSEL_IMAGES } from "@/constants";

const MarqueeItem = React.memo(
	({ children }: { children: React.ReactNode }) => (
		<div className="mx-2.5 cursor-pointer duration-300 ease-in-out hover:scale-105">
			{children}
		</div>
	)
);

MarqueeItem.displayName = "MarqueeItem";

export const AboutHeroSection = () => {
	const t = useTranslations("AboutPage");
	const heroTitle = t("heroTitle");
	// Optionally split heroTitle for styling if needed
	return (
		<div className="overflow-hidden">
			<HeroHeader
				className="container"
				subtitle={t("badge")}
				title={[
					{ text: heroTitle.split(".")[0] },
					{ text: heroTitle.split(".")[1] || "", className: "text-secondary" },
				]}
			/>

			<section className="relative flex flex-col items-center justify-center overflow-hidden py-3">
				<div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 md:space-y-4">
					<SimpleMarquee
						baseVelocity={3}
						className="w-full"
						direction="left"
						draggable
						repeat={4}
						scrollAwareDirection={true}
						scrollSpringConfig={{ damping: 50, stiffness: 400 }}
						slowDownFactor={0.1}
						slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
						slowdownOnHover
						useScrollVelocity={true}
					>
						{CAROUSEL_IMAGES.map((src, i) => (
							<MarqueeItem key={`${i + 1}-item`}>
								<div className="relative aspect-4/3 h-60 md:h-96">
									<Image
										alt={`Logistics and supply chain image ${i + 1}`}
										className="rounded-2xl object-cover"
										fill
										loading={i < 2 ? "eager" : "lazy"}
										priority={i < 2}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										src={src}
									/>
								</div>
							</MarqueeItem>
						))}
					</SimpleMarquee>
				</div>
			</section>
		</div>
	);
};
