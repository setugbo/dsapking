import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Container, SectionHeader, ConsultingCard, Button, Badge } from '@marvinho/ui';
import { consultingServices } from '@marvinho/config';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SAP Consulting',
  description:
    'SAP consulting services at D KING SAP ACADEMY LTD — implementation, configuration, process analysis, data migration, integration, testing, go-live and ongoing support.',
};

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        title="SAP Consulting"
        badge="Professional Services"
        description="SAP consulting for business transformation — professional services that support organizations through implementation and change."
        breadcrumbs={[{ label: 'Consulting' }]}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="primary">Consulting Overview</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
              Supporting SAP Success, End to End
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              D KING supports organizations with professional SAP services — from structured
              implementations and configuration to testing, go-live and long-term support. We help
              you adopt SAP in a way that fits your business processes and delivers lasting value.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultingServices.map((service) => (
              <ConsultingCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--surface)] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4">
                <Badge variant="primary">Our Approach</Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
                Process-First, Fit-to-Standard
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                We believe SAP delivers value when it is aligned to how your organization really
                works. Our consultants combine structured project discipline with practical
                configuration knowledge to help you adopt SAP with confidence.
              </p>
              <ul className="mt-6 space-y-3">
                {['Understand business processes before configuring systems', 'Favour standard SAP best practice over unnecessary customization', 'Tightly manage risk through testing and controlled go-live', 'Build your internal capability as we work'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--primary)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                align="left"
                badge="Get Started"
                title="Talk to a Consultant"
                description="Whether you are planning a new implementation or optimizing an existing system, our team can help."
              />
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Request a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}