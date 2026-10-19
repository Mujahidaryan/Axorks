import React from 'react';
import { Globe, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from '../router/Router';

export const GlobalDelivery: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="dark-surface">
      <section className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 relative border-y border-white/10" id="global-delivery">
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
              <span className="font-mono-code text-[10px] font-bold tracking-widest uppercase text-[var(--gold)] mb-4 block">
                Delivery Protocol
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight mb-8">
                Predictable milestone execution.
              </h2>
              
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-gradient-to-b before:from-[var(--gold)]/30 before:via-[var(--emerald)]/20 before:to-transparent">
                {[
                  { step: '01', title: 'Technical Discovery', desc: 'Direct technical scoping with senior architects. No sales pitches.' },
                  { step: '02', title: '24-Hour Proposal', desc: 'Fixed-price contract, rigid timeline, and milestone definitions delivered in 24 hours.' },
                  { step: '03', title: 'Staging Verification', desc: 'You test functioning software on live staging servers before any milestone invoice is paid.' },
                  { step: '04', title: 'IP Handover', desc: 'Production deployment and 100% commercial intellectual property transfer.' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-10"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={`absolute left-0 top-0.5 w-7 h-7 bg-gradient-to-br from-[var(--gold)]/20 to-transparent border border-white/10 rounded-full flex items-center justify-center font-mono-code text-[10px] font-bold text-[var(--text-primary)] shadow-sm ${idx === 0 ? 'shadow-[0_0_12px_rgba(245,199,97,0.25)] border-[var(--gold)]/40' : ''}`}>
                      {item.step}
                    </div>
                    <h4 className="font-headline text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
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
              <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-xl border border-white/[0.08] p-8 sm:p-10 rounded-3xl spatial-card shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <Globe className="w-10 h-10 text-[#0284C7] mb-6" />
                <h3 className="font-display-hero text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Global delivery. Local proximity.
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                  Operating from registered offices in Karachi and Islamabad, we provide a massive strategic advantage to international founders. You get elite engineering talent without the Western agency premium, secured by strict IP laws and immediate time-zone overlap.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-white/[0.06] hover:bg-white/[0.10] transition-colors rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-[var(--emerald)]">
                      <Clock className="w-4 h-4" />
                      <span className="font-headline text-xs font-bold uppercase tracking-wider">GCC Markets</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Near-zero time delta (1-2 hours) with Saudi Arabia, UAE, Kuwait, and Bahrain. Rapid synchronous execution.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/[0.06] hover:bg-white/[0.10] transition-colors rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 mb-2 text-[var(--gold)]">
                      <MapPin className="w-4 h-4" />
                      <span className="font-headline text-xs font-bold uppercase tracking-wider">US, UK & Europe</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Overlapping operational windows for daily stand-ups and continuous deployment pipelines while you sleep.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <span className="text-xs font-mono-code text-[var(--text-muted)] font-semibold">Offices:</span>
                  <span className="text-xs font-headline font-bold text-[var(--text-primary)] uppercase tracking-wider bg-white/10 px-3 py-1.5 rounded-md">Karachi</span>
                  <span className="text-xs font-headline font-bold text-[var(--text-primary)] uppercase tracking-wider bg-white/10 px-3 py-1.5 rounded-md">Islamabad</span>
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
