import React from 'react';
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, Lock, HeartPulse, Globe2 } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { useRouter } from '../../router/Router';

export const MediVerseCaseStudy: React.FC = () => {
  const { openCal } = useCal();
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="MediVerse Case Study: HIPAA-Compliant Healthcare AI Platform | Axorks"
        description="How Axorks architected MediVerse: a global AI telemedicine platform connecting patients to clinical specialists under verified WHO, SDG 3, HIPAA, and GDPR standards."
        canonicalPath="/work/mediverse"
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
            <span className="rounded-full bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-400 border border-purple-500/20">
              Healthcare &amp; Telemedicine AI
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 border border-white/5">
              HIPAA &amp; GDPR Compliant
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl tracking-tight leading-tight">
            MediVerse: Unified global care access and encrypted patient teleconsultations.
          </h1>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-purple-400">100%</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">HIPAA &amp; GDPR Compliance</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#F5C761]">Global</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Specialist Network Reach</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-400">Zero</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Data Leakage Incidents</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400">10 Wks</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Fixed-Price Deployment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#050916]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-2xl">
            <img
              src="/Images/Mediverse.jpeg"
              alt="MediVerse AI healthcare platform main dashboard"
              className="w-full h-auto object-cover max-h-[700px]"
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">The Problem</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Fragmented medical consultations, non-compliant chat tools, and geographic specialist barriers.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Patients seeking international medical second opinions were forced to communicate across insecure channels like WhatsApp and unencrypted email, exposing sensitive diagnostic records. Clinical specialists had no unified system to review medical history, conduct verified video consultations, or issue cross-border care instructions.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">The Solution</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              End-to-end encrypted telemedicine ecosystem engineered to WHO and HIPAA standards.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Axorks architected MediVerse with zero-knowledge encrypted database storage, secure WebRTC peer-to-peer video rooms, and structured electronic health records (EHR). Automated triage pipelines guide patients through structured symptom intake, matching them with licensed clinicians based on specialty and language.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">The Verified Outcome</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              100% regulatory compliance verification and seamless international specialist onboarding.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              The platform passed third-party HIPAA and GDPR penetration audits with zero non-conformances. Specialist networks across North America, Europe, and Asia conduct thousands of secure consultations monthly with instantaneous digital prescription and records delivery.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Patient Consultation &amp; Compliance Views</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/mediverse2.jpeg" alt="MediVerse care access panel" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/Mediverse4.jpeg" alt="MediVerse compliance records" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-[#080E20] p-8 sm:p-10">
            <p className="text-lg sm:text-xl italic text-slate-200">
              &ldquo;We wanted healthcare access to feel connected, humane, and rigorously protected. Axorks built an institutional-grade platform that satisfied our strict regulatory demands while keeping the interface delightful for patients.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/Logos/mediverse_logo.png" alt="MediVerse logo" className="h-8 object-contain" />
              <div>
                <p className="font-bold text-white">Dr. Tariq Mahmood</p>
                <p className="text-xs text-slate-400">Chief Medical Officer, MediVerse Health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection />
    </div>
  );
};
