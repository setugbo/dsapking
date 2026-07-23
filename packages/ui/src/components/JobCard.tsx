'use client';

import { cn } from '@marvinho/utils';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Badge } from './Badge';
import type { JobListing } from '@marvinho/types';

interface JobCardProps {
  job: JobListing;
  onApply: (job: JobListing) => void;
  className?: string;
}

export function JobCard({ job, onApply, className }: JobCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-gray-100 bg-white p-6 shadow-premium transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-[#141414]">{job.title}</h3>
          <p className="mt-1 text-sm font-medium text-[#C9A84C]">{job.department}</p>
        </div>
        <Badge variant={job.type === 'full-time' ? 'green' : 'gray'}>{job.type}</Badge>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {job.location}
        </span>
        <span className="flex items-center gap-1">
          <Briefcase className="h-3.5 w-3.5" /> {job.department}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" /> {job.type}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-500 line-clamp-2">{job.description}</p>
      <button
        onClick={() => onApply(job)}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C9A84C] transition-all duration-300 hover:gap-2"
      >
        Apply Now <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
