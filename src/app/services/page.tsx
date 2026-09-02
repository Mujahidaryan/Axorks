import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, Cpu, Smartphone, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
    capabilities: ['Next.js App Router', 'Serverless PostgreSQL', 'Role-Based Auth (RBAC)'],
    href: '/contact?service=web-applications',
    illustration: '/assets/illustrations/service_web.png',
    accentGlow: 'bg-indigo-500/20',
    borderColor: 'border-indigo-500/30 hover:border-indigo-400',
    tagStyle: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
    icon: <Layers className="h-5 w-5 text-indigo-400" />,
    badgeColor: 'text-indigo-400',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description:
      'We use AI to automate repetitive work, improve decisions, and reduce manual effort.',
    deliverables: ['Document AI Pipelines', 'Automated Workflows', 'Decision Engines'],
    capabilities: ['LLM & Agent Pipelines', 'FastAPI Microservices', 'Intelligent Extraction'],
    href: '/contact?service=ai-automation',
    illustration: '/assets/illustrations/service_ai.png',
    accentGlow: 'bg-teal-500/20',
    borderColor: 'border-teal-500/30 hover:border-teal-400',
    tagStyle: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    icon: <Cpu className="h-5 w-5 text-teal-400" />,
    badgeColor: 'text-teal-400',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description:
      'We create mobile applications that make your products and services easier to access.',
    deliverables: ['iOS & Android Apps', 'Offline Data Sync', 'Customer Portals'],
    capabilities: ['React Native Cross-Platform', 'Native Performance', 'Offline-First Sync'],
    href: '/contact?service=mobile-apps',
    illustration: '/assets/illustrations/service_mobile.png',
    accentGlow: 'bg-amber-500/20',
    borderColor: 'border-amber-500/30 hover:border-amber-400',
    tagStyle: 'bg-amber-500/20 text-[#DFBD6C] border-amber-500/40',
    icon: <Smartphone className="h-5 w-5 text-[#DFBD6C]" />,
    badgeColor: 'text-[#DFBD6C]',
  },
  {
    id: 'support',
    title: 'Ongoing Support & Maintenance',
    description:
      'We keep your software secure, reliable, and improving after launch.',
    deliverables: ['Security Patches', 'Performance Tuning', 'Continuous Releases'],
    capabilities: ['24/7 Uptime Monitoring', 'Zero-Downtime Patching', 'Dedicated Retainers'],
    href: '/contact?service=support',
    illustration: '/assets/illustrations/process_flow.png',
    accentGlow: 'bg-emerald-500/20',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400',
    tagStyle: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    badgeColor: 'text-emerald-400',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* ============================================================
          PAGE HERO — 100% FULL-BLEED CINEMATIC STAGE (ZERO EMPTY SPACE)
      ============================================================ */}
      <section className="relative min-h-[520px] lg:min-h-[580px] w-full overflow-hidden bg-[#07080C] text-white flex items-center border-b border-white/[0.08]">
        {/* Full-Bleed 100% Background Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden z-0">
          <Image
            src="/assets/illustrations/service_web.png"
            alt=""
            fill
            priority
            className="object-cover object-[75%_center] lg:object-[right_center] scale-[1.04] opacity-80"
          />

          {/* Optical Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080C] via-[#07080C]/85 to-transparent lg:via-[#07080C]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-transparent to-[#07080C]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07080C]/80 via-transparent to-[#07080C]" />

          {/* Ambient atmospheric lighting */}
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl" />
          <div className="exec-grid absolute inset-0 opacity-[0.15]" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-5 py-24 sm:px-8 sm:py-32 lg:py-36">
          <div className="max-w-2xl lg:max-w-[620px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#DFBD6C] ring-1 ring-white/15 mb-4">
              <Layers className="h-3.5 w-3.5 text-[#C9A24B]" />
              <span>Full-Stack Software Capabilities</span>
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              What we build
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
              We focus on building software that solves real business problems. Every engagement receives a clear fixed-price proposal before development begins.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES CARDS — RICH CINEMATIC ILLUSTRATION CARDS
      ============================================================ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF9F6] via-[#F4F2EB] to-[#FAF9F6]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[16px] border ${service.borderColor} bg-gradient-to-br from-[#0E111A] via-[#131724] to-[#0A0C14] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.6)] text-white`}
              >
                {/* Background Illustration with dark overlay for perfect text contrast */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-35 transition-opacity duration-500 group-hover:opacity-45">
                  <Image
                    src={service.illustration}
                    alt=""
                    fill
                    className="object-cover object-right scale-[1.05] transition-transform duration-700 group-hover:scale-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0E111A] via-[#0E111A]/85 to-[#0E111A]/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E111A] via-transparent to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                      {service.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Fixed-Price Scope
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-white transition-colors">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-base leading-relaxed text-slate-300">
                    {service.description}
                  </p>

                  {/* Deliverable Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.deliverables.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border backdrop-blur-xs ${service.tagStyle}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Capabilities List */}
                  <div className="mt-6 space-y-2 border-t border-white/10 pt-5">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#C9A24B] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-5 border-t border-white/10">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#DFBD6C]"
                  >
                    <span>Discuss your project</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Banner */}
          <div className="mt-12 rounded-[14px] border border-amber-200/80 bg-gradient-to-r from-[#FEF3C7] via-[#FFFBEB] to-[#FEF3C7] p-8 shadow-[0_4px_16px_-4px_rgba(201,162,75,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
