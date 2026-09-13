'use client';

import Link from 'next/link';
import { cn } from '@marvinho/utils';
import type { Pillar } from '@marvinho/types';
import { ArrowRight } from 'lucide-react';
import { ModuleIcon } from './IconMap';

interface PillarCardProps {
  pillar: Pillar;
  className?: string;
}

export function PillarCard({ pillar, className }: PillarCardProps) {
  return (
    <Link
      href={pillar.href}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8',
        className
      )}
    >
      <span className="absolute right-6 top-6 text-5xl font-extrabold text-[var(--primary-100)] transition-colors duration-300 group-hover:text-[var(--primary-200)]">
        {pillar.number}
      </span>
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
          <ModuleIcon name={pillar.icon} className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-[var(--text)]">{pillar.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{pillar.description}</p>
        <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)] transition-all duration-300 group-hover:gap-2">
          Explore <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}