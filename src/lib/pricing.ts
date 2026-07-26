export interface ServiceTier {
  name: 'Starter' | 'Growth' | 'Premium';
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
  floorPrice: string;
  floorMinUsd: number;
  description: string;
  tiers: ServiceTier[];
}

export const PRICING_LADDER: Record<string, ServicePricingStructure> = {
  websiteDevelopment: {
    serviceId: 'website-development',
    title: 'Custom Website Development',
    floorPrice: 'Starting at $600',
    floorMinUsd: 600,
    description:
      'High-performance marketing and corporate websites built with Next.js App Router, TypeScript, and serverless cloud infrastructure.',
    tiers: [
      {
        name: 'Starter',
        priceUsd: 600,
        formattedPrice: '$600',
        turnaround: '~1–2 Weeks',
        outcome: 'A fast-loading, credible single-page web presence ready to convert initial client leads.',
        deliverables: [
          'Single-Page Responsive Landing Site',
          'Next.js 14 & Tailwind CSS Architecture',
          'Serverless Contact Form & Email Notifications',
          '1 Round of Revisions & Vercel SSL Deployment',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Growth',
        priceUsd: 1200,
        formattedPrice: '$1,200',
        turnaround: '~2–3 Weeks',
        outcome: 'Multi-page business website with content editing capabilities for growing companies.',
        deliverables: [
          'Multi-Page Business Site (Up to 5 Pages)',
          'Basic CMS / Content Editing Integration',
          'Technical On-Page SEO & Meta Tag Setup',
          '2 Rounds of Revisions & Source Code Handoff',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 2000,
        formattedPrice: '$2,000',
        turnaround: '~3–4 Weeks',
        outcome: 'Fully custom enterprise-grade marketing platform engineered for maximum search visibility and high-ticket conversion.',
        deliverables: [
          'Fully Custom Design System & Micro-Animations',
          'Next.js App Router + Server Side Rendering',
          'Advanced Technical SEO & JSON-LD Schemas',
          '3+ Revision Rounds & Dedicated Post-Launch Support',
        ],
        ctaType: 'quote_or_discovery',
      },
    ],
  },
  webApplications: {
    serviceId: 'web-applications',
    title: 'Web Applications & Custom Systems',
    floorPrice: 'Starting at $2,200',
    floorMinUsd: 2200,
    description:
      'Full-stack web portals, CRMs, and operational management tools with serverless relational databases and role-based authorization.',
    tiers: [
      // Deliberately no Starter tier per directive
      {
        name: 'Growth',
        priceUsd: 2200,
        formattedPrice: '$2,200',
        turnaround: '~3–4 Weeks',
        outcome: 'Streamlined operational tool or single-purpose internal dashboard replacing spreadsheet workflows.',
        deliverables: [
          'Single-Purpose Web Application / Internal Tool',
          'Single User Role & Relational Database',
          'Next.js + Serverless PostgreSQL (Neon)',
          'REST API Endpoints & Core Dashboard Views',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 4000,
        formattedPrice: '$4,000',
        turnaround: '~4–8 Weeks',
        outcome: 'Full-scale custom software system with multi-tier permissions, admin portals, and client-facing interfaces.',
        deliverables: [
          'Full Custom Multi-Role Web Platform',
          'Multi-Tenant Auth & Role-Based Access Control (RBAC)',
          'Admin Portal + Client-Facing Views',
          'Relational DB Schema & Third-Party API Webhooks',
        ],
        ctaType: 'quote_or_discovery',
      },
    ],
  },
  aiIntegration: {
    serviceId: 'ai-integration',
    title: 'AI Solutions & Automation',
    floorPrice: 'Starting at $900',
    floorMinUsd: 900,
    description:
      'Practical AI implementations integrating OpenAI APIs, document processing pipelines, and vector embeddings into production software.',
    tiers: [
      {
        name: 'Starter',
        priceUsd: 900,
        formattedPrice: '$900',
        turnaround: '~1–2 Weeks',
        outcome: 'Automated AI feature integrating intelligent text or document assistance directly into your current site.',
        deliverables: [
          'Single AI Feature (Chatbot or Document Extraction)',
          'OpenAI API Pipeline Integration',
          'Basic Prompt Tuning & Error Handling',
          'Deployment & Token Rate Limiting Setup',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Growth',
        priceUsd: 1800,
        formattedPrice: '$1,800',
        turnaround: '~2–3 Weeks',
        outcome: 'Multi-workflow AI automation pipeline connecting intelligent models across core business processes.',
        deliverables: [
          'Multi-Feature AI Automation Pipeline',
          'OpenAI API Workflows Across Multiple Tasks',
          'Vector Database Embeddings for Semantic Search',
          'Automated Webhook Callbacks & Async Queues',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 3000,
        formattedPrice: '$3,000',
        turnaround: '~3–5 Weeks',
        outcome: 'Custom AI intelligence pipeline or production ML model engineered for high-throughput decision automation.',
        deliverables: [
          'Production-Ready AI Pipeline or ML Model Integration',
          'Advanced Document Parsing & Structured Data Extraction',
          'Token Usage Optimization & Cache Architecture',
          'Comprehensive Technical Documentation & API Audit',
        ],
        ctaType: 'quote_or_discovery',
      },
    ],
  },
  mobileAppDevelopment: {
    serviceId: 'mobile-app-development',
    title: 'Mobile App Development',
    floorPrice: 'Starting at $1,200',
    floorMinUsd: 1200,
    description:
      'Cross-platform iOS and Android applications built with modern UI, offline data synchronization, and fast cloud backends.',
    tiers: [
      {
        name: 'Starter',
        priceUsd: 1200,
        formattedPrice: '$1,200',
        turnaround: '~2–3 Weeks',
        outcome: 'Single-platform MVP mobile application delivering core functional features for fast market testing.',
        deliverables: [
          'Single-Platform MVP App (iOS or Android)',
          'Core Feature Implementation & Modern UI',
          'REST API Connectivity',
          'Store Deployment Guidance',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Growth',
        priceUsd: 2200,
        formattedPrice: '$2,200',
        turnaround: '~4–6 Weeks',
        outcome: 'Standard cross-platform mobile app for iOS and Android with backend integration and push alerts.',
        deliverables: [
          'Cross-Platform App (iOS & Android)',
          'Standard Feature Set & Caching Layer',
          'Push Notification Infrastructure',
          'JWT Authentication & User Profile Management',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 3800,
        formattedPrice: '$3,800',
        turnaround: '~6–8 Weeks',
        outcome: 'Full-featured cross-platform mobile system with complex offline data sync, multiple user roles, and custom backend.',
        deliverables: [
          'Full Cross-Platform iOS & Android Native Build',
          'Offline Data Synchronization & Local Cache',
          'Multi-Role Authorization & Secure Storage',
          'App Store & Google Play Publishing Support',
        ],
        ctaType: 'quote_or_discovery',
      },
    ],
  },
};

export const CUSTOM_ENTERPRISE_SERVICE = {
  serviceId: 'government-enterprise-solutions',
  title: 'Government / Enterprise-Scale Custom Engineering',
  subtitle: 'Mission-Critical & Large-Scale Systems (AgroTrace, Sindh Food Security Dashboard, IPMI-OS)',
  description:
    'National telemetry platforms, public-sector monitoring dashboards, and complex enterprise software. Gated entirely behind custom technical discovery.',
  pricingNote: 'No standard tier or floor price shown. Scope, timeline, and milestones delivered via custom proposal following discovery.',
  ctaText: 'Book a Discovery Call',
  ctaType: 'discovery',
};

export const PRICING = {
  websiteDevelopment: {
    floorMinUsd: 600,
    formattedRange: 'Starting at $600',
    shortRange: 'Starting at $600',
  },
  webApplications: {
    floorMinUsd: 2200,
    formattedRange: 'Starting at $2,200',
    shortRange: 'Starting at $2,200',
  },
  mobileAppDevelopment: {
    floorMinUsd: 1200,
    formattedRange: 'Starting at $1,200',
    shortRange: 'Starting at $1,200',
  },
  aiIntegration: {
    floorMinUsd: 900,
    formattedRange: 'Starting at $900',
    shortRange: 'Starting at $900',
  },
  governmentEnterprise: {
    isCustom: true,
    formattedRange: 'Custom Enterprise Quote',
    shortRange: 'Custom Quote',
  },
  maintenanceSupport: {
    floorMinUsd: 500,
    formattedRange: 'Starting from $500/month',
    shortRange: 'From $500/mo',
    unit: '/month',
  },
};

export const BUDGET_RANGES_USD = [
  '$600 – $1,500',
  '$1,500 – $3,500',
  '$3,500 – $7,500',
  '$7,500 – $15,000',
  '$15,000+',
  'Custom Enterprise Quotation',
];
