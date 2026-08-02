import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';
import { CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian text-steel">
      {/* Top Call to Action Strip */}
      <div className="border-b border-white/10 bg-obsidian-raised/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-paper font-semibold">All Systems Operational</span>
              <span className="text-steel/60">·</span>
              <span className="text-steel">Guaranteed 24hr Response SLA</span>
            </div>
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-paper/20 bg-paper px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-obsidian transition-all hover:bg-white hover:scale-[1.02]"
            >
              Start a Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-md border border-gold/40 bg-obsidian-raised p-1 shadow-sm shadow-gold/20">
                <Image
                  src="/logo.png"
                  alt="Axorks"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-paper">Axorks</span>
                <span className="font-mono text-[9px] tracking-widest text-gold uppercase">Software Studio</span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-steel">
              International software engineering company. Precision-engineered custom web platforms, AI automations, and enterprise cloud systems.
            </p>
            <div className="space-y-2 font-mono text-[11px] text-steel">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>Karachi &amp; Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-gold shrink-0" />
                <span>US · UK · EU · GCC</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Services</h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              {[
                { label: 'Custom Website Development', href: '/services/website-development' },
                { label: 'Web Applications & Systems', href: '/services/web-applications' },
                { label: 'Mobile App Development', href: '/services/mobile-app-development' },
                { label: 'AI Solutions & Automation', href: '/services/ai-integration' },
                { label: 'Government & Enterprise', href: '/services/government-enterprise-solutions' },
                { label: 'Maintenance & Support', href: '/services/maintenance-support' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-gold flex items-center gap-1 group">
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Company</h3>
            <ul className="mt-4 space-y-2.5 text-xs">
              {[
                { label: 'About Axorks', href: '/about' },
                { label: 'Engineering Process', href: '/process' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog & Insights', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Delivery Column */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Global Delivery</h3>
            <ul className="mt-4 space-y-2.5 font-mono text-xs text-steel">
              <li className="flex flex-col gap-0.5">
                <span className="text-paper font-semibold">United Kingdom</span>
                <span className="text-[11px]">GMT / BST Overlap</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-paper font-semibold">North America</span>
                <span className="text-[11px]">EST / PST Coverage</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-paper font-semibold">Europe / EU</span>
                <span className="text-[11px]">CET / CEST Overlap</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-paper font-semibold">GCC / MENA</span>
                <span className="text-[11px]">AST / GST Region</span>
              </li>
            </ul>
          </div>

          {/* Direct Channels Column */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Direct Channels</h3>
            <ul className="mt-4 space-y-3 text-xs">
              <li>
                <a
                  href="https://wa.me/923141030223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                  +92 314 1030223
                  <ArrowUpRight className="h-3 w-3 text-steel/50" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <Mail className="h-3.5 w-3.5 text-gold shrink-0" />
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
                  <Linkedin className="h-3.5 w-3.5 text-gold shrink-0" />
                  linkedin.com/in/axorks
                  <ArrowUpRight className="h-3 w-3 text-steel/50" />
                </a>
              </li>
            </ul>

            {/* Legal Links */}
            <div className="mt-8">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-paper">Legal</h3>
              <ul className="mt-3 space-y-2 text-xs">
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
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-3 text-[11px] text-steel sm:flex-row">
          <p>© {new Date().getFullYear()} Axorks Software Engineering Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 font-mono">
            <span>Precision Engineering</span>
            <span className="text-white/20">·</span>
            <span>AI-Native Delivery</span>
            <span className="text-white/20">·</span>
            <span className="text-gold">Global Remote</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
