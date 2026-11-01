import React from 'react';
import { Globe, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from '../router/Router';

export const GlobalDelivery: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="w-full bg-[#08080A] py-20 lg:py-28 relative border-b border-[rgba(146,157,167,0.14)]" id="global-delivery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Milestone Process */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[#E8B923] mb-4 block">
              Delivery Protocol
            </span>
            <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[#F4F4F5] tracking-tight mb-8">
              Predictable milestone execution.
            </h2>
            
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-gradient-to-b before:from-[#E8B923]/30 before:via-[#E85A3C]/20 before:to-transparent">
              {[
                { step: '01', title: 'Technical Discovery', desc: 'Direct technical scoping with senior architects. No sales pitches or account manager intermediaries.' },
                { step: '02', title: '24-Hour Scope Lock', desc: 'Fixed-price contract, rigid timeline, and milestone definitions delivered in 24 hours.' },
                { step: '03', title: 'Live Staging Verification', desc: 'You test functioning software on private staging environments before any milestone invoice is approved.' },
                { step: '04', title: '100% IP Repository Handover', desc: 'Production deployment and complete commercial intellectual property transfer to your private repositories.' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={`absolute left-0 top-0.5 w-7 h-7 bg-[#161618] border border-[rgba(146,157,167,0.18)] rounded-full flex items-center justify-center font-mono-code text-[10px] font-bold text-[#F4F4F5] shadow-sm ${idx === 0 ? 'border-[#E8B923]/60 shadow-[0_0_12px_rgba(232,185,35,0.25)]' : ''}`}>
                    {item.step}
                  </div>
                  <h4 className="font-headline text-sm font-bold text-[#F4F4F5] uppercase tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Global Reach & Offices */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#121214] border border-[rgba(146,157,167,0.14)] p-8 sm:p-10 rounded-3xl spatial-card shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <Globe className="w-10 h-10 text-[#5EEAD4] mb-6" />
              <h3 className="font-display-hero text-2xl font-bold text-[#F4F4F5] mb-4">
                Global delivery. Local proximity.
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-8">
                Operating from registered offices in Karachi and Islamabad, we provide a strategic engineering advantage to international founders. You get senior architectural talent without Western agency overhead, secured by strict milestone escrow and immediate time-zone overlap.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-4 bg-[#161618] rounded-xl border border-[rgba(146,157,167,0.12)]">
                  <div className="flex items-center gap-2 mb-2 text-[#5EEAD4]">
                    <Clock className="w-4 h-4" />
                    <span className="font-headline text-xs font-bold uppercase tracking-wider">GCC Markets</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Near-zero time delta (1-2 hours) with Saudi Arabia, UAE, Qatar, and Bahrain. Real-time synchronous collaboration.
                  </p>
                </div>
                
                <div className="p-4 bg-[#161618] rounded-xl border border-[rgba(146,157,167,0.12)]">
                  <div className="flex items-center gap-2 mb-2 text-[#E8B923]">
                    <MapPin className="w-4 h-4" />
                    <span className="font-headline text-xs font-bold uppercase tracking-wider">US, UK &amp; Europe</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    Overlapping operational windows for daily syncs, sprint planning, and continuous overnight deployments.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[rgba(146,157,167,0.14)] flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono-code text-[#71717A] font-semibold">Registered Studios:</span>
                <span className="text-xs font-headline font-bold text-[#F4F4F5] uppercase tracking-wider bg-[#161618] border border-[rgba(146,157,167,0.14)] px-3 py-1.5 rounded-lg">Karachi</span>
                <span className="text-xs font-headline font-bold text-[#F4F4F5] uppercase tracking-wider bg-[#161618] border border-[rgba(146,157,167,0.14)] px-3 py-1.5 rounded-lg">Islamabad</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
