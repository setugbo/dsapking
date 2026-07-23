import { cn } from '@marvinho/utils';

type BadgeVariant = 'gold' | 'gold-light' | 'dark' | 'gray' | 'green';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold: 'bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20',
  'gold-light': 'bg-[#f9ecc0]/30 text-[#C9A84C] border-[#f9ecc0]/40',
  dark: 'bg-[#141414]/10 text-[#141414] border-[#141414]/20',
  gray: 'bg-gray-100 text-gray-600 border-gray-200',
  green: 'bg-emerald-50 text-emerald-600 border-emerald-200',
};

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
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
