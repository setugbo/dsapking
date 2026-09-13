import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, Button, ModuleIcon } from '@marvinho/ui';
import { careerServices } from '@marvinho/config';
import { ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Career Development',
  description:
    'Career development support at D KING SAP ACADEMY LTD — CV and resume development, interview preparation, career coaching, internships, job placement support and professional mentoring.',
};

const careerOutcomes = [
  'Present your SAP knowledge and practical experience clearly',
  'Prepare confidently for SAP and enterprise-technology interviews',
  'Choose the right module and role path for your goals',
  'Gain real exposure through internships and placement support',
];

export default function CareerDevelopmentPage() {
  return (
    <>
      <PageHeader
        title="From Training to Opportunity"
        badge="Career Development"
        description="D KING supports participants beyond the classroom — helping you translate SAP skills into a professional career through structured career development services."
        breadcrumbs={[{ label: 'Career Development' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="How We Support Your Career"
            title="Guidance That Moves You Forward"
            description="Trained SAP skills are only half the story. Our career development services help you present, position and grow those skills in the job market."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careerServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-2xl border border-[var(--border)] bg-white p-7 shadow-premium transition-colors hover:border-[var(--primary)]/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <ModuleIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--text)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4">
                <SectionHeader
                  align="left"
                  badge="Your Career Path"
                  title="Support That Helps You Stand Out"
                  description="From your first CV through to interviews, internships and career growth, D KING works with you to build the confidence and evidence employers look for."
                />
              </div>
              <ul className="space-y-3">
                {careerOutcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-premium sm:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[var(--text)] sm:text-3xl">
                  Start Your Career Journey
                </h3>
                <p className="mt-3 text-[var(--muted)]">
                  Share your background and aspirations with our team, and we will guide you toward
                  the training and career support that fits your goals.
                </p>
                <Link
                  href="/contact?enquiryType=career-development"
                  className="mt-7 inline-block"
                >
                  <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                    Enquire About Career Support
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