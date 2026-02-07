"use client";

import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Control, FieldValues, Path, useForm } from "react-hook-form";
import { toast } from "sonner";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { sendQuote } from "@/feature/forms/sendQuote";
import { cn } from "@/lib/utils";

import { type QuoteFormData, quoteSchema } from "./schema/quote-schema";

// Reusable Form Section Component
const FormSection = ({
	title,
	children,
	className,
}: {
	title?: string;
	children: React.ReactNode;
	className?: string;
}) => (
	<div
		className={cn(
			"space-y-6 rounded-2xl bg-white p-4 sm:p-6 md:p-10",
			className
		)}
	>
		{title && (
			<h3 className="font-medium text-2xl text-accent-tertiary sm:text-3xl md:text-4xl">
				{title}
			</h3>
		)}
		{children}
	</div>
);

// Reusable Input Field Component
const FormInput = <T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	type = "text",
	className,
}: {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder: string;
	type?: string;
	className?: string;
}) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem className={className}>
				<FormLabel>{label}</FormLabel>
				<FormControl>
					<Input
						placeholder={placeholder}
						type={type}
						{...field}
						onChange={
							type === "number"
								? (e) => field.onChange(Number(e.target.value))
								: field.onChange
						}
						value={field.value as string}
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		)}
	/>
);

// Reusable Textarea Field Component
const FormTextarea = <T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	className,
}: {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder: string;
	className?: string;
}) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem className={className}>
				<FormLabel>{label}</FormLabel>
				<FormControl>
					<Textarea
						className="resize-none"
						placeholder={placeholder}
						{...field}
						value={field.value as string}
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		)}
	/>
);

// Reusable Date Picker Component
const FormDatePicker = <T extends FieldValues>({
	control,
	name,
	label,
}: {
	control: Control<T>;
	name: Path<T>;
	label: string;
}) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem className="flex flex-col">
				<FormLabel>{label}</FormLabel>
				<Popover>
					<PopoverTrigger asChild>
						<FormControl>
							<Button
								className={cn(
									"w-full border-muted-foreground/20 bg-muted pl-3 text-left font-normal",
									!field.value && "text-muted-foreground"
								)}
								variant={"outline"}
							>
								{field.value ? (
									format(field.value as Date, "PPP")
								) : (
									<span>Pick a date</span>
								)}
								<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
							</Button>
						</FormControl>
					</PopoverTrigger>
					<PopoverContent align="start" className="w-auto p-0">
						<Calendar
							disabled={(date) =>
								date < new Date() || date < new Date("1900-01-01")
							}
							initialFocus
							mode="single"
							onSelect={field.onChange}
							selected={field.value as Date}
						/>
					</PopoverContent>
				</Popover>
				<FormMessage />
			</FormItem>
		)}
	/>
);

// Reusable Select Component
const FormSelect = <T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	options,
}: {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder: string;
	options: { value: string; label: string }[];
}) => (
	<FormField
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem className="w-full">
				<FormLabel>{label}</FormLabel>
				<Select
					defaultValue={field.value as string}
					onValueChange={field.onChange}
				>
					<FormControl>
						<SelectTrigger className="!h-11 w-full border-muted-foreground/20 bg-muted">
							<SelectValue placeholder={placeholder} />
						</SelectTrigger>
					</FormControl>
					<SelectContent>
						{options.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FormMessage />
			</FormItem>
		)}
	/>
);

