import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '/',
  className = ''
}) => {
  return (
    <nav 
      className={`text-sm mb-6 ${className}`} 
      style={{ color: 'var(--page-text-muted)' }}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span 
                className="mx-2 breadcrumb-separator" 
                style={{ color: 'var(--page-text-muted)' }}
              >
                {separator}
              </span>
            )}
            {item.href && !item.isActive ? (
              <Link 
                to={item.href}
                className="breadcrumb-link hover:underline transition-colors"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {item.label}
              </Link>
            ) : (
              <span 
                style={{ 
                  color: item.isActive 
                    ? 'var(--page-text-primary)' 
                    : 'var(--page-text-muted)' 
                }}
                className={item.isActive ? 'font-medium' : ''}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
