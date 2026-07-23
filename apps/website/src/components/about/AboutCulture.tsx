'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { Users, BookOpen, Zap, Leaf } from 'lucide-react';

const culturePoints = [
  {
    icon: <Users className="h-6 w-6" />,
    title: 'People First',
    description: 'We invest in our team because we know great people deliver great results.',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Continuous Learning',
    description: 'We encourage growth, provide training, and celebrate development at every level.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovation Mindset',
    description: 'We embrace new ideas, adopt modern tools, and challenge the status quo daily.',
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Sustainable Practices',
    description: 'We are committed to environmentally responsible operations across all our services.',
  },
];

export function AboutCulture() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <SectionHeader
          badge="Our Culture"
          title="Corporate Culture & Governance"
          description="A culture of excellence, accountability, and transparency that permeates everything we do."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {culturePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-premium transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C]">
                {point.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#141414]">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-100 bg-white p-8 lg:p-12">
          <h3 className="text-xl font-bold text-[#141414]">Corporate Governance</h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Marvinho Limited operates under a robust governance framework that ensures transparency,
            accountability, and ethical business practices. Our board provides strategic oversight
            while management focuses on operational excellence. We comply with all regulatory
            requirements in Nigeria and maintain the highest standards of corporate responsibility.
            Our governance model includes regular audits, risk assessments, and stakeholder
            engagement to ensure sustainable growth and long-term value creation.
          </p>
        </div>
      </Container>
    </section>
  );
}
