'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import { CheckCircle } from 'lucide-react';
import type { BusinessUnitInfo } from '@marvinho/types';

interface BusinessBenefitsProps {
  business: BusinessUnitInfo;
}

const benefitList: Record<string, string[]> = {
  studio: [
    'Professional-grade equipment and lighting',
    'Experienced photographers and videographers',
    'Quick turnaround without compromising quality',
    'Custom creative direction for every project',
    '4K video production and drone coverage',
    'Full post-production and editing services',
  ],
  agency: [
    'Fully vetted and trained cleaning professionals',
    'Eco-friendly cleaning products and methods',
    'Customizable service schedules',
    'Comprehensive insurance coverage',
    'Quality assurance inspections',
    '24/7 emergency support available',
  ],
  nani: [
    'Thorough background checks and verification',
    'First aid and CPR trained caregivers',
    'Ongoing skills development programs',
    'Replacement guarantee if not satisfied',
    'Regular performance evaluations',
    'Flexible engagement options',
  ],
  tiling: [
    'Expert craftsmen with years of experience',
    'Premium quality materials and supplies',
    'Precision installation and finishing',
    'Workmanship warranty included',
    'Project management from start to finish',
    'Competitive and transparent pricing',
  ],
  frame: [
    'Museum-grade printing and framing materials',
    'Custom sizing and design options',
    'UV-protective glass and archival materials',
    'Expert craftsmanship and attention to detail',
    'Corporate bulk ordering available',
    'Professional installation service',
  ],
  merchandise: [
    'Verified and reliable supplier network',
    'Competitive bulk pricing',
    'Customs clearance and logistics support',
    'Quality inspection before delivery',
    'Flexible payment terms',
    'Pan-Nigeria delivery capability',
  ],
};

export function BusinessBenefits({ business }: BusinessBenefitsProps) {
  const { ref, isInView } = useInView();
  const benefits = benefitList[business.id] || [];

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div ref={ref} className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              badge="Benefits"
              title="Why Choose This Service"
              description={`When you choose ${business.name}, you get access to premium quality and unmatched professionalism.`}
              align="left"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C9A84C]" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
