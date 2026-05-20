/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: '#C4622D',
        peach: '#E8A87C',
        sage: '#6B8E5E',
        cream: '#FAF4EC',
        brown: '#2C1F14',
        sand: '#F0E6D3',
        'sage-tint': '#EBF0E8',
        'peach-light': '#FDF6EE',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        ui: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(44, 31, 20, 0.08)',
        'card-hover': '0 8px 32px rgba(44, 31, 20, 0.14)',
      },
    },
  },
  plugins: [],
}
