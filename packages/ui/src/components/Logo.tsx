'use client';

import { cn } from '@marvinho/utils';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
};

export function Logo({ variant = 'dark', size = 'md', className }: LogoProps) {
  const textColor = variant === 'dark' ? '#141414' : '#ffffff';

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-lg font-extrabold',
          sizeStyles[size],
          variant === 'dark' ? 'bg-[#C9A84C]/10' : 'bg-white/10'
        )}
        style={{ width: 'auto', aspectRatio: '1' }}
      >
        <span className="text-lg" style={{ color: '#C9A84C' }}>M</span>
      </div>
      <div className="flex flex-col">
        <span
          className="font-extrabold leading-none tracking-tight"
          style={{ color: textColor, fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '20px' }}
        >
          MARVINHO
        </span>
        <span
          className="text-[10px] font-medium uppercase tracking-widest"
          style={{ color: variant === 'dark' ? '#6b7280' : '#9ca3af' }}
        >
          Limited
        </span>
      </div>
    </div>
  );
}
