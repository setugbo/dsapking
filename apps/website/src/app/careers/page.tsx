import type { Metadata } from 'next';
import { PageHeader, Container, SectionHeader } from '@marvinho/ui';
import { jobListings } from '@marvinho/config';
import { CareersContent } from '@/components/careers/CareersContent';
import { CareersCulture } from '@/components/careers/CareersCulture';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Marvinho Limited team. Explore open positions and discover why Marvinho is a great place to build your career.',
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Careers at Marvinho"
        description="Join a team of passionate professionals delivering excellence across Nigeria. We are always looking for talented individuals."
        breadcrumbs={[{ label: 'Careers' }]}
      />

      <CareersCulture />
      <CareersContent jobs={jobListings} />
    </>
  );
}
