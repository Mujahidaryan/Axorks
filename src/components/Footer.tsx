import Link from 'next/link';
import Image from 'next/image';
import {
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_FORMATTED,
  CONTACT_WHATSAPP,
  LINKEDIN_URL,
} from '@/lib/config';
import { Mail, MessageCircle, ArrowRight, ShieldCheck, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#0B0F19] text-slate-400 overflow-hidden">
      {/* Ambient background network texture with low opacity */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none opacity-15 mix-blend-screen">
        <Image
          src="/assets/illustrations/footer_network.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-[#0B0F19]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand & Enterprise Credibility (4 cols) */}
          <div className="space-y-4 lg:col-span-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 flex items-center gap-2.5"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-[8px] border border-white/20 bg-white/10 p-0.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Axorks"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <span>{SITE_NAME}</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Axorks Pvt Limited is an independent software engineering studio. We build custom web applications and automate manual operations with AI for growing businesses worldwide.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#C9A227] shrink-0" />
                <span>Offices in Karachi &amp; Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                <span>Serving clients across UK, US, EU, and GCC</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Fixed-price proposals &amp; milestone-based delivery</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions & Services (3 cols) */}
          <div className="space-y-3.5 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Solutions &amp; Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#web-applications"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-automation"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  AI Automation &amp; Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mobile-apps"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Mobile Application Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#support"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Ongoing Support &amp; Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  All Services &amp; Fixed Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Trust (2 cols) */}
          <div className="space-y-3.5 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/case-studies"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Our Work (Case Studies)
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  About Axorks
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Channels & SLA (3 cols) */}
          <div className="space-y-3.5 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct access to senior engineers on every project. Guaranteed response within 24 hours.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-indigo-400"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp ({CONTACT_WHATSAPP_FORMATTED})</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-white pt-1"
              >
                <span>Follow Axorks on LinkedIn</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Axorks Pvt Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-slate-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}