import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, Button } from '@marvinho/ui';
import { resources } from '@marvinho/config';
import { ArrowRight, FileText, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'SAP learning resources from D KING SAP ACADEMY LTD — training manuals, configuration guides, business process documentation, project templates and practice assessments.',
};

const resourceCategories = [...new Set(resources.map((resource) => resource.category))];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources to Support Your SAP Learning"
        badge="Resources"
        description="A growing library of manuals, guides, templates and practice material designed to support learners and practitioners on their SAP journey."
        breadcrumbs={[{ label: 'Resources' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Resource Library"
            title="Practical Material, When You Need It"
            description="Browse the resource categories below. Library materials are being prepared and will be made available to registered learners through the Student Portal."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-white p-7 shadow-premium"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span className="inline-flex rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                    {resource.category}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{resource.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {resource.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  {resource.type}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                >
                  <Lock className="h-4 w-4" />
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                align="left"
                badge="Student Portal"
                title="Your Resources, All in One Place"
                description="The D KING Student Portal will give registered learners access to their courses, progress, assessments and downloadable learning materials. Register your interest to be the first to know when it opens."
              />
              <Link href="/contact" className="mt-6 inline-block">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Register Your Interest
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {resourceCategories.map((category) => (
                <div
                  key={category}
                  className="rounded-2xl border border-[var(--border)] bg-white p-5 text-center shadow-premium"
                >
                  <p className="text-2xl font-bold text-[var(--primary)]">
                    {resources.filter((resource) => resource.category === category).length}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{category}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}