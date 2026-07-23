'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { timeline } from '@marvinho/config';

export function AboutTimeline() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Our Journey"
          title="Marvinho Through the Years"
          description="A timeline of our growth, milestones, and expansion into new business verticals."
        />

        <div ref={ref} className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 lg:left-1/2" />

          {timeline.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-10 flex items-start ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="ml-10 lg:ml-0 lg:w-1/2 lg:pr-12">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-premium">
                  <span className="text-sm font-bold text-[#C9A84C]">{event.year}</span>
                  <h4 className="mt-1 text-lg font-bold text-[#141414]">{event.title}</h4>
                  <p className="mt-2 text-sm text-gray-500">{event.description}</p>
                </div>
              </div>
              <div className="absolute left-4 -translate-x-1/2 lg:left-1/2">
                <div className="h-3 w-3 rounded-full border-2 border-[#C9A84C] bg-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
