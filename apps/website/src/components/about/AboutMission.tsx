'use client';

import { motion } from 'framer-motion';
import { Container } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { Target, Eye, Gem } from 'lucide-react';

const cards = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Our Mission',
    description:
      'To deliver premium, reliable, and innovative services that exceed expectations across every business unit, empowering individuals and organizations to thrive.',
    gradient: 'from-[#C9A84C]/20 to-[#C9A84C]/5',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Our Vision',
    description:
      'To be Africa\'s most trusted and admired multi-service corporation, setting the standard for quality, professionalism, and customer satisfaction.',
    gradient: 'from-[#141414]/10 to-[#141414]/5',
  },
  {
    icon: <Gem className="h-6 w-6" />,
    title: 'Future Vision',
    description:
      'To expand our ecosystem into a digital platform connecting service providers and clients across Africa, while pioneering innovation in every sector we operate.',
    gradient: 'from-[#C9A84C]/15 to-[#C9A84C]/5',
  },
];

export function AboutMission() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-premium"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C]">
                {card.icon}
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#141414]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
