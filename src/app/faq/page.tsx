import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, HelpCircle } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';
import { PRICING } from '@/lib/pricing';
import Breadcrumbs from '@/components/Breadcrumbs';

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
    canonical: '/faq',
  },
};

export default function FaqPage() {
  const faqs = [
    {
      q: 'What is Axorks and what services does it provide?',
      a: 'Axorks is an independent software engineering studio serving clients across the UK, Europe, GCC, North America, and worldwide. We specialize in custom web application development, corporate website engineering, cross-platform mobile app development, AI integration & automation, enterprise digital solutions, and monthly technical maintenance retainers.',
    },
    {
      q: 'Who is the founder of Axorks and what are their credentials?',
      a: 'Axorks was founded by a Full-Stack Software Engineer (BS Software Engineering, Bahria University) and Computer Science Educator with 4+ years of experience across CAIE O/A-Levels instruction and shipped production systems. Our founder is recognized as a Microsoft Innovative Educator Expert (MIEE 2025).',
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
    <div className="pb-12 sm:pb-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[28rem] w-[28rem] opacity-50" />
          <div className="exec-mesh mesh-teal-dark absolute -right-24 bottom-0 h-[22rem] w-[22rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[32rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <HelpCircle className="h-4 w-4 text-gold" />
              <span>KNOWLEDGE_BASE_&_FACTUAL_QA</span>
            </div>
            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Frequently Asked{' '}
              <span className="gradient-text-gold">Questions</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel sm:text-base">
              Direct, factual answers regarding our studio architecture, technical standards, founder credentials, and investment ranges.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 space-y-5">
          {faqs.map((faq, idx) => (
            <article
              key={idx}
              className="glass-card-dark relative overflow-hidden rounded-2xl p-6 sm:p-7 transition-all duration-400 hover:-translate-y-0.5 hover:border-gold/25"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <h2 className="font-serif text-lg sm:text-xl font-bold text-paper flex items-start gap-3">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 font-mono text-[11px] font-bold text-gold">
                  {idx + 1}
                </span>
                <span>{faq.q}</span>
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm pl-10">
                {faq.a}
              </p>
            </article>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-gold/35 bg-gradient-to-br from-obsidian-raised via-obsidian to-obsidian p-8 text-center shadow-obsidian-lg">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(201,162,75,0.7), transparent 70%)' }}
          />
          <h3 className="relative font-serif text-xl font-bold text-paper">
            Have a specific technical question?
          </h3>
          <p className="relative mt-2 text-xs text-steel">
            Book a direct technical discovery call with our engineering team.
          </p>
          <Link
            href="/contact"
            className="btn btn-gold mt-6 inline-flex items-center gap-2"
          >
            Book Discovery Call
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
