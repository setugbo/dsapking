'use client';

import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@marvinho/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  border?: boolean;
}

const paddingStyles = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6 lg:p-8',
  lg: 'p-6 sm:p-8 lg:p-10',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, padding = 'md', border = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-white transition-all duration-300',
          border && 'border border-gray-100',
          hover && 'shadow-premium hover:shadow-xl hover:-translate-y-1',
          !hover && 'shadow-sm',
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
