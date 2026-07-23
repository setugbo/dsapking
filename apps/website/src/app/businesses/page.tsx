import type { Metadata } from 'next';
import { PageHeader, Container, SectionHeader } from '@marvinho/ui';
import { businessUnits } from '@marvinho/config';
import { BusinessCard } from '@marvinho/ui';

export const metadata: Metadata = {
  title: 'Our Businesses',
  description:
    'Explore the six business units of Marvinho Limited - Studio, Agency, Nani\'s Services, Tiling, Frame Enlargement, and General Merchandise.',
};

export default function BusinessesPage() {
  return (
    <>
      <PageHeader
        title="Our Businesses"
        description="Six independent business units, one commitment to excellence. Explore each of our specialized service divisions."
        breadcrumbs={[{ label: 'Businesses' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessUnits.map((unit) => (
              <BusinessCard key={unit.id} business={unit} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <SectionHeader
            badge="Our Approach"
            title="How We Work"
            description="Every business unit follows a consistent process designed to deliver exceptional results."
          />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Consultation', description: 'We listen to understand your specific needs, goals, and constraints.' },
              { step: '02', title: 'Proposal', description: 'We deliver a detailed, transparent proposal tailored to your requirements.' },
              { step: '03', title: 'Delivery', description: 'Our expert teams execute with precision, keeping you informed throughout.' },
              { step: '04', title: 'Follow-Up', description: 'We ensure your satisfaction and provide ongoing support after delivery.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A84C]/10 text-lg font-bold text-[#C9A84C]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#141414]">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
