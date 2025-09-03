import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarItem {
  label: string;
  href: string;
  children?: SidebarItem[];
  type?: 'hash' | 'route'; // New prop to determine navigation type
}

interface SidebarProps {
  items: SidebarItem[];
  title?: string; // Optional title override
}

export const Sidebar: React.FC<SidebarProps> = ({ items, title = "On This Page" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const renderItem = (item: SidebarItem, level = 0) => {
    const isHashNavigation = item.type !== 'route';
    const isActive = isHashNavigation 
      ? location.hash === item.href
      : location.pathname === item.href;
    const hasChildren = item.children && item.children.length > 0;

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      
      if (isHashNavigation) {
        // Hash-based navigation (scroll to element)
        const targetId = item.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update the URL hash without causing a page reload
          window.history.replaceState(null, '', item.href);
        }
      } else {
        // Route-based navigation (navigate to different page)
        navigate(item.href);
      }
    };

    return (
      <div key={item.href} className={`${level > 0 ? 'ml-4' : ''}`}>
        <a
          href={item.href}
          onClick={handleClick}
          className={`
            block px-3 py-2 text-sm transition-all duration-150 cursor-pointer rounded-md
          `}
          style={{
            color: isActive 
              ? 'var(--page-text-primary)' 
              : 'var(--page-text-secondary)',
            backgroundColor: isActive ? 'var(--page-hover)' : 'transparent',
            fontWeight: isActive ? '500' : '400'
          }}
          onMouseEnter={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = 'var(--page-hover)';
              e.currentTarget.style.color = 'var(--page-text-primary)';
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive) {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--page-text-secondary)';
            }
          }}
        >
          {item.label}
        </a>
        {hasChildren && (
          <div className="mt-1 space-y-1">
            {item.children!.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside 
      className="sidebar-component h-full overflow-y-auto"
      style={{ 
        backgroundColor: 'var(--page-background)',
        borderRight: '1px solid var(--page-border)'
      }}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden">
        <nav className="py-8 px-4">
          <div className="mb-6">
            <h2 
              className="text-lg font-semibold mb-3"
              style={{ color: 'var(--page-text-primary)' }}
            >
              {title}
            </h2>
          </div>
          
          <div className="space-y-1">
            {items.map(item => renderItem(item))}
          </div>
        </nav>
      </div>
    </aside>
  );
};
