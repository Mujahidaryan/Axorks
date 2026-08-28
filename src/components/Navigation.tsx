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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-b border-slate-200/70 bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-[12px] border border-slate-200 bg-white p-0.5 shadow-sm transition-shadow duration-200 group-hover:border-slate-300 group-hover:shadow">
            <Image
              src="/logo.png"
              alt="Axorks"
              width={36}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
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
                  isActive
                    ? 'text-slate-950 font-semibold'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-slate-900" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-[12px] bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
          >
            <span>Book a free discovery call</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-[12px] p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white/98 px-5 pb-6 pt-3 shadow-lg backdrop-blur-md md:hidden animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-[12px] px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 font-semibold text-slate-950'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-slate-900 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
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