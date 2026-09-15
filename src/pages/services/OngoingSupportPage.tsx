import React from 'react';
import { Shield, ShieldCheck, ArrowRight, CheckCircle2, RefreshCw, Activity, Server } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { FAQAccordion } from '../../components/FAQAccordion';

export const OngoingSupportPage: React.FC = () => {
  const { openCal } = useCal();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="SLA Infrastructure Support & Proactive Cloud Maintenance | Axorks"
        description="Dedicated cloud DevOps management, 24/7 uptime monitoring, security patching, and continuous performance optimization on an SLA retainer basis."
        canonicalPath="/services/ongoing-support"
      />

      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-white/[0.08] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20 mb-6">
              <Shield className="h-4 w-4" />
              <span>Pillar 5: Ongoing SLA &amp; Proactive Infrastructure</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Proactive cloud infrastructure &amp; SLA support retainers.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              We protect your software investments with 24/7 server monitoring, automated database backups, vulnerability patching, and dedicated engineering sprint availability. Every engagement backed by clear SLA guarantees.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={openCal}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Book Support SLA Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Activity className="h-10 w-10 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Uptime &amp; Error Monitoring</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Automated Grafana, Sentry, and Datadog telemetry tracking API latency, memory spikes, and anomalous server exceptions with immediate alerting.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <Server className="h-10 w-10 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">DevOps &amp; Disaster Recovery</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Automated snapshot backups, zero-downtime rolling deployments on AWS/Vercel, and continuous container vulnerability updates.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <RefreshCw className="h-10 w-10 text-[#F5C761] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Monthly Sprint Iterations</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated engineering hours each month for feature additions, database query optimization, and technical enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection />
      <FAQAccordion />
    </div>
  );
};
