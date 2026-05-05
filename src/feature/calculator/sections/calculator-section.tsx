"use client";

import { lazy, useEffect, useState } from "react";

import { Calculator, Package, Scale } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const LazyMotion = lazy(() =>
	import("motion/react").then((m) => ({ default: m.LazyMotion }))
);

const MotionDiv = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.div }))
);

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

export function CalculatorSection() {
	const t = useTranslations("CalculatorPage.calculator");

	const [grossWeight, setGrossWeight] = useState<string>("");
	const [volume, setVolume] = useState<string>("");
	const [localDoc, setLocalDoc] = useState<boolean>(false);

	const [chargeableVolume, setChargeableVolume] = useState<number>(0);
	const [freightCost, setFreightCost] = useState<number>(0);
	const [docFee, setDocFee] = useState<number>(0);
	const [totalCost, setTotalCost] = useState<number>(0);
	const [volumeFromWeight, setVolumeFromWeight] = useState<number>(0);

	const [isCalculated, setIsCalculated] = useState(false);

	const RATE_PER_CBM = 150; // USD per CBM
	const DOC_FEE = 150; // USD

	useEffect(() => {
		if (grossWeight || volume) {
			setIsCalculated(true);
		}
	}, [grossWeight, volume]);

	useEffect(() => {
		const weight = Number.parseFloat(grossWeight) || 0;
		const vol = Number.parseFloat(volume) || 0;

		// Calculate volume from weight (1 CBM = 500 kg)
		const volFromWeight = weight / 500;
		setVolumeFromWeight(volFromWeight);

		// Chargeable volume is the higher of actual volume or weight-based volume
		const chargeable = Math.max(vol, volFromWeight);
		setChargeableVolume(chargeable);

		// Calculate costs
		const freight = chargeable * RATE_PER_CBM;
		setFreightCost(freight);

		const doc = localDoc ? DOC_FEE : 0;
		setDocFee(doc);

		setTotalCost(freight + doc);
	}, [grossWeight, volume, localDoc]);

	return (
		<div className="mx-auto max-w-7xl px-6 py-16" id="calculator-section">
			<LazyMotion features={loadFeatures} strict>
				<div className="grid gap-8 lg:grid-cols-2">
					<MotionDiv
						className="h-fit rounded-2xl border border-border/60 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
						initial={{ opacity: 0, x: -30 }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true, margin: "-100px" }}
						whileInView={{ opacity: 1, x: 0 }}
					>
						<div className="mb-8 flex items-center gap-3">
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-dark">
								<Calculator className="size-6 text-white" />
							</div>
							<h2 className="text-2xl">{t("title")}</h2>
						</div>

						<div className="space-y-6">
							<div className="space-y-2">
								<Label
									className="flex items-center gap-2"
									htmlFor="gross-weight"
								>
									<Scale className="size-4" />
									{t("grossWeight.label")}
								</Label>
								<Input
									id="gross-weight"
									onChange={(e) => setGrossWeight(e.target.value)}
									placeholder={t("grossWeight.placeholder")}
									type="number"
									value={grossWeight}
								/>
								<p className="text-sm text-zinc-500">
									{t("grossWeight.helpText")}
								</p>
							</div>

							<div className="space-y-2">
								<Label className="flex items-center gap-2" htmlFor="volume">
									<Package className="size-4" />
									{t("volume.label")}
								</Label>
								<Input
									id="volume"
									onChange={(e) => setVolume(e.target.value)}
									placeholder={t("volume.placeholder")}
									step="0.1"
									type="number"
									value={volume}
								/>
								<p className="mt-1 text-sm text-zinc-500">
									{t("volume.helpText")}
								</p>
							</div>

							<Label
								className="flex cursor-pointer items-center justify-between gap-3 rounded-md border bg-muted p-3 font-normal text-base transition-all duration-200 hover:border-accent-secondary hover:bg-accent/20"
								htmlFor="local-doc"
							>
								{t("localDoc")}

								<Switch
									checked={localDoc}
									id="local-doc"
									onCheckedChange={setLocalDoc}
								/>
							</Label>

							<Button className="w-full gap-2" size="lg">
								<Calculator className="size-5" />
								{t("calculateBtn")}
							</Button>
						</div>
					</MotionDiv>

					<div className="h-fit lg:sticky lg:top-8">
						<MotionDiv
							className="rounded-2xl border border-zinc-200 bg-linear-to-br from-blue-50 to-cyan-50 p-8 shadow-lg"
							initial={{ opacity: 0, x: 30 }}
							transition={{
								duration: 0.6,
								delay: 0.2,
								ease: [0.16, 1, 0.3, 1],
							}}
							viewport={{ once: true, margin: "-100px" }}
							whileInView={{ opacity: 1, x: 0 }}
						>
							<h3 className="mb-6 text-xl text-zinc-800">
								{t("breakdown.title")}
							</h3>

							<div className="mb-6 space-y-4">
								<div className="rounded-xl border border-zinc-200 bg-white p-4">
									<div className="mb-3 flex items-start justify-between">
										<span className="text-sm text-zinc-600">
											{t("breakdown.volumeFromWeight")}
										</span>
										<span className="font-mono">
											{volumeFromWeight.toFixed(2)} CBM
										</span>
									</div>
									<div className="mb-3 flex items-start justify-between">
										<span className="text-sm text-zinc-600">
											{t("breakdown.actualVolume")}
										</span>
										<span className="font-mono">
											{Number.parseFloat(volume || "0").toFixed(2)} CBM
										</span>
									</div>
									<div className="border-zinc-200 border-t pt-3">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<span className="text-zinc-700">
													{t("breakdown.chargeableVolume")}
												</span>
											</div>
											<span className="font-mono text-[#078CD9]">
												{chargeableVolume.toFixed(2)} CBM
											</span>
										</div>
										<p className="mt-1 text-xs text-zinc-500">
											{t("breakdown.higherValueNote")}
										</p>
									</div>
								</div>

								{/* Cost Items */}
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<span className="text-zinc-700">
											{t("breakdown.freightCost")}
										</span>
										<span className="font-mono text-lg">
											AED {freightCost.toFixed(2)}
										</span>
									</div>

									{localDoc && (
										<div className="flex items-center justify-between text-zinc-700">
											<span>{t("breakdown.docFee")}</span>
											<span className="font-mono">AED {docFee.toFixed(2)}</span>
										</div>
									)}
								</div>
							</div>

							<MotionDiv
								animate={isCalculated ? { scale: [1, 1.02, 1] } : {}}
								className="relative overflow-hidden rounded-xl bg-linear-to-br from-[#078CD9] to-[#0566A8] p-6 text-white shadow-lg"
								initial={{ scale: 1 }}
								transition={{ duration: 0.4 }}
							>
								<div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
								<div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5" />
								<div className="relative z-10 flex justify-between">
									<div className="mb-2 max-w-xs font-medium text-blue-50 text-xl">
										{t("total.totalString")} <br />
										{t("total.estimatedCostString")}
									</div>
									<div>
										<MotionDiv
											animate={{ opacity: 1, y: 0 }}
											className="font-mono font-semibold text-4xl"
											initial={{ opacity: 0.5, y: 5 }}
											key={totalCost}
											transition={{ duration: 0.3 }}
										>
											AED {totalCost.toFixed(2)}
										</MotionDiv>
										<div className="mt-1 text-end text-blue-100 text-xs tracking-wider">
											{t("total.rate", { rate: String(RATE_PER_CBM) })}
										</div>
									</div>
								</div>
							</MotionDiv>

							<p className="mt-4 text-center text-xs text-zinc-600">
								{t("total.disclaimer")}
							</p>
						</MotionDiv>
					</div>
				</div>
			</LazyMotion>
		</div>
	);
}
