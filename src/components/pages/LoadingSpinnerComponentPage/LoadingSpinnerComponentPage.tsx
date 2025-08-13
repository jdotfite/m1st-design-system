import React, { useState } from 'react';
import { ComponentPageTemplate } from '../../layout';
import { Card, CardBody, LoadingSpinner } from '../../ui';

export const LoadingSpinnerComponentPage: React.FC = () => {
  const [activeFramework, setActiveFramework] = useState<'react' | 'angular'>('react');

  const spinnerSizes = [
    { size: 'sm' as const, name: 'Small', description: '64px - For inline loading indicators' },
    { size: 'md' as const, name: 'Medium', description: '96px - Default size for most use cases' },
    { size: 'lg' as const, name: 'Large', description: '128px - For page-level loading states' },
    { size: 'xl' as const, name: 'Extra Large', description: '192px - For full-screen loading overlays' },
    { size: 'xxl' as const, name: 'Extra Extra Large', description: '256px - For hero loading states' }
  ];

  const spinnerVariants = [
    {
      variant: 'logo' as const,
      name: 'Logo',
      description: 'M1st branded loading animation with pulsing red squares and white M logo'
    },
    {
      variant: 'simple' as const,
      name: 'Simple (Orbital)',
      description: 'Modern dual-ring orbital animation with smooth counter-rotation'
    },
    {
      variant: 'original' as const,
      name: 'Original (Classic)',
      description: 'Classic single-ring spinner with traditional rotating border design'
    }
  ];

  const useCases = [
    {
      title: 'Page Loading',
      description: 'Full-page loading state when the entire application is initializing',
      reactCode: `<LoadingSpinner 
  size="md" 
  variant="logo" 
  text="Loading application..." 
/>`,
      angularCode: `<m1st-loading-spinner 
  size="md" 
  variant="logo" 
  text="Loading application...">
</m1st-loading-spinner>`,
      component: <LoadingSpinner size="md" variant="logo" text="Loading application..." />
    },
    {
      title: 'Form Submission',
      description: 'Button loading state during form processing',
      reactCode: `<LoadingSpinner 
  size="sm" 
  variant="simple" 
  text="Saving..." 
/>`,
      angularCode: `<m1st-loading-spinner 
  size="sm" 
  variant="simple" 
  text="Saving...">
</m1st-loading-spinner>`,
      component: <LoadingSpinner size="sm" variant="simple" text="Saving..." />
    },
    {
      title: 'Data Processing',
      description: 'Medium loading indicator for data operations',
      reactCode: `<LoadingSpinner 
  size="md" 
  variant="logo" 
  text="Processing transaction..." 
/>`,
      angularCode: `<m1st-loading-spinner 
  size="md" 
  variant="logo" 
  text="Processing transaction...">
</m1st-loading-spinner>`,
      component: <LoadingSpinner size="md" variant="logo" text="Processing transaction..." />
    },
    {
      title: 'Content Loading',
      description: 'Minimal loader for content sections',
      reactCode: `<LoadingSpinner 
  size="md" 
  variant="simple" 
/>`,
      angularCode: `<m1st-loading-spinner 
  size="md" 
  variant="simple">
</m1st-loading-spinner>`,
      component: <LoadingSpinner size="md" variant="simple" />
    },
    {
      title: 'Classic Loading',
      description: 'Traditional spinner design for familiar loading experience',
      reactCode: `<LoadingSpinner 
  size="md" 
  variant="original" 
  text="Loading content..." 
/>`,
      angularCode: `<m1st-loading-spinner 
  size="md" 
  variant="original" 
  text="Loading content...">
</m1st-loading-spinner>`,
      component: <LoadingSpinner size="md" variant="original" text="Loading content..." />
    },
    {
      title: 'Custom Colors',
      description: 'Spinner with custom color configuration for brand consistency',
      reactCode: `<LoadingSpinner 
  size="md" 
  variant="simple" 
  primaryColor="#0066cc" 
  secondaryColor="#213d70" 
  text="Custom branding..." 
/>`,
      angularCode: `<m1st-loading-spinner 
  size="md" 
  variant="simple" 
  primaryColor="#0066cc" 
  secondaryColor="#213d70" 
  text="Custom branding...">
</m1st-loading-spinner>`,
      component: <LoadingSpinner size="md" variant="simple" primaryColor="#0066cc" secondaryColor="#213d70" text="Custom branding..." />
    }
  ];

  const angularInstallationSteps = [
    {
      step: '1. Install Package',
      code: `npm install @m1st/design-components-angular`
    },
    {
      step: '2. Import Module',
      code: `import { M1stLoadingSpinnerModule } from '@m1st/design-components-angular';

@NgModule({
  imports: [M1stLoadingSpinnerModule],
  // ...
})
export class AppModule { }`
    },
    {
      step: '3. Use Component',
      code: `<m1st-loading-spinner 
  size="md" 
  variant="logo">
</m1st-loading-spinner>`
    }
  ];

  const reactInstallationSteps = [
    {
      step: '1. Install Package',
      code: `npm install @m1st/design-components`
    },
    {
      step: '2. Import Component',
      code: `import { LoadingSpinner } from '@m1st/design-components';`
    },
    {
      step: '3. Use Component',
      code: `<LoadingSpinner 
  size="md" 
  variant="logo" 
/>`
    }
  ];

  const frameworkTabs = [
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'angular', label: 'Angular', icon: '🅰️' }
  ];

  return (
    <ComponentPageTemplate
      componentName="Loading Spinner"
      description="M1st branded loading animations for indicating loading states and processing operations. Available in React and Angular with consistent API and visual output."
    >
      <div className="space-y-12">
        
        {/* Live Demo Section */}
        <section className="text-center py-8 px-6 rounded-lg" style={{ 
          backgroundColor: 'var(--page-surface)', 
          border: '1px solid var(--page-border)' 
        }}>
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <LoadingSpinner size="md" variant="logo" text="Loading..." />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
              Live Component Demo
            </h3>
            <p style={{ color: 'var(--page-text-secondary)' }}>
              Interactive example showing the loading spinner in action.
            </p>
          </div>
        </section>
        
        {/* Installation */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                Installation & Setup
              </h3>
              <p style={{ color: 'var(--page-text-secondary)' }}>
                Choose your framework to see relevant installation steps.
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
          
          <Card variant="outlined" padding="lg">
            <CardBody>
              <div className="space-y-6">
                {(activeFramework === 'react' ? reactInstallationSteps : angularInstallationSteps).map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ 
                        backgroundColor: 'var(--page-accent-primary)',
                        color: 'var(--page-text-inverse)'
                      }}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {step.step}
                      </h4>
                      <pre className="text-sm p-3 rounded-md overflow-x-auto" style={{ 
                        backgroundColor: 'var(--page-surface-sunken)', 
                        color: 'var(--page-text-primary)',
                        border: '1px solid var(--page-border)'
                      }}>
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Use Cases */}
        <section>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Usage Examples
          </h3>
          <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
            Common implementation patterns for {activeFramework === 'react' ? 'React' : 'Angular'} applications.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} variant="outlined" padding="md" className="h-full">
                <CardBody className="h-full">
                  <div className="flex flex-col h-full space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--page-text-primary)' }}>
                        {useCase.title}
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                        {useCase.description}
                      </p>
                    </div>
                    
                    {/* Live Preview */}
                    <div className="flex justify-center py-6 border rounded-md flex-1 flex items-center" style={{ 
                      backgroundColor: 'var(--page-surface)',
                      borderColor: 'var(--page-border)'
                    }}>
                      {useCase.component}
                    </div>
                    
                    {/* Code Example */}
                    <div className="mt-auto">
                      <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {activeFramework === 'react' ? 'React' : 'Angular'} Code:
                      </h5>
                      <pre className="text-xs p-3 rounded-md overflow-x-auto" style={{ 
                        backgroundColor: 'var(--page-surface-sunken)', 
                        color: 'var(--page-text-primary)',
                        border: '1px solid var(--page-border)'
                      }}>
                        <code>
                          {activeFramework === 'react' ? useCase.reactCode : useCase.angularCode}
                        </code>
                      </pre>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Size Variants */}
        <section>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Size Variants
          </h3>
          <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
            Available sizes for different use cases and layout requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spinnerSizes.map((size) => (
              <Card key={size.size} variant="outlined" padding="md" className="h-full">
                <CardBody className="h-full">
                  <div className="flex flex-col h-full space-y-4">
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--page-text-primary)' }}>
                        {size.name}
                      </h4>
                      <p className="text-sm mb-4" style={{ color: 'var(--page-text-secondary)' }}>
                        {size.description}
                      </p>
                      <div className="flex justify-center py-4">
                        <LoadingSpinner size={size.size} variant="logo" />
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {activeFramework === 'react' ? 'React' : 'Angular'} Usage:
                      </h5>
                      <pre className="text-xs p-2 rounded-md overflow-x-auto" style={{ 
                        backgroundColor: 'var(--page-surface-sunken)', 
                        color: 'var(--page-text-primary)',
                        border: '1px solid var(--page-border)'
                      }}>
                        <code>
                          {activeFramework === 'react' 
                            ? `<LoadingSpinner size="${size.size}" />`
                            : `<m1st-loading-spinner size="${size.size}"></m1st-loading-spinner>`
                          }
                        </code>
                      </pre>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Variant Types */}
        <section>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Animation Variants
          </h3>
          <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
            Choose between branded logo animation or simple circular spinner based on your context.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spinnerVariants.map((variant) => (
              <Card key={variant.variant} variant="outlined" padding="lg" className="h-full">
                <CardBody className="h-full">
                  <div className="flex flex-col h-full space-y-6">
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {variant.name} Variant
                      </h4>
                      <p className="text-sm mb-6" style={{ color: 'var(--page-text-secondary)' }}>
                        {variant.description}
                      </p>
                      <div className="flex justify-center py-6">
                        <LoadingSpinner size="md" variant={variant.variant} />
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {activeFramework === 'react' ? 'React' : 'Angular'} Implementation:
                      </h5>
                      <pre className="text-sm p-3 rounded-md overflow-x-auto" style={{ 
                        backgroundColor: 'var(--page-surface-sunken)', 
                        color: 'var(--page-text-primary)',
                        border: '1px solid var(--page-border)'
                      }}>
                        <code>
                          {activeFramework === 'react' 
                            ? `<LoadingSpinner 
  variant="${variant.variant}" 
  size="md" 
/>`
                            : `<m1st-loading-spinner 
  variant="${variant.variant}" 
  size="md">
</m1st-loading-spinner>`
                          }
                        </code>
                      </pre>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Design Tokens */}
        <section>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Design Tokens & Customization
          </h3>
          <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
            The loading spinner uses M1st design tokens ensuring consistency across {activeFramework === 'react' ? 'React' : 'Angular'} implementations.
          </p>

          <Card variant="outlined" padding="lg">
            <CardBody>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                    CSS Custom Properties Used
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { token: '--color-brand-primary', value: '#EE3831', usage: 'Default primary color for spinner animations' },
                      { token: '--loading-spinner-secondary-color', value: '#213d70', usage: 'Default secondary color for spinner smaller half circle' },
                      { token: '--page-background', value: 'Dynamic', usage: 'Background contrast for logo animation center' },
                      { token: '--page-text-secondary', value: 'Dynamic', usage: 'Loading text color' },
                      { token: '--animation-duration', value: '2.2s', usage: 'Configurable animation timing' }
                    ].map((token, index) => (
                      <div key={index} className="p-3 rounded-md border" style={{ 
                        backgroundColor: 'var(--page-surface)',
                        borderColor: 'var(--page-border)'
                      }}>
                        <code className="text-sm font-mono" style={{ color: 'var(--page-accent-primary)' }}>
                          {token.token}
                        </code>
                        <p className="text-xs mt-1" style={{ color: 'var(--page-text-secondary)' }}>
                          {token.usage}
                        </p>
                        <span className="text-xs font-medium" style={{ color: 'var(--page-text-primary)' }}>
                          Value: {token.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                    Framework-Specific Customization
                  </h4>
                  <pre className="text-sm p-4 rounded-md overflow-x-auto" style={{ 
                    backgroundColor: 'var(--page-surface-sunken)', 
                    color: 'var(--page-text-primary)',
                    border: '1px solid var(--page-border)'
                  }}>
                    <code>
                      {activeFramework === 'react' 
                        ? `// React: Custom colors and duration
<LoadingSpinner 
  variant="simple" 
  primaryColor="#0066cc"
  secondaryColor="#6c757d"
  duration={1.5}  // 1.5 seconds
  text="Custom styling..."
/>`
                        : `<!-- Angular: Custom colors and duration -->
<m1st-loading-spinner 
  variant="simple" 
  primaryColor="#0066cc"
  secondaryColor="#6c757d"
  [duration]="1.5"
  text="Custom styling...">
</m1st-loading-spinner>`
                      }
                    </code>
                  </pre>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Color Customization */}
        <section>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Color Customization
          </h3>
          <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
            Customize spinner colors to match your brand or theme. The `simple` and `original` variants support color props.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Default Colors',
                description: 'M1st brand colors (default behavior)',
                component: <LoadingSpinner size="md" variant="simple" />,
                code: activeFramework === 'react' 
                  ? `<LoadingSpinner variant="simple" />`
                  : `<m1st-loading-spinner variant="simple"></m1st-loading-spinner>`
              },
              {
                title: 'Custom Primary',
                description: 'Custom primary color with default secondary',
                component: <LoadingSpinner size="md" variant="simple" primaryColor="#0066cc" />,
                code: activeFramework === 'react' 
                  ? `<LoadingSpinner 
  variant="simple" 
  primaryColor="#0066cc" 
/>`
                  : `<m1st-loading-spinner 
  variant="simple" 
  primaryColor="#0066cc">
</m1st-loading-spinner>`
              },
              {
                title: 'Custom Both Colors',
                description: 'Both primary and secondary colors customized',
                component: <LoadingSpinner size="md" variant="simple" primaryColor="#28a745" secondaryColor="#6c757d" />,
                code: activeFramework === 'react' 
                  ? `<LoadingSpinner 
  variant="simple" 
  primaryColor="#28a745" 
  secondaryColor="#6c757d" 
/>`
                  : `<m1st-loading-spinner 
  variant="simple" 
  primaryColor="#28a745" 
  secondaryColor="#6c757d">
</m1st-loading-spinner>`
              }
            ].map((example, index) => (
              <Card key={index} variant="outlined" padding="md" className="h-full">
                <CardBody className="h-full">
                  <div className="flex flex-col h-full space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: 'var(--page-text-primary)' }}>
                        {example.title}
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                        {example.description}
                      </p>
                    </div>
                    
                    {/* Live Preview */}
                    <div className="flex justify-center py-6 border rounded-md flex-1 flex items-center" style={{ 
                      backgroundColor: 'var(--page-surface)',
                      borderColor: 'var(--page-border)'
                    }}>
                      {example.component}
                    </div>
                    
                    {/* Code Example */}
                    <div className="mt-auto">
                      <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>
                        {activeFramework === 'react' ? 'React' : 'Angular'} Code:
                      </h5>
                      <pre className="text-xs p-3 rounded-md overflow-x-auto" style={{ 
                        backgroundColor: 'var(--page-surface-sunken)', 
                        color: 'var(--page-text-primary)',
                        border: '1px solid var(--page-border)'
                      }}>
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* API Reference */}
        <section>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            API Reference
          </h3>
          <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
            Complete {activeFramework === 'react' ? 'props' : 'inputs'} reference for the LoadingSpinner component.
          </p>

          <Card variant="outlined" padding="lg">
            <CardBody>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: 'var(--page-border)' }}>
                      <th className="text-left py-3 pr-4" style={{ color: 'var(--page-text-primary)' }}>
                        {activeFramework === 'react' ? 'Prop' : 'Input'}
                      </th>
                      <th className="text-left py-3 pr-4" style={{ color: 'var(--page-text-primary)' }}>Type</th>
                      <th className="text-left py-3 pr-4" style={{ color: 'var(--page-text-primary)' }}>Default</th>
                      <th className="text-left py-3" style={{ color: 'var(--page-text-primary)' }}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { prop: 'size', type: "'sm' | 'md' | 'lg' | 'xl' | 'xxl'", default: "'md'", description: 'Controls the size of the loading spinner' },
                      { prop: 'variant', type: "'logo' | 'simple' | 'original'", default: "'logo'", description: 'Animation style - branded logo, simple orbital, or classic spinner' },
                      { prop: 'text', type: 'string', default: 'undefined', description: 'Optional loading text displayed below spinner' },
                      { prop: 'primaryColor', type: 'string', default: 'var(--color-brand-primary)', description: 'Primary color for the spinner (larger half circle)' },
                      { prop: 'secondaryColor', type: 'string', default: '#213d70', description: 'Secondary color for the spinner (smaller half circle)' },
                      { prop: 'centerColor', type: 'string', default: 'var(--page-background)', description: 'Center color for logo variant background' },
                      { prop: 'duration', type: 'number', default: '2.2', description: 'Animation duration in seconds' },
                      { prop: 'className', type: 'string', default: "''", description: 'Additional CSS classes for custom styling' }
                    ].map((item, index) => (
                      <tr key={index} className="border-b" style={{ borderColor: 'var(--page-border)' }}>
                        <td className="py-3 pr-4">
                          <code className="text-xs font-mono px-2 py-1 rounded" style={{ 
                            color: 'var(--page-accent-primary)',
                            backgroundColor: 'var(--page-surface)'
                          }}>
                            {item.prop}
                          </code>
                        </td>
                        <td className="py-3 pr-4" style={{ color: 'var(--page-text-secondary)' }}>
                          <code className="text-xs">{item.type}</code>
                        </td>
                        <td className="py-3 pr-4" style={{ color: 'var(--page-text-secondary)' }}>
                          <code className="text-xs">{item.default}</code>
                        </td>
                        <td className="py-3" style={{ color: 'var(--page-text-secondary)' }}>
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </section>

      </div>
    </ComponentPageTemplate>
  );
};

// Explicit default export for module resolution
// export default LoadingSpinnerComponentPage;

