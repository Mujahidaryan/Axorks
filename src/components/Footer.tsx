import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-obsidian text-steel">
      {/* Ambient top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Top Call to Action Strip */}
      <div className="border-b border-white/[0.06] bg-obsidian-raised/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs sm:justify-start">
              <span className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="font-semibold text-paper leading-none">All Systems Operational</span>
              </span>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <span className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span className="leading-none">Guaranteed 24hr Response SLA</span>
              </span>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-paper/20 bg-paper px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-5 lg:gap-x-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-5 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-gold/40 bg-obsidian-raised p-1 shadow-sm shadow-gold/20">
                <Image
                  src="/logo.png"
                  alt="Axorks"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold tracking-tight text-paper">Axorks</span>
                <span className="font-mono text-[9px] tracking-widest text-gold uppercase">Software Studio</span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-steel">
              International software engineering company. Precision-engineered custom web platforms, AI automations, and enterprise cloud systems.
            </p>
            <div className="space-y-2.5 font-mono text-[11px] text-steel">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                </span>
                <span>Karachi &amp; Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Globe className="h-3.5 w-3.5 text-gold" />
                </span>
                <span>US · UK · EU · GCC</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Services</h3>
            <ul className="mt-5 space-y-3 text-xs">
              {[
                { label: 'Custom Website Development', href: '/services/website-development' },
                { label: 'Web Applications & Systems', href: '/services/web-applications' },
                { label: 'Mobile App Development', href: '/services/mobile-app-development' },
                { label: 'AI Solutions & Automation', href: '/services/ai-integration' },
                { label: 'Government & Enterprise', href: '/services/government-enterprise-solutions' },
                { label: 'Maintenance & Support', href: '/services/maintenance-support' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-center gap-1.5 leading-relaxed transition-colors hover:text-paper">
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Company</h3>
            <ul className="mt-5 space-y-3 text-xs">
              {[
                { label: 'About Axorks', href: '/about' },
                { label: 'Engineering Process', href: '/process' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog & Insights', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-center gap-1.5 leading-relaxed transition-colors hover:text-paper">
                    <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-3" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Delivery Column */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Global Delivery</h3>
            <ul className="mt-5 space-y-3.5 font-mono text-xs text-steel">
              <li className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]">
                <span className="block font-semibold text-paper">United Kingdom</span>
                <span className="mt-0.5 block text-[11px]">GMT / BST Overlap</span>
              </li>
              <li className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]">
                <span className="block font-semibold text-paper">North America</span>
                <span className="mt-0.5 block text-[11px]">EST / PST Coverage</span>
              </li>
              <li className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]">
                <span className="block font-semibold text-paper">Europe / EU</span>
                <span className="mt-0.5 block text-[11px]">CET / CEST Overlap</span>
              </li>
              <li className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]">
                <span className="block font-semibold text-paper">GCC / MENA</span>
                <span className="mt-0.5 block text-[11px]">AST / GST Region</span>
              </li>
            </ul>
          </div>

          {/* Direct Channels Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Direct Channels</h3>
            <ul className="mt-5 space-y-3.5 text-xs">
              <li>
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 leading-relaxed transition-colors hover:text-paper"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold/10 group-hover:ring-gold/30">
                    <Phone className="h-3.5 w-3.5 text-gold" />
                  </span>
                  +92 314 1030223
                  <ArrowUpRight className="h-3 w-3 text-steel/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-2.5 leading-relaxed transition-colors hover:text-paper"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold/10 group-hover:ring-gold/30">
                    <Mail className="h-3.5 w-3.5 text-gold" />
                  </span>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 leading-relaxed transition-colors hover:text-paper"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-gold/10 group-hover:ring-gold/30">
                    <Linkedin className="h-3.5 w-3.5 text-gold" />
                  </span>
                  linkedin.com/in/axorks
                  <ArrowUpRight className="h-3 w-3 text-steel/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>

            {/* Legal Links */}
            <div className="mt-9">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Legal</h3>
              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <Link href="/privacy" className="transition-colors hover:text-paper">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="transition-colors hover:text-paper">Terms &amp; Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-7 text-[11px] text-steel sm:flex-row">
          <p>© {new Date().getFullYear()} Axorks Pvt Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono">
            <span className="transition-colors hover:text-paper">Precision Engineering</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="transition-colors hover:text-paper">AI-Native Delivery</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="font-semibold text-gold">Global Remote</span>
          </div>
        </div>
      </div>
    </footer>
  );
}