'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeader } from '@marvinho/ui';
import { useInView } from '@marvinho/hooks';
import {
  Building2, Hotel, Stethoscope, GraduationCap, Briefcase,
  Store, Factory, Landmark, Film, Droplets,
} from 'lucide-react';

const industryData = [
  { name: 'Real Estate', icon: <Building2 className="h-5 w-5" /> },
  { name: 'Hospitality', icon: <Hotel className="h-5 w-5" /> },
  { name: 'Healthcare', icon: <Stethoscope className="h-5 w-5" /> },
  { name: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
  { name: 'Corporate', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Retail', icon: <Store className="h-5 w-5" /> },
  { name: 'Manufacturing', icon: <Factory className="h-5 w-5" /> },
  { name: 'Government', icon: <Landmark className="h-5 w-5" /> },
  { name: 'Events & Entertainment', icon: <Film className="h-5 w-5" /> },
  { name: 'Oil & Gas', icon: <Droplets className="h-5 w-5" /> },
];

export function IndustriesServed() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <SectionHeader
          badge="Industries"
          title="Industries We Serve"
          description="Our diverse portfolio spans across multiple industries, delivering specialized solutions for each sector."
        />

        <div ref={ref} className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-6">
          {industryData.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-premium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#C9A84C]/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C] transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:text-white">
                {industry.icon}
              </div>
              <span className="text-xs font-semibold text-gray-700 sm:text-sm">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
