import Link from 'next/link';
import { Container, SectionHeader, Button } from '@marvinho/ui';
import { corporateTrainingOptions } from '@marvinho/config';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

export function CorporateTraining() {
  return (
    <section className="bg-[var(--navy)] py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10 px-4 py-2">
              <Building2 className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                Corporate Training
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Develop SAP Capability Across Your Organization
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Equip your teams with practical SAP knowledge aligned with their roles, business
              processes and operational requirements.
            </p>
            <ul className="mt-8 space-y-3">
              {corporateTrainingOptions.map((option) => (
                <li key={option.id} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--gold)]" />
                  <div>
                    <p className="text-sm font-semibold text-white">{option.title}</p>
                    <p className="text-sm text-gray-400">{option.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/corporate-training">
                <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Request Corporate Training
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { title: 'Who We Support', items: ['Organizations adopting SAP', 'Existing SAP users', 'Functional teams', 'End users', 'Business process teams', 'IT teams'] },
              { title: 'Training Options', items: ['End-user training', 'Functional training', 'Process-specific training', 'Refresher training', 'Customized workshops', 'Post-implementation training'] },
            ].map((col) => (
              <div key={col.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-[var(--gold)]">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary-300)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}