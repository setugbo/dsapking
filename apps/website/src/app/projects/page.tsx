import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';
import { featuredProjects } from '@marvinho/config';
import { ProjectsContent } from '@/components/projects/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore our portfolio of completed projects across photography, cleaning, tiling, framing, and general merchandise.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        description="A showcase of our work and the results we deliver for our clients."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <ProjectsContent projects={featuredProjects} />
        </Container>
      </section>
    </>
  );
}
