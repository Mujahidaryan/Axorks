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
          raised: '#16181D',
          border: '#242730',
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
        /* Systems Limited extracted colors — use ONLY these for white sections */
        'sys-white': '#FFFFFF',
        'sys-light': '#F4F5F7',        /* Systems Ltd light-gray section bg */
        'sys-blue': '#0057E7',         /* Systems Ltd vibrant electric blue accent */
        'sys-blue-hover': '#0047CC',   /* Darker hover for sys-blue */
        'sys-ink': '#0A0B0D',          /* Systems Ltd near-black text on white sections */
        'sys-ink-muted': '#4A4F5A',    /* Systems Ltd muted body text on white */
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
