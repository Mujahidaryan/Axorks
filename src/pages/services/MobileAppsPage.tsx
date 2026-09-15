import React from 'react';
import { Smartphone, ShieldCheck, ArrowRight, CheckCircle2, Zap, Layers, RefreshCw } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { FAQAccordion } from '../../components/FAQAccordion';

export const MobileAppsPage: React.FC = () => {
  const { openCal } = useCal();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="Cross-Platform Mobile App Development (Flutter) | iOS & Android | Axorks"
        description="High-performance iOS and Android mobile apps engineered with Flutter. Native 60fps performance, offline data synchronization, and biometric authentication. Fixed-price from $1,000."
        canonicalPath="/services/mobile-apps"
      />

      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 border-b border-white/[0.08] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-400 border border-purple-500/20 mb-6">
              <Smartphone className="h-4 w-4" />
              <span>Pillar 3: Cross-Platform Mobile Engineering</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Unified mobile apps with native 60fps performance.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
              We build production iOS and Android applications with Flutter. Single maintainable codebase, offline-first SQLite synchronization, hardware biometric security, and end-to-end App Store / Play Store provisioning. Projects start from $1,000.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={openCal}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] px-8 py-4 text-base font-bold text-[#1A1000] shadow-xl shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
              >
                <span>Book a Mobile Architecture Call</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <h3 className="text-xl font-bold text-white mb-3">One Codebase for iOS &amp; Android</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Slash your development and maintenance overhead by 40% with a unified Flutter architecture that looks and feels native on both Apple and Android platforms.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Offline-First Synchronization</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Users can capture records, review logistics data, and complete workflows without active cellular connection. Automatic background reconciliation upon reconnection.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-8">
              <h3 className="text-xl font-bold text-white mb-3">Biometrics &amp; Hardware Security</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Direct integration with Face ID, Touch ID, local hardware keychain encryption, and real-time push notification gateways via Firebase and APNs.
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
