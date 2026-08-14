import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0C0F',
          raised: '#14161C',
          card: '#1A1C24',
          border: '#282C38',
        },
        steel: '#8A8F98',
        paper: '#ECEAE4',
        gold: {
          DEFAULT: '#C9A24B',
          light: '#DFBD6C',
          dark: '#9E7E32',
        },
        'signal-blue': {
          DEFAULT: '#2E6FBD',
          hover: '#3E82D5',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        /* Executive Accent Color Palette */
        executive: {
          indigo: '#4F46E5',
          indigoDeep: '#3730A3',
          teal: '#0D9488',
          tealDeep: '#115E59',
          violet: '#7C3AED',
          amber: '#D97706',
          amberDeep: '#B45309',
          blue: '#2563EB',
          ink: '#0F172A',
          muted: '#64748B',
        },
        /* Systems Limited extracted colors — high-contrast white section tokens */
        'sys-white': '#FFFFFF',
        'sys-light': '#F4F5F7',
        'sys-blue': '#0057E7',
        'sys-blue-hover': '#0047CC',
        'sys-ink': '#0A0B0D',
        'sys-ink-muted': '#4A4F5A',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.75rem', { lineHeight: '1.03', letterSpacing: '-0.035em' }],
        display: ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        hero: ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'section-lg': ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.022em' }],
        section: ['2rem', { lineHeight: '1.2', letterSpacing: '-0.018em' }],
      },
      letterSpacing: {
        eyebrow: '0.18em',
        widest2: '0.28em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        /* Crisp contact + ambient multi-layer system */
        'executive-sm': '0 1px 2px rgba(15, 23, 42, 0.03), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'executive-md':
          '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 20px -4px rgba(15, 23, 42, 0.06), 0 24px 48px -16px rgba(15, 23, 42, 0.06)',
        'executive-lg':
          '0 2px 4px rgba(15, 23, 42, 0.04), 0 12px 28px -6px rgba(15, 23, 42, 0.09), 0 40px 80px -24px rgba(15, 23, 42, 0.12)',
        'executive-xl':
          '0 2px 6px rgba(15, 23, 42, 0.05), 0 20px 44px -10px rgba(15, 23, 42, 0.12), 0 56px 112px -32px rgba(15, 23, 42, 0.14)',
        'executive-glow': '0 0 0 1px rgba(79, 70, 229, 0.1), 0 12px 32px -12px rgba(79, 70, 229, 0.35)',
        'executive-glow-teal': '0 0 0 1px rgba(13, 148, 136, 0.1), 0 12px 32px -12px rgba(13, 148, 136, 0.35)',
        'executive-glow-violet': '0 0 0 1px rgba(124, 58, 237, 0.1), 0 12px 32px -12px rgba(124, 58, 237, 0.35)',
        'executive-glow-gold': '0 0 0 1px rgba(201, 162, 75, 0.12), 0 12px 32px -12px rgba(201, 162, 75, 0.3)',
        /* Dark-surface shadows */
        'obsidian-sm': '0 1px 2px rgba(0, 0, 0, 0.4), 0 4px 12px -2px rgba(0, 0, 0, 0.5)',
        'obsidian-md':
          '0 1px 2px rgba(0, 0, 0, 0.45), 0 8px 20px -4px rgba(0, 0, 0, 0.5), 0 20px 40px -8px rgba(0, 0, 0, 0.55)',
        'obsidian-lg':
          '0 2px 4px rgba(0, 0, 0, 0.5), 0 16px 32px -8px rgba(0, 0, 0, 0.55), 0 48px 96px -24px rgba(0, 0, 0, 0.6)',
        /* Legacy aliases for soft elevation */
        'soft-xs': '0 1px 2px rgba(15, 23, 42, 0.04)',
        'soft-sm': '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift-slow': 'drift-slow 26s ease-in-out infinite alternate',
        'drift-slower': 'drift-slower 40s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.8s linear infinite',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'rise': 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        'drift-slow': {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '100%': { transform: 'translate3d(40px, -30px, 0) scale(1.08)' },
        },
        'drift-slower': {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '100%': { transform: 'translate3d(-50px, 40px, 0) scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        108: '1.08',
      },
      backgroundImage: {
        'fund-ring':
          'radial-gradient(circle at center, rgba(255,255,255,0.06) 0 1px, transparent 1.5px)',
      },
    },
  },
  plugins: [],
};

export default config;