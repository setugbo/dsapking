import Link from 'next/link';
import { Button, Container, Badge } from '@marvinho/ui';
import { GraduationCap, MonitorCog, Briefcase, ArrowRight } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4">
              <Badge variant="primary">About D KING</Badge>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              About D KING SAP Academy Ltd
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              D KING SAP ACADEMY LTD is an SAP training and consulting organization committed to
              developing skilled SAP professionals while providing practical education and
              consulting services to organizations.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Our approach bridges the gap between SAP theory and the real-world business processes
              organizations depend on — combining structured training with hands-on system practice
              and professional consulting capability.
            </p>
            <div className="mt-8">
              <Link href="/about">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 text-center shadow-premium sm:translate-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-bold text-[var(--text)]">SAP Training</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Professional programmes across key modules</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 text-center shadow-premium">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold-700)]">
                <MonitorCog className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-bold text-[var(--text)]">Practical Experience</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Hands-on SAP system practice</p>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 text-center shadow-premium sm:translate-y-[-1rem]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--navy)]/10 text-[var(--navy)]">
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-bold text-[var(--text)]">SAP Consulting</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Enterprise implementation support</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}