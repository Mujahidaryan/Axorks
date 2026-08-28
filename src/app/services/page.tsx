import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
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
    accent: 'from-indigo-500/0 via-indigo-500/60 to-indigo-500/0',
    hoverText: 'group-hover:text-indigo-950',
    hoverLink: 'group-hover:text-indigo-700',
    hoverBorder: 'hover:border-indigo-200',
  },
  {
    title: 'AI Automation',
    description:
      'We use AI to automate repetitive work, improve decisions, and reduce manual effort.',
    href: '/contact?service=ai-automation',
    accent: 'from-teal-500/0 via-teal-500/60 to-teal-500/0',
    hoverText: 'group-hover:text-teal-950',
    hoverLink: 'group-hover:text-teal-700',
    hoverBorder: 'hover:border-teal-200',
  },
  {
    title: 'Mobile Apps',
    description:
      'We create mobile applications that make your products and services easier to access.',
    href: '/contact?service=mobile-apps',
    accent: 'from-amber-500/0 via-amber-500/60 to-amber-500/0',
    hoverText: 'group-hover:text-amber-950',
    hoverLink: 'group-hover:text-amber-700',
    hoverBorder: 'hover:border-amber-200',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'We keep your software secure, reliable, and improving after launch.',
    href: '/contact?service=support',
    accent: 'from-violet-500/0 via-violet-500/60 to-violet-500/0',
    hoverText: 'group-hover:text-violet-950',
    hoverLink: 'group-hover:text-violet-700',
    hoverBorder: 'hover:border-violet-200',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* ============================================================
          HEADER — CLEAN REFINED LIGHT STAGE
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
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
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* 4 Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${service.hoverBorder}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${service.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div>
                  <h2 className={`text-xl font-semibold text-slate-900 transition-colors ${service.hoverText}`}>
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors ${service.hoverLink}`}
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="mt-8 rounded-[12px] border border-slate-200/90 bg-[#FBFBFA] p-6 sm:p-8 shadow-sm">
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
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
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
                className="group inline-flex items-center gap-2 rounded-[12px] bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg"
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
