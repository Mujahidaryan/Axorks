import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Users, Smartphone, Bot, Info, FileText, UserCheck, Sparkles, Globe, Award, Zap, Clock, Building2, Code2 } from 'lucide-react';
import GoldSwooshLine from '@/components/GoldSwooshLine';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import InternationalFAQSection from '@/components/InternationalFAQSection';
import ContactForm from '@/components/ContactForm';
import SystemsCarousel from '@/components/SystemsCarousel';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { SITE_URL, SITE_NAME } from '@/lib/config';
import { PRICING, getTierRangeLabel } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Axorks | International Custom Software & Bespoke Web Engineering Studio',
  description:
    'Axorks is an international software engineering company serving businesses worldwide. We deliver custom web platforms (from $1,000), web applications (from $3,500), AI automations (from $2,500), mobile apps (from $4,000), and custom enterprise software.',
  keywords: [
    'international software engineering company',
    'custom software development company',
    'bespoke web development UK',
    'custom web application development US',
    'AI automation agency',
    'remote software engineering studio',
    'cross platform mobile app development',
    'enterprise web solutions',
  ],
  openGraph: {
    title: 'Axorks | International Custom Software & Bespoke Web Engineering',
    description:
      'International software engineering company delivering custom web platforms, AI integrations, mobile applications, and enterprise cloud software for global decision-makers.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axorks | International Software Engineering Studio',
    description: 'International software engineering company delivering bespoke web systems, AI automations, and custom software.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const featuredProjects: ProjectData[] = [
    {
      id: 'agrotrace',
      sysId: 'SYS_01 — AGROTRACE',
      name: 'AgroTrace',
      category: 'AgriTech · FWO Grid & Cold-Chain Telemetry',
      description:
        'Supply chain tracking platform connected to FWO grid telemetry — monitoring thermal sensor logs, cold-chain status, export compliance, and logistics analytics across shipping routes.',
      problem: 'Agricultural exporters lacked real-time visibility into temperature anomalies during transit.',
      built: 'Tracking portal integrated with FWO grid telemetry, automated thermal sensor logs, and export validation.',
      challenges: 'Ingesting continuous sensor data streams during intermittent network connectivity across shipping routes.',
      outcome: 'Delivered automated thermal threshold breach alerts and compliance validation.',
      stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'FWO Telemetry', 'REST APIs', 'Vercel'],
      status: 'Representative Engineering Work',
      stats: [
        { label: 'System Domain', value: 'AgriTech Telemetry' },
        { label: 'Infrastructure', value: 'FWO Grid Sync' },
      ],
    },
    {
      id: 'sindh-food-security',
      sysId: 'SYS_03 — SINDH_FOOD_SECURITY_DASHBOARD',
      name: 'Sindh Food Security Dashboard',
      category: 'Government & Public Sector · FAO / WFP',
      description:
        'Humanitarian food security monitoring platform covering regional population metrics across multiple districts under international FAO/WFP operational standards.',
      problem: 'District survey teams relied on delayed manual reporting, hindering emergency response during regional crop vulnerabilities.',
      built: 'IPC Phase Classification monitoring platform with district gap alerts, automated crop telemetry, and field CSV export.',
      challenges: 'Standardizing disparate district field survey metrics into a unified executive decision dashboard.',
      outcome: 'Provided humanitarian planners with district gap analysis and alert dispatch.',
      stack: ['Next.js 14', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Vercel'],
      isGovernment: true,
      status: 'Government System',
      stats: [
        { label: 'System Domain', value: 'Public Sector' },
        { label: 'Compliance Standard', value: 'FAO / WFP' },
      ],
    },
    {
      id: 'ipmi-os',
      sysId: 'SYS_04 — IPMI_OS',
      name: 'IPMI-OS',
      category: 'Quant Systems · Probabilistic AI Engine',
      description:
        'Institutional Probabilistic Market Intelligence OS. Bayesian Hidden Markov regime detection, recursive signal fusion with statistical confidence intervals, and risk engine.',
      problem: 'Rule-based indicators failed during volatile market regime shifts.',
      built: 'Event-driven probabilistic engine delivering sub-millisecond inference on live tick microstructure data.',
      challenges: 'Maintaining low inference latency under high-frequency market tick volume without thread blocking.',
      outcome: 'Delivered real-time regime classification with live confidence intervals.',
      stack: ['Python', 'Bayesian HMM', 'React/TS', 'NATS JetStream', 'Vercel'],
      status: 'Representative Engineering Work',
      stats: [
        { label: 'Inference Speed', value: 'Sub-millisecond' },
        { label: 'Statistical Engine', value: 'Bayesian HMM' },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-16 pt-4 sm:space-y-24 pb-16 sm:pb-24">
        {/* ============================================================
            HERO — EXECUTIVE STAGE
        ============================================================ */}
        <section className="exec-hero-stage relative overflow-hidden">
          {/* Ambient meshes + grid */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="exec-mesh mesh-indigo-dark animate-drift-slow absolute -left-32 -top-32 h-[520px] w-[520px]" />
            <div className="exec-mesh mesh-teal-dark absolute -bottom-32 -right-32 h-[520px] w-[520px]" />
            <div className="exec-mesh mesh-violet-dark absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <div className="exec-grid absolute inset-0 opacity-40" />
          </div>

          {/* Background video — quiet ambient motion */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full scale-105 object-cover"
              style={{ objectPosition: '60% center' }}
            >
              <source src="/assets/hero_motion.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/70 to-obsidian/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-transparent to-obsidian/50" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left column */}
              <div className="lg:col-span-7">
                <ScrollReveal direction="none">
                  <div className="exec-eyebrow exec-eyebrow-gold mb-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
                    International Software Engineering Studio · Global Remote Delivery
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.05}>
                  <h1 className="font-serif text-3xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                    Custom Software &amp; AI Systems
                    <span className="gradient-text-gold mt-2 block italic">Engineered for Scalable Growth</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.12}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
                    Axorks is an independent software engineering studio serving ambitious startups, SMEs, and enterprises worldwide. Powered by an in-house core team of <strong className="font-semibold text-paper">7+ senior engineers and designers</strong>, we engineer high-performance web platforms, bespoke web applications, and practical AI integrations built for speed, security, and measurable business ROI.
                  </p>
                </ScrollReveal>

                {/* Direct collaboration trust line */}
                <ScrollReveal direction="up" delay={0.18}>
                  <div className="mt-7 flex max-w-xl items-start gap-3 rounded-2xl border border-white/10 bg-obsidian/60 p-4 backdrop-blur-xl shadow-obsidian-sm">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 ring-1 ring-gold/30">
                      <UserCheck className="h-5 w-5 text-gold" />
                    </div>
                    <p className="font-mono text-xs leading-relaxed text-steel">
                      You collaborate directly with Chief Systems Architect{' '}
                      <strong className="font-semibold text-paper">Muhammad Mujahid</strong> and senior engineers —{' '}
                      <span className="text-gold">zero account-manager handoff.</span>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.24}>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link href="/contact?cta=discovery" className="btn btn-white group">
                      Book Free Discovery Call
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link href="/contact?cta=quote" className="btn btn-outline-dark">
                      <FileText className="h-4 w-4 text-gold" />
                      Get a Quick Quote
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right column — Capability Matrix Panel */}
              <div className="lg:col-span-5">
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="glass-card-dark relative overflow-hidden rounded-3xl p-6 sm:p-7">
                    {/* Top accent bar */}
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 ring-1 ring-indigo-400/25">
                          <Code2 className="h-5 w-5 text-indigo-300" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-mono text-xs font-semibold tracking-wider text-paper truncate">Studio Capability Matrix</div>
                          <div className="font-mono text-[10px] uppercase tracking-widest text-steel truncate">Global Remote Delivery</div>
                        </div>
                      </div>
                      <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300 leading-none select-none">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse-soft" />
                        <span className="leading-none tracking-wider">Active</span>
                      </span>
                    </div>

                    <ul className="mt-5 space-y-3">
                      <li className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-obsidian/50 px-4 py-3.5 transition-colors duration-300 hover:border-white/15 hover:bg-obsidian/70">
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 ring-1 ring-indigo-400/20">
                            <Sparkles className="h-4 w-4 text-indigo-300" />
                          </span>
                          <span className="font-mono text-xs text-steel truncate">Chief Systems Architect</span>
                        </span>
                        <span className="font-mono text-xs font-semibold text-paper shrink-0 whitespace-nowrap">M. Mujahid</span>
                      </li>
                      <li className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-obsidian/50 px-4 py-3.5 transition-colors duration-300 hover:border-white/15 hover:bg-obsidian/70">
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-400/20">
                            <Users className="h-4 w-4 text-teal-300" />
                          </span>
                          <span className="font-mono text-xs text-steel truncate">Core Engineering Team</span>
                        </span>
                        <span className="font-mono text-xs font-bold text-gold shrink-0 whitespace-nowrap">7+ Senior Engineers</span>
                      </li>
                      <li className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-obsidian/50 px-4 py-3.5 transition-colors duration-300 hover:border-white/15 hover:bg-obsidian/70">
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 ring-1 ring-violet-400/20">
                            <Award className="h-4 w-4 text-violet-300" />
                          </span>
                          <span className="font-mono text-xs text-steel truncate">Production Systems Shipped</span>
                        </span>
                        <span className="font-mono text-xs font-bold text-paper shrink-0 whitespace-nowrap">6+ Live Systems</span>
                      </li>
                      <li className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-obsidian/50 px-4 py-3.5 transition-colors duration-300 hover:border-white/15 hover:bg-obsidian/70">
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/15 ring-1 ring-amber-400/20">
                            <Globe className="h-4 w-4 text-amber-300" />
                          </span>
                          <span className="font-mono text-xs text-steel">Delivery Model</span>
                        </span>
                        <span className="font-mono text-xs font-bold text-gold">Global Remote</span>
                      </li>
                      <li className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-obsidian/50 px-4 py-3.5 transition-colors duration-300 hover:border-white/15 hover:bg-obsidian/70">
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 ring-1 ring-blue-400/20">
                            <Zap className="h-4 w-4 text-blue-300" />
                          </span>
                          <span className="font-mono text-xs text-steel">Timezone Overlap</span>
                        </span>
                        <span className="font-mono text-xs font-semibold text-paper">US / UK / EU / GCC</span>
                      </li>
                      <li className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.07] bg-obsidian/50 px-4 py-3.5 transition-colors duration-300 hover:border-white/15 hover:bg-obsidian/70">
                        <span className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/20">
                            <Clock className="h-4 w-4 text-emerald-300" />
                          </span>
                          <span className="font-mono text-xs text-steel">Response SLA</span>
                        </span>
                        <span className="font-mono text-xs font-bold text-paper">&lt; 24 Hours</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            STATS — SIGNATURE PROOF BAR
        ============================================================ */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 px-6 py-12 shadow-executive-lg sm:px-10 sm:py-14">
            {/* Rich ambient color presence */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="exec-mesh mesh-indigo-light absolute -right-24 -top-24 h-96 w-96" />
              <div className="exec-mesh mesh-teal-light absolute -bottom-24 -left-24 h-96 w-96" />
              <div className="exec-mesh mesh-amber-light absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 opacity-50" />
              <div className="exec-dots-light absolute inset-0 opacity-40" />
            </div>

            <div className="relative z-10">
              <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="exec-eyebrow exec-eyebrow-light">
                  <Award className="h-4 w-4 text-indigo-600" />
                  Provable Studio Metrics
                </div>
                <p className="text-sm font-medium text-slate-600">Quantifiable engineering delivery — no fluff, no filler.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                <ScrollReveal direction="up" delay={0.03}>
                  <div className="exec-stat p-4 text-center sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-400" />
                    <span className="block font-serif text-[2rem] font-bold tracking-tight text-slate-900 sm:text-6xl">
                      <AnimatedCounter target={6} suffix="+" />
                    </span>
                    <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-indigo-600" />
                    <span className="mt-4 block font-mono text-xs font-bold uppercase tracking-wider text-slate-600">Systems Shipped</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.08}>
                  <div className="exec-stat p-4 text-center sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-700 via-teal-500 to-teal-400" />
                    <span className="block font-serif text-[2rem] font-bold tracking-tight text-slate-900 sm:text-6xl">
                      <AnimatedCounter target={7} suffix="+" />
                    </span>
                    <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-teal-600" />
                    <span className="mt-4 block font-mono text-xs font-bold uppercase tracking-wider text-slate-600">Senior Engineers</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.13}>
                  <div className="exec-stat p-4 text-center sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-700 via-violet-500 to-violet-400" />
                    <span className="block font-serif text-[2rem] font-bold tracking-tight text-slate-900 sm:text-6xl">
                      <AnimatedCounter target={5} suffix="+" />
                    </span>
                    <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-violet-600" />
                    <span className="mt-4 block font-mono text-xs font-bold uppercase tracking-wider text-slate-600">Enterprise Clients</span>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.18}>
                  <div className="exec-stat p-4 text-center sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400" />
                    <span className="block font-serif text-[2rem] font-bold tracking-tight text-slate-900 sm:text-6xl">
                      <AnimatedCounter target={100} suffix="%" />
                    </span>
                    <div className="mx-auto mt-4 h-[3px] w-10 rounded-full bg-amber-600" />
                    <span className="mt-4 block font-mono text-xs font-bold uppercase tracking-wider text-slate-600">On-Time Delivery</span>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            OFFICE & LEADERSHIP PROOF
        ============================================================ */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-executive-xl">
            {/* Ambient color authority */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="exec-mesh mesh-indigo-light absolute right-0 top-0 h-96 w-96" />
              <div className="exec-mesh mesh-teal-light absolute bottom-0 left-0 h-96 w-96" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Office image */}
              <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-auto lg:min-h-[460px] overflow-hidden">
                <img
                  src="/AxorkOffice.png"
                  alt="Axorks Software House Corporate Office"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/30" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md sm:py-1.5">
                  <Building2 className="h-3.5 w-3.5 text-gold" />
                  Karachi · Islamabad
                </div>
              </div>

              {/* Office text panel */}
              <div className="relative lg:col-span-5 flex flex-col justify-center p-8 sm:p-12">
                <div className="exec-eyebrow exec-eyebrow-light mb-5">
                  <Building2 className="h-4 w-4 text-indigo-600" />
                  Physical Workspace &amp; Headquarters
                </div>
                <h2 className="font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                  Real office. Real engineers.
                  <span className="gradient-text-indigo block">Global delivery.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Operating from our modern software house facilities in Karachi &amp; Islamabad, Axorks combines physical office infrastructure with transparent, asynchronous global remote delivery for international clients.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
                  <div className="bg-white p-5">
                    <span className="block font-mono text-xs font-bold text-indigo-700">100% In-House</span>
                    <span className="mt-1 block font-sans text-[11px] text-slate-500">Zero Outsourcing</span>
                  </div>
                  <div className="bg-white p-5">
                    <span className="block font-mono text-xs font-bold text-slate-900">Direct Access</span>
                    <span className="mt-1 block font-sans text-[11px] text-slate-500">Chief Systems Architect</span>
                  </div>
                  <div className="bg-white p-5">
                    <span className="block font-mono text-xs font-bold text-teal-700">24hr Response</span>
                    <span className="mt-1 block font-sans text-[11px] text-slate-500">Guaranteed SLA</span>
                  </div>
                  <div className="bg-white p-5">
                    <span className="block font-mono text-xs font-bold text-violet-700">NDA Standard</span>
                    <span className="mt-1 block font-sans text-[11px] text-slate-500">Every Engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            RISK-REVERSAL PAYMENT BANNER
        ============================================================ */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-indigo-200/60 bg-gradient-to-r from-indigo-50/90 via-white to-teal-50/80 px-6 py-8 shadow-executive-lg sm:px-10 sm:py-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="exec-mesh mesh-indigo-light absolute -left-24 -top-24 h-72 w-72" />
              <div className="exec-mesh mesh-teal-light absolute -bottom-24 right-0 h-72 w-72" />
            </div>

            <div className="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-100">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-700">
                    Risk-Reversal Milestone Billing
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  Milestone-based billing: <strong className="font-semibold text-slate-900">40% to begin, 40% at midpoint review, 20% on final delivery</strong>. You&apos;re never paying for work you haven&apos;t seen.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary shrink-0">
                Start with No Risk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            SERVICES — TIERED CAPABILITIES
        ============================================================ */}
        <section className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 px-6 py-12 shadow-executive-lg sm:px-10 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="exec-mesh mesh-indigo-light absolute -right-24 top-0 h-96 w-96" />
              <div className="exec-mesh mesh-teal-light absolute -bottom-24 left-0 h-96 w-96" />
              <div className="exec-grid-light absolute inset-0 opacity-40" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-end">
                <div className="max-w-2xl space-y-4">
                  <div className="exec-eyebrow exec-eyebrow-light">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    Productized Capabilities &amp; Pricing
                  </div>
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                    Enterprise software offerings
                    <span className="gradient-text-indigo block">&amp; transparent pricing ladders</span>
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-indigo-700 shadow-executive-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-executive-glow"
                >
                  Explore All Tiered Pricing Ladders
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {/* Card 1 — Custom Website */}
                <ScrollReveal direction="up" delay={0.02}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-executive-md transition-all duration-400 hover:-translate-y-1.5 hover:border-indigo-300/60 hover:shadow-executive-glow">
                    <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-400" />
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <img
                        src="/assets/web_art.png"
                        alt="Custom Website Development"
                        className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-indigo-400/40 bg-indigo-950/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-200 backdrop-blur-md">
                        Custom Web
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-indigo-800">
                        Custom Website Development
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        Corporate websites built with Next.js App Router, TypeScript, and serverless infrastructure.
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="font-mono text-xs text-slate-500">Floor Pricing:</span>
                        <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 font-mono text-xs font-bold text-indigo-700">
                          {PRICING.websiteDevelopment.shortRange}
                        </span>
                      </div>
                      <Link
                        href="/services#website-development"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 font-mono text-xs font-bold text-slate-900 transition-all duration-300 group-hover:border-indigo-300 group-hover:bg-indigo-50/70 group-hover:text-indigo-900"
                      >
                        {getTierRangeLabel('websiteDevelopment')}
                        <ArrowUpRight className="h-3.5 w-3.5 text-indigo-600" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>

                {/* Card 2 — Web Apps */}
                <ScrollReveal direction="up" delay={0.07}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-executive-md transition-all duration-400 hover:-translate-y-1.5 hover:border-teal-300/60 hover:shadow-executive-glow-teal">
                    <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-teal-700 via-teal-500 to-teal-400" />
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <img
                        src="/assets/cloud_art.png"
                        alt="Web Applications & Systems"
                        className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-teal-400/40 bg-teal-950/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-teal-200 backdrop-blur-md">
                        Cloud &amp; Systems
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-800">
                        Web Applications &amp; Systems
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        Full-stack web portals, CRMs, and internal tools with serverless PostgreSQL and RBAC permissions.
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="font-mono text-xs text-slate-500">Floor Pricing:</span>
                        <span className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-0.5 font-mono text-xs font-bold text-teal-700">
                          {PRICING.webApplications.shortRange}
                        </span>
                      </div>
                      <Link
                        href="/services#web-applications"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 font-mono text-xs font-bold text-slate-900 transition-all duration-300 group-hover:border-teal-300 group-hover:bg-teal-50/70 group-hover:text-teal-900"
                      >
                        {getTierRangeLabel('webApplications')}
                        <ArrowUpRight className="h-3.5 w-3.5 text-teal-600" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>

                {/* Card 3 — AI */}
                <ScrollReveal direction="up" delay={0.12}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-executive-md transition-all duration-400 hover:-translate-y-1.5 hover:border-violet-300/60 hover:shadow-executive-glow-violet">
                    <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-violet-700 via-violet-500 to-violet-400" />
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <img
                        src="/assets/ai_art.png"
                        alt="AI Solutions & Automation"
                        className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-violet-400/40 bg-violet-950/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-violet-200 backdrop-blur-md">
                        AI &amp; Automation
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-violet-800">
                        AI Solutions &amp; Automation
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        OpenAI API pipelines, document processing workflows, and vector embeddings into software.
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="font-mono text-xs text-slate-500">Floor Pricing:</span>
                        <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 font-mono text-xs font-bold text-violet-700">
                          {PRICING.aiIntegration.shortRange}
                        </span>
                      </div>
                      <Link
                        href="/services#ai-integration"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 font-mono text-xs font-bold text-slate-900 transition-all duration-300 group-hover:border-violet-300 group-hover:bg-violet-50/70 group-hover:text-violet-900"
                      >
                        {getTierRangeLabel('aiIntegration')}
                        <ArrowUpRight className="h-3.5 w-3.5 text-violet-600" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>

                {/* Card 4 — Mobile */}
                <ScrollReveal direction="up" delay={0.17}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-executive-md transition-all duration-400 hover:-translate-y-1.5 hover:border-amber-300/60 hover:shadow-executive-glow-gold">
                    <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400" />
                    <div className="relative h-44 overflow-hidden bg-slate-900">
                      <img
                        src="/assets/hero_art.png"
                        alt="Mobile App Development"
                        className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-amber-400/40 bg-amber-950/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-200 backdrop-blur-md">
                        Mobile Apps
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-amber-800">
                        Mobile App Development
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        Cross-platform iOS and Android apps built for performance and offline data synchronization.
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="font-mono text-xs text-slate-500">Floor Pricing:</span>
                        <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 font-mono text-xs font-bold text-amber-700">
                          {PRICING.mobileAppDevelopment.shortRange}
                        </span>
                      </div>
                      <Link
                        href="/services#mobile-app-development"
                        className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 font-mono text-xs font-bold text-slate-900 transition-all duration-300 group-hover:border-amber-300 group-hover:bg-amber-50/70 group-hover:text-amber-900"
                      >
                        {getTierRangeLabel('mobileAppDevelopment')}
                        <ArrowUpRight className="h-3.5 w-3.5 text-amber-600" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            INTERACTIVE SYSTEMS SHOWCASE
        ============================================================ */}
        <section>
          <SystemsCarousel />
        </section>

        {/* ============================================================
            FEATURED CASE STUDIES
        ============================================================ */}
        <section>
          <ScrollReveal direction="up">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end">
              <div>
                <div className="exec-eyebrow exec-eyebrow-gold mb-3">
                  <ShieldCheck className="h-4 w-4" />
                  Proof of Engineering Capability
                </div>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-paper sm:text-3xl">
                  Representative Systems Architecture
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
              >
                View All Case Studies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* NDA disclaimer */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold/25 bg-obsidian-raised/70 p-4 text-xs text-steel backdrop-blur-md">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/25">
              <Info className="h-4 w-4 text-gold" />
            </div>
            <p className="leading-relaxed">
              Representative software systems engineered by our technical team in senior engineering capacities. Specific client identities and proprietary metrics are protected under NDA.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} direction="up" delay={idx * 0.05}>
                <SchematicCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <GoldSwooshLine />

        {/* ============================================================
            TESTIMONIALS
        ============================================================ */}
        <section>
          <TestimonialsSection />
        </section>

        {/* ============================================================
            CONTACT — SPLIT CONVERSION
        ============================================================ */}
        <section id="contact-section">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-obsidian-raised/80 p-6 shadow-obsidian-lg backdrop-blur-xl sm:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="exec-mesh mesh-indigo-dark absolute -left-32 -top-32 h-[420px] w-[420px]" />
              <div className="exec-mesh mesh-teal-dark absolute -bottom-32 -right-32 h-[420px] w-[420px]" />
              <div className="exec-grid absolute inset-0 opacity-30" />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left */}
              <div className="lg:col-span-5">
                <div className="exec-eyebrow exec-eyebrow-gold mb-6">
                  <Sparkles className="h-4 w-4" />
                  Let&apos;s build what&apos;s next
                </div>
                <h2 className="font-serif text-3xl font-bold leading-[1.15] tracking-tight text-paper sm:text-4xl lg:text-5xl">
                  Let&apos;s build what&apos;s next, <span className="gradient-text-gold italic">together.</span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
                  Whether you need a bespoke web application, enterprise AI pipeline, or full-stack software system, our senior engineering team is ready to deliver.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 font-mono text-xs text-paper">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
                    Guaranteed 24-Hour Technical Response
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-paper">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                    Direct Chief Systems Architect Consultation
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-paper">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    Milestone Billing — 40 / 40 / 20 Structure
                  </li>
                </ul>
              </div>

              {/* Right — form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            INTERNATIONAL FAQ
        ============================================================ */}
        <section>
          <InternationalFAQSection />
        </section>
      </div>
    </div>
  );
}