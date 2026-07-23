import { Container, Button } from '@marvinho/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AboutCTA() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="rounded-3xl bg-[#141414] p-8 text-center sm:p-12 lg:p-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join the Marvinho Family
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Whether you are looking for premium services or exploring career opportunities,
            we would love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                Get in Touch
              </Button>
            </Link>
            <Link href="/careers">
              <Button variant="white" size="lg">
                View Careers
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
