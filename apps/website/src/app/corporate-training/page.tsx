import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, Button, Badge } from '@marvinho/ui';
import { corporateTrainingAudiences, corporateTrainingOptions } from '@marvinho/config';
import { ArrowRight, Building2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Training',
  description:
    'Corporate SAP training at D KING SAP ACADEMY LTD — role-based end-user training, functional training, process-specific workshops and post-implementation training for organizations.',
};

export default function CorporateTrainingPage() {
  return (
    <>
      <PageHeader
        title="Build SAP Capability Across Your Organization"
        badge="Corporate Training"
        description="Tailored SAP training programmes that equip your workforce with the skills to adopt, operate and grow with SAP — from end users to functional teams and IT staff."
        breadcrumbs={[{ label: 'Corporate Training' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Who We Train"
            title="Training Designed for Your People"
            description="Every organization has different needs. D KING designs corporate training around your users, processes and objectives — not a one-size-fits-all agenda."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporateTrainingAudiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-7 shadow-premium"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{audience.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Training Options"
            title="Programmes That Fit the Way You Work"
            description="Select the training format that matches your challenge — from role-based end-user training to process-specific programmes and customized workshops."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corporateTrainingOptions.map((option) => (
              <div
                key={option.id}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-white p-7 shadow-premium transition-colors hover:border-[var(--primary)]/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{option.description}</p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
                  For: {option.audience}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="rounded-3xl bg-[var(--navy)] px-6 py-14 text-center sm:px-12 lg:py-20">
            <div className="mx-auto max-w-2xl">
              <Badge variant="gold">Partner With Us</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Plan Corporate SAP Training for Your Team
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Tell us about your workforce, systems and goals, and our team will design a training
                programme that builds lasting SAP capability.
              </p>
              <Link href="/contact?enquiryType=corporate-training" className="mt-8 inline-block">
                <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Request Corporate Training
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}