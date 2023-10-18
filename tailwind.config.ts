import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [],
// }
theme: {
  extend: {
    colors: {
      brand: {
        main: "#0E1E34",
      },
      black: {
        main: "#000",
        secondary: "#2E2C34",
        off: "#071220",
      },
      white: {
        main: "#ffffff",
        off: "#8693A4",
      },
      red:{
        success: "#FF5E1A",
        danger: "#DF2040",

      }
    },
    fontFamily: {
      audiowide: ["Audiowide", "sans-serif"],
      // jakarta: ["Plus Audiowide Sans", "sans-serif"],
    },
  },
},
plugins: [],
};
export default config
