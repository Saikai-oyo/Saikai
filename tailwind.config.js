/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nativewind = require('nativewind/tailwind/css');

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/components/*.{js,jsx,ts,tsx}', './src/shared/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [nativewind],
};
