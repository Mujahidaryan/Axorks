'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-obsidian/85 backdrop-blur-xl transition-all duration-300">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Ambient hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

        {/* Brand Mark with Full Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-95">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-gold/40 bg-obsidian-raised p-1 shadow-sm shadow-gold/20 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Axorks Mark"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-xl font-bold tracking-tight text-paper">
              Axorks
            </span>
            <span className="font-mono text-[9px] tracking-widest text-gold uppercase">
              Software Studio
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-paper' : 'text-steel hover:text-paper'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[22px] left-0 h-[2px] w-full bg-gradient-to-r from-gold via-gold to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex md:items-center">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full border border-paper/20 bg-paper px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-paper/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book Discovery Call
            <ArrowUpRight className="h-4 w-4 text-obsidian transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-steel transition-colors hover:bg-obsidian-raised hover:text-paper focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-t border-white/5 bg-obsidian-raised/95 px-4 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 font-mono text-sm font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-gold/10 text-gold'
                      : 'text-steel hover:bg-obsidian hover:text-paper'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                </Link>
              );
            })}
            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-paper py-3 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-all hover:bg-white"
              >
                Book Discovery Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}