'use client';

import { motion } from 'framer-motion';
import { Container } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';

export function AboutStory() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div ref={ref} className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center rounded-full bg-[#C9A84C]/10 px-3 py-1 text-xs font-semibold text-[#C9A84C] uppercase">
              Our Story
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl">
              A Decade of Delivering Excellence
            </h2>
            <div className="mt-6 space-y-4 text-gray-500">
              <p>
                Marvinho Limited was founded in 2014 with a clear vision: to build a multi-service
                corporation that delivers premium quality across every touchpoint. What started as a
                single photography studio in Lagos has grown into six thriving business units
                serving thousands of clients across Nigeria.
              </p>
              <p>
                Our founder recognized that Nigerian businesses and families deserved access to
                world-class services without compromise. From that conviction, Marvinho was
                born &mdash; a company built on the pillars of excellence, integrity, and relentless
                innovation.
              </p>
              <p>
                Today, Marvinho Limited operates across photography and media production,
                facility management and cleaning, childcare and domestic staffing, construction
                finishing, art framing, and general merchandise. Each business unit operates
                independently while sharing a unified commitment to quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-[#C9A84C]/5">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-extrabold text-[#C9A84C]">10+</p>
                  <p className="mt-2 text-lg font-semibold text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#141414] p-6 text-white shadow-xl">
              <p className="text-3xl font-bold">2,500+</p>
              <p className="text-sm text-gray-400">Projects Delivered</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
