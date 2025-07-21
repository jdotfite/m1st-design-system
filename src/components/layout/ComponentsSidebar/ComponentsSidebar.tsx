import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface Component {
  name: string;
  description: string;
  category: string;
  status: 'stable' | 'beta' | 'experimental';
  image?: string;
}

// Component data - matches ComponentsPage
const COMPONENTS: Component[] = [
  {
    name: 'Button',
    description: 'A comprehensive button system with 6 variants (primary, secondary, light, outline, ghost, danger) that work seamlessly across 4 background types. Features almost-black/white theming with Bootstrap-like light colors.',
    category: 'Form Controls',
    status: 'stable'
  },
  {
    name: 'LoadingSpinner',
    description: 'M1st branded loading animations for indicating loading states and processing operations. Features logo variant with pulsing animation and simple circular spinner.',
    category: 'Feedback',
    status: 'stable'
  },
  {
    name: 'Modal',
    description: 'A versatile modal dialog component for displaying content in a focused overlay. Supports multiple sizes, variants, and interaction patterns with accessibility and responsive design built-in.',
    category: 'Overlay',
    status: 'stable'
  },
  {
    name: 'Tabs',
    description: 'Flexible tab navigation component with multiple variants (default, underline, pills, card) and advanced features like editable tabs, animations, and content panels.',
    category: 'Navigation',
    status: 'stable'
  }
];

export const ComponentsSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  // Function to handle component navigation
  const handleComponentClick = (componentName: string) => {
    if (componentName === 'Button') {
      navigate('/component/button');
    } else if (componentName === 'LoadingSpinner') {
      navigate('/component/loading-spinner');
    } else if (componentName === 'Modal') {
      navigate('/component/modal');
    } else if (componentName === 'Tabs') {
      navigate('/component/tabs');
    }
  };

  // Sort components alphabetically for simple list
  const sortedComponents = useMemo(() => {
    return [...COMPONENTS].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <aside 
      className="
        components-sidebar
        hidden md:block border-r border-neutral-200
        transition-all duration-300 ease-in-out
        fixed top-0 h-screen z-40
        w-64
      "
      style={{ 
        backgroundColor: 'var(--page-background)',
        left: '100px', // Fixed main nav width
        transition: 'left 0.3s ease'
      }}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden">
        <nav className="py-8 px-4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">Components</h2>
          </div>
          
          <ul className="space-y-1">
            {sortedComponents.map((comp) => (
              <li key={comp.name}>
                <button
                  onClick={() => handleComponentClick(comp.name)}
                  className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 ${
                    ((comp.name === 'Button' && location.pathname === '/component/button') ||
                     (comp.name === 'LoadingSpinner' && location.pathname === '/component/loading-spinner') ||
                     (comp.name === 'Modal' && location.pathname === '/component/modal') ||
                     (comp.name === 'Tabs' && location.pathname === '/component/tabs'))
                      ? 'text-neutral-900 font-medium'
                      : 'text-neutral-700'
                  }`}
                  style={{
                    backgroundColor: ((comp.name === 'Button' && location.pathname === '/component/button') ||
                     (comp.name === 'LoadingSpinner' && location.pathname === '/component/loading-spinner') ||
                     (comp.name === 'Modal' && location.pathname === '/component/modal') ||
                     (comp.name === 'Tabs' && location.pathname === '/component/tabs'))
                      ? 'var(--page-sidebar-menu-bg)' 
                      : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    const isActive = ((comp.name === 'Button' && location.pathname === '/component/button') ||
                     (comp.name === 'LoadingSpinner' && location.pathname === '/component/loading-spinner') ||
                     (comp.name === 'Modal' && location.pathname === '/component/modal') ||
                     (comp.name === 'Tabs' && location.pathname === '/component/tabs'));
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'var(--page-sidebar-menu-bg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const isActive = ((comp.name === 'Button' && location.pathname === '/component/button') ||
                     (comp.name === 'LoadingSpinner' && location.pathname === '/component/loading-spinner') ||
                     (comp.name === 'Modal' && location.pathname === '/component/modal') ||
                     (comp.name === 'Tabs' && location.pathname === '/component/tabs'));
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {comp.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default ComponentsSidebar;
