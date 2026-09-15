import React from 'react';
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, Cpu, Activity, Zap, TrendingUp } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { useRouter } from '../../router/Router';

export const IpmiOsCaseStudy: React.FC = () => {
  const { openCal } = useCal();
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="IPMI-OS 2.0 Case Study: AI Trading & Decision Engine | Axorks"
        description="How Axorks built an institutional AI trading decision system with multi-tier TQE analysis, order flow telemetry, and automated risk governors."
        canonicalPath="/work/ipmi-os"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Case Studies</span>
        </button>
      </div>

      <section className="pt-6 pb-16 sm:pt-10 sm:pb-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-[#F5C761] border border-amber-500/20">
              FinTech &amp; Algorithmic Trading
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 border border-white/5">
              Live Production Execution
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl tracking-tight leading-tight">
            IPMI-OS 2.0: Sub-second AI decision intelligence and automated risk governance.
          </h1>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#F5C761]">&lt;1s</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Execution Latency</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400">Multi-Tier</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">TQE Analysis Depth</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400">100%</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Automated Risk Enforcement</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-purple-400">9 Wks</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Fixed-Price Timeline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12 bg-[#050916]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-2xl">
            <img
              src="/Images/IPMI-OS.jpeg"
              alt="IPMI-OS 2.0 AI trading dashboard with opportunity scanner"
              className="w-full h-auto object-cover max-h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Problem -> Solution -> Result Architecture */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">The Problem</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Data overload, cognitive fatigue, and emotional execution during high-volatility market sessions.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Trading desks faced hundreds of simultaneous order book signals across disparate exchanges. Human traders were overwhelmed with cognitive noise, leading to delayed order execution, inconsistent risk sizing, and emotional violations of firm trading mandates during sharp market swings.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">The Solution</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Multi-tier TQE algorithmic scanning engine with programmatic risk governors.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Axorks architected IPMI-OS 2.0: an institutional-grade decision platform with a multi-tier TQE (Trend, Quality, Execution) scanner, live order book telemetry, and automated risk governors. Predefined position sizing, stop-loss guardrails, and volatility thresholds are enforced programmatically, eliminating emotional execution error entirely.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">The Verified Outcome</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Sub-second signal-to-order throughput with zero risk rule breaches.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              The platform executes telemetry evaluations in under 1 second. Traders make structured, data-driven decisions with zero manual calculation delays. Firm risk parameters have been maintained with 100% mathematical fidelity across all market conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Engine Telemetry &amp; Analysis Screens</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/IPMI-OS2.jpeg" alt="TQE analysis engine" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/IPMI-OS3.jpeg" alt="Risk governor and order flow" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/IPMI-OS4.jpeg" alt="Live execution engine" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-500/20 bg-[#080E20] p-8 sm:p-10">
            <p className="text-lg sm:text-xl italic text-slate-200">
              &ldquo;The challenge wasn&apos;t a lack of information: it was having too much of it at the wrong time. IPMI-OS gives us a structured, automated way to evaluate opportunities without emotional bias.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/Logos/ipmios_logo.png" alt="IPMI-OS logo" className="h-8 object-contain" />
              <div>
                <p className="font-bold text-white">Elena Rostova</p>
                <p className="text-xs text-slate-400">Managing Director, IPMI Trading Desk</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection />
    </div>
  );
};
