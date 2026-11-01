import React from 'react';
import { useRouter } from '../router/Router';
import { Sparkles, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { CapabilitiesMatrix } from '../components/CapabilitiesMatrix';
import { VisibilityPackages } from '../components/VisibilityPackages';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="w-full pt-28 pb-20 lg:pb-28 bg-[#08080A]">
      {/* Page Header Banner */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[#08080A] border-b border-[rgba(146,157,167,0.14)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#E8B923] mb-4">
            <button onClick={() => navigate('/')} className="hover:underline cursor-pointer">Home</button>
            <span>/</span>
            <span>Services &amp; Capabilities</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono-code text-xs uppercase text-[#E8B923] tracking-widest font-bold block mb-3">
                Locked Engineering Hierarchy · High-Intent Growth
              </span>
              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F4F5] tracking-tight leading-[1.05]">
                Custom Web Platforms, AI Visibility &amp; Enterprise Systems.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
                From high-concurrency custom web applications and regulated domain platforms (LMS, Core Banking, HMS) to complete search dominance on Google, ChatGPT, and Perplexity via SEO, AEO, and GEO packages. Delivered with fixed milestone pricing starting from $199 - $499 and 100% intellectual property transfer.
              </p>
            </div>

            {/* Quick Filter / Navigation Pills */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="#visibility-packages"
                className="px-4 py-2 rounded-xl bg-[#E8B923]/10 hover:bg-[#E8B923]/20 border border-[#E8B923]/30 text-[#E8B923] text-xs font-mono-code font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Search &amp; AI Packages</span>
              </a>
              <a
                href="#capabilities"
                className="px-4 py-2 rounded-xl bg-[#121214] hover:bg-[#161618] border border-[rgba(146,157,167,0.14)] text-[#A1A1AA] text-xs font-mono-code font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Cpu className="w-3.5 h-3.5 text-[#5EEAD4]" />
                <span>Core Engineering Pillars</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1. STRATEGIC PRIORITY #1: Search, AEO, and GEO Service Packages */}
      <VisibilityPackages id="visibility-packages" />

      {/* Divider */}
      <div className="w-full border-t border-[rgba(146,157,167,0.14)]" />

      {/* 2. Core Engineering Capabilities Matrix (AEO Optimized) */}
      <CapabilitiesMatrix />

      {/* CTA Section */}
      <section className="w-full bg-[#08080A] py-20 lg:py-28 relative border-t border-[rgba(146,157,167,0.14)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono-code text-xs uppercase tracking-widest text-[#E8B923] font-bold mb-4 block">
            Consultation &amp; Roadmap
          </span>
          <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[#F4F4F5] mb-6">
            Ready to lock your scope and scale your pipeline?
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you need to capture AI answer citations across Perplexity and ChatGPT or build a dedicated enterprise application, we provide an itemized specification and transparent proposal in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-8 py-4 bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] rounded-xl font-headline font-bold text-sm uppercase tracking-wider shadow-[0_4px_20px_rgba(232,185,35,0.35)] flex items-center gap-2"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#121214] hover:bg-[#161618] text-[#F4F4F5] rounded-xl font-headline font-bold text-sm uppercase tracking-wider transition-colors border border-[rgba(146,157,167,0.18)]"
            >
              <span>WhatsApp: +92 314 103 0223</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
