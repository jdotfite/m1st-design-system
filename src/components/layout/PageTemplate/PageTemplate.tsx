import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FoundationSidebar } from '../FoundationSidebar';
import { Sidebar } from '../Sidebar';
import Footer from '../Footer/Footer';
import { MainNavigation } from '../MainNavigation';
import { Breadcrumb, type BreadcrumbItem } from '../../ui';
import './PageTemplate.css';

interface PageTemplateProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  sidebarType?: 'components' | 'foundation' | 'typography' | 'none';
  sidebarItems?: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>;
  showFooter?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  title?: string;
  description?: string;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  showSidebar = false,
  sidebarType = 'none',
  sidebarItems = [],
  showFooter = true,
  breadcrumbs,
  className = '',
  title,
  description
}) => {
  const location = useLocation();

  // Auto-generate breadcrumbs based on route if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (breadcrumbs) return breadcrumbs;

    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    const breadcrumbItems: BreadcrumbItem[] = [
      { label: 'M1st Design System', href: '/' }
    ];

    // Build breadcrumbs based on URL structure
    if (segments.length === 0) {
      // Home page - no additional breadcrumbs needed
      return [];
    }

    if (path === '/components') {
      breadcrumbItems.push({ label: 'Components', isActive: true });
    } else if (path === '/typography') {
      breadcrumbItems.push({ label: 'Typography', isActive: true });
    } else if (path === '/colors') {
      breadcrumbItems.push({ label: 'Colors', isActive: true });
    } else if (path === '/patterns') {
      breadcrumbItems.push({ label: 'Patterns', isActive: true });
    } else if (path === '/token-visualizer') {
      breadcrumbItems.push({ label: 'Design Tokens', isActive: true });
    } else if (path === '/get-started') {
      breadcrumbItems.push({ label: 'Get Started', isActive: true });
    } else if (path === '/roadmap') {
      breadcrumbItems.push({ label: 'Roadmap', isActive: true });
    } else if (path.startsWith('/component/')) {
      breadcrumbItems.push({ label: 'Components', href: '/components' });
      
      // Extract component name from URL
      const componentName = segments[1];
      const formattedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
      breadcrumbItems.push({ label: formattedName, isActive: true });
    } else if (path.startsWith('/foundation/')) {
      breadcrumbItems.push({ label: 'Foundation', href: '/foundation' });
      
      // Extract foundation topic from URL
      const topicName = segments[1];
      const formattedName = topicName.charAt(0).toUpperCase() + topicName.slice(1);
      breadcrumbItems.push({ label: formattedName, isActive: true });
    }

    return breadcrumbItems;
  };

  const finalBreadcrumbs = generateBreadcrumbs();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Component navigation items for the generic sidebar
  const componentSidebarItems = [
    { label: 'Button', href: '/component/button', type: 'route' as const },
    { label: 'LoadingSpinner', href: '/component/loading-spinner', type: 'route' as const },
    { label: 'Modal', href: '/component/modal', type: 'route' as const },
    { label: 'Tabs', href: '/component/tabs', type: 'route' as const }
  ];

  return (
    <div className={`page-layout-grid ${showSidebar ? 'has-sidebar' : ''}`}>
      {/* Mobile Menu Button - top-right position, visible only on mobile */}
      <button
        className={`mobile-menu-button-global ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
        aria-expanded={isMobileMenuOpen}
        aria-pressed={isMobileMenuOpen}
        type="button"
      >
        <div className="burger" aria-hidden="true">
          <span className="burger-line top" />
          <span className="burger-line middle" />
          <span className="burger-line bottom" />
        </div>
        <span className="visually-hidden">{isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}</span>
      </button>

      {/* Main Navigation Area - positioned by CSS Grid */}
      <div className="main-nav-area">
        <MainNavigation 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Secondary Sidebar - conditionally rendered */}
      {(showSidebar && sidebarType === 'components') && (
        <div className="sidebar-area">
          <Sidebar items={componentSidebarItems} title="Components" />
        </div>
      )}
      {(showSidebar && sidebarType === 'foundation') && (
        <div className="sidebar-area">
          <FoundationSidebar />
        </div>
      )}
      {(showSidebar && sidebarType === 'typography') && (
        <div className="sidebar-area">
          <Sidebar items={sidebarItems} />
        </div>
      )}
      
      {/* Main Content Area */}
      <main className={`content-area ${className}`}>
        <div className="content-inner">
          {/* Auto-generated Breadcrumbs */}
          {finalBreadcrumbs.length > 0 && (
            <div className="mb-6">
              <Breadcrumb items={finalBreadcrumbs} />
            </div>
          )}
          
          {/* Page Header */}
          {(title || description) && (
            <div className="mb-8">
              {title && (
                <h1 
                  className="text-3xl font-bold mb-4"
                  style={{ color: 'var(--page-text-primary)' }}
                >
                  {title}
                </h1>
              )}
              {description && (
                <p 
                  className="text-lg leading-relaxed max-w-3xl"
                  style={{ color: 'var(--page-text-secondary)' }}
                >
                  {description}
                </p>
              )}
            </div>
          )}
          
          {/* Page Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </main>
      
      {/* Footer - spans full width */}
      {showFooter && (
        <footer className="footer-area">
          <Footer />
        </footer>
      )}
    </div>
  );
};