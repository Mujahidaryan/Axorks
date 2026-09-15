import React from 'react';
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, ShoppingBag, TrendingUp } from 'lucide-react';
import { useCal } from '../../context/CalContext';
import { SEOHead } from '../../components/SEOHead';
import { GuaranteeSection } from '../../components/GuaranteeSection';
import { useRouter } from '../../router/Router';

export const FumeCaseStudy: React.FC = () => {
  const { openCal } = useCal();
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#030712] text-[#F8FAFC]">
      <SEOHead
        title="FUME Fragrances Case Study: Luxury E-Commerce & Brand Elevation | Axorks"
        description="How Axorks designed and built the haute parfumerie digital boutique for FUME Fragrances, increasing Average Order Value (AOV) by 34% with a bespoke design system."
        canonicalPath="/work/fume"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to All Case Studies</span>
        </button>
      </div>

      <section className="pt-6 pb-16 sm:pt-10 sm:pb-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-400 border border-rose-500/20">
              Haute Parfumerie &amp; Luxury E-Commerce
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 border border-white/5">
              Bespoke Digital Storefront
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl tracking-tight leading-tight">
            FUME Fragrances: High-ticket luxury e-commerce with +34% AOV growth.
          </h1>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-rose-400">+34%</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Average Order Value Lift</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#F5C761]">100%</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Bespoke Design System</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-cyan-400">&lt;0.8s</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Product Page Load Speed</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#080E20]/80 p-6 backdrop-blur-md">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-purple-400">6 Wks</span>
              <p className="mt-2 text-xs uppercase tracking-wider font-semibold text-slate-300">Fixed-Price Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#050916]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-2xl">
            <img
              src="/Images/4bVSv.jpg"
              alt="FUME Fragrances premium product bottle presentation"
              className="w-full h-auto object-cover max-h-[700px]"
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-red-400">The Problem</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Generic e-commerce templates diluted brand prestige and suppressed conversion on high-ticket bottles.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              FUME&apos;s haute parfumerie collections retail at luxury price points. Standard Shopify and WooCommerce templates failed to convey the artistic tactile feel, artisanal formulation, and olfactory journey required to convert high-net-worth fragrance connoisseurs online without an in-person scent test.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">The Solution</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              Bespoke digital boutique with interactive olfactory notes and sample discovery bundles.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Axorks designed and engineered a custom e-commerce architecture from the ground up. Interactive scent pyramids illustrate top, heart, and base notes dynamically. A custom discovery collection selector enables customers to curate 5-vial sample sets with automatic purchase-credit rebates toward full-size bottles, dramatically reducing initial purchase hesitation.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 sm:p-10">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400">The Verified Outcome</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
              +34% Average Order Value lift and rapid discovery-set conversion flywheel.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
              Average Order Value (AOV) increased by 34% within the first 60 days post-launch. Over 48% of customers who ordered the discovery sample bundle returned to purchase a full 100ml bottle within 30 days. Page load times dropped below 800ms globally on edge CDN hosting.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Boutique Packaging &amp; Product Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/MCraF.jpg" alt="FUME discovery collection" className="w-full h-auto object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src="/Images/4ma95.jpg" alt="FUME product page" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-rose-500/20 bg-[#080E20] p-8 sm:p-10">
            <p className="text-lg sm:text-xl italic text-slate-200">
              &ldquo;We didn&apos;t want our website to feel like just another online catalog. Axorks captured the soul of our atelier and turned our digital presence into a genuine brand asset.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img src="/Logos/fume_logo.jpg" alt="FUME logo" className="h-8 object-contain" />
              <div>
                <p className="font-bold text-white">Sophie Laurent</p>
                <p className="text-xs text-slate-400">Creative Director, FUME Fragrances Paris</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GuaranteeSection />
    </div>
  );
};
