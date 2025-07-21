import React from 'react';
import { useSidebar } from '../../../contexts';

interface SidebarToggleProps {
  className?: string;
}

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ className = '' }) => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className={`sidebar-toggle-container ${className}`}>
      <button
        onClick={toggleSidebar}
        className="border border-border-divider shadow-sm
                   rounded-full w-8 h-8 flex items-center justify-center
                   hover:bg-background-hover hover:shadow-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
                   transition-all duration-300 ease-in-out
                   dark:border-neutral-700 dark:hover:bg-gray-700"
        style={{ backgroundColor: 'var(--page-background)' }}
        aria-label={isCollapsed ? 'Expand Navigation' : 'Collapse Navigation'}
        title={isCollapsed ? 'Expand Navigation' : 'Collapse Navigation'}
      >
        <svg
          fill="currentColor"
          height="16"
          width="16"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="text-text-body"
        >
          <path d="M18.25 4.7H1.75A.772.772 0 0 1 1 3.95c0-.399.352-.75.75-.75h16.5c.398 0 .75.351.75.75 0 .397-.352.75-.75.75ZM19 9.996a.772.772 0 0 0-.75-.75H1.75a.772.772 0 0 0-.75.75c0 .398.352.75.75.75h16.5c.398 0 .75-.352.75-.75Zm0 6.047a.772.772 0 0 0-.75-.75H1.75a.772.772 0 0 0-.75.75c0 .398.352.75.75.75h16.5c.398 0 .75-.352.75-.75Z" />
        </svg>
      </button>
    </div>
  );
};

export default SidebarToggle;
