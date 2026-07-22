import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Cpu, Code2, Server, CheckCircle2 } from 'lucide-react';
import GoldSwooshLine from '@/components/GoldSwooshLine';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';

export const metadata = {
  title: 'Axorks | Engineering the future. Solving today.',
  description:
    'A software studio that ships — including two government-grade systems already in active production.',
};

export default function HomePage() {
  const featuredProjects: ProjectData[] = [
    {
      id: 'agrotrace',
      sysId: 'SYS_01 — AGROTRACE',
      name: 'AgroTrace',
      category: 'AgriTech · FAO Aligned',
      description:
        'Real-time supply chain tracking across Pakistan — monitoring cold chain compliance, predictive delay analytics, and live geospatial logistics.',
      problem: 'Export shipments lacked cold-chain transparency and real-time delay alerts.',
      built: 'End-to-end telemetry system with live maps, shipment monitoring, and export validation.',
      stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Vercel'],
      status: 'Live Production',
      liveUrl: 'https://agrotrace-n65b.vercel.app',
      stats: [
        { label: 'Shipments Tracked', value: '3,400+' },
        { label: 'Export Value', value: '$47M' },
      ],
    },
    {
      id: 'sindh-food-security',
      sysId: 'SYS_03 — SINDH_FOOD_SECURITY_DASHBOARD',
      name: 'Sindh Food Security Dashboard',
      category: 'Humanitarian · Government System',
      description:
        'Humanitarian food security monitoring system covering 25.45M population across 8 Sindh districts. Built to FAO/WFP operational standards.',
      problem: 'Fragmented field survey data delayed critical food intervention during crop vulnerability.',
      built: 'IPC Phase Classification platform with real-time district gap alerts and CSV field export.',
      stack: ['Next.js 14', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Vercel'],
      isGovernment: true,
      status: 'Government Live',
      liveUrl: 'https://sindh-food-supply-tracking-dashboar.vercel.app/dashboard',
      stats: [
        { label: 'Population Covered', value: '25.45M' },
        { label: 'Districts Monitored', value: '8 Sindh' },
      ],
    },
    {
      id: 'ipmi-os',
      sysId: 'SYS_04 — IPMI_OS',
      name: 'IPMI-OS',
      category: 'Quant Systems · Probabilistic AI',
      description:
        'Institutional Probabilistic Market Intelligence OS. Bayesian Hidden Markov regime detection, recursive signal fusion with 90% confidence intervals, and CVaR-gated risk engine.',
      problem: 'Rule-based indicators failed during volatile market regime shifts.',
      built: 'Event-driven probabilistic engine delivering sub-2.5ms inference on live microstructure data.',
      stack: ['Python', 'Bayesian HMM', 'React/TS', 'NATS JetStream', 'Vercel'],
      status: 'Live Engine',
      liveUrl: 'https://impi-os-dashboard-cncn.vercel.app/',
      stats: [
        { label: 'Inference Speed', value: '< 2.5ms' },
        { label: 'Confidence Interval', value: '90% Live' },
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 sm:space-y-24 sm:pb-24 sm:pt-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Founder-Led Studio · Full-Stack & AI-Native</span>
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-paper sm:text-5xl lg:text-6xl lg:leading-[1.15]">
              Engineering the future.{' '}
              <span className="italic text-gold">Solving today.</span>
            </h1>

            <p className="text-base leading-relaxed text-steel sm:text-lg">
              A software studio that ships — including{' '}
              <strong className="text-paper">two government-grade systems</strong> already in active production. We build high-reliability web platforms, AI-augmented backends, and complex enterprise systems without agency bloat.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal-blue-hover hover:shadow-lg hover:shadow-signal-blue/25"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/case-studies"
                className="flex items-center gap-2 rounded border border-obsidian-border bg-obsidian-raised px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-steel transition-colors hover:border-gold/40 hover:text-paper"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>

          {/* Right Hero Schematic Badge Box */}
          <div className="w-full lg:w-[380px]">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3 font-mono text-xs text-gold">
                <span>SYSTEM_CAPABILITY_MATRIX</span>
                <span>STATUS_OK</span>
              </div>
              <ul className="mt-4 space-y-3 font-mono text-xs text-steel">
                <li className="flex items-center justify-between">
                  <span>Production Systems:</span>
                  <span className="font-bold text-paper">6 Shipped</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Public Sector Grade:</span>
                  <span className="font-bold text-gold">2 Government</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Architecture:</span>
                  <span className="text-paper">Next.js / Node / Postgres</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>AI Engine:</span>
                  <span className="text-paper">OpenAI / Bayesian HMM</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Lead Time:</span>
                  <span className="text-emerald-400">Rapid Deployment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Animated Gold Swoosh Divider Line */}
      <GoldSwooshLine />

      {/* Proof Strip (6 Shipped Systems Monospace Row) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-y border-obsidian-border/80 bg-obsidian-raised/50 py-4">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <span className="font-mono text-xs font-semibold uppercase text-gold shrink-0">
              SHIPPED PRODUCTION SYSTEMS:
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-steel">
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                SYS_01 — AgroTrace
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                SYS_02 — MediVerse
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="text-gold hover:underline font-semibold">
                SYS_03 — Sindh Food Security Dashboard ★
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                SYS_04 — IPMI-OS
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                SYS_05 — HMS
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                SYS_06 — Veritas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between border-b border-obsidian-border pb-4">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-wider">
              PROVEN_TRACK_RECORD
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-paper">
              Featured Case Studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="hidden font-mono text-xs text-signal-blue hover:text-signal-blue-hover sm:inline-flex sm:items-center sm:gap-1"
          >
            View All 6 Systems
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <SchematicCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 font-mono text-xs text-signal-blue"
          >
            View All 6 Shipped Case Studies
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-4">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            CORE_CAPABILITIES
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-paper">
            Engineered Software Services
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
            <Code2 className="h-6 w-6 text-gold" />
            <h3 className="mt-4 font-serif text-lg font-bold text-paper">
              Web Applications & Custom Systems
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-steel">
              End-to-end full-stack web applications engineered with Next.js, Node.js, and serverless Postgres. Built for high performance, strict RBAC authorization, and long-term maintainability.
            </p>
          </div>

          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
            <Cpu className="h-6 w-6 text-gold" />
            <h3 className="mt-4 font-serif text-lg font-bold text-paper">
              AI Integration & Automation
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-steel">
              Integrating OpenAI APIs, predictive statistical models, and automated data pipelines into production workflows. Reducing operational manual overhead by up to 80%.
            </p>
          </div>

          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
            <Server className="h-6 w-6 text-gold" />
            <h3 className="mt-4 font-serif text-lg font-bold text-paper">
              Government & Public Sector Systems
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-steel">
              Designing mission-critical dashboards and public-sector software compliant with international humanitarian protocols (FAO/WFP). High reliability under high load.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-signal-blue hover:text-signal-blue-hover"
          >
            Explore All 6 Detailed Services & Retainers
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Closing Call To Action Block */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="schematic-bracket border border-gold/40 bg-gradient-to-r from-obsidian-raised via-obsidian-raised to-obsidian p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
              READY_TO_BUILD
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-paper sm:text-4xl">
              Turn cold traffic into booked consultations.
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm">
              Work directly with a founder-led studio that delivers clean code, complete documentation, and zero agency overhead.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition-colors hover:bg-signal-blue-hover"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-gold hover:underline"
              >
                Or message directly on WhatsApp (+92 314 1030223)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
