import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME, CONTACT_EMAIL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Axorks Software Studio',
  description:
    'Terms of service, client engagement boundaries, intellectual property ownership rules, and liability disclaimers for Axorks software engineering services.',
  openGraph: {
    title: 'Terms & Conditions | Axorks Software Studio',
    description: 'Terms of service, client engagement boundaries, and intellectual property ownership rules.',
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Axorks Software Studio',
    description: 'Terms of service, client engagement boundaries, and IP ownership rules.',
  },
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="pb-12 sm:pb-20">
      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[26rem] w-[26rem] opacity-50" />
          <div className="exec-mesh mesh-teal-dark absolute -right-24 bottom-0 h-[20rem] w-[20rem] opacity-40" />
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
              <span>LEGAL_&_CLIENT_TERMS</span>
            </div>

            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Terms <span className="gradient-text-gold">&amp; Conditions</span>
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
              1. Engagement & Project Scope
            </h2>
            <p>
              All software engineering projects undertaken by Axorks operate under formal Statement of Work (SOW) documents or fixed-price project proposals approved by the client. Any modifications or feature additions outside the agreed scope will require a formal change request.
            </p>
          </section>

          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              2. Intellectual Property (IP) Ownership
            </h2>
            <p>
              Upon receipt of final project payment, full ownership rights to bespoke source code repositories, application assets, and custom technical documentation generated specifically for the client are transferred in full to the client.
            </p>
          </section>

          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              3. Confidentiality & Non-Disclosure (NDAs)
            </h2>
            <p>
              Axorks maintains strict confidentiality regarding proprietary business logic, client data, and trade secrets. We execute standard Non-Disclosure Agreements (NDAs) prior to technical discovery upon client request.
            </p>
          </section>

          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              4. Warranties & Limitation of Liability
            </h2>
            <p>
              Axorks warrants that software delivered will conform to agreed functional specifications during the designated post-launch warranty period (typically 30 days). Axorks is not liable for indirect damages, third-party API outages, or hosting infrastructure failures beyond our operational control.
            </p>
          </section>

          <section className="glass-card-dark relative overflow-hidden rounded-2xl p-6 space-y-3">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <h2 className="font-serif text-lg font-bold text-paper">
              5. Inquiries & Contact
            </h2>
            <p>
              For legal or contractual inquiries, please email {FOUNDER_NAME} directly at{' '}
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
