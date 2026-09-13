'use client';

import { cn } from '@marvinho/utils';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function ProcessStep({ number, title, description, className }: ProcessStepProps) {
  return (
    <div className={cn('group relative rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold-700)] font-extrabold transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]">
        {number}
      </div>
      <h3 className="mt-5 text-lg font-bold text-[var(--text)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}