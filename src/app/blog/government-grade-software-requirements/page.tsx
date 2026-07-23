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
              July 5, 2026
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              8 min read
            </span>
            <span>·</span>
            <span>Author: {FOUNDER_NAME}</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl leading-tight">
            What "Government-Grade" Software Actually Requires
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            The phrase "government-grade software" is often used loosely in marketing, but in systems engineering, it refers to specific compliance, security, data integrity, and high-concurrency availability standards.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            1. Infrastructure Telemetry & Grid Integration
          </h2>
          <p>
            Public sector systems frequently interface with national infrastructure telemetry. For instance, in platforms connected to FWO (Frontier Works Organization) grid telemetry, applications must handle incoming sensor logs continuously without dropping packets during network outages.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            2. International Humanitarian Protocol Compliance
          </h2>
          <p>
            Humanitarian platforms (such as regional food security monitoring systems) must comply with international standards established by organizations like the UN Food and Agriculture Organization (FAO) and the World Food Programme (WFP). This includes automated Integrated Food Security Phase Classification (IPC) modeling and district-level gap analysis.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            3. Immutable Cryptographic Audit Trails
          </h2>
          <p>
            Every state change, data record approval, or emergency alert override must be cryptographically timestamped and logged under strict Role-Based Access Control (RBAC) permissions to guarantee total audit transparency.
          </p>
        </div>

        <div className="mt-12 schematic-bracket border border-gold/40 bg-obsidian-raised p-8">
          <h3 className="font-serif text-xl font-bold text-paper">
            Building Mission-Critical Public Sector Systems?
          </h3>
          <p className="mt-2 text-xs text-steel">
            Explore dedicated government and enterprise digital solutions at Axorks.
          </p>
          <Link
            href="/services/government-enterprise-solutions"
            className="mt-4 inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            View Government Solutions
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
