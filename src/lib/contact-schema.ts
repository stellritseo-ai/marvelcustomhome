import { z } from "zod";

export const PROJECT_TYPES = [
  "Complete Home Construction",
  "Architectural Design Consultation",
  "Interior Finish-Out",
  "Custom Interior Features",
  "Other",
] as const;

export const BUDGETS = [
  "Under $750K",
  "$750K – $1.5M",
  "$1.5M – $3M",
  "$3M+",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+().\-\s]{7,20}$/, "Please enter a valid phone number"),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  projectType: z.enum(PROJECT_TYPES, { errorMap: () => ({ message: "Please choose a project type" }) }),
  budget: z.enum(BUDGETS, { errorMap: () => ({ message: "Please choose a budget range" }) }),
  vision: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;
