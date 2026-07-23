import { Container, Button } from '@marvinho/ui';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BusinessUnitInfo } from '@marvinho/types';

interface BusinessCTAProps {
  business: BusinessUnitInfo;
}

export function BusinessCTA({ business }: BusinessCTAProps) {
  const otherUnits = require('@marvinho/config').businessUnits.filter(
    (u: BusinessUnitInfo) => u.id !== business.id
  );

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <div className="rounded-3xl bg-[#141414] p-8 text-center sm:p-12 lg:p-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Other Services?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore our other business units or contact us for a comprehensive service package.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/businesses">
              <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                View All Businesses
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="white" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-xl font-bold text-[#141414]">Related Services</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherUnits.slice(0, 3).map((unit: BusinessUnitInfo) => (
              <Link
                key={unit.id}
                href={`/businesses/${unit.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-premium transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h4 className="font-bold text-[#141414] group-hover:text-[#C9A84C]">{unit.name}</h4>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{unit.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
