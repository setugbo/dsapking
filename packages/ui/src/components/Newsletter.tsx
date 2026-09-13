'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { cn } from '@marvinho/utils';

interface NewsletterProps {
  className?: string;
}

export function Newsletter({ className }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className={cn('relative overflow-hidden rounded-3xl bg-[var(--navy)] p-8 sm:p-12', className)}>
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 50%, rgba(0, 107, 184, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 171, 0, 0.4) 0%, transparent 50%)',
          }}
        />
      </div>
      <div className="relative text-center">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">Stay Updated</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">
          Subscribe for updates on SAP training programmes, schedules and industry insights from
          D KING SAP ACADEMY LTD.
        </p>
        {submitted ? (
          <div className="mt-6 flex items-center justify-center gap-2 text-[var(--gold)]">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-all hover:bg-[var(--gold-600)]"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}