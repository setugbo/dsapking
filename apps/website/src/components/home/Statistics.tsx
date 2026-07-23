'use client';

import { Container, StatCard } from '@marvinho/ui';
import { statistics } from '@marvinho/config';

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-20 lg:py-28">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 50%, rgba(201, 168, 76, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 50%)',
          }}
        />
      </div>
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {statistics.map((stat) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
