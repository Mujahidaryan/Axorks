export interface VisibilityPackage {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  price: string;
  billingPeriod: string;
  popular?: boolean;
  badge: string;
  accent: 'cyan' | 'emerald' | 'violet' | 'gold';
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
    id: 'seo',
    name: 'Search Engine Optimization',
    shortName: 'SEO',
    tagline: 'Dominate Traditional Search Engines',
    price: '$250',
    billingPeriod: '/ month',
    badge: 'Traditional Organic Search',
    accent: 'cyan',
    description: 'Capture high-intent organic search traffic across Google and Bing with rigorous technical architecture, Core Web Vitals, and semantic keyword targeting.',
    targetEngines: ['Google Search', 'Bing', 'Google Images', 'Local Pack'],
    features: [
      'Technical SEO audit & Core Web Vitals performance tuning',
      'High-intent commercial keyword research & competitive mapping',
      'On-page semantic optimization & clean JSON-LD schema markup',
      'Crawl budget optimization, indexation, & sitemap architecture',
      'Google Search Console & Bing Webmaster continuous monitoring',
      'Monthly ranking, keyword movement, and traffic reports',
    ],
    deliverables: [
      'Full technical site audit and resolution roadmap',
      'Structured on-page schema implementation',
      'Continuous crawl & index health management',
      'Monthly performance & keyword positioning report',
    ],
    idealFor: 'Businesses looking to capture active Google searches and drive consistent organic inbound leads.',
    ctaText: 'Start SEO Package ($250/mo)',
    emailSubject: 'SEO Package Inquiry ($250/mo) - Axorks',
  },
  {
    id: 'aeo',
    name: 'Answer Engine Optimization',
    shortName: 'AEO',
    tagline: 'Become the Cited Direct Answer in AI',
    price: '$450',
    billingPeriod: '/ month',
    badge: 'AI Answer Retrieval',
    accent: 'emerald',
    description: 'Engineered specifically for conversational AI answer engines. Structure your content so LLMs extract, quote, and cite your business as the definitive answer.',
    targetEngines: ['Perplexity AI', 'ChatGPT Search', 'Claude', 'Google AI Overviews'],
    features: [
      'Structured Q&A architecture & citable entity definition blocks',
      'High-perplexity information density formatting for LLM crawlers',
      'Direct-answer schema markup (FAQPage, HowTo, TechArticle)',
      'Entity authority modeling & semantic knowledge graph linking',
      'Perplexity & AI Overviews source-citation optimization',
      'Monthly AI answer inclusion & attribution tracking report',
    ],
    deliverables: [
      'AEO content transformation & citable snippet architecture',
      'Granular structured entity schemas optimized for LLM parsers',
      'Continuous monitoring of Perplexity & ChatGPT Search citations',
      'Monthly AI attribution & citation share report',
    ],
    idealFor: 'Companies seeking high-trust visibility when prospects ask questions in Perplexity, ChatGPT, and AI Overviews.',
    ctaText: 'Start AEO Package ($450/mo)',
    emailSubject: 'AEO Package Inquiry ($450/mo) - Axorks',
  },
  {
    id: 'geo',
    name: 'Generative Engine Optimization',
    shortName: 'GEO',
    tagline: 'Win Recommendations in Generative LLMs',
    price: '$550',
    billingPeriod: '/ month',
    badge: 'LLM Recommendation Engine',
    accent: 'violet',
    description: 'Get your company actively recommended when users ask generative AI models (ChatGPT, Gemini, Grok) for vendor recommendations, comparisons, and solutions.',
    targetEngines: ['ChatGPT (OpenAI)', 'Claude (Anthropic)', 'Google Gemini', 'xAI Grok', 'Microsoft Copilot'],
    features: [
      'Brand entity footprint expansion across primary LLM training sources',
      'Multi-source corroboration & authoritative digital footprinting',
      'Competitor recommendation displacement & positioning strategies',
      'Synthetic consensus modeling & positive sentiment association',
      'Knowledge base and third-party citation network development',
      'Monthly multi-LLM vendor prompt benchmarking & recommendation audit',
    ],
    deliverables: [
      'Comprehensive generative engine brand footprint audit',
      'Strategic entity corroboration & cross-platform citation deployment',
      'Multi-LLM prompt benchmarking (tested across ChatGPT, Gemini, Claude, Grok)',
      'Monthly generative recommendation market share report',
    ],
    idealFor: 'Brands that want to be directly named and recommended when potential clients ask AI: "What is the best software/service for X?"',
    ctaText: 'Start GEO Package ($550/mo)',
    emailSubject: 'GEO Package Inquiry ($550/mo) - Axorks',
  },
  {
    id: 'full-visibility',
    name: 'Full Visibility Package',
    shortName: 'SEO + AEO + GEO',
    tagline: '360° Search & AI Platform Dominance',
    price: '$950',
    billingPeriod: '/ month',
    popular: true,
    badge: 'Most Popular • 360° Dominance',
    accent: 'gold',
    description: 'The ultimate modern discovery engine. Complete coverage across traditional search (Google/Bing) + direct AI answer engines (Perplexity/ChatGPT) + generative LLM recommendations.',
    targetEngines: ['Google Search', 'Perplexity AI', 'ChatGPT Search', 'Google Gemini', 'Claude', 'xAI Grok', 'Bing & Copilot'],
    features: [
      'Complete SEO, AEO, and GEO deployment running simultaneously',
      'Traditional Google & Bing organic rank pursuit with technical excellence',
      'Guaranteed citable snippet and FAQ architecture for Perplexity & AI Overviews',
      'Proactive brand entity positioning across all major generative models',
      'Save $300/mo compared to individual package subscriptions',
      'Dedicated technical SEO & AI discovery architect access',
      'Bi-weekly schema, citation, and LLM prompt optimization sprints',
      'Unified monthly 360° discovery intelligence & revenue attribution dashboard',
    ],
    deliverables: [
      'All deliverables from SEO, AEO, and GEO unified in one cohesive roadmap',
      'Bi-weekly priority optimization sprints and schema adjustments',
      'Direct engineer access via dedicated WhatsApp or Slack channel',
      'Comprehensive monthly executive report covering Google + AI Engine metrics',
    ],
    idealFor: 'Businesses that want complete dominance across both traditional search and the entire modern AI ecosystem with maximum ROI.',
    ctaText: 'Claim Full Visibility ($950/mo)',
    emailSubject: 'Full Visibility Package Inquiry (SEO + AEO + GEO - $950/mo) - Axorks',
  },
];

