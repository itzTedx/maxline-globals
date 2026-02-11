"use client";

import { useCallback, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";

import { IconCaretRight } from "@/assets/icons/caret";
import { IconDocument } from "@/assets/icons/document";

import { cn } from "@/lib/utils";

const WHO_WE_ARE = [
	{
		id: "01",
		title: "Global reach with local expertise",
		description:
			"We operate through a strong international partner network combined with deep local market expertise. Enables efficient navigation of regional regulations, ports, and customs ensuring smooth cross-border movements with minimal delays.",
		image: "/images/who-we-are/global-reach.webp",
	},
	{
		id: "02",
		title: "Compliance‑driven operations",
		description:
			"Every shipment is handled in strict alignment with international logistics, safety, and trade compliance standards. Our certified processes reduce risk, prevent costly errors, and ensure your cargo moves securely through customs, ports, and borders.",
		image: "/images/who-we-are/compliance.webp",
	},
	{
		id: "03",
		title: "Proactive communication",
		description:
			"We believe transparency builds trust. Our team provides regular updates, milestone notifications, and real‑time shipment visibility so you’re always informed and never left guessing about your cargo status.",
		image: "/images/who-we-are/proactive.webp",
	},
	{
		id: "04",
		title: "On‑Time, On‑Budget Delivery",
		description:
			"With precise planning, reliable carrier partnerships, and experienced logistics coordination, we deliver shipments as promised meeting timelines and controlling costs without compromising safety or service quality.",
		image: "/images/who-we-are/on-time.webp",
	},
];

const AUTO_PLAY_DURATION = 5000;

export function WhoWeAre() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const handleNext = useCallback(() => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % WHO_WE_ARE.length);
	}, []);

	const handlePrev = useCallback(() => {
		setDirection(-1);
		setActiveIndex(
			(prev) => (prev - 1 + WHO_WE_ARE.length) % WHO_WE_ARE.length
		);
	}, []);

	const handleTabClick = (index: number) => {
		if (index === activeIndex) return;
		setDirection(index > activeIndex ? 1 : -1);
		setActiveIndex(index);
		setIsPaused(false);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: No need to re-run when handleNext changes
	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			handleNext();
		}, AUTO_PLAY_DURATION);

		return () => clearInterval(interval);
	}, [activeIndex, isPaused, handleNext]);

	const variants = {
		enter: (direction: number) => ({
			y: direction > 0 ? "-100%" : "100%",
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			y: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			zIndex: 0,
			y: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
	};

	return (
		<section className="mx-auto w-full max-w-7xl py-8 md:py-16 lg:py-20">
			<div className="grid grid-cols-1 items-start gap-4 sm:gap-6 md:gap-12 lg:grid-cols-12 lg:gap-16">
				{/* Left Column: Content */}
				<div className="order-2 flex flex-col justify-center px-6 pt-4 md:px-0 lg:order-1 lg:col-span-5">
					<div className="mb-6 space-y-3 md:mb-12">
						<span className="flex items-center gap-3 text-muted-foreground">
							<IconDocument />
							Who We Are
						</span>
						<h2 className="text-balance font-display font-semibold text-3xl text-primary uppercase md:text-4xl lg:text-6xl">
							Your Reliable Logistics Partner{" "}
							<span className="text-accent-secondary">Across the Globe</span>
						</h2>

						<p className="text-muted-foreground leading-relaxed">
							At Maxline Global, we simplify global trade by delivering
							reliable, compliant, and cost‑effective logistics solutions. From
							routine freight movements to complex project cargo, we help
							businesses move goods confidently across borders.
						</p>

						<Button
							asChild
							className="bg-primary text-secondary"
							variant="secondary"
						>
							<Link href="/quote">
								Get Started <IconCaretRight className="ml-4" />
							</Link>
						</Button>
					</div>

					<div className="flex flex-col space-y-0">
						{WHO_WE_ARE.map((service, index) => {
							const isActive = activeIndex === index;
							return (
								<button
									className={cn(
										"group relative flex cursor-pointer items-start gap-4 border-border/50 border-t py-2 text-left transition-all duration-500 first:border-0 md:py-4",
										isActive
											? "text-foreground"
											: "text-muted-foreground/60 hover:text-foreground"
									)}
									key={service.id}
									onClick={() => handleTabClick(index)}
								>
									<div className="absolute top-0 bottom-0 left-[-16px] w-[2px] bg-muted md:left-[-24px]">
										{isActive && (
											<motion.div
												animate={
													isPaused ? { height: "0%" } : { height: "100%" }
												}
												className="absolute top-0 left-0 w-full origin-top bg-accent"
												initial={{ height: "0%" }}
												key={`progress-${index}-${isPaused}`}
												transition={{
													duration: AUTO_PLAY_DURATION / 1000,
													ease: "linear",
												}}
											/>
										)}
									</div>

									<span className="mt-2 font-medium text-[9px] tabular-nums opacity-50 md:text-[10px]">
										{service.id}
									</span>

									<span
										className={cn(
											"font-normal text-xl transition-[color,font-weight] duration-500 md:text-2xl",
											isActive ? "font-medium text-foreground" : ""
										)}
									>
										{service.title}
									</span>
								</button>
							);
						})}
					</div>
				</div>

				<div className="relative order-1 flex h-fit flex-col overflow-hidden rounded-2xl bg-secondary p-3 lg:order-2 lg:col-span-7">
					<div
						className="group/gallery relative z-10"
						onMouseEnter={() => setIsPaused(true)}
						onMouseLeave={() => setIsPaused(false)}
					>
						<div className="space-y-2 p-6">
							<h3 className="font-medium text-3xl text-accent-secondary">
								{WHO_WE_ARE[activeIndex].title}
							</h3>

							<p className="font-normal text-lg text-muted-foreground leading-relaxed md:text-xl">
								{WHO_WE_ARE[activeIndex].description}
							</p>
						</div>

						<div className="rounded-2xl bg-secondary p-2 shadow-sm">
							<div className="relative aspect-5/4 overflow-hidden rounded-2xl border border-border/40 bg-muted/30 md:aspect-6/4">
								<AnimatePresence
									custom={direction}
									initial={false}
									mode="popLayout"
								>
									<motion.div
										animate="center"
										className="absolute inset-0 h-full w-full cursor-pointer"
										custom={direction}
										exit="exit"
										initial="enter"
										key={activeIndex}
										onClick={handleNext}
										transition={{
											y: { type: "spring", stiffness: 260, damping: 32 },
											opacity: { duration: 0.4 },
										}}
										variants={variants}
									>
										<Image
											alt={WHO_WE_ARE[activeIndex].title}
											className="m-0! block h-full w-full object-cover p-0! transition-transform duration-700 hover:scale-105"
											fill
											src={WHO_WE_ARE[activeIndex].image}
										/>

										<div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />
									</motion.div>
								</AnimatePresence>

								<div className="absolute right-6 bottom-6 z-20 flex gap-2 md:right-8 md:bottom-8 md:gap-3">
									<button
										aria-label="Previous"
										className="flex size-10 items-center justify-center rounded-md border border-border/50 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background active:scale-90"
										onClick={(e) => {
											e.stopPropagation();
											handlePrev();
										}}
									>
										<IconArrowLeft className="size-4" />
									</button>
									<button
										aria-label="Next"
										className="flex size-10 items-center justify-center rounded-md border border-border/50 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background active:scale-90"
										onClick={(e) => {
											e.stopPropagation();
											handleNext();
										}}
									>
										<IconArrowRight className="size-4" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<video
						autoPlay
						className="mask-linear-to-80% absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-50"
						loop
						muted
						playsInline
						preload="auto"
						src="/videos/about-bg.webm"
					/>
				</div>
			</div>
		</section>
	);
}
