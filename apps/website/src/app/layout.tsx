import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@marvinho/ui';
import { ScrollToTop } from '@marvinho/ui';

export const metadata: Metadata = {
  title: {
    default: 'Marvinho Limited | Premium Services. Trusted Excellence.',
    template: '%s | Marvinho Limited',
  },
  description:
    "Marvinho Limited is Nigeria's premier multi-service corporation, delivering excellence across media production, facility management, domestic services, construction finishing, and general merchandise.",
  keywords: [
    'Marvinho',
    'Nigeria',
    'premium services',
    'photography',
    'cleaning',
    'facility management',
    'nanny services',
    'tiling',
    'frame enlargement',
    'general merchandise',
  ],
  authors: [{ name: 'Marvinho Limited' }],
  creator: 'Marvinho Limited',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://marvinho.com'),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: 'Marvinho Limited',
    title: 'Marvinho Limited | Premium Services. Trusted Excellence.',
    description:
      "Nigeria's premier multi-service corporation delivering excellence across six business units.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marvinho Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvinho Limited | Premium Services. Trusted Excellence.',
    description:
      "Nigeria's premier multi-service corporation delivering excellence across six business units.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marvinho Limited',
    description: "Nigeria's premier multi-service corporation",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://marvinho.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://marvinho.com'}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://twitter.com/marvinho',
      'https://instagram.com/marvinho',
      'https://facebook.com/marvinho',
      'https://linkedin.com/company/marvinho',
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
