import React from 'react';
import { useLocation } from 'react-router-dom';

interface SectionItem {
  id: string;
  label: string;
  href: string;
}

const TYPOGRAPHY_SECTIONS: SectionItem[] = [
  { id: 'installation', label: 'Installation', href: '#installation' },
  { id: 'font-families', label: 'Font Families', href: '#font-families' },
  { id: 'typography-scale', label: 'Typography Scale', href: '#typography-scale' },
  { id: 'examples', label: 'Examples', href: '#examples' },
  { id: 'design-principles', label: 'Design Principles', href: '#design-principles' },
  { id: 'usage-guidelines', label: 'Usage Guidelines', href: '#usage-guidelines' },
  { id: 'css-variables', label: 'CSS Variables', href: '#css-variables' },
  { id: 'accessibility', label: 'Accessibility', href: '#accessibility' }
];

export const TypographySidebar: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <aside 
      className="
        typography-sidebar
        hidden md:block border-r border-neutral-200
        transition-all duration-300 ease-in-out
        fixed top-0 h-screen z-40
        w-64
      "
      style={{ 
        backgroundColor: 'var(--page-background)',
        borderColor: 'var(--page-border)',
        left: '100px', // Fixed main nav width
        transition: 'left 0.3s ease'
      }}
    >
      <div className="h-full overflow-y-auto overflow-x-hidden">
        <nav className="py-8 px-4">
          <div className="mb-6">
            <h2 
              className="text-lg font-semibold mb-3"
              style={{ color: 'var(--page-text-primary)' }}
            >
              On This Page
            </h2>
          </div>
          
          <ul className="space-y-1">
            {TYPOGRAPHY_SECTIONS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-3 py-2 rounded text-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 hover:bg-opacity-50"
                  style={{
                    color: 'var(--page-text-secondary)'
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-sidebar-menu-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Quick Links Section */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--page-border)' }}>
            <h3 
              className="text-sm font-medium mb-3"
              style={{ color: 'var(--page-text-primary)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://fonts.google.com/specimen/Inter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded text-sm transition-colors hover:bg-opacity-50"
                  style={{ color: 'var(--page-text-muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-sidebar-menu-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Inter Font →
                </a>
              </li>
              <li>
                <a
                  href="https://fonts.google.com/specimen/Lora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded text-sm transition-colors hover:bg-opacity-50"
                  style={{ color: 'var(--page-text-muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-sidebar-menu-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Lora Font →
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('css-variables')}
                  className="block w-full text-left px-3 py-2 rounded text-sm transition-colors hover:bg-opacity-50"
                  style={{ color: 'var(--page-text-muted)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-sidebar-menu-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Copy CSS Variables
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default TypographySidebar;
