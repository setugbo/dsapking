import { cn } from '@marvinho/utils';

type BadgeVariant = 'gold' | 'gold-light' | 'primary' | 'primary-light' | 'gray' | 'green' | 'navy';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold: 'bg-[var(--gold)]/10 text-[var(--gold-700)] border-[var(--gold)]/20',
  'gold-light': 'bg-[var(--gold-100)]/40 text-[var(--gold-700)] border-[var(--gold-100)]',
  primary: 'bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20',
  'primary-light': 'bg-[var(--primary-50)] text-[var(--primary-700)] border-[var(--primary-200)]',
  navy: 'bg-[var(--navy)]/10 text-[var(--navy)] border-[var(--navy)]/20',
  gray: 'bg-gray-100 text-gray-600 border-gray-200',
  green: 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}