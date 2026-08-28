import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, MessageCircle, Building2, CheckCircle2, Clock } from 'lucide-react';
import {
  SITE_URL,
  SITE_NAME,
  CONTACT_EMAIL,
  LINKEDIN_URL,
} from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact | Axorks',
  description:
    "Let's talk about your project. Tell us what you need, and we'll get back to you within 24 hours with an honest assessment and a clear fixed-price plan.",
  openGraph: {
    title: 'Contact | Axorks',
    description:
      "Tell us what you need. We'll get back to you within 24 hours with an honest assessment and a clear fixed-price plan.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Axorks',
    description: "Tell us what you need. We'll get back to you within 24 hours.",
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* ============================================================
          HEADER — SOFT IVORY WITH PROPER BREATHING ROOM
      ============================================================ */}
      <section className="border-b border-slate-200/80 bg-[#FBFBFA]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Tell us what you need. We&apos;ll get back to you within 24 hours with an honest assessment of how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTACT SECTION — 2-COLUMN BALANCED LAYOUT
      ============================================================ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Direct communication with our team
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  When you reach out to Axorks, you connect directly with the engineers and founders building your solution.
                </p>
              </div>

              {/* Trust Points */}
              <div className="space-y-4 rounded-[12px] border border-slate-200/80 bg-[#FBFBFA] p-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Free discovery call — no obligation</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span>Clear fixed-price proposal before work begins</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-800">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Guaranteed response within 24 hours</span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Contact channels
                </h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 rounded-[12px] border border-slate-200/80 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-300 hover:shadow"
                  >
                    <Mail className="h-5 w-5 text-slate-700" />
                    <span>{CONTACT_EMAIL}</span>
                  </a>

                  <a
                    href="https://wa.me/923141030223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[12px] border border-slate-200/80 bg-white p-4 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-slate-300 hover:shadow"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                    <span>Chat on WhatsApp (+92 314 1030223)</span>
                  </a>

                  <div className="flex items-start gap-3 rounded-[12px] border border-slate-200/80 bg-white p-4 text-sm text-slate-700 shadow-sm">
                    <Building2 className="mt-0.5 h-5 w-5 text-slate-700 shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Offices</p>
                      <p className="mt-0.5 text-xs text-slate-600">Karachi &amp; Islamabad, Pakistan · Serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
