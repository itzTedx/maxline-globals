"use client";

import { Award, Boxes, Smartphone, Users, Zap } from "lucide-react";
import { LazyMotion, m } from "motion/react";

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

const benefits = [
	{
		icon: Zap,
		title: "Instant Estimates",
		description: "Get results in seconds without waiting for manual quotes",
		color: "from-[#078CD9] to-[#0566A8]",
	},
	{
		icon: Award,
		title: "Industry-Standard Logic",
		description: "Built using real freight calculation methods",
		color: "from-[#06B6D4] to-[#078CD9]",
	},
	{
		icon: Smartphone,
		title: "User-Friendly Interface",
		description: "Designed for quick input and clear output",
		color: "from-[#078CD9] to-[#06B6D4]",
	},
	{
		icon: Boxes,
		title: "Supports Multiple Shipment Types",
		description: "Suitable for air, sea, and land freight",
		color: "from-[#0566A8] to-[#078CD9]",
	},
	{
		icon: Users,
		title: "Backed by Logistics Experts",
		description: "Powered by real-world experience in global shipping",
		color: "from-[#06B6D4] to-[#0566A8]",
	},
];

export function BenefitsSection() {
	return (
		<div className="mx-auto max-w-7xl px-6 py-16">
			<LazyMotion features={loadFeatures} strict>
				<m.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-50px" }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<h2 className="mb-4 text-3xl md:text-4xl">Why Use Our Calculator</h2>
					<p className="mx-auto max-w-2xl text-gray-600">
						Experience the difference with a tool built by logistics
						professionals for logistics needs
					</p>
				</m.div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit, index) => (
						<m.div
							className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
							initial={{ opacity: 0, y: 30 }}
							key={Number(index)}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true, margin: "-50px" }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<div
								className={`h-14 w-14 bg-linear-to-br ${benefit.color} mb-5 flex items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
							>
								<benefit.icon className="h-7 w-7 text-white" />
							</div>
							<h3 className="mb-3 text-gray-800 text-xl">{benefit.title}</h3>
							<p className="text-gray-600 leading-relaxed">
								{benefit.description}
							</p>
						</m.div>
					))}
				</div>

				{/* Trust Badge */}
				<m.div
					className="mt-12 text-center"
					initial={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, scale: 1 }}
				>
					<div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-4 shadow-md">
						<Award className="h-6 w-6 text-[#078CD9]" />
						<span className="text-gray-700">
							Trusted by <span className="text-[#078CD9]">500+</span> businesses
							worldwide
						</span>
					</div>
				</m.div>
			</LazyMotion>
		</div>
	);
}
