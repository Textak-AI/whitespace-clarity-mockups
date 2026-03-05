/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#475569',
        teal: '#00bfa5',
        gold: '#fbbf24',
      },
    },
  },
  plugins: [],
}