export const VISIBILITY_COMPARISON = [
  {
    channel: 'Target Discovery Layer',
    seo: 'Traditional Google & Bing search engine result pages (SERPs)',
    aeo: 'Direct answer engines (Perplexity, ChatGPT Search, AI Overviews)',
    geo: 'Conversational & generative LLMs (ChatGPT, Gemini, Claude, Grok)',
    full: 'All search engines + all AI answer engines + all generative LLMs',
  },
  {
    channel: 'User Query Type',
    seo: 'Keywords & short search terms ("custom software studio")',
    aeo: 'Specific factual questions ("who builds AI automation systems in Karachi?")',
    geo: 'Broad recommendations & comparisons ("recommend the best software agency for SaaS")',
    full: 'Captures all three user journeys: keywords, questions, and generative prompts',
  },
  {
    channel: 'End Result for Your Business',
    seo: 'High organic rankings and direct website click-throughs',
    aeo: 'Direct quotation as the authoritative cited source in AI answers',
    geo: 'Top-tier recommendation in AI conversational answers and comparisons',
    full: 'Complete market dominance: found anywhere a prospect looks or asks',
  },
  {
    channel: 'Monthly Investment',
    seo: '$250 / month',
    aeo: '$450 / month',
    geo: '$550 / month',
    full: '$950 / month (Save $300/mo)',
  },
];
