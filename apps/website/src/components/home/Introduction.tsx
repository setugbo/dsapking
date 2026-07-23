'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { Shield, Award, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Trusted & Verified',
    description: 'Every staff member is thoroughly vetted and every service is fully insured.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Premium Quality',
    description: 'We never compromise on quality. Every deliverable meets the highest standards.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Client-Centered',
    description: 'Your satisfaction drives everything we do. We build lasting relationships.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovative Solutions',
    description: 'We leverage modern tools and techniques to deliver superior results.',
  },
];

export function Introduction() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Who We Are"
          title="Marvinho Limited"
          description="Founded in 2014, Marvinho Limited has grown into Nigeria's most trusted multi-service corporation. We operate six independent business units, each delivering premium services with unwavering commitment to excellence."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-premium transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C] transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:text-white">
                {value.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#141414]">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
