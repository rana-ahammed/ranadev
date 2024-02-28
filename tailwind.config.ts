import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1b1b1b',
        light: '#fff',
        accent: '#7B0003',
        accentDark: '#ffdb4d',
        gray: '#747474',
      },
      fontFamily: {
        mr: ['var(--font-mr)'],
        in: ['var(--font-in)'],
      },
      animation: {
        roll: 'roll 40s linear infinite',
      },
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
export default config;
