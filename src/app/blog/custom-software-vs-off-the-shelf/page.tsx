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
                July 20, 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-gold" />
                5 min read
              </span>
              <span>·</span>
              <span>Author: {FOUNDER_NAME}</span>
            </div>

            <h1 className="font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Custom Software vs. Off-the-Shelf / WordPress:{' '}
              <span className="gradient-text-gold">How to Decide</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            When scaling a business or launching a digital product, one of the first architectural decisions is choosing between custom software development (e.g. Next.js, Node.js, serverless PostgreSQL) and off-the-shelf CMS solutions or page builders (e.g. WordPress, Webflow, Shopify).
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            1. Speed vs. Architectural Control
          </h2>
          <p>
            Off-the-shelf page builders allow rapid initial setup for simple brochures. However, as operational complexity grows — such as requiring multi-role permissions, custom database relations, or high-throughput API integrations — pre-packaged templates quickly run into performance bottlenecks and plugin bloat.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            2. Total Cost of Ownership (TCO)
          </h2>
          <p>
            While WordPress or SaaS builders carry low upfront costs, recurring subscription fees, plugin license renewals, security vulnerability patching, and database bloat increase long-term maintenance costs. Custom Next.js applications deployed on serverless infrastructure (like Vercel and Neon) incur minimal operational costs while eliminating plugin vulnerability maintenance.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            3. Decision Framework Summary
          </h2>
          <p>
            If your goal is a simple 3-page brochure with no custom database or role-based user flows, an off-the-shelf tool may suffice. However, if your application requires custom user portals, high conversion performance, AI automation pipelines, or serverless scalability, custom software engineering delivers significantly higher long-term ROI.
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
            Evaluating a Custom Software Project?
          </h3>
          <p className="relative mt-2 text-xs text-steel">
            Book a free technical discovery call with Axorks Chief Systems Architect {FOUNDER_NAME}.
          </p>
          <Link
            href="/contact"
            className="btn btn-gold mt-4 inline-flex items-center gap-2"
          >
            Schedule Discovery Call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
