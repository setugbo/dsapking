'use client';

import { siteConfig } from '@marvinho/config';
import { Button } from '@marvinho/ui';
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@marvinho/shared';
import { enquiryTypes } from '@marvinho/config';

export function ContactInfo() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like to inquire about your services.')}`;

  const infoItems = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Alternative Email',
      value: siteConfig.secondaryEmail,
      href: `mailto:${siteConfig.secondaryEmail}`,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Address',
      value: [siteConfig.address.street, siteConfig.address.city, siteConfig.address.country]
        .filter(Boolean)
        .join(', '),
      href: null,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Business Hours',
      value: `${siteConfig.businessHours.weekday}\n${siteConfig.businessHours.saturday}\n${siteConfig.businessHours.sunday}`,
      href: null,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--text)]">Get in Touch</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Prefer to reach us directly? Use any of the channels below.
      </p>

      <div className="mt-8 space-y-6">
        {infoItems.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 block text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 whitespace-pre-line text-sm font-medium text-[var(--text)]">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary" size="md" className="w-full" icon={<MessageCircle className="h-4 w-4" />}>
            Chat on WhatsApp
          </Button>
        </a>
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-premium">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold-700)]">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h4 className="text-sm font-semibold text-[var(--text)]">What can we help with?</h4>
        </div>
        <ul className="mt-4 space-y-2">
          {enquiryTypes.map((type) => (
            <li key={type.value} className="flex items-center gap-2 text-sm text-[var(--muted)]">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--primary)]" />
              {type.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-[var(--border)] bg-white p-5">
        <h4 className="text-sm font-semibold text-[var(--text)]">Follow Us</h4>
        <div className="mt-3 flex gap-3">
          {Object.entries(siteConfig.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--surface)] text-xs font-semibold text-[var(--muted)] transition-all hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
            >
              {platform.charAt(0).toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}