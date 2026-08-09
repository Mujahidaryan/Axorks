import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Code2, Users, Smartphone, Bot, Info, Layout, FileText, CheckCircle2, PhoneCall, UserCheck } from 'lucide-react';
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
    <div className="space-y-16 pb-16 pt-4 sm:space-y-24 sm:pb-24">
      {/* Hero Section with Video & Dynamic Artwork Backdrop */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-obsidian-raised/60 shadow-2xl mx-auto max-w-7xl">
        {/* Background Kling AI Video Player */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-110 translate-x-4 filter blur-[1px]"
            style={{ objectPosition: '60% center' }}
          >
            <source src="/assets/hero_motion.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-20 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-mono text-xs font-semibold text-gold backdrop-blur-md">
                <ShieldCheck className="h-4 w-4" />
                <span>International Software Engineering Studio · Global Remote Delivery</span>
              </div>

              <h1 className="font-serif text-4xl font-bold tracking-tight text-paper sm:text-5xl lg:text-6xl lg:leading-[1.12]">
                Architecting Enterprise AI Systems &{' '}
                <span className="italic text-gold">Bespoke Software Platforms.</span>
              </h1>

              <p className="text-base leading-relaxed text-steel sm:text-lg">
                Axorks is an independent software engineering company serving ambitious startups, SMEs, and enterprises across the UK, Europe, GCC, North America, and worldwide. Powered by a core team of <strong className="text-paper">7+ senior engineers and designers</strong>, we architect custom web applications, AI automations, and mobile platforms engineered for high performance, enterprise security, and long-term scalability.
              </p>

              {/* Direct Collaboration Line */}
              <div className="rounded-xl border border-white/10 bg-obsidian/90 p-4 font-mono text-xs text-steel flex items-center gap-3 backdrop-blur-md">
                <UserCheck className="h-5 w-5 text-gold shrink-0" />
                <span>You collaborate directly with Chief Systems Architect <strong>Muhammad Mujahid</strong> and senior engineers — zero account-manager handoff.</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact?cta=discovery"
                  className="group flex items-center gap-2.5 rounded-full border border-paper/20 bg-paper px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-all hover:bg-white hover:shadow-xl hover:shadow-paper/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Free Discovery Call
                  <ArrowUpRight className="h-4 w-4 text-obsidian transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/contact?cta=quote"
                  className="flex items-center gap-2 rounded-full border border-gold/40 bg-obsidian/80 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-gold transition-all hover:bg-gold/10 hover:border-gold backdrop-blur-md"
                >
                  <FileText className="h-4 w-4 text-gold" />
                  Get a Quick Quote
                </Link>
              </div>
            </div>

            {/* Right Hero Schematic Matrix */}
            <div className="w-full lg:w-[380px]">
              <div className="rounded-2xl border border-gold/40 bg-obsidian/90 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-gold">
                  <span>STUDIO_CAPABILITY_MATRIX</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE
                  </span>
                </div>
                <ul className="mt-4 space-y-3.5 font-mono text-xs text-steel">
                  <li className="flex items-center justify-between">
                    <span>Chief Systems Architect:</span>
                    <span className="font-bold text-paper">M. Mujahid</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Core Engineering Team:</span>
                    <span className="font-bold text-gold">7+ Senior Engineers</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Track Record:</span>
                    <span className="font-bold text-paper">6+ Shipped Systems</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Delivery Model:</span>
                    <span className="font-bold text-gold">Global Remote Delivery</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Timezone Overlap:</span>
                    <span className="text-paper font-semibold">US / UK / EU Shifts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Quantifiable Proof Bar — Systems Limited Style White Stats Section */}
      <section className="w-full bg-sys-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Section Label */}
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-sys-blue">
              [ PROVABLE_STUDIO_METRICS ]
            </span>
            <p className="mt-2 font-sans text-sm text-sys-ink-muted">
              Quantifiable engineering delivery — no fluff, no filler.
            </p>
          </div>

          {/* Large Impact Number Grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="text-center space-y-2">
              <span className="block font-serif text-5xl sm:text-6xl font-bold text-sys-ink tracking-tight">
                <AnimatedCounter target={6} suffix="+" />
              </span>
              <div className="h-[2px] w-10 bg-sys-blue mx-auto rounded-full" />
              <span className="block font-mono text-xs uppercase tracking-wider text-sys-ink-muted">Systems Shipped</span>
            </div>
            <div className="text-center space-y-2">
              <span className="block font-serif text-5xl sm:text-6xl font-bold text-sys-ink tracking-tight">
                <AnimatedCounter target={7} suffix="+" />
              </span>
              <div className="h-[2px] w-10 bg-sys-blue mx-auto rounded-full" />
              <span className="block font-mono text-xs uppercase tracking-wider text-sys-ink-muted">Senior Engineers</span>
            </div>
            <div className="text-center space-y-2">
              <span className="block font-serif text-5xl sm:text-6xl font-bold text-sys-ink tracking-tight">
                <AnimatedCounter target={5} suffix="+" />
              </span>
              <div className="h-[2px] w-10 bg-sys-blue mx-auto rounded-full" />
              <span className="block font-mono text-xs uppercase tracking-wider text-sys-ink-muted">Enterprise Clients</span>
            </div>
            <div className="text-center space-y-2">
              <span className="block font-serif text-5xl sm:text-6xl font-bold text-sys-ink tracking-tight">
                <AnimatedCounter target={100} suffix="%" />
              </span>
              <div className="h-[2px] w-10 bg-sys-blue mx-auto rounded-full" />
              <span className="block font-mono text-xs uppercase tracking-wider text-sys-ink-muted">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Office & Leadership Visual Proof Block */}
      <section className="w-full bg-sys-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-0">
          <div className="relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Office Image Visual Anchor — stays dark/cinematic */}
              <div className="relative lg:col-span-7 h-72 sm:h-96 lg:h-[460px] overflow-hidden">
                <img
                  src="/AxorkOffice.png"
                  alt="Axorks Software House Corporate Office"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sys-ink/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-sys-light" />
              </div>

              {/* Office Text Panel — Systems Ltd white/light-gray right panel */}
              <div className="lg:col-span-5 bg-sys-light p-8 sm:p-12 space-y-5 flex flex-col justify-center">
                <span className="font-mono text-[11px] font-bold text-sys-blue uppercase tracking-widest">
                  [ PHYSICAL_WORKSPACE_&_HEADQUARTERS ]
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-sys-ink leading-tight">
                  Real Office. Real Engineers. Global Delivery.
                </h2>
                <p className="text-sm text-sys-ink-muted leading-relaxed">
                  Operating from our modern software house facilities in Karachi &amp; Islamabad, Axorks combines physical office infrastructure with transparent, asynchronous global remote delivery for international clients.
                </p>
                <div className="pt-4 flex items-center gap-6 border-t border-sys-ink/10 font-mono text-xs">
                  <div>
                    <span className="block text-sys-blue font-bold text-sm">100% In-House</span>
                    <span className="text-sys-ink-muted text-[11px] mt-0.5 block">Zero Outsourcing</span>
                  </div>
                  <div className="h-8 w-[1px] bg-sys-ink/10" />
                  <div>
                    <span className="block text-sys-ink font-bold text-sm">Direct Access</span>
                    <span className="text-sys-ink-muted text-[11px] mt-0.5 block">Chief Systems Architect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk-Reversal Payment Structure — Systems Limited white with top blue accent line */}
      <section className="w-full bg-sys-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Left: Blue top-accent label + headline */}
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-sys-blue shrink-0" />
                <span className="font-mono text-[11px] font-bold text-sys-blue uppercase tracking-widest">
                  RISK-REVERSAL MILESTONE BILLING
                </span>
              </div>
              <p className="font-sans text-sm text-sys-ink-muted leading-relaxed">
                Milestone-based billing: <strong className="text-sys-ink">40% to begin, 40% at midpoint review, 20% on final delivery</strong>. You're never paying for work you haven't seen.
              </p>
            </div>
            {/* Right: CTA */}
            <a
              href="/contact"
              className="shrink-0 flex items-center gap-2 rounded-full bg-sys-blue px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-sys-blue-hover hover:shadow-lg hover:shadow-sys-blue/20"
            >
              Start with No Risk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Tiers Capabilities Section with Systems Ltd Style Top-Radius Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-obsidian-border pb-4 gap-4">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-wider">
              PRODUCTIZED_CAPABILITIES_&_PRICING
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-paper">
              Enterprise Software Offerings & Pricing Ladders
            </h2>
          </div>
          <Link
            href="/services"
            className="font-mono text-xs text-signal-blue hover:text-signal-blue-hover inline-flex items-center gap-1 font-semibold"
          >
            Explore All Tiered Pricing Ladders
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Custom Website Development */}
          <div className="group rounded-2xl border border-white/10 bg-obsidian-raised overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1">
            <div>
              <div className="relative h-44 w-full overflow-hidden bg-obsidian">
                <img
                  src="/assets/web_art.png"
                  alt="Custom Website Development"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-raised via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded bg-obsidian/80 px-2.5 py-1 font-mono text-[10px] font-bold text-gold uppercase tracking-widest border border-gold/30 backdrop-blur-md">
                  [ CUSTOM WEB ]
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-paper group-hover:text-gold transition-colors">
                  Custom Website Development
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">
                  Corporate website development built with Next.js App Router, TypeScript, and serverless infrastructure.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-obsidian-border/60 mt-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.websiteDevelopment.shortRange}</span>
              </div>
              <Link
                href="/services#website-development"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-2 rounded-xl hover:border-gold/50 hover:bg-gold/10 transition-all font-semibold"
              >
                {getTierRangeLabel('websiteDevelopment')}
              </Link>
            </div>
          </div>

          {/* Card 2: Web Applications & Systems */}
          <div className="group rounded-2xl border border-white/10 bg-obsidian-raised overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1">
            <div>
              <div className="relative h-44 w-full overflow-hidden bg-obsidian">
                <img
                  src="/assets/cloud_art.png"
                  alt="Web Applications & Systems"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-raised via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded bg-obsidian/80 px-2.5 py-1 font-mono text-[10px] font-bold text-gold uppercase tracking-widest border border-gold/30 backdrop-blur-md">
                  [ CLOUD & SYSTEMS ]
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-paper group-hover:text-gold transition-colors">
                  Web Applications & Systems
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">
                  Full-stack web portals, CRMs, and internal tools with serverless PostgreSQL databases and RBAC permissions.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-obsidian-border/60 mt-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.webApplications.shortRange}</span>
              </div>
              <Link
                href="/services#web-applications"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-2 rounded-xl hover:border-gold/50 hover:bg-gold/10 transition-all font-semibold"
              >
                {getTierRangeLabel('webApplications')}
              </Link>
            </div>
          </div>

          {/* Card 3: AI Solutions & Automation */}
          <div className="group rounded-2xl border border-white/10 bg-obsidian-raised overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1">
            <div>
              <div className="relative h-44 w-full overflow-hidden bg-obsidian">
                <img
                  src="/assets/ai_art.png"
                  alt="AI Solutions & Automation"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-raised via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded bg-obsidian/80 px-2.5 py-1 font-mono text-[10px] font-bold text-gold uppercase tracking-widest border border-gold/30 backdrop-blur-md">
                  [ AI & AUTOMATION ]
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-paper group-hover:text-gold transition-colors">
                  AI Solutions & Automation
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">
                  Integrating OpenAI API pipelines, document processing workflows, and vector embeddings into software.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-obsidian-border/60 mt-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.aiIntegration.shortRange}</span>
              </div>
              <Link
                href="/services#ai-integration"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-2 rounded-xl hover:border-gold/50 hover:bg-gold/10 transition-all font-semibold"
              >
                {getTierRangeLabel('aiIntegration')}
              </Link>
            </div>
          </div>

          {/* Card 4: Mobile App Development */}
          <div className="group rounded-2xl border border-white/10 bg-obsidian-raised overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1">
            <div>
              <div className="relative h-44 w-full overflow-hidden bg-obsidian">
                <img
                  src="/assets/hero_art.png"
                  alt="Mobile App Development"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-raised via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded bg-obsidian/80 px-2.5 py-1 font-mono text-[10px] font-bold text-gold uppercase tracking-widest border border-gold/30 backdrop-blur-md">
                  [ MOBILE APPS ]
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-paper group-hover:text-gold transition-colors">
                  Mobile App Development
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">
                  Cross-platform iOS and Android mobile applications built for performance and offline data synchronization.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 border-t border-obsidian-border/60 mt-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.mobileAppDevelopment.shortRange}</span>
              </div>
              <Link
                href="/services#mobile-app-development"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-2 rounded-xl hover:border-gold/50 hover:bg-gold/10 transition-all font-semibold"
              >
                {getTierRangeLabel('mobileAppDevelopment')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Systems Showcase Carousel */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SystemsCarousel />
      </section>

      {/* Featured Case Studies Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-obsidian-border pb-4 gap-4">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-wider">
              PROOF_OF_ENGINEERING_CAPABILITY
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-paper">
              Representative Systems Architecture
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="font-mono text-xs text-signal-blue hover:text-signal-blue-hover inline-flex items-center gap-1 font-semibold"
          >
            View All Representative Case Studies
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Grounded NDA Disclaimer Note */}
        <div className="mt-6 rounded-xl border border-gold/30 bg-obsidian-raised p-4 flex items-start gap-3 text-xs text-steel">
          <Info className="h-4 w-4 text-gold shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Representative software systems engineered by our technical team in senior engineering capacities. Specific client identities and proprietary metrics are protected under NDA.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <SchematicCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Testimonials Structure Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TestimonialsSection />
      </section>

      {/* Split Homepage Conversion & Contact Section (Systems Limited Pattern) */}
      <section id="contact-section" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-obsidian-raised/80 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Brand Call to Action */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-gold uppercase tracking-wider">
                [ LET'S_BUILD_WHAT'S_NEXT ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-paper leading-[1.15]">
                Let's build what's next, <span className="italic text-gold">together.</span>
              </h2>
              <p className="text-sm text-steel leading-relaxed">
                Whether you need a bespoke web application, enterprise AI pipeline, or full-stack software system, our senior engineering team is ready to deliver.
              </p>
              
              <div className="space-y-3 pt-2 font-mono text-xs text-paper">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Guaranteed 24-Hour Technical Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold" />
                  <span>Direct Chief Systems Architect Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-signal-blue" />
                  <span>Milestone Billing — 40 / 40 / 20 Structure</span>
                </div>
              </div>
            </div>

            {/* Right High-Contrast Floating Form Card */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* International Client Objection Handling FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InternationalFAQSection />
      </section>
    </div>
  );
}
