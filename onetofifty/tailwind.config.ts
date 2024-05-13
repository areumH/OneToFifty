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
      },
      colors: {
        'test-color': colors.red,
      }
    },
  },
  plugins: [],
};
export default config;
