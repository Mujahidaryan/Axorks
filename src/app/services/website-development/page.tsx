import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, Layout, CheckCircle2, HelpCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Custom Website Development Services | Axorks Software Studio',
  description:
    'High-performance marketing and corporate website development built with Next.js App Router, TypeScript, and serverless infrastructure for maximum conversions.',
  openGraph: {
    title: 'Custom Website Development Services | Axorks',
    description:
      'High-performance corporate websites built with Next.js, TypeScript, and serverless technology for maximum conversion.',
    url: `${SITE_URL}/services/website-development`,
    siteName: 'Axorks',
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Website Development Services | Axorks',
    description: 'High-performance corporate websites built with Next.js and TypeScript.',
  },
  alternates: {
    canonical: `${SITE_URL}/services/website-development`,
  },
};

export default function WebsiteDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'Axorks',
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    description:
      'Custom corporate and business website development built with Next.js App Router, TypeScript, and serverless databases for speed and lead generation.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why does Axorks use Next.js instead of WordPress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Next.js delivers sub-second page loads, zero plugin security vulnerabilities, superior SEO crawlability, and total design customization without heavy page builder overhead.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a custom website development project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical corporate website builds are completed and deployed within 2 to 4 weeks from initial discovery and content alignment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the typical investment for a custom website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical investment ranges from PKR 70,000 to PKR 180,000+ depending on page depth, custom micro-animations, and third-party API integrations.',
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
            <Layout className="h-3.5 w-3.5" />
            <span>CORE_SERVICE_01</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Custom Website Development
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-steel">
            <span>Typical Investment: <strong className="text-gold font-bold">PKR 70,000 to PKR 180,000+</strong></span>
            <span>·</span>
            <span>Delivery SLA: <strong className="text-paper">2 – 4 Weeks</strong></span>
          </div>
        </div>

        {/* Rich Factual Prose */}
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <p className="text-paper/95 text-base">
            Axorks engineers high-performance corporate and business websites built with Next.js App Router, TypeScript, and serverless cloud infrastructure. Designed specifically for technical founders, high-ticket agency owners, and growing enterprises, our websites replace slow, bloated WordPress themes with clean, security-hardened code.
          </p>

          <p>
            Every website we ship is optimized for conversion performance, converting cold referral, Upwork, or WhatsApp traffic into qualified consultation bookings. By leveraging server-side rendering (SSR), responsive mobile-first Tailwind layouts, and custom micro-animations, we deliver sub-second page loading speeds that boost search engine indexing and lower bounce rates.
          </p>

          <p>
            Our website development engagement includes full SEO schema setup, analytics integration, custom contact API routes, security hardening, and complete source code repository handoff.
          </p>
        </div>

        {/* Deliverables List */}
        <div className="mt-10 schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-paper mb-4">
            What's Included in Website Development
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs text-steel">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Next.js 14 App Router & TypeScript Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Mobile-First Responsive Tailwind Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Serverless Contact API & Email Notification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Technical SEO & JSON-LD Structured Data</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Custom Domain & Vercel SSL Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
              <span>Full GitHub Repository Ownership</span>
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
                Why does Axorks use Next.js instead of WordPress?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Next.js delivers sub-second page loads, zero plugin security vulnerabilities, superior SEO crawlability, and total design customization without heavy page builder overhead.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                How long does a custom website development project take?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Typical corporate website builds are completed and deployed within 2 to 4 weeks from initial discovery and content alignment.
              </p>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5">
              <h3 className="font-serif text-base font-bold text-paper">
                What is the typical investment for a custom website?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Typical investment ranges from PKR 70,000 to PKR 180,000+ depending on page depth, custom micro-animations, and third-party API integrations.
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
            href="/contact?service=Website%20Development"
            className="inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Inquire for Website Development
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
