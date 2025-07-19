import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s]*$/, "Full name should only contain letters and spaces"),

  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must not exceed 100 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters"),

  phoneNumber: z
    .string()
    .regex(
      /^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
      "Please enter a valid phone number"
    ),

  serviceType: z.enum(
    [
      "general_inquiry",
      "freight_forwarding",
      "warehousing_distribution",
      "customs_brokerage",
      "project_cargo",
      "partnership_inquiry",
      "other",
    ],
    {
      errorMap: () => ({ message: "Please select a valid service type" }),
    }
  ),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),

  /**
   * Only one file is allowed. Accepts a single File instance or undefined/null.
   * Validation ensures type and size as before.
   */
  fileUpload: z
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
    ),

  privacyPolicyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const SERVICE_TYPE_LABELS = {
  general_inquiry: "General Inquiry",
  freight_forwarding: "Freight Forwarding (Air / Sea / Road)",
  warehousing_distribution: "Warehousing & Distribution",
  customs_brokerage: "Customs Brokerage",
  project_cargo: "Project Cargo",
  partnership_inquiry: "Partnership Inquiry",
  other: "Other",
} as const;
