import React, { useState } from 'react';
import { ComponentPageTemplate } from '../../layout';
import { Card, CardBody } from '../../ui';
import { useDocumentTitle } from '../../../utils';
// Import the main tabs component (simplified)
import { Tabs } from '../../ui/Tabs';

export const TabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Set the document title
  useDocumentTitle('Tabs');

  // Sample data for tabs
  const tabItems = [
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
      description="A flexible tab navigation component with multiple variants and size options. Perfect for navigation menus, content switching, and interface organization."
    >
      {/* Overview Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
          <p className="text-neutral-700 mb-6">
            The Tabs component provides clean and accessible tab navigation with multiple visual styles. 
            Choose from different variants and sizes to match your design needs.
          </p>
        </div>

        {/* Basic Example */}
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Basic Tabs</h3>
            <Tabs
              items={tabItems}
              activeItem={activeTab}
              onItemClick={(item) => setActiveTab(item.id)}
              variant="underline"
            />
            <div className="mt-4 p-4 bg-neutral-50 rounded">
              <p>Active tab: <strong>{activeTab}</strong></p>
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
                <Tabs
                  items={tabItems.slice(0, 3)}
                  activeItem={tabItems[0].id}
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
                <Tabs
                  items={tabItems.slice(0, 3)}
                  activeItem={tabItems[0].id}
                  onItemClick={() => {}}
                  variant="default"
                  size={size}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Position Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Alignment</h2>
          <p className="text-neutral-700 mb-6">
            Tabs can be aligned to the left, center, or right to match your layout needs.
          </p>
        </div>

        <div className="grid gap-6">
          {['left', 'center', 'right'].map((position) => (
            <Card key={position}>
              <CardBody>
                <h3 className="text-lg font-semibold mb-4">{position.charAt(0).toUpperCase() + position.slice(1)} Aligned</h3>
                <Tabs
                  items={tabItems.slice(0, 3)}
                  activeItem={tabItems[0].id}
                  onItemClick={() => {}}
                  variant="underline"
                  position={position as 'left' | 'center' | 'right'}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Props Documentation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        </div>

        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Tabs Props</h3>
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
                    <td className="px-4 py-2 border-b font-mono">position</td>
                    <td className="px-4 py-2 border-b">'left' | 'center' | 'right'</td>
                    <td className="px-4 py-2 border-b">'left'</td>
                    <td className="px-4 py-2 border-b">Horizontal alignment</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">disabled</td>
                    <td className="px-4 py-2 border-b">boolean</td>
                    <td className="px-4 py-2 border-b">false</td>
                    <td className="px-4 py-2 border-b">Whether all tabs are disabled</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b font-mono">className</td>
                    <td className="px-4 py-2 border-b">string</td>
                    <td className="px-4 py-2 border-b">-</td>
                    <td className="px-4 py-2 border-b">Additional CSS classes</td>
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
