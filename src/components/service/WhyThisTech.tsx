import { Cpu, CheckCircle2 } from 'lucide-react';

export interface TechChoice {
  name: string;
  category: string;
  whySelected: string;
  businessOutcome: string;
}

interface WhyThisTechProps {
  heading?: string;
  subheading?: string;
  techChoices: TechChoice[];
}

export default function WhyThisTech({
  heading = 'Why We Select This Technology Stack',
  subheading = 'We never list technologies as marketing jargon. Every framework, database, and API pipeline is selected to deliver speed, security, and quantifiable business ROI.',
  techChoices,
}: WhyThisTechProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-2 border-b border-obsidian-border pb-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-gold uppercase tracking-wider">
          <Cpu className="h-4 w-4" />
          <span>BUSINESS_FIRST_TECH_SELECTION</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
          {heading}
        </h2>
        <p className="text-xs text-steel leading-relaxed max-w-3xl">
          {subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techChoices.map((tech, idx) => (
          <div
            key={idx}
            className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-obsidian-border pb-2">
                <span className="font-serif text-lg font-bold text-paper">
                  {tech.name}
                </span>
                <span className="font-mono text-[10px] text-gold uppercase px-2 py-0.5 rounded border border-gold/30 bg-gold/10">
                  {tech.category}
                </span>
              </div>

              <div className="space-y-2 text-xs text-steel">
                <div>
                  <strong className="text-paper block font-mono text-[11px] mb-1">
                    Technical Rationale:
                  </strong>
                  <p className="leading-relaxed">{tech.whySelected}</p>
                </div>

                <div className="pt-2 border-t border-obsidian-border/50">
                  <strong className="text-gold block font-mono text-[11px] mb-1 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Business Outcome:
                  </strong>
                  <p className="leading-relaxed text-paper/90 font-medium">
                    {tech.businessOutcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