export const QuoteForm = () => {
	const t = useTranslations("QuoteForm");
	const [isPending, startTransition] = useTransition();
	const [result, setResult] = useState<null | {
		success: boolean;
		error?: unknown;
	}>(null);
	const form = useForm<QuoteFormData>({
		resolver: zodResolver(quoteSchema),
		defaultValues: {
			customerName: "",
			companyName: "",
			email: "",
			phone: "",
			senderName: "",
			recipientName: "",
			senderAddress: "",
			recipientAddress: "",
			packageDescription: "",
			additionalInformation: "",
			attachFiles: undefined,
			pieces: undefined,
			preferredDeliveryDate: undefined,
			preferredModeOfTransport: undefined,
			shippingDate: undefined,
			typeOfPackaging: "",
			volume: undefined,
			weight: undefined,
		},
		mode: "onTouched",
	});

	function onSubmit(values: QuoteFormData) {
		startTransition(async () => {
			const res = await sendQuote(values);
			if (res.success) {
				setResult(res);
				toast.success("Your quote request was sent successfully.");
				form.reset();
			} else {
				// If error is an object with field errors
				if (res.error && typeof res.error === "object") {
					Object.entries(res.error).forEach(([field, messages]) => {
						form.setError(field as keyof QuoteFormData, {
							type: "server",
							message: Array.isArray(messages)
								? messages.join(", ")
								: String(messages),
						});
					});
					toast.error(
						"There was an error with your submission. Please check the form for details."
					);
				} else if (typeof res.error === "string") {
					toast.error(res.error);
				} else {
					toast.error(
						"There was an error sending your quote request. Please try again."
					);
				}
				setResult(res);
			}
		});
	}

	return (
		<Form {...form}>
			<form
				className="container max-w-7xl space-y-3 px-4 sm:px-6 md:px-8"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				{result && (
					<div className={result.success ? "text-green-600" : "text-red-600"}>
						{result.success
							? "Your quote request was sent successfully."
							: "There was an error sending your quote request. Please try again."}
					</div>
				)}
				<FormSection>
					<div className="space-y-4">
						<h2 className="text-balance font-grotesk text-3xl text-accent-tertiary tracking-tight sm:text-4xl md:text-5xl">
							{t("main.title")}
						</h2>
						<p className="font-light text-lg text-muted-foreground leading-normal sm:text-xl">
							{t("main.description")}
						</p>
						<Separator />
						<h3 className="font-medium text-2xl text-accent-tertiary sm:text-3xl md:text-4xl">
							{t("basicInfo.sectionTitle")}
						</h3>
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("basicInfo.customerName.label")}
							name="customerName"
							placeholder={t("basicInfo.customerName.placeholder")}
						/>
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("basicInfo.companyName.label")}
							name="companyName"
							placeholder={t("basicInfo.companyName.placeholder")}
						/>
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("basicInfo.email.label")}
							name="email"
							placeholder={t("basicInfo.email.placeholder")}
							type="email"
						/>
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("basicInfo.phone.label")}
							name="phone"
							placeholder={t("basicInfo.phone.placeholder")}
						/>
					</div>
				</FormSection>

				<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
					<FormSection title={t("senderInfo.sectionTitle")}>
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("senderInfo.senderName.label")}
							name="senderName"
							placeholder={t("senderInfo.senderName.placeholder")}
						/>
						<FormTextarea<QuoteFormData>
							control={form.control}
							label={t("senderInfo.senderAddress.label")}
							name="senderAddress"
							placeholder={t("senderInfo.senderAddress.placeholder")}
						/>
					</FormSection>

					<FormSection title={t("recipientInfo.sectionTitle")}>
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("recipientInfo.recipientName.label")}
							name="recipientName"
							placeholder={t("recipientInfo.recipientName.placeholder")}
						/>
						<FormTextarea<QuoteFormData>
							control={form.control}
							label={t("recipientInfo.recipientAddress.label")}
							name="recipientAddress"
							placeholder={t("recipientInfo.recipientAddress.placeholder")}
						/>
					</FormSection>
				</div>

				<FormSection title={t("shippingInfo.sectionTitle")}>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<FormDatePicker<QuoteFormData>
							control={form.control}
							label={t("shippingInfo.preferredDeliveryDate.label")}
							name="preferredDeliveryDate"
						/>
						<FormSelect<QuoteFormData>
							control={form.control}
							label={t("shippingInfo.preferredModeOfTransport.label")}
							name="preferredModeOfTransport"
							options={[
								{
									value: "air",
									label: t("shippingInfo.preferredModeOfTransport.options.air"),
								},
								{
									value: "sea",
									label: t("shippingInfo.preferredModeOfTransport.options.sea"),
								},
								{
									value: "land",
									label: t(
										"shippingInfo.preferredModeOfTransport.options.land"
									),
								},
							]}
							placeholder={t(
								"shippingInfo.preferredModeOfTransport.placeholder"
							)}
						/>
						<FormSelect<QuoteFormData>
							control={form.control}
							label={t("shippingInfo.typeOfPackaging.label")}
							name="typeOfPackaging"
							options={[
								{
									value: "standard",
									label: t("shippingInfo.typeOfPackaging.options.standard"),
								},
								{
									value: "express",
									label: t("shippingInfo.typeOfPackaging.options.express"),
								},
								{
									value: "fragile",
									label: t("shippingInfo.typeOfPackaging.options.fragile"),
								},
								{
									value: "custom",
									label: t("shippingInfo.typeOfPackaging.options.custom"),
								},
							]}
							placeholder={t("shippingInfo.typeOfPackaging.placeholder")}
						/>
						<FormDatePicker<QuoteFormData>
							control={form.control}
							label={t("shippingInfo.shippingDate.label")}
							name="shippingDate"
						/>
					</div>
				</FormSection>
				<FormSection title={t("packageInfo.sectionTitle")}>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("packageInfo.pieces.label")}
							name="pieces"
							placeholder={t("packageInfo.pieces.placeholder")}
							type="number"
						/>
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("packageInfo.weight.label")}
							name="weight"
							placeholder={t("packageInfo.weight.placeholder")}
							type="number"
						/>
						<FormInput<QuoteFormData>
							control={form.control}
							label={t("packageInfo.volume.label")}
							name="volume"
							placeholder={t("packageInfo.volume.placeholder")}
							type="number"
						/>
					</div>

					<FormTextarea<QuoteFormData>
						className="col-span-1 sm:col-span-2"
						control={form.control}
						label={t("packageInfo.packageDescription.label")}
						name="packageDescription"
						placeholder={t("packageInfo.packageDescription.placeholder")}
					/>

					<FormTextarea<QuoteFormData>
						className="col-span-1 sm:col-span-2"
						control={form.control}
						label={t("packageInfo.additionalInformation.label")}
						name="additionalInformation"
						placeholder={t("packageInfo.additionalInformation.placeholder")}
					/>

					<FormField
						control={form.control}
						name="attachFiles"
						render={({ field: { onChange, ...field } }) => (
							<FormItem className="col-span-1 sm:col-span-2">
								<FormLabel>{t("packageInfo.attachFiles.label")}</FormLabel>
								<FormControl>
									<Input
										accept=".jpg,.jpeg,.png,.pdf"
										onChange={(e) => onChange(e.target.files?.[0])}
										type="file"
										{...field}
										value={undefined}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="h-12 w-full" disabled={isPending} type="submit">
						<LetterSwapPingPong
							className="w-full justify-start font-semibold"
							label={t("submit")}
							reverse={false}
							staggerFrom="first"
						/>

						<IconArrowRightTag className="ml-4 size-5 text-secondary" />
					</Button>
				</FormSection>
			</form>
		</Form>
	);
};
