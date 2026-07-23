import type { Metadata } from 'next';
import { PageHeader, Container, SectionHeader, FAQAccordion } from '@marvinho/ui';
import { companyFAQs } from '@marvinho/config';
import { FAQContact } from '@/components/faqs/FAQContact';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Find answers to frequently asked questions about Marvinho Limited and our services.',
};

export default function FAQsPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about our services, pricing, and processes."
        breadcrumbs={[{ label: 'FAQs' }]}
      />

      <section className="py-20 lg:py-28">
        <Container size="md">
          <SectionHeader
            title="General Questions"
            description="Everything you need to know about Marvinho Limited."
          />
          <FAQAccordion faqs={companyFAQs} />
        </Container>
      </section>

      <FAQContact />
    </>
  );
}
