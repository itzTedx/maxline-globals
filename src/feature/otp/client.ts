import { consoleLogger, createClient } from "@betternotify/core";
import { twilioSmsTransport } from "@betternotify/twilio";

import { sms } from "./channel";
import { catalog } from "./routes";

export const notify = createClient({
	catalog,
	channels: { sms },

	transportsByChannel: {
		sms: twilioSmsTransport({
			accountSid: process.env.TWILIO_ACCOUNT_SID as string,
			authToken: process.env.TWILIO_AUTH_TOKEN as string,
			// fromNumber: "+18777804236",
			messagingServiceSid: process.env.TWILIO_SERVICE_SID as string,
		}),
	},

	logger: consoleLogger({ level: "debug" }),
});
