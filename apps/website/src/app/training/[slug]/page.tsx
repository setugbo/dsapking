import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, SectionHeader, Button } from '@marvinho/ui';
import { trainingProgrammes } from '@marvinho/config';
import { ArrowRight, CheckCircle2, Target, MonitorCog, BriefcaseBusiness, GraduationCap } from 'lucide-react';

export const dynamicParams = false;

interface TrainingDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return trainingProgrammes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: TrainingDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = trainingProgrammes.find((p) => p.slug === slug);
  if (!programme) return {};
  return {
    title: programme.title,
    description: programme.shortDescription,
  };
}

function SectionList({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-[var(--text)]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function TrainingDetailPage({ params }: TrainingDetailProps) {
  const { slug } = await params;
  const programme = trainingProgrammes.find((p) => p.slug === slug);
  if (!programme) return notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--navy)] pt-32 pb-16 text-white lg:pt-40 lg:pb-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, rgba(0, 107, 184, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 171, 0, 0.35) 0%, transparent 50%)',
            }}
          />
        </div>
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            SAP Training Programme
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {programme.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{programme.shortDescription}</p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-4 py-2">
              <GraduationCap className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                Overview
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text)]">About This Programme</h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{programme.overview}</p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <SectionHeader badge="Programme Details" title="What This Programme Covers" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <SectionList
              icon={<MonitorCog className="h-5 w-5" />}
              title="What You'll Learn"
              items={programme.whatYouWillLearn}
            />
            <SectionList
              icon={<ArrowRight className="h-5 w-5" />}
              title="Practical Experience"
              items={programme.practicalExperience}
            />
            <SectionList
              icon={<Target className="h-5 w-5" />}
              title="Who This Is For"
              items={programme.audience}
            />
            <SectionList
              icon={<CheckCircle2 className="h-5 w-5" />}
              title="Learning Outcomes"
              items={programme.learningOutcomes}
            />
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/15 px-4 py-2">
              <BriefcaseBusiness className="h-4 w-4 text-[var(--gold-700)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-700)]">
                Career Relevance
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text)]">Career Relevance</h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              {programme.careerRelevance}
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary-800)] via-[var(--navy)] to-[var(--navy)] p-8 text-center sm:p-12 lg:p-16">
            <div className="relative">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Interested in this programme?</h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-300">
                Register your interest and the D KING team will share schedules, pricing and next steps.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={`/contact?enquiryType=training&subject=${encodeURIComponent(programme.title)}`}>
                  <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                    Register Your Interest
                  </Button>
                </Link>
                <Link href="/training">
                  <Button variant="white" size="lg">
                    View All Programmes
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