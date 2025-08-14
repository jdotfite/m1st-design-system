import React, { useState } from 'react';
import { PageTemplate } from '../../layout';
import { Button, Card, CardBody } from '../../ui';
import { useDocumentTitle } from '../../../utils';

const GetStartedPage: React.FC = () => {
  const [activeFramework, setActiveFramework] = useState<'react' | 'angular' | 'vue' | 'stencil'>('react');

  // Set the document title
  useDocumentTitle('Get Started');

  const frameworkPackages = [
    {
      framework: 'react',
      name: 'React UI',
      package: '@m1st/design-components',
      description: 'React components with TypeScript support, hooks, and design tokens',
      version: '1.0.0',
      installation: 'npm install @m1st/design-components',
      imports: `import { LoadingSpinner, Button, Modal } from '@m1st/design-components';
import '@m1st/design-components/styles';`,
      usage: `function App() {
  return (
    <div className="m1st-app">
      <Button variant="primary">Click me</Button>
      <LoadingSpinner size="medium" />
    </div>
  );
}`
    },
    {
      framework: 'angular',
      name: 'Angular UI',
      package: '@m1st/design-components-angular',
      description: 'Angular components with TypeScript, standalone components, and signals',
      version: '1.0.0',
      installation: 'npm install @m1st/design-components-angular',
      imports: `import { M1stButtonComponent, M1stLoadingSpinnerComponent } from '@m1st/design-components-angular'; 

@Component({
  imports: [M1stButtonComponent, M1stLoadingSpinnerComponent],
  // ...
})`,
      usage: `<m1st-button variant="primary">Click me</m1st-button>
<m1st-loading-spinner size="medium"></m1st-loading-spinner>`
    },
    {
      framework: 'stencil',
      name: 'Web Components',
      package: '@m1st/design-components-web',
      description: 'Framework-agnostic web components built with Stencil',
      version: '1.0.0',
      installation: 'npm install @m1st/design-components-web',
      imports: `import '@m1st/design-components-web/dist/m1st-ui/m1st-ui.esm.js';
import '@m1st/design-components-web/dist/m1st-ui/m1st-ui.css';`,
      usage: `<m1st-button variant="primary">Click me</m1st-button>
<m1st-loading-spinner size="medium"></m1st-loading-spinner>`
    }
  ];

  const currentPackage = frameworkPackages.find(pkg => pkg.framework === activeFramework);

  return (
    <PageTemplate
      title="Getting Started with M1st Design System"
      description="Learn how to implement the M1st Design System in your projects with our framework-specific packages and comprehensive documentation."
    >
      <div className="space-y-8">
        {/* Package Distribution Strategy Overview */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              📦 Package-Based Distribution Strategy
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              The M1st Design System follows a modern package-based approach, providing framework-specific implementations while maintaining a single source of truth for design tokens and core principles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-semibold" style={{ color: 'var(--page-text-primary)' }}>React</div>
                <div className="text-sm" style={{ color: 'var(--page-text-muted)' }}>@m1st/design-components</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                <div className="text-2xl mb-2">🅰️</div>
                <div className="font-semibold" style={{ color: 'var(--page-text-primary)' }}>Angular</div>
                <div className="text-sm" style={{ color: 'var(--page-text-muted)' }}>@m1st/design-components-angular</div>
              </div>
              <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-semibold" style={{ color: 'var(--page-text-primary)' }}>Web Components</div>
                <div className="text-sm" style={{ color: 'var(--page-text-muted)' }}>@m1st/design-components-web</div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Quick Start Section */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              🚀 Quick Start
            </h2>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {frameworkPackages.map((pkg) => (
                  <Button
                    key={pkg.framework}
                    variant={activeFramework === pkg.framework ? 'primary' : 'secondary'}
                    onClick={() => setActiveFramework(pkg.framework as any)}
                    className="capitalize"
                  >
                    {pkg.framework === 'stencil' ? 'Web Components' : pkg.name}
                  </Button>
                ))}
              </div>

              {currentPackage && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                      1. Install the Package
                    </h3>
                    <div className="p-4 rounded-lg font-mono" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                      <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
                        {currentPackage.installation}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                      2. Import Components
                    </h3>
                    <div className="p-4 rounded-lg font-mono" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                      <pre className="text-sm whitespace-pre-wrap" style={{ color: 'var(--page-text-primary)' }}>
                        {currentPackage.imports}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                      3. Use in Your Application
                    </h3>
                    <div className="p-4 rounded-lg font-mono" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                      <pre className="text-sm whitespace-pre-wrap" style={{ color: 'var(--page-text-primary)' }}>
                        {currentPackage.usage}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Repository Architecture */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              🏗️ Repository Architecture
            </h2>
            
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              Our design system is distributed across two main repositories for clear separation of concerns:
            </p>

            <div className="p-4 rounded-lg mb-6 font-mono" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
              <pre className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
{`# Component Library Repository
github.com/Members1stFederalCreditUnion/m1st-design-components
├── src/
│   ├── components/              # React components
│   │   ├── Button/
│   │   ├── Modal/
│   │   ├── LoadingSpinner/
│   │   └── ...
│   ├── styles/                  # Design tokens & CSS
│   │   ├── tokens/             # Color, spacing, typography tokens
│   │   ├── themes/             # Light/dark theme definitions
│   │   └── components/         # Component-specific styles
│   └── utils/                   # Shared utilities
├── dist/                        # Built package for distribution
├── tests/                       # Component tests
└── docs/                        # API documentation

# Documentation & Showcase Repository  
github.com/Members1stFederalCreditUnion/m1st-design-system
├── src/
│   ├── components/
│   │   ├── pages/              # Documentation pages
│   │   └── demo/               # Component demonstrations
│   └── styles/                 # Showcase-specific styles
└── public/                     # Static assets`}
              </pre>
            </div>

            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
              Repository Responsibilities
            </h3>
            <ul className="space-y-2 mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              <li>• <strong>m1st-design-components</strong>: Contains the actual component library, design tokens, and distributable packages</li>
              <li>• <strong>m1st-design-system</strong>: Documentation site that imports and showcases the components from the library</li>
              <li>• <strong>Clear separation</strong>: Documentation site imports components as a consumer would, ensuring real-world testing</li>
              <li>• <strong>Independent deployment</strong>: Component library can be published to npm independently of documentation updates</li>
            </ul>
          </CardBody>
        </Card>

        {/* Design Tokens Strategy */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              🎨 Design Tokens Strategy
            </h2>
            
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              All design decisions are centralized in the @m1st/design-components package using CSS custom properties and semantic token naming:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                  Color Tokens
                </h3>
                <div className="p-4 rounded-lg font-mono" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                  <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
{`--color-primary-50
--color-primary-500
--color-primary-900
--color-surface-default
--color-text-primary`}
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                  Spacing & Typography
                </h3>
                <div className="p-4 rounded-lg font-mono" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                  <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
{`--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--font-size-body
--line-height-body`}
                  </code>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Technology Choices */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              ⚙️ Technology Choices & Rationale
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                  Build Tools & Infrastructure
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>Multi-Repository Strategy</h4>
                    <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                      Separate repositories for component library and documentation ensure clear separation of concerns and independent deployment cycles.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                    <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>TypeScript</h4>
                    <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                      Type safety across all packages ensures API consistency and better developer experience.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                  Web Components Strategy
                </h3>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)', borderColor: 'var(--page-border)' }}>
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                      style={{ 
                        backgroundColor: 'var(--color-success)',
                        color: 'var(--page-text-inverse)'
                      }}
                    >
                      ⚡
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>Stencil (Selected)</h4>
                      <p className="text-sm mb-3" style={{ color: 'var(--page-text-secondary)' }}>
                        Framework-agnostic web components with TypeScript support, excellent DX, and SSR-ready output.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div style={{ color: 'var(--page-text-secondary)' }}>
                          <strong>Pros:</strong> Mature ecosystem, TypeScript support, excellent developer experience, SSR-ready
                        </div>
                        <div style={{ color: 'var(--page-text-secondary)' }}>
                          <strong>Cons:</strong> Build-time compilation required, learning curve for team
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Implementation Roadmap */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              🗺️ Implementation Roadmap
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                    Phase 1: Foundation & Core Package (In Progress)
                  </h3>
                  <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                    <li>• Set up component library repository structure</li>
                    <li>• Create design token system with CSS custom properties</li>
                    <li>• Establish build and release pipeline</li>
                    <li>• Document token system and guidelines</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                    Phase 2: React Implementation (Current)
                  </h3>
                  <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                    <li>• Migrate existing React components to @m1st/design-components</li>
                    <li>• Implement comprehensive testing suite</li>
                    <li>• Create component playground and documentation</li>
                    <li>• Establish component API standards</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                    Phase 3: Stencil Web Components (Next Priority)
                  </h3>
                  <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                    <li>• Set up Stencil build pipeline and tooling</li>
                    <li>• Create framework-agnostic component base</li>
                    <li>• Implement core components (Button, Input, Modal, LoadingSpinner)</li>
                    <li>• Establish testing patterns and documentation</li>
                    <li>• Create distribution and consumption examples</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                    Phase 4: Angular Integration
                  </h3>
                  <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                    <li>• Angular package with standalone components</li>
                    <li>• Integration with Angular CLI and build tools</li>
                    <li>• Angular-specific testing and documentation</li>
                    <li>• Performance optimization and SSR support</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Next Steps */}
        <Card variant="outlined" padding="lg">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              🎯 Ready to Start?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--page-text-primary)' }}>
                  For Developers
                </h3>
                <div className="space-y-2">
                  <Button variant="primary" className="w-full justify-start">
                    📖 View Component Documentation
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    🎮 Try Interactive Playground
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    📦 Browse Package Registry
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--page-text-primary)' }}>
                  For Designers
                </h3>
                <div className="space-y-2">
                  <Button variant="primary" className="w-full justify-start">
                    🎨 Design Token Reference
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    📐 Figma Component Library
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    📋 Design Guidelines
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default GetStartedPage;
