'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@marvinho/utils';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'white' | 'ghost' | 'link' | 'navy';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--primary)] text-white hover:bg-[var(--primary-600)] hover:shadow-lg',
  secondary: 'border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white',
  gold: 'bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-600)] hover:shadow-lg',
  white: 'bg-white text-[var(--text)] hover:bg-gray-50 hover:shadow-lg',
  navy: 'bg-[var(--navy)] text-white hover:bg-[var(--navy-500)] hover:shadow-lg',
  ghost: 'bg-transparent text-[var(--text)] hover:bg-gray-100',
  link: 'bg-transparent text-[var(--primary)] underline-offset-4 hover:underline p-0 h-auto',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </button>
    );
  }
);

Button.displayName = 'Button';