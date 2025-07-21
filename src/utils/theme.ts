/**
 * Theme utilities for consistent theming across the M1st Design System
 */

export const themeColors = {
  // Primary colors
  primary: {
    light: 'blue-600',
    dark: 'blue-500',
    hover: {
      light: 'blue-700',
      dark: 'blue-600'
    }
  },
  
  // Secondary colors
  secondary: {
    light: 'gray-600',
    dark: 'gray-500',
    hover: {
      light: 'gray-700',
      dark: 'gray-600'
    }
  },
  
  // Danger colors
  danger: {
    light: 'red-600',
    dark: 'red-500',
    hover: {
      light: 'red-700',
      dark: 'red-600'
    }
  },
  
  // Text colors
  text: {
    primary: 'text-text-heading',
    secondary: 'text-text-body',
    accent: 'text-text-accent',
    muted: 'text-gray-500 dark:text-gray-400'
  },
  
  // Background colors
  background: {
    primary: 'bg-background-main',
    secondary: 'bg-background-container',
    hover: 'hover:bg-gray-50 dark:hover:bg-gray-800'
  },
  
  // Border colors
  border: {
    default: 'border-border-divider',
    control: 'border-border-control',
    focus: 'focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-container'
  }
};

/**
 * Generate theme-aware classes for components
 */
export const getThemeClasses = (variant: string, type: 'button' | 'input' | 'card' = 'button') => {
  const baseClasses = 'transition-colors duration-200';
  
  switch (type) {
    case 'button':
      return {
        primary: `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600`,
        secondary: `${baseClasses} bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 dark:bg-gray-500 dark:hover:bg-gray-600`,
        outline: `${baseClasses} border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950`,
        ghost: `${baseClasses} text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500 dark:text-blue-400 dark:hover:bg-blue-950`,
        danger: `${baseClasses} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600`
      }[variant] || '';
      
    case 'input':
      return `${baseClasses} border border-border-control bg-background-container text-text-body placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500`;
      
    case 'card':
      return `${baseClasses} bg-background-container border border-border-divider shadow-sm hover:shadow-md dark:bg-gray-800 dark:border-neutral-700`;
      
    default:
      return baseClasses;
  }
};

/**
 * Common theme-aware component classes
 */
export const commonThemeClasses = {
  container: 'bg-background-container text-text-body',
  header: 'bg-background-container border-b border-border-divider',
  footer: 'bg-background-container border-t border-border-divider',
  sidebar: 'bg-background-container border-r border-border-divider',
  card: 'bg-background-container border border-border-divider shadow-sm',
  input: 'border border-border-control bg-background-container text-text-body placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500',
  button: {
    base: 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-container',
    sizes: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    }
  }
};
