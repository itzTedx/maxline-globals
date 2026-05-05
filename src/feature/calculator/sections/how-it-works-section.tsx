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

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

const stepIcons = [Scale, TrendingUp, DollarSign, FileCheck];

export function HowItWorksSection() {
	const t = useTranslations("CalculatorPage.howItWorks");

	return (
		<div className="mb-12 bg-gray-50 py-16">
			<div className="mx-auto max-w-7xl px-6">
				<LazyMotion features={loadFeatures} strict>
					<MotionDiv
						className="mb-12 text-center"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, margin: "-50px" }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<h2 className="mb-4 text-3xl md:text-4xl">{t("title")}</h2>
						<p className="mx-auto max-w-2xl text-gray-600">
							{t("description")}
						</p>
					</MotionDiv>

					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{stepIcons.map((Icon, index) => (
							<MotionDiv
								className="rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
								initial={{ opacity: 0, y: 30 }}
								key={Number(index)}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true, margin: "-50px" }}
								whileInView={{ opacity: 1, y: 0 }}
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#078CD9] to-[#0566A8] shadow-md">
									<Icon className="h-6 w-6 text-white" />
								</div>
								<div className="mb-2 text-[#078CD9] text-sm">
									{t("stepPrefix", { step: String(index + 1) })}
								</div>
								<h3 className="mb-2 text-lg">
									{t(`steps.${index}.title` as const)}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{t(`steps.${index}.description` as const)}
								</p>
							</MotionDiv>
						))}
					</div>
				</LazyMotion>
			</div>
		</div>
	);
}
