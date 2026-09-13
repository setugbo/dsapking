import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, ProcessStep, Button } from '@marvinho/ui';
import { practiceEnvironment, practicalSteps } from '@marvinho/config';
import { CheckCircle2, ArrowRight, MonitorCog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Practical SAP Experience',
  description:
    'Learn SAP. Practice SAP. Apply SAP. Explore the D KING practical learning environment — SAP S/4HANA practice server, configuration exercises, business simulations and implementation projects.',
};

export default function PracticalExperiencePage() {
  return (
    <>
      <PageHeader
        title="Learn SAP. Practice SAP. Apply SAP."
        badge="Hands-On Learning"
        description="D KING bridges the gap between SAP theory and real-world business processes through a dedicated practical learning environment."
        breadcrumbs={[{ label: 'Practical Experience' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Your Learning Journey"
            title="From Concepts to Implementation Projects"
            description="Every programme moves you through five stages of practical engagement — building skill, confidence and workplace readiness."
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {practicalSteps.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-premium sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <MonitorCog className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-[var(--text)] sm:text-3xl">
                The D KING Practice Environment
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Practical learning is supported by a dedicated SAP S/4HANA practice environment that
                gives every learner the opportunity to work inside a real system.
              </p>
              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {practiceEnvironment.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                align="left"
                badge="Why It Matters"
                title="Practice Is the Difference"
                description="Organizations hire SAP professionals who can do, not just know. Our practical approach ensures you leave with demonstrable experience — configuration skills, process execution and implementation-style project exposure."
              />
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Register Your Interest
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}