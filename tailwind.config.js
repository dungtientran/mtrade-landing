/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '510px',
        'tablet': '992px',
        'laptop': '1200px',
        'deskop': '1300px',
      },
      fontFamily: {
        openSan: ['Open sans'],
        noto: ['Noto sans'],
      },
      colors: {
        'red-light': '#E42628',
        'black-light': '#09142F',
        'green-light': '#A6D98B',
        'green-link': '#00AEEF',
      }
    },
  },
  plugins: [],
}
