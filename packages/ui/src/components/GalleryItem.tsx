'use client';

import { cn } from '@marvinho/utils';
import { Eye } from 'lucide-react';

interface GalleryItemProps {
  src: string;
  alt: string;
  category: string;
  onClick?: () => void;
  className?: string;
}

export function GalleryItem({ src, alt, category, onClick, className }: GalleryItemProps) {
  return (
    <div
      className={cn(
        'group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100',
        className
      )}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${alt}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="aspect-square">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 to-transparent transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
          📷
        </div>
      </div>
      <div className="absolute inset-0 bg-[#141414]/0 transition-all duration-300 group-hover:bg-[#141414]/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Eye className="h-6 w-6 text-white" />
        <p className="mt-2 text-xs font-semibold text-white">{alt}</p>
        <p className="text-xs text-gray-300">{category}</p>
      </div>
    </div>
  );
}
