import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../contexts';
import logo from '../../../assets/m1st-logo.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isDarkMode = theme === 'dark';

  return (
    <header 
      className="border-b border-neutral-200 sticky top-0 z-50 px-3 backdrop-blur-sm"
      style={{ backgroundColor: 'var(--page-background)' }}
    >
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center text-neutral-900 font-semibold text-lg no-underline">
              <img src={logo} alt="M1st Design System" className="h-8 w-auto" />
            </Link>
          </div>

          <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="flex flex-col md:flex-row list-none gap-0 md:gap-6 m-0 p-6 md:p-0">
              <li>
                <Link 
                  to="/typography" 
                  className={`block md:inline-block py-4 md:py-2 px-0 md:px-4 no-underline font-medium transition-colors duration-200 rounded md:rounded-none ${
                    location.pathname === '/typography' ? 'text-neutral-900' : 'text-neutral-700'
                  }`}
                  style={{
                    backgroundColor: location.pathname === '/typography' 
                      ? 'var(--page-header-nav-bg)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== '/typography') {
                      e.currentTarget.style.backgroundColor = 'var(--page-header-nav-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== '/typography') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Typography
                </Link>
              </li>
              <li>
                <Link 
                  to="/colors" 
                  className={`block md:inline-block py-4 md:py-2 px-0 md:px-4 no-underline font-medium transition-colors duration-200 rounded md:rounded-none ${
                    location.pathname === '/colors' ? 'text-neutral-900' : 'text-neutral-700'
                  }`}
                  style={{
                    backgroundColor: location.pathname === '/colors' 
                      ? 'var(--page-header-nav-bg)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== '/colors') {
                      e.currentTarget.style.backgroundColor = 'var(--page-header-nav-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== '/colors') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Colors
                </Link>
              </li>
              <li>
                <Link 
                  to="/components" 
                  className={`block md:inline-block py-4 md:py-2 px-0 md:px-4 no-underline font-medium transition-colors duration-200 rounded md:rounded-none ${
                    location.pathname === '/components' ? 'text-neutral-900' : 'text-neutral-700'
                  }`}
                  style={{
                    backgroundColor: location.pathname === '/components' 
                      ? 'var(--page-header-nav-bg)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== '/components') {
                      e.currentTarget.style.backgroundColor = 'var(--page-header-nav-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== '/components') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Components
                </Link>
              </li>
              <li>
                <Link 
                  to="/patterns" 
                  className={`block md:inline-block py-4 md:py-2 px-0 md:px-4 no-underline font-medium transition-colors duration-200 rounded md:rounded-none ${
                    location.pathname === '/patterns' ? 'text-neutral-900' : 'text-neutral-700'
                  }`}
                  style={{
                    backgroundColor: location.pathname === '/patterns' 
                      ? 'var(--page-header-nav-bg)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== '/patterns') {
                      e.currentTarget.style.backgroundColor = 'var(--page-header-nav-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== '/patterns') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Patterns
                </Link>
              </li>
              <li>
                <Link 
                  to="/get-started" 
                  className={`block md:inline-block py-4 md:py-2 px-0 md:px-4 no-underline font-medium transition-colors duration-200 rounded md:rounded-none ${
                    location.pathname === '/get-started' ? 'text-neutral-900' : 'text-neutral-700'
                  }`}
                  style={{
                    backgroundColor: location.pathname === '/get-started' 
                      ? 'var(--page-header-nav-bg)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== '/get-started') {
                      e.currentTarget.style.backgroundColor = 'var(--page-header-nav-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== '/get-started') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Get started
                </Link>
              </li>
              <li>
                <Link 
                  to="/token-visualizer" 
                  className={`block md:inline-block py-4 md:py-2 px-0 md:px-4 no-underline font-medium transition-colors duration-200 rounded md:rounded-none ${
                    location.pathname === '/token-visualizer' ? 'text-neutral-900' : 'text-neutral-700'
                  }`}
                  style={{
                    backgroundColor: location.pathname === '/token-visualizer' 
                      ? 'var(--page-header-nav-bg)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== '/token-visualizer') {
                      e.currentTarget.style.backgroundColor = 'var(--page-header-nav-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== '/token-visualizer') {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  Design Tokens
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 border border-neutral-300 rounded bg-neutral-0 text-neutral-600 transition-all duration-200 hover:border-red-500 hover:text-red-600"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <a 
              href="https://github.com" 
              className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 border border-neutral-300 rounded no-underline text-neutral-700 font-medium text-sm bg-neutral-0 transition-all duration-200 hover:border-red-500 hover:text-red-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          <button 
            className="mobile-menu-btn md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
    </header>
  );
};

export default Header;
