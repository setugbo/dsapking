import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trimEnd() + '...';
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const baseUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://dkingacademy.com';
}

export function getAbsoluteUrl(path: string): string {
  return `${getSiteUrl()}${path}`;
}

export function generateBusinessJsonLd(data: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    description: data.description,
    url: data.url,
    logo: `${getSiteUrl()}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };
}

export function generateServiceJsonLd(data: {
  name: string;
  description: string;
  url: string;
  provider: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      '@type': 'Organization',
      name: data.provider,
    },
  };
}

export function generateFAQJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
