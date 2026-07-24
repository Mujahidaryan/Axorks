import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Cpu, Code2, Server, Users, Smartphone, Bot, Layers, Info } from 'lucide-react';
import GoldSwooshLine from '@/components/GoldSwooshLine';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';
import { SITE_URL, SITE_NAME } from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Axorks | Founder-Led Software Studio & Systems Engineering',
  description:
    'High-stakes software studio shipping enterprise web platforms, AI integrations, mobile applications, FWO grid systems, and government-grade public sector solutions.',
  openGraph: {
    title: 'Axorks | Founder-Led Software Studio & Systems Engineering',
    description:
      'High-stakes software studio shipping enterprise web platforms, AI integrations, mobile applications, and public sector solutions.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axorks | Founder-Led Software Studio',
    description: 'High-stakes software studio shipping enterprise web platforms and AI integrations.',
  },
  alternates: {
    canonical: SITE_URL,
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
        'National-scale supply chain tracking platform connected to FWO grid telemetry — monitoring thermal compliance logs, cold-chain sensor status, export compliance, and predictive logistics delay analytics across international shipping routes.',
      problem: 'Agricultural exporters lacked real-time visibility into temperature anomalies and logistics delays during transit.',
      built: 'High-throughput tracking portal integrated with FWO grid telemetry, automated thermal sensor logs, and real-time export validation.',
      challenges: 'Ingesting continuous sensor data streams during intermittent network connectivity across shipping routes.',
      outcome: 'Achieved sub-second alert dispatch for thermal threshold breaches and automated compliance validation.',
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
        'Government-grade humanitarian food security monitoring platform covering regional population metrics across multiple districts under international FAO/WFP operational standards.',
      problem: 'District survey teams relied on delayed manual reporting, hindering emergency response during regional crop vulnerabilities.',
      built: 'IPC Phase Classification monitoring platform with real-time district gap alerts, automated crop telemetry, and field CSV export.',
      challenges: 'Standardizing disparate district field survey metrics into a unified executive-level decision dashboard.',
      outcome: 'Provided humanitarian planners with real-time district gap analysis and automated alert dispatch.',
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
        'Institutional Probabilistic Market Intelligence OS. Bayesian Hidden Markov regime detection, recursive signal fusion with 90% confidence intervals, and CVaR-gated risk engine.',
      problem: 'Rule-based indicators failed during volatile market regime shifts.',
      built: 'Event-driven probabilistic engine delivering sub-2.5ms inference on live tick microstructure data.',
      challenges: 'Maintaining sub-3ms inference latency under high-frequency market tick volume without thread blocking.',
      outcome: 'Delivered real-time regime classification with 90% live confidence intervals and automated CVaR gating.',
      stack: ['Python', 'Bayesian HMM', 'React/TS', 'NATS JetStream', 'Vercel'],
      status: 'Representative Engineering Work',
      stats: [
        { label: 'Inference Speed', value: 'Sub-2.5ms' },
        { label: 'Statistical Engine', value: 'Bayesian HMM' },
      ],
    },
  ];

  return (
    <div className="space-y-16 pb-16 pt-8 sm:space-y-24 sm:pb-24 sm:pt-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-gold">
              <ShieldCheck className="h-4 w-4" />
              <span>Full-Stack Engineering, AI & Mobile Systems Studio</span>
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-paper sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              Architecting high-stakes software.{' '}
              <span className="italic text-gold">Built to scale.</span>
            </h1>

            <p className="text-base leading-relaxed text-steel sm:text-lg">
              Axorks is an elite software studio engineered by Founder & Chief Architect <strong className="text-paper">Muhammad Mujahid</strong> and backed by specialized teams in <strong className="text-paper">Full-Stack Web, AI Systems, Mobile Engineering, and UI/UX Design</strong>. We ship mission-critical web platforms, mobile apps, and <strong className="text-gold">government-grade public sector solutions (FWO grid & FAO aligned)</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded bg-signal-blue px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal-blue-hover hover:shadow-lg hover:shadow-signal-blue/25"
              >
                Schedule Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/case-studies"
                className="flex items-center gap-2 rounded border border-obsidian-border bg-obsidian-raised px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-steel transition-colors hover:border-gold/40 hover:text-paper"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>

          {/* Right Hero Schematic Badge Box */}
          <div className="w-full lg:w-[400px]">
            <div className="schematic-bracket border border-gold/40 bg-obsidian-raised p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-3 font-mono text-xs text-gold">
                <span>STUDIO_CAPABILITY_MATRIX</span>
                <span className="text-emerald-400">STATUS_ACTIVE</span>
              </div>
              <ul className="mt-4 space-y-3.5 font-mono text-xs text-steel">
                <li className="flex items-center justify-between">
                  <span>Founder & Chief Architect:</span>
                  <span className="font-bold text-paper">M. Mujahid</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Production Systems Shipped:</span>
                  <span className="font-bold text-gold">6+ Live Applications</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Specialized Divisions:</span>
                  <span className="font-bold text-paper">Web, AI, Mobile, UI/UX</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Public Sector Authority:</span>
                  <span className="font-bold text-gold">FWO Grid & FAO Standards</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Core Tech Stack:</span>
                  <span className="text-paper">Next.js / Node / Postgres</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Animated Gold Swoosh Divider Line */}
      <GoldSwooshLine />

      {/* Proof Strip (Monospace Row) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-y border-obsidian-border/80 bg-obsidian-raised/60 py-4.5">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <span className="font-mono text-xs font-semibold uppercase text-gold shrink-0">
              REPRESENTATIVE ENGINEERING DOMAINS:
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-steel">
              <Link href="/case-studies" className="text-gold font-medium hover:underline">
                AgriTech Telemetry (FWO Grid)
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                Telehealth Platforms
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="text-gold hover:underline font-semibold">
                Sindh Food Security (FAO/WFP) ★
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                Quant Probabilistic AI
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                Clinical EHR Systems
              </Link>
              <span className="text-obsidian-border">|</span>
              <Link href="/case-studies" className="hover:text-paper transition-colors">
                Cryptographic Audit Engines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-obsidian-border pb-4 gap-4">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-wider">
              ENGINEERING_CASE_STUDIES
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

        {/* NDA Disclaimer Note */}
        <div className="mt-6 schematic-bracket border border-gold/30 bg-obsidian-raised p-4 flex items-start gap-3 text-xs text-steel">
          <Info className="h-4 w-4 text-gold shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Select systems were engineered by our founder and technical team in a senior engineering capacity for client partner studios. Client identities and proprietary metrics are withheld per non-disclosure agreements (NDAs).
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <SchematicCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Dedicated Department Structure Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-8 sm:p-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
                <Users className="h-4 w-4" />
                <span>ORGANIZATIONAL_STRUCTURE_&_DEPARTMENTS</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
                Specialized Engineering & Design Teams
              </h2>
              <p className="text-xs leading-relaxed text-steel sm:text-sm max-w-3xl">
                Axorks operates with dedicated departmental leads working under Founder & Chief Architect Muhammad Mujahid:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
              <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-gold font-bold text-sm">
                  <Code2 className="h-4 w-4" />
                  Web Engineering
                </div>
                <div className="text-steel text-[11px] leading-relaxed">Full-Stack Next.js, Node.js & Postgres Teams</div>
              </div>

              <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-gold font-bold text-sm">
                  <Bot className="h-4 w-4" />
                  AI & ML Team
                </div>
                <div className="text-steel text-[11px] leading-relaxed">OpenAI API, Document Processing & ML Pipelines</div>
              </div>

              <div className="rounded border border-obsidian-border bg-obsidian-raised p-4 space-y-1.5 border-gold/40">
                <div className="flex items-center gap-2 text-gold font-bold text-sm">
                  <Smartphone className="h-4 w-4" />
                  Mobile Engineering
                </div>
                <div className="text-steel text-[11px] leading-relaxed">Cross-Platform iOS & Android Native App Teams</div>
              </div>

              <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-1.5">
                <div className="flex items-center gap-2 text-gold font-bold text-sm">
                  <Layers className="h-4 w-4" />
                  UI/UX Department
                </div>
                <div className="text-steel text-[11px] leading-relaxed">Design System Spec & Dark-Mode Schematics</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Static USD Investment Ranges */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-4">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            SYSTEM_CAPABILITIES_&_INVESTMENT
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-paper">
            Engineered Software Solutions
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 flex flex-col justify-between">
            <div>
              <Code2 className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold text-paper">
                Web Applications & Custom Systems
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                High-throughput full-stack web platforms engineered with Next.js App Router, TypeScript, Node.js, and serverless PostgreSQL databases.
              </p>
            </div>
            <div className="mt-6 border-t border-obsidian-border/60 pt-3 flex items-center justify-between font-mono text-xs">
              <span className="text-steel">Typical Investment:</span>
              <span className="text-gold font-bold">{PRICING.webApplications.shortRange}</span>
            </div>
          </div>

          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 flex flex-col justify-between">
            <div>
              <Bot className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold text-paper">
                AI Integration & Automation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Integrating OpenAI API pipelines, document processing workflows, and custom statistical models directly into live production software.
              </p>
            </div>
            <div className="mt-6 border-t border-obsidian-border/60 pt-3 flex items-center justify-between font-mono text-xs">
              <span className="text-steel">Typical Investment:</span>
              <span className="text-gold font-bold">{PRICING.aiIntegration.shortRange}</span>
            </div>
          </div>

          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 flex flex-col justify-between">
            <div>
              <Server className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold text-paper">
                Government & Enterprise Digital Solutions
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Public sector monitoring systems connected to infrastructure grids (FWO grid & FAO/WFP international humanitarian compliance standards).
              </p>
            </div>
            <div className="mt-6 border-t border-obsidian-border/60 pt-3 flex items-center justify-between font-mono text-xs">
              <span className="text-steel">Typical Investment:</span>
              <span className="text-gold font-bold">{PRICING.governmentEnterprise.shortRange}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call To Action Block */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="schematic-bracket border border-gold/50 bg-gradient-to-r from-obsidian-raised via-obsidian-raised to-obsidian p-8 sm:p-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
              INITIATE_PROJECT_DISCOVERY
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-paper sm:text-4xl">
              Turn complex technical demands into live, production software.
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm">
              Work directly with Founder & Chief Architect Muhammad Mujahid and our dedicated engineering departments.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded bg-signal-blue px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition-colors hover:bg-signal-blue-hover"
              >
                Schedule Consultation
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-gold hover:underline"
              >
                Direct WhatsApp Connect (+92 314 1030223)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
