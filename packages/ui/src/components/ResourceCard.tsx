'use client';

import { cn } from '@marvinho/utils';
import type { ResourceItem } from '@marvinho/types';
import { FileText } from 'lucide-react';

interface ResourceCardProps {
  resource: ResourceItem;
  className?: string;
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
          <FileText className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--muted)]">
          {resource.type}
        </span>
      </div>
      <h3 className="mt-4 text-base font-bold text-[var(--text)]">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {resource.description}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
          {resource.category}
        </span>
        <button
          type="button"
          className="text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-600)]"
          aria-label={`${resource.title} - coming soon`}
        >
          Coming Soon
        </button>
      </div>
    </div>
  );
}