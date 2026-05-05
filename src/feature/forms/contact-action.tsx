"use server";

import { render } from "@react-email/components";

import ContactFormSubmission from "@/emails/contact-template";
import { sendMicrosoftEmail } from "@/lib/transporter";

import { contactSchema } from "./schema/contact-schema";

export type ContactActionResult = { success: boolean; error?: string };

export async function sendContactEmail(
	values: unknown
): Promise<ContactActionResult> {
	const { success, data } = contactSchema.safeParse({
		values,
	});

	if (!success) {
		return { success: false, error: "Invalid form data" };
	}

	const html = await render(<ContactFormSubmission data={data} />);

	try {
		const result = await sendMicrosoftEmail({
			subject: data.subject ?? "New Contact Form Submission",
			html,
			name: data.fullName,
			replyToEmail: data.email,
		});

		if (result.success) {
			console.log(
				"[sendContactEmail] Email sent successfully via Microsoft Graph API"
			);
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
