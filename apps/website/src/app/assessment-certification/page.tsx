import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, Button, Badge } from '@marvinho/ui';
import { certificateStatement } from '@marvinho/config';
import { ArrowRight, ClipboardCheck, Award, FileBadge, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Assessment & Certification',
  description:
    'Assessment and certification at D KING SAP ACADEMY LTD — practical evaluations, mock examinations and Certificate of Completion issued by the academy.',
};

const assessmentSteps = [
  {
    title: 'Practical Assessment',
    description:
      'Participants demonstrate their skills by completing practical exercises — running transactions, configuring settings and executing business processes on the practice system.',
  },
  {
    title: 'Mock Examinations',
    description:
      'Mock papers and structured evaluations help participants measure their progress and prepare for external SAP certification if they choose to pursue it.',
  },
  {
    title: 'Progress Reviews',
    description:
      'Instructors monitor performance throughout the programme and provide feedback so participants know exactly where they stand.',
  },
  {
    title: 'Certificate of Completion',
    description:
      'Successful participants receive a Certificate of Completion issued by D KING SAP ACADEMY LTD, confirming their completion of the academy programme.',
  },
];

export default function AssessmentCertificationPage() {
  return (
    <>
      <PageHeader
        title="Assessment and Certification at D KING"
        badge="Assessment & Certification"
        description="Our programmes close with structured evaluation — giving you evidence of what you have learned and confidence in what you can do."
        breadcrumbs={[{ label: 'Assessment & Certification' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="How You Are Evaluated"
            title="Practical Evaluation, Real Feedback"
            description="Assessment at D KING is practical by design. We measure what you can do in the system and how you apply concepts to business scenarios."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {assessmentSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-2xl border border-[var(--border)] bg-white p-7 shadow-premium"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                  {index % 2 === 0 ? <ClipboardCheck className="h-5 w-5" /> : <FileBadge className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--border)] bg-white p-8 text-center shadow-premium sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold-700)]">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Certificate of Completion
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{certificateStatement}</p>
            <div className="mt-8">
              <Badge variant="primary">D KING SAP ACADEMY LTD</Badge>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                Ready to Build Skills That Are Measured and Proven
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                Register your interest today. Our team will share programme details, assessment
                expectations and next steps.
              </p>
              <Link href="/contact?enquiryType=training" className="mt-7 inline-block">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Register Your Interest
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { value: 'Practical', label: 'Skills tested in the live system' },
                { value: 'Structured', label: 'Clear evaluation and feedback' },
                { value: 'Recognised', label: 'Academy certificate on completion' },
                { value: 'Career-Ready', label: 'Evidence you can show employers' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium"
                >
                  <p className="font-bold text-[var(--primary)]">{item.value}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}