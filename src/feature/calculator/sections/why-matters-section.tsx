"use client";

import { Clock, Package, Target, TrendingDown } from "lucide-react";
import { LazyMotion, m } from "motion/react";

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

const benefits = [
	{
		icon: TrendingDown,
		text: "Avoid overpaying for unused space",
	},
	{
		icon: Package,
		text: "Understand chargeable weight vs actual volume",
	},
	{
		icon: Clock,
		text: "Plan shipments more efficiently",
	},
	{
		icon: Target,
		text: "Make informed logistics decisions",
	},
];

export function WhyThisMattersSection() {
	return (
		<section className="container pb-12">
			<LazyMotion features={loadFeatures} strict>
				<m.div
					className="mb-12 grid gap-4 md:grid-cols-2 md:gap-12"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-50px" }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<h2 className="text-balance font-semibold text-3xl md:text-4xl">
						Why Accurate Freight Calculation Matters
					</h2>
					<p className="mx-auto max-w-3xl text-balance text-gray-600 leading-relaxed sm:text-lg">
						Choosing the right shipping method isn't just about moving cargo
						it's about balancing cost, speed, and efficiency. Incorrect
						estimations can lead to unexpected charges, delays, or logistical
						complications.
					</p>
				</m.div>

				<div className="rounded-2xl border border-gray-200 bg-linear-to-br from-blue-50 to-cyan-50 p-8 md:p-12">
					<m.div
						className="mb-6"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<h3 className="mb-2 text-2xl text-gray-800">
							Our calculator helps you:
						</h3>
					</m.div>

					<div className="grid gap-6 sm:grid-cols-2">
						{benefits.map((benefit, index) => (
							<m.div
								className="flex items-center gap-4 rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md md:gap-6"
								initial={{ opacity: 0, x: -20 }}
								key={Number(index)}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, x: 0 }}
							>
								<div className="flex size-24 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#078CD9] to-[#06B6D4] shadow-md">
									<benefit.icon className="size-12 text-white" />
								</div>
								<p className="font-medium text-gray-700 text-lg leading-relaxed sm:text-xl">
									{benefit.text}
								</p>
							</m.div>
						))}
					</div>
				</div>
			</LazyMotion>
		</section>
	);
}
