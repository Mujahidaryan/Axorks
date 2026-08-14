import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'What "Government-Grade" Software Actually Requires | Axorks Blog',
  description:
    'An analysis of mission-critical public sector software requirements: FWO grid telemetry, FAO/WFP international humanitarian protocol compliance, and high-concurrency uptime.',
  openGraph: {
    title: 'What "Government-Grade" Software Actually Requires | Axorks',
    description:
      'Technical analysis of public-sector digital solutions, infrastructure telemetry integrations, and international compliance standards.',
    url: `${SITE_URL}/blog/government-grade-software-requirements`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What "Government-Grade" Software Actually Requires',
    description: 'Technical analysis of public-sector digital solutions and compliance standards.',
  },
  alternates: {
    canonical: `${SITE_URL}/blog/government-grade-software-requirements`,
  },
};

export default function GovernmentGradeArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'What "Government-Grade" Software Actually Requires',
    author: {
      '@type': 'Person',
      name: FOUNDER_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}/logo.png`,
    },
    datePublished: '2026-07-05',
    description:
      'An analysis of mission-critical public sector software requirements: FWO grid telemetry, FAO/WFP international humanitarian protocol compliance, and high-concurrency uptime.',
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
                July 5, 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-gold" />
                8 min read
              </span>
              <span>·</span>
              <span>Author: {FOUNDER_NAME}</span>
            </div>

            <h1 className="font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              What "Government-Grade" Software{' '}
              <span className="gradient-text-gold">Actually Requires</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            The phrase "government-grade software" is often used loosely in marketing, but in systems engineering, it refers to specific compliance, security, data integrity, and high-concurrency availability standards.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            1. Infrastructure Telemetry & Grid Integration
          </h2>
          <p>
            Public sector systems frequently interface with national infrastructure telemetry. For instance, in platforms connected to FWO (Frontier Works Organization) grid telemetry, applications must handle incoming sensor logs continuously without dropping packets during network outages.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            2. International Humanitarian Protocol Compliance
          </h2>
          <p>
            Humanitarian platforms (such as regional food security monitoring systems) must comply with international standards established by organizations like the UN Food and Agriculture Organization (FAO) and the World Food Programme (WFP). This includes automated Integrated Food Security Phase Classification (IPC) modeling and district-level gap analysis.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            3. Immutable Cryptographic Audit Trails
          </h2>
          <p>
            Every state change, data record approval, or emergency alert override must be cryptographically timestamped and logged under strict Role-Based Access Control (RBAC) permissions to guarantee total audit transparency.
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
            Building Mission-Critical Public Sector Systems?
          </h3>
          <p className="relative mt-2 text-xs text-steel">
            Explore dedicated government and enterprise digital solutions at Axorks.
          </p>
          <Link
            href="/services/government-enterprise-solutions"
            className="btn btn-gold mt-4 inline-flex items-center gap-2"
          >
            View Government Solutions
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
