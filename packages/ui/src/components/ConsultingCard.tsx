'use client';

import Link from 'next/link';
import { cn } from '@marvinho/utils';
import type { ConsultingService } from '@marvinho/types';
import { ArrowRight, Workflow } from 'lucide-react';

interface ConsultingCardProps {
  service: ConsultingService;
  className?: string;
}

export function ConsultingCard({ service, className }: ConsultingCardProps) {
  return (
    <Link
      href={`/consulting/${service.slug}`}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-xl',
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--navy)]/5 text-[var(--navy)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
        <Workflow className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-[var(--text)]">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {service.shortDescription}
      </p>
      <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] transition-all duration-300 group-hover:gap-2">
        View Service <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}