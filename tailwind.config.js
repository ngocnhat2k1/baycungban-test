/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      fontFamily: {
        'sans': ['SVN-Biennale']
      },
      colors: {
        'primary': '#4D46FA',
        'secondary': '#679289',
      },
      screens: {
        "2xl": "1535px",
        // => @media (max-width: 1535px) { ... }

        xl: "1279px",
        // => @media (max-width: 1279px) { ... }

        lg: "1023px",
        // => @media (max-width: 1023px) { ... }

        md: "767px",
        // => @media (max-width: 767px) { ... }

        sm: "639px",
        // => @media (max-width: 639px) { ... }

        xs: "479px",
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
}
