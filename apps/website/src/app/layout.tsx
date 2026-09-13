import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@marvinho/ui';
import { ScrollToTop } from '@marvinho/ui';
import { SITE_NAME, SITE_URL } from '@marvinho/shared';
import { siteConfig } from '@marvinho/config';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | SAP Training & Consulting`,
    template: `%s | ${SITE_NAME.split(' ')[0]} ${SITE_NAME.slice(SITE_NAME.indexOf(' ') + 1)}`,
  },
  description:
    'D KING SAP ACADEMY LTD is an SAP training and consulting organization committed to developing skilled SAP professionals through practical education and supporting organizations with professional SAP services.',
  keywords: [
    'SAP training',
    'SAP consulting',
    'SAP S/4HANA',
    'FICO',
    'MM',
    'SD',
    'corporate training',
    'D KING SAP ACADEMY',
    'SAP certification preparation',
    'SAP career development',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | SAP Training & Consulting`,
    description:
      'Building SAP Experts. Transforming Businesses. Practical SAP training and professional consulting services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | SAP Training & Consulting`,
    description:
      'Building SAP Experts. Transforming Businesses. Practical SAP training and professional consulting services.',
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
    name: SITE_NAME,
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: Object.values(siteConfig.social),
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