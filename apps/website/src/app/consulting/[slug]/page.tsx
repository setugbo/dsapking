import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, SectionHeader, Button } from '@marvinho/ui';
import { consultingServices } from '@marvinho/config';
import { ArrowRight, AlertTriangle, Target, ClipboardList, TrendingUp, Workflow } from 'lucide-react';

export const dynamicParams = false;

interface ConsultingDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return consultingServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ConsultingDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const service = consultingServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

function DetailBlock({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-[var(--text)]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--muted)]">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ConsultingDetailPage({ params }: ConsultingDetailProps) {
  const { slug } = await params;
  const service = consultingServices.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--navy)] pt-32 pb-16 text-white lg:pt-40 lg:pb-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, rgba(0, 107, 184, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(240, 171, 0, 0.35) 0%, transparent 50%)',
            }}
          />
        </div>
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            SAP Consulting Service
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">{service.shortDescription}</p>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-4 py-2">
              <Workflow className="h-4 w-4 text-[var(--primary)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
                Overview
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text)]">Service Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">{service.overview}</p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <SectionHeader badge="Why It Matters" title="The Business Challenge" />
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-4 rounded-2xl border border-[var(--gold)]/25 bg-white p-6 shadow-premium sm:p-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold-700)]">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <p className="text-lg leading-relaxed text-[var(--muted)]">{service.businessChallenge}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader badge="How We Work" title="The D KING Approach" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <DetailBlock icon={<Target className="h-5 w-5" />} title="Our Approach" items={service.approach} />
            <DetailBlock icon={<ClipboardList className="h-5 w-5" />} title="Typical Activities" items={service.typicalActivities} />
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/15 px-4 py-2">
              <TrendingUp className="h-4 w-4 text-[var(--gold-700)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-700)]">
                Expected Value
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text)]">Business Value</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.businessValue.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-2 rounded-2xl border border-[var(--border)] bg-white p-4 text-sm text-[var(--muted)]"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary-800)] via-[var(--navy)] to-[var(--navy)] p-8 text-center sm:p-12 lg:p-16">
            <div className="relative">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Want to discuss {service.title}?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-300">
                Talk to a D KING consultant about how this service can support your organization.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href={`/contact?enquiryType=consulting&subject=${encodeURIComponent(service.title)}`}>
                  <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                    Talk to a Consultant
                  </Button>
                </Link>
                <Link href="/consulting">
                  <Button variant="white" size="lg">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}