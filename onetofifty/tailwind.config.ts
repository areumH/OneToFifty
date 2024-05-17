import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      size: {
        'container' : '400px',
        'sideButton-border': '3px',
        'modal' : '330px',
      },
      colors: {
        'test-color': colors.red,
      },
      animation: {
        'sideButton-spin': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
