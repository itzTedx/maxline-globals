"use client";

import { useTransition } from "react";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { sendLeadEmail } from "../../actions/lead-action";

type LeadCaptureValues = {
	name: string;
	email: string;
	phone: string;
};

export function LeadCaptureForm() {
	const tForm = useTranslations("CalculatorPage.form");
	const [isPending, startTransition] = useTransition();

	const form = useForm<LeadCaptureValues>({
		defaultValues: {
			name: "",
			email: "",
			phone: "",
		},
	});

	const handleSubmit = (values: LeadCaptureValues) => {
		startTransition(async () => {
			const result = await sendLeadEmail({
				name: values.name,
				email: values.email,
				phone: values.phone,
				grossWeight: "N/A",
				volume: "N/A",
				chargeableVolume: 0,
				totalCost: 0,
				localDoc: false,
			});

			if (result.success) {
				toast.success("Thanks! Our team will reach out shortly.");
				form.reset();
				return;
			}

			toast.error("Unable to submit right now. Please try again.");
		});
	};

	return (
		<form
			className="relative z-10 h-fit space-y-6 rounded-2xl bg-card p-4 text-left text-foreground sm:p-6 md:space-y-8 md:p-9"
			onSubmit={form.handleSubmit(handleSubmit)}
		>
			<div className="space-y-2">
				<h3 className="font-semibold text-2xl text-accent">
					Get Instant Air, Sea & Land Shipping Rates
				</h3>
				<p className="text-muted-foreground text-sm tracking-wide">
					Get instant freight cost estimates for air, sea, and land shipping.
					Compare prices and plan cargo shipments quickly with transparent
					rates.
				</p>
			</div>

			<div className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="calculator-lead-name">{tForm("name.label")}</Label>
					<Input
						id="calculator-lead-name"
						placeholder={tForm("name.placeholder")}
						required
						{...form.register("name", { required: true })}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="calculator-lead-email">{tForm("email.label")}</Label>
					<Input
						id="calculator-lead-email"
						placeholder={tForm("email.placeholder")}
						required
						type="email"
						{...form.register("email", { required: true })}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="calculator-lead-phone">{tForm("phone.label")}</Label>
					<Input
						id="calculator-lead-phone"
						placeholder={tForm("phone.placeholder")}
						required
						type="tel"
						{...form.register("phone", { required: true })}
					/>
				</div>
			</div>

			<Button className="w-full" disabled={isPending} type="submit">
				{isPending ? "Sending..." : "Get My Freight Estimate"}
			</Button>
		</form>
	);
}
