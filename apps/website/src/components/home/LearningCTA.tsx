import Link from 'next/link';
import { Container, Badge } from '@marvinho/ui';
import { ClipboardCheck, ArrowRight } from 'lucide-react';

const evaluationItems = [
  'Online Assessments',
  'Practical Assignments',
  'Mock Certification Examinations',
  'Project Presentations',
  'Performance Evaluation',
];

export function LearningCTA() {
  return (
    <section className="py-20 lg:py-28">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary-800)] via-[var(--navy)] to-[var(--navy)] p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, rgba(240, 171, 0, 0.6) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(0, 107, 184, 0.7) 0%, transparent 50%)',
              }}
            />
          </div>
          <div className="relative">
            <div className="mb-4">
              <Badge variant="gold">Assessment & Certification</Badge>
            </div>
            <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Your Learning, Evaluated Professionally
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-300">
              Our programmes measure progress through a structured evaluation process — assessments,
              assignments, mock examinations and project presentations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {evaluationItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
                >
                  <ClipboardCheck className="h-4 w-4 text-[var(--gold)]" />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/assessment-certification"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--gold)] px-8 py-3 text-sm font-semibold text-[var(--navy)] transition-all duration-300 hover:bg-[var(--gold-600)] hover:shadow-lg"
              >
                Learn About Certification
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}