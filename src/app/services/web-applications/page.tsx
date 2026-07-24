import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Code, CheckCircle2, HelpCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Custom Web Application Development | Axorks Software Studio',
  description:
    'High-throughput full-stack web applications, dashboards, client portals, CRMs, and operational management systems built with Next.js and PostgreSQL.',
  openGraph: {
    title: 'Custom Web Application Development | Axorks',
    description:
      'Full-stack web applications, dashboards, portals, and CRMs built with Next.js, TypeScript, and serverless Postgres.',
    url: `${SITE_URL}/services/web-applications`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Application Development | Axorks',
    description: 'Full-stack web applications, dashboards, and CRMs built with Next.js and PostgreSQL.',
  },
  alternates: {
    canonical: `${SITE_URL}/services/web-applications`,
  },
};

export default function WebApplicationsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Applications & Custom Systems',
    serviceType: 'Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    description:
      'Custom full-stack web applications, dashboards, client portals, and operational management software built with Next.js, Node.js, and serverless PostgreSQL.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What tech stack does Axorks use for custom web applications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build with Next.js App Router, TypeScript, Node.js REST APIs, serverless PostgreSQL (Neon), Prisma ORM, and Tailwind CSS.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you migrate legacy spreadsheet workflows into a web portal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in replacing messy Excel/Google Sheet operational workflows with secure, relational web dashboards and role-based access control (RBAC).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical investment for a custom web application?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Typical investment ranges from ${PRICING.webApplications.formattedRange} depending on database complexity, user role count, and third-party API integrations.`,
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
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-mono text-xs text-steel transition-colors hover:text-paper"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to All Services
        </Link>

        <div className="mt-6 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <Code className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_02</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Web Applications & Custom Systems
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Typical Investment: <strong className="text-gold font-bold">{PRICING.webApplications.formattedRange}</strong></span>
            <span>·</span>
            <span>Delivery SLA: <strong className="text-paper">4 – 8 Weeks</strong></span>
          </div>
        </div>

        {/* Rich Factual Prose */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks architects full-stack web applications, internal operational dashboards, client portals, CRMs, and custom business software tailored to complex workflow demands. Engineered with Next.js App Router, TypeScript, Node.js, and serverless PostgreSQL, our systems replace fragmented manual tools with secure, high-throughput software.
          </p>

          <p>
            Whether your business requires role-based authorization (RBAC), multi-tenant data isolation, real-time data sync, or automated invoice generation, we deliver clean data architectures designed for scale. Every application is built with strict type safety and structured API error handling.
          </p>

          <p>
            Our web application development workflow includes database schema modeling, API endpoint construction, front-end dashboard implementation, security audits, and full CI/CD deployment setup.
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mt-10 schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-paper mb-4">
            What's Included in Web Application Engineering
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-steel">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Full-Stack Next.js App Router & Node.js Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Serverless PostgreSQL Database (Neon) & Prisma ORM</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Role-Based Access Control (RBAC) & NextAuth/JWT</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>REST API Endpoints & Third-Party Webhooks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Real-Time Data Visualization & CSV/PDF Export</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Complete Source Code Handoff & Technical Docs</span>
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
                What tech stack does Axorks use for custom web applications?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                We build with Next.js App Router, TypeScript, Node.js REST APIs, serverless PostgreSQL (Neon), Prisma ORM, and Tailwind CSS.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                Can you migrate legacy spreadsheet workflows into a web portal?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Yes. We specialize in replacing messy Excel/Google Sheet operational workflows with secure, relational web dashboards and role-based access control (RBAC).
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                What is the typical investment for a custom web application?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Typical investment ranges from {PRICING.webApplications.formattedRange} depending on database complexity, user role count, and third-party API integrations.
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
            href="/contact?service=Web%20Applications%20%26%20Custom%20Systems"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Inquire for Web Applications
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
