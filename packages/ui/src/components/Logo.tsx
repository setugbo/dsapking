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

const fontSize = {
  sm: '13px',
  md: '16px',
  lg: '20px',
};

export function Logo({ variant = 'dark', size = 'md', className }: LogoProps) {
  const textColor = variant === 'dark' ? '#1F2937' : '#FFFFFF';

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-xl font-extrabold',
          sizeStyles[size]
        )}
        style={{
          background: 'linear-gradient(135deg, #006BB8 0%, #003966 100%)',
          aspectRatio: '1',
        }}
      >
        <span
          className="leading-none"
          style={{ color: '#F0AB00', fontSize: size === 'sm' ? '13px' : size === 'md' ? '17px' : '21px' }}
        >
          DK
        </span>
      </div>
      <div className="flex flex-col">
        <span
          className="font-extrabold leading-none tracking-tight"
          style={{ color: textColor, fontSize: fontSize[size] }}
        >
          D KING
        </span>
        <span
          className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: variant === 'dark' ? '#5B738B' : '#93A3CE' }}
        >
          SAP Academy Ltd
        </span>
      </div>
    </div>
  );
}