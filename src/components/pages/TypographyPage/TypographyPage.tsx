import React, { useState } from 'react';
import { PageTemplate } from '../../layout/PageTemplate';
import { Modal } from '../../ui';
import { useDocumentTitle } from '../../../utils';
import './TypographyPage.css';

interface TypographyToken {
  name: string;
  size: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing?: string;
  cssVar: string;
  description: string;
  category: string;
  usage: string[];
}

interface TypographyScale {
  name: string;
  description: string;
  tokens: TypographyToken[];
}

export const TypographyPage: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<TypographyToken | null>(null);
  const [activeTab, setActiveTab] = useState<'headings' | 'body' | 'tokens' | 'guidelines'>('headings');

  // Set the document title
  useDocumentTitle('Typography');

  const typographyScales: Record<string, TypographyScale[]> = {
    headings: [
      {
        name: "Display & Large Headings",
        description: "Hero text and major section headings for maximum impact",
        tokens: [
          {
            name: "Display",
            size: "4rem",
            lineHeight: "1.1",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            cssVar: "--font-heading-display-size",
            description: "Hero text and promotional headlines",
            category: "heading",
            usage: ["Landing page heroes", "Marketing headlines", "Major announcements"]
          },
          {
            name: "Heading XL",
            size: "3rem",
            lineHeight: "1.15",
            fontWeight: "600",
            letterSpacing: "-0.01em",
            cssVar: "--font-heading-xl-size",
            description: "Large page titles and section headers",
            category: "heading",
            usage: ["Page titles", "Major section headers", "Feature headings"]
          },
          {
            name: "Heading L",
            size: "2.25rem",
            lineHeight: "1.2",
            fontWeight: "600",
            cssVar: "--font-heading-l-size",
            description: "Subsection titles and content headers",
            category: "heading",
            usage: ["Article titles", "Card headers", "Modal titles"]
          }
        ]
      },
      {
        name: "Standard Headings",
        description: "Regular content hierarchy for articles and interfaces",
        tokens: [
          {
            name: "Heading M",
            size: "1.5rem",
            lineHeight: "1.25",
            fontWeight: "600",
            cssVar: "--font-heading-m-size",
            description: "Standard content headings",
            category: "heading",
            usage: ["Article sections", "Component titles", "Content blocks"]
          },
          {
            name: "Heading S",
            size: "1.125rem",
            lineHeight: "1.3",
            fontWeight: "600",
            cssVar: "--font-heading-s-size",
            description: "Small headings and labels",
            category: "heading",
            usage: ["Sidebar headings", "Form section titles", "Widget headers"]
          },
          {
            name: "Heading XS",
            size: "1rem",
            lineHeight: "1.4",
            fontWeight: "600",
            cssVar: "--font-heading-xs-size",
            description: "Minimal headings and strong labels",
            category: "heading",
            usage: ["List headers", "Table headers", "Small card titles"]
          }
        ]
      }
    ],
    body: [
      {
        name: "Body Text Scales",
        description: "Readable text for content, descriptions, and interface text",
        tokens: [
          {
            name: "Body Large",
            size: "1.125rem",
            lineHeight: "1.6",
            fontWeight: "400",
            cssVar: "--font-body-l-size",
            description: "Large, comfortable reading text",
            category: "body",
            usage: ["Article introductions", "Important descriptions", "Feature descriptions"]
          },
          {
            name: "Body Medium",
            size: "1rem",
            lineHeight: "1.5",
            fontWeight: "400",
            cssVar: "--font-body-m-size",
            description: "Standard body text for most content",
            category: "body",
            usage: ["Paragraphs", "List items", "General content"]
          },
          {
            name: "Body Small",
            size: "0.875rem",
            lineHeight: "1.4",
            fontWeight: "400",
            cssVar: "--font-body-s-size",
            description: "Compact text for secondary content",
            category: "body",
            usage: ["Help text", "Secondary descriptions", "Dense interfaces"]
          },
          {
            name: "Caption",
            size: "0.75rem",
            lineHeight: "1.4",
            fontWeight: "400",
            cssVar: "--font-body-xs-size",
            description: "Small text for metadata and annotations",
            category: "body",
            usage: ["Timestamps", "Legal text", "Image captions", "Status text"]
          }
        ]
      },
      {
        name: "Specialized Text",
        description: "Text for specific interface elements and functions",
        tokens: [
          {
            name: "Button Text",
            size: "0.875rem",
            lineHeight: "1.2",
            fontWeight: "500",
            cssVar: "--font-button-size",
            description: "Text for buttons and interactive elements",
            category: "interface",
            usage: ["Button labels", "Link text", "Tab labels"]
          },
          {
            name: "Code",
            size: "0.875rem",
            lineHeight: "1.4",
            fontWeight: "400",
            cssVar: "--font-code-size",
            description: "Monospace text for code and technical content",
            category: "code",
            usage: ["Code blocks", "Technical values", "File names"]
          }
        ]
      }
    ],
    tokens: [
      {
        name: "All Typography Tokens",
        description: "Complete token reference for developers",
        tokens: [
          // This will be populated with all tokens for developer reference
        ]
      }
    ]
  };

  // Copy all tokens for the tokens tab
  const allTokens = Object.values(typographyScales).flat().reduce((acc, scale) => {
    return acc.concat(scale.tokens);
  }, [] as TypographyToken[]);
  typographyScales.tokens[0].tokens = allTokens;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const renderTypographyExample = (token: TypographyToken) => {
    const style = {
      fontSize: token.size,
      lineHeight: token.lineHeight,
      fontWeight: token.fontWeight,
      letterSpacing: token.letterSpacing || 'normal',
      fontFamily: token.category === 'code' ? 'var(--font-family-mono)' : 'inherit'
    };

    const sampleText = getSampleText(token.category, token.name);

    // Determine the semantic HTML element to use
    const getSemanticElement = (tokenName: string, category: string) => {
      if (category === 'heading') {
        switch (tokenName) {
          case 'Display': return 'h1';
          case 'Heading XL': return 'h1';
          case 'Heading L': return 'h2';
          case 'Heading M': return 'h3';
          case 'Heading S': return 'h4';
          case 'Heading XS': return 'h5';
          default: return 'h2';
        }
      }
      return 'p'; // Body text uses paragraphs
    };

    const elementTag = getSemanticElement(token.name, token.category);

    return (
      <div 
        key={token.name} 
        className="relative rounded-lg border p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group"
        style={{ 
          backgroundColor: 'var(--page-background)',
          borderColor: 'var(--page-border)'
        }}
        onClick={() => setSelectedToken(token)}
      >
        {/* Typography Sample */}
        <div className="mb-6">
          {React.createElement(
            elementTag,
            {
              className: "text-sample transition-colors duration-200",
              style: { 
                ...style,
                color: 'var(--page-text-primary)',
                margin: 0 // Reset default margins
              }
            },
            sampleText
          )}
        </div>
        
        {/* Token Details */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold" style={{ color: 'var(--page-text-primary)' }}>
              {token.name}
            </h3>
            <button 
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs px-3 py-1 rounded-md border"
              style={{
                backgroundColor: 'var(--page-surface)',
                borderColor: 'var(--page-border)',
                color: 'var(--page-text-secondary)'
              }}
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard(token.cssVar);
              }}
              title="Copy CSS variable"
            >
              Copy Token
            </button>
          </div>
          
          <p className="text-sm leading-relaxed" style={{ color: 'var(--page-text-secondary)' }}>
            {token.description}
          </p>
          
          {/* Token Properties */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span 
              className="inline-flex items-center px-2 py-1 rounded text-xs font-mono"
              style={{
                backgroundColor: 'var(--page-surface)',
                color: 'var(--page-text-secondary)',
                border: '1px solid var(--page-border)'
              }}
            >
              {token.size}
            </span>
            <span 
              className="inline-flex items-center px-2 py-1 rounded text-xs font-mono"
              style={{
                backgroundColor: 'var(--page-surface)',
                color: 'var(--page-text-secondary)',
                border: '1px solid var(--page-border)'
              }}
            >
              {token.fontWeight}
            </span>
            <span 
              className="inline-flex items-center px-2 py-1 rounded text-xs font-mono"
              style={{
                backgroundColor: 'var(--page-surface)',
                color: 'var(--page-text-secondary)',
                border: '1px solid var(--page-border)'
              }}
            >
              {token.lineHeight}
            </span>
            {token.letterSpacing && (
              <span 
                className="inline-flex items-center px-2 py-1 rounded text-xs font-mono"
                style={{
                  backgroundColor: 'var(--page-surface)',
                  color: 'var(--page-text-secondary)',
                  border: '1px solid var(--page-border)'
                }}
              >
                {token.letterSpacing}
              </span>
            )}
          </div>
          
          {/* CSS Variable */}
          <div className="pt-2">
            <code 
              className="text-xs px-2 py-1 rounded font-mono"
              style={{
                backgroundColor: 'var(--page-surface-sunken)',
                color: 'var(--page-accent-primary)',
                border: '1px solid var(--page-border)'
              }}
            >
              {token.cssVar}
            </code>
          </div>
        </div>
      </div>
    );
  };

  const getSampleText = (category: string, name: string) => {
    const samples: Record<string, Record<string, string>> = {
      heading: {
        'Display': 'Design Systems at Scale',
        'Heading XL': 'Typography Foundation',
        'Heading L': 'Text Hierarchy Guidelines',
        'Heading M': 'Building Consistent Interfaces',
        'Heading S': 'Best Practices & Usage',
        'Heading XS': 'Implementation Details'
      },
      body: {
        'Body Large': 'Typography is the art and technique of arranging type to make written language legible, readable and visually appealing.',
        'Body Medium': 'Good typography enhances the user experience by improving readability and establishing clear information hierarchy.',
        'Body Small': 'Consistent typography helps create familiar patterns and reduces cognitive load for users.',
        'Caption': 'Updated 2 hours ago • 4 min read'
      },
      interface: {
        'Button Text': 'Get Started'
      },
      code: {
        'Code': 'var(--font-size-base)'
      }
    };

    return samples[category]?.[name] || 'The quick brown fox jumps over the lazy dog';
  };

  const renderGuidelines = () => (
    <div className="space-y-16">
      {/* Typography Principles */}
      <section>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
            Typography Principles
          </h1>
          <p className="text-lg" style={{ color: 'var(--page-text-secondary)' }}>
            Core principles that guide our typography decisions and usage patterns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🎯',
              title: 'Hierarchy',
              description: 'Use consistent sizing and weight to establish clear information hierarchy. Larger, bolder text draws attention first.'
            },
            {
              icon: '📖',
              title: 'Readability',
              description: 'Optimize line height, spacing, and contrast for comfortable reading across all device sizes and conditions.'
            },
            {
              icon: '⚡',
              title: 'Performance',
              description: 'Use system fonts when possible and limit custom font variations to improve loading times.'
            },
            {
              icon: '♿',
              title: 'Accessibility',
              description: 'Ensure sufficient color contrast and support for user font size preferences and screen readers.'
            }
          ].map((principle, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--page-background)',
                borderColor: 'var(--page-border)'
              }}
            >
              <div className="text-2xl mb-3">{principle.icon}</div>
              <h2 className="text-lg font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                {principle.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--page-text-secondary)' }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
            Usage Guidelines
          </h1>
          <p className="text-lg" style={{ color: 'var(--page-text-secondary)' }}>
            Best practices for applying typography consistently across your interfaces.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Heading Scale',
              rules: [
                'Use only one Display heading per page',
                'Don\'t skip heading levels (H1 → H3)',
                'Maintain logical content hierarchy',
                'Consider line length for readability'
              ]
            },
            {
              title: 'Body Text',
              rules: [
                'Body Medium is the default for paragraphs',
                'Body Large for emphasis or introduction text',
                'Body Small for secondary information',
                'Captions for metadata and annotations'
              ]
            },
            {
              title: 'Line Length',
              rules: [
                'Optimal: 45-75 characters per line',
                'Use max-width to constrain text columns',
                'Consider reading flow and scanning patterns'
              ]
            }
          ].map((rule, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--page-background)',
                borderColor: 'var(--page-border)'
              }}
            >
              <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
                {rule.title}
              </h2>
              <ul className="space-y-2">
                {rule.rules.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm flex items-start">
                    <span 
                      className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0"
                      style={{ backgroundColor: 'var(--page-accent-primary)' }}
                    />
                    <span style={{ color: 'var(--page-text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Implementation */}
      <section>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
            Technical Implementation
          </h1>
          <p className="text-lg" style={{ color: 'var(--page-text-secondary)' }}>
            Code examples and best practices for implementing typography in your projects.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="p-6 rounded-lg border"
            style={{
              backgroundColor: 'var(--page-background)',
              borderColor: 'var(--page-border)'
            }}
          >
            <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              CSS Custom Properties
            </h2>
            <div 
              className="p-4 rounded border overflow-x-auto"
              style={{
                backgroundColor: 'var(--page-surface-sunken)',
                borderColor: 'var(--page-border)'
              }}
            >
              <pre className="text-sm">
                <code style={{ color: 'var(--page-text-primary)' }}>
{`/* Font Size Scale */
--font-heading-display-size: 4rem;
--font-heading-xl-size: 3rem;
--font-heading-l-size: 2.25rem;
--font-heading-m-size: 1.5rem;
--font-heading-s-size: 1.125rem;
--font-heading-xs-size: 1rem;

/* Body Text Scale */
--font-body-l-size: 1.125rem;
--font-body-m-size: 1rem;
--font-body-s-size: 0.875rem;
--font-body-xs-size: 0.75rem;

/* Line Height Scale */
--line-height-tight: 1.1;
--line-height-normal: 1.4;
--line-height-relaxed: 1.6;`}
                </code>
              </pre>
            </div>
          </div>
          
          <div 
            className="p-6 rounded-lg border"
            style={{
              backgroundColor: 'var(--page-background)',
              borderColor: 'var(--page-border)'
            }}
          >
            <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              React/JSX Usage
            </h2>
            <div 
              className="p-4 rounded border overflow-x-auto"
              style={{
                backgroundColor: 'var(--page-surface-sunken)',
                borderColor: 'var(--page-border)'
              }}
            >
              <pre className="text-sm">
                <code style={{ color: 'var(--page-text-primary)' }}>
{`// Using design system components
<Heading level={1}>Page Title</Heading>
<Text variant="body-large">Introduction text</Text>
<Text variant="body-medium">Regular content</Text>

// Using CSS custom properties
<h1 style={{ 
  fontSize: 'var(--font-heading-xl-size)' 
}}>
  Custom Heading
</h1>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <PageTemplate
      title="TYPOGRAPHY"
      description="Typography creates hierarchy, communicates brand personality, and guides user attention. Our type scale provides consistent, accessible text sizing across all experiences."
      showSidebar={true}
      sidebarType="foundation"
    >
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b" style={{ borderColor: 'var(--page-border)' }}>
            <nav className="flex space-x-8">
              {[
                { id: 'headings', label: 'Headings', count: 6 },
                { id: 'body', label: 'Body Text', count: 6 },
                { id: 'tokens', label: 'All Tokens', count: 12 },
                { id: 'guidelines', label: 'Guidelines', count: null }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className="py-4 px-1 text-sm font-medium transition-colors duration-200 relative"
                  style={{
                    color: activeTab === tab.id 
                      ? 'var(--page-accent-primary)' 
                      : 'var(--page-text-secondary)',
                    borderBottom: activeTab === tab.id 
                      ? '2px solid var(--page-accent-primary)' 
                      : '2px solid transparent'
                  }}
                >
                  {tab.label}
                  {tab.count && (
                    <span className="ml-1 text-xs opacity-60">({tab.count})</span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="typography-content">
          {activeTab === 'guidelines' ? (
            renderGuidelines()
          ) : (
            typographyScales[activeTab]?.map((scale, index) => (
              <section key={index} className="mb-16">
                <div className="mb-8">
                  <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
                    {scale.name}
                  </h1>
                  <p className="text-lg max-w-2xl" style={{ color: 'var(--page-text-secondary)' }}>
                    {scale.description}
                  </p>
                </div>
                <div className="grid gap-6">
                  {scale.tokens.map(renderTypographyExample)}
                </div>
              </section>
            ))
          )}
        </div>

        {selectedToken && (
          <Modal
            isOpen={!!selectedToken}
            onClose={() => setSelectedToken(null)}
            title={`${selectedToken.name} Usage`}
          >
            <div className="token-details-modal">
              <div className="token-preview" style={{
                fontSize: selectedToken.size,
                lineHeight: selectedToken.lineHeight,
                fontWeight: selectedToken.fontWeight,
                letterSpacing: selectedToken.letterSpacing || 'normal'
              }}>
                {getSampleText(selectedToken.category, selectedToken.name)}
              </div>
              
              <div className="token-specs">
                <h4>Specifications</h4>
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td>CSS Variable</td>
                      <td><code>{selectedToken.cssVar}</code></td>
                    </tr>
                    <tr>
                      <td>Font Size</td>
                      <td>{selectedToken.size}</td>
                    </tr>
                    <tr>
                      <td>Line Height</td>
                      <td>{selectedToken.lineHeight}</td>
                    </tr>
                    <tr>
                      <td>Font Weight</td>
                      <td>{selectedToken.fontWeight}</td>
                    </tr>
                    {selectedToken.letterSpacing && (
                      <tr>
                        <td>Letter Spacing</td>
                        <td>{selectedToken.letterSpacing}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="token-usage">
                <h4>Common Usage</h4>
                <ul>
                  {selectedToken.usage.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Modal>
        )}
    </PageTemplate>
  );
};

export default TypographyPage;
