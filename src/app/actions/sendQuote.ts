"use server";

import type { SendMailOptions } from "nodemailer";
import nodemailer from "nodemailer";

import { quoteSchema } from "@/feature/forms/schema/quote-schema";

// Configure your SMTP transport here
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendQuote(formData: FormData) {
  // Convert FormData to object
  const data: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Validate data
  const parsed = quoteSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.flatten() };
  }

  // Prepare email
  const mailOptions: SendMailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.SMTP_TO || process.env.SMTP_USER,
    subject: "New Quote Request",
    text: JSON.stringify(parsed.data, null, 2),
    // You can format HTML as needed
    html: `<pre>${JSON.stringify(parsed.data, null, 2)}</pre>`,
  };

  // Handle file attachments if any
  const files = formData
    .getAll("attachFiles")
    .filter((f) => f instanceof File) as File[];
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
