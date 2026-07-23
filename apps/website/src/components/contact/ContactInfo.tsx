'use client';

import { siteConfig } from '@marvinho/config';
import { Button } from '@marvinho/ui';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@marvinho/shared';

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
      icon: <MapPin className="h-5 w-5" />,
      label: 'Address',
      value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.country}`,
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
      <h2 className="text-2xl font-bold text-[#141414]">Get in Touch</h2>
      <p className="mt-2 text-sm text-gray-500">
        Prefer to reach us directly? Use any of the channels below.
      </p>

      <div className="mt-8 space-y-6">
        {infoItems.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A84C]/10 text-[#C9A84C]">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-1 block text-sm font-medium text-[#141414] transition-colors hover:text-[#C9A84C]"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-1 whitespace-pre-line text-sm font-medium text-[#141414]">
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

      <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5">
        <h4 className="text-sm font-semibold text-[#141414]">Follow Us</h4>
        <div className="mt-3 flex gap-3">
          {Object.entries(siteConfig.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xs font-semibold text-gray-500 shadow-sm transition-all hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]"
            >
              {platform.charAt(0).toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
