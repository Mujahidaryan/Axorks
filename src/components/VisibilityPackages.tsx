import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  Bot, 
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

export const VisibilityPackages: React.FC<VisibilityPackagesProps> = ({ id = 'visibility-packages' }) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'comparison'>('packages');

  const getAccentStyles = (accent: VisibilityPackage['accent'], isPopular?: boolean) => {
    switch (accent) {
      case 'gold':
        return {
          badgeBg: 'bg-[#E8B923]/10',
          badgeText: 'text-[#E8B923]',
          badgeBorder: 'border-[#E8B923]/30',
          border: isPopular 
            ? 'border-2 border-[#E8B923] ring-1 ring-[#E8B923]/30 shadow-[0_20px_50px_rgba(232,185,35,0.12)]' 
            : 'border border-[rgba(146,157,167,0.14)]',
          btnBg: 'bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] shadow-[0_4px_20px_rgba(232,185,35,0.3)] hover:brightness-105',
          iconBg: 'bg-[#E8B923]/10',
          iconColor: 'text-[#E8B923]',
        };
      case 'vermilion':
        return {
          badgeBg: 'bg-[#E85A3C]/10',
          badgeText: 'text-[#E85A3C]',
          badgeBorder: 'border-[#E85A3C]/30',
          border: 'border border-[rgba(146,157,167,0.14)] hover:border-[#E85A3C]/40',
          btnBg: 'bg-[#E85A3C] hover:bg-[#D44729] text-white shadow-[0_4px_16px_rgba(232,90,60,0.25)]',
          iconBg: 'bg-[#E85A3C]/10',
          iconColor: 'text-[#E85A3C]',
        };
      case 'teal':
      default:
        return {
          badgeBg: 'bg-[#1B3836]/60',
          badgeText: 'text-[#5EEAD4]',
          badgeBorder: 'border-[#2A5452]',
          border: 'border border-[rgba(146,157,167,0.14)] hover:border-[#2A5452]',
          btnBg: 'bg-[#161618] hover:bg-[#1E1E22] text-[#F4F4F5] border border-[rgba(146,157,167,0.2)]',
          iconBg: 'bg-[#1B3836]/60',
          iconColor: 'text-[#5EEAD4]',
        };
    }
  };

  const getPackageIcon = (pkgId: string) => {
    switch (pkgId) {
      case 'foundation-audit':
        return <Search className="w-5 h-5" />;
      case 'aeo-geo':
        return <Bot className="w-5 h-5" />;
      case 'all-in-visibility':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="w-full bg-[#08080A] py-20 lg:py-28 relative overflow-hidden border-b border-[rgba(146,157,167,0.14)]" id={id}>
      {/* Deep atmospheric ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E85A3C]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#E8B923]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161618] border border-[rgba(146,157,167,0.14)] text-xs uppercase text-[#E8B923] tracking-widest font-bold font-mono-code mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E8B923]" />
            <span>Search &amp; AI Visibility Systems</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F4F5] tracking-tight leading-tight">
            Rank on Google.<br />
            <span className="bg-gradient-to-r from-[#E8B923] via-[#E85A3C] to-[#5EEAD4] bg-clip-text text-transparent">
              Be Cited by AI.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Modern high-value clients and enterprise executives do not just type keywords into Google. They ask <span className="text-[#F4F4F5] font-semibold">Perplexity, ChatGPT, and Claude</span> for qualified vendor recommendations. We structure your digital entity across all three discovery layers.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#121214] border border-[rgba(146,157,167,0.14)] shadow-inner">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'packages'
                  ? 'bg-[#161618] text-[#F4F4F5] border border-[rgba(146,157,167,0.2)] shadow-md'
                  : 'text-[#71717A] hover:text-[#F4F4F5]'
              }`}
            >
              Engine Tiers &amp; Pricing
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-[#161618] text-[#F4F4F5] border border-[rgba(146,157,167,0.2)] shadow-md'
                  : 'text-[#71717A] hover:text-[#F4F4F5]'
              }`}
            >
              Search vs. AEO vs. GEO Guide
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Packages Grid (3 Columns) */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
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
                  className={`bg-[#121214] rounded-3xl p-7 sm:p-8 flex flex-col justify-between spatial-card relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${styles.border}`}
                  style={{ overflow: 'visible' }}
                >
                  {/* Popular Banner */}
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E8B923] via-[#F0C735] to-[#D69E15] text-[#08080A] text-[10px] font-mono-code font-extrabold uppercase tracking-widest shadow-[0_4px_16px_rgba(232,185,35,0.4)] border border-[#E8B923]/60 whitespace-nowrap z-20 pointer-events-none">
                      Recommended · 360° Dominance
                    </div>
                  )}

                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5 mt-1">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${styles.iconBg} ${styles.iconColor} border border-[rgba(146,157,167,0.14)]`}>
                        {icon}
                      </div>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono-code font-bold uppercase tracking-wider border ${styles.badgeBg} ${styles.badgeText} ${styles.badgeBorder}`}>
                        {pkg.shortName}
                      </span>
                    </div>

                    {/* Name & Tagline */}
                    <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#F4F4F5] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#71717A] font-medium mb-5">
                      {pkg.tagline}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 pb-5 border-b border-[rgba(146,157,167,0.14)]">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[#F4F4F5]">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-[#71717A] font-mono-code">
                          {pkg.billingPeriod}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1A1AA] mt-2.5 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Target Search & AI Engines */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono-code uppercase text-[#71717A] font-bold tracking-wider block mb-2">
                        Target Discovery Corpuses:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.targetEngines.map((engine, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md bg-[#161618] border border-[rgba(146,157,167,0.12)] text-[10px] font-mono-code text-[#A1A1AA] font-medium"
                          >
                            {engine}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono-code uppercase text-[#71717A] font-bold tracking-wider block mb-2.5">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs text-[#A1A1AA]">
                        {pkg.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${styles.iconColor}`} />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[rgba(146,157,167,0.14)] mt-4">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=${encodeURIComponent(pkg.emailSubject)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`magnetic-btn w-full py-3.5 px-4 rounded-xl font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all ${styles.btnBg}`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <div className="mt-2.5 text-center">
                      <span className="text-[10px] font-mono-code text-[#71717A]">
                        Transparent agreement · Cancel anytime
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
            className="bg-[#121214] rounded-3xl p-6 sm:p-10 spatial-card border border-[rgba(146,157,167,0.14)] shadow-2xl"
          >
            <div className="max-w-2xl mb-8">
              <span className="font-mono-code text-xs uppercase text-[#E8B923] tracking-widest font-bold block mb-2">
                Executive Clarity
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[#F4F4F5]">
                Why Traditional Keyword SEO Is No Longer Sufficient
              </h3>
              <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">
                Modern enterprise search has bifurcated into three distinct channels: traditional web search result pages, direct AI answer engines, and conversational vendor recommendations. Here is how our architecture targets each layer:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-[rgba(146,157,167,0.14)]">
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#71717A] uppercase tracking-wider w-1/4">
                      Strategic Vector
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#5EEAD4] uppercase tracking-wider w-1/4">
                      Foundation Audit ($99)
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#E85A3C] uppercase tracking-wider w-1/4">
                      AEO + GEO Engine ($199/mo)
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#E8B923] uppercase tracking-wider w-1/4">
                      All-In Visibility ($299/mo)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(146,157,167,0.1)] text-xs sm:text-sm text-[#A1A1AA]">
                  {VISIBILITY_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#161618]/50 transition-colors">
                      <td className="py-4 px-3 font-headline font-bold text-[#F4F4F5]">
                        {row.channel}
                      </td>
                      <td className="py-4 px-3 leading-relaxed">
                        {row.foundation}
                      </td>
                      <td className="py-4 px-3 leading-relaxed">
                        {row.aeoGeo}
                      </td>
                      <td className="py-4 px-3 leading-relaxed font-semibold text-[#F4F4F5]">
                        {row.allIn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-[#161618] border border-[rgba(146,157,167,0.14)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-headline text-base font-bold text-[#F4F4F5]">
                  Ready to deploy complete Google + AI citation coverage?
                </h4>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Start with the All-In Visibility Engine ($299/mo) to capture traditional Google ranking and direct AI answers concurrently.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=All-In%20Visibility%20Engine%20Inquiry%20(%24299%2Fmo)%20-%20Axorks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E8B923] to-[#D69E15] text-[#08080A] text-xs font-headline font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_16px_rgba(232,185,35,0.3)]"
                >
                  <span>Book All-In Visibility Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/923141030223?text=Hi%20Axorks%20team,%20I'm%20interested%20in%20your%20SEO,%20AEO,%20and%20GEO%20service%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-xl bg-[#121214] border border-[rgba(146,157,167,0.14)] text-[#F4F4F5] hover:text-[#5EEAD4] text-xs font-headline font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#5EEAD4]" />
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
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[rgba(146,157,167,0.14)] text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <ShieldCheck className="w-5 h-5 text-[#5EEAD4] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#F4F4F5]">Transparent Monthly Retainers</p>
              <p className="text-[11px] text-[#71717A]">Fixed fee, zero hidden agency markups or surprises.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <Zap className="w-5 h-5 text-[#E8B923] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#F4F4F5]">Rapid Technical Deployment</p>
              <p className="text-[11px] text-[#71717A]">Initial schema and diagnostic roadmap live within 5 business days.</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 justify-center sm:justify-start">
            <TrendingUp className="w-5 h-5 text-[#E85A3C] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#F4F4F5]">Verified Citation Audits</p>
              <p className="text-[11px] text-[#71717A]">Bi-weekly audits tracking attribution across Perplexity, ChatGPT, and Google.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
