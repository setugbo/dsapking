'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@marvinho/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor={id} className="mb-2 block text-sm font-medium text-[var(--text)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full rounded-xl border border-[var(--border)] bg-gray-50 px-4 py-3 text-sm text-[var(--text)] outline-none transition-all duration-300',
            'focus:border-[var(--primary)] focus:bg-white focus:ring-2 focus:ring-[var(--primary)]/20',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-400/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';