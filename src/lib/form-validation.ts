import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  phone: z
    .string()
    .regex(/^[+]?[\d\s\-\(\)]+$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  projectType: z
    .string()
    .min(1, "Please select a project type"),
  budget: z
    .string()
    .optional(),
  timeline: z
    .string()
    .optional(),
  message: z
    .string()
    .min(1, "Project details are required")
    .min(10, "Please provide more details about your project")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;