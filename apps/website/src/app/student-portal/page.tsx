import type { Metadata } from 'next';
import { PageHeader, Container, Badge } from '@marvinho/ui';

export const metadata: Metadata = {
  title: 'Student Portal',
  description:
    'The D KING Student Portal — coming soon. Registered learners will gain access to courses, progress, assignments, assessments, certificates and learning resources.',
};

export default function StudentPortalPage() {
  return (
    <>
      <PageHeader
        title="Student Portal"
        badge="Coming Soon"
        description="The D KING Student Portal is not yet available. Please check back soon."
        breadcrumbs={[{ label: 'Student Portal' }]}
      />
      <section className="py-20 lg:py-28">
        <Container>
          <div className="rounded-2xl border border-dashed border-[var(--border)] bg-white p-10 text-center shadow-premium">
            <Badge variant="gold">Coming Soon</Badge>
            <h2 className="mt-6 text-2xl font-bold text-[var(--text)] sm:text-3xl">
              Student Portal Under Construction
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--muted)]">
              We are currently building a dedicated space for D KING learners. It will be announced
              here once available.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}