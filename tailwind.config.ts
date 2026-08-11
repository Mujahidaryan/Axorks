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
        /* Executive Accent Color Palette */
        executive: {
          indigo: '#4F46E5',
          teal: '#0D9488',
          violet: '#7C3AED',
          amber: '#D97706',
          blue: '#2563EB',
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
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        'executive-sm': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'executive-md': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'executive-lg': '0 20px 50px -10px rgba(0, 0, 0, 0.12), 0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        'executive-glow': '0 0 40px -10px rgba(79, 70, 229, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
