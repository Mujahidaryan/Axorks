import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { useRouter, RoutePath } from '../router/Router';

interface HeaderProps {
  onOpenDiscovery?: () => void;
}

const NAV_LINKS: { label: string; path: RoutePath; hash?: string; isPill?: boolean }[] = [
  { label: 'Services', path: '/services' },
  { label: 'SEO • AEO • GEO', path: '/services', hash: 'visibility-packages', isPill: true },
  { label: 'Work', path: '/work' },
  { label: 'Process', path: '/process' },
  { label: 'Team', path: '/team' },
  { label: 'Careers', path: '/careers' }
];

export const Header: React.FC<HeaderProps> = ({ onOpenDiscovery }) => {
  const { path: currentPath, navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on mount to catch initial state
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (path: RoutePath, hash?: string) => {
    setIsOpen(false);
    navigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const handleCta = () => {
    setIsOpen(false);
    if (onOpenDiscovery) {
      onOpenDiscovery();
    } else {
      navigate('/contact');
    }
  };

  // The invisible links bug occurs because subpages have a light background, 
  // but the navbar defaulted to transparent/white text until scrolled.
  // Fix: The navbar is ONLY transparent on the exact Homepage (which has a dark hero video).
  const isHome = currentPath === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'bg-[#050814]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.7)] py-3'
          : isHome
            ? 'bg-gradient-to-b from-[#050814]/85 to-transparent border-b border-transparent py-5'
            : 'bg-[#050814]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            aria-label="AXORKS Home"
          >
            {/* 100% Premium Logo Frame */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] overflow-hidden border border-white/20 bg-[#0F172A] shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0 group-hover:border-[var(--gold)]/40">
              <img
                src="/Logos/axorks_monogram.png"
                alt="AXORKS emblem"
                className="w-full h-full object-contain p-[5px]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-lg sm:text-xl font-extrabold tracking-widest text-white leading-none group-hover:text-[var(--gold)] transition-colors">
                AXORKS
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono-code tracking-widest uppercase mt-0.5 text-slate-400">
                TECHNOLOGIES
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.path && !link.hash;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className={`px-3 py-2 text-[11px] font-headline uppercase tracking-wider transition-all duration-300 rounded-lg cursor-pointer flex items-center gap-1.5 ${
                    link.isPill
                      ? 'border border-[var(--gold)]/60 text-[var(--gold)] bg-[var(--gold)]/10 hover:bg-[var(--gold)]/20 font-bold shadow-[0_0_15px_rgba(245,199,97,0.15)]'
                      : isActive
                        ? 'bg-white/15 text-white font-bold border border-white/15 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.08] font-semibold'
                  }`}
                >
                  {link.isPill && <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/923141030223?text=I'm%20interested%20in%20a%20technical%20discovery%20call%20and%20fixed-price%20proposal."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 hover:border-[#10B981]/60 shadow-[0_0_15px_rgba(16,185,129,0.12)]"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-5 py-2.5 rounded-xl font-headline text-[11px] uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-[#F5C761] via-[#EAB308] to-[#D97706] text-[#0A0F1D] shadow-[0_0_20px_rgba(245,199,97,0.3)] hover:shadow-[0_0_25px_rgba(245,199,97,0.45)] hover:brightness-105"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10 border border-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 pointer-events-auto bg-[#070B19]/98 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1.5 max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-headline tracking-wide uppercase transition-colors flex items-center justify-between ${
                    link.isPill
                      ? 'bg-[var(--gold)]/10 text-[var(--gold)] font-bold border border-[var(--gold)]/30 my-1'
                      : currentPath === link.path && !link.hash
                        ? 'bg-white/15 text-white font-bold border border-white/10'
                        : 'text-slate-300 font-semibold hover:bg-white/[0.08] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {link.isPill && <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />}
                    <span>{link.label}</span>
                  </div>
                  {link.isPill && (
                    <span className="text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-full bg-[var(--gold)]/20 text-[var(--gold)]">
                      $250+
                    </span>
                  )}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@axorks.com,contact@axorks.com&su=Discovery%20Call%20Request%20-%20Axorks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-3.5 bg-gradient-to-r from-[#F5C761] via-[#EAB308] to-[#D97706] text-[#0A0F1D] rounded-xl font-headline text-xs font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(245,199,97,0.3)]"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923141030223?text=I'm%20interested%20in%20a%20technical%20discovery%20call%20and%20fixed-price%20proposal."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-1.5 flex items-center justify-center gap-2 px-4 py-3 bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 rounded-xl font-headline text-xs font-bold tracking-wider uppercase hover:bg-[#10B981]/25 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: +92 314 103 0223</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
