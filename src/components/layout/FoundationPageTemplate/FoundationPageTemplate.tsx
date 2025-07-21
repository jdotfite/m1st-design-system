import React from 'react';
import { PageTemplate } from '../PageTemplate';
import { BreadcrumbItem } from '../../ui';

interface FoundationPageTemplateProps {
  children: React.ReactNode;
  topicName?: string;
  description?: string;
  className?: string;
}

export const FoundationPageTemplate: React.FC<FoundationPageTemplateProps> = ({
  children,
  topicName,
  description,
  className = ''
}) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'M1st Design System', href: '/' },
    { label: 'Foundation', href: '/foundation' }
  ];

  if (topicName) {
    breadcrumbs.push({ label: topicName, isActive: true });
  }

  const title = topicName ? `${topicName} - Foundation` : 'Foundation';

  return (
    <PageTemplate
      showSidebar={false}
      sidebarType="none"
      showFooter={true}
      breadcrumbs={breadcrumbs}
      title={title}
      description={description || 'Our enterprise-grade 4-layer design token architecture follows industry standards used by Adobe, Microsoft, Google, and Shopify for maximum scalability and maintainability.'}
      className={className}
    >
      {children}
    </PageTemplate>
  );
};
