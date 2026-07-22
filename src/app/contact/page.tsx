import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Axorks Software Studio',
  description:
    'Initiate a project inquiry or book a technical consultation with Axorks founder and engineering team.',
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            DIRECT_COMMUNICATION_CHANNELS
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Start a Project with Axorks
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Zero sales friction. Submit your project requirements below or reach out directly via WhatsApp for immediate response.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Direct Channels Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8">
              <span className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">
                DIRECT_CONTACT_INFO
              </span>
              <h2 className="mt-2 font-serif text-xl font-bold text-paper">
                Reach Out Directly
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-steel">
                Whether you have an immediate RFP, an Upwork referral, or an operational system to rebuild, we respond within 24 hours.
              </p>

              <div className="mt-6 space-y-4 border-t border-obsidian-border pt-4 text-xs">
                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="rounded border border-gold/30 bg-gold/10 p-2 text-gold">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-steel">WhatsApp Business:</span>
                    <div>
                      <a
                        href="https://wa.me/923141030223"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono font-semibold text-paper hover:text-gold transition-colors inline-flex items-center gap-1"
                      >
                        +92 314 1030223
                        <ArrowUpRight className="h-3 w-3 text-gold" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="rounded border border-gold/30 bg-gold/10 p-2 text-gold">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-steel">Business Email:</span>
                    <div>
                      <a
                        href="mailto:muhammad.mujahid.dev@gmail.com"
                        className="font-mono text-paper hover:text-gold transition-colors"
                      >
                        muhammad.mujahid.dev@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="rounded border border-obsidian-border bg-obsidian p-2 text-steel">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-steel">Studio Base:</span>
                    <p className="font-mono text-paper">Karachi, Pakistan (Remote Global)</p>
                  </div>
                </div>

                {/* Response Window */}
                <div className="flex items-start gap-3">
                  <div className="rounded border border-obsidian-border bg-obsidian p-2 text-steel">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-steel">SLA Response Window:</span>
                    <p className="font-mono text-emerald-400">Within 24 Hours</p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start gap-3 pt-2 border-t border-obsidian-border/50">
                  <div className="rounded border border-obsidian-border bg-obsidian p-2 text-steel">
                    <Github className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-steel">GitHub Portfolio:</span>
                    <div>
                      <a
                        href="https://github.com/Mujahidaryan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-signal-blue hover:underline inline-flex items-center gap-1"
                      >
                        github.com/Mujahidaryan
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
