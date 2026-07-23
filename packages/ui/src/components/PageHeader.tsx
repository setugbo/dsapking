'use client';

import { cn } from '@marvinho/utils';
import { Container } from './Container';
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs';

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

export function PageHeader({ title, description, breadcrumbs, className }: PageHeaderProps) {
  return (
    <div className={cn('relative overflow-hidden bg-[#141414] pt-32 pb-16 text-white lg:pt-40 lg:pb-20', className)}>
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(201, 168, 76, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201, 168, 76, 0.2) 0%, transparent 50%)',
          }}
        />
      </div>
      <Container>
        <Breadcrumbs items={breadcrumbs} className="mb-6" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{description}</p>
        )}
      </Container>
    </div>
  );
}
