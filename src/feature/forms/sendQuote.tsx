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
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Change function signature to accept QuoteFormData
type QuoteFormData = typeof quoteSchema._type;

export async function sendQuote(data: QuoteFormData) {
  console.log("[sendQuote] Received data:", data);
  // Validate data (should already be validated, but keep for safety)
  const parsed = quoteSchema.safeParse(data);
  console.log("[sendQuote] Validation result:", parsed);
  if (!parsed.success) {
    console.log("[sendQuote] Validation failed:", parsed.error.flatten());
    return { success: false, error: parsed.error.flatten() };
  }

  let emailHtml;
  try {
    emailHtml = await render(<QuoteRequestEmail data={parsed.data} />);
    console.log("[sendQuote] Rendered email HTML:", emailHtml);
  } catch (renderError) {
    console.log("[sendQuote] Error rendering email HTML:", renderError);
    return { success: false, error: "Failed to render email template." };
  }

  // Prepare email
  const mailOptions: SendMailOptions = {
    from: `${parsed.data.customerName} <${process.env.EMAIL_USER}>`,
    replyTo: parsed.data.email,
    to: process.env.CONTACT_RECEIVER_EMAIL,
    subject: "New Quote Request",
    text: JSON.stringify(parsed.data, null, 2),
    html: emailHtml,
  };
  console.log("[sendQuote] Mail options before attachments:", mailOptions);

  // Handle file attachment if any
  const ALLOWED_TYPES = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];
  const MAX_SIZE = 4 * 1024 * 1024; // 4MB

  const file = data.attachFiles;
  console.log("[sendQuote] Attach file:", file);

  // Validate file
  if (file) {
    if (!ALLOWED_TYPES.includes(file.type) || file.size > MAX_SIZE) {
      console.log("[sendQuote] File validation failed.");
      return {
        success: false,
        error: {
          attachFiles: [
            "Only PDF, JPG, JPEG, PNG files under 4MB are allowed.",
          ],
        },
      };
    }
    mailOptions.attachments = [
      {
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      },
    ];
    console.log("[sendQuote] Mail options with attachment:", mailOptions);
  }

  try {
    const sendResult = await transporter.sendMail(mailOptions);
    console.log("[sendQuote] Email sent successfully:", sendResult);
    return { success: true };
  } catch (error) {
    console.log("[sendQuote] Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
