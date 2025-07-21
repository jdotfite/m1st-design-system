/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // M1st Design System colors
        'primary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0073bb',
          600: '#005a9d',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Bootstrap-like light colors for light backgrounds
        'light': {
          DEFAULT: '#f8f9fa',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        // Almost black and almost white colors for buttons
        'almost-black': {
          DEFAULT: '#1a1a1a',
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
        },
        'almost-white': {
          DEFAULT: '#fafafa',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Using CSS variables for theme-aware colors
        'background': {
          'main': 'var(--color-background-layout-main)',
          'container': 'var(--color-background-container-content)',
          'light': 'var(--color-background-light)',
          'hover': 'var(--color-background-hover)',
          'active': 'var(--color-background-active)',
          'success': 'var(--color-background-success)',
          'warning': 'var(--color-background-warning)',
          'danger': 'var(--color-background-danger)',
        },
        'text': {
          'body': 'var(--color-text-body-default)',
          'heading': 'var(--color-text-heading-default)',
          'accent': 'var(--color-text-accent)',
          'muted': 'var(--color-text-muted)',
          'success': 'var(--color-text-success)',
          'warning': 'var(--color-text-warning)',
          'danger': 'var(--color-text-danger)',
        },
        'border': {
          'divider': 'var(--color-border-divider-default)',
          'control': 'var(--color-border-control-default)',
        },
        'button': {
          'primary': {
            'bg': 'var(--color-button-primary-bg)',
            'text': 'var(--color-button-primary-text)',
            'hover': 'var(--color-button-primary-hover)',
          },
          'secondary': {
            'bg': 'var(--color-button-secondary-bg)',
            'text': 'var(--color-button-secondary-text)',
            'border': 'var(--color-button-secondary-border)',
            'hover': 'var(--color-button-secondary-hover)',
          },
        }
      },
      spacing: {
        'xxs': 'var(--space-xxs)',
        'xs': 'var(--space-xs)',
        's': 'var(--space-s)',
        'm': 'var(--space-m)',
        'l': 'var(--space-l)',
        'xl': 'var(--space-xl)',
        'xxl': 'var(--space-xxl)',
        'xxxl': 'var(--space-xxxl)',
      },
      fontSize: {
        'heading-xl': 'var(--font-heading-xl-size)',
        'heading-l': 'var(--font-heading-l-size)',
        'heading-m': 'var(--font-heading-m-size)',
        'heading-s': 'var(--font-heading-s-size)',
        'heading-xs': 'var(--font-heading-xs-size)',
        'body-m': 'var(--font-body-m-size)',
        'body-s': 'var(--font-body-s-size)',
      },
      maxWidth: {
        'content': 'var(--max-content-width)',
      },
      borderRadius: {
        'normal': 'var(--border-radius-normal)',
        'small': 'var(--border-radius-small)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      }
    },
  },
  plugins: [],
}
