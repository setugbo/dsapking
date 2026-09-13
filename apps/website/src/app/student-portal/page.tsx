import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, Button, Badge } from '@marvinho/ui';
import { studentPortalMessage } from '@marvinho/config';
import { ArrowRight, BookOpen, ClipboardList, BadgeCheck, FolderOpen, MonitorCog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Portal',
  description:
    'The D KING Student Portal — coming soon. Future access to courses, learning progress, assignments, assessments, certificates and learning resources.',
};

const portalFeatures = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Courses',
    description: 'Access your programme content and learning materials.',
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: 'Assignments',
    description: 'Submit assignments and track what is outstanding.',
  },
  {
    icon: <MonitorCog className="h-5 w-5" />,
    title: 'Progress',
    description: 'See your learning progress at a glance.',
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: 'Assessments',
    description: 'Prepare for and view assessment results.',
  },
  {
    icon: <FolderOpen className="h-5 w-5" />,
    title: 'Certificates',
    description: 'Access your Certificate of Completion.',
  },
];

export default function StudentPortalPage() {
  return (
    <>
      <PageHeader
        title="Student Portal"
        badge="Coming Soon"
        description="A dedicated space for D KING learners — designed to support your courses, progress and certificates."
        breadcrumbs={[{ label: 'Student Portal' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold-700)]">
                <MonitorCog className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                Your Learning, All in One Place
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{studentPortalMessage}</p>
              <div className="mt-8">
                <Link href="/contact" className="inline-block">
                  <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                    Register Your Interest
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {portalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--text)]">{feature.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{feature.description}</p>
                </div>
              ))}
              <div className="flex flex-col justify-center rounded-2xl border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6">
                <Badge variant="gold">Launching Soon</Badge>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  The portal opens first to registered learners. Enquire now to be notified when
                  access is available.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}