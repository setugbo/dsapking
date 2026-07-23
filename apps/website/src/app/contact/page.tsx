import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Marvinho Limited. Request quotes, book appointments, or reach our team via phone, email, or WhatsApp.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We would love to hear from you. Reach out for quotes, bookings, or general inquiries."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      <section className="h-96 w-full bg-gray-200">
        <div className="flex h-full items-center justify-center text-gray-400">
          <p className="text-sm">Google Maps Integration</p>
        </div>
      </section>
    </>
  );
}
