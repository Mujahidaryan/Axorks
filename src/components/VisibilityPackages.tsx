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
          badgeBg: 'bg-[#FEF3C7]',
          badgeText: 'text-[#92400E]',
          badgeBorder: 'border-[#FDE68A]',
          border: isPopular 
            ? 'border-2 border-[#D97706] ring-4 ring-[#F5C761]/20 shadow-[0_16px_45px_-8px_rgba(217,119,6,0.2)]' 
            : 'border border-[#E2DED4]',
          btnBg: 'bg-gradient-to-r from-[#F5C761] via-[#EAB308] to-[#D97706] text-[#1A1000] shadow-[0_4px_16px_rgba(245,199,97,0.4)] hover:brightness-105',
          iconBg: 'bg-[#FEF3C7]',
          iconColor: 'text-[#D97706]',
        };
      case 'emerald':
        return {
          badgeBg: 'bg-[#ECFDF5]',
          badgeText: 'text-[#065F46]',
          badgeBorder: 'border-[#A7F3D0]',
          border: 'border border-[#E2DED4]',
          btnBg: 'bg-[#059669] hover:bg-[#047857] text-white shadow-[0_4px_16px_rgba(5,150,105,0.25)]',
          iconBg: 'bg-[#ECFDF5]',
          iconColor: 'text-[#059669]',
        };
      case 'violet':
        return {
          badgeBg: 'bg-[#F5F3FF]',
          badgeText: 'text-[#5B21B6]',
          badgeBorder: 'border-[#DDD6FE]',
          border: 'border border-[#E2DED4]',
          btnBg: 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_4px_16px_rgba(124,58,237,0.25)]',
          iconBg: 'bg-[#F5F3FF]',
          iconColor: 'text-[#7C3AED]',
        };
      case 'cyan':
      default:
        return {
          badgeBg: 'bg-[#F0F9FF]',
          badgeText: 'text-[#075985]',
          badgeBorder: 'border-[#BAE6FD]',
          border: 'border border-[#E2DED4]',
          btnBg: 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-[0_4px_16px_rgba(2,132,199,0.25)]',
          iconBg: 'bg-[#F0F9FF]',
          iconColor: 'text-[#0284C7]',
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
    <section className="w-full bg-[#F8F7F4] py-16 sm:py-24 relative overflow-hidden border-b border-[#E2DED4] surface-luxury-light" id={id}>
      {/* Soft champagne & blue ambient light for surface depth */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F5C761]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-xs uppercase text-[#92400E] tracking-widest font-bold font-mono-code mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706] animate-pulse" />
            <span>SEO • AEO • GEO Packages</span>
          </div>

          <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1D] tracking-tight leading-tight">
            Get Found on Google.<br />
            <span className="bg-gradient-to-r from-[#D97706] via-[#059669] to-[#0284C7] bg-clip-text text-transparent">
              Get Cited by AI.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Discovery is no longer just keywords in a search box. Modern buyers and executives ask <span className="font-semibold text-[#0A0F1D]">Perplexity, ChatGPT, and Claude</span> for vendor recommendations. We optimize your business across all three modern search layers.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#EAE6DF] border border-[#D5D0C5] shadow-inner">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'packages'
                  ? 'bg-white text-[#0A0F1D] border border-[#D5D0C5] shadow-md'
                  : 'text-[#64748B] hover:text-[#0A0F1D]'
              }`}
            >
              Service Packages &amp; Pricing
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white text-[#0A0F1D] border border-[#D5D0C5] shadow-md'
                  : 'text-[#64748B] hover:text-[#0A0F1D]'
              }`}
            >
              SEO vs. AEO vs. GEO Guide
            </button>
          </div>
        </motion.div>

        {/* Tab 1: Packages Grid */}
        {activeTab === 'packages' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch pt-4">
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
                  className={`bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between spatial-card !overflow-visible relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-[0_12px_35px_-8px_rgba(10,15,29,0.06)] ${styles.border}`}
                  style={{ overflow: 'visible' }}
                >
                  {/* Popular Banner */}
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F5C761] via-[#EAB308] to-[#D97706] text-[#1A1000] text-[10px] font-mono-code font-extrabold uppercase tracking-widest shadow-[0_4px_15px_rgba(245,199,97,0.35)] border border-amber-300/50 whitespace-nowrap z-20 pointer-events-none">
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
                    <h3 className="font-headline text-lg sm:text-xl font-bold text-[#0A0F1D] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#64748B] font-medium mb-5">
                      {pkg.tagline}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 pb-5 border-b border-[#E2DED4]">
                      <div className="flex items-baseline gap-1">
                        <span className="font-display-hero text-3xl sm:text-4xl font-extrabold text-[#0A0F1D]">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-[#64748B] font-mono-code">
                          {pkg.billingPeriod}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#475569] mt-2 leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Target Search & AI Engines */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono-code uppercase text-[#64748B] font-bold tracking-wider block mb-2">
                        Target Discovery Engines:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.targetEngines.map((engine, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-[#F1EFEA] border border-[#E2DED4] text-[10px] font-mono-code text-[#1E293B] font-medium"
                          >
                            {engine}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features List */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono-code uppercase text-[#64748B] font-bold tracking-wider block mb-2.5">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs text-[#334155]">
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
                  <div className="pt-4 border-t border-[#E2DED4] mt-4">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=${encodeURIComponent(pkg.emailSubject)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`magnetic-btn w-full py-3 px-4 rounded-xl font-headline font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all ${styles.btnBg}`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <div className="mt-2.5 text-center">
                      <span className="text-[10px] font-mono-code text-[#64748B]">
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
            className="bg-white rounded-3xl p-6 sm:p-10 spatial-card border border-[#E2DED4] shadow-2xl"
          >
            <div className="max-w-2xl mb-8">
              <span className="font-mono-code text-xs uppercase text-[#B45309] tracking-widest font-bold block mb-2">
                Executive Clarity
              </span>
              <h3 className="font-display-hero text-2xl sm:text-3xl font-bold text-[#0A0F1D]">
                Understanding the 3 Modern Discovery Vectors
              </h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                Why classic SEO is no longer enough: Search has bifurcated into traditional web search, direct AI answers, and conversational recommendations. Here is how they differ:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-[#E2DED4]">
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#64748B] uppercase tracking-wider w-1/4">
                      Dimension
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#0284C7] uppercase tracking-wider w-1/4">
                      SEO (Search Engine Optimization)
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#059669] uppercase tracking-wider w-1/4">
                      AEO (Answer Engine Optimization)
                    </th>
                    <th className="py-4 px-3 font-headline text-xs font-bold text-[#7C3AED] uppercase tracking-wider w-1/4">
                      GEO (Generative Engine Optimization)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2DED4] text-xs sm:text-sm text-[#334155]">
                  {VISIBILITY_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                      <td className="py-4 px-3 font-headline font-bold text-[#0A0F1D]">
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

            <div className="mt-10 p-6 rounded-2xl bg-[#FAF9F6] border border-[#E2DED4] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-headline text-base font-bold text-[#0A0F1D]">
                  Ready to deploy 360° visibility for your company?
                </h4>
                <p className="text-xs text-[#475569] mt-1">
                  Start with the Full Visibility Package ($950/mo) and capture Google + AI answer engines simultaneously.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Full%20Visibility%20Package%20Inquiry%20(SEO%20%2B%20AEO%20%2B%20GEO%20-%20%24950%2Fmo)%20-%20Axorks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D97706] text-[#1A1000] text-xs font-headline font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_16px_rgba(245,199,97,0.3)]"
                >
                  <span>Book Full Visibility Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/923141030223?text=Hi%20Axorks%20team,%20I'm%20interested%20in%20your%20SEO,%20AEO,%20and%20GEO%20service%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-white border border-[#E2DED4] text-[#0A0F1D] hover:bg-[#F1EFEA] text-xs font-headline font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#059669]" />
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
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#E2DED4] text-center sm:text-left"
        >
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#0A0F1D]">Transparent Monthly Retainers</p>
              <p className="text-[11px] text-[#64748B]">Fixed fee, zero hidden agency markups or surprises.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Zap className="w-5 h-5 text-[#D97706] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#0A0F1D]">Rapid Technical Implementation</p>
              <p className="text-[11px] text-[#64748B]">Initial schema and technical audit live within 7 business days.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <TrendingUp className="w-5 h-5 text-[#0284C7] shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#0A0F1D]">Verified Citation Tracking</p>
              <p className="text-[11px] text-[#64748B]">Monthly audit tracking citations across Perplexity, ChatGPT &amp; Google.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
