import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

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
                July 15, 2026
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-gold" />
                7 min read
              </span>
              <span>·</span>
              <span>Author: {FOUNDER_NAME}</span>
            </div>

            <h1 className="font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              AI Integration for Small and Mid-Sized Businesses:{' '}
              <span className="gradient-text-gold">A Practical Guide</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base leading-relaxed">
            Artificial Intelligence has evolved from experimental research into a core operational utility for small and mid-sized businesses (SMBs). However, many organizations struggle to move past novelty chatbots to capture measurable ROI.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
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

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            2. Managing API Token Costs & Latency
          </h2>
          <p>
            Building production AI features requires robust token rate limiting, prompt optimization, and asynchronous background worker queues (such as Redis or NATS JetStream) to prevent blocking main user threads during model inference.
          </p>

          <h2 className="font-serif text-2xl font-bold text-paper pt-6 mt-6 border-t border-white/10">
            3. Investment Expectations
          </h2>
          <p>
            Practical business AI integrations at Axorks typically range from <strong className="text-gold">{PRICING.aiIntegration.formattedRange}</strong>, delivering up to an 80% reduction in manual data entry workload.
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
            Interested in Automating Your Workflows with AI?
          </h3>
          <p className="relative mt-2 text-xs text-steel">
            Explore dedicated AI integration services or consult directly with Axorks Founder {FOUNDER_NAME}.
          </p>
          <Link
            href="/services/ai-integration"
            className="btn btn-gold mt-4 inline-flex items-center gap-2"
          >
            Explore AI Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
