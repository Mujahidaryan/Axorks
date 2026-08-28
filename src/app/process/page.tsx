import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Work | Axorks',
  description:
    'A simple, clear process from first conversation to finished product. Learn how Axorks delivers custom software solutions for your business.',
  alternates: {
    canonical: '/process',
  },
};

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, your goals, and the problem you need to solve.',
    },
    {
      number: '02',
      title: 'Proposal',
      description: 'We turn your requirements into a clear scope, timeline, and fixed-price proposal.',
    },
    {
      number: '03',
      title: 'Build & Launch',
      description: 'Once approved, we build, test, deploy, and launch your solution.',
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'After launch we can continue maintaining, improving, and supporting your software.',
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <header className="text-center max-w-2xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            How we work
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A simple, clear process from first conversation to finished product.
          </p>
        </header>

        {/* 4 Steps Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[12px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all hover:border-slate-300"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-[12px] bg-slate-100 px-3 py-1 text-sm font-bold text-slate-900">
                  {step.number}
                </span>
                <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </section>

        {/* Payment Note */}
        <div className="rounded-[12px] border border-slate-200 bg-slate-50 p-6 sm:p-8 text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium text-slate-800">
            Payment is structured around clear project milestones.
          </p>
        </div>

        {/* Bottom CTA */}
        <section className="rounded-[12px] border border-slate-200 bg-slate-900 px-6 py-12 sm:px-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Ready to start?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Get in touch with our team to discuss your project requirements and get a clear, fixed proposal.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[12px] bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              <span>Book a free discovery call</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
