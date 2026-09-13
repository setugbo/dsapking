'use client';

import { cn } from '@marvinho/utils';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
  badgeVariant?: 'primary' | 'gold' | 'navy' | 'primary-light' | 'gold-light';
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
  light = false,
  badgeVariant = 'primary',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' && 'mx-auto max-w-3xl text-center',
        align === 'right' && 'ml-auto max-w-3xl text-right',
        align === 'left' && 'max-w-3xl',
        className
      )}
    >
      {badge && (
        <div className={cn('mb-4', align === 'center' && 'flex justify-center')}>
          <Badge variant={light ? 'gold' : badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-[var(--text)]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed sm:text-xl',
            light ? 'text-gray-300' : 'text-[var(--muted)]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}