import Link from 'next/link';
import { Container, Button } from '@marvinho/ui';
import { ArrowRight, MessageSquareText, GraduationCap } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="pb-20 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[var(--navy)] p-8 text-center sm:p-12 lg:p-16">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, rgba(0, 107, 184, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(240, 171, 0, 0.25) 0%, transparent 50%)',
              }}
            />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Build Your SAP Future?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Whether you are starting your SAP career, advancing your skills, or building SAP
              capability in your organization, the D KING team is ready to help you get there.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                  Enquire Now
                </Button>
              </Link>
              <Link href="/training">
                <Button variant="white" size="lg" icon={<GraduationCap className="h-4 w-4" />}>
                  Explore Training
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="primary" size="lg" icon={<MessageSquareText className="h-4 w-4" />}>
                  Talk to a Consultant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}