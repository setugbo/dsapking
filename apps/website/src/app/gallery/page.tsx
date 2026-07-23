import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';
import { GalleryContent } from '@/components/gallery/GalleryContent';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore the Marvinho Limited portfolio of work across photography, cleaning, construction, corporate events, and more.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        description="A visual showcase of our work across all business units."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <GalleryContent />
        </Container>
      </section>
    </>
  );
}
