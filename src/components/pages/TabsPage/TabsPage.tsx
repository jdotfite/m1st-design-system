import React, { useState } from 'react';
import { ComponentPageTemplate } from '../../layout';
import { Card, CardBody } from '../../ui';
import { useDocumentTitle } from '../../../utils';
// Import both tab implementations
import { Tabs as TabsAdvanced } from '../../ui/Tabs/Tabs';
import { Tabs as TabsSimple } from '../../ui/Tabs/TabsSimple';

export const TabsPage: React.FC = () => {
  const [activeAdvancedTab, setActiveAdvancedTab] = useState('tab1');
  const [activeSimpleTab, setActiveSimpleTab] = useState('home');

  // Set the document title
  useDocumentTitle('Tabs');

  // Sample data for advanced tabs
  const advancedTabItems = [
    {
      key: 'tab1',
      label: 'Overview',
      children: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Overview Content</h3>
          <p>This is the overview tab content. You can put any React components here.</p>
        </div>
      )
    },
    {
      key: 'tab2',
      label: 'Documentation',
      children: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Documentation</h3>
          <p>This tab contains comprehensive documentation and usage examples.</p>
        </div>
      )
    },
    {
      key: 'tab3',
      label: 'API Reference',
      children: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">API Reference</h3>
          <p>Complete API reference with all available props and methods.</p>
        </div>
      )
    }
  ];

  // Sample data for simple tabs
  const simpleTabItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const tabVariants = [
    { variant: 'default' as const, name: 'Default', description: 'Standard tab style with bottom border' },
    { variant: 'underline' as const, name: 'Underline', description: 'Clean underline style with animated indicator' },
    { variant: 'pills' as const, name: 'Pills', description: 'Rounded pill-style tabs' },
    { variant: 'card' as const, name: 'Card', description: 'Card-style tabs with borders' },
    { variant: 'fullWidth' as const, name: 'Full Width', description: 'Tabs that span the full width' }
  ];

  const tabSizes = [
    { size: 'small' as const, name: 'Small' },
    { size: 'medium' as const, name: 'Medium' },
    { size: 'large' as const, name: 'Large' }
  ];

  return (
    <ComponentPageTemplate 
      componentName="Tabs"
      description="Flexible tab navigation component with multiple variants and advanced features. Choose between simple navigation tabs or content-enabled tabs with panels."
    >
      {/* Overview Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
          <p className="text-neutral-700 mb-6">
            The Tabs component provides two implementations: a simple navigation-only version for routing, 
            and an advanced version with content panels, animations, and editable features.
          </p>
        </div>

        {/* Basic Example */}
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Basic Advanced Tabs</h3>
            <TabsAdvanced
              items={advancedTabItems}
              activeKey={activeAdvancedTab}
              onChange={setActiveAdvancedTab}
              variant="default"
            />
          </CardBody>
        </Card>

        {/* Simple Navigation Tabs */}
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Simple Navigation Tabs</h3>
            <TabsSimple
              items={simpleTabItems}
              activeItem={activeSimpleTab}
              onItemClick={(item) => setActiveSimpleTab(item.id)}
              variant="underline"
            />
            <div className="mt-4 p-4 bg-neutral-50 rounded">
              <p>Active tab: <strong>{activeSimpleTab}</strong></p>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Variants Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Variants</h2>
          <p className="text-neutral-700 mb-6">
            Choose from different visual styles to match your design needs.
          </p>
        </div>

        <div className="grid gap-6">
          {tabVariants.map(({ variant, name, description }) => (
            <Card key={variant}>
              <CardBody>
                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                <p className="text-neutral-600 mb-4">{description}</p>
                <TabsSimple
                  items={simpleTabItems.slice(0, 3)}
                  activeItem={simpleTabItems[0].id}
                  onItemClick={() => {}}
                  variant={variant}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Sizes Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Sizes</h2>
          <p className="text-neutral-700 mb-6">
            Available in three sizes to fit different layout requirements.
          </p>
        </div>

        <div className="grid gap-6">
          {tabSizes.map(({ size, name }) => (
            <Card key={size}>
              <CardBody>
                <h3 className="text-lg font-semibold mb-4">{name} Size</h3>
                <TabsSimple
                  items={simpleTabItems.slice(0, 3)}
                  activeItem={simpleTabItems[0].id}
                  onItemClick={() => {}}
                  variant="default"
                  size={size}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Advanced Features</h2>
          <p className="text-neutral-700 mb-6">
            The advanced tabs component includes content panels, animations, and positioning options.
          </p>
        </div>

        {/* Animated Underline Tabs */}
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Animated Underline Tabs</h3>
            <TabsAdvanced
              items={advancedTabItems}
              activeKey={activeAdvancedTab}
              onChange={setActiveAdvancedTab}
              variant="underline"
              animated={{ inkBar: true, tabPane: true }}
            />
          </CardBody>
        </Card>

        {/* Centered Tabs */}
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Centered Tabs</h3>
            <TabsAdvanced
              items={advancedTabItems}
              activeKey={activeAdvancedTab}
              onChange={setActiveAdvancedTab}
              variant="pills"
              centered={true}
            />
          </CardBody>
        </Card>
      </section>

      {/* Props Documentation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        </div>

        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Advanced Tabs Props</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Prop</th>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Type</th>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Default</th>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">items</td>
                    <td className="px-4 py-2 border-b">TabItem[]</td>
                    <td className="px-4 py-2 border-b">[]</td>
                    <td className="px-4 py-2 border-b">Array of tab items with content</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">variant</td>
                    <td className="px-4 py-2 border-b">'default' | 'underline' | 'pills' | 'card' | 'fullWidth'</td>
                    <td className="px-4 py-2 border-b">'default'</td>
                    <td className="px-4 py-2 border-b">Visual style variant</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">size</td>
                    <td className="px-4 py-2 border-b">'small' | 'medium' | 'large'</td>
                    <td className="px-4 py-2 border-b">'medium'</td>
                    <td className="px-4 py-2 border-b">Size of the tabs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">animated</td>
                    <td className="px-4 py-2 border-b">boolean | object</td>
                    <td className="px-4 py-2 border-b">true</td>
                    <td className="px-4 py-2 border-b">Enable animations for ink bar and panels</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">centered</td>
                    <td className="px-4 py-2 border-b">boolean</td>
                    <td className="px-4 py-2 border-b">false</td>
                    <td className="px-4 py-2 border-b">Center align the tabs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Simple Tabs Props</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Prop</th>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Type</th>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Default</th>
                    <th className="px-4 py-2 border-b text-left text-sm font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">items</td>
                    <td className="px-4 py-2 border-b">TabItem[]</td>
                    <td className="px-4 py-2 border-b">[]</td>
                    <td className="px-4 py-2 border-b">Array of tab items for navigation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">activeItem</td>
                    <td className="px-4 py-2 border-b">string</td>
                    <td className="px-4 py-2 border-b">-</td>
                    <td className="px-4 py-2 border-b">ID of the currently active tab</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">onItemClick</td>
                    <td className="px-4 py-2 border-b">function</td>
                    <td className="px-4 py-2 border-b">-</td>
                    <td className="px-4 py-2 border-b">Callback when a tab is clicked</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">position</td>
                    <td className="px-4 py-2 border-b">'left' | 'center' | 'right'</td>
                    <td className="px-4 py-2 border-b">'left'</td>
                    <td className="px-4 py-2 border-b">Horizontal alignment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </section>
    </ComponentPageTemplate>
  );
};

export default TabsPage;
