"use client";

import { lazy } from "react";

import { Ship } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { ServiceCardBG } from "@/feature/services/service-card";
import { Link } from "@/i18n/navigation";

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
		<section className="group relative overflow-hidden bg-linear-to-br from-[#078CD9] to-[#034577] text-white">
			<div className="container relative z-10 py-16 md:py-24">
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
								<div>
									<h1 className="text-balance font-semibold text-2xl text-card sm:text-3xl md:text-4xl lg:text-5xl rtl:leading-snug">
										{t("title")}
									</h1>

									<Button
										asChild
										className="mt-4"
										size="lg"
										variant="secondary"
									>
										<Link href="/quote">Get a Quote</Link>
									</Button>
								</div>
								<p className="max-w-2xl text-balance text-blue-50 text-lg leading-relaxed md:text-xl">
									Plan your logistics smarter with our quick and easy freight
									cost calculator. Whether you're shipping by air, sea, or land,
									get an accurate estimate in seconds helping you make faster,
									cost-effective decisions for your cargo.
								</p>
							</div>
						</MotionDiv>
					</div>
				</LazyMotion>
			</div>
			<ServiceCardBG className="absolute start-0 top-8 -translate-x-6 scale-110 opacity-20 transition-transform duration-1000 ease-out group-hover/cta:translate-x-12 md:top-0 md:h-full md:scale-150 rtl:-scale-x-100" />
		</section>
	);
}
