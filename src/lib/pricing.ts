export interface PricingTier {
  serviceId: string;
  title: string;
  minUsd: number;
  maxUsd: number | null;
  formattedRange: string;
  shortRange: string;
  unit?: string;
  isCustom?: boolean;
}

export const PRICING = {
  websiteDevelopment: {
    minUsd: 1500,
    maxUsd: null,
    formattedRange: 'Starting from $1,500',
    shortRange: 'From $1,500',
  },
  webApplications: {
    minUsd: 3500,
    maxUsd: null,
    formattedRange: 'Starting from $3,500',
    shortRange: 'From $3,500',
  },
  mobileAppDevelopment: {
    minUsd: 4500,
    maxUsd: null,
    formattedRange: 'Starting from $4,500',
    shortRange: 'From $4,500',
  },
  aiIntegration: {
    minUsd: 2500,
    maxUsd: null,
    formattedRange: 'Starting from $2,500',
    shortRange: 'From $2,500',
  },
  governmentEnterprise: {
    isCustom: true,
    formattedRange: 'Custom Enterprise Quote',
    shortRange: 'Custom Quote',
  },
  maintenanceSupport: {
    minUsd: 500,
    maxUsd: null,
    formattedRange: 'Starting from $500/month',
    shortRange: 'From $500/mo',
    unit: '/month',
  },
};

export const BUDGET_RANGES_USD = [
  '$1,500 – $3,500',
  '$3,500 – $7,500',
  '$7,500 – $15,000',
  '$15,000+',
  'Custom Enterprise Quotation',
];
