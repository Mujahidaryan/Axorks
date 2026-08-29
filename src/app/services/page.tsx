import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Layers, Cpu, Smartphone, ShieldCheck } from 'lucide-react';
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
    accentColor: 'via-indigo-500',
    cardBg: 'from-white via-[#F8FAFC] to-[#F1F5F9]',
    hoverBorder: 'hover:border-indigo-300',
    hoverShadow: 'hover:shadow-[0_20px_40px_-12px_rgba(79,70,229,0.12),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    icon: <Layers className="h-5 w-5" />,
    iconBox: 'bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200/70',
    hoverText: 'group-hover:text-indigo-600',
  },
  {
    title: 'AI Automation',
    description:
      'We use AI to automate repetitive work, improve decisions, and reduce manual effort.',
    href: '/contact?service=ai-automation',
    accentColor: 'via-teal-500',
    cardBg: 'from-white via-[#F0FDF4]/30 to-[#F1F5F9]',
    hoverBorder: 'hover:border-teal-300',
    hoverShadow: 'hover:shadow-[0_20px_40px_-12px_rgba(13,148,136,0.12),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    icon: <Cpu className="h-5 w-5" />,
    iconBox: 'bg-teal-50 text-[#0D9488] ring-1 ring-teal-200/70',
    hoverText: 'group-hover:text-[#0D9488]',
  },
  {
    title: 'Mobile Apps',
    description:
      'We create mobile applications that make your products and services easier to access.',
    href: '/contact?service=mobile-apps',
    accentColor: 'via-[#C9A24B]',
    cardBg: 'from-white via-[#FEF3C7]/20 to-[#F1F5F9]',
    hoverBorder: 'hover:border-amber-300',
    hoverShadow: 'hover:shadow-[0_20px_40px_-12px_rgba(201,162,75,0.14),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    icon: <Smartphone className="h-5 w-5" />,
    iconBox: 'bg-amber-50 text-[#B88E2F] ring-1 ring-amber-200/70',
    hoverText: 'group-hover:text-[#C9A24B]',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'We keep your software secure, reliable, and improving after launch.',
    href: '/contact?service=support',
    accentColor: 'via-emerald-500',
    cardBg: 'from-white via-[#ECFDF5]/30 to-[#F1F5F9]',
    hoverBorder: 'hover:border-emerald-300',
    hoverShadow: 'hover:shadow-[0_20px_40px_-12px_rgba(16,185,129,0.12),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    icon: <ShieldCheck className="h-5 w-5" />,
    iconBox: 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200/70',
    hoverText: 'group-hover:text-emerald-600',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* ============================================================
          HEADER — SOFT IVORY
      ============================================================ */}
      <section className="relative border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
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
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* 4 Services Grid */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[12px] border border-slate-200/90 bg-gradient-to-b ${service.cardBg} p-8 sm:p-9 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.04),0_1px_3px_0_rgba(15,23,42,0.02)] transition-all duration-300 hover:-translate-y-1.5 ${service.hoverBorder} ${service.hoverShadow}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent ${service.accentColor} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div>
                  <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[10px] ${service.iconBox}`}>
                    {service.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-slate-950">
                    {service.title}
                  </h2>
                  <p className="mt-3.5 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 pt-5 border-t border-slate-200/70">
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors ${service.hoverText}`}
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="mt-10 rounded-[12px] border border-slate-200/85 bg-white p-8 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-base leading-relaxed text-slate-700">
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-[#C9A24B] shrink-0 transition-colors"
            >
              <span>Request proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          BOTTOM CTA — DEEP CONTRAST STAGE
      ============================================================ */}
      <section className="relative border-t border-white/[0.08] bg-gradient-to-b from-[#07080C] via-[#0A0C12] to-[#0D0F14] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
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
                className="group inline-flex items-center gap-2.5 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_4px_24px_rgba(201,162,75,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,162,75,0.48)] hover:brightness-105"
              >
                <span>Book a free discovery call</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
