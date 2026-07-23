'use client';

import { cn } from '@marvinho/utils';
import { Card } from './Card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

export function ServiceCard({ name, description, href, icon, className }: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card className={cn('group h-full cursor-pointer', className)}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C] transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:text-white">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-bold text-[#141414]">{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C9A84C] transition-all duration-300 group-hover:gap-2">
          Learn More <ArrowRight className="h-4 w-4" />
        </div>
      </Card>
    </Link>
  );
}
