import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export interface ProjectData {
  id: string;
  sysId: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  built: string;
  stack: string[];
  isGovernment?: boolean;
  status: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
}

export default function SchematicCard({ project }: { project: ProjectData }) {
  return (
    <div
      className={`schematic-bracket group relative flex flex-col justify-between border bg-obsidian-raised p-5 sm:p-6 transition-all duration-300 ${
        project.isGovernment
          ? 'border-gold/50 hover:border-gold shadow-[0_0_25px_rgba(201,162,75,0.1)]'
          : 'border-obsidian-border hover:border-steel/40'
      }`}
    >
      <div>
        {/* Schematic Header Bar - Mobile & Desktop Responsive Fix */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between items-start gap-2.5 border-b border-obsidian-border pb-4">
          <span className="font-mono text-xs font-semibold tracking-wider text-gold break-words max-w-full">
            {project.sysId}
          </span>
          {project.isGovernment ? (
            <span className="inline-flex items-center gap-1.5 shrink-0 rounded border border-gold/50 bg-gold/15 px-2.5 py-1 font-mono text-[10px] font-bold text-gold tracking-wide">
              <ShieldCheck className="h-3.5 w-3.5" />
              GOVERNMENT GRADE
            </span>
          ) : (
            <span className="font-mono text-[10px] uppercase text-steel shrink-0">
              {project.status}
            </span>
          )}
        </div>

        {/* Title & Category */}
        <div className="mt-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-steel">
            {project.category}
          </span>
          <h3 className="mt-1 font-serif text-xl sm:text-2xl font-bold tracking-tight text-paper group-hover:text-gold transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Core Overview / Problem & Solution */}
        <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm">
          {project.description}
        </p>

        <div className="mt-4 space-y-2 border-t border-obsidian-border/60 pt-3 text-xs">
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase text-gold">Problem: </span>
            <span className="text-paper/90">{project.problem}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase text-gold">Solution Built: </span>
            <span className="text-paper/90">{project.built}</span>
          </div>
        </div>

        {/* Impact Stats if any */}
        {project.stats && project.stats.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-obsidian-border/60 pt-3">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="rounded bg-obsidian/70 p-2 text-center border border-obsidian-border/40">
                <div className="font-mono text-sm font-bold text-gold">{stat.value}</div>
                <div className="font-mono text-[9px] uppercase text-steel">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech Stack Pills & Live Action Link */}
      <div className="mt-6 border-t border-obsidian-border pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item, idx) => (
            <span
              key={idx}
              className="rounded bg-obsidian px-2.5 py-1 font-mono text-[10px] text-steel border border-obsidian-border/60"
            >
              {item}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[10px] text-emerald-400 font-medium">● Live Production</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-signal-blue font-semibold transition-colors hover:text-signal-blue-hover"
            >
              Verify Live System
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
