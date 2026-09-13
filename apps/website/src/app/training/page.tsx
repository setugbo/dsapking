import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, TrainingCard, Button, Badge } from '@marvinho/ui';
import { trainingProgrammes } from '@marvinho/config';
import { ArrowRight, MonitorCog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SAP Training',
  description:
    'Professional and practical SAP training programmes at D KING SAP ACADEMY LTD across FICO, MM, SD, PP, PM, HCM, Business Warehouse and Basis Administration.',
};

export default function TrainingPage() {
  return (
    <>
      <PageHeader
        title="SAP Training"
        badge="Professional Programmes"
        description="Develop practical SAP expertise across the functional and technical areas organizations rely on most."
        breadcrumbs={[{ label: 'Training' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Training Overview"
            title="Programmes Built for the Workplace"
            description="Every programme combines structured SAP knowledge with hands-on practice on a live SAP system — so you learn by doing, the way professionals work."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingProgrammes.map((programme) => (
              <TrainingCard key={programme.id} programme={programme} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-premium">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <MonitorCog className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-[var(--text)]">
                A Practical Learning Environment
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Training is supported by a dedicated SAP S/4HANA practice environment with
                configuration exercises, business process simulations and implementation-style
                projects.
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {['SAP S/4HANA Practice Server', 'SAP GUI Access', 'Dedicated User Credentials', 'Practice Client Environment'].map((item) => (
                  <li key={item} className="text-sm text-[var(--muted)]">
                    <span className="mr-2 text-[var(--primary)]">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4">
                <Badge variant="primary">How it works</Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                From Concepts to Capability
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                Each programme follows a proven learning path: understand the concepts, work through
                configuration exercises, execute real business processes and apply your skills in
                implementation-oriented projects.
              </p>
              <div className="mt-8">
                <Link href="/practical-experience">
                  <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                    See the Practical Experience Approach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}