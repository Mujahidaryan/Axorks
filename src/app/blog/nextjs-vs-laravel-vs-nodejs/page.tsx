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
              July 10, 2026
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
            Next.js vs. Laravel vs. Node.js: Choosing a Stack for Your Project
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            Selecting the right technology stack dictates your system's long-term speed, scalability, and maintenance costs. Here is how Next.js, Laravel, and Node.js compare for modern web product development.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            1. Next.js (App Router & React)
          </h2>
          <p>
            Next.js combines full-stack server-side rendering (SSR), static site generation (SSG), and React component architecture into a unified framework. It is ideal for high-conversion marketing sites and SaaS applications requiring top-tier SEO performance and sub-second page loads.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            2. Node.js & Express (API Layer)
          </h2>
          <p>
            Node.js provides event-driven, non-blocking I/O execution, making it unmatched for real-time WebSocket connections, high-concurrency microservices, and asynchronous AI data processing pipelines.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            3. Laravel (PHP Framework)
          </h2>
          <p>
            Laravel provides an all-in-one monolithic framework with built-in ORM and admin tooling. While effective for traditional web apps, it lacks native end-to-end TypeScript integration and unified React server rendering.
          </p>
        </div>

        <div className="mt-12 schematic-bracket border border-gold/40 bg-obsidian-raised p-8">
          <h3 className="font-serif text-xl font-bold text-paper">
            Need Stack Advice for Your Next Build?
          </h3>
          <p className="mt-2 text-xs text-steel">
            Consult directly with Axorks Chief Architect {FOUNDER_NAME}.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Consult With Axorks
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
