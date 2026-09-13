'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormValues } from '@marvinho/forms';
import { Input, Select, Textarea, Button } from '@marvinho/ui';
import { enquiryTypes, siteConfig } from '@marvinho/config';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  initialEnquiryType?: string;
  initialSubject?: string;
}

const enquiryOptions = [
  { value: '', label: 'Select an enquiry type' },
  ...enquiryTypes,
];

export function ContactForm({ initialEnquiryType = '', initialSubject = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      organization: '',
      enquiryType: initialEnquiryType,
      subject: initialSubject,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, company: '' }),
      });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--text)]">Send Us a Message</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Fill out the form below and the D KING team will respond as soon as possible.
      </p>

      {status === 'success' && (
        <div className="mt-8 flex flex-col items-center rounded-2xl border border-[var(--border)] bg-white p-12 text-center shadow-premium">
          <CheckCircle className="h-12 w-12 text-emerald-500" />
          <h3 className="mt-4 text-lg font-bold text-[var(--text)]">Message Sent</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Thank you for contacting {siteConfig.name}. We will get back to you shortly.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-600">
            Something went wrong sending your message. Please try again or reach us directly via
            phone or WhatsApp.
          </p>
        </div>
      )}

      {status !== 'success' && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              label="Full Name"
              id="name"
              placeholder="Your full name"
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="you@example.com"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              label="Phone Number"
              id="phone"
              type="tel"
              placeholder="+234 XXX XXX XXXX"
              error={errors.phone?.message}
              {...register('phone')}
            />
            <Input
              label="Organization"
              id="organization"
              placeholder="Company or school (optional)"
              error={errors.organization?.message}
              {...register('organization')}
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Select
              label="Enquiry Type"
              id="enquiryType"
              options={enquiryOptions}
              error={errors.enquiryType?.message}
              {...register('enquiryType')}
            />
            <Input
              label="Subject"
              id="subject"
              placeholder="How can we help you?"
              error={errors.subject?.message}
              {...register('subject')}
            />
          </div>
          <Textarea
            label="Message"
            id="message"
            placeholder="Tell us a little about your enquiry..."
            rows={6}
            error={errors.message?.message}
            {...register('message')}
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={status === 'loading'}
            icon={<Send className="h-4 w-4" />}
            iconPosition="right"
          >
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}