import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SITE_URL, SITE_NAME, FOUNDER_NAME, CONTACT_EMAIL, CONTACT_WHATSAPP_FORMATTED } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact & Project Discovery | Axorks Software Studio',
  description:
    'Schedule a technical consultation with Founder & Chief Architect Muhammad Mujahid. Get a transparent fixed-price quote and timeline estimate for your project.',
  openGraph: {
    title: 'Contact & Project Discovery | Axorks Software Studio',
    description:
      'Schedule a technical consultation with Founder & Chief Architect Muhammad Mujahid. Get a transparent fixed-price quote.',
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Project Discovery | Axorks Software Studio',
    description: 'Schedule a technical consultation with Founder & Chief Architect Muhammad Mujahid.',
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            INITIATE_ENGINEERING_DISCOVERY
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Contact Axorks
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Connect directly with Founder & Chief Architect {FOUNDER_NAME} and our engineering department leads. Guaranteed response within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Form Col */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Right Info Col */}
          <div className="space-y-6">
            <div className="schematic-bracket border border-gold/40 bg-obsidian-raised p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3 text-gold">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  DIRECT_FOUNDER_LINE
                </span>
              </div>

              <h2 className="font-serif text-xl font-bold text-paper">
                Muhammad Mujahid
              </h2>
              <p className="text-xs text-steel">
                Founder & Chief Systems Architect
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
                  <MapPin className="h-4 w-4 text-gold shrink-0" />
                  <span>Karachi, Pakistan</span>
                </div>

                <div className="flex items-center gap-2 text-steel">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  <span>Response Window: &lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Typical Investment Reference Card */}
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3">
              <span className="font-mono text-xs text-gold uppercase font-bold">
                TYPICAL_INVESTMENT_SUMMARY
              </span>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
                  <span>Websites:</span>
                  <span className="text-paper font-bold">PKR 70k – 180k+</span>
                </li>
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
                  <span>Web Apps:</span>
                  <span className="text-paper font-bold">PKR 250k – 1.5M+</span>
                </li>
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
                  <span>Mobile Apps:</span>
                  <span className="text-paper font-bold">PKR 200k – 1.2M+</span>
                </li>
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
                  <span>AI Pipelines:</span>
                  <span className="text-paper font-bold">PKR 120k – 800k+</span>
                </li>
                <li className="flex justify-between">
                  <span>Retainers:</span>
                  <span className="text-paper font-bold">PKR 15k – 80k/mo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
