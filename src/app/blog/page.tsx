import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { SITE_URL, SITE_NAME } from '@/lib/config';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Engineering Blog & Technical Insights | Axorks Studio',
  description:
    'Technical articles on software architecture, Next.js performance, AI integration strategies, mobile app development costs, and government-grade software standards.',
  openGraph: {
    title: 'Engineering Blog & Technical Insights | Axorks',
    description:
      'Factual technical guides on software stack selection, AI integration, mobile app costs, and enterprise software architecture.',
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blog & Technical Insights | Axorks',
    description: 'Factual technical guides on software stack selection and AI integration.',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogHubPage() {
  const posts = [
    {
      slug: 'custom-software-vs-off-the-shelf',
      title: 'Custom Software vs. Off-the-Shelf / WordPress: How to Decide',
      excerpt:
        'A factual comparison evaluating maintenance costs, security vulnerabilities, scalability limits, and operational ROI when choosing between custom Next.js software and off-the-shelf platforms.',
      date: '2026-07-20',
      readTime: '5 min read',
    },
    {
      slug: 'mobile-app-development-cost-2026',
      title: 'What Does a Mobile App Actually Cost in 2026?',
      excerpt:
        'A realistic technical breakdown of iOS and Android mobile app development costs, cross-platform frameworks, backend infrastructure expenses, and ongoing maintenance retainers.',
      date: '2026-07-18',
      readTime: '6 min read',
    },
    {
      slug: 'ai-integration-for-smes',
      title: 'AI Integration for Small and Mid-Sized Businesses: A Practical Guide',
      excerpt:
        'How SMBs can integrate OpenAI APIs, automated document parsing pipelines, and vector search embeddings into production software without over-engineering.',
      date: '2026-07-15',
      readTime: '7 min read',
    },
    {
      slug: 'nextjs-vs-laravel-vs-nodejs',
      title: 'Next.js vs. Laravel vs. Node.js: Choosing the Right Stack for Your Project',
      excerpt:
        'An objective architectural comparison analyzing server-side rendering, API throughput, developer ecosystem, and database compatibility across modern web frameworks.',
      date: '2026-07-10',
      readTime: '6 min read',
    },
    {
      slug: 'government-grade-software-requirements',
      title: 'What "Government-Grade" Software Actually Requires',
      excerpt:
        'An analysis of mission-critical public sector software requirements: FWO grid telemetry, FAO/WFP international humanitarian protocol compliance, and high-concurrency uptime.',
      date: '2026-07-05',
      readTime: '8 min read',
    },
  ];

  return (
    <div className="pb-12 sm:pb-20">
      {/* Hero Band */}
      <header className="exec-hero-stage relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="exec-mesh mesh-indigo-dark absolute -left-32 top-0 h-[28rem] w-[28rem] opacity-50" />
          <div className="exec-mesh mesh-violet-dark absolute -right-24 bottom-0 h-[22rem] w-[22rem] opacity-40" />
          <div className="exec-grid absolute inset-0 opacity-30" />
          <div className="fund-ring absolute -bottom-40 left-1/2 h-[32rem] w-[70rem] -translate-x-1/2 opacity-40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Breadcrumbs items={[{ label: 'Engineering Blog & Resources' }]} />

          <div className="mt-4">
            <div className="exec-eyebrow exec-eyebrow-gold">
              <BookOpen className="h-4 w-4 text-gold" />
              <span>TECHNICAL_PUBLICATIONS</span>
            </div>
            <h1 className="mt-4 font-serif text-hero font-bold tracking-tight text-paper leading-tight sm:text-display">
              Engineering Blog{' '}
              <span className="gradient-text-gold">& Resources</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-steel sm:text-base">
              Plain-language, factual guides on web architecture, software costs, AI implementation, and public-sector engineering standards.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glass-card-dark group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 hover:border-gold/30 sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-steel border-b border-white/10 pb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-gold" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-xl font-bold text-paper group-hover:text-gold transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-3 text-xs leading-relaxed text-steel">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-gold font-semibold transition-all group-hover:gap-2.5"
                >
                  Read Article
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
