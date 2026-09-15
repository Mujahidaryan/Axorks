import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import { useRouter, RoutePath } from '../router/Router';
import { useCal } from '../context/CalContext';

interface HeaderProps {
  onOpenDiscovery?: () => void;
}

const NAV_LINKS: { label: string; path: string }[] = [
  { label: 'Services', path: '/services' },
  { label: 'Work', path: '/work' },
  { label: 'Process', path: '/process' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Team', path: '/team' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenDiscovery }) => {
  const { path: currentPath, navigate } = useRouter();
  const { openCal } = useCal();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleCta = () => {
    setIsOpen(false);
    if (onOpenDiscovery) {
      onOpenDiscovery();
    } else {
      openCal();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060913]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[76px]">
        {/* Logo and Wordmark */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 group text-left cursor-pointer"
          aria-label="AXORKS Technologies Home"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#F5C761]/45 shadow-[0_0_20px_rgba(245,199,97,0.25)] bg-[#111622] flex items-center justify-center group-hover:border-[#F5C761] transition-all shrink-0">
            <img
              src="/Logos/axorks_monogram.png"
              alt="AXORKS Technologies official metallic emblem"
              className="w-full h-full object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-widest text-white group-hover:text-[#F5C761] transition-colors leading-none font-mono">
              AXORKS
            </span>
            <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase mt-0.5">
              TECHNOLOGIES
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.path || (link.path === '/insights' && currentPath === '/blog');

            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`relative px-3 py-2 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer rounded-lg ${
                  isActive
                    ? 'text-[#F5C761] font-bold bg-white/[0.05]'
                    : 'text-slate-300 hover:text-[#F5C761] hover:bg-white/[0.02]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#F5C761] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Action */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="hidden 2xl:flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            <ShieldCheck className="h-3 w-3 text-[#F5C761]" />
            <span>From $1,000 · Fixed Price</span>
          </div>

          <button
            onClick={handleCta}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F5C761] via-[#E4B54D] to-[#D4A843] text-[#1A1000] text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:brightness-105 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#1A1000]" />
            <span>Book Discovery Call</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex xl:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#F5C761] transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden overflow-hidden bg-[#060913]/98 backdrop-blur-2xl border-t border-white/[0.08]"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              <div className="mb-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-[#F5C761] font-medium flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>Projects start from $1,000. Fixed-price proposals in 24h.</span>
              </div>

              {NAV_LINKS.map((link) => {
                const isActive = currentPath === link.path || (link.path === '/insights' && currentPath === '/blog');

                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left px-4 py-3 rounded-xl transition-all text-xs uppercase tracking-wider font-semibold cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'text-[#F5C761] font-bold bg-white/[0.06]'
                        : 'text-slate-300 hover:text-[#F5C761] hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5C761]" />}
                  </button>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <button
                  onClick={handleCta}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#F5C761] to-[#D4A843] text-[#1A1000] text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Discovery Call</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
