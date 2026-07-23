import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeader, Container, SectionHeader, ServiceCard, FAQAccordion, Button } from '@marvinho/ui';
import { businessUnits, companyFAQs } from '@marvinho/config';
import { BusinessHero } from '@/components/business/BusinessHero';
import { BusinessBenefits } from '@/components/business/BusinessBenefits';
import { BusinessQuote } from '@/components/business/BusinessQuote';
import { BusinessCTA } from '@/components/business/BusinessCTA';

interface BusinessPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businessUnits.map((unit) => ({ slug: unit.slug }));
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = businessUnits.find((b) => b.slug === slug);
  if (!business) return {};

  return {
    title: business.name,
    description: business.description,
  };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { slug } = await params;
  const business = businessUnits.find((b) => b.slug === slug);
  if (!business) notFound();

  const serviceIcons = business.services.map(() => null);

  return (
    <>
      <BusinessHero business={business} />

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Our Services"
            title={`${business.name} Services`}
            description={`Comprehensive ${business.name.toLowerCase()} solutions tailored to your needs.`}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.services.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                href={`/businesses/${business.slug}#${service.slug}`}
                icon={<span className="text-lg">✦</span>}
              />
            ))}
          </div>
        </Container>
      </section>

      <BusinessBenefits business={business} />

      <section className="py-20 lg:py-28 bg-gray-50/50">
        <Container>
          <SectionHeader
            badge="FAQs"
            title="Frequently Asked Questions"
            description="Common questions about our services."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={companyFAQs.slice(0, 5)} />
          </div>
        </Container>
      </section>

      <BusinessQuote business={business} />
      <BusinessCTA business={business} />
    </>
  );
}
