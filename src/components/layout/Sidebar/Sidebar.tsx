import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItem {
  label: string;
  href: string;
  children?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const location = useLocation();

  const renderItem = (item: SidebarItem, level = 0) => {
    const isActive = location.pathname === item.href;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.href} className={`${level > 0 ? 'ml-4' : ''}`}>
        <Link
          to={item.href}
          className={`
            block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150
            ${isActive 
              ? 'bg-neutral-100 text-neutral-900 border-r-2 border-red-600' 
              : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
            }
          `}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <div className="mt-1 space-y-1">
            {item.children!.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="w-64 bg-neutral-0 border-r border-neutral-200 h-full overflow-y-auto">
      <div className="p-4">
        <div className="space-y-1">
          {items.map(item => renderItem(item))}
        </div>
      </div>
    </nav>
  );
};
