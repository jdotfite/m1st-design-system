import React, { useEffect, useState } from 'react';
import { PageTemplate } from '../../layout/PageTemplate';
import { Card, CardBody } from '../../ui/Card';
import { useDocumentTitle } from '../../../utils';

export const WebComponentsTestPage: React.FC = () => {
  useDocumentTitle('Web Components Test');
  const [loadStatus, setLoadStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // Attempt to load web components
    const loadWebComponents = async () => {
      try {
        // Try multiple approaches to load their web components
        
        // Approach 1: Try from npm package
        try {
          const modulePath = '@members1stfederalcreditunion/m1st-design-components/loader';
          const module = await import(/* webpackIgnore: true */ modulePath);
          
          if (module && module.defineCustomElements) {
            module.defineCustomElements();
            setLoadStatus('success');
            console.log('✅ Web components loaded successfully from npm package');
            return;
          }
        } catch (npmError) {
          console.log('📦 npm package approach failed:', npmError);
        }

        // Approach 2: Try from their dev server
        try {
          // Load from their dev server at localhost:3333
          const script = document.createElement('script');
          script.type = 'module';
          script.src = 'http://localhost:3333/build/m1st-design-components.esm.js';
          
          script.onload = () => {
            setLoadStatus('success');
            console.log('✅ Web components loaded successfully from dev server');
          };
          
          script.onerror = () => {
            throw new Error('Failed to load from dev server');
          };
          
          document.head.appendChild(script);
          return;
        } catch (devServerError) {
          console.log('🌐 dev server approach failed:', devServerError);
        }

        throw new Error('All loading approaches failed');
        
      } catch (error) {
        console.error('❌ Failed to load web components:', error);
        setLoadStatus('error');
        const errorMsg = error instanceof Error ? error.message : 'Unknown error loading web components';
        setErrorMessage(`All approaches failed: ${errorMsg}`);
      }
    };

    loadWebComponents();
  }, []);

  const renderSpinnerContent = (label: string, variant: string, size: string) => {
    if (loadStatus === 'success') {
      // Show actual web component when loaded successfully
      return React.createElement('m1st-loading-spinner', {
        variant,
        size,
        text: label
      });
    } else {
      // Show placeholder when not loaded
      return (
        <div 
          className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-red-300 rounded-lg bg-red-50"
          style={{ minHeight: '120px' }}
        >
          <div className="text-4xl mb-2">🚫</div>
          <div className="text-sm text-red-700 text-center">
            <div className="font-bold text-red-800">PLACEHOLDER - NOT REAL COMPONENT</div>
            <div className="text-xs mt-1">Expected: &lt;m1st-loading-spinner variant="{variant}" size="{size}" /&gt;</div>
            <div className="text-xs">Text: {label}</div>
            <div className="text-xs text-red-600 mt-2 font-medium">
              ❌ Actual web component failed to load
            </div>
            <div className="text-xs text-red-500 mt-1">
              Real component would show M1st logo spinner like in their dev server
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <PageTemplate
      title="Web Components Integration Test"
      description="Testing the Stencil web components from the online banking team in our React documentation site."
      showSidebar={false}
      sidebarType="none"
    >
      <div className="space-y-12">

        {/* Status Section */}
        <section className="space-y-6">
          <div style={{ 
            background: loadStatus === 'error' ? '#fef2f2' : '#e3f2fd', 
            padding: '1rem', 
            borderRadius: '8px', 
            border: `2px solid ${loadStatus === 'error' ? '#dc2626' : '#2196f3'}`,
            marginBottom: '2rem'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: loadStatus === 'error' ? '#dc2626' : '#1976d2' }}>
              🧪 Web Components Integration Test - PLACEHOLDER MODE
            </h3>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.875rem' }}>
              This page shows how Stencil web components would integrate into React. The placeholders below are 
              <strong> NOT the real components</strong> - they're just mockups showing the integration approach.
            </p>
            <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', padding: '0.5rem', backgroundColor: '#fee2e2', borderRadius: '4px' }}>
              <strong>Reality Check: </strong>
              {loadStatus === 'loading' && '⏳ Attempting to load real web components...'}
              {loadStatus === 'success' && '✅ Real web components loaded - you should see actual M1st logo spinners'}
              {loadStatus === 'error' && `❌ Real web components failed: ${errorMessage}`}
              <br />
              <small>The left side of your screenshot shows the REAL components working in Stencil dev server.</small>
            </div>
          </div>
        </section>

        {/* Basic Web Component Test */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">PLACEHOLDER Loading Spinner Components</h2>
            <p className="text-neutral-700 mb-6">
              <strong className="text-red-600">These are NOT the real components!</strong> They're placeholders showing where the 
              Stencil web components would appear. The real components (like those on the left side of your screenshot) 
              show the actual M1st logo spinners with proper branding and animations.
            </p>
          </div>

          {/* Logo Variant */}
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Logo Variant</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Small</h4>
                  {renderSpinnerContent('Loading...', 'logo', 'sm')}
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Medium</h4>
                  {renderSpinnerContent('Processing...', 'logo', 'md')}
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Large</h4>
                  {renderSpinnerContent('Please wait...', 'logo', 'lg')}
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Simple Variant */}
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Simple Variant</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Default Colors</h4>
                  {renderSpinnerContent('Loading...', 'simple', 'md')}
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Custom Colors</h4>
                  {renderSpinnerContent('Custom colors...', 'simple', 'md')}
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Fast Animation</h4>
                  {renderSpinnerContent('Fast spinner...', 'simple', 'md')}
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Original Variant */}
          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Original Variant</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Standard</h4>
                  {renderSpinnerContent('Loading...', 'original', 'md')}
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-medium mb-2">Extra Large</h4>
                  {renderSpinnerContent('Big spinner...', 'original', 'xl')}
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Integration Notes */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Integration Strategy</h2>
          </div>

          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Why Web Components?</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">✅ Framework Agnostic</h4>
                  <p className="text-gray-700 mt-1">Web components work in React, Vue, Angular, or vanilla JavaScript</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">✅ Professional DevOps</h4>
                  <p className="text-gray-700 mt-1">Banking team has CI/CD, versioning, and GitHub Packages publishing</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">✅ Shared Across Teams</h4>
                  <p className="text-gray-700 mt-1">Same components used in online banking, mobile apps, and documentation</p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Integration Process</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">1. Package Installation</h4>
                  <code className="block bg-gray-100 p-2 rounded mt-1">
                    npm install @members1stfederalcreditunion/m1st-design-components
                  </code>
                </div>
                
                <div>
                  <h4 className="font-semibold">2. Component Loader</h4>
                  <code className="block bg-gray-100 p-2 rounded mt-1">
                    {`import { defineCustomElements } from '@members1stfederalcreditunion/m1st-design-components/loader';
defineCustomElements();`}
                  </code>
                </div>
                
                <div>
                  <h4 className="font-semibold">3. Usage in JSX</h4>
                  <code className="block bg-gray-100 p-2 rounded mt-1">
                    {`<m1st-loading-spinner variant="logo" size="md" text="Loading..." />`}
                  </code>
                </div>

                <div>
                  <h4 className="font-semibold">4. TypeScript Support</h4>
                  <code className="block bg-gray-100 p-2 rounded mt-1">
                    {`declare global {
  namespace JSX {
    interface IntrinsicElements {
      'm1st-loading-spinner': { variant?: string; size?: string; };
    }
  }
}`}
                  </code>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-lg font-semibold mb-4">Current Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✅</span>
                  <span>Package linked locally via npm link</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-600">❌</span>
                  <span>Stencil build process hanging at "generate custom elements + source maps"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600">⏳</span>
                  <span>Need working distribution files to test actual web components</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">💡</span>
                  <span>Alternative: Copy their source files or use dev server output</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

      </div>
    </PageTemplate>
  );
};
