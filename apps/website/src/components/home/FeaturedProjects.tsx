'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, ProjectCard } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { featuredProjects } from '@marvinho/config';
import Link from 'next/link';
import { Button } from '@marvinho/ui';
import { ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <SectionHeader
          badge="Our Work"
          title="Featured Projects"
          description="A selection of our recent work across all business units, showcasing our commitment to quality."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              View All Projects
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
