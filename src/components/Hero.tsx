import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDiscovery?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-32 min-h-[90vh] flex items-center bg-[#060A16]"
    >
      {/* ─── ATMOSPHERIC RIGHT-SIDE MOTION (Seamless Radial Feather • Cinematic Canvas) ─── */}
      <div
        className="absolute top-0 bottom-0 right-0 w-full lg:w-[54%] xl:w-[50%] pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        <video
          src="/Images/Motion_AXORKS.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.03] opacity-85"
        />

        {/* Desktop Left-to-Right Smooth Gradient Feather into #060A16 */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #060A16 0%, #060A16 14%, rgba(6, 10, 22, 0.82) 35%, rgba(6, 10, 22, 0.3) 65%, transparent 88%)',
          }}
        />

        {/* Mobile Scrim: High-contrast backdrop */}
        <div
          className="lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(6, 10, 22, 0.95) 0%, rgba(6, 10, 22, 0.88) 50%, rgba(6, 10, 22, 0.92) 100%)',
          }}
        />

        {/* Top Edge Feather */}
        <div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #060A16 0%, transparent 100%)',
          }}
        />

        {/* Bottom Transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ─── HERO CONTENT (High Contrast • Razor Sharp • Maximum Polish) ─── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl space-y-7 text-left">
          
          {/* Status Pill with Dual-Ring Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[#10B981]/50 shadow-sm backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-dual-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono-code font-bold uppercase tracking-wider text-[#10B981]">
                AI-First Engineering Studio · Karachi &amp; Islamabad
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono-code text-[11px] uppercase tracking-wider backdrop-blur-xl">
              <Sparkles className="w-3 h-3 text-[#F5C761]" />
              <span>US • UK • EU • GCC</span>
            </div>
          </motion.div>

          {/* Master Display Headline (Clean, Powerful, Non-Wordy) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-hero text-4xl sm:text-5xl lg:text-[62px] xl:text-[68px] text-white font-extrabold tracking-tight leading-[1.05] drop-shadow-lg"
          >
            Intelligent systems.<br />
            <span className="bg-gradient-to-r from-[#F5C761] via-[#10B981] to-[#38BDF8] bg-clip-text text-transparent">
              Engineered to scale.
            </span>
          </motion.h1>

          {/* Punchy 1-Sentence Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-sm"
          >
            We architect autonomous AI multi-agent pipelines, bespoke enterprise web applications, and high-ranking search/AI discovery systems with guaranteed milestone delivery.
          </motion.p>

          {/* Spatial Frosted Glass Telemetry Strip (3 Micro-Proofs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="p-3.5 sm:p-4 rounded-2xl bg-black/45 border border-white/15 backdrop-blur-2xl shadow-2xl grid grid-cols-3 gap-3 max-w-xl"
          >
            <div className="border-r border-white/10 pr-2">
              <span className="block font-display-hero text-sm sm:text-base font-extrabold text-[#F5C761]">
                From $1,000
              </span>
              <span className="block font-mono-code text-[10px] sm:text-[11px] text-slate-300 uppercase tracking-tight">
                Fixed Milestones
              </span>
            </div>
            <div className="border-r border-white/10 px-2">
              <span className="block font-display-hero text-sm sm:text-base font-extrabold text-[#10B981]">
                100% IP
              </span>
              <span className="block font-mono-code text-[10px] sm:text-[11px] text-slate-300 uppercase tracking-tight">
                Full Code Handover
              </span>
            </div>
            <div className="pl-2">
              <span className="block font-display-hero text-sm sm:text-base font-extrabold text-[#38BDF8]">
                24-Hour SLA
              </span>
              <span className="block font-mono-code text-[10px] sm:text-[11px] text-slate-300 uppercase tracking-tight">
                Itemized Scope Spec
              </span>
            </div>
          </motion.div>

          {/* Primary Action Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <a
              href="mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=Discovery%20Call%20Request%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#EAB308] to-[#D97706] text-[#2A1800] text-xs sm:text-sm font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-xl transition-all"
            >
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/5 border border-[#10B981]/50 hover:border-[#10B981] text-white text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider transition-all backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <MessageSquare className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Reassurance Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-slate-300 pt-1"
          >
            <a
              href="mailto:contact@axorks.com"
              className="text-[#F5C761] hover:underline font-semibold"
            >
              contact@axorks.com
            </a>
            <span className="text-white/30">•</span>
            <span>Zero hourly billing surprises</span>
            <span className="text-white/30">•</span>
            <span>Direct senior engineering access</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
