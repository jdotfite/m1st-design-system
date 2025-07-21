import React, { useState } from 'react';
import { ComponentPageTemplate } from '../../layout';
import { Button, Card, CardBody, Modal, Input } from '../../ui';

export const ModalComponentPage: React.FC = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [loadingModalOpen, setLoadingModalOpen] = useState(false);
  const [centeredModalOpen, setCenteredModalOpen] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [activeFramework, setActiveFramework] = useState<'react' | 'angular'>('react');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const frameworkTabs = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'angular', label: 'Angular', icon: '🅰️' }
  ];

  const modalSizes = [
    { size: 'sm' as const, name: 'Small', description: '384px - For simple confirmations and alerts' },
    { size: 'md' as const, name: 'Medium', description: '512px - Default size for most modals' },
    { size: 'lg' as const, name: 'Large', description: '672px - For forms and detailed content' },
    { size: 'xl' as const, name: 'Extra Large', description: '896px - For complex forms and data tables' },
    { size: 'full' as const, name: 'Full Width', description: 'Full viewport width with margins' }
  ];

  const modalVariants = [
    {
      variant: 'default' as const,
      name: 'Default',
      description: 'Standard modal with flexible positioning'
    },
    {
      variant: 'centered' as const,
      name: 'Centered',
      description: 'Always centered in viewport'
    },
    {
      variant: 'confirmation' as const,
      name: 'Confirmation',
      description: 'Optimized for confirmation dialogs'
    }
  ];

  const useCases = [
    {
      title: 'Basic Modal',
      description: 'Simple modal for displaying information or basic interactions',
      reactCode: `<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Basic Modal"
  size="md"
>
  <p>This is a basic modal with some content.</p>
</Modal>`,
      angularCode: `<m1st-modal
  [isOpen]="isOpen"
  (onClose)="isOpen = false"
  title="Basic Modal"
  size="md">
  <p>This is a basic modal with some content.</p>
</m1st-modal>`,
      component: (
        <div>
          <Button variant="primary" onClick={() => setBasicModalOpen(true)}>
            Open Basic Modal
          </Button>
          <Modal
            isOpen={basicModalOpen}
            onClose={() => setBasicModalOpen(false)}
            title="Basic Modal"
            size="md"
          >
            <div className="space-y-4">
              <p style={{ color: 'var(--page-text-primary)' }}>
                This is a basic modal with some content. It demonstrates the standard modal layout with a header, body, and close functionality.
              </p>
              <p style={{ color: 'var(--page-text-secondary)' }}>
                You can close this modal by clicking the X button, pressing Escape, or clicking outside the modal.
              </p>
            </div>
          </Modal>
        </div>
      )
    },
    {
      title: 'Confirmation Modal',
      description: 'Modal for confirmations with custom footer buttons',
      reactCode: `<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="sm"
  variant="confirmation"
  footer={
    <div className="flex gap-3">
      <Button variant="danger" onClick={handleConfirm}>
        Delete
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  }
>
  <p>Are you sure you want to delete this item?</p>
</Modal>`,
      angularCode: `<m1st-modal
  [isOpen]="isOpen"
  (onClose)="isOpen = false"
  title="Confirm Action"
  size="sm"
  variant="confirmation">
  <p>Are you sure you want to delete this item?</p>
  <div slot="footer" class="flex gap-3">
    <m1st-button variant="danger" (click)="handleConfirm()">
      Delete
    </m1st-button>
    <m1st-button variant="secondary" (click)="handleCancel()">
      Cancel
    </m1st-button>
  </div>
</m1st-modal>`,
      component: (
        <div>
          <Button variant="danger" onClick={() => setConfirmModalOpen(true)}>
            Delete Item
          </Button>
          <Modal
            isOpen={confirmModalOpen}
            onClose={() => setConfirmModalOpen(false)}
            title="Confirm Deletion"
            size="sm"
            variant="confirmation"
            footer={
              <div className="flex gap-3">
                <Button 
                  variant="danger" 
                  onClick={() => {
                    setConfirmModalOpen(false);
                    // Handle deletion logic here
                  }}
                >
                  Delete
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => setConfirmModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            }
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <p style={{ color: 'var(--page-text-primary)' }}>
                  Are you sure you want to delete this item? This action cannot be undone.
                </p>
              </div>
            </div>
          </Modal>
        </div>
      )
    },
    {
      title: 'Form Modal',
      description: 'Modal containing a form with validation and submission',
      reactCode: `<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="User Information"
  size="lg"
  footer={
    <div className="flex gap-3">
      <Button variant="primary" onClick={handleSubmit}>
        Save
      </Button>
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  }
>
  <form onSubmit={handleSubmit}>
    <Input
      label="Full Name"
      value={name}
      onChange={setName}
      placeholder="Enter your name"
    />
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={setEmail}
      placeholder="Enter your email"
    />
  </form>
</Modal>`,
      angularCode: `<m1st-modal
  [isOpen]="isOpen"
  (onClose)="isOpen = false"
  title="User Information"
  size="lg">
  <form (ngSubmit)="handleSubmit()">
    <m1st-input
      label="Full Name"
      [(ngModel)]="name"
      placeholder="Enter your name">
    </m1st-input>
    <m1st-input
      label="Email"
      type="email"
      [(ngModel)]="email"
      placeholder="Enter your email">
    </m1st-input>
  </form>
  <div slot="footer" class="flex gap-3">
    <m1st-button variant="primary" (click)="handleSubmit()">
      Save
    </m1st-button>
    <m1st-button variant="secondary" (click)="handleCancel()">
      Cancel
    </m1st-button>
  </div>
</m1st-modal>`,
      component: (
        <div>
          <Button variant="primary" onClick={() => setFormModalOpen(true)}>
            Open Form Modal
          </Button>
          <Modal
            isOpen={formModalOpen}
            onClose={() => setFormModalOpen(false)}
            title="User Information"
            size="lg"
            footer={
              <div className="flex gap-3">
                <Button 
                  variant="primary"
                  onClick={() => {
                    console.log('Form submitted:', formData);
                    setFormModalOpen(false);
                  }}
                >
                  Save
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setFormModalOpen(false);
                    setFormData({ name: '', email: '' });
                  }}
                >
                  Cancel
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>
                  Full Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </Modal>
        </div>
      )
    },
    {
      title: 'Loading Modal',
      description: 'Modal with loading state for asynchronous operations',
      reactCode: `<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Processing"
  size="sm"
  loading={isLoading}
  showCloseButton={!isLoading}
  closeOnOverlayClick={!isLoading}
>
  <p>Please wait while we process your request...</p>
</Modal>`,
      angularCode: `<m1st-modal
  [isOpen]="isOpen"
  (onClose)="isOpen = false"
  title="Processing"
  size="sm"
  [loading]="isLoading"
  [showCloseButton]="!isLoading"
  [closeOnOverlayClick]="!isLoading">
  <p>Please wait while we process your request...</p>
</m1st-modal>`,
      component: (
        <div>
          <Button 
            variant="primary" 
            onClick={() => {
              setLoadingModalOpen(true);
              setIsLoading(true);
              // Simulate async operation
              setTimeout(() => {
                setIsLoading(false);
              }, 3000);
            }}
          >
            Start Process
          </Button>
          <Modal
            isOpen={loadingModalOpen}
            onClose={() => setLoadingModalOpen(false)}
            title="Processing Request"
            size="sm"
            loading={isLoading}
            showCloseButton={!isLoading}
            closeOnOverlayClick={!isLoading}
          >
            <p style={{ color: 'var(--page-text-primary)' }}>
              Please wait while we process your request. This may take a few moments.
            </p>
          </Modal>
        </div>
      )
    }
  ];

  const features = [
    {
      title: 'Responsive Design',
      description: 'Automatically adapts to different screen sizes with mobile-optimized layouts'
    },
    {
      title: 'Accessibility Built-in',
      description: 'WCAG compliant with proper ARIA labels, focus management, and keyboard navigation'
    },
    {
      title: 'Theme Integration',
      description: 'Seamlessly integrates with light and dark themes using design system tokens'
    },
    {
      title: 'Flexible Positioning',
      description: 'Multiple positioning options including centered, top, and custom placements'
    },
    {
      title: 'Loading States',
      description: 'Built-in loading spinner and state management for async operations'
    },
    {
      title: 'Custom Footers',
      description: 'Flexible footer content with support for buttons, forms, and custom layouts'
    },
    {
      title: 'Backdrop Control',
      description: 'Configurable backdrop with blur effects and click-to-close behavior'
    },
    {
      title: 'Animation Support',
      description: 'Smooth entrance and exit animations with reduced motion support'
    }
  ];

  return (
    <ComponentPageTemplate 
      componentName="Modal"
      description="A versatile modal dialog component for displaying content in a focused overlay. Supports multiple sizes, variants, and interaction patterns with accessibility and responsive design built-in."
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="outlined" padding="lg">
              <CardBody>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                  When to Use
                </h3>
                <ul className="space-y-2" style={{ color: 'var(--page-text-secondary)' }}>
                  <li>• Displaying important information that requires user attention</li>
                  <li>• Collecting user input without navigating to a new page</li>
                  <li>• Confirming destructive actions before execution</li>
                  <li>• Showing detailed information in a focused context</li>
                  <li>• Creating step-by-step workflows and wizards</li>
                </ul>
              </CardBody>
            </Card>
            <Card variant="outlined" padding="lg">
              <CardBody>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="flex-shrink-0 w-2 h-2 bg-current rounded-full mt-2" style={{ color: 'var(--color-brand-primary)' }} />
                      <div>
                        <div className="font-medium" style={{ color: 'var(--page-text-primary)' }}>
                          {feature.title}
                        </div>
                        <div className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        </section>

        {/* Modal Sizes */}
        <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Modal Sizes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalSizes.map((sizeOption) => (
              <Card key={sizeOption.size} variant="outlined" padding="md">
                <CardBody>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold" style={{ color: 'var(--page-text-primary)' }}>
                        {sizeOption.name}
                      </h3>
                      <code className="px-2 py-1 text-xs rounded" style={{ 
                        backgroundColor: 'var(--page-surface)', 
                        color: 'var(--page-text-secondary)' 
                      }}>
                        {sizeOption.size}
                      </code>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                      {sizeOption.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      onClick={() => {
                        setCustomModalOpen(true);
                      }}
                    >
                      Preview {sizeOption.name}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        </section>

        {/* Modal Variants */}
        <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Modal Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modalVariants.map((variantOption) => (
              <Card key={variantOption.variant} variant="outlined" padding="md">
                <CardBody>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold" style={{ color: 'var(--page-text-primary)' }}>
                        {variantOption.name}
                      </h3>
                      <code className="px-2 py-1 text-xs rounded" style={{ 
                        backgroundColor: 'var(--page-surface)', 
                        color: 'var(--page-text-secondary)' 
                      }}>
                        {variantOption.variant}
                      </code>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                      {variantOption.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      onClick={() => setCenteredModalOpen(true)}
                    >
                      Try {variantOption.name}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        </section>

        {/* Use Cases */}
        <section className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                Common Use Cases
              </h2>
              <p style={{ color: 'var(--page-text-secondary)' }}>
                Choose your framework to see relevant implementation patterns.
              </p>
            </div>
            
            {/* Framework Selection */}
            <div className="flex rounded-lg p-1" style={{ 
              backgroundColor: 'var(--page-surface)',
              border: '1px solid var(--page-border)'
            }}>
              {frameworkTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFramework(tab.id as 'react' | 'angular')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 min-w-[100px]`}
                  style={{
                    backgroundColor: activeFramework === tab.id ? 'var(--page-accent-primary)' : 'transparent',
                    color: activeFramework === tab.id ? 'var(--page-text-inverse)' : 'var(--page-text-secondary)'
                  }}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <Card key={index} variant="outlined" padding="lg">
                <CardBody>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {useCase.title}
                      </h3>
                      <p style={{ color: 'var(--page-text-secondary)' }}>
                        {useCase.description}
                      </p>
                    </div>
                    
                    <div className="border rounded-lg p-6" style={{ 
                      backgroundColor: 'var(--page-surface)', 
                      borderColor: 'var(--page-border)' 
                    }}>
                      {useCase.component}
                    </div>

                    <div className="space-y-4">                      
                      <div className="relative">
                        <pre className="text-sm p-4 rounded-lg overflow-x-auto" style={{ 
                          backgroundColor: 'var(--page-surface)', 
                          color: 'var(--page-text-primary)' 
                        }}>
                          <code>
                            {activeFramework === 'react' ? useCase.reactCode : useCase.angularCode}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        </section>

        {/* Advanced Features */}
        <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="outlined" padding="md">
                <CardBody>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-3 h-3 bg-current rounded-full mt-1" style={{ color: 'var(--color-brand-primary)' }} />
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--page-text-primary)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        </section>

        {/* Additional Modals for Testing */}
      <Modal
        isOpen={centeredModalOpen}
        onClose={() => setCenteredModalOpen(false)}
        title="Centered Modal"
        size="md"
        variant="centered"
      >
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--page-text-primary)' }}>
            Success!
          </h3>
          <p style={{ color: 'var(--page-text-secondary)' }}>
            Your action has been completed successfully. This centered modal is perfect for status updates and confirmations.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
        title="Custom Size Preview"
        size="lg"
        footer={
          <div className="flex justify-between w-full">
            <Button variant="secondary" onClick={() => setCustomModalOpen(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setCustomModalOpen(false)}>
              Got it
            </Button>
          </div>
        }
      >
        <div className="space-y-4">
          <p style={{ color: 'var(--page-text-primary)' }}>
            This modal demonstrates the flexible sizing options available. You can choose from small, medium, large, extra large, or full width based on your content needs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                Responsive Design
              </h4>
              <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                Modals automatically adapt to smaller screens with optimized layouts and touch-friendly interactions.
              </p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface)' }}>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                Theme Support
              </h4>
              <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                Seamless integration with light and dark themes using the M1st design system tokens.
              </p>
            </div>
          </div>
        </div>
      </Modal>
      </div>
    </ComponentPageTemplate>
  );
};

export default ModalComponentPage;
