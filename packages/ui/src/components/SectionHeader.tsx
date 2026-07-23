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
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
  light = false,
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
        <div className="mb-4">
          <Badge variant={light ? 'gold-light' : 'gold'}>{badge}</Badge>
        </div>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-[#141414]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed sm:text-xl',
            light ? 'text-gray-300' : 'text-gray-500'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
