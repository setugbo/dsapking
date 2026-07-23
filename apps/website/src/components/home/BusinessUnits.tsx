'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, BusinessCard } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { businessUnits } from '@marvinho/config';

export function BusinessUnits() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <SectionHeader
          badge="Our Businesses"
          title="Six Business Units. One Vision."
          description="Each Marvinho business unit operates independently while sharing a unified commitment to quality, professionalism, and customer satisfaction."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessUnits.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BusinessCard business={unit} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
