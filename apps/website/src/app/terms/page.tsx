import type { Metadata } from 'next';
import { PageHeader, Container } from '@marvinho/ui';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="The terms governing your use of our website and services."
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />
      <section className="py-20 lg:py-28">
        <Container size="sm">
          <div className="prose prose-gray max-w-none space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#141414]">1. Acceptance of Terms</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                By accessing and using the Marvinho Limited website, you agree to be bound by these
                Terms of Service. If you do not agree with any part of these terms, please do not
                use our website.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">2. Services</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Marvinho Limited provides information about our services through this website.
                All service details, pricing, and availability are subject to change without
                notice. Specific service agreements are governed by separate contracts.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">3. Intellectual Property</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                All content on this website, including text, images, logos, and graphics, is the
                property of Marvinho Limited and is protected by applicable intellectual property
                laws. Unauthorized reproduction or distribution is prohibited.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">4. Limitation of Liability</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Marvinho Limited shall not be liable for any indirect, incidental, or consequential
                damages arising from your use of this website or reliance on information provided
                herein.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#141414]">5. Contact</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                For questions about these Terms, contact us at{' '}
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
