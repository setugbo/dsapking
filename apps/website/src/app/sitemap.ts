import type { MetadataRoute } from 'next';
import { SITE_URL } from '@marvinho/shared';
import { trainingProgrammes, consultingServices } from '@marvinho/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${SITE_URL}/training`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/practical-experience`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/consulting`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE_URL}/career-development`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/corporate-training`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE_URL}/assessment-certification`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${SITE_URL}/resources`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${SITE_URL}/student-portal`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${SITE_URL}/faqs`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ];

  const trainingPages = trainingProgrammes.map((programme) => ({
    url: `${SITE_URL}/training/${programme.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const consultingPages = consultingServices.map((service) => ({
    url: `${SITE_URL}/consulting/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...trainingPages, ...consultingPages];
}