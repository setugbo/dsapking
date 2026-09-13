import Link from 'next/link';
import { Container, SectionHeader, TrainingCard, Button } from '@marvinho/ui';
import { trainingProgrammes } from '@marvinho/config';
import { ArrowRight } from 'lucide-react';

export function TrainingProgrammes() {
  const programmes = trainingProgrammes.filter((p) => p.featured).concat(
    trainingProgrammes.filter((p) => !p.featured)
  );

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="SAP Training"
          title="Develop Practical SAP Expertise"
          description="Professional training across the SAP functional and technical areas organizations rely on most."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((programme) => (
            <TrainingCard key={programme.id} programme={programme} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/training">
            <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              View All Training Programmes
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}