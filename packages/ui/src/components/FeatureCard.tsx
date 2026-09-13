'use client';

import { cn } from '@marvinho/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group h-full rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-bold text-[var(--text)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </div>
  );
}