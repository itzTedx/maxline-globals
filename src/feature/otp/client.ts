import { consoleLogger, createClient } from "@betternotify/core";
import { twilioSmsTransport } from "@betternotify/twilio";

import { sms } from "./channel";
import { catalog } from "./routes";

export const notify = createClient({
	catalog,
	channels: { sms },

	transportsByChannel: {
		sms: twilioSmsTransport({
			accountSid: String(process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID),
			authToken: String(process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN),
			// fromNumber: "+18777804236",
			messagingServiceSid: String(
				process.env.NEXT_PUBLIC_TWILIO_MESSAGE_SERVICE_SID
			),
		}),
	},

	logger: consoleLogger({ level: "debug" }),
});
