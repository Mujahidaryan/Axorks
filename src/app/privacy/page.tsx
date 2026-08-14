import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy | Axorks Software Studio',
  description:
    'Axorks privacy policy detailing data collection practices, contact form submission handling, security measures, and cookie disclosures.',
  openGraph: {
    title: 'Privacy & Cookie Policy | Axorks Software Studio',
    description: 'Privacy policy detailing data collection, security measures, and cookie disclosures.',
    url: `${SITE_URL}/privacy`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy & Cookie Policy | Axorks Software Studio',
    description: 'Privacy policy detailing data collection, security measures, and cookie disclosures.',
  },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pb-12 sm:pb-20">
      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[26rem] w-[26rem] opacity-50" />
          <div className="exec-mesh mesh-amber-dark absolute -right-24 bottom-0 h-[20rem] w-[20rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[30rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-obsidian/80 px-4 py-2 font-mono text-xs text-steel transition-all duration-300 hover:border-gold/40 hover:text-paper"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Homepage
          </Link>

          <div className="mt-6">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>DATA_PROTECTION_&_PRIVACY</span>
            </div>

            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Privacy <span className="gradient-text-gold">&amp; Cookie Policy</span>
            </h1>
            <p className="mt-3 font-mono text-xs text-steel">
              Last Updated: July 2026
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 space-y-5 text-sm leading-relaxed text-steel">
          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              1. Information We Collect
            </h2>
            <p>
              When you submit a contact inquiry on Axorks, we collect your name, business email address, phone number, selected service type, project budget range, and message content. This information is stored securely in our serverless PostgreSQL database (Neon) for the sole purpose of responding to your inquiry.
            </p>
          </section>

          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              2. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard encryption in transit (HTTPS/TLS) and at rest. We do not sell, rent, or trade your contact information to third-party advertisers. Access to inquiry submissions is strictly restricted to authorized engineering personnel.
            </p>
          </section>

          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              3. Cookie Policy & Analytics
            </h2>
            <p>
              Axorks uses minimal essential session cookies required for website navigation and basic performance analytics. We do not deploy intrusive third-party cross-site tracking pixels or advertising cookies.
            </p>
          </section>

          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              4. Data Deletion Requests
            </h2>
            <p>
              You have the right to request deletion of your submitted contact details at any time by contacting us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold underline">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
