import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Award, Code2, Users, ShieldCheck, Layers, Bot, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Founder & Department Teams | Axorks Software House',
  description:
    'Axorks is a founder-led software studio founded by Muhammad Mujahid. Backed by dedicated Web, AI, Mobile App, and UI/UX design teams.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            FOUNDER_VISION_&_STUDIO_ARCHITECTURE
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            About Axorks
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Axorks is a premier software studio engineered by Founder & Chief Architect Muhammad Mujahid. Backed by dedicated development teams, AI automation specialists, mobile application engineers, and UI/UX designers, we architect high-throughput web applications and public-sector infrastructure solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Story Col */}
          <div className="lg:col-span-2 space-y-8">
            {/* Founder Profile */}
            <div className="schematic-bracket border border-gold/40 bg-obsidian-raised p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3 text-gold">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  FOUNDER_&_CHIEF_SYSTEMS_ARCHITECT
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-paper">
                Muhammad Mujahid
              </h2>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Muhammad Mujahid is the Founder & Chief Software Architect of Axorks. Specializing in high-stakes full-stack application development, serverless Postgres data architectures, and AI integration, Muhammad has architected and delivered <strong className="text-paper">6 major production systems</strong>.
              </p>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                His engineering portfolio includes national-scale public sector systems — such as <strong className="text-gold">AgroTrace</strong> (connected to FWO grid telemetry monitoring $47M in exports across 3,400+ shipments), the <strong className="text-gold">Sindh Food Security Dashboard</strong> (monitoring 25.45M population across 8 districts under FAO/WFP standards), and <strong className="text-gold">IPMI-OS</strong> (an institutional probabilistic quant engine operating with sub-2.5ms inference speed).
              </p>

              {/* Academic Foundation */}
              <div className="mt-4 rounded border border-obsidian-border bg-obsidian p-4 space-y-1">
                <span className="font-mono text-[10px] uppercase text-gold">Academic Foundation:</span>
                <p className="font-mono text-xs text-paper">
                  Bachelor of Software Engineering (Bahria University) · O & A-Levels Computer Science
                </p>
              </div>
            </div>

            {/* Dedicated Department Structure */}
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-gold">
                <Users className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  SPECIALIZED_DEPARTMENT_STRUCTURE
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-paper">
                Dedicated Software, AI, Mobile & Design Teams
              </h3>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Axorks is backed by specialized department leads working across 4 core divisions:
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Code2 className="h-4 w-4" />
                    Web Engineering Division
                  </div>
                  <p className="text-xs text-steel">
                    Full-stack developers building with Next.js App Router, TypeScript, Node.js REST APIs, and PostgreSQL database optimization.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Bot className="h-4 w-4" />
                    AI & Machine Learning Team
                  </div>
                  <p className="text-xs text-steel">
                    AI engineers specializing in OpenAI API integrations, automated document parser pipelines, and statistical predictive models.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Smartphone className="h-4 w-4" />
                    Mobile App Department
                  </div>
                  <p className="text-xs text-steel">
                    Mobile application engineers building cross-platform iOS and Android solutions with offline sync and push notification infrastructure.
                  </p>
                </div>

                <div className="rounded border border-obsidian-border bg-obsidian p-4 space-y-2">
                  <div className="flex items-center gap-2 text-gold font-mono text-xs font-bold">
                    <Layers className="h-4 w-4" />
                    UI/UX Design Department
                  </div>
                  <p className="text-xs text-steel">
                    Interface designers crafting dark-mode schematic systems, dynamic micro-animations, and high-conversion user flows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Authority Badges */}
          <div className="space-y-6">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3 font-mono text-xs text-gold">
                <Award className="h-4 w-4" />
                <span>AUTHORITY_METRICS</span>
              </div>
              <ul className="mt-4 space-y-3.5 text-xs text-steel">
                <li className="flex items-start justify-between gap-2">
                  <span>Public Sector Authority:</span>
                  <span className="font-mono font-bold text-gold text-right">FWO Grid & FAO</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Shipped Production Apps:</span>
                  <span className="font-mono font-bold text-paper text-right">6 Live Systems</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Specialized Departments:</span>
                  <span className="font-mono text-paper text-right">Web, AI, Mobile, UI/UX</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Academic Foundation:</span>
                  <span className="font-mono text-paper text-right">BS SE / O & A-Levels CS</span>
                </li>
              </ul>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 text-center">
              <h3 className="font-serif text-base font-bold text-paper">
                Initiate Consultation
              </h3>
              <p className="mt-2 text-xs text-steel">
                Discuss your technical specs directly with Founder & Chief Architect Muhammad Mujahid.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 rounded bg-signal-blue px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
              >
                Book Technical Call
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
