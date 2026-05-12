import { consoleLogger, createClient } from "@betternotify/core";
import { twilioSmsTransport } from "@betternotify/twilio";

import { sms } from "./channel";
import { catalog } from "./routes";

export const notify = createClient({
	catalog,
	channels: { sms },

	transportsByChannel: {
		sms: twilioSmsTransport({
			accountSid: "ACec50b34724a2a77134e491b40f916a69",
			authToken: "d7ec3f514acf0c4ccd984bf78e7a6011",
			// fromNumber: "+18777804236",
			messagingServiceSid: "MG75f12788f98b976a9af5f9ba008858ec",
		}),
	},

	logger: consoleLogger({ level: "debug" }),
});
