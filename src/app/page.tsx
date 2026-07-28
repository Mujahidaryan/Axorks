import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Code2, Users, Smartphone, Bot, Info, Layout, FileText, CheckCircle2, PhoneCall, UserCheck } from 'lucide-react';
import GoldSwooshLine from '@/components/GoldSwooshLine';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import InternationalFAQSection from '@/components/InternationalFAQSection';
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
    <div className="space-y-16 pb-16 pt-8 sm:space-y-24 sm:pb-24 sm:pt-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-gold">
              <ShieldCheck className="h-4 w-4" />
              <span>International Software Engineering Company · Global Remote Delivery</span>
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-paper sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              International Software Engineering.{' '}
              <span className="italic text-gold">Built to scale global businesses.</span>
            </h1>

            <p className="text-base leading-relaxed text-steel sm:text-lg">
              Axorks is an independent software engineering company serving ambitious startups, SMEs, and enterprises across the UK, Europe, GCC, North America, and worldwide. Powered by a core team of <strong className="text-paper">7+ senior engineers and designers</strong>, we architect custom web applications, AI automations, and mobile platforms engineered for high performance, enterprise security, and long-term scalability.
            </p>

            {/* Direct Collaboration Line */}
            <div className="rounded border border-obsidian-border bg-obsidian p-3 font-mono text-xs text-steel flex items-center gap-2">
              <UserCheck className="h-4 w-4 text-gold shrink-0" />
              <span>You collaborate directly with Chief Systems Architect Muhammad Mujahid and senior engineers — zero account-manager handoff.</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact?cta=discovery"
                className="group flex items-center gap-2 rounded bg-signal-blue px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal-blue-hover hover:shadow-lg hover:shadow-signal-blue/25"
              >
                Book a Free Discovery Call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/contact?cta=quote"
                className="flex items-center gap-2 rounded border border-gold/40 bg-obsidian-raised px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
              >
                <FileText className="h-4 w-4 text-gold" />
                Get a Quick Quote
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
                  <span>Chief Systems Architect:</span>
                  <span className="font-bold text-paper">M. Mujahid</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Core Team Size:</span>
                  <span className="font-bold text-gold">7+ Senior Engineers</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Track Record:</span>
                  <span className="font-bold text-paper">6+ Shipped Systems · 5 Clients</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Delivery Model:</span>
                  <span className="font-bold text-gold">Remote Global Delivery</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Timezone Overlap:</span>
                  <span className="text-paper font-semibold">US / UK / EU Shifts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Quantifiable Proof Bar */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="schematic-bracket border border-gold/50 bg-obsidian-raised p-4 sm:p-5 shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-wider shrink-0">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>PROVABLE_STUDIO_METRICS:</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-steel">
              <span><strong className="text-paper">6+</strong> Projects Shipped</span>
              <span className="text-obsidian-border">·</span>
              <span><strong className="text-gold">7+</strong> Team Members</span>
              <span className="text-obsidian-border">·</span>
              <span><strong className="text-paper">5</strong> Clients Served</span>
              <span className="text-obsidian-border">·</span>
              <span><strong className="text-gold">2+</strong> International Clients</span>
              <span className="text-obsidian-border">·</span>
              <span><strong className="text-paper">Karachi & Islamabad</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Animated Gold Swoosh Divider Line */}
      <GoldSwooshLine />

      {/* Risk-Reversal Payment Structure Note */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="schematic-bracket border border-gold/40 bg-obsidian-raised p-5 flex items-center justify-between font-mono text-xs text-steel">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
            <div>
              <span className="text-gold font-bold block uppercase">Risk-Reversal Payment Terms:</span>
              <span className="text-paper/90">
                Milestone-based payment: <strong>40% to begin, 40% at midpoint review, 20% on final delivery</strong>. You're never paying for work you haven't seen.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tiers Capabilities Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-obsidian-border pb-4 gap-4">
          <div>
            <span className="font-mono text-xs text-gold uppercase tracking-wider">
              PRODUCTIZED_SERVICES_&_PRICING
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-paper">
              Tiered Software Offerings & Floor Pricing
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
          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 flex flex-col justify-between">
            <div>
              <Layout className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold text-paper">
                Custom Website Development
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Corporate website development built with Next.js App Router, TypeScript, and serverless infrastructure.
              </p>
            </div>
            <div className="mt-6 border-t border-obsidian-border/60 pt-3 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.websiteDevelopment.shortRange}</span>
              </div>
              <Link
                href="/services#website-development"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-1.5 rounded hover:border-gold/40 transition-colors"
              >
                {getTierRangeLabel('websiteDevelopment')}
              </Link>
            </div>
          </div>

          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 flex flex-col justify-between">
            <div>
              <Code2 className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold text-paper">
                Web Applications & Systems
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Full-stack web portals, CRMs, and internal tools with serverless PostgreSQL databases and RBAC permissions.
              </p>
            </div>
            <div className="mt-6 border-t border-obsidian-border/60 pt-3 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.webApplications.shortRange}</span>
              </div>
              <Link
                href="/services#web-applications"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-1.5 rounded hover:border-gold/40 transition-colors"
              >
                {getTierRangeLabel('webApplications')}
              </Link>
            </div>
          </div>

          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 flex flex-col justify-between">
            <div>
              <Bot className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold text-paper">
                AI Solutions & Automation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Integrating OpenAI API pipelines, document processing workflows, and vector embeddings into software.
              </p>
            </div>
            <div className="mt-6 border-t border-obsidian-border/60 pt-3 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.aiIntegration.shortRange}</span>
              </div>
              <Link
                href="/services#ai-integration"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-1.5 rounded hover:border-gold/40 transition-colors"
              >
                {getTierRangeLabel('aiIntegration')}
              </Link>
            </div>
          </div>

          <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 flex flex-col justify-between">
            <div>
              <Smartphone className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-serif text-lg font-bold text-paper">
                Mobile App Development
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Cross-platform iOS and Android mobile applications built for performance and offline data synchronization.
              </p>
            </div>
            <div className="mt-6 border-t border-obsidian-border/60 pt-3 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-steel">Floor Pricing:</span>
                <span className="text-gold font-bold">{PRICING.mobileAppDevelopment.shortRange}</span>
              </div>
              <Link
                href="/services#mobile-app-development"
                className="flex items-center justify-center gap-1 text-[11px] text-paper bg-obsidian border border-obsidian-border py-1.5 rounded hover:border-gold/40 transition-colors"
              >
                {getTierRangeLabel('mobileAppDevelopment')}
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
        <div className="mt-6 schematic-bracket border border-gold/30 bg-obsidian-raised p-4 flex items-start gap-3 text-xs text-steel">
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

      {/* International Client Objection Handling FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <InternationalFAQSection />
      </section>
    </div>
  );
}
