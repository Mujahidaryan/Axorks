import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Building2, Linkedin, Lock, FileCheck } from 'lucide-react';
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
    <div className="py-12 sm:py-20">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      </head>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact & Project Discovery' }]} />

        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            INITIATE_ENGINEERING_DISCOVERY
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Contact Axorks Software Studio
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Connect directly with our engineering team at our Karachi software studio. Choose between scheduling a technical consultation or requesting a 48-hour scoped estimate below.
          </p>
        </div>

        {/* Low-commitment CTA notice banner */}
        <div className="mt-8 schematic-bracket border border-gold/40 bg-obsidian-raised p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileCheck className="h-5 w-5 text-gold shrink-0" />
            <div className="text-xs">
              <span className="font-mono text-gold font-bold block uppercase">Lightweight Project Scoping:</span>
              <span className="text-steel">Prefer a quick initial quote? Submit your core requirements in the form below for a 48-hour scoped proposal.</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
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
                  DIRECT_STUDIO_LINE
                </span>
              </div>

              <h2 className="font-serif text-xl font-bold text-paper">
                Axorks Engineering Office
              </h2>
              <p className="text-xs text-steel">
                Software House & Systems Studio
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
                  <span>Serving: Karachi, Islamabad & Worldwide</span>
                </div>

                <div className="flex items-center gap-2 text-steel">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  <span>Response SLA: &lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Static USD Investment Reference Card */}
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-3">
              <span className="font-mono text-xs text-gold uppercase font-bold">
                ENGAGEMENT_TIER_SUMMARY
              </span>
              <ul className="space-y-2 text-xs text-steel font-mono">
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
                  <span>Websites:</span>
                  <span className="text-paper font-bold">{PRICING.websiteDevelopment.shortRange}</span>
                </li>
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
                  <span>Web Apps:</span>
                  <span className="text-paper font-bold">{PRICING.webApplications.shortRange}</span>
                </li>
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
                  <span>Mobile Apps:</span>
                  <span className="text-paper font-bold">{PRICING.mobileAppDevelopment.shortRange}</span>
                </li>
                <li className="flex justify-between border-b border-obsidian-border/50 pb-1.5">
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
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-gold font-mono font-bold uppercase">
                <Lock className="h-4 w-4" />
                <span>NDA & Confidentiality</span>
              </div>
              <p className="text-steel leading-relaxed">
                All client proposals and conversations are executed under strict mutual confidentiality protocols. Source code ownership and IP are transferred upon delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
