import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenDiscovery?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-36 pb-24 lg:pt-40 lg:pb-36 min-h-[92vh] flex items-center bg-[#08080A]"
    >
      {/* ─── ATMOSPHERIC RIGHT-SIDE MOTION (Seamless Radial Feather into #08080A) ─── */}
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
          className="w-full h-full object-cover object-center scale-[1.03] opacity-80"
        />

        {/* Desktop Left-to-Right Smooth Gradient Feather into #08080A */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #08080A 0%, #08080A 14%, rgba(8, 8, 10, 0.85) 35%, rgba(8, 8, 10, 0.3) 65%, transparent 88%)',
          }}
        />

        {/* Mobile Scrim: High-contrast backdrop */}
        <div
          className="lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(8, 8, 10, 0.96) 0%, rgba(8, 8, 10, 0.9) 50%, rgba(8, 8, 10, 0.95) 100%)',
          }}
        />

        {/* Top Edge Feather */}
        <div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #08080A 0%, transparent 100%)',
          }}
        />

        {/* Bottom Transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #08080A 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ─── HERO CONTENT (High Contrast · Razor Sharp · Maximum Authority) ─── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-[640px] space-y-8 text-left">
          
          {/* Status Pill with Dual-Ring Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121214] border border-[rgba(146,157,167,0.18)] shadow-sm backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-dual-ping absolute inline-flex h-full w-full rounded-full bg-[#5EEAD4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5EEAD4]" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono-code font-bold uppercase tracking-wider text-[#5EEAD4]">
                Custom Web Platforms &amp; Business Systems · Karachi &amp; Islamabad
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161618] border border-[rgba(146,157,167,0.14)] text-[#A1A1AA] font-mono-code text-[11px] uppercase tracking-wider backdrop-blur-xl">
              <Sparkles className="w-3 h-3 text-[#E8B923]" />
              <span>US · UK · EU · GCC</span>
            </div>
          </motion.div>

          {/* Master Display Headline (Locked Positioning Hierarchy #1) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-hero text-[40px] sm:text-[52px] lg:text-[60px] xl:text-[68px] text-[#F4F4F5] font-extrabold tracking-[-0.03em] leading-[1.04] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          >
            Custom Web Platforms &amp;<br />
            <span className="bg-gradient-to-r from-[#E8B923] via-[#E85A3C] to-[#5EEAD4] bg-clip-text text-transparent drop-shadow-none">
              Business Systems.
            </span>
          </motion.h1>

          {/* Punchy Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl text-[#A1A1AA] leading-relaxed font-normal max-w-xl"
          >
            We architect mission-critical custom web applications, scalable SaaS architectures, and high-security enterprise systems with guaranteed milestone delivery and 100% full-code IP handover.
          </motion.p>

          {/* Spatial Frosted Glass Telemetry Strip (Locked Pricing Visibility) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="p-3.5 sm:p-4 rounded-2xl bg-[#121214]/90 border border-[rgba(146,157,167,0.18)] backdrop-blur-2xl shadow-2xl grid grid-cols-3 gap-3 max-w-xl"
          >
            <div className="border-r border-[rgba(146,157,167,0.14)] pr-2">
              <span className="block font-display-hero text-sm sm:text-base font-extrabold text-[#E8B923]">
                From $199 - $499
              </span>
              <span className="block font-mono-code text-[10px] sm:text-[11px] text-[#A1A1AA] uppercase tracking-tight">
                Fixed Milestones
              </span>
            </div>
            <div className="border-r border-[rgba(146,157,167,0.14)] px-2">
              <span className="block font-display-hero text-sm sm:text-base font-extrabold text-[#5EEAD4]">
                100% IP
              </span>
              <span className="block font-mono-code text-[10px] sm:text-[11px] text-[#A1A1AA] uppercase tracking-tight">
                Full Code Handover
              </span>
            </div>
            <div className="pl-2">
              <span className="block font-display-hero text-sm sm:text-base font-extrabold text-[#E85A3C]">
                24-Hour SLA
              </span>
              <span className="block font-mono-code text-[10px] sm:text-[11px] text-[#A1A1AA] uppercase tracking-tight">
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] text-xs sm:text-sm font-headline font-bold uppercase tracking-wider glow-gold-jewel cursor-pointer shadow-xl transition-all"
            >
              <span>Book Free Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/923141030223"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#121214] border border-[#5EEAD4]/40 hover:border-[#5EEAD4] text-[#F4F4F5] text-xs sm:text-sm font-headline font-semibold uppercase tracking-wider transition-all backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5EEAD4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5EEAD4]" />
              </span>
              <MessageSquare className="w-4 h-4 text-[#5EEAD4]" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Reassurance Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-[#A1A1AA] pt-1"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E8B923] hover:underline font-semibold"
            >
              contact@axorks.com
            </a>
            <span className="text-[#71717A]">·</span>
            <span>Zero hourly billing surprises</span>
            <span className="text-[#71717A]">·</span>
            <span>Direct senior engineering access</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
