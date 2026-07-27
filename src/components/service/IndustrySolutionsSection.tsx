import { Building2, Activity, Truck, LineChart, GraduationCap, Home, ShoppingBag, ShieldCheck, Briefcase } from 'lucide-react';

export default function IndustrySolutionsSection() {
  const industries = [
    {
      icon: Activity,
      name: 'Healthcare & AgriTech',
      problem: 'Complex compliance standards, thermal telemetry sync, and strict data privacy requirements.',
      solution: 'Custom tracking dashboards, automated sensor anomaly alerts, and secure HIPAA-compliant data pipelines.',
    },
    {
      icon: Truck,
      name: 'Logistics & Supply Chain',
      problem: 'Intermittent network connectivity along transit routes and delayed inventory visibility.',
      solution: 'Offline-capable mobile apps, automated CSV data exports, and real-time shipment monitoring portals.',
    },
    {
      icon: LineChart,
      name: 'FinTech & Quantitative Systems',
      problem: 'High-frequency market tick volume causing thread blocking and delayed signal inference.',
      solution: 'Event-driven probabilistic engines (Bayesian HMM) delivering sub-millisecond inference and risk calculation.',
    },
    {
      icon: Home,
      name: 'Real Estate & PropTech',
      problem: 'Fragmented property listings, slow search interfaces, and manual lead qualification workflows.',
      solution: 'Fast Next.js App Router property search portals, interactive map filters, and automated CRM lead capture.',
    },
    {
      icon: ShoppingBag,
      name: 'Retail & B2B SaaS',
      problem: 'Monolithic legacy software crashing during seasonal traffic spikes and sales events.',
      solution: 'Serverless cloud architecture with multi-tenant authentication and instant auto-scaling.',
    },
    {
      icon: ShieldCheck,
      name: 'Public Sector & Government',
      problem: 'Disparate district field survey metrics delaying emergency response during regional crises.',
      solution: 'FAO/WFP-aligned monitoring platforms with district gap alerts and executive decision dashboards.',
    },
    {
      icon: Briefcase,
      name: 'Professional Services',
      problem: 'Manual document intake, invoice parsing bottlenecks, and inefficient client communication.',
      solution: 'Secure client portals, automated PDF document parsing, and integrated electronic signatures.',
    },
    {
      icon: GraduationCap,
      name: 'Education & EdTech',
      problem: 'Static learning management tools failing to engage students across multi-device viewports.',
      solution: 'Interactive learning platforms built with real-time feedback loops and student performance tracking.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-obsidian-border pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
          <Building2 className="h-4 w-4" />
          <span>INDUSTRY_SPECIFIC_PROBLEM_SOLVING</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
          Tailored Industry Solutions
        </h2>
        <p className="text-xs text-steel leading-relaxed max-w-3xl">
          We engineer custom software tailored to the exact regulatory, security, and operational constraints of specialized industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <div
              key={idx}
              className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                  <Icon className="h-4 w-4" />
                  <span>{ind.name}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <strong className="text-paper block font-mono text-[11px] mb-1">
                      Industry Challenge:
                    </strong>
                    <p className="text-steel leading-relaxed">{ind.problem}</p>
                  </div>

                  <div className="pt-2 border-t border-obsidian-border/50">
                    <strong className="text-gold block font-mono text-[11px] mb-1">
                      Engineered Solution:
                    </strong>
                    <p className="text-paper/90 leading-relaxed font-medium">
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
