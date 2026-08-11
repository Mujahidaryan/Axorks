import { ShieldCheck } from 'lucide-react';

export interface ProjectData {
  id: string;
  sysId: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  built: string;
  challenges?: string;
  outcome?: string;
  stack: string[];
  isGovernment?: boolean;
  status: string;
  stats?: { label: string; value: string }[];
}

export default function SchematicCard({ project }: { project: ProjectData }) {
  const sysParts = project.sysId.split(' — ');
  const sysTag = sysParts[0] || project.sysId;
  const sysSlug = sysParts[1] || '';

  return (
    <div
      className={`schematic-bracket group relative flex flex-col justify-between rounded-2xl border bg-gradient-to-br from-obsidian-raised via-obsidian-card to-obsidian p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
        project.isGovernment
          ? 'border-gold/50 hover:border-gold shadow-[0_10px_35px_rgba(201,162,75,0.12)]'
          : 'border-obsidian-border hover:border-indigo-500/40 shadow-xl'
      }`}
    >
      <div>
        {/* Schematic Header Bar */}
        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-gold">
              {sysTag}
            </span>
            {project.isGovernment ? (
              <span className="inline-flex items-center gap-1 shrink-0 rounded-full border border-gold/50 bg-gold/15 px-2.5 py-1 font-mono text-[9px] font-bold text-gold tracking-wide backdrop-blur-md">
                <ShieldCheck className="h-3 w-3 shrink-0 text-gold" />
                GOVERNMENT GRADE
              </span>
            ) : (
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-steel shrink-0 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                REPRESENTATIVE WORK
              </span>
            )}
          </div>
          {sysSlug && (
            <div className="mt-2 font-mono text-[11px] font-semibold text-steel/90 tracking-wider uppercase break-words">
              {sysSlug}
            </div>
          )}
        </div>

        {/* Title & Category */}
        <div className="mt-5">
          <span className="font-mono text-[10px] uppercase tracking-widest text-indigo-400 font-bold block mb-1">
            {project.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-paper group-hover:text-gold transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Core Overview / Problem & Solution */}
        <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm">
          {project.description}
        </p>

        <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs">
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold">Problem: </span>
            <span className="text-paper/90">{project.problem}</span>
          </div>
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold">Solution Built: </span>
            <span className="text-paper/90">{project.built}</span>
          </div>
          {project.challenges && (
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold">Engineering Challenge: </span>
              <span className="text-paper/90">{project.challenges}</span>
            </div>
          )}
          {project.outcome && (
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-gold">Outcome: </span>
              <span className="text-paper/90">{project.outcome}</span>
            </div>
          )}
        </div>

        {/* Impact Stats if any */}
        {project.stats && project.stats.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-3">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="rounded-xl bg-obsidian/80 p-2.5 text-center border border-white/10 backdrop-blur-md">
                <div className="font-mono text-xs font-bold text-gold">{stat.value}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-steel mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech Stack Pills */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item, idx) => (
            <span
              key={idx}
              className="rounded-lg bg-obsidian px-2.5 py-1 font-mono text-[10px] text-steel border border-white/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
