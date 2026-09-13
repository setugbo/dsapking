'use client';

import { cn } from '@marvinho/utils';
import { Container } from './Container';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
  badge?: string;
}

export function PageHeader({ title, description, breadcrumbs, className, badge }: PageHeaderProps) {
  return (
    <div className={cn('relative overflow-hidden bg-[var(--navy)] pt-32 pb-16 text-white lg:pt-40 lg:pb-20', className)}>
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(0, 107, 184, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 171, 0, 0.4) 0%, transparent 50%)',
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      <Container>
        <Breadcrumbs items={breadcrumbs} className="mb-6" />
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {badge && (
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            {badge}
          </p>
        )}
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{description}</p>
        )}
      </Container>
    </div>
  );
}