import React from 'react';
import { Sidebar } from '../layout';

interface ComponentLayoutProps {
  children: React.ReactNode;
}

const COMPONENT_NAVIGATION = [
  {
    label: 'M1st Design System',
    href: '/',
  },
  {
    label: 'Components',
    href: '/components',
    children: [
      {
        label: 'Button',
        href: '/component/button',
      },
      {
        label: 'Card',
        href: '/component/card',
      },
      {
        label: 'Input',
        href: '/component/input',
      },
      {
        label: 'Modal',
        href: '/component/modal',
      },
    ]
  },
  {
    label: 'Patterns',
    href: '/patterns',
  },
  {
    label: 'Foundation',
    href: '/foundation',
    children: [
      {
        label: 'Colors',
        href: '/foundation/colors',
      },
      {
        label: 'Typography',
        href: '/foundation/typography',
      },
      {
        label: 'Spacing',
        href: '/foundation/spacing',
      },
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
  }
];

export const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <Sidebar items={COMPONENT_NAVIGATION} />
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};
