import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().min(2, "Please select your country"),
  inquiryType: z.enum([
    "wholesale",
    "startup",
    "consumer",
    "support",
    "partnership",
    "other",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.enum(["email", "phone"]),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const inquiryTypeLabels: Record<ContactFormData["inquiryType"], string> = {
  wholesale: "Wholesale Inquiry",
  startup: "Startup Solutions",
  consumer: "Consumer Products",
  support: "Technical Support",
  partnership: "Partnership",
  other: "Other",
};

export const inquiryTypeEmails: Record<ContactFormData["inquiryType"], string> = {
  wholesale: "wholesale@kineticsolar.com",
  startup: "startups@kineticsolar.com",
  consumer: "consumer@kineticsolar.com",
  support: "support@kineticsolar.com",
  partnership: "partners@kineticsolar.com",
  other: "info@kineticsolar.com",
};
