'use client';

import { cn } from '@marvinho/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { BusinessUnitInfo } from '@marvinho/types';

interface BusinessCardProps {
  business: BusinessUnitInfo;
  className?: string;
}

const businessIcons: Record<string, string> = {
  studio: '📸',
  agency: '🏢',
  nani: '👶',
  tiling: '🔨',
  frame: '🖼️',
  merchandise: '📦',
};

export function BusinessCard({ business, className }: BusinessCardProps) {
  return (
    <Link href={`/businesses/${business.slug}`}>
      <div
        className={cn(
          'group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-premium transition-all duration-500 hover:shadow-2xl hover:-translate-y-1',
          className
        )}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${business.color}08 0%, ${business.color}04 100%)`,
          }}
        />
        <div className="relative">
          <span className="text-4xl">{businessIcons[business.id]}</span>
          <h3 className="mt-4 text-xl font-bold text-[#141414]">{business.name}</h3>
          <p className="mt-1 text-sm font-medium" style={{ color: business.color }}>
            {business.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {business.description}
          </p>
          <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-[#141414] transition-all duration-300 group-hover:gap-2" style={{ color: business.color }}>
            Explore Services <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
