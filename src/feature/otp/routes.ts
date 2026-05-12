import { withRateLimit } from "@betternotify/core/middlewares";
import { inMemoryRateLimitStore } from "@betternotify/core/stores";
import { z } from "zod";

import { rpc } from "./channel";

export const catalog = rpc.catalog({
	otpCode: rpc
		.sms()
		.input(z.object({ code: z.string().length(6) }))
		.body(
			({ input }) =>
				`Your verification code is ${input.code}. It expires in 10 minutes.`
		)
		.use(
			withRateLimit({
				store: inMemoryRateLimitStore(),
				key: ({ args }) => String(args.to),
				max: 5,
				window: 60_000,
			})
		),
});
