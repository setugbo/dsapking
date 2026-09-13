import Link from 'next/link';
import { Container, SectionHeader, ConsultingCard, Button } from '@marvinho/ui';
import { consultingServices } from '@marvinho/config';
import { ArrowRight } from 'lucide-react';

export function Consulting() {
  return (
    <section className="bg-[var(--surface)] py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="SAP Consulting"
          title="SAP Consulting for Business Transformation"
          description="Professional services that support organizations through implementation, configuration and process improvement."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {consultingServices.slice(0, 6).map((service) => (
            <ConsultingCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/consulting">
            <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              Explore All Consulting Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}