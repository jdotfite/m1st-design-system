import React, { useState } from 'react';
import { PageTemplate } from '../../layout';
import { Button, Card, CardBody, Modal, Badge, Tabs } from '../../ui';
import { useDocumentTitle } from '../../../utils';

interface Pattern {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'available' | 'in-progress' | 'planned';
  preview?: React.ReactNode;
  codeExample?: string;
  guidelines: string[];
}

export const PatternsPage: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Set the document title
  useDocumentTitle('Patterns');

  const patterns: Pattern[] = [
    {
      id: 'dashboard-layout',
      name: 'Dashboard Layout',
      category: 'Page Templates',
      description: 'Standard dashboard layout with sidebar navigation, header, and main content area.',
      status: 'available',
      guidelines: [
        'Use consistent spacing and alignment',
        'Maintain clear visual hierarchy',
        'Ensure responsive behavior across devices',
        'Include proper loading states'
      ],
      codeExample: `<div className="dashboard-layout">
  <header className="dashboard-header">
    <!-- Navigation and user menu -->
  </header>
  <aside className="dashboard-sidebar">
    <!-- Main navigation -->
  </aside>
  <main className="dashboard-content">
    <!-- Page content -->
  </main>
</div>`
    },
    {
      id: 'form-validation',
      name: 'Form Validation',
      category: 'Forms',
      description: 'Consistent validation patterns with real-time feedback and error messaging.',
      status: 'available',
      guidelines: [
        'Show validation on blur, not on every keystroke',
        'Use clear, actionable error messages',
        'Highlight invalid fields with consistent styling',
        'Provide success indicators for valid fields'
      ],
      codeExample: `<form className="validated-form">
  <div className="form-field">
    <label>Email Address</label>
    <input type="email" className="form-input" />
    <span className="field-error">Please enter a valid email</span>
  </div>
  <Button type="submit">Submit</Button>
</form>`
    },
    {
      id: 'data-table',
      name: 'Data Tables',
      category: 'Data Display',
      description: 'Responsive data tables with sorting, filtering, and pagination.',
      status: 'available',
      guidelines: [
        'Use zebra striping for better readability',
        'Provide sorting indicators in column headers',
        'Show loading states during data fetching',
        'Include empty states with helpful messaging'
      ],
      codeExample: `<table className="data-table">
  <thead>
    <tr>
      <th className="sortable">Name</th>
      <th className="sortable">Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <!-- Table rows -->
  </tbody>
</table>`
    },
    {
      id: 'empty-states',
      name: 'Empty States',
      category: 'Data Display',
      description: 'Helpful empty states that guide users toward their next action.',
      status: 'available',
      guidelines: [
        'Use encouraging, not apologetic language',
        'Provide clear next steps or actions',
        'Include relevant illustrations when helpful',
        'Match the tone to the context (serious for errors, friendly for onboarding)'
      ],
      codeExample: `<div className="empty-state">
  <img src="/empty-illustration.svg" alt="" />
  <h3>No transactions yet</h3>
  <p>Your recent transactions will appear here once you start banking.</p>
  <Button variant="primary">Make a Transfer</Button>
</div>`
    },
    {
      id: 'loading-states',
      name: 'Loading States',
      category: 'Feedback',
      description: 'Progressive loading patterns that keep users informed during async operations.',
      status: 'available',
      guidelines: [
        'Use skeleton screens for content that will load',
        'Show progress indicators for long operations',
        'Provide estimated time when possible',
        'Allow cancellation for user-initiated actions'
      ],
      codeExample: `<div className="loading-content">
  <div className="skeleton-text skeleton-text--title"></div>
  <div className="skeleton-text skeleton-text--body"></div>
  <div className="skeleton-text skeleton-text--body"></div>
</div>`
    },
    {
      id: 'notification-patterns',
      name: 'Notifications',
      category: 'Feedback',
      description: 'Toast notifications, alerts, and system messages for user feedback.',
      status: 'available',
      guidelines: [
        'Use appropriate severity levels (info, success, warning, error)',
        'Auto-dismiss non-critical notifications',
        'Provide action buttons when relevant',
        'Stack multiple notifications gracefully'
      ],
      codeExample: `<div className="notification notification--success">
  <div className="notification-content">
    <h4>Transfer Successful</h4>
    <p>$500 has been sent to John Doe</p>
  </div>
  <button className="notification-dismiss">×</button>
</div>`
    },
    {
      id: 'settings-layout',
      name: 'Settings Layout',
      category: 'Page Templates',
      description: 'Structured settings pages with clear categorization and navigation.',
      status: 'in-progress',
      guidelines: [
        'Group related settings into logical sections',
        'Use progressive disclosure for advanced options',
        'Show save status and changes clearly',
        'Provide confirmation for destructive actions'
      ]
    },
    {
      id: 'onboarding-flow',
      name: 'Onboarding Flow',
      category: 'User Flow',
      description: 'Multi-step onboarding with progress indication and helpful guidance.',
      status: 'planned',
      guidelines: [
        'Show clear progress through the flow',
        'Allow users to skip optional steps',
        'Provide helpful tips and explanations',
        'Enable easy navigation between steps'
      ]
    },
    {
      id: 'search-patterns',
      name: 'Search & Filtering',
      category: 'Navigation',
      description: 'Search interfaces with autocomplete, filters, and result organization.',
      status: 'planned',
      guidelines: [
        'Provide search suggestions and autocomplete',
        'Show filter counts and clear filter options',
        'Display search results with clear hierarchy',
        'Handle empty search results gracefully'
      ]
    }
  ];

  const categories = [
    'all',
    'Page Templates',
    'Forms',
    'Data Display',
    'Feedback',
    'User Flow',
    'Navigation'
  ];

  const filteredPatterns = activeCategory === 'all' 
    ? patterns 
    : patterns.filter(pattern => pattern.category === activeCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'var(--color-success)';
      case 'in-progress': return 'var(--color-warning)';
      case 'planned': return 'var(--color-info)';
      default: return 'var(--page-text-secondary)';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'in-progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return status;
    }
  };

  return (
    <PageTemplate
      title="Design Patterns"
      description="Reusable solutions to common design problems. These patterns provide consistency and help teams build experiences faster."
      showSidebar={false}
      sidebarType="none"
    >
      <div className="space-y-8">

        {/* Category Filter */}
        <div>
          <Tabs
            items={categories.map(category => ({
              id: category,
              label: category === 'all' ? 'All Patterns' : category,
              extra: category === 'all' ? 
                <span className="ml-1 text-xs opacity-60">({patterns.length})</span> :
                <span className="ml-1 text-xs opacity-60">({patterns.filter(p => p.category === category).length})</span>
            }))}
            activeItem={activeCategory}
            onItemClick={(item) => setActiveCategory(item.id)}
            variant="underline"
            size="medium"
            position="left"
          />
        </div>

        {/* Pattern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatterns.map((pattern) => (
            <Card
              key={pattern.id}
              variant="outlined"
              padding="lg"
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedPattern(pattern)}
            >
              <CardBody>
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold" style={{ color: 'var(--page-text-primary)' }}>
                      {pattern.name}
                    </h3>
                    <Badge
                      variant={pattern.status === 'available' ? 'success' : pattern.status === 'in-progress' ? 'warning' : 'info'}
                      size="sm"
                    >
                      {getStatusLabel(pattern.status)}
                    </Badge>
                  </div>

                  <div className="text-xs font-medium px-2 py-1 rounded-md inline-block"
                       style={{ 
                         backgroundColor: 'var(--page-surface-sunken)',
                         color: 'var(--page-text-secondary)'
                       }}>
                    {pattern.category}
                  </div>

                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                    {pattern.description}
                  </p>

                  {pattern.status === 'available' && (
                    <div className="pt-2">
                      <span className="text-xs font-medium" style={{ color: 'var(--color-accent-primary)' }}>
                        Click to view details →
                      </span>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Pattern Detail Modal */}
        {selectedPattern && (
          <Modal
            isOpen={!!selectedPattern}
            onClose={() => setSelectedPattern(null)}
            title={selectedPattern.name}
            size="lg"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant={selectedPattern.status === 'available' ? 'success' : selectedPattern.status === 'in-progress' ? 'warning' : 'info'}
                  >
                    {getStatusLabel(selectedPattern.status)}
                  </Badge>
                  <span className="text-sm px-2 py-1 rounded-md"
                        style={{ 
                          backgroundColor: 'var(--page-surface-sunken)',
                          color: 'var(--page-text-secondary)'
                        }}>
                    {selectedPattern.category}
                  </span>
                </div>
                <p style={{ color: 'var(--page-text-secondary)' }}>
                  {selectedPattern.description}
                </p>
              </div>

              {selectedPattern.guidelines && (
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                    Guidelines
                  </h4>
                  <ul className="space-y-2">
                    {selectedPattern.guidelines.map((guideline, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'var(--color-success)' }}>✓</span>
                        <span style={{ color: 'var(--page-text-secondary)' }}>{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedPattern.codeExample && (
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                    Code Example
                  </h4>
                  <pre className="p-4 rounded-lg text-sm overflow-x-auto"
                       style={{ 
                         backgroundColor: 'var(--page-surface-sunken)',
                         color: 'var(--page-text-primary)'
                       }}>
                    <code>{selectedPattern.codeExample}</code>
                  </pre>
                </div>
              )}

              {selectedPattern.status !== 'available' && (
                <div className="p-4 rounded-lg"
                     style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                    {selectedPattern.status === 'in-progress' 
                      ? 'This pattern is currently being developed. Check back soon for updates.'
                      : 'This pattern is planned for future development. Let us know if you need it prioritized.'
                    }
                  </p>
                </div>
              )}
            </div>
          </Modal>
        )}

      </div>
    </PageTemplate>
  );
};

export default PatternsPage;
