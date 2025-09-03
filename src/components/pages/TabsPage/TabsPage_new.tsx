import React, { useState } from 'react';
import { PageTemplate } from '../../layout/PageTemplate';
import { Card, CardBody } from '../../ui/Card';
import { useDocumentTitle } from '../../../utils';

// Import the main tabs component (simplified)
import { Tabs } from '../../ui/Tabs';

export const TabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeUsageTab, setActiveUsageTab] = useState('components');

  // Set the document title
  useDocumentTitle('Tabs');

  const tabItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'examples', label: 'Examples' }
  ];

  const usageTabItems = [
    { id: 'components', label: 'Components' },
    { id: 'patterns', label: 'Patterns' },
    { id: 'best-practices', label: 'Best Practices' }
  ];

  const codeExamples = [
    {
      title: 'Basic React Component Usage',
      code: `import { Tabs } from '@m1st/design-system';

const items = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'guidelines', label: 'Guidelines' }
];

<Tabs
  items={items}
  activeItem={activeTab}
  onItemClick={(item) => setActiveTab(item.id)}
/>`
    },
    {
      title: 'Basic HTML Usage',
      code: `<div class="tabs">
  <ul class="tabs__list">
    <li class="tabs__item">
      <button class="tabs__button tabs__button--active">Overview</button>
    </li>
    <li class="tabs__item">
      <button class="tabs__button">Features</button>
    </li>
    <li class="tabs__item">
      <button class="tabs__button">Guidelines</button>
    </li>
  </ul>
</div>`
    }
  ];

  return (
    <PageTemplate
      title="Tabs"
      description="Simple, accessible tab navigation for organizing content into logical sections. Features clean underline styling and consistent interaction patterns."
      showSidebar={false}
      sidebarType="none"
    >
      <div className="space-y-12">

        {/* Basic Example */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Basic Usage</h2>
            <p className="text-neutral-700 mb-6">
              Clean, accessible tabs with underline indicator for active state.
            </p>
          </div>

          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Interactive Example</h3>
              <Tabs
                items={tabItems}
                activeItem={activeTab}
                onItemClick={(item) => setActiveTab(item.id)}
              />
              <div className="mt-4 p-4 bg-neutral-50 rounded">
                <p>Active tab: <strong>{activeTab}</strong></p>
                <p className="text-sm text-neutral-600 mt-1">
                  Click any tab above to see the active state change.
                </p>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Usage Examples */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Usage Examples</h2>
            <p className="text-neutral-700 mb-6">
              See how tabs are used across different contexts in the design system.
            </p>
          </div>

          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Content Organization</h3>
              <Tabs
                items={usageTabItems}
                activeItem={activeUsageTab}
                onItemClick={(item) => setActiveUsageTab(item.id)}
              />
              <div className="mt-6 p-6 bg-neutral-50 rounded">
                {activeUsageTab === 'components' && (
                  <div>
                    <h4 className="font-semibold mb-2">Component Library</h4>
                    <p className="text-neutral-700">
                      Tabs are used to organize component documentation, allowing users to 
                      switch between examples, API documentation, and usage guidelines.
                    </p>
                  </div>
                )}
                {activeUsageTab === 'patterns' && (
                  <div>
                    <h4 className="font-semibold mb-2">Design Patterns</h4>
                    <p className="text-neutral-700">
                      Common patterns include filtering content by category, organizing 
                      form sections, and creating dashboard views.
                    </p>
                  </div>
                )}
                {activeUsageTab === 'best-practices' && (
                  <div>
                    <h4 className="font-semibold mb-2">Best Practices</h4>
                    <p className="text-neutral-700">
                      Keep tab labels concise, use 2-7 tabs maximum, and ensure content 
                      within tabs is related and of similar scope.
                    </p>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Code Examples */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Code Examples</h2>
            <p className="text-neutral-700 mb-6">
              Implementation examples for both React components and HTML.
            </p>
          </div>

          <div className="grid gap-6">
            {codeExamples.map((example, index) => (
              <Card key={index}>
                <CardBody>
                  <h3 className="text-lg font-semibold mb-4">{example.title}</h3>
                  <pre className="bg-neutral-900 text-neutral-100 p-4 rounded overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Props Documentation */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
            <p className="text-neutral-700 mb-6">
              Available props for the Tabs component.
            </p>
          </div>

          <Card>
            <CardBody>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-semibold">Prop</th>
                      <th className="py-2 pr-4 font-semibold">Type</th>
                      <th className="py-2 pr-4 font-semibold">Default</th>
                      <th className="py-2 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-mono">items</td>
                      <td className="py-2 pr-4">TabItem[]</td>
                      <td className="py-2 pr-4">—</td>
                      <td className="py-2">Array of tab items to display</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-mono">activeItem</td>
                      <td className="py-2 pr-4">string</td>
                      <td className="py-2 pr-4">—</td>
                      <td className="py-2">ID of the currently active tab</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-mono">onItemClick</td>
                      <td className="py-2 pr-4">function</td>
                      <td className="py-2 pr-4">—</td>
                      <td className="py-2">Callback fired when a tab is clicked</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 pr-4 font-mono">className</td>
                      <td className="py-2 pr-4">string</td>
                      <td className="py-2 pr-4">""</td>
                      <td className="py-2">Additional CSS classes to apply</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono">disabled</td>
                      <td className="py-2 pr-4">boolean</td>
                      <td className="py-2 pr-4">false</td>
                      <td className="py-2">Whether all tabs are disabled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </section>

      </div>
    </PageTemplate>
  );
};

export default TabsPage;
export {};
