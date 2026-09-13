import { Container, SectionHeader, PillarCard } from '@marvinho/ui';
import { pillars } from '@marvinho/config';

export function Pillars() {
  return (
    <section className="bg-[var(--surface)] py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="What We Do"
          title="Three Pillars, One Purpose"
          description="Everything at D KING centres on three disciplines that develop SAP professionals and support business transformation."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
}