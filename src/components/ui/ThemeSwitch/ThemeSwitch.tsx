import React from 'react';
import { useTheme } from '../../../contexts';

export interface ThemeSwitchProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabel?: boolean;
  variant?: 'toggle' | 'dropdown';
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  size = 'md',
  className = '',
  showLabel = false,
  variant = 'toggle'
}) => {
  const { theme, resolvedTheme, toggleTheme, setTheme, systemTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
          className="
            px-3 py-2 text-sm border border-border-control rounded-md
            bg-background-container text-text-body
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition-colors duration-200
          "
          aria-label="Select theme"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System ({systemTheme})</option>
        </select>
      </div>
    );
  }

  const getThemeLabel = () => {
    if (theme === 'system') {
      return `System (${systemTheme})`;
    }
    return theme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-sm font-medium text-text-body">
          {getThemeLabel()} Mode
        </span>
      )}
      <button
        onClick={toggleTheme}
        className={`
          flex items-center justify-center ${sizeClasses[size]}
          border border-border-control rounded-md
          bg-background-container text-text-body
          transition-all duration-200 focus-ring
          hover:border-text-accent hover:text-text-accent
        `}
        aria-label={
          theme === 'system' 
            ? `Currently using system theme (${systemTheme}). Click to switch to light mode.`
            : isDarkMode 
              ? 'Switch to light mode' 
              : 'Switch to dark mode'
        }
        title={
          theme === 'system' 
            ? `System theme (${systemTheme})`
            : isDarkMode 
              ? 'Switch to light mode' 
              : 'Switch to dark mode'
        }
      >
        {theme === 'system' ? (
          // System icon (computer monitor)
          <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 3H4a2 2 0 00-2 2v11a2 2 0 002 2h4l-1 2v1h2l1-2h4l1 2h2v-1l-1-2h4a2 2 0 002-2V5a2 2 0 00-2-2zM4 5h16v9H4V5z"/>
          </svg>
        ) : isDarkMode ? (
          // Moon icon for dark mode
          <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </svg>
        ) : (
          // Sun icon for light mode
          <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
