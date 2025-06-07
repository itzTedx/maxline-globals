"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { IconArrowRight } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

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
import { Textarea } from "@/components/ui/textarea";

import {
  ContactFormData,
  SERVICE_TYPE_LABELS,
  contactSchema,
} from "./schema/contact-schema";

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      fileUpload: undefined,
      message: "",
      phoneNumber: "",
      privacyPolicyConsent: false,
      serviceType: undefined,
      subject: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: ContactFormData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative z-10 space-y-6 rounded-2xl bg-white p-6 md:space-y-8 md:p-9"
      >
        <div>
          <h3 className="font-grotesk text-secondary text-2xl sm:text-3xl md:text-4xl">
            Have a Question? We&apos;re Here to Help
          </h3>
          <p className="text-brand-gray mt-2 text-base font-light sm:text-lg md:text-xl">
            Have a shipment, question, or custom logistics need? Fill out the
            form and our team will get back to you with the right solution -
            fast, reliable, and tailored to your goals.
          </p>
        </div>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
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
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your company name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
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
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
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
              <FormLabel>Service Type</FormLabel>

              <FormControl>
                <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 lg:flex lg:flex-wrap">
                  {Object.entries(SERVICE_TYPE_LABELS).map(([value, label]) => (
                    <div
                      key={value}
                      className="border-muted-foreground/20 bg-muted has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:bg-primary/10 text-brand-gray relative flex items-center justify-center gap-2 rounded-md border p-1 pl-3 outline-none"
                    >
                      <Checkbox
                        className="order-1 after:absolute after:inset-0"
                        {...field}
                      />
                      <div className="grid grow gap-2">
                        <Label>{label}</Label>
                      </div>
                    </div>
                  ))}
                </div>
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
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter subject" {...field} />
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message"
                  className="min-h-[100px] sm:min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fileUpload"
          render={({ field: { onChange, onBlur, name, ref } }) => (
            <FormItem>
              <FormLabel>
                File Upload (Optional - for RFPs, project docs, etc.)
              </FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => onChange(e.target.files?.[0])}
                  onBlur={onBlur}
                  name={name}
                  ref={ref}
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
            <FormItem className="flex flex-row items-start space-y-0 space-x-1">
              <FormControl className="mt-1">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div>
                <FormLabel className="block text-sm leading-snug font-light sm:text-base">
                  I agree to the{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-secondary hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and consent to having this website store my submitted
                  information.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button
          size="btnIcon"
          type="submit"
          className="group w-full justify-start"
        >
          <LetterSwapPingPong
            label="Send Message"
            staggerFrom="first"
            reverse={false}
            className="w-full justify-start font-semibold"
          />

          <div className="bg-primary text-brand-dark group-hover:bg-background pointer-events-none ml-auto flex size-8 shrink-0 touch-none items-center justify-center rounded transition-colors select-none">
            <IconArrowRight />
          </div>
        </Button>
      </form>
    </Form>
  );
}
