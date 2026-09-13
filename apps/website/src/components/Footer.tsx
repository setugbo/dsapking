import Link from 'next/link';
import { Container, Logo, StudentPortalButton } from '@marvinho/ui';
import { siteConfig, trainingProgrammes, consultingServices } from '@marvinho/config';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Vision & Mission', href: '/about#mission' },
  { label: 'Core Values', href: '/about#values' },
  { label: 'Why Choose Us', href: '/about#why-choose-us' },
];

const trainingLinks = [
  { label: 'SAP Training', href: '/training' },
  { label: 'Practical Experience', href: '/practical-experience' },
  { label: 'Career Development', href: '/career-development' },
  { label: 'Resources', href: '/resources' },
  { label: 'Assessment & Certification', href: '/assessment-certification' },
];

const serviceLinks = [
  { label: 'SAP Consulting', href: '/consulting' },
  { label: 'Corporate Training', href: '/corporate-training' },
  ...consultingServices.slice(0, 4).map((s) => ({ label: s.title, href: `/consulting/${s.slug}` })),
];

const socialIcons = [
  { label: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { label: 'YouTube', href: siteConfig.social.youtube, icon: Youtube },
  { label: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy)] pt-16 pb-8 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo variant="light" size="md" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
              {siteConfig.description}
            </p>
            <p className="mt-4 max-w-sm text-sm font-semibold text-[var(--gold)]">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[var(--gold)]"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-[var(--gold)]"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                {siteConfig.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {[siteConfig.address.street, siteConfig.address.city, siteConfig.address.country]
                    .filter(Boolean)
                    .join(', ')}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <StudentPortalButton />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[var(--gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Training</h4>
            <ul className="mt-4 space-y-2.5">
              {trainingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[var(--gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                Popular Modules
              </h4>
              <ul className="mt-3 space-y-2">
                {trainingProgrammes.slice(0, 3).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/training/${p.slug}`}
                      className="text-sm text-gray-400 transition-colors hover:text-[var(--gold)]"
                    >
                      {p.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-[var(--gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-gray-400 transition-all hover:bg-[var(--gold)]/15 hover:text-[var(--gold)]"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} D KING SAP ACADEMY LTD. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 transition-colors hover:text-[var(--gold)]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 transition-colors hover:text-[var(--gold)]"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}