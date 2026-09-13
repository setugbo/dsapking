'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, ValueCard } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { whyChooseUs } from '@marvinho/config';

export function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-[var(--surface)] py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Why Choose D KING"
          title="Built for Professionals and Organizations"
          description="The reasons individuals and organizations choose D KING for SAP training and consulting."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <ValueCard title={feature.title} description={feature.description} icon={feature.icon} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}