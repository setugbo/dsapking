'use client';

import Link from 'next/link';
import { cn } from '@marvinho/utils';
import type { TrainingProgramme } from '@marvinho/types';
import { ArrowRight, MonitorCog } from 'lucide-react';

interface TrainingCardProps {
  programme: TrainingProgramme;
  className?: string;
}

export function TrainingCard({ programme, className }: TrainingCardProps) {
  return (
    <Link
      href={`/training/${programme.slug}`}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-400)] to-[var(--gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
          <MonitorCog className="h-6 w-6" />
        </div>
        <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--muted)]">
          {programme.category}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold leading-snug text-[var(--text)]">
        {programme.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {programme.shortDescription}
      </p>
      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] transition-all duration-300 group-hover:gap-2">
        Learn More <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}