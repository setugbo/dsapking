'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { Heart, BookOpen, TrendingUp, Globe, Coffee, Award } from 'lucide-react';

const perks = [
  { icon: <Heart className="h-5 w-5" />, title: 'Health Insurance', description: 'Comprehensive health coverage for you and your family.' },
  { icon: <BookOpen className="h-5 w-5" />, title: 'Training & Development', description: 'Continuous learning opportunities and skill development programs.' },
  { icon: <TrendingUp className="h-5 w-5" />, title: 'Career Growth', description: 'Clear career progression paths and mentorship programs.' },
  { icon: <Globe className="h-5 w-5" />, title: 'Diverse Environment', description: 'Work with talented professionals from diverse backgrounds.' },
  { icon: <Coffee className="h-5 w-5" />, title: 'Work-Life Balance', description: 'Flexible schedules and generous time-off policies.' },
  { icon: <Award className="h-5 w-5" />, title: 'Performance Bonuses', description: 'Competitive bonuses tied to individual and team achievements.' },
];

export function CareersCulture() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Why Marvinho"
          title="Life at Marvinho"
          description="We believe that happy people deliver exceptional work. Here is what makes Marvinho a great place to build your career."
        />
        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-premium transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C]">
                {perk.icon}
              </div>
              <h3 className="mt-3 text-base font-bold text-[#141414]">{perk.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
