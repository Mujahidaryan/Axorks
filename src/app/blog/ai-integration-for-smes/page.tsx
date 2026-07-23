import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'AI Integration for Small & Mid-Sized Businesses: Practical Guide | Axorks Blog',
  description:
    'How growing businesses can integrate OpenAI APIs, automated document parsing pipelines, and vector embeddings into production software without over-engineering.',
  openGraph: {
    title: 'AI Integration for Small & Mid-Sized Businesses: Practical Guide | Axorks',
    description:
      'Practical guide on integrating OpenAI APIs, document parsing, and predictive analytics into business software.',
    url: `${SITE_URL}/blog/ai-integration-for-smes`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Integration for Small & Mid-Sized Businesses: Practical Guide',
    description: 'Practical guide on integrating OpenAI APIs and AI pipelines into business software.',
  },
  alternates: {
    canonical: `${SITE_URL}/blog/ai-integration-for-smes`,
  },
};

export default function AiIntegrationForSmesArticle() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'AI Integration for Small & Mid-Sized Businesses: Practical Guide',
    author: {
      '@type': 'Person',
      name: FOUNDER_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: `${SITE_URL}/logo.png`,
    },
    datePublished: '2026-07-15',
    description:
      'How growing businesses can integrate OpenAI APIs, automated document parsing pipelines, and vector embeddings into production software without over-engineering.',
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
              July 15, 2026
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              7 min read
            </span>
            <span>·</span>
            <span>Author: {FOUNDER_NAME}</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl leading-tight">
            AI Integration for Small and Mid-Sized Businesses: A Practical Guide
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            Artificial Intelligence has evolved from experimental research into a core operational utility for small and mid-sized businesses (SMBs). However, many organizations struggle to move past novelty chatbots to capture measurable ROI.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            1. High-ROI Business AI Use Cases
          </h2>
          <p>
            The highest-ROI AI implementations target repetitive manual data operations:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-steel">
            <li><strong>Automated PDF & Invoice Parsing:</strong> Extracting structured JSON data from incoming invoices and contracts directly into your database.</li>
            <li><strong>Intelligent Semantic Search:</strong> Using vector embeddings to query internal documentation and customer records using natural language.</li>
            <li><strong>Automated Inquiry Triage:</strong> Categorizing and routing incoming customer requests automatically.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            2. Managing API Token Costs & Latency
          </h2>
          <p>
            Building production AI features requires robust token rate limiting, prompt optimization, and asynchronous background worker queues (such as Redis or NATS JetStream) to prevent blocking main user threads during model inference.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-4">
            3. Investment Expectations
          </h2>
          <p>
            Practical business AI integrations at Axorks typically range from <strong className="text-gold">PKR 120,000 to PKR 800,000+</strong>, delivering up to an 80% reduction in manual data entry workload.
          </p>
        </div>

        <div className="mt-12 schematic-bracket border border-gold/40 bg-obsidian-raised p-8">
          <h3 className="font-serif text-xl font-bold text-paper">
            Interested in Automating Your Workflows with AI?
          </h3>
          <p className="mt-2 text-xs text-steel">
            Explore dedicated AI integration services or consult directly with Axorks Founder {FOUNDER_NAME}.
          </p>
          <Link
            href="/services/ai-integration"
            className="mt-4 inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Explore AI Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
