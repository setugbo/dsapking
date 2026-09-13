import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';
import { siteConfig } from '@marvinho/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How D KING SAP ACADEMY LTD collects, uses and protects your personal information.',
};

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'When you visit our website, submit a contact form or request information, we may collect personal information including your name, email address, phone number, organization and the details of your message.',
      'We also collect non-personal data such as browser type, IP address and pages visited through cookies and analytics tools.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use your information to respond to enquiries, share programme and service information, improve our website and, where you have agreed, send relevant updates.',
      'We do not sell or share your personal information with third parties for their marketing purposes.',
    ],
  },
  {
    title: '3. Data Protection',
    body: [
      'We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure or destruction.',
    ],
  },
  {
    title: '4. Cookies',
    body: [
      'Our website may use cookies to enhance your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences.',
    ],
  },
  {
    title: '5. Contact Us',
    body: [
      `For questions about this Privacy Policy, please contact us at ${siteConfig.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        badge="Legal"
        description={`How ${siteConfig.name} collects, uses and protects your personal information.`}
        breadcrumbs={[{ label: 'Privacy Policy' }]}
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