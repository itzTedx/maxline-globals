"use client";

import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconArrowRight } from "@tabler/icons-react";
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
      <h3 className="text-secondary text-2xl sm:text-3xl md:text-4xl">
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
            type={type}
            placeholder={placeholder}
            {...field}
            value={field.value as string}
            onChange={
              type === "number"
                ? (e) => field.onChange(Number(e.target.value))
                : field.onChange
            }
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
            placeholder={placeholder}
            className="resize-none"
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
                variant={"outline"}
                className={cn(
                  "border-muted-foreground/20 bg-muted w-full pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
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
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value as Date}
              onSelect={field.onChange}
              disabled={(date) =>
                date < new Date() || date < new Date("1900-01-01")
              }
              initialFocus
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
          onValueChange={field.onChange}
          defaultValue={field.value as string}
        >
          <FormControl>
            <SelectTrigger className="border-muted-foreground/20 bg-muted !h-11 w-full">
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
        onSubmit={form.handleSubmit(onSubmit)}
        className="container max-w-7xl space-y-3 px-4 sm:px-6 md:px-8"
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
            <h2 className="font-grotesk text-brand-dark text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl">
              {t("main.title")}
            </h2>
            <p className="text-brand-gray text-lg leading-normal font-light sm:text-xl">
              {t("main.description")}
            </p>
            <Separator />
            <h3 className="text-secondary text-2xl sm:text-3xl md:text-4xl">
              {t("basicInfo.sectionTitle")}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput<QuoteFormData>
              control={form.control}
              name="customerName"
              label={t("basicInfo.customerName.label")}
              placeholder={t("basicInfo.customerName.placeholder")}
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="companyName"
              label={t("basicInfo.companyName.label")}
              placeholder={t("basicInfo.companyName.placeholder")}
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="email"
              label={t("basicInfo.email.label")}
              placeholder={t("basicInfo.email.placeholder")}
              type="email"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="phone"
              label={t("basicInfo.phone.label")}
              placeholder={t("basicInfo.phone.placeholder")}
            />
          </div>
        </FormSection>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <FormSection title={t("senderInfo.sectionTitle")}>
            <FormInput<QuoteFormData>
              control={form.control}
              name="senderName"
              label={t("senderInfo.senderName.label")}
              placeholder={t("senderInfo.senderName.placeholder")}
            />
            <FormTextarea<QuoteFormData>
              control={form.control}
              name="senderAddress"
              label={t("senderInfo.senderAddress.label")}
              placeholder={t("senderInfo.senderAddress.placeholder")}
            />
          </FormSection>

          <FormSection title={t("recipientInfo.sectionTitle")}>
            <FormInput<QuoteFormData>
              control={form.control}
              name="recipientName"
              label={t("recipientInfo.recipientName.label")}
              placeholder={t("recipientInfo.recipientName.placeholder")}
            />
            <FormTextarea<QuoteFormData>
              control={form.control}
              name="recipientAddress"
              label={t("recipientInfo.recipientAddress.label")}
              placeholder={t("recipientInfo.recipientAddress.placeholder")}
            />
          </FormSection>
        </div>

        <FormSection title={t("shippingInfo.sectionTitle")}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <FormDatePicker<QuoteFormData>
              control={form.control}
              name="preferredDeliveryDate"
              label={t("shippingInfo.preferredDeliveryDate.label")}
            />
            <FormSelect<QuoteFormData>
              control={form.control}
              name="preferredModeOfTransport"
              label={t("shippingInfo.preferredModeOfTransport.label")}
              placeholder={t(
                "shippingInfo.preferredModeOfTransport.placeholder"
              )}
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
            />
            <FormSelect<QuoteFormData>
              control={form.control}
              name="typeOfPackaging"
              label={t("shippingInfo.typeOfPackaging.label")}
              placeholder={t("shippingInfo.typeOfPackaging.placeholder")}
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
            />
            <FormDatePicker<QuoteFormData>
              control={form.control}
              name="shippingDate"
              label={t("shippingInfo.shippingDate.label")}
            />
          </div>
        </FormSection>
        <FormSection title={t("packageInfo.sectionTitle")}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <FormInput<QuoteFormData>
              control={form.control}
              name="pieces"
              label={t("packageInfo.pieces.label")}
              placeholder={t("packageInfo.pieces.placeholder")}
              type="number"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="weight"
              label={t("packageInfo.weight.label")}
              placeholder={t("packageInfo.weight.placeholder")}
              type="number"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="volume"
              label={t("packageInfo.volume.label")}
              placeholder={t("packageInfo.volume.placeholder")}
              type="number"
            />
          </div>

          <FormTextarea<QuoteFormData>
            control={form.control}
            name="packageDescription"
            label={t("packageInfo.packageDescription.label")}
            placeholder={t("packageInfo.packageDescription.placeholder")}
            className="col-span-1 sm:col-span-2"
          />

          <FormTextarea<QuoteFormData>
            control={form.control}
            name="additionalInformation"
            label={t("packageInfo.additionalInformation.label")}
            placeholder={t("packageInfo.additionalInformation.placeholder")}
            className="col-span-1 sm:col-span-2"
          />

          <FormField
            control={form.control}
            name="attachFiles"
            render={({ field: { onChange, ...field } }) => (
              <FormItem className="col-span-1 sm:col-span-2">
                <FormLabel>{t("packageInfo.attachFiles.label")}</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => onChange(e.target.files?.[0])}
                    {...field}
                    value={undefined}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormSection>
        <Button
          size="btnIcon"
          variant="secondary"
          className="bg-secondary text-background h-16 w-full pr-1 pl-6 text-xl"
          type="submit"
          disabled={isPending}
        >
          <LetterSwapPingPong
            label={t("submit")}
            staggerFrom="first"
            reverse={false}
            className="w-full justify-start font-semibold"
          />

          <div className="bg-background text-brand-dark group-hover:bg-background pointer-events-none ml-auto flex size-14 shrink-0 touch-none items-center justify-center rounded transition-colors select-none">
            <IconArrowRight className="size-6 stroke-[1.5]" />
          </div>
        </Button>
      </form>
    </Form>
  );
};
