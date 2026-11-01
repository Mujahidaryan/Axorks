export interface VisibilityPackage {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  price: string;
  billingPeriod: string;
  popular?: boolean;
  badge: string;
  accent: 'gold' | 'vermilion' | 'teal';
  description: string;
  targetEngines: string[];
  features: string[];
  deliverables: string[];
  idealFor: string;
  ctaText: string;
  emailSubject: string;
}

export const VISIBILITY_PACKAGES: VisibilityPackage[] = [
  {
    id: 'foundation-audit',
    name: 'Foundation Audit & Setup',
    shortName: 'Foundation Audit',
    tagline: 'Technical Core & Crawl Architecture',
    price: '$99',
    billingPeriod: '/ month or one-time',
    badge: 'Baseline Architecture',
    accent: 'teal',
    description: 'Complete Core Web Vitals optimization, crawl topology remediation, and JSON-LD schema graph deployment to establish clean search indexation.',
    targetEngines: ['Google Search', 'Bing', 'Google Search Console', 'Crawl Bots'],
    features: [
      'Full technical architecture audit and Core Web Vitals performance tuning',
      'High-intent commercial query mapping and competitive keyword analysis',
      'Entity schema graph implementation (Organization, SoftwareApplication, WebSite)',
      'Crawl budget optimization, canonical routing, and dynamic XML sitemaps',
      'Continuous indexation health tracking on Google Search Console and Bing',
      'Monthly technical health score and index coverage audit',
    ],
    deliverables: [
      'Itemized site architecture audit and remediation roadmap',
      'Production-tested JSON-LD schema implementation',
      'Continuous crawl rate and indexation management',
      'Monthly technical audit and health performance dashboard',
    ],
    idealFor: 'Businesses needing a solid technical base and fast search crawl health.',
    ctaText: 'Start Foundation Audit ($99)',
    emailSubject: 'Foundation Audit Inquiry ($99) - Axorks',
  },
  {
    id: 'aeo-geo',
    name: 'AEO + GEO Growth Engine',
    shortName: 'AEO + GEO Engine',
    tagline: 'Direct Answers in AI & Conversational LLMs',
    price: '$199',
    billingPeriod: '/ month or one-time',
    badge: 'AI Discovery & Citation',
    accent: 'vermilion',
    description: 'Engineered specifically for conversational AI models. Structure high-density entity models so Perplexity, ChatGPT Search, Claude, and Gemini cite your brand as the primary authority.',
    targetEngines: ['Perplexity AI', 'ChatGPT Search', 'Claude (Anthropic)', 'Google AI Overviews', 'Gemini'],
    features: [
      'Structured Q&A architecture and citable entity definition blocks',
      'High-information density formatting optimized for LLM scrapers and search bots',
      'Direct-answer schema markup (FAQPage, TechArticle, HowTo, Service)',
      'Entity authority modeling and cross-referenced knowledge graph nodes',
      'Perplexity and AI Overviews source-citation optimization sprints',
      'Monthly AI answer quotation and attribution tracking audit',
    ],
    deliverables: [
      'AEO content transformation and high-density citable snippet deployment',
      'Granular schema architecture structured for LLM token extraction',
      'Bi-weekly prompt simulation across Perplexity and ChatGPT Search',
      'Monthly AI attribution and citation market share report',
    ],
    idealFor: 'Companies that need to be actively cited and recommended when buyers ask AI for solutions.',
    ctaText: 'Deploy AEO + GEO Engine ($199)',
    emailSubject: 'AEO + GEO Growth Engine Inquiry ($199) - Axorks',
  },
  {
    id: 'all-in-visibility',
    name: 'All-In Visibility Engine',
    shortName: '360° Search + AI',
    tagline: 'Complete Google Rank & AI Ecosystem Dominance',
    price: '$299',
    billingPeriod: '/ month or one-time',
    popular: true,
    badge: 'Full Spectrum Dominance',
    accent: 'gold',
    description: 'The definitive discovery engine. Total coverage across traditional organic search (Google/Bing) and direct conversational AI citation networks (Perplexity, ChatGPT, Claude, Gemini).',
    targetEngines: ['Google Search', 'Perplexity AI', 'ChatGPT Search', 'Google Gemini', 'Claude', 'xAI Grok', 'Bing & Copilot'],
    features: [
      'Full technical SEO + citable AEO + generative GEO deployed in parallel',
      'Commercial keyword rank pursuit combined with high-intent AI citation acquisition',
      'Guaranteed entity definition graphs for Perplexity and Google AI Overviews',
      'Proactive brand footprint placement across core generative LLM citation corpuses',
      'Direct senior discovery architect access via dedicated Slack or WhatsApp channel',
      'Bi-weekly schema, citation, and LLM prompt calibration sprints',
      'Comprehensive monthly executive dashboard tracking organic traffic and AI attribution',
    ],
    deliverables: [
      'All deliverables from Foundation, AEO, and GEO unified into one strategic roadmap',
      'Bi-weekly priority optimization sprints and schema adjustments',
      'Direct engineer access with 24-hour turnaround on technical requests',
      'Unified monthly 360° discovery intelligence report with clear ROI tracking',
    ],
    idealFor: 'Enterprises and fast-growing platforms seeking unassailable authority across search and AI answer engines.',
    ctaText: 'Claim All-In Engine ($299)',
    emailSubject: 'All-In Visibility Engine Inquiry ($299) - Axorks',
  },
];

export const VISIBILITY_COMPARISON = [
  {
    channel: 'Target Discovery Layer',
    foundation: 'Google & Bing organic search indexation',
    aeoGeo: 'AI answer engines (Perplexity, ChatGPT Search, AI Overviews)',
    allIn: 'All traditional search engines + all AI answer engines + generative LLMs',
  },
  {
    channel: 'Buyer Query Type',
    foundation: 'Direct keyword searches and branded lookups',
    aeoGeo: 'Complex questions and vendor comparisons in conversational AI',
    allIn: 'Every discovery vector: short keywords, technical queries, and AI prompts',
  },
  {
    channel: 'Measurable Outcome',
    foundation: 'Zero crawl errors, high Core Web Vitals, and fast indexation',
    aeoGeo: 'Direct quotation and source link inside Perplexity and ChatGPT answers',
    allIn: 'Dominant organic rankings paired with primary AI recommendation status',
  },
  {
    channel: 'Investment Model',
    foundation: '$99 / month or one-time',
    aeoGeo: '$199 / month or one-time',
    allIn: '$299 / month or one-time (Complete 360° Coverage)',
  },
];
