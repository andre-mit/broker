import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#0d6efd',
        light: '#0d6efd',
        dark: '#0d6efd',
      },
      secondary: {
        DEFAULT: '#6c757d',
        light: '#6c757d',
        dark: '#6c757d',
      },
      success: {
        DEFAULT: '#198754',
        light: '#198754',
        dark: '#198754',
      },
      danger: {
        DEFAULT: '#dc3545',
        light: '#dc3545',
        dark: '#dc3545',
      },
      warning: {
        DEFAULT: '#ffc107',
        light: '#ffc107',
        dark: '#ffc107',
      },
      info: {
        DEFAULT: '#0dcaf0',
        light: '#0dcaf0',
        dark: '#0dcaf0',
      },
      light: {
        DEFAULT: '#f8f9fa',
        light: '#f8f9fa',
        dark: '#f8f9fa',
      },
      dark: {
        DEFAULT: '#212529',
        light: '#212529',
        dark: '#212529',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        DEFAULT: '#6c757d',
        light: '#6c757d',
        dark: '#6c757d',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
