'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isDarkHero = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/case-studies' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  // Dynamic header styles based on dark hero vs light pages and scroll position
  const getHeaderStyles = () => {
    if (isDarkHero) {
      if (isScrolled) {
        return 'border-b border-white/[0.08] bg-[#07080C]/90 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6)] backdrop-blur-md text-white';
      }
      return 'border-b border-white/[0.08] bg-transparent backdrop-blur-xs text-white';
    }

    if (isScrolled) {
      return 'border-b border-slate-200/90 bg-white/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] backdrop-blur-md text-slate-900';
    }
    return 'border-b border-slate-200/70 bg-transparent backdrop-blur-xs text-slate-900';
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${getHeaderStyles()}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo with original logo.png */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div
            className={`relative h-9 w-9 overflow-hidden rounded-[12px] p-0.5 shadow-sm transition-all duration-200 ${
              isDarkHero && !isScrolled
                ? 'border border-white/20 bg-white/10 group-hover:border-amber-400/60 group-hover:shadow-[0_0_14px_rgba(201,162,75,0.35)]'
                : isDarkHero && isScrolled
                ? 'border border-white/15 bg-white/5 group-hover:border-amber-400/60 group-hover:shadow-[0_0_14px_rgba(201,162,75,0.35)]'
                : 'border border-slate-200 bg-white group-hover:border-amber-300 group-hover:shadow-[0_0_12px_rgba(201,162,75,0.25)]'
            }`}
          >
            <Image
              src="/logo.png"
              alt="Axorks"
              width={36}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              isDarkHero ? 'text-white' : 'text-slate-900'
            }`}
          >
            Axorks
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isDarkHero
                    ? isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                    : isActive
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`group inline-flex items-center gap-2 rounded-[12px] px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              isDarkHero
                ? 'bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] text-slate-950 shadow-[0_4px_16px_rgba(201,162,75,0.28)] hover:shadow-[0_6px_22px_rgba(201,162,75,0.42)] hover:brightness-105'
                : 'bg-slate-900 text-white shadow-sm hover:bg-slate-800 hover:shadow-[0_4px_16px_rgba(15,23,42,0.15)]'
            }`}
          >
            <span>Book a free discovery call</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex items-center justify-center rounded-[12px] p-2 transition-colors md:hidden ${
            isDarkHero
              ? 'text-slate-300 hover:bg-white/10 hover:text-white'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          className={`border-t px-5 pb-6 pt-3 shadow-lg backdrop-blur-md md:hidden animate-fade-in ${
            isDarkHero
              ? 'border-white/10 bg-[#0B0D14]/98 text-white'
              : 'border-slate-100 bg-white/98 text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-[12px] px-4 py-2.5 text-sm font-medium transition-colors ${
                    isDarkHero
                      ? isActive
                        ? 'bg-white/10 font-semibold text-white border-l-2 border-[#C9A24B]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      : isActive
                      ? 'bg-amber-50/70 font-semibold text-slate-950 border-l-2 border-[#C9A24B]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className={`mt-3 pt-2 border-t ${isDarkHero ? 'border-white/10' : 'border-slate-100'}`}>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-gradient-to-r from-[#DFBD6C] via-[#C9A24B] to-[#B88E2F] py-3 text-sm font-semibold text-slate-950 shadow-sm hover:brightness-105"
              >
                <span>Book a free discovery call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}