import React from 'react';
import { useLocation } from 'react-router-dom';
import { ComponentsSidebar } from '../ComponentsSidebar';
import Footer from '../Footer/Footer';
import { Breadcrumb, type BreadcrumbItem } from '../../ui';

interface PageTemplateProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  sidebarType?: 'components' | 'foundation' | 'none';
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

    if (path === '/foundation') {
      breadcrumbItems.push({ label: 'Foundation', isActive: true });
    } else if (path === '/components') {
      breadcrumbItems.push({ label: 'Components', isActive: true });
    } else if (path === '/colors') {
      breadcrumbItems.push({ label: 'Colors', isActive: true });
    } else if (path === '/patterns') {
      breadcrumbItems.push({ label: 'Patterns', isActive: true });
    } else if (path === '/token-visualizer') {
      breadcrumbItems.push({ label: 'Design Tokens', isActive: true });
    } else if (path === '/get-started') {
      breadcrumbItems.push({ label: 'Get Started', isActive: true });
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

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1">
        {(showSidebar && sidebarType === 'components') && <ComponentsSidebar />}
        
        {/* Main Content - adjusted for fixed sidebar */}
        <div 
          className={`flex-1 min-w-0 transition-all duration-300 ease-in-out ${
            (showSidebar && sidebarType === 'components') ? 'md:ml-64' : ''
          } ${className}`}
          style={{ marginLeft: (showSidebar && sidebarType === 'components') ? undefined : '0' }}
        >
          <div className="px-8 py-6 min-h-full flex flex-col">
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
        </div>
      </div>
      
      {/* Footer - adjusted for fixed sidebar */}
      {showFooter && (
        <div 
          className={`transition-all duration-300 ease-in-out ${
            (showSidebar && sidebarType === 'components') ? 'md:ml-64' : ''
          }`}
        >
          <Footer />
        </div>
      )}
    </div>
  );
};