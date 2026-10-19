import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  Bot, 
  Layers, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { VISIBILITY_PACKAGES, VISIBILITY_COMPARISON, VisibilityPackage } from '../data/visibilityData';

interface VisibilityPackagesProps {
  id?: string;
  condensed?: boolean;
}

export const VisibilityPackages: React.FC<VisibilityPackagesProps> = ({ id = 'visibility-packages', condensed = false }) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'comparison'>('packages');

  const getAccentStyles = (accent: VisibilityPackage['accent'], isPopular?: boolean) => {
    switch (accent) {
      case 'gold':
        return {
          badgeBg: 'bg-[#B48520]/15 dark:bg-[#F5C761]/20',
          badgeText: 'text-[#916613] dark:text-[#F5C761]',
          badgeBorder: 'border-[#B48520]/30 dark:border-[#F5C761]/40',
          border: isPopular 
            ? 'border-2 border-[#B48520] dark:border-[#F5C761] shadow-[0_0_35px_rgba(245,199,97,0.2)]' 
            : 'border border-[#B48520]/30 dark:border-[#F5C761]/30',
          btnBg: 'bg-gradient-to-r from-[#B48520] to-[#916613] dark:from-[#F5C761] dark:to-[#D97706] text-white dark:text-[#1A1000]',
          iconBg: 'bg-[#B48520]/10 dark:bg-[#F5C761]/15',
          iconColor: 'text-[#B48520] dark:text-[#F5C761]',
        };
      case 'emerald':
        return {
          badgeBg: 'bg-[#0F766E]/15 dark:bg-[#10B981]/20',
          badgeText: 'text-[#0F766E] dark:text-[#10B981]',
          badgeBorder: 'border-[#0F766E]/30 dark:border-[#10B981]/40',
          border: 'border border-[#0F766E]/30 dark:border-[#10B981]/30',
          btnBg: 'bg-[#0F766E] hover:bg-[#0F524C] dark:bg-[#10B981] dark:hover:bg-[#059669] text-white dark:text-[#042F2E]',
          iconBg: 'bg-[#0F766E]/10 dark:bg-[#10B981]/15',
          iconColor: 'text-[#0F766E] dark:text-[#10B981]',
        };
      case 'violet':
        return {
          badgeBg: 'bg-[#6D28D9]/15 dark:bg-[#8B5CF6]/20',
          badgeText: 'text-[#6D28D9] dark:text-[#A78BFA]',
          badgeBorder: 'border-[#6D28D9]/30 dark:border-[#8B5CF6]/40',
          border: 'border border-[#6D28D9]/30 dark:border-[#8B5CF6]/30',
          btnBg: 'bg-[#6D28D9] hover:bg-[#5B21B6] dark:bg-[#8B5CF6] dark:hover:bg-[#7C3AED] text-white',
          iconBg: 'bg-[#6D28D9]/10 dark:bg-[#8B5CF6]/15',
          iconColor: 'text-[#6D28D9] dark:text-[#A78BFA]',
        };
      case 'cyan':
      default:
        return {
          badgeBg: 'bg-[#0369A1]/15 dark:bg-[#38BDF8]/20',
          badgeText: 'text-[#0369A1] dark:text-[#38BDF8]',
          badgeBorder: 'border-[#0369A1]/30 dark:border-[#38BDF8]/40',
          border: 'border border-[#0369A1]/30 dark:border-[#38BDF8]/30',
          btnBg: 'bg-[#0F172A] hover:bg-[#1E293B] text-white',
          iconBg: 'bg-[#0369A1]/10 dark:bg-[#38BDF8]/15',
          iconColor: 'text-[#0369A1] dark:text-[#38BDF8]',
        };
    }
  };

  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'seo':
        return <Search className="w-5 h-5" />;
      case 'aeo':
        return <HelpCircle className="w-5 h-5" />;
      case 'geo':
        return <Bot className="w-5 h-5" />;
      case 'full-visibility':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 relative overflow-hidden" id={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-xs uppercase text-[var(--gold)] tracking-widest font-bold font-mono-code mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold)] animate-pulse" />
            <span>SEO • AEO • GEO Packages</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
            Get Found on Google.<br />
            <span className="bg-gradient-to-r from-[#B48520] via-[#0F766E] to-[#0369A1] dark:from-[#F5C761] dark:via-[#10B981] dark:to-[#38BDF8] bg-clip-text text-transparent">
              Get Cited by AI.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            Discovery is no longer just keywords in a search box. Modern buyers and executives ask <span className="font-semibold text-[var(--text-primary)]">Perplexity, ChatGPT, and Claude</span> for vendor recommendations. We optimize your business across all three modern search layers.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] shadow-inner">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'packages'
                  ? 'bg-white dark:bg-[#0F172A] text-[var(--text-primary)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              Service Packages &amp; Pricing
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white dark:bg-[#0F172A] text-[var(--text-primary)] shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              SEO vs. AEO vs. GEO Guide
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Packages Grid */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
            {VISIBILITY_PACKAGES.map((pkg, idx) => {
              const styles = getAccentStyles(pkg.accent, pkg.popular);
              const icon = getPackageIcon(pkg.id);

              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.08 * idx, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white dark:bg-[#0F172A] rounded-3xl p-6 sm:p-7 flex flex-col justify-between spatial-card relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.border} ${pkg.popular ? 'ring-1 ring-[var(--gold)]/30 shadow-[0_0_40px_rgba(245,199,97,0.15)]' : ''}`}
                >
                  {/* Popular Banner */}
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#B48520] to-[#D97706] text-white text-[10px] font-mono-code font-bold uppercase tracking-widest shadow-md">
                      Recommended • Save $300/mo
                    </div>
                  )}

                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4 mt-1">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${styles.iconBg} ${styles.iconColor}`}>
                        {icon}
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider border ${styles.badgeBg} ${styles.badgeText} ${styles.badgeBorder}`}>
                        {pkg.shortName}
                      </span>
                    </div>

                    {/* Name & Tagline */}
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-medium mb-5">
                      {pkg.tagline}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 pb-5 border-b border-[var(--glass-border)]">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] font-mono-code">
                          {pkg.billingPeriod}
                        </span>
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] mt-2 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Target Search & AI Engines */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono-code uppercase text-[var(--text-muted)] font-bold tracking-wider block mb-2">
                        Target Discovery Engines:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.targetEngines.map((engine, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[10px] font-mono-code text-[var(--text-secondary)] font-medium"
                          >
                            {engine}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono-code uppercase text-[var(--text-muted)] font-bold tracking-wider block mb-2.5">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${styles.iconColor}`} />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[var(--glass-border)] mt-4">
                    <a
                      href={`mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=${encodeURIComponent(pkg.emailSubject)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`magnetic-btn w-full py-3 px-4 rounded-xl font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all ${styles.btnBg}`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <div className="mt-2.5 text-center">
                      <span className="text-[10px] font-mono-code text-[var(--text-muted)]">
                        No lock-in contract • Cancel anytime
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Comparison Guide */}
        {activeTab === 'comparison' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white dark:bg-[#0F172A] rounded-3xl p-6 sm:p-10 spatial-card border border-[var(--glass-border)] shadow-sm"
          >
            <div className="max-w-2xl mb-8">
              <span className="font-mono-code text-xs uppercase text-[var(--gold)] tracking-widest font-bold block mb-2">
                Executive Clarity
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Understanding the 3 Modern Discovery Vectors
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                Why classic SEO is no longer enough: Search has bifurcated into traditional web search, direct AI answers, and conversational recommendations. Here is how they differ:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-[var(--glass-border)]">
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider w-1/4">
                      Dimension
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#0369A1] dark:text-[#38BDF8] uppercase tracking-wider w-1/4">
                      SEO (Search Engine Optimization)
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#0F766E] dark:text-[#10B981] uppercase tracking-wider w-1/4">
                      AEO (Answer Engine Optimization)
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#6D28D9] dark:text-[#A78BFA] uppercase tracking-wider w-1/4">
                      GEO (Generative Engine Optimization)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--glass-border)] text-xs sm:text-sm text-[var(--text-secondary)]">
                  {VISIBILITY_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[var(--bg-secondary)]/50 transition-colors">
                      <td className="py-4 px-3 font-headline font-bold text-[var(--text-primary)]">
                        {row.channel}
                      </td>
                      <td className="py-4 px-3 leading-relaxed">
                        {row.seo}
                      </td>
                      <td className="py-4 px-3 leading-relaxed">
                        {row.aeo}
                      </td>
                      <td className="py-4 px-3 leading-relaxed">
                        {row.geo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-headline text-base font-bold text-[var(--text-primary)]">
                  Ready to deploy 360° visibility for your company?
                </h4>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Start with the Full Visibility Package ($950/mo) and capture Google + AI answer engines simultaneously.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="mailto:contact@axorks.com,muhammad.mujahid@axorks.com?subject=Full%20Visibility%20Package%20Inquiry%20(SEO%20%2B%20AEO%20%2B%20GEO%20-%20%24950%2Fmo)%20-%20Axorks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn px-6 py-3 rounded-xl bg-gradient-to-r from-[#B48520] to-[#D97706] text-white text-xs font-headline font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
                >
                  <span>Book Full Visibility Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/923141030223?text=Hi%20Axorks%20team,%20I'm%20interested%20in%20your%20SEO,%20AEO,%20and%20GEO%20service%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-primary)] hover:text-[#0F766E] text-xs font-headline font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Trust & Guarantee Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[var(--glass-border)] text-center sm:text-left"
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-5 h-5 text-[var(--emerald)] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[var(--text-primary)]">Transparent Monthly Retainers</p>
              <p className="text-[11px] text-[var(--text-muted)]">Fixed fee, zero hidden agency markups or surprises.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Zap className="w-5 h-5 text-[var(--gold)] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[var(--text-primary)]">Rapid Technical Implementation</p>
              <p className="text-[11px] text-[var(--text-muted)]">Initial schema and technical audit live within 7 business days.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <TrendingUp className="w-5 h-5 text-[#0369A1] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[var(--text-primary)]">Verified Citation Tracking</p>
              <p className="text-[11px] text-[var(--text-muted)]">Monthly audit tracking citations across Perplexity, ChatGPT &amp; Google.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
