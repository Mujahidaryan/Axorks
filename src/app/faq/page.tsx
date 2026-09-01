import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, HelpCircle, ChevronRight } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Axorks',
  description:
    'Factual answers about custom software development, AI automation, pricing, engagement models, and working with Axorks.',
  openGraph: {
    title: 'Frequently Asked Questions | Axorks',
    description:
      'Clear answers about our software engineering services, fixed-price proposals, and working with our in-house team.',
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Axorks',
    description: 'Factual answers about custom software development, AI automation, and fixed-price proposals.',
  },
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  const faqs = [
    {
      q: 'What is Axorks and what services do you provide?',
      a: 'Axorks is an independent software engineering company. We build custom web applications, automate repetitive business workflows with AI, develop cross-platform mobile apps, and provide ongoing software maintenance and support for growing businesses worldwide.',
      tag: 'Overview',
    },
    {
      q: 'How does your fixed-price proposal process work?',
      a: 'Every project begins with a free discovery call. We review your requirements and provide a clear fixed-price proposal with defined deliverables and milestones within 48 hours. You know the exact cost before development starts — no hidden fees or scope surprises.',
      tag: 'Pricing & Scope',
    },
    {
      q: 'What technologies and frameworks do you use?',
      a: 'We specialize in modern, reliable tech stacks: Next.js App Router, TypeScript, React, Node.js, Python (FastAPI), serverless PostgreSQL, Prisma ORM, Tailwind CSS, and OpenAI API integrations.',
      tag: 'Technology',
    },
    {
      q: 'How long does a typical software project take?',
      a: 'Most single-purpose web tools and internal portals take ~2–3 weeks. Full custom web platforms and mobile applications take ~4–8 weeks depending on database complexity and third-party integrations.',
      tag: 'Timeline',
    },
    {
      q: 'How do you structure payments?',
      a: 'Payment is structured around clear project milestones. You only pay for progress you can inspect, test, and approve on staging before production deployment.',
      tag: 'Commercial',
    },
    {
      q: 'How do you handle time zone differences for international clients?',
      a: 'We overlap directly with UK, US, and EU business hours for meetings, real-time updates, and sprint reviews. Every client message receives a response within 24 hours.',
      tag: 'Communication',
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
    <div className="bg-[#FAF9F6]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>

      {/* ============================================================
          HEADER — SOFT IVORY
      ============================================================ */}
      <section className="relative border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200/70 mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Knowledge Base &amp; FAQ</span>
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Clear, direct answers regarding our services, fixed-price proposals, technology stack, and development process.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ ACCORDION / CARDS
      ============================================================ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <article
                key={idx}
                className="group rounded-[12px] border border-slate-200/85 bg-white p-7 sm:p-8 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#FAF9F6] border border-slate-200 font-mono text-xs font-bold text-slate-700">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded ring-1 ring-indigo-200/60 mb-2">
                        {faq.tag}
                      </span>
                      <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                        {faq.q}
                      </h2>
                    </div>
                  </div>
                </div>
                <p className="mt-4 pl-12 text-base leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </article>
            ))}
          </div>

          {/* Quick Contact Prompt */}
          <div className="mt-12 rounded-[12px] border border-amber-200/80 bg-gradient-to-r from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Have a specific question about your project?
              </h3>
              <p className="mt-1 text-sm text-slate-700">
                Talk directly with our engineers. We respond within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9E7E32] hover:text-amber-950 shrink-0 transition-colors"
            >
              <span>Book discovery call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0D0F14] text-white">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to discuss your software requirements?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
            Book a free discovery call. We&apos;ll assess your technical requirements and provide an honest proposal.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_24px_rgba(201,162,75,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,162,75,0.48)] hover:brightness-105"
            >
              <span>Book a free discovery call</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
