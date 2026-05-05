"use client";

import { lazy } from "react";

import { FileText, MessageSquare } from "lucide-react";

const LazyMotion = lazy(() =>
	import("motion/react").then((m) => ({ default: m.LazyMotion }))
);
const MotionDiv = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.div }))
);

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

export function CTASection() {
	return (
		<div className="mx-auto max-w-7xl px-6 py-16">
			<LazyMotion features={loadFeatures} strict>
				<MotionDiv
					className="rounded-2xl bg-linear-to-br from-[#078CD9] via-[#0566A8] to-[#034577] p-8 text-center shadow-2xl md:p-12"
					initial={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-50px" }}
					whileInView={{ opacity: 1, scale: 1 }}
				>
					<MotionDiv
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<h2 className="mb-4 text-3xl text-white md:text-4xl">
							Need a Detailed Quote?
						</h2>
						<p className="mx-auto mb-8 max-w-2xl text-blue-50 text-lg leading-relaxed">
							Our team is ready to provide customized shipping solutions
							tailored to your specific needs. Get in touch for personalized
							service and competitive rates.
						</p>
					</MotionDiv>

					<MotionDiv
						className="flex flex-col justify-center gap-4 sm:flex-row"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[#078CD9] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl active:scale-95">
							<FileText className="h-5 w-5" />
							Request Quote
						</button>
						<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-xl active:scale-95">
							<MessageSquare className="h-5 w-5" />
							Contact Us
						</button>
					</MotionDiv>
				</MotionDiv>
			</LazyMotion>
		</div>
	);
}
