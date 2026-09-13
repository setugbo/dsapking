import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PageHeader,
  Container,
  SectionHeader,
  Button,
  Badge,
  ModuleIcon,
  ValueCard,
} from '@marvinho/ui';
import { coreValues, whyChooseUs, siteConfig } from '@marvinho/config';
import { ArrowRight, Target, Eye, GraduationCap, MonitorCog, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About D KING',
  description:
    'About D KING SAP ACADEMY LTD — an SAP training and consulting organization committed to developing skilled SAP professionals and supporting organizations with professional SAP services.',
};

const missionVision = [
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Our Mission',
    description:
      'To develop skilled SAP professionals through practical, industry-relevant education and to support organizations with professional SAP services that deliver lasting business value.',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Our Vision',
    description:
      'To be a trusted name in SAP training and consulting, building a community of confident SAP professionals and helping organizations realize the full potential of their SAP investments.',
  },
];

const pillars = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'SAP Training',
    description: 'Professional programmes across key SAP functional and technical areas.',
  },
  {
    icon: <MonitorCog className="h-6 w-6" />,
    title: 'Practical Experience',
    description: 'Hands-on SAP system practice that builds workplace-ready skills.',
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: 'SAP Consulting',
    description: 'Enterprise SAP services supporting implementation and business transformation.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About D KING SAP ACADEMY LTD"
        badge="About Us"
        description="An SAP training and consulting organization committed to developing skilled SAP professionals and supporting organizations through professional SAP services."
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Badge variant="primary">Who We Are</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                Building SAP Experts. Transforming Businesses.
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--muted)]">
                <p>{siteConfig.description}</p>
                <p>
                  Our approach bridges the gap between SAP theory and the real-world business
                  processes organizations depend on — combining structured training with hands-on
                  system practice and professional consulting capability.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--navy)] p-8 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Three Pillars, One Objective</h3>
              <p className="mt-3 text-white/70">
                Every learner and client works with the same commitment to practical, professional
                SAP outcomes.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-5">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 rounded-xl bg-white/5 p-5"
                  >
                    <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/15 text-[var(--gold)]">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{pillar.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {missionVision.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-premium sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  {card.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--text)] sm:text-2xl">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{card.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Core Values"
            title="The Principles Behind Our Work"
            description="These values guide how we teach, how we consult and how we serve every learner and client."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <ValueCard key={value.title} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge="Why Choose D KING"
            title="Built for Professionals and Organizations"
            description="The reasons individuals and organizations choose D KING for SAP training and consulting."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((feature) => (
              <ValueCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
            <div className="flex flex-col items-start justify-center rounded-2xl border border-[var(--primary)]/30 bg-white p-7 shadow-premium">
              <h3 className="text-lg font-semibold text-[var(--text)]">Ready to Work With Us?</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                Talk to our team about training, consulting or corporate enablement.
              </p>
              <Link href="/contact" className="mt-5 inline-block">
                <Button variant="primary" size="sm" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}