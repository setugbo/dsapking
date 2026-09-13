'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquareText } from 'lucide-react';
import { Button, Container, HeroVisual } from '@marvinho/ui';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 40%, rgba(0, 107, 184, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(240, 171, 0, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 60% 90%, rgba(0, 107, 184, 0.15) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 py-32 lg:grid-cols-2 lg:gap-8 lg:py-40">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/10 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                <span className="text-xs font-semibold tracking-wider text-[var(--gold)] uppercase">
                  D KING SAP Academy Ltd
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Building SAP Experts.{' '}
              <span className="text-[var(--gold)]">Transforming Businesses.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl"
            >
              Professional SAP training and consulting designed to equip individuals with practical
              enterprise skills and help organizations maximize the value of SAP solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link href="/training">
                <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Explore SAP Training
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="white" size="lg" icon={<MessageSquareText className="h-4 w-4" />}>
                  Talk to a Consultant
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-400"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                Practical, hands-on learning
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                Enterprise SAP services
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                Career-focused training
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:pl-6"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}