/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/*.{js,ts,jsx,tsx,mdx,vue}',
    './src/Components/*.{js,ts,jsx,tsx,mdx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};