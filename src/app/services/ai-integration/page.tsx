import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ArrowUpRight, ArrowLeft, Bot, CheckCircle2, HelpCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'AI Integrated Dashboards & Automation Services in Karachi | Axorks',
  description:
    'Practical AI integrated dashboards and automation services in Karachi & Islamabad. Integrating OpenAI APIs, automated document processing, vector search, and predictive models into production software.',
  keywords: [
    'AI integrated dashboards',
    'AI automation Karachi',
    'OpenAI API integration',
    'predictive AI dashboards',
    'AI document processing',
    'custom AI solutions Pakistan',
    'Axorks AI integrated dashboards',
  ],
  openGraph: {
    title: 'AI Integrated Dashboards & Automation Services in Karachi | Axorks',
    description:
      'Practical AI integrated dashboards connecting OpenAI APIs, document processing pipelines, and predictive statistical models by Axorks Software House.',
    url: `${SITE_URL}/services/ai-integration`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Integrated Dashboards & Automation Services | Axorks',
    description: 'Practical AI integrated dashboards and automated document processing pipelines.',
  },
  alternates: {
    canonical: `${SITE_URL}/services/ai-integration`,
  },
};

export default function AiIntegrationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Integrated Dashboards & Automation',
    serviceType: 'AI Engineering & Dashboard Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Axorks Software House',
      url: SITE_URL,
    },
    areaServed: ['Karachi', 'Islamabad', 'Pakistan', 'Worldwide'],
    description:
      'Practical AI integrated dashboards including OpenAI API connections, automated document parsing pipelines, vector embeddings, and predictive analytics for business software.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What kind of AI integrated dashboards does Axorks build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build OpenAI API text generation pipelines, AI integrated dashboards, automated PDF/invoice parsing, intelligent search using vector embeddings, automated customer support agents, and predictive statistical models.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do AI integrated dashboards reduce operational costs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By automating repetitive document extraction and data entry tasks into live dashboards, AI pipelines reduce manual operational workload by up to 80% while improving response accuracy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical investment for AI integrated dashboards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Typical investment ranges from ${PRICING.aiIntegration.formattedRange} depending on model complexity, API rate limiting setup, and data pipeline requirements.`,
        },
      },
    ],
  };

  return (
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: 'AI Integrated Dashboards' },
          ]}
        />

        <div className="mt-4 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Bot className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_04</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            AI Integrated Dashboards & Automation Solutions
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Typical Investment: <strong className="text-gold font-bold">{PRICING.aiIntegration.formattedRange}</strong></span>
            <span>·</span>
            <span>Delivery SLA: <strong className="text-paper">2 – 5 Weeks</strong></span>
          </div>
        </div>

        {/* Rich Factual Prose */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks Software House delivers practical, production-ready AI integrated dashboards that connect OpenAI APIs, automated document parsing pipelines, vector search embeddings, and predictive statistical models directly into your custom web and mobile software.
          </p>

          <p>
            Rather than building novelty chatbots, we focus on high-ROI business automations: building AI integrated dashboards to extract structured data from unstructured PDF invoices, automating customer communication triage, speeding up database search with semantic vector embeddings, and running predictive trend analytics. Our AI integrations have proven to reduce operational workload by up to 80%.
          </p>

          <p>
            Our AI engineering process includes prompt tuning, fallback error handling, rate limiting architecture, token cost optimization, and secure API key isolation.
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mt-10 schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-paper mb-4">
            What's Included in AI Integrated Dashboards
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-steel">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>OpenAI GPT-4o & Claude API Pipeline Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Automated Document (PDF/Image) Parsing Pipelines</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Vector Database Embeddings for Intelligent Search</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Token Usage Optimization & Cost Management</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Asynchronous Processing & Webhook Callbacks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Full Source Code Ownership & Security Audit</span>
            </div>
          </div>
        </div>

        {/* Service FAQ Block */}
        <div className="mt-12 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-paper flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-gold" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                What kind of AI integrated dashboards does Axorks build?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                We build OpenAI API text generation pipelines, AI integrated dashboards, automated PDF/invoice parsing, intelligent search using vector embeddings, automated customer support agents, and predictive statistical models.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                How do AI integrated dashboards reduce operational costs?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                By automating repetitive document extraction and data entry tasks into live dashboards, AI pipelines reduce manual operational workload by up to 80% while improving response accuracy.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                What is the typical investment for AI integrated dashboards?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Typical investment ranges from {PRICING.aiIntegration.formattedRange} depending on model complexity, API rate limiting setup, and data pipeline requirements.
              </p>
            </div>
          </div>
        </div>

        {/* CTA & Internal Navigation Links */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-obsidian-border pt-8 sm:flex-row">
          <div className="flex items-center gap-4 text-xs font-mono text-steel">
            <Link href="/case-studies" className="hover:text-paper transition-colors">
              Explore Case Studies →
            </Link>
            <span>·</span>
            <Link href="/process" className="hover:text-paper transition-colors">
              View Our Process →
            </Link>
          </div>

          <Link
            href="/contact?service=AI%20Integration%20%26%20Automation"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Inquire for AI Integrated Dashboards
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
