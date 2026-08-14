import { ShieldCheck, ArrowUpRight } from 'lucide-react';

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
      className={`glass-card-dark group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 ${
        project.isGovernment ? 'before:content-none' : ''
      }`}
    >
      {/* Government glow edge */}
      {project.isGovernment && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      )}

      <div>
        {/* Header Bar */}
        <div className="border-b border-white/10 pb-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-gold">
              {sysTag}
            </span>
            {project.isGovernment ? (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold/50 bg-gold/15 px-2.5 py-1 font-mono text-[9px] font-bold text-gold tracking-wide backdrop-blur-md">
                <ShieldCheck className="h-3 w-3 shrink-0 text-gold" />
                GOVERNMENT GRADE
              </span>
            ) : (
              <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-steel">
                REPRESENTATIVE
              </span>
            )}
          </div>
          {sysSlug && (
            <div className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-steel/90 break-words">
              {sysSlug}
            </div>
          )}
        </div>

        {/* Title & Category */}
        <div className="mt-5">
          <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-400">
            {project.category}
          </span>
          <h3 className="font-serif text-xl font-bold tracking-tight text-paper transition-colors duration-300 group-hover:text-gold sm:text-2xl">
            {project.name}
          </h3>
        </div>

        {/* Overview */}
        <p className="mt-3 text-xs leading-relaxed text-steel sm:text-sm">
          {project.description}
        </p>

        {/* Problem & Solution */}
        <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs">
          <div className="flex items-start gap-2.5">
            <span className="mt-px shrink-0 rounded bg-gold/10 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-gold">Problem</span>
            <span className="text-paper/85">{project.problem}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="mt-px shrink-0 rounded bg-indigo-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-indigo-300">Built</span>
            <span className="text-paper/85">{project.built}</span>
          </div>
          {project.challenges && (
            <div className="flex items-start gap-2.5">
              <span className="mt-px shrink-0 rounded bg-violet-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-violet-300">Challenge</span>
              <span className="text-paper/85">{project.challenges}</span>
            </div>
          )}
          {project.outcome && (
            <div className="flex items-start gap-2.5">
              <span className="mt-px shrink-0 rounded bg-teal-500/10 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-teal-300">Outcome</span>
              <span className="text-paper/85">{project.outcome}</span>
            </div>
          )}
        </div>

        {/* Impact Stats */}
        {project.stats && project.stats.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-4">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="rounded-xl border border-white/[0.07] bg-obsidian/70 p-3 text-center backdrop-blur-md">
                <div className="font-mono text-xs font-bold text-gold">{stat.value}</div>
                <div className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-steel">{stat.label}</div>
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
              className="rounded-lg border border-white/[0.07] bg-obsidian px-2.5 py-1 font-mono text-[10px] text-steel"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
          View case study
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}