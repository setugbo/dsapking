'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { Button, Container } from '@marvinho/ui';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#141414]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 50%, rgba(201, 168, 76, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(201, 168, 76, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(201, 168, 76, 0.05) 0%, transparent 50%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      <Container className="relative flex min-h-screen items-center">
        <div className="w-full py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-[#C9A84C] uppercase">
                Nigeria&apos;s Premier Multi-Service Corporation
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Premium Services.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C9A84C] via-[#e0a82e] to-[#f3d98a]">
              Trusted Excellence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl"
          >
            From world-class media production to premium facility management, Nani&apos;s Services,
            construction finishing, and general merchandise &mdash; Marvinho delivers excellence
            across every business unit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact">
              <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/businesses">
              <Button variant="white" size="lg">
                Explore Our Businesses
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-2xl font-bold text-white">2,500+</p>
              <p className="text-xs text-gray-500">Projects Completed</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">1,200+</p>
              <p className="text-xs text-gray-500">Happy Clients</p>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">6</p>
              <p className="text-xs text-gray-500">Business Units</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
