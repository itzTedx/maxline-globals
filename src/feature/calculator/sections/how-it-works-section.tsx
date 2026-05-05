"use client";

import { lazy } from "react";

import { DollarSign, FileCheck, Scale, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

const LazyMotion = lazy(() =>
	import("motion/react").then((m) => ({ default: m.LazyMotion }))
);

const MotionDiv = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.div }))
);

const MotionLi = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.li }))
);

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

const stepIcons = [Scale, TrendingUp, DollarSign, FileCheck];

export function HowItWorksSection() {
	const t = useTranslations("CalculatorPage.howItWorks");

	return (
		<div className="mb-12 bg-gray-50 py-16">
			<div className="mx-auto max-w-7xl px-6">
				<LazyMotion features={loadFeatures} strict>
					<MotionDiv
						className="mb-9 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, margin: "-50px" }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<h2 className="text-balance font-semibold text-2xl text-primary sm:text-3xl md:text-4xl lg:text-5xl rtl:leading-snug">
							{t("title")}
						</h2>
						<p className="mx-auto max-w-2xl text-gray-600">
							{t("description")}
						</p>
					</MotionDiv>

					<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{stepIcons.map((Icon, index) => (
							<MotionLi
								className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-9"
								initial={{ opacity: 0, y: 30 }}
								key={Number(index)}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, margin: "-50px" }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-md">
									<Icon className="h-6 w-6 text-white" />
								</div>
								<span className="mb-2 text-accent text-sm">
									{t("stepPrefix", { step: String(index + 1) })}
								</span>
								<h3 className="mb-2 font-medium text-xl tracking-wide">
									{t(`steps.${index}.title` as const)}
								</h3>
								<p className="text-gray-600 leading-relaxed tracking-wide">
									{t(`steps.${index}.description` as const)}
								</p>
							</MotionLi>
						))}
					</ul>
				</LazyMotion>
			</div>
		</div>
	);
}
