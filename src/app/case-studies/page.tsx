import { Metadata } from 'next';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <div className="space-y-16">
      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[28rem] w-[28rem] opacity-50" />
          <div className="exec-mesh mesh-amber-dark absolute -right-24 bottom-0 h-[22rem] w-[22rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[32rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs items={[{ label: 'Case Studies' }]} />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>Technical Engineering Portfolio &amp; Case Studies</span>
            </div>
            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Representative{' '}
              <span className="gradient-text-gold">Engineering Work</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
              Technical case studies detailing 6 production systems engineered across agri-tech telemetry, public-sector humanitarian platforms, clinical operations, and quantitative AI systems.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* NDA Disclaimer Block */}
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-obsidian-raised via-obsidian to-obsidian p-6 shadow-obsidian-sm">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="relative flex items-start gap-3 text-xs text-steel">
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
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SchematicCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Full-Width Light Section: Proven Performance & Delivery Standards */}
      <section className="w-full bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100/90 py-16 sm:py-20 border-y border-slate-200 shadow-sm relative overflow-hidden">
        {/* Background Soft Executive Accent Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 font-mono text-xs font-bold text-indigo-700 uppercase tracking-widest">
                <span>ARCHITECTURAL_DELIVERY_GUARANTEE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Built for High Reliability &amp; Enterprise Compliance
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every project follows strict technical specifications, automated testing pipelines, and complete source code ownership handoff.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg hover:border-slate-300 group overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-indigo-600 rounded-r-full" />
                <div className="pl-1 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-700 font-bold">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Sub-Second Latency</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Optimized database queries and serverless edge functions delivering real-time telemetry and instant user interactions.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg hover:border-slate-300 group overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-teal-600 rounded-r-full" />
                <div className="pl-1 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-teal-700 font-bold">
                    <Database className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Zero Data Loss SLA</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    PostgreSQL atomic transactions, automated backups, and encrypted environment variables protecting critical client data.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg hover:border-slate-300 group overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-violet-600 rounded-r-full" />
                <div className="pl-1 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-violet-50 border border-violet-200/60 flex items-center justify-center text-violet-700 font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">Complete IP Transfer</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    100% source code assignment and complete GitHub repository handoff upon project delivery completion.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="relative rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg hover:border-slate-300 group overflow-hidden">
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-amber-600 rounded-r-full" />
                <div className="pl-1 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 font-bold">
                    <Award className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">24-Hour SLA Support</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct communication with Chief Systems Architect M. Mujahid and senior developers on business days.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-2"
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
