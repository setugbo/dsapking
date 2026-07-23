'use client';

import { motion } from 'framer-motion';
import { Container, Button, Badge } from '@marvinho/ui';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import type { BusinessUnitInfo } from '@marvinho/types';

interface BusinessHeroProps {
  business: BusinessUnitInfo;
}

export function BusinessHero({ business }: BusinessHeroProps) {
  return (
    <div className="relative overflow-hidden bg-[#141414] pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, ${business.color}40 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${business.color}20 0%, transparent 50%)`,
          }}
        />
      </div>
      <Container className="relative">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/businesses" className="hover:text-white">Businesses</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{business.name}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="gold-light" className="mb-4">{business.name}</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {business.tagline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{business.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:+234XXXXXXXXXX">
              <Button variant="white" size="lg" icon={<Phone className="h-4 w-4" />}>
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
