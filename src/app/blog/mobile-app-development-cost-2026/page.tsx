import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'What Does a Mobile App Actually Cost in 2026? | Axorks Blog',
  description:
    'A realistic breakdown of iOS and Android mobile app development costs, cross-platform architecture, backend cloud infrastructure, and ongoing maintenance retainers.',
  openGraph: {
    title: 'What Does a Mobile App Actually Cost in 2026? | Axorks',
    description:
      'Factual breakdown of cross-platform mobile app development costs, backend infrastructure, and maintenance retainer expectations.',
    url: `${SITE_URL}/blog/mobile-app-development-cost-2026`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Does a Mobile App Actually Cost in 2026?',
    description: 'Realistic technical breakdown of mobile app development costs.',
  },
  alternates: {
    canonical: `${SITE_URL}/blog/mobile-app-development-cost-2026`,
  },
};

export default function MobileAppCostArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'What Does a Mobile App Actually Cost in 2026?',
    author: {
      '@type': 'Person',
      name: FOUNDER_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}/logo.png`,
    },
    datePublished: '2026-07-18',
    description:
      'A realistic technical breakdown of iOS and Android mobile app development costs, cross-platform frameworks, backend infrastructure expenses, and ongoing maintenance retainers.',
  };

  return (
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </head>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-steel transition-colors hover:text-paper"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to All Articles
        </Link>

        <header className="mt-6 border-b border-obsidian-border pb-6">
          <div className="flex items-center gap-3 text-xs font-mono text-gold mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              July 18, 2026
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              6 min read
            </span>
            <span>·</span>
            <span>Author: {FOUNDER_NAME}</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl leading-tight">
            What Does a Mobile App Actually Cost in 2026?
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            Estimating mobile app development costs often confuses founders due to wide pricing variances across agencies. In 2026, cross-platform mobile frameworks have substantially lowered multi-platform deployment expenses without compromising native performance.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            1. Cross-Platform vs. Dual Native Development
          </h2>
          <p>
            Building separate native Swift (iOS) and Kotlin (Android) codebases doubles both upfront development costs and long-term maintenance overhead. Modern cross-platform frameworks allow engineering high-performance mobile apps for both platforms from a single codebase, cutting overall development costs by 40–50%.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            2. Real-World Mobile Investment Ranges
          </h2>
          <p>
            At Axorks, typical cross-platform mobile app development ranges from <strong className="text-gold">{PRICING.mobileAppDevelopment.formattedRange}</strong> depending on features such as offline data caching, push notification infrastructure, payment gateway triggers, and third-party API connectivity.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            3. Backend Infrastructure & Maintenance Retainers
          </h2>
          <p>
            A mobile app is only as fast as its backend API. Serverless cloud databases (PostgreSQL/Neon) combined with Node.js REST endpoints keep server overhead minimal, with ongoing monthly maintenance retainers ranging from <strong className="text-gold">{PRICING.maintenanceSupport.formattedRange}</strong> for security updates and uptime monitoring.
          </p>
        </div>

        <div className="mt-12 schematic-bracket border border-gold/40 bg-obsidian-raised p-8">
          <h3 className="font-serif text-xl font-bold text-paper">
            Planning a Mobile Application Build?
          </h3>
          <p className="mt-2 text-xs text-steel">
            Inquire for a dedicated mobile app quote or consult directly with Axorks Founder {FOUNDER_NAME}.
          </p>
          <Link
            href="/services/mobile-app-development"
            className="mt-4 inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            View Mobile App Services & Specs
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
