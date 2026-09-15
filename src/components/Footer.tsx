import React from 'react';
import { Mail, MessageSquare, MapPin, ArrowRight, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';
import { useRouter } from '../router/Router';
import { useCal } from '../context/CalContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const { openCal } = useCal();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-[#060A16] text-slate-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 mb-5 text-left cursor-pointer group"
              aria-label="AXORKS Technologies Home"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#F5C761]/45 shadow-[0_0_20px_rgba(245,199,97,0.25)] bg-[#111622] flex items-center justify-center shrink-0 group-hover:border-[#F5C761] transition-all">
                <img
                  src="/Logos/axorks_monogram.png"
                  alt="AXORKS Technologies official monogram"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-lg font-extrabold tracking-widest text-white group-hover:text-[#F5C761] transition-colors leading-none">
                  AXORKS
                </span>
                <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              AI-first software engineering studio with physical offices in Karachi and Islamabad. We architect autonomous multi-agent pipelines, bespoke Next.js web applications, and high-performance Flutter mobile apps.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 max-w-sm mb-6">
              <div className="flex items-center gap-2 text-[#F5C761] text-xs font-semibold mb-1">
                <ShieldCheck className="h-4 w-4" />
                <span>Commercial Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Projects start from $1,000. Every project receives a fixed-price proposal before development begins.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={openCal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] text-[#1A1000] text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#1A1000]" />
                <span>Book Discovery Call</span>
              </button>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white font-bold font-mono mb-4">
              Core Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'AI & Multi-Agent Systems', path: '/services/ai-automation' },
                { label: 'Custom Web Applications', path: '/services/web-applications' },
                { label: 'Cross-Platform Mobile Apps', path: '/services/mobile-apps' },
                { label: 'Web3 & Audited Contracts', path: '/services/web3-blockchain' },
                { label: 'Proactive Cloud & DevOps', path: '/services/ongoing-support' },
                { label: 'All Services Hub', path: '/services' },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-slate-400 hover:text-[#F5C761] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white font-bold font-mono mb-4">
              Case Studies
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: 'AgroTrace (IoT Logistics)', path: '/work/agrotrace' },
                { label: 'IPMI-OS 2.0 (Trading Engine)', path: '/work/ipmi-os' },
                { label: 'MediVerse (Healthcare AI)', path: '/work/mediverse' },
                { label: 'FUME Fragrances (E-Commerce)', path: '/work/fume' },
                { label: 'View All Production Work', path: '/work' },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-xs uppercase tracking-wider text-white font-bold font-mono mt-6 mb-3">
              Governance
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { label: 'Fixed-Price Pricing', path: '/pricing' },
                { label: '4-Phase Process', path: '/process' },
                { label: 'Frequently Asked Questions', path: '/faq' },
              ].map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Physical Studios */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-white font-bold font-mono mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href="mailto:contact@axorks.com?subject=Project%20Inquiry%3A%20AXORKS%20Technologies"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#F5C761] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F5C761] shrink-0" />
                  <span>contact@axorks.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+92 314 103 0223</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Karachi Studio</p>
                  <p className="text-[11px] text-slate-400">Gulshan-e-Iqbal Block 13-A</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Islamabad Studio</p>
                  <p className="text-[11px] text-slate-400">Blue Area Business District</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <button
                onClick={() => navigate('/contact')}
                className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Full Contact &amp; Inquiry Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Axorks Pvt Limited. Registered Private Software Engineering Company.
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
            <span className="text-cyan-400">Serving USA • UK • Europe • UAE • Saudi Arabia</span>
            <span className="text-slate-600">•</span>
            <span>100% IP Ownership Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
