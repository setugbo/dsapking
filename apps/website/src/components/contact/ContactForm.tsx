'use client';

import { useState } from 'react';
import { Input, Textarea, Select, Button } from '@marvinho/ui';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { businessUnits } from '@marvinho/config';

const businessOptions = [
  { value: '', label: 'General Inquiry' },
  ...businessUnits.map((u) => ({ value: u.slug, label: u.name })),
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#141414]">Send Us a Message</h2>
      <p className="mt-2 text-sm text-gray-500">
        Fill out the form below and our team will respond within 24 hours.
      </p>

      {status === 'success' && (
        <div className="mt-8 flex flex-col items-center rounded-2xl bg-white p-12 text-center shadow-premium">
          <CheckCircle className="h-12 w-12 text-emerald-500" />
          <h3 className="mt-4 text-lg font-bold text-[#141414]">Message Sent!</h3>
          <p className="mt-2 text-sm text-gray-500">
            Thank you for contacting Marvinho Limited. We will get back to you within 24 hours.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 flex items-center gap-3 rounded-xl bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
        </div>
      )}

      {status !== 'success' && (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input label="Full Name" id="name" placeholder="Your full name" required />
            <Input label="Email Address" id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input label="Phone Number" id="phone" type="tel" placeholder="+234 XXX XXX XXXX" required />
            <Select label="Business Unit" id="businessUnit" options={businessOptions} />
          </div>
          <Input label="Subject" id="subject" placeholder="How can we help you?" required />
          <Textarea
            label="Message"
            id="message"
            placeholder="Tell us about your project or inquiry..."
            rows={6}
            required
          />
          <Button
            type="submit"
            variant="gold"
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
