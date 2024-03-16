import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'half-screen': 'calc(100vh/2)',
      },
      colors: {
        blue: '#006cff',
        dark: '#101213',
        'dark-accent': '#141618',
      },
    },
  },
  plugins: [],
}
export default config
