'use client';

import { useState } from 'react';
import { Container, Input, Textarea, Select, Button, SectionHeader } from '@marvinho/ui';
import { Send, CheckCircle } from 'lucide-react';
import type { BusinessUnitInfo } from '@marvinho/types';

interface BusinessQuoteProps {
  business: BusinessUnitInfo;
}

export function BusinessQuote({ business }: BusinessQuoteProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = business.services.map((s) => ({
    value: s.slug,
    label: s.name,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-28">
      <Container size="md">
        <SectionHeader
          badge="Get Started"
          title="Request a Free Quote"
          description={`Tell us about your ${business.name.toLowerCase()} needs and we will prepare a tailored proposal.`}
        />

        {submitted ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-premium">
            <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
            <h3 className="mt-4 text-xl font-bold text-[#141414]">Quote Request Received!</h3>
            <p className="mt-2 text-sm text-gray-500">
              Thank you for your interest in {business.name}. Our team will review your request and
              get back to you within 24 hours with a detailed proposal.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-premium sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input label="Full Name" id="name" placeholder="John Doe" required />
                <Input label="Email" id="email" type="email" placeholder="john@company.com" required />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input label="Phone Number" id="phone" type="tel" placeholder="+234 XXX XXX XXXX" required />
                <Select
                  label="Select Service"
                  id="service"
                  options={serviceOptions}
                  placeholder="Choose a service"
                  required
                />
              </div>
              <Textarea
                label="Project Description"
                id="description"
                placeholder="Tell us about your requirements, timeline, and budget..."
                rows={5}
                required
              />
              <Button
                type="submit"
                variant="gold"
                size="lg"
                loading={loading}
                icon={<Send className="h-4 w-4" />}
                iconPosition="right"
                className="w-full"
              >
                Submit Quote Request
              </Button>
            </form>
          </div>
        )}
      </Container>
    </section>
  );
}
