import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/services/website-development',
    '/services/web-applications',
    '/services/mobile-app-development',
    '/services/ai-integration',
    '/services/government-enterprise-solutions',
    '/services/maintenance-support',
    '/case-studies',
    '/process',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/faq',
    '/blog',
    '/blog/custom-software-vs-off-the-shelf',
    '/blog/mobile-app-development-cost-2026',
    '/blog/ai-integration-for-smes',
    '/blog/nextjs-vs-laravel-vs-nodejs',
    '/blog/government-grade-software-requirements',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));
}
