/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-pirple': '#3B2A56',
        'dark-blue': '#003454',
        'light-gray': '#F9F6F2',
        'light-gray-2': '#F5F6F9',
        'cyan': '#00BDFF',
        'light-cyan': '#B7ECFF',
        'medium-gray': '#869199'
      },
    },
    screens: {
      '2xl': { 'max': '1430px' },
      // => @media (max-width: 1430px) { ... }

      'xl': { 'max': '1350px' },
      // => @media (max-width: 1350px) { ... }

      'header': { 'max': '1200px' },
      // => @media (max-width: 1200px) { ... }

      'xl-lg': { 'max': '1150px' },
      // => @media (max-width: 1150px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'lg-md': { 'max': '900px' },
      // => @media (max-width: 900px) { ... }

      'md': { 'max': '787px' },
      // => @media (max-width: 787px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      'xs': { 'max': '500px' },
      // => @media (max-width: 500px) { ... }
    }
  },
  plugins: [],
}
