import { CheckCircle2, XCircle, Scale } from 'lucide-react';

export default function AgencyComparisonTable() {
  const comparisonRows = [
    {
      feature: 'Solution Architecture',
      agency: 'Template-driven or bloated page-builders',
      axorks: 'Custom engineered Next.js & TypeScript codebases',
    },
    {
      feature: 'Strategic Focus',
      agency: 'Feature checklist focused',
      axorks: 'Business outcome & ROI focused',
    },
    {
      feature: 'System Scalability',
      agency: 'Limited scalability & fragile plugins',
      axorks: 'Serverless architecture built for high growth',
    },
    {
      feature: 'Documentation & Handoff',
      agency: 'Minimal or missing documentation',
      axorks: 'Comprehensive API specs & complete GitHub handover',
    },
    {
      feature: 'Team Collaboration',
      agency: 'Handed off to junior account reps',
      axorks: 'Direct access to Chief Architect M. Mujahid',
    },
    {
      feature: 'Engineering Stack',
      agency: 'Legacy PHP or heavy monolith frameworks',
      axorks: 'Next.js App Router, React, Tailwind & PostgreSQL',
    },
    {
      feature: 'Payment & Risk Model',
      agency: 'Demands large upfront payment before work',
      axorks: 'Transparent 40/40/20 milestone-based billing',
    },
    {
      feature: 'Long-Term Support',
      agency: 'Transactional delivery and quick handoff',
      axorks: 'Long-term technical partner with SLA retainers',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-obsidian-border pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
          <Scale className="h-4 w-4" />
          <span>FACTUAL_COMPARISON_MATRIX</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
          Traditional Agency vs Axorks Engineering
        </h2>
        <p className="text-xs text-steel leading-relaxed max-w-3xl">
          Factual architectural comparison highlighting how our direct-access engineering approach differs from traditional software vendors.
        </p>
      </div>

      <div className="overflow-x-auto rounded border border-obsidian-border bg-obsidian-raised">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-obsidian-border bg-obsidian font-mono text-paper">
              <th className="p-4 font-bold uppercase tracking-wider">Dimension</th>
              <th className="p-4 font-bold text-steel uppercase tracking-wider">Traditional Agency</th>
              <th className="p-4 font-bold text-gold uppercase tracking-wider bg-gold/10">Axorks Software Studio</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-obsidian-border/60 text-steel">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-obsidian/50 transition-colors">
                <td className="p-4 font-mono font-semibold text-paper shrink-0">
                  {row.feature}
                </td>
                <td className="p-4 flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-rose-500/80 shrink-0 mt-0.5" />
                  <span>{row.agency}</span>
                </td>
                <td className="p-4 bg-gold/5 font-medium text-paper">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{row.axorks}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
