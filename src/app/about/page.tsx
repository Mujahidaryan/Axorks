import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap, Award, Code2, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Axorks Software Studio',
  description:
    'Founder-led software studio founded by Muhammad Mujahid. Full-stack production engineering, CS educator background, and agile team scaling per project.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-obsidian-border pb-6">
          <span className="font-mono text-xs text-gold uppercase tracking-wider">
            FOUNDER_LED_STUDIO
          </span>
          <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            About Axorks
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Axorks is a founder-led software engineering studio. We combine deep full-stack application development with AI-native delivery to ship production systems faster than bloated traditional agencies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Story Col */}
          <div className="lg:col-span-2 space-y-8">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 sm:p-8 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-paper">
                The Founder & Engineering Philosophy
              </h2>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Axorks was founded by <strong className="text-paper">Muhammad Mujahid</strong>, a full-stack engineer and Computer Science educator with 4+ years of combined experience across technical instruction and shipped production systems.
              </p>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                Having mentored over 150+ Computer Science students across Cambridge O/A-Level cohorts and achieved recognition as a <strong className="text-gold">Microsoft Innovative Educator Expert (MIEE 2025)</strong>, Muhammad brings pedagogical clarity, explicit system documentation, and rigorous architectural standards to every client build.
              </p>

              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                We believe that modern AI tools, serverless cloud databases, and Next.js App Router have rendered bloated traditional 20-person agency teams obsolete for most web products. One senior engineer leveraging AI acceleration will out-ship a bloated agency team while producing cleaner, better-documented code.
              </p>
            </div>

            {/* Team Scaling Note */}
            <div className="schematic-bracket border border-gold/40 bg-obsidian-raised p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-gold">
                <Users className="h-5 w-5" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  HONEST_TEAM_SCALING_MODEL
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-paper">
                No Fake Personnel. Team Scales Per Project Scope.
              </h3>
              <p className="text-xs leading-relaxed text-steel sm:text-sm">
                We do not invent fictional staff photos or pretend to maintain 50 full-time bench developers. Axorks operates as a lean, founder-led studio. For standard projects, you work directly with Muhammad. For large-scale enterprise or public-sector deployments, we draw from a vetted network of trusted specialist developers (UI/UX, DevOps, QA) matched specifically to your system requirements.
              </p>
            </div>
          </div>

          {/* Right Sidebar Proof Points */}
          <div className="space-y-6">
            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6">
              <div className="flex items-center gap-2 border-b border-obsidian-border pb-3 font-mono text-xs text-gold">
                <Award className="h-4 w-4" />
                <span>CREDENTIALS_SUMMARY</span>
              </div>
              <ul className="mt-4 space-y-3 text-xs text-steel">
                <li className="flex items-start justify-between gap-2">
                  <span>MIEE Recognition:</span>
                  <span className="font-mono font-bold text-gold text-right">MIEE 2025 Expert</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Teaching Record:</span>
                  <span className="font-mono text-paper text-right">4 CAIE Cohorts (72% A/B Rate)</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Shipped Systems:</span>
                  <span className="font-mono text-paper text-right">6 Production Apps</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Public Sector:</span>
                  <span className="font-mono text-gold text-right">2 Government-Grade</span>
                </li>
                <li className="flex items-start justify-between gap-2">
                  <span>Degree:</span>
                  <span className="font-mono text-paper text-right">BS Software Engineering</span>
                </li>
              </ul>
            </div>

            <div className="schematic-bracket border border-obsidian-border bg-obsidian-raised p-6 text-center">
              <h3 className="font-serif text-base font-bold text-paper">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-xs text-steel">
                Let’s review your technical specs and outline a delivery blueprint.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 rounded bg-signal-blue px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-paper hover:bg-signal-blue-hover transition-colors"
              >
                Get In Touch
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
