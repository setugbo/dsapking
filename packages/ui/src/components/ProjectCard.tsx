'use client';

import { cn } from '@marvinho/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@marvinho/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const categoryColors: Record<string, string> = {
  studio: '#C9A84C',
  agency: '#2D2D2D',
  nani: '#8B6F47',
  tiling: '#5B7553',
  frame: '#7B6BA0',
  merchandise: '#C47A2B',
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const color = categoryColors[project.category] || '#C9A84C';

  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className={cn(
          'group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-premium transition-all duration-500 hover:shadow-2xl hover:-translate-y-1',
          className
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-50">📸</span>
          </div>
          <div
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-bold text-[#141414] transition-colors group-hover:text-[#C9A84C]">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-2">
            {project.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400">{project.client}</span>
            <div className="inline-flex items-center gap-1 text-sm font-semibold text-[#C9A84C] transition-all duration-300 group-hover:gap-2">
              View <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
