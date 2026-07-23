import Link from 'next/link';
import { Container, Logo } from '@marvinho/ui';
import { siteConfig, navigation, businessUnits } from '@marvinho/config';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] pt-16 pb-8 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#C9A84C]"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[#C9A84C]"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[#C9A84C]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Businesses
            </h4>
            <ul className="mt-4 space-y-2.5">
              {businessUnits.map((unit) => (
                <li key={unit.slug}>
                  <Link
                    href={`/businesses/${unit.slug}`}
                    className="text-sm text-gray-400 transition-colors hover:text-[#C9A84C]"
                  >
                    {unit.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Business Hours
            </h4>
            <div className="mt-4 space-y-2.5 text-sm text-gray-400">
              <p>{siteConfig.businessHours.weekday}</p>
              <p>{siteConfig.businessHours.saturday}</p>
              <p>{siteConfig.businessHours.sunday}</p>
            </div>
            <div className="mt-6 flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-[#C9A84C]/20 hover:text-[#C9A84C]"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="text-xs uppercase">{platform.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} Marvinho Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-gray-500 transition-colors hover:text-[#C9A84C]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 transition-colors hover:text-[#C9A84C]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
