import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Building2, Linkedin, Lock, FileCheck, Globe, CheckCircle2, UserCheck } from 'lucide-react';
import {
  SITE_URL,
  SITE_NAME,
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_FORMATTED,
  LINKEDIN_URL,
  ADDRESS_STREET,
  ADDRESS_CITY,
  ADDRESS_REGION,
  ADDRESS_POSTAL,
} from '@/lib/config';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Contact Axorks | Technical Discovery & Consultation Booking',
  description:
    'Schedule a technical consultation or request a 48-hour scoped estimate with Axorks Software Studio. Serving business leaders across the UK, US, EU, UAE, and worldwide.',
  openGraph: {
    title: 'Contact Axorks | International Project Discovery & Consultation',
    description:
      'Schedule a technical consultation or request a 48-hour scoped estimate with Axorks Software Studio for your custom software project.',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Axorks | Technical Consultation Booking',
    description: 'Schedule a technical consultation with Axorks Software Studio for custom web, AI, and mobile software engineering.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Axorks Software Studio',
    description:
      'Schedule a technical consultation or request a 48-hour scoped estimate with Axorks Software Studio in Karachi, Pakistan.',
    url: `${SITE_URL}/contact`,
    mainEntity: {
      '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
      name: `${SITE_NAME} Software Studio`,
      url: SITE_URL,
      telephone: '+923141030223',
      email: CONTACT_EMAIL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS_STREET,
        addressLocality: ADDRESS_CITY,
        addressRegion: ADDRESS_REGION,
        postalCode: ADDRESS_POSTAL,
        addressCountry: 'PK',
      },
    },
  };

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[30rem] w-[30rem] opacity-50" />
          <div className="exec-mesh mesh-amber-dark absolute -right-24 bottom-0 h-[24rem] w-[24rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[32rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact & Project Discovery' }]} />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>INITIATE_ENGINEERING_DISCOVERY</span>
            </div>
            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Contact the Axorks{' '}
              <span className="gradient-text-gold">Engineering Studio</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
              Connect directly with our engineering team at our Karachi software studio. Choose between scheduling a technical consultation or requesting a 48-hour scoped estimate below.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Low-commitment CTA notice banner */}
        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-obsidian-raised via-obsidian to-obsidian p-5 shadow-obsidian-sm">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="relative flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 shadow-[0_4px_16px_rgba(201,162,75,0.2)]">
              <FileCheck className="h-5 w-5 text-gold" />
            </div>
            <div className="text-xs">
              <span className="font-mono text-gold font-bold block uppercase">Lightweight Project Scoping:</span>
              <span className="text-steel">Prefer a quick initial quote? Submit your core requirements in the form below for a 48-hour scoped proposal.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Form Col */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Right Info Col */}
          <div className="space-y-6">
            <div className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-4">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-gold">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  DIRECT_STUDIO_LINE
                </span>
              </div>

              <h2 className="font-serif text-xl font-bold text-paper">
                Axorks Engineering Office
              </h2>
              <p className="text-xs text-steel">
                Software House &amp; Systems Studio
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-steel">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-paper transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-steel">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <a
                    href="https://wa.me/923141030223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-paper transition-colors"
                  >
                    {CONTACT_WHATSAPP_FORMATTED} (WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-2 text-steel">
                  <Linkedin className="h-4 w-4 text-gold shrink-0" />
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-paper transition-colors"
                  >
                    linkedin.com/in/axorks
                  </a>
                </div>

                <div className="flex items-start gap-2 text-steel">
                  <Building2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-paper font-semibold block">Karachi Headquarters:</span>
                    <span>{ADDRESS_STREET}, {ADDRESS_CITY}, {ADDRESS_REGION} {ADDRESS_POSTAL}, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-steel">
                  <MapPin className="h-4 w-4 text-gold shrink-0" />
                  <span>Serving: Karachi, Islamabad &amp; Worldwide</span>
                </div>

                <div className="flex items-center gap-2 text-steel">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  <span>Response SLA: &lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Static USD Investment Reference Card */}
            <div className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <span className="font-mono text-xs text-gold uppercase font-bold">
                ENGAGEMENT_TIER_SUMMARY
              </span>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Websites:</span>
                  <span className="text-paper font-bold">{PRICING.websiteDevelopment.shortRange}</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Web Apps:</span>
                  <span className="text-paper font-bold">{PRICING.webApplications.shortRange}</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Mobile Apps:</span>
                  <span className="text-paper font-bold">{PRICING.mobileAppDevelopment.shortRange}</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>AI Pipelines:</span>
                  <span className="text-paper font-bold">{PRICING.aiIntegration.shortRange}</span>
                </li>
                <li className="flex justify-between">
                  <span>Retainers:</span>
                  <span className="text-paper font-bold">{PRICING.maintenanceSupport.shortRange}</span>
                </li>
              </ul>
            </div>

            {/* Security & Confidentiality Card */}
            <div className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-2 text-xs">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <div className="flex items-center gap-2 text-gold font-mono font-bold uppercase">
                <Lock className="h-4 w-4" />
                <span>NDA &amp; Confidentiality</span>
              </div>
              <p className="text-steel leading-relaxed">
                All client proposals and conversations are executed under strict mutual confidentiality protocols. Source code ownership and IP are transferred upon delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Light Section: Global Response SLA & Consultation Guarantee (40%+ Light Background Ratio) */}
      <section className="relative w-full overflow-hidden border-y border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-100/90 py-16 shadow-sm sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-light absolute -right-24 top-0 h-96 w-96" />
          <div className="exec-mesh mesh-teal-light absolute -left-24 bottom-0 h-96 w-96 opacity-70" />
          <div className="exec-dots-light absolute inset-x-0 top-0 h-px" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-3.5 max-w-3xl mx-auto">
              <div className="exec-eyebrow exec-eyebrow-light justify-center">
                <ShieldCheck className="h-4 w-4 text-indigo-600" />
                <span>[ DIRECT_ENGINEERING_ACCESS ]</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Guaranteed Response SLA &amp; Consultation Protocol
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                We respect your business timeline. Every inquiry receives a direct technical response from studio leadership.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.09)] hover:border-slate-300">
                <div className="absolute inset-x-0 top-0 h-[3px] opacity-70 transition-opacity group-hover:opacity-100" style={{ background: 'linear-gradient(90deg,#4F46E5,#4F46E570)' }} />
                <div className="h-10 w-10 rounded-xl border flex items-center justify-center text-indigo-600 bg-indigo-500/10 border-indigo-500/25 shadow-[0_4px_14px_rgba(79,70,229,0.15)]">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">24-Hour Guaranteed SLA</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every project quote request and technical discovery inquiry is answered within 24 business hours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.09)] hover:border-slate-300">
                <div className="absolute inset-x-0 top-0 h-[3px] opacity-70 transition-opacity group-hover:opacity-100" style={{ background: 'linear-gradient(90deg,#0D9488,#0D948870)' }} />
                <div className="h-10 w-10 rounded-xl border flex items-center justify-center text-teal-600 bg-teal-500/10 border-teal-500/25 shadow-[0_4px_14px_rgba(13,148,136,0.15)]">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Architect-Led Review</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your requirements are reviewed directly by Chief Systems Architect M. Mujahid — no sales rep fluff.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 space-y-3 shadow-[0_4px_20px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.09)] hover:border-slate-300">
                <div className="absolute inset-x-0 top-0 h-[3px] opacity-70 transition-opacity group-hover:opacity-100" style={{ background: 'linear-gradient(90deg,#2563EB,#2563EB70)' }} />
                <div className="h-10 w-10 rounded-xl border flex items-center justify-center text-blue-600 bg-blue-500/10 border-blue-500/25 shadow-[0_4px_14px_rgba(37,99,235,0.15)]">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900">Global Timezone Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated meeting slots configured for US, UK, European, and Middle East (GCC) business hours.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
