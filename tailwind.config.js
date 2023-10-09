/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: '14pt',
      lg: '18pt',
      xl: '26pt',
      '2xl': '36pt',
      '3xl': '48pt',
      '4xl': '64pt',
      '5xl': '72pt',
    },
    extend: {
      height: {
        128: '32rem',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
      },
    },
  },
  plugins: [],
};
