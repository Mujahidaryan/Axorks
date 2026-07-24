import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, Linkedin } from 'lucide-react';
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="border-t border-obsidian-border bg-obsidian-raised text-steel">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded border border-gold/30 bg-obsidian p-1">
                <Image
                  src="/logo.png"
                  alt="Axorks"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-paper">
                Axorks
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-steel">
              Engineering the future. Solving today. Founder-led software studio shipping production-grade, AI-augmented, and government-scale software systems.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-paper">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/" className="transition-colors hover:text-paper">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-paper">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-paper">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="transition-colors hover:text-paper">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-paper">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="transition-colors hover:text-gold font-medium">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-paper">
              Direct Channels
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  +92 314 1030223
                  <ArrowUpRight className="h-3 w-3 text-steel" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Mail className="h-3.5 w-3.5 text-gold" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Linkedin className="h-3.5 w-3.5 text-gold" />
                  linkedin.com/in/axorks
                  <ArrowUpRight className="h-3 w-3 text-steel" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Engineering */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-paper">
              Legal & Info
            </h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-paper">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-paper">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <span className="text-steel/70">
                  Location: Karachi & Islamabad, PK
                </span>
              </li>
              <li>
                <span className="text-steel/70">
                  Deployment: Vercel + Neon DB
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-obsidian-border/50 pt-6 flex flex-col items-center justify-between gap-4 text-[11px] text-steel sm:flex-row">
          <p>© {new Date().getFullYear()} Axorks Software House. All rights reserved.</p>
          <p className="font-mono">Precision Engineering · AI-Native Delivery</p>
        </div>
      </div>
    </footer>
  );
}
