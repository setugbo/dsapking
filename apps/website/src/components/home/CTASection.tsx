import { Container, Button } from '@marvinho/ui';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#141414] p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, rgba(201, 168, 76, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201, 168, 76, 0.2) 0%, transparent 50%)',
              }}
            />
          </div>
          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Whether you need photography services, facility management, or any of our premium
              solutions, we are here to help. Get in touch today for a free consultation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="gold" size="lg">
                  Request a Free Quote
                </Button>
              </Link>
              <a href="tel:+234XXXXXXXXXX">
                <Button variant="white" size="lg" icon={<Phone className="h-4 w-4" />} iconPosition="left">
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
