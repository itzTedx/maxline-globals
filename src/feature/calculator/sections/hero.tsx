"use client";

import { lazy } from "react";

import { Ship } from "lucide-react";
import { useTranslations } from "next-intl";

const LazyMotion = lazy(() =>
	import("motion/react").then((m) => ({ default: m.LazyMotion }))
);
const MotionDiv = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.div }))
);

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

export function HeroSection() {
	const t = useTranslations("CalculatorPage.hero");

	return (
		<section className="relative overflow-hidden bg-linear-to-br from-[#078CD9] to-[#034577] text-white">
			<div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
				<LazyMotion features={loadFeatures} strict>
					<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
						<MotionDiv
							animate={{ opacity: 1, y: 0 }}
							className="flex-1 text-center md:text-left"
							initial={{ opacity: 0, y: 30 }}
							transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						>
							<MotionDiv
								animate={{
									opacity: 1,
									scale: 1,
								}}
								className="mb-3 inline-flex items-center gap-2"
								initial={{ opacity: 0, scale: 0.9 }}
								style={{
									animation: "breathe 3s ease-in-out infinite",
								}}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<Ship className="size-4" />
								<span className="text-sm">{t("subtitle")}</span>
							</MotionDiv>
							<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
								<h1 className="text-balance font-semibold text-2xl text-card sm:text-3xl md:text-4xl lg:text-5xl rtl:leading-snug">
									{t("title")}
								</h1>
								<p className="max-w-2xl text-balance text-blue-50 text-lg leading-relaxed md:text-xl">
									{t("description")}
								</p>
							</div>
						</MotionDiv>
					</div>
				</LazyMotion>
			</div>
		</section>
	);
}
{
	/* <section className="container my-12">
	<span className="flex items-center gap-2 font-medium text-muted-foreground text-xs sm:text-sm">
		<IconCalculator className="size-3 sm:size-4" />
		Instant Freight Cost Calculator
	</span>
	<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8">
		<h2
			className="text-balance font-semibold text-2xl text-primary sm:pb-6 sm:text-3xl md:pb-10 md:text-4xl lg:pb-20 lg:text-5xl rtl:leading-snug"
			id="services-heading"
			itemProp="name"
		>
			<StaggeredText
				className="[&>span:nth-last-child(-n+1)]:text-primary! [&>span:nth-last-child(-n+4)]:text-accent-secondary"
				duration={0.5}
				staggerChildren={0.02}
				text="Freight Cost Calculator"
			/>
		</h2>
		<div className="space-y-3 sm:space-y-4">
			<p className="text-base text-muted-foreground sm:text-lg md:text-xl">
				Estimate your shipping cost instantly from Guangzhou to Jebel Ali with
				our transparent pricing model.
			</p>
			<Button asChild className="w-full sm:w-auto" variant="secondary">
				<Link href="/services">
					{t("services.btnText")}{" "}
					<IconArrowRightTag className="ms-2 size-4 sm:ms-4 rtl:rotate-180" />
				</Link>
			</Button>
		</div>
	</div>
</section>; */
}
