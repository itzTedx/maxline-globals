"use server";

import { render } from "@react-email/components";

import ContactFormSubmission from "@/emails/contact-template";
import { sendMicrosoftEmail } from "@/lib/transporter";

import { contactSchema } from "./schema/contact-schema";

export type ContactActionResult = { success: boolean; error?: string };

export async function sendContactEmail(values: {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  serviceType?: string;
  subject: string;
  message: string;
  privacyPolicyConsent: boolean;
  fileUpload?: File | null;
}): Promise<ContactActionResult> {
  const { fullName, companyName, email, phoneNumber, serviceType, subject, message, privacyPolicyConsent, fileUpload } =
    values;
  const file = fileUpload ?? null;

  console.log("[sendContactEmail] Extracted fields:", {
    fullName,
    companyName,
    email,
    phoneNumber,
    serviceType,
    subject,
    message,
    privacyPolicyConsent,
    file: file ? { name: file.name, type: file.type, size: file.size } : null,
  });

  // Validate data
  const parsed = contactSchema.safeParse({
    fullName,
    companyName,
    email,
    phoneNumber,
    serviceType,
    subject,
    message,
    privacyPolicyConsent,
    fileUpload: file,
  });
  console.log("[sendContactEmail] Validation result:", parsed.success, parsed.success ? undefined : parsed.error);
  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  // Validate file attachment (only one file, jpg/jpeg/png/pdf, max 4MB)
  if (file) {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];
    const maxSize = 4 * 1024 * 1024; // 4MB
    if (!allowedTypes.includes(file.type)) {
      return {
        success: false,
        error: "Only JPG, JPEG, PNG, or PDF files are allowed.",
      };
    }
    if (file.size > maxSize) {
      return { success: false, error: "File size must be less than 4MB." };
    }
  }

  const html = await render(<ContactFormSubmission data={parsed.data} />);

  console.log("[sendContactEmail] Preparing Microsoft Graph API call:", {
    fullName,
    email,
    subject: subject || "New Contact Form Submission",
    file: file ? { name: file.name, type: file.type, size: file.size } : null,
  });

  try {
    const result = await sendMicrosoftEmail({
      subject: subject ?? "New Contact Form Submission",
      html,
      name: fullName,
      replyToEmail: email,
    });

    if (result.success) {
      console.log("[sendContactEmail] Email sent successfully via Microsoft Graph API");
      return { success: true };
    }
    console.error("[sendContactEmail] Failed to send email:", result.error);
    return {
      success: false,
      error: (result.error as string) || "Failed to send email",
    };
  } catch (error) {
    console.error("[sendContactEmail] Failed to send email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
