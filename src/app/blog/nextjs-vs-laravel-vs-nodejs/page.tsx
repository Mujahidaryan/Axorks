import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Next.js vs. Laravel vs. Node.js: Choosing the Right Stack | Axorks Blog',
  description:
    'An objective architectural breakdown analyzing server-side rendering, API throughput, developer ecosystem, and database compatibility across modern web frameworks.',
  openGraph: {
    title: 'Next.js vs. Laravel vs. Node.js: Choosing the Right Stack | Axorks',
    description:
      'Objective architectural comparison evaluating Next.js, Laravel, and Node.js for modern web applications.',
    url: `${SITE_URL}/blog/nextjs-vs-laravel-vs-nodejs`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js vs. Laravel vs. Node.js: Choosing the Right Stack',
    description: 'Objective architectural comparison evaluating Next.js, Laravel, and Node.js.',
  },
  alternates: {
    canonical: `${SITE_URL}/blog/nextjs-vs-laravel-vs-nodejs`,
  },
};

export default function FrameworkComparisonArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Next.js vs. Laravel vs. Node.js: Choosing the Right Stack for Your Project',
    author: {
      '@type': 'Person',
      name: FOUNDER_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}/logo.png`,
    },
    datePublished: '2026-07-10',
    description:
      'An objective architectural comparison analyzing server-side rendering, API throughput, developer ecosystem, and database compatibility across modern web frameworks.',
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
                July 10, 2026
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
              Next.js vs. Laravel vs. Node.js: Choosing a Stack{' '}
              <span className="gradient-text-gold">for Your Project</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            Selecting the right technology stack dictates your system's long-term speed, scalability, and maintenance costs. Here is how Next.js, Laravel, and Node.js compare for modern web product development.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            1. Next.js (App Router & React)
          </h2>
          <p>
            Next.js combines full-stack server-side rendering (SSR), static site generation (SSG), and React component architecture into a unified framework. It is ideal for high-conversion marketing sites and SaaS applications requiring top-tier SEO performance and sub-second page loads.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            2. Node.js & Express (API Layer)
          </h2>
          <p>
            Node.js provides event-driven, non-blocking I/O execution, making it unmatched for real-time WebSocket connections, high-concurrency microservices, and asynchronous AI data processing pipelines.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            3. Laravel (PHP Framework)
          </h2>
          <p>
            Laravel provides an all-in-one monolithic framework with built-in ORM and admin tooling. While effective for traditional web apps, it lacks native end-to-end TypeScript integration and unified React server rendering.
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
            Need Stack Advice for Your Next Build?
          </h3>
          <p className="relative mt-2 text-xs text-steel">
            Consult directly with Axorks Chief Architect {FOUNDER_NAME}.
          </p>
          <Link
            href="/contact"
            className="btn btn-gold mt-4 inline-flex items-center gap-2"
          >
            Consult With Axorks
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
