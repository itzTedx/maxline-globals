"use client";

import { useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

import { Link } from "@/i18n/navigation";

import { sendContactEmail } from "./contact-action";
import {
	ContactFormData,
	contactSchema,
	SERVICE_TYPE_LABELS,
} from "./schema/contact-schema";

export function ContactForm() {
	const t = useTranslations("ContactForm");

	const [isPending, startTransition] = useTransition();

	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			fullName: "",
			companyName: "",
			email: "",
			message: "",
			phoneNumber: "",
			privacyPolicyConsent: false,
			serviceType: undefined,
			subject: "",
		},
		mode: "onBlur",
	});

	async function onSubmit(values: ContactFormData) {
		startTransition(async () => {
			const result = await sendContactEmail(values);

			if (result.success) {
				form.reset();
				toast.success(t("successMessage"));
			} else {
				toast.error(t("errorMessage"));
			}
		});
	}

	return (
		<Form {...form}>
			<form
				className="relative z-10 space-y-6 rounded-2xl bg-white p-4 sm:p-6 md:space-y-8 md:p-9"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<div>
					<h3 className="font-grotesk text-2xl text-secondary sm:text-3xl md:text-4xl">
						{t("heading")}
					</h3>
					<p className="mt-2 font-light text-base text-brand-gray sm:text-lg md:text-xl">
						{t("description")}
					</p>
				</div>

				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t("fullNameLabel")}</FormLabel>
							<FormControl>
								<Input placeholder={t("fullNamePlaceholder")} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="companyName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t("companyNameLabel")}</FormLabel>
							<FormControl>
								<Input placeholder={t("companyNamePlaceholder")} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="grid gap-3 md:grid-cols-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("emailLabel")}</FormLabel>
								<FormControl>
									<Input
										placeholder={t("emailPlaceholder")}
										type="email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phoneNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>{t("phoneLabel")}</FormLabel>
								<FormControl>
									<Input placeholder={t("phonePlaceholder")} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="serviceType"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t("serviceTypeLabel")}</FormLabel>

							<FormControl>
								<RadioGroup
									className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap"
									defaultValue={field.value}
									onValueChange={field.onChange}
								>
									{Object.entries(SERVICE_TYPE_LABELS).map(([value]) => (
										<div
											className="relative flex items-center justify-center gap-2 rounded-md border border-muted-foreground/20 bg-muted p-2 text-brand-gray outline-none has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:bg-primary/10"
											key={value}
										>
											<Label htmlFor={field.name}>
												{t(
													`serviceType.${value}` as `serviceType.${keyof typeof SERVICE_TYPE_LABELS}`
												)}
											</Label>
											<div className="flex justify-between gap-2">
												<RadioGroupItem
													className="order-1 after:absolute after:inset-0"
													id={field.name}
													value={value}
												/>
											</div>
										</div>
									))}
								</RadioGroup>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="subject"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t("subjectLabel")}</FormLabel>
							<FormControl>
								<Input placeholder={t("subjectPlaceholder")} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{t("messageLabel")}</FormLabel>
							<FormControl>
								<Textarea
									className="min-h-[100px] sm:min-h-[120px]"
									placeholder={t("messagePlaceholder")}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="privacyPolicyConsent"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-1 space-y-0">
							<FormControl className="mt-1">
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<div>
								<FormLabel className="block font-light text-sm leading-snug sm:text-base">
									{t.rich("privacyPolicyConsent", {
										privacyPolicy: (chunks) => (
											<Link
												className="text-secondary hover:underline"
												href="/privacy-policy"
											>
												{chunks}
											</Link>
										),
									})}
								</FormLabel>
								<FormMessage />
							</div>
						</FormItem>
					)}
				/>
				<Button
					className="h-16 w-full bg-secondary pr-1 pl-6 text-background text-xl"
					disabled={isPending}
					size="btnIcon"
					type="submit"
					variant="secondary"
				>
					{isPending ? (
						<span>Sending...</span>
					) : (
						<>
							<LetterSwapPingPong
								className="w-full justify-start font-semibold"
								label={t("sendMessage")}
								reverse={false}
								staggerFrom="first"
							/>
							<div className="pointer-events-none ml-auto flex size-14 shrink-0 touch-none select-none items-center justify-center rounded bg-background text-brand-dark transition-colors group-hover:bg-background">
								<IconArrowRight className="size-6 stroke-[1.5]" />
							</div>
						</>
					)}
				</Button>
			</form>
		</Form>
	);
}
