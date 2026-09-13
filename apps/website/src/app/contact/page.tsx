import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact D KING SAP ACADEMY LTD — send an enquiry about SAP training, corporate training, consulting or career development. Reach us via phone, email or WhatsApp.',
};

interface ContactPageProps {
  searchParams: Promise<{ enquiryType?: string; subject?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <>
      <PageHeader
        title="Contact Us"
        badge="Let's Talk"
        description="Send an enquiry and the D KING team will follow up with programme details, services and next steps."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm
                initialEnquiryType={params.enquiryType ?? ''}
                initialSubject={params.subject ?? ''}
              />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}