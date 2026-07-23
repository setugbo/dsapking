'use client';

import { useState } from 'react';
import { cn } from '@marvinho/utils';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@marvinho/types';

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('space-y-3', className)}>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="flex w-full items-center justify-between p-5 text-left"
            aria-expanded={openId === faq.id}
          >
            <span className="pr-4 text-sm font-semibold text-[#141414] sm:text-base">
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                'h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300',
                openId === faq.id && 'rotate-180'
              )}
            />
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              openId === faq.id ? 'max-h-96 pb-5' : 'max-h-0'
            )}
          >
            <div className="px-5 text-sm leading-relaxed text-gray-500">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
