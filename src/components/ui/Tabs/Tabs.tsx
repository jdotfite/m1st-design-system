import React, { useState, useRef, useEffect, ReactNode } from 'react';
import './Tabs.css';

// =============================================================================
// Tab Item Interface
// =============================================================================
export interface TabItem {
  /** Unique identifier for the tab */
  key: string;
  /** Display label for the tab */
  label: string;
  /** Content to display when tab is active */
  children: ReactNode;
  /** Optional icon component */
  icon?: ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Whether the tab can be closed (for editable card type) */
  closable?: boolean;
  /** Custom close icon */
  closeIcon?: ReactNode;
}

// =============================================================================
// Tabs Component Props
// =============================================================================
export interface TabsProps {
  /** Array of tab items */
  items: TabItem[];
  /** Currently active tab key */
  activeKey?: string;
  /** Default active tab key (uncontrolled) */
  defaultActiveKey?: string;
  /** Tab variant style */
  variant?: 'default' | 'underline' | 'pills' | 'card' | 'fullWidth';
  /** Tab size */
  size?: 'small' | 'medium' | 'large';
  /** Tab position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Whether tabs are centered */
  centered?: boolean;
  /** Animation configuration */
  animated?: boolean | { inkBar: boolean; tabPane: boolean };
  /** Whether tabs can be edited (add/remove) */
  type?: 'line' | 'card' | 'editable-card';
  /** Hide the add button for editable-card */
  hideAdd?: boolean;
  /** Custom add icon */
  addIcon?: ReactNode;
  /** Custom remove icon */
  removeIcon?: ReactNode;
  /** Extra content on the left or right */
  tabBarExtraContent?: ReactNode | { left?: ReactNode; right?: ReactNode };
  /** Gap between tabs */
  tabBarGutter?: number;
  /** Custom tab bar style */
  tabBarStyle?: React.CSSProperties;
  /** Custom tab panel style */
  tabPanelStyle?: React.CSSProperties;
  /** Whether to destroy inactive tab panes */
  destroyInactiveTabPane?: boolean;
  /** Custom className */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
  
  // Event handlers
  /** Callback when active tab changes */
  onChange?: (activeKey: string) => void;
  /** Callback when tab is clicked */
  onTabClick?: (key: string, event: React.MouseEvent) => void;
  /** Callback for tab edit actions (add/remove) */
  onEdit?: (targetKey: string | React.MouseEvent, action: 'add' | 'remove') => void;
}

