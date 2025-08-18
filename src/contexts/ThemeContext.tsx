import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  systemTheme: 'light' | 'dark';
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  enableTransitions?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'system', // Respect user's OS preference
  storageKey = 'theme',
  enableTransitions = true
}) => {
  // Initialize with system theme to prevent flash
  const getInitialResolvedTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme;
      const theme = savedTheme || defaultTheme;
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return theme === 'system' ? systemTheme : theme;
    } catch {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
  };

  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(getInitialResolvedTheme);
  const [mounted, setMounted] = useState(false);

  // Get current system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    setSystemTheme(getSystemTheme());
  }, []);

  const applyTheme = useCallback((newResolvedTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    
    // Apply data attribute (modern, semantic)
    root.setAttribute('data-theme', newResolvedTheme);
    
    // Apply class for Tailwind compatibility
    if (newResolvedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Add smooth transitions after initial mount
    if (enableTransitions && mounted) {
      root.classList.add('theme-transition');
    }

    // Update theme-color meta tag for mobile browsers
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        'content', 
        newResolvedTheme === 'dark' ? '#101010' : '#ffffff'
      );
    }
  }, [enableTransitions, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
      
      if (theme === 'system') {
        setResolvedTheme(newSystemTheme);
        applyTheme(newSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme, applyTheme]);

  // Initialize theme on mount
  useEffect(() => {
    if (!mounted) return;

    const currentSystemTheme = getSystemTheme();
    setSystemTheme(currentSystemTheme);
    
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    
    // Smart theme detection: if saved theme conflicts with system theme significantly,
    // and user hasn't explicitly set a preference recently, default to system
    let initialTheme = savedTheme || defaultTheme;
    
    // If we have a saved theme but it's the opposite of system theme,
    // and no recent theme change timestamp, prefer system
    if (savedTheme && savedTheme !== 'system' && savedTheme !== currentSystemTheme) {
      const lastThemeChange = localStorage.getItem(storageKey + '_timestamp');
      const oneWeekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
      
      if (!lastThemeChange || parseInt(lastThemeChange) < oneWeekAgo) {
        // console.log('Saved theme is outdated or conflicts with system, defaulting to system');
        initialTheme = 'system';
      }
    }
    
    setThemeState(initialTheme);
    
    const resolvedInitialTheme = initialTheme === 'system' ? currentSystemTheme : initialTheme;
    setResolvedTheme(resolvedInitialTheme);
    
    // Only apply theme if it's different from what's already set by the FOUC script
    const currentDataTheme = document.documentElement.getAttribute('data-theme');
    if (currentDataTheme !== resolvedInitialTheme) {
      applyTheme(resolvedInitialTheme);
    }
    
    // Debug logging - comment out for production
    // console.log('ThemeProvider initialization:', {
    //   currentSystemTheme,
    //   savedTheme,
    //   initialTheme,
    //   resolvedInitialTheme,
    //   currentDataTheme
    // });
  }, [mounted, defaultTheme, storageKey, applyTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(storageKey, newTheme);
    
    // Store timestamp of when theme was explicitly changed
    localStorage.setItem(storageKey + '_timestamp', Date.now().toString());

    const newResolvedTheme = newTheme === 'system' ? systemTheme : newTheme;
    setResolvedTheme(newResolvedTheme);
    applyTheme(newResolvedTheme);
  };

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        resolvedTheme, 
        toggleTheme, 
        setTheme, 
        systemTheme, 
        mounted 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
