import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../contexts';
import logo from '../../../assets/m1st-logo.svg';
import './MainNavigation.css';

interface MainNavigationProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ 
  isMobileMenuOpen: externalMobileMenuOpen,
  setIsMobileMenuOpen: externalSetMobileMenuOpen
}) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isDarkMode = theme === 'dark';
  
  // Use external state if provided, otherwise internal state
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const isMobileMenuOpen = externalMobileMenuOpen ?? internalMobileMenuOpen;
  const setIsMobileMenuOpen = externalSetMobileMenuOpen ?? setInternalMobileMenuOpen;

  const navigationItems = [
    { path: '/typography', label: 'Typography', shortLabel: 'Typography' },
    { path: '/colors', label: 'Colors', shortLabel: 'Colors' },
    { path: '/components', label: 'Components', shortLabel: 'Components' },
    { path: '/patterns', label: 'Patterns', shortLabel: 'Patterns' },
    { path: '/guidelines', label: 'Guidelines', shortLabel: 'Guidelines' },
    { path: '/get-started', label: 'Get Started', shortLabel: 'Get Started' },
    { path: '/roadmap', label: 'Roadmap', shortLabel: 'Roadmap' },
    { path: '/token-visualizer', label: 'Design Tokens', shortLabel: 'Design Tokens' }
  ];

  const getItemIcon = (path: string) => {
    const iconStyle = {
      width: '20px',
      height: '20px',
      stroke: 'currentColor',
      fill: 'none',
      strokeWidth: '2',
      strokeLinecap: 'round' as const,
      strokeLinejoin: 'round' as const
    };

    switch (path) {
      case '/typography':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <polyline points="4 7 4 4 20 4 20 7"/>
            <line x1="9" y1="20" x2="15" y2="20"/>
            <line x1="12" y1="4" x2="12" y2="20"/>
          </svg>
        );
      case '/colors':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <circle cx="13.5" cy="6.5" r="4.5"/>
            <circle cx="17.5" cy="17.5" r="4.5"/>
            <circle cx="6.5" cy="17.5" r="4.5"/>
          </svg>
        );
      case '/components':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        );
      case '/patterns':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        );
      case '/get-started':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        );
      case '/guidelines':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <line x1="12" y1="9" x2="8" y2="9"/>
          </svg>
        );
      case '/roadmap':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
            <path d="M7 12h10"/>
            <path d="M7 8h6"/>
            <path d="M7 16h4"/>
          </svg>
        );
      case '/token-visualizer':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
        );
      default:
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
          </svg>
        );
    }
  };

  return (
    <>
      {/* Mobile Menu Button - only render if no external state is provided */}
      {!externalMobileMenuOpen && !externalSetMobileMenuOpen && (
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          style={{
            display: 'none',
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 10,
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--page-background)',
            border: '1px solid var(--page-border)',
            borderRadius: '0.75rem',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3px',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          <span style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'var(--page-text-primary)',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }} />
          <span style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'var(--page-text-primary)',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? 0 : 1
          }} />
          <span style={{
            width: '20px',
            height: '2px',
            backgroundColor: 'var(--page-text-primary)',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'none'
          }} />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 11,
            backdropFilter: 'blur(2px)',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Navigation + Mobile Menu Panel */}
      <nav 
        className={`main-navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}
        data-collapsed="true"
        style={{
          height: '100%',
          background: 'var(--page-background)',
          borderRight: '1px solid var(--page-border)',
          transition: 'transform 0.3s ease, width 0.3s ease'
        }}
      >
        {/* Inner container with fixed 100vh height for consistent positioning */}
        <div 
          className="nav-inner-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
            overflowY: 'auto',
            position: 'sticky',
            top: 0
          }}
        >
          {/* Header Section */}
          <div className="navigation-header" style={{ padding: '1rem 0.25rem' }}>
        {/* Mobile Close Button - removed since we have one in PageTemplate */}
        <div className="mobile-close-container" style={{ 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: '1rem'
        }}>
          {/* Removed "Menu" text and close button */}
        </div>

        <Link 
          to="/" 
          className="flex items-center text-neutral-900 font-semibold text-lg no-underline mb-8"
          style={{ 
            color: 'var(--page-text-primary)',
            justifyContent: 'center'
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src={logo} alt="M1st Design System" className="h-12 w-auto" />
        </Link>

  {/* Navigation Items */}
  <ul className="navigation-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {navigationItems.map((item) => (
            <li key={item.path} style={{ marginBottom: '0.5rem' }}>
              <Link
                to={item.path}
                className="navigation-link"
                title={item.label}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.5rem 0',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '0.625rem',
                  transition: 'all 0.2s ease',
                  color: location.pathname === item.path 
                    ? 'var(--page-text-primary)' 
                    : 'var(--page-text-secondary)',
                  backgroundColor: location.pathname === item.path 
                    ? 'var(--page-sidebar-menu-bg)' 
                    : 'transparent',
                  textAlign: 'center' as const,
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.backgroundColor = 'var(--page-sidebar-menu-bg)';
                    e.currentTarget.style.color = 'var(--page-text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--page-text-secondary)';
                  }
                }}
              >
                {/* Icon */}
                <span style={{ 
                  width: '20px', 
                  height: '20px', 
                  marginBottom: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  {getItemIcon(item.path)}
                </span>
                {/* Text - show full label on mobile, short label on desktop */}
                <span 
                  className="nav-text"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '400',
                    whiteSpace: 'nowrap' as const,
                    textAlign: 'center' as const,
                    lineHeight: '1.2'
                  }}
                >
                  {item.shortLabel}
                </span>
                <span 
                  className="nav-text-mobile"
                  style={{
                    display: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    textAlign: 'left' as const,
                    lineHeight: '1.2'
                  }}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
          </div>

          {/* Footer Section */}
          <div className="navigation-footer" style={{ padding: '1rem' }}>
            <div className="flex flex-col gap-4" style={{ alignItems: 'center' }}>
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="flex items-center justify-center w-10 h-10 border border-neutral-300 rounded bg-neutral-0 text-neutral-600 transition-all duration-200 hover:border-red-500 hover:text-red-600"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{
                  backgroundColor: 'var(--page-background)',
                  borderColor: 'var(--page-border)',
                  color: 'var(--page-text-secondary)'
                }}
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
            </div>
          </div>
        </div>
      </nav>
  </>
);
};

export default MainNavigation;
