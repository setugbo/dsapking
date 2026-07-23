'use client';

import { Container, SectionHeader, FAQAccordion } from '@marvinho/ui';
import { companyFAQs } from '@marvinho/config';
import Link from 'next/link';
import { Button } from '@marvinho/ui';

export function HomeFAQ() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <SectionHeader
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to the most common questions about our services and company."
        />

        <div className="mx-auto max-w-3xl">
          <FAQAccordion faqs={companyFAQs.slice(0, 6)} />
        </div>

        <div className="mt-8 text-center">
          <Link href="/faqs">
            <Button variant="ghost">View All FAQs</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
