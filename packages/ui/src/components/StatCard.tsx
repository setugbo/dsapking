'use client';

import { cn } from '@marvinho/utils';
import { useCounter } from '@marvinho/hooks';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function StatCard({ value, suffix = '', label, className }: StatCardProps) {
  const { count, ref } = useCounter(value, 2000);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {count}
        <span className="text-[var(--gold)]">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-gray-300 sm:text-base">{label}</p>
    </div>
  );
}