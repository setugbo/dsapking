import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';
import { siteConfig } from '@marvinho/config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing your use of the D KING SAP ACADEMY LTD website and services.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      `By accessing and using the ${siteConfig.name} website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.`,
    ],
  },
  {
    title: '2. Services',
    body: [
      'This website provides information about our SAP training, practical experience, career development, corporate training and consulting services.',
      'Specific programme details, schedules, fees and deliverables are governed by separate enrolment or service agreements.',
    ],
  },
  {
    title: '3. Certificates',
    body: [
      'Certificates issued by the academy are Certificates of Completion and are not SAP vendor certifications. Students pursuing external SAP certification are responsible for meeting vendor requirements.',
    ],
  },
  {
    title: '4. Intellectual Property',
    body: [
      'All content on this website, including text, images, logos and graphics, is the property of D KING SAP ACADEMY LTD and is protected by applicable intellectual property laws. Unauthorized reproduction or distribution is prohibited.',
    ],
  },
  {
    title: '5. Limitation of Liability',
    body: [
      `The academy shall not be liable for any indirect, incidental or consequential damages arising from your use of this website or reliance on information provided herein.`,
    ],
  },
  {
    title: '6. Contact',
    body: [
      `For questions about these Terms, contact us at ${siteConfig.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        badge="Legal"
        description={`The terms governing your use of the ${siteConfig.name} website and services.`}
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />
      <section className="py-20 lg:py-28">
        <Container size="sm">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[var(--text)]">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-sm leading-relaxed text-[var(--muted)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}