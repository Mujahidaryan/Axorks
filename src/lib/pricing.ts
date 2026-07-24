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
    minUsd: 250,
    maxUsd: 650,
    formattedRange: '$250 to $650+',
    shortRange: '$250 – $650+',
  },
  webApplications: {
    minUsd: 900,
    maxUsd: 5350,
    formattedRange: '$900 to $5,350+',
    shortRange: '$900 – $5.3k+',
  },
  mobileAppDevelopment: {
    minUsd: 700,
    maxUsd: 4300,
    formattedRange: '$700 to $4,300+',
    shortRange: '$700 – $4.3k+',
  },
  aiIntegration: {
    minUsd: 430,
    maxUsd: 2850,
    formattedRange: '$430 to $2,850+',
    shortRange: '$430 – $2.8k+',
  },
  governmentEnterprise: {
    isCustom: true,
    formattedRange: 'Custom Quotation',
    shortRange: 'Custom Quote',
  },
  maintenanceSupport: {
    minUsd: 50,
    maxUsd: 290,
    formattedRange: '$50 to $290/month',
    shortRange: '$50 – $290/mo',
    unit: '/month',
  },
};

export const BUDGET_RANGES_USD = [
  'Under $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Custom Enterprise Quotation',
];
