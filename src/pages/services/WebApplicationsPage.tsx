import React from 'react';
import { Globe, ShieldCheck, ArrowRight, CheckCircle2, Code2, Database, Zap, Layers } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { FAQAccordion } from '../../components/FAQAccordion';
import { useRouter } from '../../router/Router';

export const WebApplicationsPage: React.FC = () => {
  const { openCal } = useCal();
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="Fixed-Price Custom Web App Development | Next.js & React Studio | Axorks"
        description="High-performance custom web applications, SaaS platforms, and enterprise portals engineered with Next.js and TypeScript. 100% IP ownership. Fixed-price quotes within 24 hours."
        canonicalPath="/services/web-applications"
      />

      {/* Hero */}
      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-white/[0.08] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-[#F5C761] border border-amber-500/20 mb-6">
              <Globe className="h-4 w-4" />
              <span>Pillar 2: Custom Web Engineering &amp; SaaS</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Custom web applications engineered for scale and speed.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              We design and build bespoke client portals, operations dashboards, and SaaS platforms using React, Next.js, and Node.js. No bloated WordPress themes, no brittle no-code workarounds — high-performance, maintainable codebases you own completely.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={openCal}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Request a Fixed-Price Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('/work')}
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 px-6 py-4 text-base font-semibold text-white border border-white/10 transition-colors cursor-pointer"
              >
                <span>View Web Application Case Studies</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium border-t border-white/5 pt-6">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Projects start from $1,000
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle2 className="h-4 w-4" />
                24-Hour itemized technical proposal
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <CheckCircle2 className="h-4 w-4" />
                100% Intellectual property transfer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table: Fixed-Price vs Hourly (AEO Anchor) */}
      <section className="py-20 sm:py-24 bg-[#050916] border-b border-white/[0.08]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Fixed-Price vs. Traditional Hourly Billing
            </h2>
            <p className="mt-4 text-slate-300">
              Why commercial engineering governance is superior to unpredictable time-and-materials billing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#080E20]/90 shadow-2xl">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-[#0D152D] text-xs uppercase text-slate-300 border-b border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Evaluation Criteria</th>
                  <th scope="col" className="px-6 py-4 font-bold text-slate-400">Traditional Agency (Hourly)</th>
                  <th scope="col" className="px-6 py-4 font-bold text-amber-400 bg-amber-500/10">Axorks Engineering (Fixed-Price)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Cost Certainty</td>
                  <td className="px-6 py-4 text-slate-400">Open-ended estimates with regular 30-50% budget overruns</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold bg-amber-500/5">Guaranteed total price locked before development begins</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Payment Milestones</td>
                  <td className="px-6 py-4 text-slate-400">Weekly invoices regardless of whether code functions</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold bg-amber-500/5">Funds released only after client verifies working staging builds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Code &amp; IP Ownership</td>
                  <td className="px-6 py-4 text-slate-400">Often held in proprietary agency repositories with ongoing lock-in</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold bg-amber-500/5">100% full source code and database transferred to your GitHub</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Senior Practitioner Access</td>
                  <td className="px-6 py-4 text-slate-400">Non-technical account managers shielding junior developers</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold bg-amber-500/5">Direct access to Chief Systems Architect Muhammad Mujahid</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-white">Post-Launch Warranty</td>
                  <td className="px-6 py-4 text-slate-400">Bug fixes billed immediately at high hourly rates</td>
                  <td className="px-6 py-4 text-emerald-400 font-semibold bg-amber-500/5">14-day warranty for bugs and deployment stability included free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Code2 className="h-10 w-10 text-[#F5C761] mb-6" />
              <h3 className="text-xl font-bold text-white">SaaS Product MVPs</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Full-stack web products built with React, Next.js, Stripe subscriptions, and PostgreSQL. Engineered to validate market demand rapidly with zero technical debt.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Database className="h-10 w-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold text-white">Client &amp; Vendor Portals</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Secure enterprise portals with role-based access control (RBAC), multi-tenant data isolation, document signing, and automated email/SMS notifications.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Zap className="h-10 w-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white">Internal Operations Dashboards</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Real-time operational dashboards replacing disconnected spreadsheets with live SQL telemetry, custom charting, and automated CSV/PDF report generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <GuaranteeSection />

      {/* FAQ */}
      <FAQAccordion
        title="Custom Web Development FAQ"
        subtitle="Key details about technology choices, delivery timelines, and intellectual property."
      />
    </div>
  );
};
