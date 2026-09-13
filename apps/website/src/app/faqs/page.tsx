import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, Button, FAQAccordion } from '@marvinho/ui';
import { faqs } from '@marvinho/config';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@marvinho/shared';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Frequently asked questions about D KING SAP ACADEMY LTD — SAP training, practical experience, corporate training, consulting, certification and career support.',
};

export default function FaqsPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I have a question about D KING SAP ACADEMY.')}`;

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        badge="FAQs"
        description="Answers to the questions we hear most often about our training, consulting and career support."
        breadcrumbs={[{ label: 'FAQs' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={faqs} defaultOpen={faqs[0]?.id} />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeader
              badge="Still Have Questions?"
              title="Let's Talk"
              description="If you did not find the answer you were looking for, our team is happy to help."
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-block">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Send an Enquiry
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<MessageCircle className="h-4 w-4" />}
                  iconPosition="right"
                >
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}