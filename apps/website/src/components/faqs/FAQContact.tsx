import { Container, Button } from '@marvinho/ui';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@marvinho/shared';

export function FAQContact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I have a question about your services.')}`;

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <Container>
        <div className="rounded-3xl bg-[#141414] p-8 text-center sm:p-12 lg:p-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-400">
            Can not find the answer you are looking for? Our team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="gold" size="lg" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
                Contact Us
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="white" size="lg" icon={<MessageCircle className="h-4 w-4" />}>
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
