'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, TestimonialCard } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { testimonials } from '@marvinho/config';

export function Testimonials() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Do not just take our word for it. Hear from the businesses and families who trust Marvinho."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
