import { Layers, ArrowRight } from 'lucide-react';

export default function ServiceProcess() {
  const phases = [
    {
      num: '01',
      title: 'Discovery Workshop',
      desc: 'Direct consultation with Chief Architect M. Mujahid to clarify product vision, business metrics, target user flows, and technical scope.',
    },
    {
      num: '02',
      title: 'Requirements & Planning',
      desc: 'Translating business goals into an explicit technical specification document detailing database schemas, API routes, and milestone deliverables.',
    },
    {
      num: '03',
      title: 'Architecture & UX',
      desc: 'Designing serverless cloud infrastructure, data modeling, role permissions, and conversion-focused wireframes.',
    },
    {
      num: '04',
      title: 'Bespoke UI Design',
      desc: 'Creating high-fidelity dark-mode schematics, component design systems, and responsive interfaces matching your exact brand identity.',
    },
    {
      num: '05',
      title: 'Full-Stack Development',
      desc: 'Clean code execution using Next.js App Router, TypeScript, and serverless Postgres with continuous progress updates.',
    },
    {
      num: '06',
      title: 'Testing & QA',
      desc: 'Rigorous cross-device testing, device viewport audits, security route checks, and performance optimization.',
    },
    {
      num: '07',
      title: 'Production Deployment',
      desc: 'Zero-downtime deployment to Vercel/Neon infrastructure, DNS configuration, SSL setup, and environment variable security.',
    },
    {
      num: '08',
      title: 'Verification & Handoff',
      desc: 'Comprehensive post-launch verification, full GitHub source code handover, and environment documentation.',
    },
    {
      num: '09',
      title: 'Continuous Monitoring',
      desc: 'Real-time uptime tracking, error log inspection, and proactive database query performance tuning.',
    },
    {
      num: '10',
      title: 'Long-Term Support',
      desc: 'Monthly retainer options for continuous feature enhancements, security patches, and architectural evolution.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-obsidian-border pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
          <Layers className="h-4 w-4" />
          <span>ENGINEERING_EXECUTION_WORKFLOW</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
          Our 10-Phase Visual Process
        </h2>
        <p className="text-xs text-steel leading-relaxed max-w-3xl">
          A disciplined, transparent engineering pipeline designed for predictability, zero technical debt, and rapid time-to-market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {phases.map((p, idx) => (
          <div
            key={idx}
            className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-5 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono">
                <span className="text-gold font-bold text-base">{p.num}</span>
                {idx < phases.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-steel/40 hidden lg:block" />
                )}
              </div>
              <h3 className="font-serif text-sm font-bold text-paper">
                {p.title}
              </h3>
              <p className="text-[11px] text-steel leading-relaxed">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
