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
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-obsidian-border bg-obsidian/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Mark */}
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <div className="relative h-9 w-9 overflow-hidden rounded-md border border-gold/30 bg-obsidian-raised p-1">
            <Image
              src="/logo.png"
              alt="Axorks Logo"
              width={36}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-paper">
              Axorks
            </span>
            <span className="font-mono text-[10px] tracking-widest text-steel uppercase">
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
                className={`relative font-sans text-sm font-medium transition-colors ${
                  isActive ? 'text-gold' : 'text-steel hover:text-paper'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-gold transition-all" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex md:items-center">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-md border border-signal-blue bg-signal-blue px-4 py-2 text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal-blue-hover hover:shadow-lg hover:shadow-signal-blue/20"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-steel hover:bg-obsidian-raised hover:text-paper focus:outline-none md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-b border-obsidian-border bg-obsidian-raised px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    isActive ? 'text-gold' : 'text-steel hover:text-paper'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-signal-blue py-3 text-sm font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal-blue-hover"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
