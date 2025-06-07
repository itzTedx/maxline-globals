"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Control, FieldValues, Path, useForm } from "react-hook-form";

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
    },
  });

  function onSubmit(values: QuoteFormData) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container space-y-3 px-4 sm:px-6 md:px-8"
      >
        <FormSection>
          <div className="space-y-4">
            <h2 className="font-grotesk text-brand-dark text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl">
              Request Your Logistics Quote
            </h2>
            <p className="text-brand-gray text-lg leading-normal font-light sm:text-xl">
              Get a personalized logistics quote from Maxline Global. Whether
              it&apos;s land, air, or sea freight, our team will provide you
              with a tailored, cost-effective solution that fits your schedule,
              cargo type, and destination. Start your journey with a trusted
              logistics partner today.
            </p>
            <Separator />
            <h3 className="text-secondary text-2xl sm:text-3xl md:text-4xl">
              Basic Information
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <FormInput<QuoteFormData>
              control={form.control}
              name="customerName"
              label="Customer Name"
              placeholder="Enter customer name"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="companyName"
              label="Company Name (Optional)"
              placeholder="Enter company name"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter email"
              type="email"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="phone"
              label="Phone"
              placeholder="Enter phone number"
            />
          </div>
        </FormSection>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <FormSection title="Sender Information">
            <FormInput<QuoteFormData>
              control={form.control}
              name="senderName"
              label="Sender Name"
              placeholder="Enter sender name"
            />
            <FormTextarea<QuoteFormData>
              control={form.control}
              name="senderAddress"
              label="Sender Address"
              placeholder="Enter sender address"
            />
          </FormSection>

          <FormSection title="Recipient Information">
            <FormInput<QuoteFormData>
              control={form.control}
              name="recipientName"
              label="Recipient Name"
              placeholder="Enter recipient name"
            />
            <FormTextarea<QuoteFormData>
              control={form.control}
              name="recipientAddress"
              label="Recipient Address"
              placeholder="Enter recipient address"
            />
          </FormSection>
        </div>

        <FormSection title="Shipping information">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <FormDatePicker<QuoteFormData>
              control={form.control}
              name="preferredDeliveryDate"
              label="Preferred Delivery Date"
            />
            <FormSelect<QuoteFormData>
              control={form.control}
              name="preferredModeOfTransport"
              label="Preferred Mode of Transport"
              placeholder="Select transport mode"
              options={[
                { value: "air", label: "Air" },
                { value: "sea", label: "Sea" },
                { value: "land", label: "Land" },
              ]}
            />
            <FormSelect<QuoteFormData>
              control={form.control}
              name="typeOfPackaging"
              label="Type of Packaging"
              placeholder="Select packaging type"
              options={[
                { value: "standard", label: "Standard" },
                { value: "express", label: "Express" },
                { value: "fragile", label: "Fragile" },
                { value: "custom", label: "Custom" },
              ]}
            />
            <FormDatePicker<QuoteFormData>
              control={form.control}
              name="shippingDate"
              label="Shipping Date"
            />
          </div>
        </FormSection>
        <FormSection title="Package Information">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <FormInput<QuoteFormData>
              control={form.control}
              name="pieces"
              label="Pieces"
              placeholder="Enter number of pieces"
              type="number"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="weight"
              label="Weight (kg)"
              placeholder="Enter weight"
              type="number"
            />
            <FormInput<QuoteFormData>
              control={form.control}
              name="volume"
              label="Volume (m³)"
              placeholder="Enter volume"
              type="number"
            />
          </div>

          <FormTextarea<QuoteFormData>
            control={form.control}
            name="packageDescription"
            label="Package Description"
            placeholder="Enter package description"
            className="col-span-1 sm:col-span-2"
          />

          <FormTextarea<QuoteFormData>
            control={form.control}
            name="additionalInformation"
            label="Additional Information (Optional)"
            placeholder="Enter any additional information"
            className="col-span-1 sm:col-span-2"
          />

          <FormField
            control={form.control}
            name="attachFiles"
            render={({ field: { onChange, ...field } }) => (
              <FormItem className="col-span-1 sm:col-span-2">
                <FormLabel>Attach Files (Optional)</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      onChange(files);
                    }}
                    {...field}
                    value={undefined}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormSection>
        <Button type="submit" className="bg-secondary w-full" size="lg">
          Submit Quote
        </Button>
      </form>
    </Form>
  );
};
