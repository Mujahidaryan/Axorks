import React from 'react';
import { Hero } from '../components/Hero';
import { ParadigmMatrix } from '../components/ParadigmMatrix';
import { PrimaryWebPlatforms } from '../components/PrimaryWebPlatforms';
import { VisibilityPackages } from '../components/VisibilityPackages';
import { EvidenceEngine } from '../components/EvidenceEngine';
import { GlobalDelivery } from '../components/GlobalDelivery';
import { StudioTeam } from '../components/StudioTeam';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useNavigate } from '../router/Router';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#08080A]">
      {/* 1. THE HOOK: Vision, Micro-commitment & Primary CTA */}
      <Hero onOpenDiscovery={() => navigate('/contact')} />

      {/* 2. THE PROOF & PARADIGM SHIFT: Verified Logos + Comparative Decision Framework */}
      <ParadigmMatrix />

      {/* 3. PRIMARY STRATEGIC OFFER: Custom Web Platforms & Business Systems (Locked Hierarchy #1) */}
      <PrimaryWebPlatforms />

      {/* 4. SECONDARY OFFER: Search & AI Visibility Systems (Locked Hierarchy #2) */}
      <VisibilityPackages id="home-visibility" />

      {/* 5. THE EVIDENCE ENGINE: Interwoven Work + Client Stories */}
      <EvidenceEngine />

      {/* 6. THE PROTOCOL: Global Delivery & Milestone Risk Removal */}
      <GlobalDelivery />

      {/* 7. THE ARCHITECTS: Leadership & Direct Access */}
      <StudioTeam />

      {/* 8. THE ESCALATION: Final Conversion Punctuation */}
      <section className="w-full bg-[#08080A] py-24 lg:py-32 relative overflow-hidden border-t border-[rgba(146,157,167,0.14)]">
        {/* Top gradient accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8B923]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121214] to-[#08080A] z-0" />
        
        {/* Dual ambient glow: vermilion + gold */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E85A3C]/4 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8B923]/4 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center"
        >
          <span className="font-mono-code text-xs uppercase tracking-widest text-[#E8B923] font-bold mb-6 block">
            Lock Your Technical Scope
          </span>
          <h2 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F4F5] tracking-tight leading-tight mb-8">
            Start building your system.<br />
            <span className="text-[#71717A]">Fixed-price in 24 hours.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] rounded-xl font-headline font-bold text-sm uppercase tracking-wider shadow-[0_4px_24px_rgba(232,185,35,0.35)] hover:brightness-105 transition-all flex items-center justify-center gap-3"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              {/* Micro-commitment Sub-CTA */}
              <span className="text-[10px] font-mono-code text-[#A1A1AA] uppercase tracking-wider hover:text-[#5EEAD4] transition-colors cursor-pointer text-center" onClick={() => navigate('/process')}>
                Read our 24h SLA Process &rarr;
              </span>
            </div>
            
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/923141030223"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-[#121214] text-[#F4F4F5] rounded-xl font-headline font-bold text-sm uppercase tracking-wider hover:bg-[#161618] transition-colors flex items-center justify-center gap-3 border border-[#5EEAD4]/30 backdrop-blur-xl"
              >
                <MessageSquare className="w-4 h-4 text-[#5EEAD4]" />
                <span>WhatsApp Us</span>
              </a>
              <span className="text-[10px] font-mono-code text-[#71717A] uppercase tracking-wider flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
                Live Engineering Chat
              </span>
            </div>
          </div>
          
          <p className="mt-12 text-xs font-mono-code text-[#A1A1AA] font-medium flex flex-wrap justify-center gap-3 items-center">
            <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#5EEAD4]" /> Direct access.</span> 
            <span className="text-[#71717A]">·</span> 
            <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#5EEAD4]" /> 100% IP.</span> 
            <span className="text-[#71717A]">·</span> 
            <span className="flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#5EEAD4]" /> Fixed milestone scopes from $199.</span>
          </p>
        </motion.div>
      </section>
    </div>
  );
};
