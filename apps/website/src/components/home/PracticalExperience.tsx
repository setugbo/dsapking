import Link from 'next/link';
import { Container, Button } from '@marvinho/ui';
import { practiceEnvironment } from '@marvinho/config';
import { ArrowRight, MonitorCog, CheckCircle2 } from 'lucide-react';

export function PracticalExperience() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] py-20 lg:py-28">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 80% 20%, rgba(0, 107, 184, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(240, 171, 0, 0.08) 0%, transparent 50%)',
          }}
        />
      </div>
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10 px-4 py-2">
              <MonitorCog className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                Practical SAP Experience
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Learn SAP. Practice SAP. Apply SAP.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Theory is not enough. D KING gives learners a practical environment where they
              configure, execute and apply SAP — the way it happens in the workplace.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {practiceEnvironment.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/practical-experience">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Explore the Learning Journey
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              The D KING Learning Journey
            </p>
            <div className="mt-6 space-y-0">
              {[
                { step: '01', label: 'Understand', desc: 'Learn the concepts' },
                { step: '02', label: 'Configure', desc: 'System configuration exercises' },
                { step: '03', label: 'Execute', desc: 'Real business processes' },
                { step: '04', label: 'Simulate', desc: 'Realistic scenarios' },
                { step: '05', label: 'Apply', desc: 'Implementation projects' },
              ].map((s, i) => (
                <div key={s.step} className="relative flex gap-5 pb-6 last:pb-0">
                  {i < 4 && (
                    <span className="absolute left-[22px] top-11 h-[calc(100%-2.5rem)] w-px bg-white/10" />
                  )}
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-sm font-extrabold text-white">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-bold text-white">{s.label}</p>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}