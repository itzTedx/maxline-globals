"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import { StaggeredText } from "@/components/animation/staggered-text";
import { Separator } from "@/components/ui/separator";

const images = [
	"/images/carousel/technological-futuristic-holograms-logistics-means-transport.jpg",
	"/images/carousel/scene-with-photorealistic-logistics-operations-proceedings.jpg",
	"/images/carousel/transport-logistics-products.jpg",
	"/images/carousel/logistics-means-transport-together-with-technological-futuristic-holograms copy.jpg",
];

const PrincipleImage = React.memo(
	({
		image,
		index,
		currentImage,
		isVisible,
	}: {
		image: string;
		index: number;
		currentImage: number;
		isVisible: boolean;
	}) => (
		<motion.div
			animate={{
				clipPath:
					index === currentImage && isVisible
						? "inset(0% 0% 0% 0%)"
						: "inset(50% 50% 50% 50%)",
				scale: index === currentImage && isVisible ? 1.1 : 1,
				zIndex: index === currentImage ? 2 : 1,
			}}
			className="absolute inset-0"
			initial={{
				clipPath: "inset(50% 50% 50% 50%)",
				scale: 1,
				zIndex: index === currentImage ? 2 : 1,
			}}
			key={image}
			transition={{
				clipPath: {
					duration: 1.2,
					ease: [0.645, 0.045, 0.355, 1],
				},
				scale: {
					duration: 0.8,
					ease: [0.645, 0.045, 0.355, 1],
					delay: 0.2,
				},
			}}
		>
			<Image
				alt={`Principle ${index + 1} illustration`}
				className="object-cover"
				fill
				priority={index === currentImage}
				quality={100}
				sizes="(max-width: 768px) 100vw,  75vw"
				src={image}
			/>
		</motion.div>
	)
);

PrincipleImage.displayName = "PrincipleImage";

type Principle = {
	label: string;
	title: string;
	description: string;
};

export const Principles = () => {
	const t = useTranslations("AboutPage");
	const principles = t.raw("principles.list") as Principle[];
	const [currentImage, setCurrentImage] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);
	const imageSectionRef = useRef<HTMLDivElement>(null);
	const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: We don't need to re-run the effect for currentImage changes
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = elementRefs.current.findIndex(
							(ref) => ref === entry.target
						);
						if (index !== -1) {
							setCurrentImage(index);
						}
					}
				});
			},
			{
				root: null,
				rootMargin: "-50% 0px -50% 0px",
				threshold: 0,
			}
		);
		elementRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			observer.disconnect();
		};
	}, [currentImage]);

	useEffect(() => {
		const imageObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{
				threshold: 0.2,
			}
		);

		if (imageSectionRef.current) {
			imageObserver.observe(imageSectionRef.current);
		}

		return () => {
			imageObserver.disconnect();
		};
	}, []);

	return (
		<section className="container relative grid gap-36 py-20 md:grid-cols-2">
			<div className="space-y-12 md:space-y-20 lg:space-y-28" ref={sectionRef}>
				<h2 className="font-display font-semibold text-4xl text-accent-tertiary uppercase md:text-6xl/16">
					<StaggeredText text={t("principles.title")} />
				</h2>
				<Separator />
				{principles.map((p: Principle, index: number) => (
					<Fragment key={p.label}>
						<div
							className="grid grid-cols-4 gap-3 md:grid-cols-3"
							ref={(el) => {
								if (el) elementRefs.current[index] = el;
							}}
						>
							<h3 className="mt-2.5 font-medium text-accent-secondary text-xs uppercase md:font-light md:text-lg lg:text-xl">
								<StaggeredText text={p.label} />
							</h3>
							<div className="col-span-3 md:col-span-2">
								<h4 className="text-balance font-display font-semibold text-3xl text-accent-tertiary uppercase md:text-4xl lg:text-5xl">
									<StaggeredText delay={0.2} text={p.title} />
								</h4>
								<p className="pt-4 font-light text-lg leading-relaxed md:text-xl lg:text-2xl">
									<StaggeredText delay={0.35} text={p.description} />
								</p>
							</div>
						</div>
						<Separator className="bg-primary/20" />
					</Fragment>
				))}
			</div>
			<div
				className="sticky top-[15vh] hidden h-fit text-balance font-light text-3xl text-brand-gray leading-normal tracking-tight md:block"
				ref={imageSectionRef}
			>
				<div className="relative aspect-square overflow-hidden rounded-2xl">
					{images.map((image, index) => (
						<PrincipleImage
							currentImage={currentImage}
							image={image}
							index={index}
							isVisible={isVisible}
							key={image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
