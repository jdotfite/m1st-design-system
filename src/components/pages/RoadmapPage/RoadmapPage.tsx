import React, { useState } from 'react';
import { PageTemplate } from '../../layout';
import { Button, Card, CardBody } from '../../ui';
import { useDocumentTitle } from '../../../utils';

interface PhaseItem {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned' | 'future';
  quarter: string;
  description: string;
  components: string[];
  deliverables: string[];
  effort: 'small' | 'medium' | 'large';
}

interface ComponentItem {
  name: string;
  category: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  effort: 'small' | 'medium' | 'large';
  dependencies: string[];
  description: string;
  examples: string[];
}

const RoadmapPage: React.FC = () => {
  const [activeView, setActiveView] = useState<'timeline' | 'backlog'>('timeline');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Set the document title
  useDocumentTitle('Roadmap');

  const phases: PhaseItem[] = [
    {
      id: 'phase-1',
      title: 'Foundation & Infrastructure',
      status: 'in-progress',
      quarter: 'Q1 2025',
      description: 'Establish core design system infrastructure and token architecture',
      components: ['Design Tokens', 'Theme System', 'CSS Architecture'],
      deliverables: [
        'Component library repository setup',
        '4-layer CSS token system',
        'Light/dark theme implementation',
        'Build and deployment pipeline',
        'Documentation structure'
      ],
      effort: 'large'
    },
    {
      id: 'phase-2',
      title: 'Core Components - Forms & Actions',
      status: 'in-progress',
      quarter: 'Q2 2025',
      description: 'Build essential form components and user interaction elements',
      components: ['Button', 'Input', 'Checkbox', 'Radio', 'Switch', 'Textarea', 'Select'],
      deliverables: [
        'Button component with all variants',
        'Form input components',
        'Form validation patterns',
        'Accessibility compliance',
        'Component testing suite'
      ],
      effort: 'large'
    },
    {
      id: 'phase-3',
      title: 'Navigation & Layout',
      status: 'planned',
      quarter: 'Q3 2025',
      description: 'Implement navigation components and layout utilities',
      components: ['Breadcrumb', 'Tabs', 'Menu', 'Navigation', 'Stepper', 'Pagination'],
      deliverables: [
        'Navigation component suite',
        'Layout grid system',
        'Responsive navigation patterns',
        'Mobile-first implementations'
      ],
      effort: 'medium'
    },
    {
      id: 'phase-4',
      title: 'Data Display & Feedback',
      status: 'planned',
      quarter: 'Q4 2025',
      description: 'Build components for displaying data and providing user feedback',
      components: ['Table', 'Card', 'Badge', 'Tag', 'Alert', 'Toast', 'Progress', 'Skeleton'],
      deliverables: [
        'Data table with sorting/filtering',
        'Card component variations',
        'Notification system',
        'Loading state components'
      ],
      effort: 'large'
    },
    {
      id: 'phase-5',
      title: 'Overlays & Advanced Interactions',
      status: 'planned',
      quarter: 'Q1 2026',
      description: 'Complex overlay components and advanced user interactions',
      components: ['Modal', 'Drawer', 'Popover', 'Tooltip', 'Dropdown', 'DatePicker'],
      deliverables: [
        'Modal and drawer system',
        'Advanced form components',
        'Date/time picker suite',
        'Tooltip and popover system'
      ],
      effort: 'large'
    },
    {
      id: 'phase-6',
      title: 'Specialized Components',
      status: 'future',
      quarter: 'Q1 2026',
      description: 'Industry-specific and advanced components',
      components: ['Calendar', 'DataGrid', 'FileUpload', 'Rating', 'Slider', 'ColorPicker'],
      deliverables: [
        'Advanced data visualization',
        'Financial service components',
        'File management components',
        'Interactive controls'
      ],
      effort: 'medium'
    }
  ];

  const componentBacklog: ComponentItem[] = [
    // Form Components (Critical Priority)
    {
      name: 'Button',
      category: 'Form',
      priority: 'critical',
      effort: 'medium',
      dependencies: [],
      description: 'Primary, secondary, and specialized button variants with icons and loading states',
      examples: ['Material Design 3', 'Ant Design', 'Chakra UI', 'Fluent UI']
    },
    {
      name: 'Input',
      category: 'Form',
      priority: 'critical',
      effort: 'medium',
      dependencies: ['Form Control'],
      description: 'Text input with validation, prefix/suffix, and various states',
      examples: ['Material Design TextField', 'Ant Design Input', 'Chakra UI Input']
    },
    {
      name: 'Checkbox',
      category: 'Form',
      priority: 'critical',
      effort: 'small',
      dependencies: [],
      description: 'Single and group checkbox controls with indeterminate state',
      examples: ['Material Design Checkbox', 'Fluent UI Checkbox']
    },
    {
      name: 'Radio',
      category: 'Form',
      priority: 'critical',
      effort: 'small',
      dependencies: [],
      description: 'Radio button groups for single selection',
      examples: ['Ant Design Radio', 'Chakra UI Radio']
    },
    {
      name: 'Select',
      category: 'Form',
      priority: 'high',
      effort: 'large',
      dependencies: ['Dropdown', 'Input'],
      description: 'Single and multi-select dropdown with search and custom options',
      examples: ['Ant Design Select', 'Chakra UI Select', 'Fluent UI Combobox']
    },
    {
      name: 'Switch',
      category: 'Form',
      priority: 'high',
      effort: 'small',
      dependencies: [],
      description: 'Toggle switch for binary choices',
      examples: ['Material Design Switch', 'Fluent UI Toggle']
    },
    {
      name: 'Textarea',
      category: 'Form',
      priority: 'high',
      effort: 'small',
      dependencies: ['Input'],
      description: 'Multi-line text input with auto-resize options',
      examples: ['Chakra UI Textarea', 'Ant Design TextArea']
    },

    // Navigation Components
    {
      name: 'Breadcrumb',
      category: 'Navigation',
      priority: 'high',
      effort: 'small',
      dependencies: ['Link'],
      description: 'Hierarchical navigation trail',
      examples: ['Ant Design Breadcrumb', 'Chakra UI Breadcrumb']
    },
    {
      name: 'Tabs',
      category: 'Navigation',
      priority: 'high',
      effort: 'medium',
      dependencies: [],
      description: 'Horizontal and vertical tab navigation',
      examples: ['Material Design Tabs', 'Fluent UI TabList']
    },
    {
      name: 'Menu',
      category: 'Navigation',
      priority: 'medium',
      effort: 'large',
      dependencies: ['Popover'],
      description: 'Context menus and navigation menus',
      examples: ['Ant Design Menu', 'Chakra UI Menu']
    },
    {
      name: 'Pagination',
      category: 'Navigation',
      priority: 'medium',
      effort: 'medium',
      dependencies: ['Button'],
      description: 'Page navigation for large data sets',
      examples: ['Ant Design Pagination', 'Material Design Pagination']
    },
    {
      name: 'Stepper',
      category: 'Navigation',
      priority: 'medium',
      effort: 'medium',
      dependencies: [],
      description: 'Step-by-step process indicator',
      examples: ['Material Design Stepper', 'Chakra UI Stepper']
    },

    // Data Display Components
    {
      name: 'Card',
      category: 'Data Display',
      priority: 'high',
      effort: 'medium',
      dependencies: [],
      description: 'Content container with header, body, and footer sections',
      examples: ['Material Design Card', 'Ant Design Card', 'Chakra UI Card']
    },
    {
      name: 'Table',
      category: 'Data Display',
      priority: 'high',
      effort: 'large',
      dependencies: ['Checkbox', 'Button'],
      description: 'Data table with sorting, filtering, and selection',
      examples: ['Ant Design Table', 'Fluent UI DataGrid']
    },
    {
      name: 'Badge',
      category: 'Data Display',
      priority: 'medium',
      effort: 'small',
      dependencies: [],
      description: 'Status indicators and notification badges',
      examples: ['Material Design Badge', 'Chakra UI Badge']
    },
    {
      name: 'Tag',
      category: 'Data Display',
      priority: 'medium',
      effort: 'small',
      dependencies: [],
      description: 'Removable labels and categories',
      examples: ['Ant Design Tag', 'Chakra UI Tag']
    },
    {
      name: 'Avatar',
      category: 'Data Display',
      priority: 'medium',
      effort: 'medium',
      dependencies: [],
      description: 'User profile images with fallbacks and groups',
      examples: ['Fluent UI Avatar', 'Chakra UI Avatar']
    },
    {
      name: 'List',
      category: 'Data Display',
      priority: 'medium',
      effort: 'medium',
      dependencies: ['Avatar'],
      description: 'Structured list items with metadata',
      examples: ['Material Design List', 'Ant Design List']
    },

    // Feedback Components
    {
      name: 'Alert',
      category: 'Feedback',
      priority: 'high',
      effort: 'medium',
      dependencies: ['Button'],
      description: 'Contextual feedback messages',
      examples: ['Chakra UI Alert', 'Ant Design Alert']
    },
    {
      name: 'Toast',
      category: 'Feedback',
      priority: 'high',
      effort: 'large',
      dependencies: ['Alert'],
      description: 'Temporary notification system',
      examples: ['Chakra UI Toast', 'Fluent UI Toast']
    },
    {
      name: 'Progress',
      category: 'Feedback',
      priority: 'medium',
      effort: 'medium',
      dependencies: [],
      description: 'Linear and circular progress indicators',
      examples: ['Material Design Progress', 'Chakra UI Progress']
    },
    {
      name: 'Skeleton',
      category: 'Feedback',
      priority: 'medium',
      effort: 'medium',
      dependencies: [],
      description: 'Content placeholder for loading states',
      examples: ['Ant Design Skeleton', 'Chakra UI Skeleton']
    },
    {
      name: 'Spinner',
      category: 'Feedback',
      priority: 'medium',
      effort: 'small',
      dependencies: [],
      description: 'Loading spinner indicators',
      examples: ['Fluent UI Spinner', 'Chakra UI Spinner']
    },

    // Overlay Components
    {
      name: 'Modal',
      category: 'Overlay',
      priority: 'high',
      effort: 'large',
      dependencies: ['Button'],
      description: 'Dialog overlays for focused tasks',
      examples: ['Chakra UI Modal', 'Ant Design Modal']
    },
    {
      name: 'Drawer',
      category: 'Overlay',
      priority: 'medium',
      effort: 'large',
      dependencies: ['Modal'],
      description: 'Side panel overlays for navigation or content',
      examples: ['Ant Design Drawer', 'Chakra UI Drawer']
    },
    {
      name: 'Popover',
      category: 'Overlay',
      priority: 'medium',
      effort: 'large',
      dependencies: [],
      description: 'Contextual popup containers',
      examples: ['Chakra UI Popover', 'Fluent UI Popover']
    },
    {
      name: 'Tooltip',
      category: 'Overlay',
      priority: 'medium',
      effort: 'medium',
      dependencies: ['Popover'],
      description: 'Contextual help text on hover',
      examples: ['Material Design Tooltip', 'Fluent UI Tooltip']
    },
    {
      name: 'Dropdown',
      category: 'Overlay',
      priority: 'medium',
      effort: 'large',
      dependencies: ['Popover', 'Menu'],
      description: 'Dropdown menu container',
      examples: ['Ant Design Dropdown', 'Fluent UI Dropdown']
    },

    // Specialized Components
    {
      name: 'DatePicker',
      category: 'Specialized',
      priority: 'medium',
      effort: 'large',
      dependencies: ['Input', 'Popover', 'Calendar'],
      description: 'Date and time selection component',
      examples: ['Ant Design DatePicker', 'Material Design DatePicker']
    },
    {
      name: 'Calendar',
      category: 'Specialized',
      priority: 'low',
      effort: 'large',
      dependencies: ['Button'],
      description: 'Full calendar display and interaction',
      examples: ['Ant Design Calendar', 'Fluent UI Calendar']
    },
    {
      name: 'Slider',
      category: 'Specialized',
      priority: 'low',
      effort: 'medium',
      dependencies: [],
      description: 'Range and value selection slider',
      examples: ['Material Design Slider', 'Chakra UI Slider']
    },
    {
      name: 'Rating',
      category: 'Specialized',
      priority: 'low',
      effort: 'small',
      dependencies: [],
      description: 'Star rating and review component',
      examples: ['Ant Design Rate', 'Fluent UI Rating']
    },
    {
      name: 'FileUpload',
      category: 'Specialized',
      priority: 'medium',
      effort: 'large',
      dependencies: ['Button', 'Progress'],
      description: 'File upload with drag-and-drop support',
      examples: ['Ant Design Upload', 'Chakra UI file input patterns']
    },
    {
      name: 'ColorPicker',
      category: 'Specialized',
      priority: 'low',
      effort: 'large',
      dependencies: ['Popover', 'Input'],
      description: 'Color selection and palette component',
      examples: ['Ant Design ColorPicker', 'Fluent UI ColorPicker']
    }
  ];

  const categories = ['all', ...Array.from(new Set(componentBacklog.map(c => c.category)))];
  const filteredBacklog = filterCategory === 'all' 
    ? componentBacklog 
    : componentBacklog.filter(c => c.category === filterCategory);

  const getStatusColor = (status: PhaseItem['status']) => {
    switch (status) {
      case 'completed': return 'var(--color-success)';
      case 'in-progress': return 'var(--color-danger)';
      case 'planned': return 'var(--color-warning)';
      case 'future': return 'var(--color-info)';
      default: return 'var(--color-neutral-400)';
    }
  };

  const getPriorityColor = (priority: ComponentItem['priority']) => {
    switch (priority) {
      case 'critical': return 'var(--color-danger)';
      case 'high': return 'var(--color-warning)';
      case 'medium': return 'var(--color-primary)';
      case 'low': return 'var(--color-neutral-400)';
      default: return 'var(--color-neutral-400)';
    }
  };

  const getEffortIcon = (effort: string) => {
    switch (effort) {
      case 'small': return '🟢';
      case 'medium': return '🟡';
      case 'large': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <PageTemplate
      title="M1st Design System Roadmap"
      description="Strategic roadmap for component development and feature delivery across quarters"
    >
      <div className="space-y-8">
        {/* Header Section */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <p className="text-lg mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              Our strategic plan for building a comprehensive component library based on industry standards 
              from Material Design, Ant Design, Fluent UI, and Chakra UI.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button
                variant={activeView === 'timeline' ? 'primary' : 'secondary'}
                onClick={() => setActiveView('timeline')}
              >
                Timeline View
              </Button>
              <Button
                variant={activeView === 'backlog' ? 'primary' : 'secondary'}
                onClick={() => setActiveView('backlog')}
              >
                Component Backlog
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                <div className="text-2xl font-bold" style={{ color: 'var(--color-danger)' }}>2</div>
                <div className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>In Progress Phases</div>
              </div>
              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                <div className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>45+</div>
                <div className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Planned Components</div>
              </div>
              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                <div className="text-2xl font-bold" style={{ color: 'var(--color-warning)' }}>6</div>
                <div className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Development Phases</div>
              </div>
              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                <div className="text-2xl font-bold" style={{ color: 'var(--color-info)' }}>11</div>
                <div className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Months Timeline</div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Timeline View */}
        {activeView === 'timeline' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--page-text-primary)' }}>
              DEVELOPMENT TIMELINE
            </h2>
            
            {phases.map((phase, index) => (
              <Card key={phase.id} variant="outlined" padding="lg">
                <CardBody>
                  <div className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: getStatusColor(phase.status) }}
                    >
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {phase.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <span 
                          className="px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ backgroundColor: getStatusColor(phase.status) }}
                        >
                          {phase.status.replace('-', ' ').toUpperCase()}
                        </span>
                        <span className="text-sm font-medium" style={{ color: 'var(--page-text-muted)' }}>
                          {phase.quarter}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                          {getEffortIcon(phase.effort)} {phase.effort} effort
                        </span>
                      </div>
                      
                      <p className="mb-4" style={{ color: 'var(--page-text-secondary)' }}>
                        {phase.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                          Components ({phase.components.length})
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.components.map((component) => (
                            <span 
                              key={component}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{ 
                                backgroundColor: 'var(--page-surface-sunken)', 
                                color: 'var(--page-text-primary)'
                              }}
                            >
                              {component}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                          Key Deliverables
                        </h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2" style={{ color: 'var(--page-text-secondary)' }}>
                              <span style={{ color: 'var(--color-success)' }}>✓</span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {/* Component Backlog View */}
        {activeView === 'backlog' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold" style={{ color: 'var(--page-text-primary)' }}>
                COMPONENT BACKLOG
              </h2>
              
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={filterCategory === category ? 'primary' : 'secondary'}
                    onClick={() => setFilterCategory(category)}
                    size="sm"
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredBacklog.map((component) => (
                <Card key={component.name} variant="outlined" padding="md">
                  <CardBody>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold" style={{ color: 'var(--page-text-primary)' }}>
                        {component.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getPriorityColor(component.priority) }}
                        />
                        <span className="text-xs">{getEffortIcon(component.effort)}</span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span 
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: 'var(--page-surface-sunken)', 
                          color: 'var(--page-text-primary)'
                        }}
                      >
                        {component.category}
                      </span>
                      <span 
                        className="ml-2 px-2 py-1 rounded text-xs font-medium text-white"
                        style={{ backgroundColor: getPriorityColor(component.priority) }}
                      >
                        {component.priority}
                      </span>
                    </div>

                    <p className="text-sm mb-3" style={{ color: 'var(--page-text-secondary)' }}>
                      {component.description}
                    </p>

                    {component.dependencies.length > 0 && (
                      <div className="mb-3">
                        <span className="text-xs font-medium" style={{ color: 'var(--page-text-muted)' }}>
                          Depends on: {component.dependencies.join(', ')}
                        </span>
                      </div>
                    )}

                    <div>
                      <span className="text-xs font-medium" style={{ color: 'var(--page-text-muted)' }}>
                        Industry examples:
                      </span>
                      <div className="text-xs mt-1" style={{ color: 'var(--page-text-secondary)' }}>
                        {component.examples.join(', ')}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Prioritization Section */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              PRIORITIZATION CRITERIA
            </h2>
            
            <ul className="space-y-3 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <div>
                  <strong style={{ color: 'var(--page-text-primary)' }}>User Impact:</strong> Most commonly used components first
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <div>
                  <strong style={{ color: 'var(--page-text-primary)' }}>Dependency Chain:</strong> Foundation components before complex ones
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <div>
                  <strong style={{ color: 'var(--page-text-primary)' }}>Business Value:</strong> Components that enable key user flows
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <div>
                  <strong style={{ color: 'var(--page-text-primary)' }}>Development Effort:</strong> Balance of complexity and impact
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: 'var(--color-primary)' }}>•</span>
                <div>
                  <strong style={{ color: 'var(--page-text-primary)' }}>Accessibility:</strong> WCAG compliance built-in from start
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default RoadmapPage;
