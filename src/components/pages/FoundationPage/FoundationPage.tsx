import React, { useState } from 'react';
import { FoundationPageTemplate } from '../../layout';
import { Button, Card, CardBody, ThemeSwitch } from '../../ui';
import { useTheme } from '../../../contexts';
import { useDocumentTitle } from '../../../utils';

export const FoundationPage: React.FC = () => {
  const { theme } = useTheme();
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  // Set the document title
  useDocumentTitle('Foundation');

  const tokenLayers = [
    {
      layer: 1,
      name: "Foundation Tokens",
      description: "Raw color values and base design decisions. These are your primitive values.",
      examples: [
        { token: "--neutral-100", value: "#f5f5f5", usage: "Base neutral color" },
        { token: "--neutral-900", value: "#171717", usage: "Dark neutral color" },
        { token: "--red-500", value: "#EE3831", usage: "M1st brand red color" },
        { token: "--blue-600", value: "#2563eb", usage: "Primary blue color" }
      ],
      usage: "Never use directly in components - only for building semantic tokens",
      industry: "Called 'Global tokens' (Spectrum), 'Reference tokens' (Material), 'Base tokens' (Polaris)"
    },
    {
      layer: 2,
      name: "Semantic Tokens",
      description: "Map foundation tokens to design intentions and meanings. Define what colors represent.",
      examples: [
        { token: "--color-background-primary", value: "var(--neutral-0)", usage: "Main app background" },
        { token: "--color-text-primary", value: "var(--neutral-900)", usage: "Primary text color" },
        { token: "--color-accent-primary", value: "var(--red-500)", usage: "Brand accent color" },
        { token: "--color-border-primary", value: "var(--neutral-200)", usage: "Default borders" }
      ],
      usage: "Used by designers and for building higher-level tokens",
      industry: "Called 'Alias tokens' (Spectrum/Fluent), 'System tokens' (Material)"
    },
    {
      layer: 3,
      name: "Page-Level Tokens",
      description: "Map semantic tokens to specific page contexts. Perfect for layouts and sections.",
      examples: [
        { token: "--page-background", value: "var(--color-background-primary)", usage: "Main page background" },
        { token: "--page-text-primary", value: "var(--color-text-primary)", usage: "Page content text" },
        { token: "--page-surface", value: "var(--color-surface-primary)", usage: "Card backgrounds" },
        { token: "--page-border", value: "var(--color-border-primary)", usage: "Page borders" }
      ],
      usage: "Perfect for pages, sections, and layout components",
      industry: "Called 'Scale tokens' (Spectrum), 'Pattern tokens' (Fluent/Polaris), 'Custom tokens' (Material)"
    },
    {
      layer: 4,
      name: "Component Tokens",
      description: "Component-specific design decisions for specialized styling needs.",
      examples: [
        { token: "--button-padding-sm", value: "0.5rem 1rem", usage: "Small button padding" },
        { token: "--card-shadow", value: "0 1px 3px rgba(0,0,0,0.1)", usage: "Card elevation" },
        { token: "--input-border-radius", value: "0.375rem", usage: "Input field radius" },
        { token: "--modal-backdrop", value: "rgba(0,0,0,0.5)", usage: "Modal overlay" }
      ],
      usage: "Only when components need specialized styling beyond semantic tokens",
      industry: "Called 'Component tokens' universally across all major design systems"
    }
  ];

  const industryExamples = [
    {
      company: "Adobe",
      system: "Spectrum Design System",
      layers: ["Global tokens", "Alias tokens", "Component tokens", "Scale tokens"],
      url: "https://spectrum.adobe.com/page/design-tokens/"
    },
    {
      company: "Microsoft", 
      system: "Fluent Design System",
      layers: ["Global tokens", "Alias tokens", "Component tokens", "Pattern tokens"],
      url: "https://docs.microsoft.com/en-us/windows/apps/design/signature-experiences/design-tokens"
    },
    {
      company: "Google",
      system: "Material Design 3",
      layers: ["Reference tokens", "System tokens", "Component tokens", "Custom tokens"],
      url: "https://m3.material.io/foundations/design-tokens/overview"
    },
    {
      company: "Shopify",
      system: "Polaris Design System", 
      layers: ["Base tokens", "Semantic tokens", "Component tokens", "Pattern tokens"],
      url: "https://polaris.shopify.com/design/tokens"
    }
  ];

  return (
    <FoundationPageTemplate>
      {/* Content */}
          <div className="mb-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm mb-2" style={{ color: 'var(--page-text-muted)' }}>
                  Current theme: <span className="font-semibold text-red-600">{theme}</span>
                </p>
                <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>
                  Industry Standard • Scalable • Future-Proof
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-6xl space-y-12">

            {/* Architecture Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
                Architecture Overview
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
                Our token system uses 4 distinct layers, each serving a specific purpose in the design-to-code workflow.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {tokenLayers.map((layer) => (
                  <Card 
                    key={layer.layer} 
                    variant="outlined" 
                    padding="lg"
                    className="hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedToken(selectedToken === `layer-${layer.layer}` ? null : `layer-${layer.layer}`)}
                  >
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                          style={{ 
                            backgroundColor: 'var(--color-accent-primary)',
                            color: 'var(--page-text-inverse)'
                          }}
                        >
                          {layer.layer}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                            {layer.name}
                          </h3>
                          <p className="mb-4" style={{ color: 'var(--page-text-secondary)' }}>
                            {layer.description}
                          </p>
                          <div className="space-y-2">
                            <div>
                              <span className="text-sm font-medium" style={{ color: 'var(--page-text-primary)' }}>Usage: </span>
                              <span className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>{layer.usage}</span>
                            </div>
                            <div>
                              <span className="text-sm font-medium" style={{ color: 'var(--page-text-primary)' }}>Industry: </span>
                              <span className="text-sm" style={{ color: 'var(--page-text-muted)' }}>{layer.industry}</span>
                            </div>
                          </div>

                          {selectedToken === `layer-${layer.layer}` && (
                            <div className="mt-6 pt-4" style={{ borderTop: '1px solid var(--page-border-muted)' }}>
                              <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>Examples:</h4>
                              <div className="space-y-2">
                                {layer.examples.map((example, idx) => (
                                  <div 
                                    key={idx} 
                                    className="p-3 rounded-lg font-mono text-sm"
                                    style={{ backgroundColor: 'var(--page-surface-sunken)' }}
                                  >
                                    <div style={{ color: 'var(--page-text-primary)' }}>
                                      <span className="text-blue-600">{example.token}</span>: <span className="text-green-600">{example.value}</span>
                                    </div>
                                    <div className="text-xs mt-1" style={{ color: 'var(--page-text-muted)' }}>
                                      {example.usage}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </section>

            {/* Industry Standards */}
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
                Industry Standards
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
                Our 4-layer architecture aligns with industry leaders. Here's how major design systems structure their tokens:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industryExamples.map((example, idx) => (
                  <Card key={idx} variant="outlined" padding="lg">
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
                          style={{ 
                            backgroundColor: 'var(--color-success)',
                            color: 'var(--page-text-inverse)'
                          }}
                        >
                          ✓
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--page-text-primary)' }}>
                            {example.company}
                          </h3>
                          <p className="text-sm mb-3" style={{ color: 'var(--page-text-secondary)' }}>
                            {example.system}
                          </p>
                          <div className="space-y-1">
                            {example.layers.map((layer, layerIdx) => (
                              <div key={layerIdx} className="text-sm flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center" 
                                      style={{ 
                                        backgroundColor: 'var(--color-accent-primary)',
                                        color: 'var(--page-text-inverse)'
                                      }}>
                                  {layerIdx + 1}
                                </span>
                                <span style={{ color: 'var(--page-text-primary)' }}>{layer}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </section>

            {/* Live Token Explorer */}
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
                Live Token Explorer
              </h2>
              <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
                See how our tokens work in practice. Switch themes to see how all layers adapt automatically.
              </p>

              <Card variant="outlined" padding="lg">
                <CardBody>
                  <div className="space-y-8">
                    
                    {/* Theme Switcher */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--page-text-primary)' }}>
                        Current Theme: {theme}
                      </h3>
                      <ThemeSwitch />
                    </div>

                    {/* Live Token Values */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      
                      {/* Foundation Layer Demo */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm" style={{ color: 'var(--page-text-primary)' }}>
                          Layer 1: Foundation
                        </h4>
                        <div className="space-y-2">
                          <div className="h-8 rounded border" style={{ 
                            backgroundColor: 'var(--neutral-100)',
                            borderColor: 'var(--page-border)' 
                          }}>
                            <div className="text-xs p-1 font-mono" style={{ color: 'var(--page-text-primary)' }}>
                              --neutral-100
                            </div>
                          </div>
                          <div className="h-8 rounded border" style={{ 
                            backgroundColor: 'var(--neutral-900)',
                            borderColor: 'var(--page-border)' 
                          }}>
                            <div className="text-xs p-1 font-mono" style={{ color: 'var(--page-text-inverse)' }}>
                              --neutral-900
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Semantic Layer Demo */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm" style={{ color: 'var(--page-text-primary)' }}>
                          Layer 2: Semantic
                        </h4>
                        <div className="space-y-2">
                          <div className="h-8 rounded border" style={{ 
                            backgroundColor: 'var(--color-background-primary)',
                            borderColor: 'var(--page-border)' 
                          }}>
                            <div className="text-xs p-1 font-mono" style={{ color: 'var(--page-text-primary)' }}>
                              --color-background-primary
                            </div>
                          </div>
                          <div className="h-8 rounded border" style={{ 
                            backgroundColor: 'var(--color-accent-primary)',
                            borderColor: 'var(--page-border)' 
                          }}>
                            <div className="text-xs p-1 font-mono" style={{ color: 'var(--page-text-inverse)' }}>
                              --color-accent-primary
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Page-Level Demo */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm" style={{ color: 'var(--page-text-primary)' }}>
                          Layer 3: Page-Level
                        </h4>
                        <div className="space-y-2">
                          <div className="h-8 rounded border" style={{ 
                            backgroundColor: 'var(--page-background)',
                            borderColor: 'var(--page-border)' 
                          }}>
                            <div className="text-xs p-1 font-mono" style={{ color: 'var(--page-text-primary)' }}>
                              --page-background
                            </div>
                          </div>
                          <div className="h-8 rounded border" style={{ 
                            backgroundColor: 'var(--page-surface)',
                            borderColor: 'var(--page-border)' 
                          }}>
                            <div className="text-xs p-1 font-mono" style={{ color: 'var(--page-text-primary)' }}>
                              --page-surface
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Component Demo */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm" style={{ color: 'var(--page-text-primary)' }}>
                          Layer 4: Component
                        </h4>
                        <div className="space-y-2">
                          <Button variant="primary" size="sm">Primary Button</Button>
                          <Button variant="secondary" size="sm">Secondary Button</Button>
                        </div>
                      </div>

                    </div>

                  </div>
                </CardBody>
              </Card>
            </section>

            {/* Implementation Guide */}
            <section>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
                Implementation Guide
              </h2>
              
              <Card variant="outlined" padding="lg">
                <CardBody>
                  <div className="space-y-6">
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
                        Best Practices
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-600">✅ Do</h4>
                          <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                            <li>• Use page-level tokens for layouts and sections</li>
                            <li>• Use semantic tokens for specialized component needs</li>
                            <li>• Create component tokens only when necessary</li>
                            <li>• Document token purposes clearly</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-red-600">❌ Don't</h4>
                          <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                            <li>• Never use foundation tokens directly in components</li>
                            <li>• Don't create tokens for one-off values</li>
                            <li>• Avoid hard-coding colors or spacing</li>
                            <li>• Don't skip semantic layer mapping</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
                        Migration Path
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                            From Hardcoded Values:
                          </h4>
                          <pre className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
{`// ❌ Old
background-color: #f5f5f5;
color: #171717;

// ✅ New  
background-color: var(--page-background);
color: var(--page-text-primary);`}
                          </pre>
                        </div>
                        
                        <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                          <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                            From Semantic Tokens:
                          </h4>
                          <pre className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
{`// ❌ Too direct
background-color: var(--color-background-primary);

// ✅ Better abstraction
background-color: var(--page-background);`}
                          </pre>
                        </div>
                      </div>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </section>

          </div>
    </FoundationPageTemplate>
  );
};
