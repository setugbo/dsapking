import { Container, SectionHeader, FAQAccordion } from '@marvinho/ui';
import { faqs } from '@marvinho/config';

export function HomeFAQ() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Answers to the questions learners and organizations ask most often."
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}