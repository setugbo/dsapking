'use client';

import Link from 'next/link';
import { cn } from '@marvinho/utils';
import { GraduationCap } from 'lucide-react';
import { STUDENT_PORTAL_URL } from '@marvinho/shared';

interface StudentPortalButtonProps {
  className?: string;
  compact?: boolean;
}

export function StudentPortalButton({ className, compact = false }: StudentPortalButtonProps) {
  if (STUDENT_PORTAL_URL) {
    return (
      <a
        href={STUDENT_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-2 text-sm font-semibold text-[var(--gold)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--navy)]',
          compact && 'px-3 py-1.5 text-xs',
          className
        )}
      >
        {!compact && <GraduationCap className="h-4 w-4" />}
        Student Portal
      </a>
    );
  }

  return (
    <Link
      href="/student-portal"
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-2 text-sm font-semibold text-[var(--gold)] transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--navy)]',
        compact && 'px-3 py-1.5 text-xs',
        className
      )}
    >
      {!compact && <GraduationCap className="h-4 w-4" />}
      Student Portal
    </Link>
  );
}