"use client";

import { lazy, useState, useTransition } from "react";

import { Calculator, Package, Scale } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { Link } from "@/i18n/navigation";

import { sendLeadEmail } from "../actions/lead-action";
import { RouteHeader } from "./components/route-header";

const LazyMotion = lazy(() =>
	import("motion/react").then((m) => ({ default: m.LazyMotion }))
);

const MotionDiv = lazy(() =>
	import("motion/react").then((m) => ({ default: m.m.div }))
);

const loadFeatures = () => import("@/lib/motion").then((res) => res.default);

type CalculatorFormValues = {
	grossWeight: string;
	volume: string;
	localDoc: boolean;
};

type LeadFormValues = {
	name: string;
	email: string;
	phone: string;
};

export function CalculatorSection() {
	const t = useTranslations("CalculatorPage.calculator");
	const tForm = useTranslations("CalculatorPage.form");

	const [isOpen, setIsOpen] = useState(false);
	const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);
	const [isPending, startTransition] = useTransition();

	const calculatorForm = useForm<CalculatorFormValues>({
		defaultValues: {
			grossWeight: "",
			volume: "",
			localDoc: false,
		},
	});

	const leadForm = useForm<LeadFormValues>({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
		},
	});

	const [chargeableVolume, setChargeableVolume] = useState<number>(0);
	const [freightCost, setFreightCost] = useState<number>(0);
	const [docFee, setDocFee] = useState<number>(0);
	const [totalCost, setTotalCost] = useState<number>(0);
	const [volumeFromWeight, setVolumeFromWeight] = useState<number>(0);

	const RATE_PER_CBM = 235;
	const DOC_FEE = 150;

	const volume = calculatorForm.watch("volume");
	const localDoc = calculatorForm.watch("localDoc");

	const handleCalculation = (values?: CalculatorFormValues) => {
		const nextValues = values ?? calculatorForm.getValues();
		const weight = Number.parseFloat(nextValues.grossWeight) || 0;
		const vol = Number.parseFloat(nextValues.volume) || 0;
		const docEnabled = nextValues.localDoc;

		const volFromWeight = weight / 500;
		setVolumeFromWeight(volFromWeight);

		const chargeable = Math.max(vol, volFromWeight);
		setChargeableVolume(chargeable);

		const freight = chargeable * RATE_PER_CBM;
		setFreightCost(freight);

		const doc = docEnabled ? DOC_FEE : 0;
		setDocFee(doc);

		setTotalCost(freight + doc);
	};

	const handleLeadSubmit = (leadValues: LeadFormValues) => {
		const calcValues = calculatorForm.getValues();
		const weight = Number.parseFloat(calcValues.grossWeight) || 0;
		const vol = Number.parseFloat(calcValues.volume) || 0;
		const volFromWeight = weight / 500;
		const chargeable = Math.max(vol, volFromWeight);
		const freight = chargeable * RATE_PER_CBM;
		const doc = calcValues.localDoc ? DOC_FEE : 0;
		const total = freight + doc;

		startTransition(async () => {
			const result = await sendLeadEmail({
				name: leadValues.name,
				email: leadValues.email,
				phone: leadValues.phone,
				grossWeight: calcValues.grossWeight,
				volume: calcValues.volume,
				chargeableVolume: chargeable,
				totalCost: total,
				localDoc: calcValues.localDoc,
			});

			if (result.success) {
				setIsOpen(false);
				setIsLeadSubmitted(true);
				leadForm.reset();
				handleCalculation(calcValues);
				toast.success("Success! You can now view the breakdown.");
			} else {
				toast.error("Something went wrong. Please try again.");
			}
		});
	};

	return (
		<div id="calculator-section">
			<LazyMotion features={loadFeatures} strict>
				<div className="">
					<MotionDiv
						className="t h-fit rounded-xl bg-card/50 p-1 backdrop-blur-lg"
						initial={{ opacity: 0, x: 30 }}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true, margin: "-100px" }}
						whileInView={{ opacity: 1, x: 0 }}
					>
						<div className="flex items-center justify-between gap-3 px-6 py-4">
							<div>
								<h2 className="font-semibold text-xl md:text-2xl">
									{t("title")}
								</h2>
								<p className="text-muted-foreground">
									Direct LCL & FCL Services
								</p>
							</div>

							<Badge className="border-green-200 bg-green-100 text-green-600">
								Active Route
							</Badge>
						</div>

						{isLeadSubmitted ? (
							<MotionDiv
								className="rounded-xl border border-border/10 bg-primary shadow-lg"
								initial={{ opacity: 0, x: 30 }}
								transition={{
									duration: 0.6,
									delay: 0.2,
									ease: [0.16, 1, 0.3, 1],
								}}
								viewport={{ once: true, margin: "-100px" }}
								whileInView={{ opacity: 1, x: 0 }}
							>
								<div className="flex items-center gap-3 px-6 pt-6">
									<div className="flex size-8 items-center justify-center rounded-sm bg-muted/5 text-muted/60">
										<Calculator className="size-5" />
									</div>
									<h3 className="text-card text-xl">{t("breakdown.title")}</h3>
								</div>

								<div className="space-y-4 p-6">
									<div className="rounded-sm border border-border/10 bg-muted/10 p-4">
										<div className="mb-3 flex items-start justify-between">
											<span className="text-sm text-zinc-200">
												{t("breakdown.volumeFromWeight")}
											</span>
											<span className="text-card">
												{volumeFromWeight.toFixed(2)} CBM
											</span>
										</div>
										<div className="mb-3 flex items-start justify-between">
											<span className="text-sm text-zinc-200">
												{t("breakdown.actualVolume")}
											</span>
											<span className="text-card">
												{Number.parseFloat(volume || "0").toFixed(2)} CBM
											</span>
										</div>
										<div className="border-border/10 border-t pt-3">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2">
													<span className="text-zinc-200">
														{t("breakdown.chargeableVolume")}
													</span>
												</div>
												<span className="font-medium text-accent-foreground">
													{chargeableVolume.toFixed(2)} CBM
												</span>
											</div>
										</div>
									</div>

									{/* Cost Items */}
									<div className="space-y-3">
										<div className="flex items-center justify-between text-zinc-200">
											<span>{t("breakdown.freightCost")}</span>
											<span className="text-lg">${freightCost.toFixed(2)}</span>
										</div>

										{localDoc && (
											<div className="flex items-center justify-between text-zinc-200">
												<span>{t("breakdown.docFee")}</span>
												<span>${docFee.toFixed(2)}</span>
											</div>
										)}
									</div>
								</div>

								<div className="m relative overflow-hidden border-border/10 border-t bg-muted/10 p-6 text-white">
									<div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
									<div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5" />
									<div className="relative z-10 flex justify-between">
										<div>
											<p className="mb-1 font-medium text-blue-50/50 text-xs uppercase tracking-wider">
												{t("total.estimatedCostString")}
											</p>
											<div className="flex items-center gap-2">
												<h3 className="font-semibold text-4xl">
													${totalCost.toFixed(2)}
												</h3>
												<p className="text-start text-blue-100 text-xs tracking-wider">
													{t("total.rate", { rate: String(RATE_PER_CBM) })}
												</p>
											</div>
										</div>

										<Button asChild>
											<Link href="/quote">Get Started</Link>
										</Button>
									</div>
								</div>
							</MotionDiv>
						) : (
							<div className="rounded-md border border-border/40 bg-card p-6">
								<div className="space-y-6 text-foreground">
									<RouteHeader />
									<div className="space-y-2">
										<Label
											className="flex items-center gap-2"
											htmlFor="gross-weight"
										>
											<Scale className="size-4 stroke-1 text-muted-foreground" />
											{t("grossWeight.label")}
										</Label>
										<Input
											id="gross-weight"
											placeholder={t("grossWeight.placeholder")}
											type="number"
											{...calculatorForm.register("grossWeight")}
										/>
										<p className="text-sm text-zinc-500">
											{t("grossWeight.helpText")}
										</p>
									</div>

									<div className="space-y-2">
										<Label className="flex items-center gap-2" htmlFor="volume">
											<Package className="size-4 stroke-1 text-muted-foreground" />
											{t("volume.label")}
										</Label>
										<Input
											id="volume"
											placeholder={t("volume.placeholder")}
											step="0.1"
											type="number"
											{...calculatorForm.register("volume")}
										/>
										<p className="mt-1 text-sm text-zinc-500">
											{t("volume.helpText")}
										</p>
									</div>

									<Label
										className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-border/50 bg-muted p-3 font-normal text-base transition-all duration-200 hover:border-accent-secondary hover:bg-accent/20"
										htmlFor="local-doc"
									>
										{t("localDoc")}

										<Switch
											checked={localDoc}
											id="local-doc"
											onCheckedChange={(checked) => {
												calculatorForm.setValue("localDoc", checked);
											}}
										/>
									</Label>
								</div>
							</div>
						)}

						<div className="p-4">
							{isLeadSubmitted ? (
								<Button
									className="w-full gap-2"
									onClick={() => handleCalculation()}
									size="lg"
								>
									<Calculator className="size-5" />
									{t("calculateBtn")}
								</Button>
							) : (
								<Dialog onOpenChange={setIsOpen} open={isOpen}>
									<DialogTrigger asChild>
										<Button className="w-full gap-2" size="lg">
											<Calculator className="size-5" />
											{t("calculateBtn")}
										</Button>
									</DialogTrigger>
									<DialogContent>
										<form onSubmit={leadForm.handleSubmit(handleLeadSubmit)}>
											<DialogHeader>
												<DialogTitle>View Cost Breakdown</DialogTitle>
												<DialogDescription>
													Please enter your details to view the estimated
													freight cost breakdown.
												</DialogDescription>
											</DialogHeader>
											<div className="grid gap-4 py-4">
												<div className="grid gap-2">
													<Label htmlFor="lead-name">
														{tForm("name.label")}
													</Label>
													<Input
														id="lead-name"
														placeholder={tForm("name.placeholder")}
														required
														{...leadForm.register("name", { required: true })}
													/>
												</div>
												<div className="grid gap-2">
													<Label htmlFor="lead-email">
														{tForm("email.label")}
													</Label>
													<Input
														id="lead-email"
														placeholder={tForm("email.placeholder")}
														required
														type="email"
														{...leadForm.register("email", { required: true })}
													/>
												</div>
												<div className="grid gap-2">
													<Label htmlFor="lead-phone">
														{tForm("phone.label")}
													</Label>
													<Input
														id="lead-phone"
														placeholder={tForm("phone.placeholder")}
														required
														type="tel"
														{...leadForm.register("phone", { required: true })}
													/>
												</div>
											</div>
											<div className="mt-4 flex justify-end">
												<Button disabled={isPending} type="submit">
													{isPending ? "Sending..." : "Show Results"}
												</Button>
											</div>
										</form>
									</DialogContent>
								</Dialog>
							)}
						</div>
					</MotionDiv>

					<p className="mt-4 text-center text-xs text-zinc-600">
						{t("total.disclaimer")}
					</p>
				</div>
			</LazyMotion>
		</div>
	);
}
