"use client";
import { lazy } from "react";

import { MapPin, Ship } from "lucide-react";

const LazyMotion = lazy(() =>
	import("motion/react").then((m) => ({ default: m.LazyMotion }))
);
const MotionDiv = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.div }))
);

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

export function RouteSection() {
	return (
		<div className="bg-linear-to-r from-blue-50 to-cyan-50 py-16">
			<div className="mx-auto max-w-7xl px-6">
				<LazyMotion features={loadFeatures} strict>
					<MotionDiv
						className="rounded-2xl bg-white p-8 shadow-lg md:p-12"
						initial={{ opacity: 0, y: 30 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, margin: "-50px" }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<div className="mb-8 text-center">
							<h2 className="mb-2 text-3xl">Shipping Route</h2>
							<p className="text-gray-600">Our primary freight corridor</p>
						</div>

						<div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
							{/* Origin */}
							<MotionDiv
								className="flex flex-col items-center"
								initial={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, scale: 1 }}
							>
								<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#078CD9] to-[#0566A8] shadow-lg">
									<MapPin className="h-8 w-8 text-white" />
								</div>
								<div className="mb-1 text-2xl">Guangzhou</div>
								<div className="text-gray-600 text-sm">China</div>
							</MotionDiv>

							{/* Route Line */}
							<MotionDiv
								className="flex flex-col items-center gap-2 md:flex-row"
								initial={{ opacity: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1 }}
							>
								<div className="h-16 w-0.5 bg-linear-to-b from-[#078CD9] via-[#06B6D4] to-[#078CD9] md:h-0 md:w-32 md:bg-linear-to-r lg:w-48" />
								<MotionDiv
									animate={{ x: [0, 10, 0] }}
									className="relative"
									transition={{
										duration: 2,
										repeat: Number.POSITIVE_INFINITY,
										ease: "easeInOut",
									}}
								>
									<Ship className="h-8 w-8 rotate-90 text-[#078CD9] drop-shadow-lg md:rotate-0" />
								</MotionDiv>
								<div className="h-16 w-0.5 bg-linear-to-b from-[#06B6D4] to-[#078CD9] md:h-0 md:w-32 md:bg-linear-to-r lg:w-48" />
							</MotionDiv>

							{/* Destination */}
							<MotionDiv
								className="flex flex-col items-center"
								initial={{ opacity: 0, scale: 0.8 }}
								transition={{ duration: 0.5, delay: 0.6 }}
								viewport={{ once: true }}
								whileInView={{ opacity: 1, scale: 1 }}
							>
								<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-[#078CD9] to-[#06B6D4] shadow-lg">
									<MapPin className="h-8 w-8 text-white" />
								</div>
								<div className="mb-1 text-2xl">Jebel Ali</div>
								<div className="text-gray-600 text-sm">UAE</div>
							</MotionDiv>
						</div>

						<div className="mt-8 grid gap-4 sm:grid-cols-3">
							{[
								{ value: "~15 days", label: "Transit Time", delay: 0.7 },
								{ value: "~7,000 km", label: "Distance", delay: 0.8 },
								{ value: "Sea Freight", label: "Mode", delay: 0.9 },
							].map((item, index) => (
								<MotionDiv
									className="rounded-xl bg-gray-50 p-4 text-center transition-colors duration-300 hover:bg-[#078CD9]/5"
									initial={{ opacity: 0, y: 20 }}
									key={Number(index)}
									transition={{ duration: 0.4, delay: item.delay }}
									viewport={{ once: true }}
									whileInView={{ opacity: 1, y: 0 }}
								>
									<div className="mb-1 text-2xl text-[#078CD9]">
										{item.value}
									</div>
									<div className="text-gray-600 text-sm">{item.label}</div>
								</MotionDiv>
							))}
						</div>
					</MotionDiv>
				</LazyMotion>
			</div>
		</div>
	);
}
