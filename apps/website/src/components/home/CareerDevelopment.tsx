import Link from 'next/link';
import { Container, SectionHeader, ValueCard, Button } from '@marvinho/ui';
import { careerServices } from '@marvinho/config';
import { ArrowRight } from 'lucide-react';

export function CareerDevelopment() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Career Development"
          title="Your SAP Career Starts With More Than Training"
          description="We support you beyond the classroom — from building a professional CV to preparing for interviews and connecting with opportunity."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerServices.map((service) => (
            <ValueCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/career-development">
            <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              Explore Career Development
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}