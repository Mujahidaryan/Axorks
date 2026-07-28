export interface ServiceTier {
  name: 'Starter' | 'Professional' | 'Enterprise';
  priceUsd: number;
  formattedPrice: string;
  turnaround: string;
  outcome: string;
  deliverables: string[];
  ctaType: 'quote' | 'quote_or_discovery' | 'discovery';
}

export interface ServicePricingStructure {
  serviceId: string;
  title: string;
  leadPrice: string;
  floorMinUsd: number;
  description: string;
  caseStudyLink: {
    title: string;
    href: string;
  };
  premiumHighlights: string[];
  tiers: ServiceTier[];
}

export const PRICING_LADDER: Record<string, ServicePricingStructure> = {
  websiteDevelopment: {
    serviceId: 'website-development',
    title: 'Custom Website Development',
    leadPrice: '$1,000',
    floorMinUsd: 1000,
    description:
      'Custom-coded marketing and business websites built with Next.js App Router for speed, SEO, and lead conversion.',
    caseStudyLink: {
      title: 'Sindh Food Security Dashboard (Public Sector UI)',
      href: '/case-studies#sindh-food-security',
    },
    premiumHighlights: [
      'Architected for the same high reliability and performance standards as our enterprise platforms.',
      'Fully custom Next.js App Router architecture built specifically around your brand and conversion goals.',
      'Complete headless CMS integration allowing self-service content updates with zero technical friction.',
      'Advanced technical schema markup (Organization, Service, Offer) maximizing search visibility.',
      'Direct technical collaboration with Chief Systems Architect Muhammad Mujahid.',
    ],
    tiers: [
      {
        name: 'Starter',
        priceUsd: 1000,
        formattedPrice: '$1,000',
        turnaround: '~1–2 Weeks',
        outcome: 'A fast-loading, highly credible web presence built for high conversion.',
        deliverables: [
          'Custom-coded landing site (Next.js App Router, clean code)',
          'Fully responsive across mobile, tablet, and desktop viewports',
          'Contact form with automated email delivery',
          'On-page SEO setup (meta tags, schema, sitemap)',
          'Performance-optimized, Core Web Vitals green scores',
          'Security best practices (SSL, safe form handling)',
          '1 round of revisions',
          '7 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Professional',
        priceUsd: 2500,
        formattedPrice: '$2,500',
        turnaround: '~2–3 Weeks',
        outcome: 'Multi-page corporate business website with CMS editing access for growing companies.',
        deliverables: [
          'Multi-page business site (up to 5 pages)',
          'Custom design system pass, no pre-built templates',
          'Headless CMS content management integration',
          'On-page SEO setup across all pages',
          'Contact form + analytics tracking setup',
          'Cross-device and cross-browser testing',
          '2 rounds of revisions',
          '14 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Enterprise',
        priceUsd: 5000,
        formattedPrice: '$5,000+',
        turnaround: '~3–4 Weeks',
        outcome: 'Bespoke enterprise marketing platform engineered for maximum search visibility and high-ticket lead conversion.',
        deliverables: [
          'Fully custom design, zero templates or page builders',
          'Multi-page architecture built around custom content',
          'Next.js App Router build with TypeScript',
          'Advanced schema markup and structured data (Organization, Service, Offer)',
          'Headless CMS integration for self-service updates',
          'Core Web Vitals green scores across all devices',
          'Custom animations and interactive micro-interactions',
          'GA4 & conversion tracking setup',
          '3+ rounds of revisions',
          '30 days of post-launch support',
          'Complete source code handover with documentation',
        ],
        ctaType: 'discovery',
      },
    ],
  },
  aiIntegration: {
    serviceId: 'ai-integration',
    title: 'AI Solutions & Automation',
    leadPrice: '$2,500',
    floorMinUsd: 2500,
    description:
      'Practical AI features, automated document workflows, and intelligent assistant integrations built directly into your software.',
    caseStudyLink: {
      title: 'IPMI-OS (Probabilistic Quantitative AI Engine)',
      href: '/case-studies#ipmi-os',
    },
    premiumHighlights: [
      'Engineered with the same mathematical rigor as our IPMI-OS quantitative probabilistic engine.',
      'Bespoke multi-step AI automation pipeline connecting complex document extraction with automated workflows.',
      'Role-based permissions, monitoring dashboards, and robust error-handling for production load.',
      'Strict data privacy and security protocols ensuring zero model training on your proprietary data.',
      'Direct system design by Chief Architect Muhammad Mujahid.',
    ],
    tiers: [
      {
        name: 'Starter',
        priceUsd: 2500,
        formattedPrice: '$2,500',
        turnaround: '~1–2 Weeks',
        outcome: 'Single AI-powered feature or automated workflow integrated directly into your existing site or app.',
        deliverables: [
          'Single AI feature (custom assistant or automated workflow)',
          'Integration into your existing website or application',
          'Trained on your business’s actual documentation/content',
          'Custom prompt engineering & context boundaries',
          'Email or webhook notification alerts triggered by AI',
          'Scenario testing across common customer workflows',
          '1 round of revisions',
          '14 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Professional',
        priceUsd: 7500,
        formattedPrice: '$7,500',
        turnaround: '~2–3 Weeks',
        outcome: 'Multi-feature AI automation connecting intelligent tasks across core business systems.',
        deliverables: [
          'Multi-feature AI integration (chatbot + document/task automation)',
          'Integration connected across multiple business workflows',
          'Custom conversation flows for multiple use cases',
          'Integration with existing tools (email, WhatsApp, CRM, internal DB)',
          'Vector database embeddings (RAG) for semantic search',
          'Error-handling and fallback safety logic',
          '2 rounds of revisions',
          '21 days of post-launch support',
          'Token usage & cost optimization report',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Enterprise',
        priceUsd: 20000,
        formattedPrice: '$20,000+',
        turnaround: '~3–5 Weeks',
        outcome: 'Custom AI intelligence pipeline or automated agentic system engineered for enterprise decision support.',
        deliverables: [
          'Custom AI pipeline built around proprietary business logic',
          'Multiple integrated AI agentic features working together',
          'Document processing, OCR, and statistical/ML model integration',
          'Custom serverless architecture built for high scale',
          'Role-based access & admin control for AI tools',
          'Advanced token caching & response pre-filtering',
          'Zero-data-retention privacy protocols for enterprise compliance',
          'Detailed technical documentation & API runbooks',
          '30 days of post-launch SLA support',
        ],
        ctaType: 'discovery',
      },
    ],
  },
  mobileAppDevelopment: {
    serviceId: 'mobile-app-development',
    title: 'Mobile App Development',
    leadPrice: '$4,000',
    floorMinUsd: 4000,
    description:
      'Cross-platform iOS and Android mobile applications built with custom UI, push notifications, and fast cloud backends.',
    caseStudyLink: {
      title: 'AgroTrace (Thermal Sensor Telemetry Sync)',
      href: '/case-studies#agrotrace',
    },
    premiumHighlights: [
      'Built to the resilience standards of our cold-chain telemetry tracking platforms.',
      'Full cross-platform iOS and Android native build featuring offline data sync and local caching.',
      'Multi-role permissions, secure storage, and real-time backend synchronization.',
      'End-to-end publishing management for Apple App Store and Google Play.',
      'Direct engineering leadership from Chief Systems Architect Muhammad Mujahid.',
    ],
    tiers: [
      {
        name: 'Starter',
        priceUsd: 4000,
        formattedPrice: '$4,000',
        turnaround: '~2–3 Weeks',
        outcome: 'Single-platform MVP app delivering core functional features for fast market validation.',
        deliverables: [
          'Single-platform MVP app (iOS or Android)',
          'Custom UI design matching your brand specifications',
          'Core application logic built to your specific requirements',
          'Backend setup for cloud data storage & auth',
          'Push notification capability',
          'Testing across multiple real physical devices',
          '1 round of revisions',
          '14 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Professional',
        priceUsd: 10000,
        formattedPrice: '$10,000',
        turnaround: '~4–6 Weeks',
        outcome: 'Standard cross-platform app for iOS and Android built from a single codebase with backend integration.',
        deliverables: [
          'Cross-platform app (iOS + Android from single codebase)',
          'Bespoke UI/UX design system pass',
          'Full core feature set built around your operational workflow',
          'Cloud backend with database & API integrations',
          'User authentication & role management',
          'Push notification segmentation',
          'App store submission guidance & management for both stores',
          '2 rounds of revisions',
          '21 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Enterprise',
        priceUsd: 25000,
        formattedPrice: '$25,000+',
        turnaround: '~6–8 Weeks',
        outcome: 'Full-featured cross-platform mobile system with multi-role permissions, encrypted data, and offline sync.',
        deliverables: [
          'Fully custom cross-platform app (iOS + Android native performance)',
          'Custom backend integration with your existing enterprise software',
          'Granular user roles & permission levels',
          'Real-time data synchronization & background offline storage',
          'Push notifications with custom audience segmenting',
          'Advanced security (encrypted local storage, token rotation)',
          'App store submission & guaranteed approval management',
          'Complete source code handover with technical runbooks',
          '30 days of post-launch support',
        ],
        ctaType: 'discovery',
      },
    ],
  },
  webApplications: {
    serviceId: 'web-applications',
    title: 'Web Applications & Custom Systems',
    leadPrice: '$3,500',
    floorMinUsd: 3500,
    description:
      'Full-stack custom web tools, dashboards, and management platforms engineered for multi-role operations and data security.',
    caseStudyLink: {
      title: 'AgroTrace & Sindh Food Security Dashboard',
      href: '/case-studies#agrotrace',
    },
    premiumHighlights: [
      'Engineered with the same fault-tolerant standards as our national telemetry systems.',
      'Full custom platform (CRM/ERP-lite) with multi-tenant auth and granular role-based access.',
      'Serverless PostgreSQL database architecture with real-time data exports and admin views.',
      'Third-party API webhook integrations and performance optimization for high user volume.',
      'Direct system design & code review by Chief Architect Muhammad Mujahid.',
    ],
    tiers: [
      {
        name: 'Starter',
        priceUsd: 3500,
        formattedPrice: '$3,500',
        turnaround: '~2–3 Weeks',
        outcome: 'Custom web-based tool or single-purpose dashboard replacing manual spreadsheet workflows.',
        deliverables: [
          'Custom web application built around your specific workflow',
          'Single-purpose operational dashboard or internal tool',
          'Core user authentication and access control',
          'Serverless PostgreSQL database architecture',
          'Mobile-responsive dashboard interface',
          'Basic reporting & data export features',
          '1 round of revisions',
          '14 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Professional',
        priceUsd: 8000,
        formattedPrice: '$8,000',
        turnaround: '~3–5 Weeks',
        outcome: 'Multi-feature web application with customer portal, admin dashboard, and automated reporting.',
        deliverables: [
          'Multi-feature web application platform',
          'Multi-role access control & permissions',
          'Serverless PostgreSQL database setup with Prisma ORM',
          'Admin control dashboard + client portal view',
          'Automated data reporting and CSV/PDF export',
          'Integration with third-party APIs (Stripe, SendGrid, Twilio)',
          '2 rounds of revisions',
          '21 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Enterprise',
        priceUsd: 20000,
        formattedPrice: '$20,000+',
        turnaround: '~4–8 Weeks',
        outcome: 'Full custom software platform (CRM/ERP-lite) with multi-role permissions, admin dashboards, and custom backend.',
        deliverables: [
          'Full enterprise custom software platform (CRM/ERP system)',
          'Multi-tenant authentication and role-based permissions',
          'Serverless PostgreSQL database with automated branching & backups',
          'Admin executive dashboard + client/vendor portals',
          'Advanced analytics reporting & automated notifications',
          'Complex third-party API webhook integrations',
          'Performance optimization for high concurrent user load',
          'Complete technical documentation & full source code handoff',
          '30 days of post-launch support',
        ],
        ctaType: 'discovery',
      },
    ],
  },
};

export const CUSTOM_ENTERPRISE_SERVICE = {
  serviceId: 'government-enterprise-solutions',
  title: 'Enterprise & Public Sector Custom Engineering',
  subtitle: 'Mission-Critical & Large-Scale Systems (AgroTrace, Sindh Food Security Dashboard, IPMI-OS)',
  description:
    'National telemetry platforms, public-sector monitoring dashboards, and complex enterprise software systems. Gated entirely behind custom technical discovery.',
  pricingNote: 'Starter $8,000 | Professional $20,000 | Enterprise $50,000+',
  ctaText: 'Book a Free Discovery Call',
  ctaType: 'discovery',
};

export const PRICING = {
  websiteDevelopment: {
    leadPrice: '$1,000',
    formattedRange: 'Starting at $1,000',
    shortRange: 'Starting at $1,000',
  },
  aiIntegration: {
    leadPrice: '$2,500',
    formattedRange: 'Starting at $2,500',
    shortRange: 'Starting at $2,500',
  },
  mobileAppDevelopment: {
    leadPrice: '$4,000',
    formattedRange: 'Starting at $4,000',
    shortRange: 'Starting at $4,000',
  },
  webApplications: {
    leadPrice: '$3,500',
    formattedRange: 'Starting at $3,500',
    shortRange: 'Starting at $3,500',
  },
  enterpriseSoftware: {
    leadPrice: '$8,000',
    formattedRange: 'Starting at $8,000',
    shortRange: 'Starting at $8,000',
  },
  businessSystems: {
    leadPrice: '$5,000',
    formattedRange: 'Starting at $5,000',
    shortRange: 'Starting at $5,000',
  },
  uiUxDesign: {
    leadPrice: '$800',
    formattedRange: 'Starting at $800',
    shortRange: 'Starting at $800',
  },
  ecommerce: {
    leadPrice: '$2,000',
    formattedRange: 'Starting at $2,000',
    shortRange: 'Starting at $2,000',
  },
  cloudDevOps: {
    leadPrice: '$2,000',
    formattedRange: 'Starting at $2,000',
    shortRange: 'Starting at $2,000',
  },
  maintenanceSupport: {
    leadPrice: '$250/mo',
    formattedRange: 'Starting from $250/month',
    shortRange: 'From $250/mo',
    unit: '/month',
  },
  consulting: {
    leadPrice: '$150/hr',
    formattedRange: 'Starting at $150/hour (Free Project Discovery Call Available)',
    shortRange: '$150/hr',
  },
};

export const BUDGET_RANGES_USD = [
  '$1,000 – $3,500',
  '$3,500 – $8,000',
  '$8,000 – $20,000',
  '$20,000 – $50,000',
  '$50,000+',
  'Custom Enterprise Quotation',
];

/** Dynamically generates "View N Tiers ($min–$max)" from PRICING_LADDER so it never drifts from source data. */
export function getTierRangeLabel(serviceKey: keyof typeof PRICING_LADDER): string {
  const service = PRICING_LADDER[serviceKey];
  const count = service.tiers.length;
  const min = service.tiers[0].formattedPrice;
  const max = service.tiers[count - 1].formattedPrice;
  return `View ${count} Tiers (${min}–${max})`;
}
