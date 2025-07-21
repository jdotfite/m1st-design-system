import { useTheme } from './ThemeContext';

export { ThemeProvider, useTheme, type Theme } from './ThemeContext';
export { SidebarProvider, useSidebar } from './SidebarContext';

/**
 * Advanced theme hook with additional accessibility and system information
 */
export const useAdvancedTheme = () => {
  const themeContext = useTheme();
  
  // Additional accessibility and system checks
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
    
  const prefersHighContrast = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-contrast: high)').matches
    : false;
    
  const prefersColorScheme = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    : 'light';

  return {
    ...themeContext,
    // Additional accessibility information
    prefersReducedMotion,
    prefersHighContrast,
    prefersColorScheme,
    
    // Helper methods
    isSystemDark: themeContext.systemTheme === 'dark',
    isCurrentlyDark: themeContext.resolvedTheme === 'dark',
    isUsingSystemTheme: themeContext.theme === 'system',
    shouldReduceMotion: prefersReducedMotion,
    shouldHighContrast: prefersHighContrast,
    
    // Theme cycle method (light -> dark -> system -> light)
    cycleTheme: () => {
      const { theme, setTheme } = themeContext;
      if (theme === 'light') {
        setTheme('dark');
      } else if (theme === 'dark') {
        setTheme('system');
      } else {
        setTheme('light');
      }
    },
    
    // Force theme method (ignores system preference)
    forceTheme: (forcedTheme: 'light' | 'dark') => {
      themeContext.setTheme(forcedTheme);
    }
  };
};

/**
 * Hook for theme-aware CSS class names
 */
export const useThemeClasses = () => {
  const { resolvedTheme, mounted } = useTheme();
  
  return {
    // Base theme classes
    themeClass: resolvedTheme,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
    mounted,
    
    // Conditional class helpers
    darkOnly: (classes: string) => resolvedTheme === 'dark' ? classes : '',
    lightOnly: (classes: string) => resolvedTheme === 'light' ? classes : '',
    themed: (lightClasses: string, darkClasses: string) => 
      resolvedTheme === 'dark' ? darkClasses : lightClasses,
      
    // Theme-aware utility classes
    bg: resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white',
    text: resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900',
    border: resolvedTheme === 'dark' ? 'border-neutral-700' : 'border-neutral-700',
    surface: resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
  };
};
