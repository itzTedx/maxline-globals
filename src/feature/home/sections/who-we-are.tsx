"use client";

import { useCallback, useEffect, useState } from "react";

import Image from "next/image";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";

import { IconCaretRight } from "@/assets/icons/caret";
import { IconDocument } from "@/assets/icons/document";

import { cn } from "@/lib/utils";

const SERVICES = [
	{
		id: "01",
		title: "Global reach with local expertise",
		description:
			"We operate through a strong international partner network combined with deep local market expertise. Enables efficient navigation of regional regulations, ports, and customs ensuring smooth cross-border movements with minimal delays.",
		image: "/images/warehouse.webp",
	},
	{
		id: "02",
		title: "Compliance‑driven operations",
		description:
			"Every shipment is handled in strict alignment with international logistics, safety, and trade compliance standards. Our certified processes reduce risk, prevent costly errors, and ensure your cargo moves securely through customs, ports, and borders.",
		image: "/images/warehouse.webp",
	},
	{
		id: "03",
		title: "Proactive communication",
		description:
			"We believe transparency builds trust. Our team provides regular updates, milestone notifications, and real‑time shipment visibility so you’re always informed and never left guessing about your cargo status.",
		image: "/images/warehouse.webp",
	},
	{
		id: "04",
		title: "On‑Time, On‑Budget Delivery",
		description:
			"With precise planning, reliable carrier partnerships, and experienced logistics coordination, we deliver shipments as promised meeting timelines and controlling costs without compromising safety or service quality.",
		image: "/images/warehouse.webp",
	},
];

const AUTO_PLAY_DURATION = 5000;

export default function WhoWeAre() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const handleNext = useCallback(() => {
		setDirection(1);
		setActiveIndex((prev) => (prev + 1) % SERVICES.length);
	}, []);

	const handlePrev = useCallback(() => {
		setDirection(-1);
		setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
	}, []);

	const handleTabClick = (index: number) => {
		if (index === activeIndex) return;
		setDirection(index > activeIndex ? 1 : -1);
		setActiveIndex(index);
		setIsPaused(false);
	};

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
		<section className="container w-full max-w-7xl py-8 md:py-16 lg:py-20">
			<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
				{/* Left Column: Content */}
				<div className="order-2 flex flex-col justify-center pt-4 lg:order-1 lg:col-span-5">
					<div className="mb-12 space-y-3">
						<span className="flex items-center gap-3 text-muted-foreground">
							<IconDocument />
							Who We Are
						</span>
						<h2 className="text-balance font-medium text-3xl text-primary md:text-4xl lg:text-5xl">
							Your Reliable Logistics Partner{" "}
							<span className="text-accent-secondary">Across the Globe</span>
						</h2>

						<p className="text-muted-foreground text-sm leading-relaxed">
							At Maxline Global, we simplify global trade by delivering
							reliable, compliant, and cost‑effective logistics solutions. From
							routine freight movements to complex project cargo, we help
							businesses move goods confidently across borders.
						</p>

						<Button className="bg-primary text-secondary" variant="secondary">
							Get Started <IconCaretRight className="ml-4" />
						</Button>
					</div>

					<div className="flex flex-col space-y-0">
						{SERVICES.map((service, index) => {
							const isActive = activeIndex === index;
							return (
								<button
									className={cn(
										"group relative flex items-start gap-4 border-border/50 border-t py-2 text-left transition-all duration-500 first:border-0 md:py-4",
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
												className="absolute top-0 left-0 w-full origin-top bg-foreground"
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
						<div className="p-6">
							<h3 className="font-semibold text-2xl">
								{SERVICES[activeIndex].title}
							</h3>

							<p className="font-normal text-muted-foreground text-sm leading-relaxed md:text-xl">
								{SERVICES[activeIndex].description}
							</p>
						</div>

						<div className="rounded-2xl bg-muted p-2">
							<div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border/40 bg-muted/30 md:aspect-4/3">
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
											alt={SERVICES[activeIndex].title}
											className="m-0! block h-full w-full object-cover p-0! transition-transform duration-700 hover:scale-105"
											fill
											src={SERVICES[activeIndex].image}
										/>

										<div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />
									</motion.div>
								</AnimatePresence>

								<div className="absolute right-6 bottom-6 z-20 flex gap-2 md:right-8 md:bottom-8 md:gap-3">
									<button
										aria-label="Previous"
										className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background active:scale-90 md:h-12 md:w-12"
										onClick={(e) => {
											e.stopPropagation();
											handlePrev();
										}}
									>
										<IconArrowLeft size={20} />
									</button>
									<button
										aria-label="Next"
										className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-background/80 text-foreground backdrop-blur-md transition-all hover:bg-background active:scale-90 md:h-12 md:w-12"
										onClick={(e) => {
											e.stopPropagation();
											handleNext();
										}}
									>
										<IconArrowRight size={20} />
									</button>
								</div>
							</div>
						</div>
					</div>
					<video
						autoPlay
						className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
						loop
						muted
						playsInline
						preload="auto"
						src="/videos/home-about.mp4"
					/>
				</div>
			</div>
		</section>
	);
}
