"use server";

import nodemailer from "nodemailer";

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
  const {
    fullName,
    companyName,
    email,
    phoneNumber,
    serviceType,
    subject,
    message,
    privacyPolicyConsent,
    fileUpload,
  } = values;
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
  console.log(
    "[sendContactEmail] Validation result:",
    parsed.success,
    parsed.success ? undefined : parsed.error
  );
  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  // Validate file attachment (only one file, jpg/jpeg/png/pdf, max 4MB)
  if (file) {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];
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

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Prepare attachments if file exists
  const attachments = [];
  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    attachments.push({
      filename: file.name,
      content: Buffer.from(arrayBuffer),
      contentType: file.type,
    });
    console.log("[sendContactEmail] Prepared attachment:", {
      filename: file.name,
      contentType: file.type,
      size: file.size,
    });
  }

  // Compose email
  const mailOptions = {
    from: `${fullName} <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: subject || "New Contact Form Submission",
    text: `\n      Name: ${fullName}\n      Company: ${companyName}\n      Email: ${email}\n      Phone: ${phoneNumber}\n      Service: ${serviceType}\n      Message: ${message}\n    `,
    attachments,
  };

  console.log("[sendContactEmail] Mail options:", {
    from: mailOptions.from,
    replyTo: mailOptions.replyTo,
    to: mailOptions.to,
    subject: mailOptions.subject,
    text: mailOptions.text,
    attachments: attachments.length
      ? attachments.map((a) => ({
          filename: a.filename,
          contentType: a.contentType,
          size: a.content.length,
        }))
      : undefined,
  });

  try {
    await transporter.sendMail(mailOptions);
    console.log("[sendContactEmail] Email sent successfully");
    return { success: true };
  } catch (error) {
    console.error("[sendContactEmail] Failed to send email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
