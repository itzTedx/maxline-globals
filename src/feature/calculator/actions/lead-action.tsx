"use server";

import { render } from "@react-email/components";

import { LeadEmail } from "@/emails/lead-template";
import { sendMicrosoftEmail } from "@/lib/transporter";

export async function sendLeadEmail(data: {
	name: string;
	email: string;
	phone: string;
	grossWeight: string;
	volume: string;
	chargeableVolume: number;
	totalCost: number;
	localDoc: boolean;
}) {
	try {
		const html = await render(<LeadEmail data={data} />);

		const result = await sendMicrosoftEmail({
			subject: `New Calculator Lead: ${data.name}`,
			html,
			name: data.name,
			replyToEmail: data.email,
		});

		return result;
	} catch (error) {
		console.error("[sendLeadEmail] Failed to send email:", error);
		return { success: false, error: "Failed to send lead email" };
	}
}
