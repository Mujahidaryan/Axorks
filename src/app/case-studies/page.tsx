import { Metadata } from 'next';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import { ShieldCheck, Info, Award, Cpu, Database, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Representative Engineering Work | Axorks Software Studio',
  description:
    'Deep technical case studies detailing 6 production systems engineered across agri-tech telemetry, public sector humanitarian platforms, and quantitative AI systems.',
  openGraph: {
    title: 'Representative Engineering Work & Case Studies | Axorks',
    description:
      'Technical case studies detailing 6 production systems engineered across agri-tech telemetry, public sector humanitarian platforms, and quantitative AI systems.',
    url: `${SITE_URL}/case-studies`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Representative Engineering Work & Case Studies | Axorks',
    description: 'Technical case studies detailing 6 production systems engineered by Axorks.',
  },
  alternates: {
    canonical: '/case-studies',
  },
};

export default function CaseStudiesPage() {
  const projects: ProjectData[] = [
    {
      id: 'agrotrace',
      sysId: 'SYS_01 — AGROTRACE',
      name: 'AgroTrace',
      category: 'AgriTech · FWO Grid & Cold-Chain Telemetry',
      description:
        'National-scale agricultural supply chain tracking platform connected to FWO grid telemetry — monitoring thermal compliance logs, cold-chain sensor status, export compliance, and predictive logistics delay analytics across international shipping routes.',
      problem:
        'Agricultural exporters lacked real-time visibility into temperature anomalies and logistics delays during international export transit, risking cargo spoilage.',
      built:
        'Developed a high-throughput telemetry dashboard integrated with FWO grid telemetry, automated thermal sensor alerts, live geospatial mapping, and export compliance validation.',
      challenges:
        'Ingesting continuous sensor data streams during intermittent network connectivity across maritime and road transport routes.',
      outcome:
        'Achieved sub-second alert dispatch for thermal threshold breaches and automated logistics compliance verification.',
      stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'FWO Telemetry', 'REST APIs', 'Vercel'],
      status: 'Representative Engineering Work',
      stats: [
        { label: 'System Domain', value: 'AgriTech Telemetry' },
        { label: 'Infrastructure', value: 'FWO Grid Sync' },
      ],
    },
    {
      id: 'mediverse',
      sysId: 'SYS_02 — MEDIVERSE',
      name: 'MediVerse',
      category: 'Healthcare · Telehealth Platform',
      description:
        'Global healthcare telehealth and clinic management platform connecting patients with verified medical specialists across multi-specialty clinical workflows.',
      problem:
        'Patients experienced long waiting queues and fragmented booking systems for specialist consultations and home visit requests.',
      built:
        'Built a 3-role authentication portal (Patient, Doctor, Assistant) featuring real-time appointment scheduling, bilingual UI rendering, and virtual consultation management.',
      challenges:
        'Enforcing strict HIPAA-compliant role-based authorization hierarchies while maintaining fast client-side state hydration.',
      outcome:
        'Streamlined doctor-patient scheduling workflows and reduced patient check-in administrative overhead.',
      stack: ['Next.js 15', 'TypeScript', 'NextAuth.js', 'Tailwind CSS', 'Vercel'],
      status: 'Representative Engineering Work',
      stats: [
        { label: 'System Domain', value: 'Telehealth Platform' },
        { label: 'Role Security', value: '3-Role RBAC' },
      ],
    },
    {
      id: 'sindh-food-security',
      sysId: 'SYS_03 — SINDH_FOOD_SECURITY_DASHBOARD',
      name: 'Sindh Food Security Dashboard',
      category: 'Government & Humanitarian · Public Sector',
      description:
        'Government-grade humanitarian food security monitoring platform covering regional population metrics across multiple districts under international FAO/WFP operational standards.',
      problem:
        'District survey teams relied on delayed manual reporting, hindering emergency response during regional crop vulnerabilities.',
      built:
        'Engineered an integrated IPC Phase Classification monitoring platform featuring district gap analysis, emergency risk alerts, automated crop telemetry, and field CSV export.',
      challenges:
        'Standardizing disparate district field survey metrics into a unified, executive-level decision dashboard under strict compliance rules.',
      outcome:
        'Provided humanitarian planners with real-time district gap analysis and automated alert dispatch.',
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
      problem:
        'Traditional rule-based indicators failed during volatile structural market regime shifts and liquidity spikes.',
      built:
        'Designed an event-driven system with NATS JetStream delivering sub-2.5ms probabilistic inference on live tick microstructure data.',
      challenges:
        'Maintaining sub-3ms inference latency under high-frequency market tick volume without blocking analytical execution threads.',
      outcome:
        'Delivered real-time regime classification with 90% live confidence intervals and automated CVaR exposure gating.',
      stack: ['Python', 'Bayesian HMM', 'React/TS', 'NATS JetStream', 'Go', 'Vercel'],
      status: 'Representative Engineering Work',
      stats: [
        { label: 'Inference Speed', value: 'Sub-2.5ms' },
        { label: 'Statistical Engine', value: 'Bayesian HMM' },
      ],
    },
    {
      id: 'hms',
      sysId: 'SYS_05 — HOSPITAL_MANAGEMENT_SYSTEM',
      name: 'Hospital Management System',
      category: 'Healthcare Enterprise · Clinical Operations',
      description:
        'Integrated clinical operations software managing patient EHR records, multi-department appointment scheduling, billing workflows, and pharmacy inventory.',
      problem:
        'Clinic staff suffered administrative bottlenecks from disconnected paper record keeping and slow billing clearance.',
      built:
        'Implemented a unified medical dashboard with automated inventory tracking, prescription generation, and role-based staff permissions.',
      challenges:
        'Consolidating complex billing calculation workflows with multi-department inventory updates in a single atomic database transaction.',
      outcome:
        'Eliminated billing clearance delays and provided real-time pharmacy inventory tracking.',
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
      status: 'Representative Engineering Work',
      stats: [
        { label: 'System Domain', value: 'Clinical EHR' },
        { label: 'Access Control', value: 'Multi-Role' },
      ],
    },
    {
      id: 'veritas',
      sysId: 'SYS_06 — VERITAS',
      name: 'Veritas',
      category: 'Enterprise & Security · Cryptographic Audit Engine',
      description:
        'High-security document and transaction integrity verification platform designed for legal and enterprise audit trails.',
      problem:
        'Organizations lacked immutable verification logs to confirm file integrity and audit authorization timestamps.',
      built:
        'Engineered a tamper-evident cryptographic hash verification platform with instant audit record lookup and permissioned access control.',
      challenges:
        'Executing sub-50ms cryptographic SHA-256 hash validation across large file batches on serverless functions.',
      outcome:
        'Provided legal and enterprise teams with instant, tamper-evident audit record verification.',
      stack: ['Next.js', 'TypeScript', 'Node.js', 'Crypto API', 'PostgreSQL'],
      isGovernment: true,
      status: 'Government & Enterprise',
      stats: [
        { label: 'Verification Speed', value: 'Sub-50ms' },
        { label: 'Audit Security', value: 'SHA-256 Hash' },
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-gold mb-3">
            <ShieldCheck className="h-4 w-4" />
            <span>Technical Engineering Portfolio &amp; Case Studies</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Representative Engineering Work
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Technical case studies detailing 6 production systems engineered across agri-tech telemetry, public-sector humanitarian platforms, clinical operations, and quantitative AI systems.
          </p>
        </div>

        {/* NDA Disclaimer Block */}
        <div className="schematic-bracket border border-gold/30 bg-obsidian-raised p-6 flex items-start gap-3 text-xs text-steel rounded-2xl">
          <Info className="h-5 w-5 text-gold shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-mono text-gold uppercase tracking-wider block">
              CONFIDENTIALITY_&amp;_ATTRIBUTION_DISCLAIMER
            </strong>
            <p className="leading-relaxed">
              Select systems presented below were engineered by our founder and technical team in a senior engineering/subcontracting capacity for client partner studios. Specific client names, exact proprietary production endpoints, and confidential financial metrics are withheld per non-disclosure agreements (NDAs).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SchematicCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Full-Width Light Section: Proven Performance & Delivery Standards (40%+ light ratio) */}
      <section className="w-full bg-sys-white py-16 sm:py-20 border-y border-sys-ink/10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-sys-blue">
                [ ARCHITECTURAL_DELIVERY_GUARANTEE ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-sys-ink">
                Built for High Reliability & Enterprise Compliance
              </h2>
              <p className="text-sm text-sys-ink-muted leading-relaxed">
                Every project follows strict technical specifications, automated testing pipelines, and complete source code ownership handoff.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue font-bold">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">Sub-Second Latency</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  Optimized database queries and serverless edge functions delivering real-time telemetry and instant user interactions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue font-bold">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">Zero Data Loss SLA</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  PostgreSQL atomic transactions, automated backups, and encrypted environment variables protecting critical client data.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue font-bold">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">Complete IP Transfer</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  100% source code assignment and complete GitHub repository handoff upon project delivery completion.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="rounded-2xl border border-sys-ink/10 bg-sys-light p-6 space-y-3 shadow-sm hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-sys-blue/40">
                <div className="h-10 w-10 rounded-xl bg-sys-blue/10 flex items-center justify-center text-sys-blue font-bold">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-sys-ink">24-Hour SLA Support</h3>
                <p className="text-xs text-sys-ink-muted leading-relaxed">
                  Direct communication with Chief Systems Architect M. Mujahid and senior developers on business days.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sys-blue px-8 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-sys-blue-hover hover:shadow-lg hover:shadow-sys-blue/20"
            >
              Discuss Your Project Architecture
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
