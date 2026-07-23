import { Metadata } from 'next';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';
import { ShieldCheck, Info } from 'lucide-react';
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
    canonical: `${SITE_URL}/case-studies`,
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
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-gold mb-3">
            <ShieldCheck className="h-4 w-4" />
            <span>Technical Engineering Portfolio & Case Studies</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Representative Engineering Work
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Technical case studies detailing 6 production systems engineered across agri-tech telemetry, public-sector humanitarian platforms, clinical operations, and quantitative AI systems.
          </p>
        </div>

        {/* NDA Disclaimer Block */}
        <div className="mt-8 schematic-bracket border border-gold/30 bg-obsidian-raised p-6 flex items-start gap-3 text-xs text-steel">
          <Info className="h-5 w-5 text-gold shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-mono text-gold uppercase tracking-wider block">
              CONFIDENTIALITY_&_ATTRIBUTION_DISCLAIMER
            </strong>
            <p className="leading-relaxed">
              Select systems presented below were engineered by our founder and technical team in a senior engineering/subcontracting capacity for client partner studios. Specific client names, exact proprietary production endpoints, and confidential financial metrics are withheld per non-disclosure agreements (NDAs).
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SchematicCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
