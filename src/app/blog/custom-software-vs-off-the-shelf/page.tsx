import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Custom Software vs. Off-the-Shelf / WordPress: How to Decide | Axorks Blog',
  description:
    'A factual engineering guide comparing maintenance costs, security risks, scalability limits, and long-term ROI when choosing between custom Next.js software and off-the-shelf platforms.',
  openGraph: {
    title: 'Custom Software vs. Off-the-Shelf / WordPress: How to Decide | Axorks',
    description:
      'Objective analysis evaluating maintenance costs, security risks, and scalability between custom software and off-the-shelf builders.',
    url: `${SITE_URL}/blog/custom-software-vs-off-the-shelf`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software vs. Off-the-Shelf / WordPress: How to Decide',
    description: 'Factual guide comparing custom software vs. off-the-shelf builders.',
  },
  alternates: {
    canonical: `${SITE_URL}/blog/custom-software-vs-off-the-shelf`,
  },
};

export default function CustomVsOffTheShelfArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Custom Software vs. Off-the-Shelf / WordPress: How to Decide',
    author: {
      '@type': 'Person',
      name: FOUNDER_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}/logo.png`,
    },
    datePublished: '2026-07-20',
    description:
      'A factual comparison evaluating maintenance costs, security vulnerabilities, scalability limits, and operational ROI when choosing between custom Next.js software and off-the-shelf platforms.',
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
              July 20, 2026
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              5 min read
            </span>
            <span>·</span>
            <span>Author: {FOUNDER_NAME}</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl leading-tight">
            Custom Software vs. Off-the-Shelf / WordPress: How to Decide
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            When scaling a business or launching a digital product, one of the first architectural decisions is choosing between custom software development (e.g. Next.js, Node.js, serverless PostgreSQL) and off-the-shelf CMS solutions or page builders (e.g. WordPress, Webflow, Shopify).
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            1. Speed vs. Architectural Control
          </h2>
          <p>
            Off-the-shelf page builders allow rapid initial setup for simple brochures. However, as operational complexity grows — such as requiring multi-role permissions, custom database relations, or high-throughput API integrations — pre-packaged templates quickly run into performance bottlenecks and plugin bloat.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            2. Total Cost of Ownership (TCO)
          </h2>
          <p>
            While WordPress or SaaS builders carry low upfront costs, recurring subscription fees, plugin license renewals, security vulnerability patching, and database bloat increase long-term maintenance costs. Custom Next.js applications deployed on serverless infrastructure (like Vercel and Neon) incur minimal operational costs while eliminating plugin vulnerability maintenance.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            3. Decision Framework Summary
          </h2>
          <p>
            If your goal is a simple 3-page brochure with no custom database or role-based user flows, an off-the-shelf tool may suffice. However, if your application requires custom user portals, high conversion performance, AI automation pipelines, or serverless scalability, custom software engineering delivers significantly higher long-term ROI.
          </p>
        </div>

        <div className="mt-12 schematic-bracket border border-gold/40 bg-obsidian-raised p-8">
          <h3 className="font-serif text-xl font-bold text-paper">
            Evaluating a Custom Software Project?
          </h3>
          <p className="mt-2 text-xs text-steel">
            Book a direct technical discovery call with Axorks Founder & Chief Architect {FOUNDER_NAME}.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Schedule Discovery Call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
