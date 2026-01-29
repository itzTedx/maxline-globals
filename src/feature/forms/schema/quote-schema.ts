import { z } from "zod";

export const quoteSchema = z.object({
	customerName: z
		.string({
			required_error: "Customer name is required",
		})
		.min(2, "Customer name must be at least 2 characters"),

	companyName: z.string().optional(),

	email: z
		.string({
			required_error: "Email is required",
		})
		.email("Please enter a valid email address"),

	phone: z
		.string({
			required_error: "Phone number is required",
		})
		.regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),

	senderName: z
		.string({
			required_error: "Sender name is required",
		})
		.min(2, "Sender name must be at least 2 characters"),

	recipientName: z
		.string({
			required_error: "Recipient name is required",
		})
		.min(2, "Recipient name must be at least 2 characters"),

	senderAddress: z
		.string({
			required_error: "Sender address is required",
		})
		.min(5, "Please enter a valid sender address"),

	recipientAddress: z
		.string({
			required_error: "Recipient address is required",
		})
		.min(5, "Please enter a valid recipient address"),

	preferredDeliveryDate: z
		.date({
			required_error: "Preferred delivery date is required",
		})
		.min(new Date(), "Delivery date must be in the future"),

	preferredModeOfTransport: z.string({
		required_error: "Preferred mode of transport is required",
	}),

	typeOfPackaging: z.string({
		required_error: "Type of packaging is required",
	}),

	shippingDate: z
		.date({
			required_error: "Shipping date is required",
		})
		.min(new Date(), "Shipping date must be in the future"),

	attachFiles: z
		.instanceof(File)
		.or(z.null())
		.or(z.undefined())
		.refine(
			(file) => {
				if (!file) return true;
				const allowedTypes = [
					"image/jpeg",
					"image/jpg",
					"image/png",
					"application/pdf",
				];
				const maxSize = 4 * 1024 * 1024; // 4MB
				return allowedTypes.includes(file.type) && file.size <= maxSize;
			},
			{
				message: "Only one JPG, JPEG, PNG, or PDF file under 4MB is allowed.",
			}
		)
		.optional(),

	pieces: z
		.number({
			required_error: "Number of pieces is required",
		})
		.min(1, "Must have at least 1 piece"),

	packageDescription: z
		.string({
			required_error: "Package description is required",
		})
		.min(10, "Please provide a detailed package description"),

	weight: z
		.number({
			required_error: "Weight is required",
		})
		.min(0.1, "Weight must be greater than 0"),

	volume: z
		.number({
			required_error: "Volume is required",
		})
		.min(0.1, "Volume must be greater than 0"),

	additionalInformation: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
