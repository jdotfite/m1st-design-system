import React, { useState } from 'react';
import { ComponentPageTemplate } from '../../layout';
import { Button, Card, CardBody } from '../../ui';
import { useDocumentTitle } from '../../../utils';

export const ButtonComponentPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Set the document title
  useDocumentTitle('Button');

  const buttonVariants = [
    {
      variant: 'primary' as const,
      name: 'Primary',
      description: 'Blue background with white text - for primary actions and call-to-action buttons'
    },
    {
      variant: 'secondary' as const,
      name: 'Secondary', 
      description: 'Transparent background with border - for secondary actions that need less emphasis'
    },
    {
      variant: 'ghost' as const,
      name: 'Ghost',
      description: 'Transparent background with no border - for tertiary actions and text-like buttons'
    },
    {
      variant: 'success' as const,
      name: 'Success',
      description: 'Green background for positive actions like save, confirm, or complete'
    },
    {
      variant: 'warning' as const,
      name: 'Warning',
      description: 'Amber background for warning actions that need attention'
    },
    {
      variant: 'danger' as const,
      name: 'Danger',
      description: 'Red background for destructive actions like delete or cancel'
    }
  ];

  const buttonSizes = [
    { size: 'sm' as const, name: 'Small' },
    { size: 'md' as const, name: 'Medium' },
    { size: 'lg' as const, name: 'Large' }
  ];
  return (
    <ComponentPageTemplate 
      componentName="Button"
      description="Allows users to initiate actions in the user interface. A comprehensive button system with 6 semantic variants that work seamlessly across light and dark themes using our extended neutral color palette."
    >
      {/* Content */}
        <div className="max-w-5xl space-y-8">
          {/* Button - Single Example */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Button
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              A standard button indicates a possible user action.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <Button variant="primary">Click Here</Button>
              </CardBody>
            </Card>
          </section>

          {/* Emphasis - Primary and Secondary */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Emphasis
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              A button can be formatted to show different levels of emphasis.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Link - Primary and Ghost */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Link
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              A button can be formatted to appear like a link with minimal styling.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="ghost">Link Action</Button>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Background Showcase */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Background Variations
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              All button variants work consistently across different backgrounds and themes using CSS custom properties.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Primary Background */}
                  <div className="p-6 rounded-lg border" style={{ 
                    backgroundColor: 'var(--page-background)',
                    borderColor: 'var(--page-border-muted)'
                  }}>
                    <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--page-text-primary)' }}>Primary Background</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="primary" size="sm">Primary</Button>
                      <Button variant="secondary" size="sm">Secondary</Button>
                      <Button variant="ghost" size="sm">Ghost</Button>
                    </div>
                  </div>

                  {/* Secondary Background */}
                  <div className="p-6 rounded-lg border" style={{ 
                    backgroundColor: 'var(--page-surface)',
                    borderColor: 'var(--page-border-muted)'
                  }}>
                    <h3 className="text-lg font-medium mb-4" style={{ color: 'var(--page-text-primary)' }}>Secondary Background</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="primary" size="sm">Primary</Button>
                      <Button variant="secondary" size="sm">Secondary</Button>
                      <Button variant="ghost" size="sm">Ghost</Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Button Variants */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Variants
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              Six semantic button variants are available to accommodate different use cases and visual hierarchies.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="space-y-6">
                  {buttonVariants.map((variant) => (
                    <div key={variant.variant} style={{ 
                      borderBottom: '1px solid var(--page-border-muted)', 
                      paddingBottom: '24px' 
                    }} className="last:border-b-0">
                      <h3 className="text-lg font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>{variant.name}</h3>
                      <p className="text-sm mb-4" style={{ color: 'var(--page-text-secondary)' }}>{variant.description}</p>
                      <div className="flex flex-wrap gap-3 items-center">
                        <Button variant={variant.variant} size="sm">
                          {variant.name} Small
                        </Button>
                        <Button variant={variant.variant} size="md">
                          {variant.name} Medium
                        </Button>
                        <Button variant={variant.variant} size="lg">
                          {variant.name} Large
                        </Button>
                        <Button variant={variant.variant} size="md" disabled>
                          Disabled
                        </Button>
                        <Button variant={variant.variant} size="md" isLoading>
                          Loading
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Button Sizes */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Sizes
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              Three sizes are available to fit different layouts and use cases.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="flex flex-wrap gap-4 items-end">
                  {buttonSizes.map((size) => (
                    <div key={size.size} className="text-center">
                      <Button variant="primary" size={size.size}>
                        {size.name}
                      </Button>
                      <p className="text-xs mt-2 font-mono" style={{ color: 'var(--page-text-muted)' }}>{size.size}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Interactive Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Interactive Examples
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              Buttons support loading states, icons, and full-width layouts.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="primary" 
                      onClick={() => {
                        setIsLoading(true);
                        setTimeout(() => setIsLoading(false), 2000);
                      }}
                      isLoading={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </Button>
                    
                    <Button variant="secondary" leftIcon={<span>👤</span>}>
                      Profile
                    </Button>
                    
                    <Button variant="ghost" rightIcon={<span>→</span>}>
                      Continue
                    </Button>
                    
                    <Button variant="success" leftIcon={<span>✓</span>}>
                      Save
                    </Button>
                    
                    <Button variant="warning" leftIcon={<span>⚠️</span>}>
                      Warning
                    </Button>
                    
                    <Button variant="danger" leftIcon={<span>🗑️</span>}>
                      Delete
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary" fullWidth>
                      Full Width Primary
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Usage Guidelines */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Usage Guidelines
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              Best practices for using buttons effectively in your interface.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>When to Use</h3>
                    <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--page-text-secondary)' }}>
                      <li>To trigger an action or event, such as submitting a form or opening a dialog</li>
                      <li>To navigate to another page or section</li>
                      <li>To perform operations like save, delete, or cancel</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>Variant Selection</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Button variant="primary" size="sm">Primary</Button>
                        <div>
                          <p className="text-sm font-medium" style={{ color: 'var(--page-text-primary)' }}>Primary Actions</p>
                          <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Use for the most important action on a page</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Button variant="secondary" size="sm">Secondary</Button>
                        <div>
                          <p className="text-sm font-medium" style={{ color: 'var(--page-text-primary)' }}>Secondary Actions</p>
                          <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Use for secondary actions or when primary would be too prominent</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Button variant="danger" size="sm">Danger</Button>
                        <div>
                          <p className="text-sm font-medium" style={{ color: 'var(--page-text-primary)' }}>Destructive Actions</p>
                          <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Use for actions that are difficult to undo, like deleting data</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Code Examples */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Code Examples
            </h2>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              Implementation examples for common button use cases.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>Basic Usage</h4>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                      <pre className="text-sm overflow-x-auto" style={{ color: 'var(--page-text-primary)' }}>
{`<Button variant="primary" size="md">
  Save Changes
</Button>

<Button variant="secondary" size="md">
  Cancel
</Button>

<Button variant="danger" size="md">
  Delete
</Button>`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>With Icons</h4>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                      <pre className="text-sm overflow-x-auto" style={{ color: 'var(--page-text-primary)' }}>
{`<Button 
  variant="primary" 
  leftIcon={<SaveIcon />}
>
  Save
</Button>

<Button 
  variant="secondary" 
  rightIcon={<ArrowRightIcon />}
>
  Continue
</Button>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>Loading State</h4>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                      <pre className="text-sm overflow-x-auto" style={{ color: 'var(--page-text-primary)' }}>
{`<Button 
  variant="primary"
  isLoading={isSubmitting}
  onClick={handleSubmit}
>
  {isSubmitting ? 'Saving...' : 'Save'}
</Button>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Tailwind Classes Reference */}
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Tailwind Classes Reference
            </h2>
            <p className="text-neutral-600 mb-6">
              Reference for the Tailwind CSS classes used in button variants.
            </p>
            
            <Card variant="outlined" padding="lg">
              <CardBody>
                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3">Primary Button Classes:</h4>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <code className="block text-neutral-800 break-all">
                        bg-button-primary-bg text-button-primary-text border border-button-primary-bg hover:bg-button-primary-hover hover:border-button-primary-hover focus:ring-almost-black/20 dark:focus:ring-almost-white/20 shadow-sm hover:shadow-md font-semibold
                      </code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3">Secondary Button Classes:</h4>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <code className="block text-neutral-800 break-all">
                        bg-button-secondary-bg text-button-secondary-text border border-button-secondary-border hover:bg-button-secondary-hover focus:ring-almost-black/20 dark:focus:ring-almost-white/20 font-semibold
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3">Light Button Classes:</h4>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <code className="block text-neutral-800 break-all">
                        bg-background-light text-almost-black border-2 border-neutral-700 hover:bg-light-200 dark:bg-light-800 dark:text-almost-white dark:border-neutral-700 dark:hover:bg-light-700 focus:ring-light-400/50 shadow-sm hover:shadow-md
                      </code>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>
        </div>
    </ComponentPageTemplate>
  );
};

export default ButtonComponentPage;
