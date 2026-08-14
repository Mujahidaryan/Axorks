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
    <div className="pb-12 sm:pb-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </head>

      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[28rem] w-[28rem] opacity-50" />
          <div className="exec-mesh mesh-violet-dark absolute -right-24 bottom-0 h-[22rem] w-[22rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[32rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel transition-colors hover:text-paper hover:border-gold/40"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to All Articles
          </Link>

          <div className="mt-6">
            <div className="flex items-center gap-3 text-xs font-mono text-steel mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-gold" />
                July 18, 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-gold" />
                6 min read
              </span>
              <span>·</span>
              <span>Author: {FOUNDER_NAME}</span>
            </div>

            <h1 className="font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              What Does a Mobile App Actually{' '}
              <span className="gradient-text-gold">Cost in 2026?</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            Estimating mobile app development costs often confuses founders due to wide pricing variances across agencies. In 2026, cross-platform mobile frameworks have substantially lowered multi-platform deployment expenses without compromising native performance.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            1. Cross-Platform vs. Dual Native Development
          </h2>
          <p>
            Building separate native Swift (iOS) and Kotlin (Android) codebases doubles both upfront development costs and long-term maintenance overhead. Modern cross-platform frameworks allow engineering high-performance mobile apps for both platforms from a single codebase, cutting overall development costs by 40–50%.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            2. Real-World Mobile Investment Ranges
          </h2>
          <p>
            At Axorks, typical cross-platform mobile app development ranges from <strong className="text-gold">{PRICING.mobileAppDevelopment.formattedRange}</strong> depending on features such as offline data caching, push notification infrastructure, payment gateway triggers, and third-party API connectivity.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            3. Backend Infrastructure & Maintenance Retainers
          </h2>
          <p>
            A mobile app is only as fast as its backend API. Serverless cloud databases (PostgreSQL/Neon) combined with Node.js REST endpoints keep server overhead minimal, with ongoing monthly maintenance retainers ranging from <strong className="text-gold">{PRICING.maintenanceSupport.formattedRange}</strong> for security updates and uptime monitoring.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-gold/35 bg-gradient-to-br from-obsidian-raised via-obsidian to-obsidian p-8 shadow-obsidian-lg">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(201,162,75,0.7), transparent 70%)' }}
          />
          <h3 className="relative font-serif text-xl font-bold text-paper">
            Planning a Mobile Application Build?
          </h3>
          <p className="relative mt-2 text-xs text-steel">
            Inquire for a dedicated mobile app quote or consult directly with Axorks Founder {FOUNDER_NAME}.
          </p>
          <Link
            href="/services/mobile-app-development"
            className="btn btn-gold mt-4 inline-flex items-center gap-2"
          >
            View Mobile App Services & Specs
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
