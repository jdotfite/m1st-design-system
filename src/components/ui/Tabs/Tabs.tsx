import React from 'react';
import './Tabs.css';

// =============================================================================
// Tab Item Interface
// =============================================================================
export interface TabItem {
  /** Unique identifier for the tab */
  id: string;
  /** Display label for the tab */
  label: string;
  /** Optional URL for link behavior */
  href?: string;
  /** Whether this specific tab is disabled */
  disabled?: boolean;
  /** Additional content (badges, icons, etc.) */
  extra?: React.ReactNode;
}

// =============================================================================
// Tabs Props Interface
// =============================================================================
export interface TabsProps {
  /** Array of tab items to display */
  items: TabItem[];
  /** ID of the currently active tab */
  activeItem: string;
  /** Callback fired when a tab is clicked */
  onItemClick?: (item: TabItem) => void;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether all tabs are disabled */
  disabled?: boolean;
}

// =============================================================================
// Tabs Component - Simple Underline Style Only
// =============================================================================
export const Tabs: React.FC<TabsProps> = ({
  items,
  activeItem,
  onItemClick,
  className = '',
  disabled = false
}) => {
  const handleItemClick = (item: TabItem) => {
    if (disabled || item.disabled) return;
    
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const tabsClasses = [
    'tabs',
    disabled ? 'tabs--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={tabsClasses} role="tablist">
      <ul className="tabs__list">
        {items.map((item) => (
          <li key={item.id} className="tabs__item" role="presentation">
            {item.href ? (
              <a
                href={item.href}
                className={`tabs__button ${
                  activeItem === item.id ? 'tabs__button--active' : ''
                }`}
                role="tab"
                aria-selected={activeItem === item.id}
                aria-disabled={item.disabled}
                onClick={(e) => {
                  if (item.disabled || disabled) {
                    e.preventDefault();
                    return;
                  }
                  handleItemClick(item);
                }}
              >
                <span className="tabs__label">{item.label}</span>
                {item.extra && <span className="tabs__extra">{item.extra}</span>}
              </a>
            ) : (
              <button
                type="button"
                className={`tabs__button ${
                  activeItem === item.id ? 'tabs__button--active' : ''
                }`}
                role="tab"
                aria-selected={activeItem === item.id}
                disabled={item.disabled || disabled}
                onClick={() => handleItemClick(item)}
              >
                <span className="tabs__label">{item.label}</span>
                {item.extra && <span className="tabs__extra">{item.extra}</span>}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
