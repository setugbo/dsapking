'use client';

import Link from 'next/link';
import { cn } from '@marvinho/utils';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm text-gray-400', className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-[var(--gold)]"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="text-gray-400">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            {item.href ? (
              <Link href={item.href} className="text-gray-400 transition-colors hover:text-[var(--gold)]">
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}