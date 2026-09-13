'use client';

import { cn } from '@marvinho/utils';
import type { TrustItem } from '@marvinho/types';
import { ModuleIcon } from './IconMap';

interface HeroTrustStripProps {
  items: TrustItem[];
  className?: string;
}

export function HeroTrustStrip({ items, className }: HeroTrustStripProps) {
  return (
    <section
      className={cn(
        'border-b border-[var(--border)] bg-white shadow-sm',
        className
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 px-4 py-5 sm:px-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
              <ModuleIcon name={item.icon} className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--text)]">{item.label}</p>
              <p className="mt-0.5 text-xs leading-snug text-[var(--muted)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}