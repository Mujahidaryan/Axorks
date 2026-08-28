import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Services | Axorks',
  description:
    'Custom web applications, AI automation, mobile apps, and ongoing software support. Projects start from $600 with fixed-price proposals.',
  openGraph: {
    title: 'Services | Axorks',
    description:
      'We build tailored web applications, AI automation, mobile apps, and ongoing software support. Projects start from $600.',
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Axorks',
    description:
      'Custom web applications, AI automation, mobile apps, and ongoing software support.',
  },
  alternates: {
    canonical: '/services',
  },
};

const services = [
  {
    title: 'Custom Web Applications',
    description:
      'We build tailored web applications around how your business actually works.',
    href: '/contact?service=web-applications',
    accentColor: 'via-[#C9A24B]/50',
    hoverText: 'group-hover:text-[#C9A24B]',
  },
  {
    title: 'AI Automation',
    description:
      'We use AI to automate repetitive work, improve decisions, and reduce manual effort.',
    href: '/contact?service=ai-automation',
    accentColor: 'via-[#0D9488]/50',
    hoverText: 'group-hover:text-[#0D9488]',
  },
  {
    title: 'Mobile Apps',
    description:
      'We create mobile applications that make your products and services easier to access.',
    href: '/contact?service=mobile-apps',
    accentColor: 'via-[#C9A24B]/50',
    hoverText: 'group-hover:text-[#C9A24B]',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'We keep your software secure, reliable, and improving after launch.',
    href: '/contact?service=support',
    accentColor: 'via-[#0D9488]/50',
    hoverText: 'group-hover:text-[#0D9488]',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ============================================================
          HEADER — SOFT IVORY
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              What we build
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We focus on building software that solves real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES & PRICING BANNER
      ============================================================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* 4 Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-slate-200/85 bg-white p-8 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_24px_-6px_rgba(15,23,42,0.08)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent ${service.accentColor} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors ${service.hoverText}`}
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="mt-10 rounded-[12px] border border-slate-200/85 bg-white p-8 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]">
            <p className="text-base leading-relaxed text-slate-700">
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="border-t border-white/[0.08] bg-[#0B0C10] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to build your next project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Let&apos;s talk through what you need and provide a clear, fixed-price proposal.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-[12px] bg-[#C9A24B] px-7 py-4 text-base font-semibold text-slate-950 shadow-md shadow-[#C9A24B]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-[#C9A24B]/25"
              >
                <span>Book a free discovery call</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
