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
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-steel transition-colors hover:text-paper"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Homepage
        </Link>

        <header className="mt-6 border-b border-obsidian-border pb-6">
          <div className="inline-flex items-center gap-2 rounded border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-xs font-semibold text-gold mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>LEGAL_&_CLIENT_TERMS</span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 font-mono text-xs text-steel">
            Last Updated: July 2026
          </p>
        </header>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-steel">
          <section className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3">
            <h2 className="font-serif text-lg font-bold text-paper">
              1. Engagement & Project Scope
            </h2>
            <p>
              All software engineering projects undertaken by Axorks operate under formal Statement of Work (SOW) documents or fixed-price project proposals approved by the client. Any modifications or feature additions outside the agreed scope will require a formal change request.
            </p>
          </section>

          <section className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3">
            <h2 className="font-serif text-lg font-bold text-paper">
              2. Intellectual Property (IP) Ownership
            </h2>
            <p>
              Upon receipt of final project payment, full ownership rights to bespoke source code repositories, application assets, and custom technical documentation generated specifically for the client are transferred in full to the client.
            </p>
          </section>

          <section className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3">
            <h2 className="font-serif text-lg font-bold text-paper">
              3. Confidentiality & Non-Disclosure (NDAs)
            </h2>
            <p>
              Axorks maintains strict confidentiality regarding proprietary business logic, client data, and trade secrets. We execute standard Non-Disclosure Agreements (NDAs) prior to technical discovery upon client request.
            </p>
          </section>

          <section className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3">
            <h2 className="font-serif text-lg font-bold text-paper">
              4. Warranties & Limitation of Liability
            </h2>
            <p>
              Axorks warrants that software delivered will conform to agreed functional specifications during the designated post-launch warranty period (typically 30 days). Axorks is not liable for indirect damages, third-party API outages, or hosting infrastructure failures beyond our operational control.
            </p>
          </section>

          <section className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3">
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
