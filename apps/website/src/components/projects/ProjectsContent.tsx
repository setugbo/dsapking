'use client';

import { useState } from 'react';
import { ProjectCard } from '@marvinho/ui';
import type { Project } from '@marvinho/types';

interface ProjectsContentProps {
  projects: Project[];
}

const categories = ['all', 'studio', 'agency', 'nani', 'tiling', 'frame', 'merchandise'];

export function ProjectsContent({ projects }: ProjectsContentProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-xs font-semibold capitalize transition-all ${
              activeCategory === cat
                ? 'bg-[#141414] text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-sm text-gray-500">No projects found in this category.</p>
        </div>
      )}
    </>
  );
}
