"use server";

import { render } from "@react-email/components";

import { QuoteRequestEmail } from "@/emails/quote-template";
import { quoteSchema } from "@/feature/forms/schema/quote-schema";
import { sendMicrosoftEmail } from "@/lib/transporter";

// Microsoft Graph API is now used instead of SMTP

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

  let html;
  try {
    html = await render(<QuoteRequestEmail data={parsed.data} />);
    console.log("[sendQuote] Rendered email HTML:", html);
  } catch (renderError) {
    console.log("[sendQuote] Error rendering email HTML:", renderError);
    return { success: false, error: "Failed to render email template." };
  }

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
  }

  console.log("[sendQuote] Preparing Microsoft Graph API call:", {
    customerName: parsed.data.customerName,
    email: parsed.data.email,
    file: file ? { name: file.name, type: file.type, size: file.size } : null,
  });

  try {
    const result = await sendMicrosoftEmail({
      subject: "New Quote Request",
      html,
      name: parsed.data.customerName,
      replyToEmail: parsed.data.email,
    });

    if (result.success) {
      console.log(
        "[sendQuote] Email sent successfully via Microsoft Graph API"
      );
      return { success: true };
    } else {
      console.error("[sendQuote] Failed to send email:", result.error);
      return { success: false, error: result.error || "Failed to send email" };
    }
  } catch (error) {
    console.log("[sendQuote] Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
