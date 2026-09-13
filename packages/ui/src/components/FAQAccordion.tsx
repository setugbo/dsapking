'use client';

import { useState } from 'react';
import { cn } from '@marvinho/utils';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@marvinho/types';

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
  defaultOpen?: string;
}

export function FAQAccordion({ faqs, className, defaultOpen }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpen ?? null);

  return (
    <div className={cn('space-y-3', className)}>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="overflow-hidden rounded-xl border border-[var(--border)] bg-white transition-all duration-300"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="flex w-full items-center justify-between p-5 text-left"
            aria-expanded={openId === faq.id}
          >
            <span className="pr-4 text-sm font-semibold text-[var(--text)] sm:text-base">
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                'h-5 w-5 flex-shrink-0 text-[var(--primary)] transition-transform duration-300',
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
            <div className="px-5 text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}