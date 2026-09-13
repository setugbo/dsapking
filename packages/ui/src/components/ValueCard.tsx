'use client';

import { cn } from '@marvinho/utils';
import { ModuleIcon } from './IconMap';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function ValueCard({ title, description, icon, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        'group rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
        <ModuleIcon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-[var(--text)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}