import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="py-20 lg:py-28">
        <Container size="sm">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#141414]">1. Information We Collect</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                When you visit our website, submit a contact form, or request a quote, we may collect
                personal information including your name, email address, phone number, and project
                details. We also collect non-personal data such as browser type, IP address, and
                pages visited through cookies and analytics tools.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">2. How We Use Your Information</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                We use your information to respond to inquiries, provide service quotes, schedule
                appointments, improve our website, and send relevant marketing communications.
                We do not sell or share your personal information with third parties for their
                marketing purposes.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">3. Data Protection</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                We implement appropriate security measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. All data is stored on
                secure servers and transmitted using encryption protocols.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">4. Cookies</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our website uses cookies to enhance your browsing experience, analyze site traffic,
                and personalize content. You can control cookie settings through your browser
                preferences.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">5. Contact Us</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                For questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:hello@marvinho.com" className="text-[#C9A84C]">
                  hello@marvinho.com
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
