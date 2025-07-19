"use server";

import { render } from "@react-email/components";
import type { SendMailOptions } from "nodemailer";
import nodemailer from "nodemailer";

import { QuoteRequestEmail } from "@/emails/quote-template";
import { quoteSchema } from "@/feature/forms/schema/quote-schema";

// Configure your SMTP transport here
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Change function signature to accept QuoteFormData
type QuoteFormData = typeof quoteSchema._type;

export async function sendQuote(data: QuoteFormData) {
  // Validate data (should already be validated, but keep for safety)
  const parsed = quoteSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.flatten() };
  }

  const emailHtml = await render(<QuoteRequestEmail data={parsed.data} />);

  // Prepare email
  const mailOptions: SendMailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.SMTP_TO || process.env.SMTP_USER,
    subject: "New Quote Request",
    text: JSON.stringify(parsed.data, null, 2),
    html: emailHtml,
  };

  // Handle file attachments if any
  const ALLOWED_TYPES = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  const MAX_SIZE = 4 * 1024 * 1024; // 4MB

  const files = data.attachFiles || [];

  // Validate files
  const invalidFiles = files.filter(
    (file) => !ALLOWED_TYPES.includes(file.type) || file.size > MAX_SIZE
  );

  if (invalidFiles.length > 0) {
    return {
      success: false,
      error: {
        attachFiles: ["Only PDF, JPG, JPEG, PNG files under 4MB are allowed."],
      },
    };
  }

  if (files.length > 0) {
    mailOptions.attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );
  }

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
