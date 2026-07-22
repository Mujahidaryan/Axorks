import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Axorks',
  description: 'Axorks privacy policy detailing data protection, contact form handling, and user rights.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-steel transition-colors hover:text-paper"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>

        <div className="mt-8 schematic-bracket border border-obsidian-border bg-obsidian-raised p-8 sm:p-12">
          <div className="flex items-center gap-2 border-b border-obsidian-border pb-4">
            <ShieldCheck className="h-5 w-5 text-gold" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
              DATA_PRIVACY_&_SECURITY_POLICY
            </span>
          </div>

          <h1 className="mt-6 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Privacy Policy
          </h1>

          <div className="mt-6 space-y-6 text-sm leading-relaxed text-steel">
            <p className="text-paper/90">
              Axorks collects the name, email, phone number, and message you submit through our contact form solely to respond to your inquiry. This information is stored securely and is never sold or shared with third parties. You may request that we delete your information at any time by emailing us directly.
            </p>

            <div className="border-t border-obsidian-border/60 pt-6">
              <h2 className="font-mono text-xs font-semibold uppercase text-paper tracking-wider">
                1. Information Collection & Usage
              </h2>
              <p className="mt-2 text-xs text-steel">
                When you initiate a consultation booking or project inquiry via our site, we record your name, business email address, optional contact phone number, and project specifications. We store these records in encrypted serverless databases (Neon Postgres) to facilitate client discovery, scoping, and ongoing communication.
              </p>
            </div>

            <div className="border-t border-obsidian-border/60 pt-6">
              <h2 className="font-mono text-xs font-semibold uppercase text-paper tracking-wider">
                2. Data Integrity & Retention
              </h2>
              <p className="mt-2 text-xs text-steel">
                We strictly adhere to zero-commercialization standards: your contact details are never monetized, traded, or shared with external marketing brokers. We retain lead submissions only for the active duration of consultation or contract execution.
              </p>
            </div>

            <div className="border-t border-obsidian-border/60 pt-6">
              <h2 className="font-mono text-xs font-semibold uppercase text-paper tracking-wider">
                3. Deletion & Removal Requests
              </h2>
              <p className="mt-2 text-xs text-steel">
                To request permanent erasure of your inquiry details from our system database, email us directly at{' '}
                <a href="mailto:muhammad.mujahid.dev@gmail.com" className="text-signal-blue hover:underline">
                  muhammad.mujahid.dev@gmail.com
                </a>
                . All requests are honored within 48 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
