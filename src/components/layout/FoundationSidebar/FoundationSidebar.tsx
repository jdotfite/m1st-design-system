import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface FoundationItem {
  id: string;
  name: string;
  path: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
}

export const FoundationSidebar: React.FC = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const foundationItems: FoundationItem[] = [
    {
      id: 'typography',
      name: 'Typography',
      path: '/foundation/typography',
      status: 'completed',
      description: 'Type scale, fonts, and text styling'
    },
    {
      id: 'colors',
      name: 'Colors',
      path: '/foundation/colors',
      status: 'completed',
      description: 'Color system and design tokens'
    },
    {
      id: 'spacing',
      name: 'Spacing & Layout',
      path: '/foundation/spacing',
      status: 'planned',
      description: 'Grid system and spacing tokens'
    },
    {
      id: 'elevation',
      name: 'Elevation',
      path: '/foundation/elevation',
      status: 'planned',
      description: 'Shadow system and depth'
    },
    {
      id: 'icons',
      name: 'Iconography',
      path: '/foundation/icons',
      status: 'planned',
      description: 'Icon library and usage guidelines'
    },
    {
      id: 'motion',
      name: 'Motion',
      path: '/foundation/motion',
      status: 'planned',
      description: 'Animation and transition system'
    },
    {
      id: 'tokens',
      name: 'Design Tokens',
      path: '/foundation/tokens',
      status: 'in-progress',
      description: 'Token architecture and usage'
    }
  ];

  const filteredItems = foundationItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'var(--color-success)';
      case 'in-progress': return 'var(--color-warning)';
      case 'planned': return 'var(--color-info)';
      default: return 'var(--page-text-secondary)';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'in-progress': return '⚡';
      case 'planned': return '○';
      default: return '';
    }
  };

  return (
    <aside 
      className="
        foundation-sidebar
        hidden md:block border-r
        transition-all duration-300 ease-in-out
        fixed top-0 h-screen z-40
        w-64
      "
      style={{
        backgroundColor: 'var(--page-background)',
        borderColor: 'var(--page-border)',
        left: '100px', // Fixed main nav width - sits to the right of main navigation
        transition: 'left 0.3s ease',
        paddingTop: '72px' // Account for main navigation header
      }}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden">
        <nav className="py-8 px-4">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold"
                style={{ 
                  backgroundColor: 'var(--page-accent-primary)',
                  color: 'white'
                }}
              >
                F
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1" style={{ color: 'var(--page-text-primary)' }}>
                  Foundation Topics
                </h2>
                <p className="text-xs" style={{ color: 'var(--page-text-secondary)' }}>
                  {foundationItems.length} foundation elements
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search foundation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-md border focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'var(--page-surface)',
                  borderColor: 'var(--page-border)',
                  color: 'var(--page-text-primary)'
                }}
              />
              <div className="absolute right-3 top-2.5 text-xs" style={{ color: 'var(--page-text-secondary)' }}>
                ⌘K
              </div>
            </div>
          </div>

          {/* Foundation Items List */}
          <ul className="space-y-1">
          {filteredItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`
                    block p-3 rounded-lg mb-1 transition-all duration-200 hover:no-underline group
                    ${isActive ? 'shadow-sm' : ''}
                  `}
                  style={{
                    backgroundColor: isActive ? 'var(--page-surface)' : 'transparent',
                    borderLeft: isActive ? '3px solid var(--page-accent-primary)' : '3px solid transparent'
                  }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span 
                      className={`font-medium text-sm transition-colors duration-200 ${
                        isActive ? '' : 'group-hover:text-primary-600'
                      }`}
                      style={{
                        color: isActive 
                          ? 'var(--page-accent-primary)' 
                          : 'var(--page-text-primary)'
                      }}
                    >
                      {item.name}
                    </span>
                    <span 
                      className="text-xs font-medium ml-2"
                      style={{ color: getStatusColor(item.status) }}
                      title={item.status}
                    >
                      {getStatusText(item.status)}
                    </span>
                  </div>
                  <p 
                    className="text-xs leading-relaxed"
                    style={{ 
                      color: isActive 
                        ? 'var(--page-text-secondary)' 
                        : 'var(--page-text-secondary)'
                    }}
                  >
                    {item.description}
                  </p>
                </Link>
              </li>
            );
          })}
          </ul>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--page-border)' }}>
            <div className="text-xs" style={{ color: 'var(--page-text-secondary)' }}>
              <div className="flex items-center gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <span style={{ color: 'var(--color-success)' }}>✓</span> Ready
                </span>
                <span className="flex items-center gap-1">
                  <span style={{ color: 'var(--color-warning)' }}>⚡</span> In Progress
                </span>
                <span className="flex items-center gap-1">
                  <span style={{ color: 'var(--color-info)' }}>○</span> Planned
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default FoundationSidebar;
