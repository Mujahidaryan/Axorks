import { Building2, Activity, Truck, LineChart, GraduationCap, Home, ShoppingBag, ShieldCheck, Briefcase } from 'lucide-react';

export default function IndustrySolutionsSection() {
  const industries = [
    {
      icon: Activity,
      name: 'Healthcare & AgriTech',
      problem: 'Complex compliance standards, thermal telemetry sync, and strict data privacy requirements.',
      solution: 'Custom tracking dashboards, automated sensor anomaly alerts, and secure HIPAA-compliant data pipelines.',
      accent: '#0ea5e9',
    },
    {
      icon: Truck,
      name: 'Logistics & Supply Chain',
      problem: 'Intermittent network connectivity along transit routes and delayed inventory visibility.',
      solution: 'Offline-capable mobile apps, automated CSV data exports, and real-time shipment monitoring portals.',
      accent: '#6366f1',
    },
    {
      icon: LineChart,
      name: 'FinTech & Quantitative Systems',
      problem: 'High-frequency market tick volume causing thread blocking and delayed signal inference.',
      solution: 'Event-driven probabilistic engines (Bayesian HMM) delivering sub-millisecond inference and risk calculation.',
      accent: '#0ea5e9',
    },
    {
      icon: Home,
      name: 'Real Estate & PropTech',
      problem: 'Fragmented property listings, slow search interfaces, and manual lead qualification workflows.',
      solution: 'Fast Next.js App Router property search portals, interactive map filters, and automated CRM lead capture.',
      accent: '#8b5cf6',
    },
    {
      icon: ShoppingBag,
      name: 'Retail & B2B SaaS',
      problem: 'Monolithic legacy software crashing during seasonal traffic spikes and sales events.',
      solution: 'Serverless cloud architecture with multi-tenant authentication and instant auto-scaling.',
      accent: '#14b8a6',
    },
    {
      icon: ShieldCheck,
      name: 'Public Sector & Government',
      problem: 'Disparate district field survey metrics delaying emergency response during regional crises.',
      solution: 'FAO/WFP-aligned monitoring platforms with district gap alerts and executive decision dashboards.',
      accent: '#6366f1',
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      problem: 'Manual document intake, invoice parsing bottlenecks, and inefficient client communication.',
      solution: 'Secure client portals, automated PDF document parsing, and integrated electronic signatures.',
      accent: '#0ea5e9',
    },
    {
      icon: GraduationCap,
      name: 'Education & EdTech',
      problem: 'Static learning management tools failing to engage students across multi-device viewports.',
      solution: 'Interactive learning platforms built with real-time feedback loops and student performance tracking.',
      accent: '#8b5cf6',
    },
  ];

  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 sm:p-10 space-y-8 shadow-sm">
      {/* Header */}
      <div className="space-y-2 border-b border-slate-200 pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-600 uppercase tracking-wider font-bold">
          <Building2 className="h-4 w-4" />
          <span>INDUSTRY_SPECIFIC_PROBLEM_SOLVING</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
          Tailored Industry Solutions
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
          We engineer custom software tailored to the exact regulatory, security, and operational constraints of specialized industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white rounded-xl border border-slate-200 p-5 space-y-4 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-slate-300"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-4 right-4 h-0.5 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: ind.accent }}
              />

              <div className="space-y-3">
                <div
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold"
                  style={{ color: ind.accent }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{ind.name}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <strong className="text-slate-900 block font-mono text-[11px] mb-1 uppercase tracking-wide">
                      Industry Challenge:
                    </strong>
                    <p className="text-slate-600 leading-relaxed">{ind.problem}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <strong className="block font-mono text-[11px] mb-1 uppercase tracking-wide" style={{ color: ind.accent }}>
                      Engineered Solution:
                    </strong>
                    <p className="text-slate-800 leading-relaxed font-medium">
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
