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
    leadPrice: '$600',
    floorMinUsd: 600,
    description:
      'Custom-coded marketing and business websites built with Next.js App Router for speed, SEO, and lead conversion.',
    caseStudyLink: {
      title: 'Sindh Food Security Dashboard (Public Sector UI)',
      href: '/case-studies#sindh-food-security',
    },
    premiumHighlights: [
      'Architected for the same reliability and speed standards as our public sector platforms.',
      'Fully custom Next.js App Router architecture built specifically around your brand and content.',
      'Complete CMS integration allowing full self-service content updates with zero technical friction.',
      'Advanced technical schema markup (Organization, Service, Offer) maximizing search visibility.',
      'Direct ongoing collaboration with Founder & Chief Architect Muhammad Mujahid.',
    ],
    tiers: [
      {
        name: 'Starter',
        priceUsd: 600,
        formattedPrice: '$600',
        turnaround: '~1–2 Weeks',
        outcome: 'A fast-loading, credible single-page web presence ready to convert client leads.',
        deliverables: [
          'Custom-coded landing site (Next.js, not a page builder)',
          'Fully responsive across mobile, tablet, and desktop',
          'Contact form with email delivery',
          'On-page SEO setup (meta tags, schema, sitemap)',
          'Performance-optimized, Core Web Vitals-friendly',
          'Security best practices (SSL, safe form handling)',
          '1 round of revisions',
          '7 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Growth',
        priceUsd: 1200,
        formattedPrice: '$1,200',
        turnaround: '~2–3 Weeks',
        outcome: 'Multi-page business website with content editing access for growing companies.',
        deliverables: [
          'Multi-page business site (up to 5 pages)',
          'Custom design pass, not a template',
          'Basic CMS/content editing access',
          'On-page SEO setup across all pages',
          'Contact form + basic analytics setup',
          'Cross-device testing',
          '2 rounds of revisions',
          '14 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 2000,
        formattedPrice: '$2,000',
        turnaround: '~3–4 Weeks',
        outcome: 'Fully custom enterprise marketing platform engineered for maximum search visibility and high-ticket lead conversion.',
        deliverables: [
          'Fully custom design, no templates or page builders',
          'Multi-page architecture built around your actual content',
          'Next.js App Router build with TypeScript',
          'Advanced schema markup and structured data (Organization, Service, Offer)',
          'CMS integration for easy self-service content updates',
          'Core Web Vitals green across mobile and desktop',
          'Custom animations/interactions where relevant',
          'Cross-browser and cross-device testing',
          'GA4 analytics setup',
          '3+ rounds of revisions',
          '30 days of post-launch support',
          'Source code handover with documentation',
        ],
        ctaType: 'discovery',
      },
    ],
  },
  aiIntegration: {
    serviceId: 'ai-integration',
    title: 'AI Solutions & Automation',
    leadPrice: '$900',
    floorMinUsd: 900,
    description:
      'Practical AI features, automated document workflows, and intelligent assistant integrations built directly into your software.',
    caseStudyLink: {
      title: 'IPMI-OS (Probabilistic Quantitative AI Engine)',
      href: '/case-studies#ipmi-os',
    },
    premiumHighlights: [
      'Engineered with the same mathematical rigour as our IPMI-OS quantitative probabilistic engine.',
      'Bespoke multi-step AI automation pipeline connecting complex document extraction with automated workflows.',
      'Role-based permissions, monitoring dashboards, and robust error-handling for production load.',
      'Data privacy and security protocols protecting client databases and proprietary workflows.',
      'Direct system design by Chief Architect Muhammad Mujahid.',
    ],
    tiers: [
      {
        name: 'Starter',
        priceUsd: 900,
        formattedPrice: '$900',
        turnaround: '~1–2 Weeks',
        outcome: 'Single AI-powered feature or automated workflow integrated directly into your existing site or app.',
        deliverables: [
          'Single AI-powered feature (e.g. one chatbot or automated workflow)',
          'Integration into your existing website or app',
          'Trained on your business\'s actual FAQs/content',
          'Basic conversation flow design',
          'Email or notification alerts triggered by the AI feature',
          'Testing across common customer scenarios',
          '1 round of revisions',
          '14 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Growth',
        priceUsd: 1800,
        formattedPrice: '$1,800',
        turnaround: '~2–3 Weeks',
        outcome: 'Multi-feature AI automation connecting intelligent tasks across core business tools.',
        deliverables: [
          'Multi-feature AI integration (chatbot + document/task automation)',
          'Integration connected to more than one workflow',
          'Custom conversation flows for multiple use cases',
          'Integration with existing business tools (email, WhatsApp, or internal systems)',
          'Basic data logging for AI interactions',
          'Error-handling and fallback responses',
          'Testing across expanded real-world scenarios',
          '2 rounds of revisions',
          '21 days of post-launch support',
          'Basic usage report after first month',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 3000,
        formattedPrice: '$3,000',
        turnaround: '~3–5 Weeks',
        outcome: 'Custom AI intelligence pipeline or automated model engineered for high-volume decision support.',
        deliverables: [
          'Custom AI pipeline built around your specific business logic',
          'Multiple integrated AI features working together',
          'Document processing and/or statistical/ML model integration',
          'Custom architecture built for scalability',
          'Role-based access to AI-powered tools where applicable',
          'Advanced error-handling and monitoring',
          'Data privacy and security best practices for AI workflows',
          'Performance testing under real usage load',
          'Detailed technical documentation',
          '3+ rounds of revisions',
          '30 days of post-launch support',
          'Monthly performance/usage report for the first quarter',
        ],
        ctaType: 'discovery',
      },
    ],
  },
  mobileAppDevelopment: {
    serviceId: 'mobile-app-development',
    title: 'Mobile App Development',
    leadPrice: '$1,200',
    floorMinUsd: 1200,
    description:
      'Cross-platform iOS and Android mobile applications built with custom UI, push notifications, and fast cloud backends.',
    caseStudyLink: {
      title: 'AgroTrace (Thermal Sensor Telemetry Sync)',
      href: '/case-studies#agrotrace',
    },
    premiumHighlights: [
      'Built to the resilience standards of our cold-chain telemetry tracking portals.',
      'Full cross-platform iOS and Android native build featuring offline data sync and local caching.',
      'Multi-role permissions, secure storage, and real-time backend synchronization.',
      'End-to-end publishing management for App Store and Google Play.',
      'Direct engineering leadership from Founder Muhammad Mujahid.',
    ],
    tiers: [
      {
        name: 'Starter',
        priceUsd: 1200,
        formattedPrice: '$1,200',
        turnaround: '~2–3 Weeks',
        outcome: 'Single-platform MVP app delivering core functional features for fast market validation.',
        deliverables: [
          'Single-platform MVP app (iOS or Android)',
          'Custom UI matching your brand',
          'Core functionality built to your specific need',
          'Basic backend for data storage',
          'Push notification setup',
          'Testing across multiple real devices',
          '1 round of revisions',
          '14 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Growth',
        priceUsd: 2200,
        formattedPrice: '$2,200',
        turnaround: '~4–6 Weeks',
        outcome: 'Standard cross-platform app for iOS and Android built from a single codebase with backend integration.',
        deliverables: [
          'Cross-platform app (iOS + Android from one codebase)',
          'Custom UI/UX design pass',
          'Moderate feature set built around your workflow',
          'Backend with database integration',
          'User authentication/login',
          'Push notifications',
          'App store submission guidance for both platforms',
          'Testing across multiple devices and OS versions',
          '2 rounds of revisions',
          '21 days of post-launch support',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 3800,
        formattedPrice: '$3,800',
        turnaround: '~6–8 Weeks',
        outcome: 'Full-featured cross-platform mobile system with multi-role permissions, encrypted data, and offline sync.',
        deliverables: [
          'Fully custom cross-platform app (iOS + Android)',
          'Custom backend integration with your existing systems',
          'Multiple user roles/permission levels',
          'Real-time data sync',
          'Push notifications with segmentation',
          'Offline functionality where applicable',
          'Advanced security (encrypted data storage, secure auth)',
          'Analytics integration',
          'App store submission for both platforms, full guidance',
          'Extensive device/OS testing',
          '30 days of post-launch support',
          'Source code handover with documentation',
        ],
        ctaType: 'discovery',
      },
    ],
  },
  webApplications: {
    serviceId: 'web-applications',
    title: 'Web Applications & Custom Systems',
    leadPrice: '$2,200',
    floorMinUsd: 2200,
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
      // Deliberately no Starter tier per directive
      {
        name: 'Growth',
        priceUsd: 2200,
        formattedPrice: '$2,200',
        turnaround: '~3–4 Weeks',
        outcome: 'Custom web-based tool or internal dashboard replacing spreadsheet workflows.',
        deliverables: [
          'Custom web-based tool built around your actual workflow',
          'Single-purpose dashboard or internal tool',
          'One user role/basic access control',
          'Database setup and management',
          'Mobile-responsive interface',
          'Basic reporting view',
          '2 rounds of revisions',
          '21 days of post-launch support',
          'Training session on how to use the system',
        ],
        ctaType: 'quote',
      },
      {
        name: 'Premium',
        priceUsd: 4000,
        formattedPrice: '$4,000',
        turnaround: '~4–8 Weeks',
        outcome: 'Full custom software platform with multi-role permissions, admin dashboards, and client views.',
        deliverables: [
          'Full custom system (CRM/ERP-lite functionality)',
          'Multi-role authentication and permissions',
          'Serverless PostgreSQL database architecture',
          'Admin dashboard + client-facing views',
          'Advanced reporting and data export',
          'Booking/inventory/order-tracking functionality as applicable',
          'API integrations with third-party tools where needed',
          'Performance optimization for scale',
          'Security best practices (encrypted data, secure auth)',
          'Extensive testing across use cases',
          '3+ rounds of revisions',
          '30 days of post-launch support',
          'Full documentation and training session',
        ],
        ctaType: 'discovery',
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
  pricingNote: 'No tier, no checklist, no price shown. Single CTA: Book a Discovery Call.',
  ctaText: 'Book a Discovery Call',
  ctaType: 'discovery',
};

export const PRICING = {
  websiteDevelopment: {
    leadPrice: '$600',
    formattedRange: 'Starting at $600',
    shortRange: 'Starting at $600',
  },
  aiIntegration: {
    leadPrice: '$900',
    formattedRange: 'Starting at $900',
    shortRange: 'Starting at $900',
  },
  mobileAppDevelopment: {
    leadPrice: '$1,200',
    formattedRange: 'Starting at $1,200',
    shortRange: 'Starting at $1,200',
  },
  webApplications: {
    leadPrice: '$2,200',
    formattedRange: 'Starting at $2,200',
    shortRange: 'Starting at $2,200',
  },
  governmentEnterprise: {
    isCustom: true,
    formattedRange: 'Custom Enterprise Quote',
    shortRange: 'Custom Quote',
  },
  maintenanceSupport: {
    leadPrice: '$500/mo',
    formattedRange: 'Starting from $500/month',
    shortRange: 'From $500/mo',
    unit: '/month',
  },
};

export const BUDGET_RANGES_USD = [
  '$600 – $1,200',
  '$1,200 – $2,200',
  '$2,200 – $4,000',
  '$4,000 – $10,000',
  '$10,000+',
  'Custom Enterprise Quotation',
];
