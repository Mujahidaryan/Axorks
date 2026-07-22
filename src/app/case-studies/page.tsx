import { Metadata } from 'next';
import SchematicCard, { ProjectData } from '@/components/SchematicCard';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies | Axorks Software Studio',
  description:
    'Exploration of 6 live shipped production systems, including two government-grade public sector platforms.',
};

export default function CaseStudiesPage() {
  const projects: ProjectData[] = [
    {
      id: 'agrotrace',
      sysId: 'SYS_01 — AGROTRACE',
      name: 'AgroTrace',
      category: 'AgriTech · Supply Chain Intelligence',
      description:
        'Real-time agricultural supply chain tracking across Pakistan, monitoring cold chain compliance, shipment telemetry, export metrics, and predictive delay analytics.',
      problem:
        'Agricultural exporters lacked real-time visibility into temperature anomalies and logistics delays during international export transit.',
      built:
        'Developed end-to-end telemetry dashboard with live geospatial mapping, cold chain sensor integration, and export compliance validation.',
      stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Vercel'],
      status: 'Live Production',
      liveUrl: 'https://agrotrace-n65b.vercel.app',
      stats: [
        { label: 'Active Shipments', value: '3,400+' },
        { label: 'Export Value Monitored', value: '$47M' },
      ],
    },
    {
      id: 'mediverse',
      sysId: 'SYS_02 — MEDIVERSE',
      name: 'MediVerse',
      category: 'Healthcare · SDG 3 Platform',
      description:
        'Global healthcare telehealth and clinic management platform connecting patients with verified medical specialists across 8+ specializations.',
      problem:
        'Patients faced long waiting queues and fragmented booking systems for specialist consultations and home visit requests.',
      built:
        'Built a 3-role authentication portal (Patient, Doctor, Assistant) with real-time appointment scheduling, bilingual interface, and virtual consults.',
      stack: ['Next.js 15', 'TypeScript', 'NextAuth.js', 'Tailwind CSS', 'Vercel'],
      status: 'Live Production',
      liveUrl: 'https://mediverse-eta.vercel.app',
      stats: [
        { label: 'Specializations', value: '8+ Active' },
        { label: 'UN Alignment', value: 'SDG 3' },
      ],
    },
    {
      id: 'sindh-food-security',
      sysId: 'SYS_03 — SINDH_FOOD_SECURITY_DASHBOARD',
      name: 'Sindh Food Security Dashboard',
      category: 'Government & Humanitarian · Public Sector',
      description:
        'Government-grade humanitarian food security monitoring platform covering 25.45M population across 8 Sindh districts. Aligned with FAO/WFP operational standards.',
      problem:
        'District survey teams relied on delayed manual reporting, hindering emergency response during regional crop vulnerabilities.',
      built:
        'Engineered an integrated IPC Phase Classification monitoring platform featuring district gap analysis, emergency risk alerts, and field CSV export.',
      stack: ['Next.js 14', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Vercel'],
      isGovernment: true,
      status: 'Government Live System',
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
      problem:
        'Traditional trading strategies failed during fast structural market regime shifts and liquidity spikes.',
      built:
        'Designed an event-driven system with NATS JetStream delivering sub-2.5ms probabilistic inference on live tick microstructure data.',
      stack: ['Python', 'Bayesian HMM', 'React/TS', 'NATS JetStream', 'Go', 'Vercel'],
      status: 'Live Engine',
      liveUrl: 'https://impi-os-dashboard-cncn.vercel.app/',
      stats: [
        { label: 'Inference Speed', value: '< 2.5ms' },
        { label: 'Confidence Interval', value: '90% Live' },
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
        'Clinic staff suffered administrative bottlenecks from disconnected record keeping and slow billing clearance.',
      built:
        'Implemented a unified medical dashboard with automated inventory tracking, prescription generation, and role-based staff permissions.',
      stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
      status: 'Deployed In Production',
      stats: [
        { label: 'Department Access', value: 'Multi-Role' },
        { label: 'Billing Speed', value: 'Instant' },
      ],
    },
    {
      id: 'veritas',
      sysId: 'SYS_06 — VERITAS',
      name: 'Veritas',
      category: 'Enterprise & Security · Audit Engine',
      description:
        'High-security document and transaction integrity verification platform designed for legal and enterprise audit trails.',
      problem:
        'Organizations lacked immutable verification logs to confirm file integrity and audit authorization timestamps.',
      built:
        'Engineered a tamper-evident cryptographic hash verification platform with instant audit record lookup and permissioned access control.',
      stack: ['Next.js', 'TypeScript', 'Node.js', 'Crypto API', 'PostgreSQL'],
      isGovernment: true,
      status: 'Government & Enterprise Live',
      stats: [
        { label: 'Audit Speed', value: '< 50ms' },
        { label: 'Integrity Rating', value: '100% Cryptographic' },
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>2 Government-Grade Systems Flagged</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Shipped Systems & Technical Case Studies
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Every project below represents a live, production system engineered for real users. Formatted as technical schematics with verified metrics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SchematicCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
