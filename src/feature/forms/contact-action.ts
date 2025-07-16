"use server";

import nodemailer from "nodemailer";

import { contactSchema } from "./schema/contact-schema";

export type ContactActionResult = { success: boolean; error?: string };

export async function sendContactEmail(
  formData: FormData
): Promise<ContactActionResult> {
  // Extract fields
  const fullName = formData.get("fullName") as string;
  const companyName = formData.get("companyName") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const serviceType = formData.get("serviceType") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const privacyPolicyConsent = formData.get("privacyPolicyConsent") === "true";
  const file = formData.get("fileUpload") as File | null;

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

  // Configure transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
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
    from: `"${fullName}" <${email}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: subject || "New Contact Form Submission",
    text: `
      Name: ${fullName}
      Company: ${companyName}
      Email: ${email}
      Phone: ${phoneNumber}
      Service: ${serviceType}
      Message: ${message}
    `,
    attachments,
  };

  console.log("[sendContactEmail] Mail options:", {
    from: mailOptions.from,
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
