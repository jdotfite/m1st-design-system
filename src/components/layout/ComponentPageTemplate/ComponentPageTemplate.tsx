import React from 'react';
import { PageTemplate } from '../PageTemplate';
import { BreadcrumbItem } from '../../ui';

interface ComponentPageTemplateProps {
  children: React.ReactNode;
  componentName: string;
  description?: string;
  className?: string;
}

export const ComponentPageTemplate: React.FC<ComponentPageTemplateProps> = ({
  children,
  componentName,
  description,
  className = ''
}) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'M1st Design System', href: '/' },
    { label: 'Components', href: '/components' },
    { label: componentName, isActive: true }
  ];

  return (
    <PageTemplate
      showSidebar={true}
      sidebarType="components"
      showFooter={true}
      breadcrumbs={breadcrumbs}
      title={`${componentName} Component`}
      description={description}
      className={className}
    >
      {children}
    </PageTemplate>
  );
};