// =============================================================================
// Tabs Component
// =============================================================================
export const Tabs: React.FC<TabsProps> = ({
  items = [],
  activeKey: controlledActiveKey,
  defaultActiveKey,
  variant = 'default',
  size = 'medium',
  position = 'top',
  centered = false,
  animated = { inkBar: true, tabPane: false },
  type = 'line',
  hideAdd = false,
  addIcon,
  removeIcon,
  tabBarExtraContent,
  tabBarGutter,
  tabBarStyle,
  tabPanelStyle,
  destroyInactiveTabPane = false,
  className = '',
  'aria-label': ariaLabel = 'Tabs',
  onChange,
  onTabClick,
  onEdit,
  ...rest
}) => {
  // =============================================================================
  // State Management
  // =============================================================================
  const [internalActiveKey, setInternalActiveKey] = useState<string>(() => {
    const firstEnabledItem = items.find(item => !item.disabled);
    return defaultActiveKey || firstEnabledItem?.key || '';
  });

  const activeKey = controlledActiveKey !== undefined ? controlledActiveKey : internalActiveKey;
  const isControlled = controlledActiveKey !== undefined;

  // =============================================================================
  // Refs and Animation
  // =============================================================================
  const tabListRef = useRef<HTMLDivElement>(null);
  const inkBarRef = useRef<HTMLDivElement>(null);
  const [inkBarStyle, setInkBarStyle] = useState<React.CSSProperties>({});

  // Update ink bar position
  useEffect(() => {
    if (variant === 'underline' && tabListRef.current && inkBarRef.current) {
      const activeTabElement = tabListRef.current.querySelector(`[data-tab-key="${activeKey}"]`) as HTMLElement;
      
      if (activeTabElement) {
        const tabListRect = tabListRef.current.getBoundingClientRect();
        const activeTabRect = activeTabElement.getBoundingClientRect();
        
        const animationConfig = typeof animated === 'object' ? animated : { inkBar: animated, tabPane: animated };
        
        if (position === 'top' || position === 'bottom') {
          setInkBarStyle({
            left: activeTabRect.left - tabListRect.left,
            width: activeTabRect.width,
            transform: animationConfig.inkBar ? 'translateX(0)' : 'none',
            transition: animationConfig.inkBar ? 'all 0.3s ease' : 'none'
          });
        } else {
          setInkBarStyle({
            top: activeTabRect.top - tabListRect.top,
            height: activeTabRect.height,
            transform: animationConfig.inkBar ? 'translateY(0)' : 'none',
            transition: animationConfig.inkBar ? 'all 0.3s ease' : 'none'
          });
        }
      }
    }
  }, [activeKey, variant, position, animated, items]);

  // =============================================================================
  // Event Handlers
  // =============================================================================
  const handleTabClick = (key: string, event: React.MouseEvent) => {
    const item = items.find(item => item.key === key);
    if (item?.disabled) return;

    if (!isControlled) {
      setInternalActiveKey(key);
    }

    onChange?.(key);
    onTabClick?.(key, event);
  };

  const handleTabClose = (key: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onEdit?.(key, 'remove');
  };

  const handleAddTab = (event: React.MouseEvent) => {
    onEdit?.(event, 'add');
  };

  // =============================================================================
  // Render Helpers
  // =============================================================================
  const renderTabBar = () => {
    const tabListClass = [
      'tabs__list',
      `tabs__list--${variant}`,
      `tabs__list--${size}`,
      `tabs__list--${position}`,
      centered && 'tabs__list--centered'
    ].filter(Boolean).join(' ');

    // Handle extra content with proper type checking
    const isExtraContentObject = tabBarExtraContent && typeof tabBarExtraContent === 'object' && 'left' in tabBarExtraContent;
    const extraContent = isExtraContentObject 
      ? (tabBarExtraContent as { left?: ReactNode; right?: ReactNode })
      : { left: undefined, right: tabBarExtraContent };

    return (
      <div className="tabs__header" style={tabBarStyle}>
        {extraContent.left && (
          <div className="tabs__extra tabs__extra--left">
            {extraContent.left}
          </div>
        )}
        
        <div 
          ref={tabListRef}
          className={tabListClass}
          role="tablist"
          aria-label={ariaLabel}
          style={{ gap: tabBarGutter }}
        >
          {items.map((item) => {
            const isActive = item.key === activeKey;
            const tabClass = [
              'tabs__tab',
              `tabs__tab--${variant}`,
              `tabs__tab--${size}`,
              isActive && 'tabs__tab--active',
              item.disabled && 'tabs__tab--disabled'
            ].filter(Boolean).join(' ');

            return (
              <button
                key={item.key}
                data-tab-key={item.key}
                className={tabClass}
                role="tab"
                aria-selected={isActive}
                aria-disabled={item.disabled}
                tabIndex={item.disabled ? -1 : 0}
                onClick={(e) => handleTabClick(item.key, e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTabClick(item.key, e as any);
                  }
                }}
              >
                {item.icon && <span className="tabs__tab-icon">{item.icon}</span>}
                <span className="tabs__tab-label">{item.label}</span>
                {item.closable && type === 'editable-card' && (
                  <span 
                    className="tabs__tab-close"
                    onClick={(e) => handleTabClose(item.key, e)}
                    aria-label={`Close ${item.label} tab`}
                  >
                    {item.closeIcon || removeIcon || '×'}
                  </span>
                )}
              </button>
            );
          })}

          {/* Ink bar for underline variant */}
          {variant === 'underline' && (
            <div 
              ref={inkBarRef}
              className="tabs__ink-bar"
              style={inkBarStyle}
            />
          )}

          {/* Add button for editable card */}
          {type === 'editable-card' && !hideAdd && (
            <button
              className="tabs__add-button"
              onClick={handleAddTab}
              aria-label="Add new tab"
            >
              {addIcon || '+'}
            </button>
          )}
        </div>

        {extraContent.right && (
          <div className="tabs__extra tabs__extra--right">
            {extraContent.right as ReactNode}
          </div>
        )}
      </div>
    );
  };

  const renderTabContent = () => {
    const activeItem = items.find(item => item.key === activeKey);
    const animationConfig = typeof animated === 'object' ? animated : { inkBar: animated, tabPane: animated };

    return (
      <div className="tabs__content" style={tabPanelStyle}>
        {destroyInactiveTabPane ? (
          activeItem && (
            <div 
              className={`tabs__panel tabs__panel--active ${animationConfig.tabPane ? 'tabs__panel--animated' : ''}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeKey}`}
            >
              {activeItem.children}
            </div>
          )
        ) : (
          items.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <div
                key={item.key}
                className={`tabs__panel ${isActive ? 'tabs__panel--active' : 'tabs__panel--hidden'} ${animationConfig.tabPane ? 'tabs__panel--animated' : ''}`}
                role="tabpanel"
                aria-labelledby={`tab-${item.key}`}
                aria-hidden={!isActive}
              >
                {item.children}
              </div>
            );
          })
        )}
      </div>
    );
  };

  // =============================================================================
  // Main Render
  // =============================================================================
  const tabsClass = [
    'tabs',
    `tabs--${variant}`,
    `tabs--${size}`,
    `tabs--${position}`,
    type === 'card' && 'tabs--card',
    type === 'editable-card' && 'tabs--editable-card',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={tabsClass} {...rest}>
      {position === 'bottom' ? (
        <>
          {renderTabContent()}
          {renderTabBar()}
        </>
      ) : position === 'left' ? (
        <div className="tabs__horizontal-layout">
          {renderTabBar()}
          {renderTabContent()}
        </div>
      ) : position === 'right' ? (
        <div className="tabs__horizontal-layout">
          {renderTabContent()}
          {renderTabBar()}
        </div>
      ) : (
        <>
          {renderTabBar()}
          {renderTabContent()}
        </>
      )}
    </div>
  );
};

// =============================================================================
// Exports
// =============================================================================
export default Tabs;
