"use client";

import React from "react";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";

// import SimpleMarquee from "@/components/animation/simple-marquee";
const SimpleMarquee = dynamic(
	() => import("@/components/animation/simple-marquee"),
	{ ssr: false }
);

export type ServiceMessages = {
	industriesTitle?: string;
	industries?: string[];
};

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
	<div className="mx-1 cursor-pointer duration-300 ease-in-out hover:scale-105 md:mx-2.5">
		{children}
	</div>
);

export default function MarqueeSection({
	industries,
	messages,
	serviceKey,
}: {
	industries: { title: string; image: string }[];
	messages: Record<string, ServiceMessages>;
	serviceKey: string;
}) {
	const params = useParams();
	const locale = (params?.locale as string) || "en";
	const isRTL = locale === "ar";
	return (
		<section className="relative overflow-hidden pb-10 md:pb-20">
			<h3 className="container mx-0 mb-8 max-w-4xl text-balance font-grotesk text-4xl text-brand-dark md:mb-12 md:text-6xl">
				{messages[serviceKey]?.industriesTitle ||
					"Industries we move the Maxline Global way"}
			</h3>
			<SimpleMarquee
				baseVelocity={4}
				className="w-full"
				direction={isRTL ? "right" : "left"}
				draggable
				repeat={4}
				scrollAwareDirection={true}
				scrollSpringConfig={{ damping: 50, stiffness: 400 }}
				slowDownFactor={0.1}
				slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
				slowdownOnHover
				useScrollVelocity={true}
			>
				{industries.map((item, i) => (
					<MarqueeItem key={`${i + 1}-item`}>
						<div
							className="relative aspect-4/3 h-60 overflow-hidden rounded-2xl p-6 font-grotesk text-2xl text-background md:h-80 md:p-9 md:text-4xl"
							dir={locale === "ar" ? "rtl" : "ltr"}
						>
							<h4 className="relative z-20 flex h-full items-end">
								{
									(
										(messages[serviceKey] as Record<string, unknown>)
											?.industries as string[]
									)[i]
								}
							</h4>
							<div className="absolute bottom-0 left-0 z-10 h-1/2 w-full bg-linear-to-t from-secondary/80 to-transparent" />
							<div className="absolute inset-0 z-10 bg-secondary mix-blend-hue" />
							<Image
								alt={
									(
										(messages[serviceKey] as Record<string, unknown>)
											?.industries as string[]
									)[i]
								}
								className="object-cover"
								fill
								loading={i < 2 ? "eager" : "lazy"}
								priority={i < 2}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								src={item.image}
							/>
						</div>
					</MarqueeItem>
				))}
			</SimpleMarquee>
		</section>
	);
}
