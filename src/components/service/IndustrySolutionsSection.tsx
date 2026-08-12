import { Building2, Activity, Truck, LineChart, GraduationCap, Home, ShoppingBag, ShieldCheck, Briefcase } from 'lucide-react';

export default function IndustrySolutionsSection() {
  const industries = [
    {
      icon: Activity,
      name: 'Healthcare & AgriTech',
      problem: 'Complex compliance standards, thermal telemetry sync, and strict data privacy requirements.',
      solution: 'Custom tracking dashboards, automated sensor anomaly alerts, and secure HIPAA-compliant data pipelines.',
      accent: '#4F46E5', // Indigo
    },
    {
      icon: Truck,
      name: 'Logistics & Supply Chain',
      problem: 'Intermittent network connectivity along transit routes and delayed inventory visibility.',
      solution: 'Offline-capable mobile apps, automated CSV data exports, and real-time shipment monitoring portals.',
      accent: '#0D9488', // Teal
    },
    {
      icon: LineChart,
      name: 'FinTech & Quantitative Systems',
      problem: 'High-frequency market tick volume causing thread blocking and delayed signal inference.',
      solution: 'Event-driven probabilistic engines (Bayesian HMM) delivering sub-millisecond inference and risk calculation.',
      accent: '#2563EB', // Blue
    },
    {
      icon: Home,
      name: 'Real Estate & PropTech',
      problem: 'Fragmented property listings, slow search interfaces, and manual lead qualification workflows.',
      solution: 'Fast Next.js App Router property search portals, interactive map filters, and automated CRM lead capture.',
      accent: '#7C3AED', // Violet
    },
    {
      icon: ShoppingBag,
      name: 'Retail & B2B SaaS',
      problem: 'Monolithic legacy software crashing during seasonal traffic spikes and sales events.',
      solution: 'Serverless cloud architecture with multi-tenant authentication and instant auto-scaling.',
      accent: '#D97706', // Amber
    },
    {
      icon: ShieldCheck,
      name: 'Public Sector & Government',
      problem: 'Disparate district field survey metrics delaying emergency response during regional crises.',
      solution: 'FAO/WFP-aligned monitoring platforms with district gap alerts and executive decision dashboards.',
      accent: '#4F46E5', // Indigo
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      problem: 'Manual document intake, invoice parsing bottlenecks, and inefficient client communication.',
      solution: 'Secure client portals, automated PDF document parsing, and integrated electronic signatures.',
      accent: '#0D9488', // Teal
    },
    {
      icon: GraduationCap,
      name: 'Education & EdTech',
      problem: 'Static learning management tools failing to engage students across multi-device viewports.',
      solution: 'Interactive learning platforms built with real-time feedback loops and student performance tracking.',
      accent: '#2563EB', // Blue
    },
  ];

  return (
    <div className="rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-100/90 border border-slate-200 p-8 sm:p-12 space-y-10 shadow-[0_10px_40px_-15px_rgba(15,23,42,0.06)] relative overflow-hidden">
      {/* Background Soft Executive Accent Mesh & Grid */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-indigo-500/8 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 executive-grid-pattern-light opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="space-y-3 border-b border-slate-200/80 pb-6 relative z-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-700 font-bold uppercase tracking-widest bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-200/80 shadow-xs">
          <Building2 className="h-4 w-4 text-indigo-600" />
          <span>INDUSTRY_SPECIFIC_PROBLEM_SOLVING</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
          Tailored Industry Solutions
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl font-medium">
          We engineer custom software tailored to the exact regulatory, security, and operational constraints of specialized industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-slate-200/90 p-6 space-y-4 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity opacity-80 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${ind.accent}, ${ind.accent}70)` }}
              />

              <div className="space-y-3.5">
                <div
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold px-3 py-1.5 rounded-lg border shadow-2xs"
                  style={{
                    backgroundColor: `${ind.accent}12`,
                    borderColor: `${ind.accent}28`,
                    color: ind.accent,
                  }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{ind.name}</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <strong className="text-slate-900 block font-mono text-[11px] mb-1.5 uppercase tracking-wide">
                      Industry Challenge:
                    </strong>
                    <p className="text-slate-600 leading-relaxed font-normal">{ind.problem}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <strong className="block font-mono text-[11px] mb-1.5 uppercase tracking-wide" style={{ color: ind.accent }}>
                      Engineered Solution:
                    </strong>
                    <p className="text-slate-900 leading-relaxed font-medium">
                      {ind.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
