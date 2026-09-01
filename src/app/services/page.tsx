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
    id: 'web-applications',
    title: 'Custom Web Applications',
    description:
      'We build tailored web applications around how your business actually works.',
    deliverables: ['Client Portals', 'Internal Dashboards', 'SaaS Platforms'],
    href: '/contact?service=web-applications',
    accentColor: 'via-indigo-500',
    cardBg: 'from-[#EEF2FF] via-[#E0E7FF] to-[#D5DEFF] hover:from-[#E0E7FF] hover:via-[#D5DEFF] hover:to-[#C7D2FE]',
    borderColor: 'border-indigo-200/90 hover:border-indigo-400/80',
    titleColor: 'text-indigo-950',
    shadowStyle: 'shadow-[0_4px_18px_-4px_rgba(79,70,229,0.1),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(79,70,229,0.22),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    dividerColor: 'border-indigo-200/90',
    icon: <Layers className="h-5 w-5" />,
    iconBox: 'bg-white text-indigo-600 ring-1 ring-indigo-200/90 shadow-xs',
    tagStyle: 'bg-white/80 text-indigo-900 ring-indigo-200/70',
    linkColor: 'text-indigo-700 hover:text-indigo-950',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description:
      'We use AI to automate repetitive work, improve decisions, and reduce manual effort.',
    deliverables: ['Document AI Pipelines', 'Automated Workflows', 'Decision Engines'],
    href: '/contact?service=ai-automation',
    accentColor: 'via-teal-500',
    cardBg: 'from-[#E6FAF4] via-[#CCFBF1] to-[#B6F5E8] hover:from-[#CCFBF1] hover:via-[#B6F5E8] hover:to-[#99F6E4]',
    borderColor: 'border-teal-200/90 hover:border-teal-400/80',
    titleColor: 'text-teal-950',
    shadowStyle: 'shadow-[0_4px_18px_-4px_rgba(13,148,136,0.1),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(13,148,136,0.22),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    dividerColor: 'border-teal-200/90',
    icon: <Cpu className="h-5 w-5" />,
    iconBox: 'bg-white text-[#0D9488] ring-1 ring-teal-200/90 shadow-xs',
    tagStyle: 'bg-white/80 text-teal-900 ring-teal-200/70',
    linkColor: 'text-teal-800 hover:text-teal-950',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description:
      'We create mobile applications that make your products and services easier to access.',
    deliverables: ['iOS & Android Apps', 'Offline Data Sync', 'Customer Experience'],
    href: '/contact?service=mobile-apps',
    accentColor: 'via-[#C9A24B]',
    cardBg: 'from-[#FEF3C7] via-[#FDE68A]/80 to-[#FCD34D]/60 hover:from-[#FDE68A] hover:via-[#FCD34D]/80 hover:to-[#FBBF24]/60',
    borderColor: 'border-amber-200/90 hover:border-amber-400/80',
    titleColor: 'text-amber-950',
    shadowStyle: 'shadow-[0_4px_18px_-4px_rgba(201,162,75,0.12),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(201,162,75,0.26),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    dividerColor: 'border-amber-200/90',
    icon: <Smartphone className="h-5 w-5" />,
    iconBox: 'bg-white text-[#B88E2F] ring-1 ring-amber-200/90 shadow-xs',
    tagStyle: 'bg-white/80 text-amber-900 ring-amber-200/70',
    linkColor: 'text-[#9E7E32] hover:text-amber-950',
  },
  {
    id: 'support',
    title: 'Ongoing Support & Maintenance',
    description:
      'We keep your software secure, reliable, and improving after launch.',
    deliverables: ['Security Patches', 'Performance Tuning', 'Feature Releases'],
    href: '/contact?service=support',
    accentColor: 'via-emerald-500',
    cardBg: 'from-[#E1F9EB] via-[#D1FAE5] to-[#B3F5D3] hover:from-[#D1FAE5] hover:via-[#B3F5D3] hover:to-[#A7F3D0]',
    borderColor: 'border-emerald-200/90 hover:border-emerald-400/80',
    titleColor: 'text-emerald-950',
    shadowStyle: 'shadow-[0_4px_18px_-4px_rgba(16,185,129,0.1),0_1px_3px_0_rgba(15,23,42,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(16,185,129,0.22),0_8px_16px_-4px_rgba(15,23,42,0.04)]',
    dividerColor: 'border-emerald-200/90',
    icon: <ShieldCheck className="h-5 w-5" />,
    iconBox: 'bg-white text-emerald-600 ring-1 ring-emerald-200/90 shadow-xs',
    tagStyle: 'bg-white/80 text-emerald-900 ring-emerald-200/70',
    linkColor: 'text-emerald-800 hover:text-emerald-950',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* ============================================================
          HEADER — SOFT IVORY WITH AMBIENT GLOW
      ============================================================ */}
      <section className="relative border-b border-slate-200/80 bg-gradient-to-b from-[#FBFBFA] via-[#F6F4EE] to-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              What we build
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We focus on building software that solves real business problems. Every project gets a clear fixed-price proposal before development begins.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES & PRICING BANNER
      ============================================================ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF9F6] via-[#F4F2EB] to-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* 4 Services Grid */}
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                id={service.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[12px] border ${service.borderColor} bg-gradient-to-br ${service.cardBg} p-8 sm:p-9 ${service.shadowStyle} transition-all duration-300 hover:-translate-y-1.5`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent ${service.accentColor} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div>
                  <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[10px] ${service.iconBox} transition-transform duration-300 group-hover:scale-105`}>
                    {service.icon}
                  </div>
                  <h2 className={`text-xl font-semibold ${service.titleColor} transition-colors`}>
                    {service.title}
                  </h2>
                  <p className="mt-3.5 text-base leading-relaxed text-slate-800">
                    {service.description}
                  </p>

                  {/* Deliverables tags to eliminate empty dead space */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ${service.tagStyle}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`mt-8 pt-5 border-t ${service.dividerColor}`}>
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.linkColor} transition-colors`}
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="mt-10 rounded-[12px] border border-amber-200/80 bg-gradient-to-r from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] p-8 shadow-[0_4px_16px_-4px_rgba(201,162,75,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-base leading-relaxed text-slate-800">
              <strong className="font-semibold text-slate-950">Simple pricing.</strong>{' '}
              Projects start from $600. Every project receives a clear fixed-price proposal before development begins.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9E7E32] hover:text-amber-950 shrink-0 transition-colors"
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
