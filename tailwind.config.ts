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
