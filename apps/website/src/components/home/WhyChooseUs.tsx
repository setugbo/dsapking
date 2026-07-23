'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader, FeatureCard } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { Shield, Clock, Award, Users, CheckCircle, Headphones } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Fully Insured & Verified',
    description: 'Every service is backed by comprehensive insurance and every team member is background-checked.',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Always On Time',
    description: 'We respect your time. Our teams arrive when promised and deliver within agreed timelines.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Premium Quality Guarantee',
    description: 'Every deliverable is quality-assured. If you are not satisfied, we make it right.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Expert Teams',
    description: 'Our professionals are trained, experienced, and passionate about delivering excellence.',
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'Tailored Solutions',
    description: 'We customize every service to match your specific needs, budget, and timeline.',
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: 'Dedicated Support',
    description: 'Your dedicated account manager ensures seamless communication from start to finish.',
  },
];

export function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="Why Marvinho"
          title="Why Leading Brands Choose Us"
          description="We do not just deliver services. We build partnerships based on trust, quality, and consistent results."
        />

        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
