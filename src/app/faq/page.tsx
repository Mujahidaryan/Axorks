import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, HelpCircle } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Axorks Software Studio',
  description:
    'Factual Q&A detailing Axorks services, founder background, tech stacks, investment ranges, project timelines, and development guarantees.',
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Axorks',
    description:
      'Clear, factual Q&A covering Axorks capabilities, founder background, investment ranges, and technical workflows.',
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions (FAQ) | Axorks',
    description: 'Factual Q&A covering Axorks capabilities, pricing ranges, and technical workflows.',
  },
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

export default function FaqPage() {
  const faqs = [
    {
      q: 'What is Axorks and what services does it provide?',
      a: 'Axorks is a founder-led software studio founded by Muhammad Mujahid in Karachi, Pakistan. We specialize in custom web application development, corporate website engineering, cross-platform mobile app development, AI integration & automation, government/enterprise digital solutions, and monthly technical maintenance retainers.',
    },
    {
      q: 'Who is the founder of Axorks and what are their credentials?',
      a: 'Axorks was founded by Muhammad Mujahid, a Full-Stack Software Engineer (BS Software Engineering, Bahria University) and Computer Science Educator with 4+ years of experience across CAIE O/A-Levels instruction and shipped production systems. He is recognized as a Microsoft Innovative Educator Expert (MIEE 2025).',
    },
    {
      q: 'What technologies and frameworks does Axorks use?',
      a: 'We build with Next.js App Router, TypeScript, React, Node.js, Python (FastAPI), serverless PostgreSQL (Neon), Prisma ORM, Tailwind CSS, OpenAI API, and Docker.',
    },
    {
      q: 'How much does a custom web application or website cost at Axorks?',
      a: `Axorks operates on transparent static investment ranges: Custom Websites range from ${PRICING.websiteDevelopment.formattedRange}; Custom Web Applications range from ${PRICING.webApplications.formattedRange}; Mobile Applications range from ${PRICING.mobileAppDevelopment.formattedRange}; AI Integrations range from ${PRICING.aiIntegration.formattedRange}; Government/Enterprise solutions are custom quoted; Maintenance Retainers range from ${PRICING.maintenanceSupport.formattedRange}.`,
    },
    {
      q: 'What experience does Axorks have with government and public-sector software?',
      a: 'Our engineering leadership has architected public-sector systems including AgroTrace (connected to FWO grid telemetry) and the Sindh Food Security Dashboard (aligned with international FAO/WFP humanitarian standards).',
    },
    {
      q: 'How long does a typical software development project take?',
      a: 'Corporate websites typically take 2–4 weeks. Custom web applications and cross-platform mobile apps typically take 4–8 weeks depending on database complexity and API integrations.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>KNOWLEDGE_BASE_&_FACTUAL_QA</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Direct, factual answers regarding our studio architecture, technical standards, founder credentials, and investment ranges.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8"
            >
              <h2 className="font-serif text-lg sm:text-xl font-bold text-paper flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-gold mt-1 shrink-0">
                  Q{idx + 1}.
                </span>
                <span>{faq.q}</span>
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 schematic-bracket border border-gold/40 bg-obsidian-raised p-8 text-center">
          <h3 className="font-serif text-xl font-bold text-paper">
            Have a specific technical question?
          </h3>
          <p className="mt-2 text-xs text-steel">
            Book a direct technical discovery call with Founder & Chief Architect {FOUNDER_NAME}.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
          >
            Book Discovery Call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
