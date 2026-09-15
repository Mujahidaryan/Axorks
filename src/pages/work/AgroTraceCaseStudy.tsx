import React from 'react';
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, Cpu, Database, Activity, Clock } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { useRouter } from '../../router/Router';

export const AgroTraceCaseStudy: React.FC = () => {
  const { openCal } = useCal();
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="AgroTrace Case Study: 42% Cold-Chain Spoilage Reduction | Axorks"
        description="How Axorks engineered an IoT and real-time cold-chain logistics platform for AgroTrace, monitoring 14,000 active nodes with sub-second thermal telemetry."
        canonicalPath="/work/agrotrace"
      />

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Case Studies</span>
        </button>
      </div>

      {/* Hero */}
      <section className="pt-6 pb-16 sm:pt-10 sm:pb-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
              Supply Chain &amp; AgriTech
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 border border-white/5">
              Production IoT System
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl tracking-tight leading-tight">
            AgroTrace: Real-time cold-chain tracking across 14,000 active supply nodes.
          </h1>

          {/* Big Scannable Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400">42%</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Spoilage Reduction</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#F5C761]">14,000+</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Monitored Supply Nodes</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400">&lt;3s</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Anomaly Alert Latency</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-purple-400">11 Wks</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Fixed-Price Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="py-12 bg-[#050916]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-2xl">
            <img
              src="/Images/Agrotrace.jpeg"
              alt="AgroTrace supply chain tracking dashboard with live logistics telemetry"
              className="w-full h-auto object-cover max-h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Problem -> Solution -> Result Architecture (AEO Format) */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Problem */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">The Problem</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Blind transit zones and undetected container temperature deviations.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Agricultural exports suffered from chronic visibility gaps once refrigerated shipping containers departed regional sorting facilities. Temperature anomalies inside maritime reefer units went completely undetected until arrival at international discharge ports. The consequence was container-level spoilage, contested carrier insurance claims, and six-figure quarterly losses.
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">The Solution</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              End-to-end telemetry gateway uniting physical IoT sensors with a reactive cloud dashboard.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Axorks engineered a high-throughput telemetry gateway that ingests GPS coordinates, container ambient humidity, and thermal metrics every 60 seconds from onboard cellular/satellite IoT devices. An automated risk evaluation engine triggers instant SMS and Webhook alerts whenever thermal thresholds deviate by ±1.5°C, enabling distribution dispatchers to reroute shipments or alert technicians before cargo spoils.
            </p>
          </div>

          {/* Result */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">The Verified Outcome</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              42% reduction in cold-chain spoilage and 100% export compliance auditability.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Within 90 days of deployment, AgroTrace slashed perishable container spoilage by 42%. Over 14,000 active nodes now stream telemetry with zero platform downtime. Automated compliance reports are generated instantaneously for customs and export regulators, eliminating 20+ hours of weekly clerical paperwork.
            </p>
          </div>

          {/* Additional Screenshots Grid */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Production Application Views</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/agrotrace2.jpeg" alt="AgroTrace operations overview" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/Agrotrace3.jpeg" alt="AgroTrace analytics and performance" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/Agrotrace4.jpeg" alt="AgroTrace recent shipments table" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/Agrotrace5.jpeg" alt="AgroTrace supply nodes network view" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="rounded-2xl border border-amber-500/20 bg-[#080E20] p-8 sm:p-10">
            <p className="text-lg sm:text-xl italic text-slate-200">
              &ldquo;We now have a continuous, real-time picture of every perishable container in transit. Axorks delivered the entire architecture within 11 weeks, on time and strictly to their fixed-price proposal.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/Logos/agrotrace_logo.png" alt="AgroTrace logo" className="h-8 object-contain" />
              <div>
                <p className="font-bold text-white">Markus Vance</p>
                <p className="text-xs text-slate-400">VP of Global Logistics, AgroTrace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="py-16 bg-[#070D1B] border-t border-white/[0.08] text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-white">Need a high-reliability telemetry or operations platform?</h2>
          <p className="mt-3 text-slate-300">Every project begins with a 20-minute discovery call and a 24-hour fixed-price proposal.</p>
          <button
            onClick={openCal}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl hover:brightness-105 transition-all cursor-pointer"
          >
            <span>Book Your Discovery Session</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <GuaranteeSection />
    </div>
  );
};
