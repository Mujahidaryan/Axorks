import React from 'react';
import { useRouter } from '../router/Router';
import { Sparkles, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { CapabilitiesMatrix } from '../components/CapabilitiesMatrix';
import { VisibilityPackages } from '../components/VisibilityPackages';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-28 pb-20 lg:pb-28">
      {/* Page Header Banner (LIGHT) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[var(--bg-primary)] border-b border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[var(--gold)] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Services &amp; Capabilities</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block mb-3">
                Full-Spectrum Engineering &amp; AI Visibility
              </span>
              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Modern Capabilities. High-Intent Growth.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                From organic dominance on Google and AI platforms (AEO &amp; GEO) to mission-critical custom web, AI, and mobile systems. Delivered with fixed milestone pricing and 100% intellectual property transfer.
              </p>
            </div>

            {/* Quick Filter / Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="#visibility-packages"
                className="px-4 py-2 rounded-xl bg-[var(--gold)]/10 hover:bg-[var(--gold)]/20 border border-[var(--gold)]/30 text-[var(--gold)] text-xs font-mono-code font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>SEO • AEO • GEO Packages</span>
              </a>
              <a
                href="#capabilities"
                className="px-4 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--glass-border)] text-[var(--text-secondary)] text-xs font-mono-code font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-[var(--emerald)]" />
                <span>Core Engineering Pillars</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. STRATEGIC PRIORITY #1: SEO, AEO, and GEO Service Packages */}
      <VisibilityPackages id="visibility-packages" />

      {/* Divider */}
      <div className="w-full border-t border-[var(--glass-border)]" />

      {/* 2. Core Engineering Capabilities Matrix (AEO Optimized) */}
      <CapabilitiesMatrix />

      {/* CTA (DARK) */}
      <div className="dark-surface">
        <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-t border-[var(--glass-border)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[var(--gold)] font-bold mb-4 block">
              Consultation &amp; Roadmap
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Ready to lock your scope and scale your pipeline?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you need to capture AI answer citations across Perplexity and ChatGPT or build a dedicated enterprise application, we provide an itemized specification and transparent proposal in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=Discovery%20Call%20Request%20-%20Axorks"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn px-8 py-4 bg-[var(--gold)] text-[#0A0F1D] rounded-xl font-headline font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-headline font-bold text-sm uppercase tracking-wider transition-colors border border-white/10"
              >
                <span>WhatsApp: +92 314 103 0223</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};