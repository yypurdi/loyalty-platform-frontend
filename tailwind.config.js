/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A574',
        secondary: '#4ECB71',
        danger: '#FF6B6B',
        dark: '#1a1a1a',
        lightBg: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
