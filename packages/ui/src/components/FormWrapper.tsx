'use client';

import { cn } from '@marvinho/utils';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';

interface FormWrapperProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
  status?: 'idle' | 'loading' | 'success' | 'error';
  successMessage?: string;
  errorMessage?: string;
}

export function FormWrapper({
  children,
  onSubmit,
  className,
  status = 'idle',
  successMessage = 'Your message has been sent successfully. We will get back to you soon.',
  errorMessage = 'Something went wrong. Please try again later.',
}: FormWrapperProps) {
  return (
    <div className={cn('relative', className)}>
      {status === 'loading' && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-[#C9A84C]" />
            <p className="text-sm font-medium text-gray-500">Sending...</p>
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-12 text-center">
          <CheckCircle className="h-12 w-12 text-emerald-500" />
          <h3 className="mt-4 text-lg font-bold text-[#141414]">Thank You!</h3>
          <p className="mt-2 text-sm text-gray-500">{successMessage}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      {status !== 'success' && (
        <form onSubmit={onSubmit} className="space-y-5">
          {children}
        </form>
      )}
    </div>
  );
}
