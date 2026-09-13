import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(200),
  phone: z.string().optional(),
  organization: z.string().optional(),
  enquiryType: z.string().min(1, 'Please select an enquiry type'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;