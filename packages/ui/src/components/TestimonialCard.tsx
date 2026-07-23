'use client';

import { cn } from '@marvinho/utils';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@marvinho/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-premium transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <Quote className="h-8 w-8 text-[#C9A84C]/30" />
      <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="mt-4 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#C9A84C] text-[#C9A84C]" />
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A84C]/10 text-sm font-bold text-[#C9A84C]">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#141414]">{testimonial.name}</p>
          <p className="text-xs text-gray-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
