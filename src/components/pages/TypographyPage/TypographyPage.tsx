import React, { useState } from 'react';
import { PageTemplate } from '../../layout/PageTemplate';
import { Modal, Tabs } from '../../ui';
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
  const [activeTab, setActiveTab] = useState<'scales' | 'families' | 'principles' | 'usage' | 'tokens'>('scales');

  // Set the document title
  useDocumentTitle('Typography');

  const typographyScales: Record<string, TypographyScale[]> = {
    scales: [
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
      },
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

  // Tab configuration for the Tabs component
  const tabItems = [
    { 
      id: 'scales', 
      label: 'Typography Scale', 
      extra: <span className="ml-1 text-xs opacity-60">(12)</span>
    },
    { 
      id: 'families', 
      label: 'Font Families'
    },
    { 
      id: 'principles', 
      label: 'Design Principles'
    },
    { 
      id: 'usage', 
      label: 'Usage Guidelines'
    },
    { 
      id: 'tokens', 
      label: 'All Tokens', 
      extra: <span className="ml-1 text-xs opacity-60">(12)</span>
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const renderTypographyExample = (token: TypographyToken) => {
    // Map token names to utility classes that use CSS variables
    const getUtilityClass = (token: TypographyToken) => {
      const classMap: Record<string, string> = {
        'Heading XXL': 'text-heading-xxl',
        'Heading XL': 'text-heading-xl',
        'Heading L': 'text-heading-l',
        'Heading M': 'text-heading-m',
        'Heading S': 'text-heading-s',
        'Heading XS': 'text-heading-xs',
        'Body Large': 'text-body-l',
        'Body Medium': 'text-body-m',
        'Body Small': 'text-body-s',
        'Caption': 'text-body-xs'
      };
      return classMap[token.name] || 'text-body-m';
    };

    const utilityClass = getUtilityClass(token);

    return (
      <div 
        key={token.cssVar}
        className="group cursor-pointer p-6 rounded-lg border transition-colors"
        style={{
          backgroundColor: 'var(--page-surface-elevated)',
          borderColor: 'var(--page-border)'
        }}
        onClick={() => setSelectedToken(token)}
      >
        {/* Typography Sample */}
        <div className="mb-6">
          <div 
            className={`mb-2 break-words ${utilityClass}`}
            style={{
              color: 'var(--page-text-primary)'
            }}
          >
            {getSampleText(token.category, token.name)}
          </div>
          <div className="text-sm" style={{ color: 'var(--page-text-muted)' }}>
            Click to view details
          </div>
        </div>

        {/* Token Info */}
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--page-text-primary)' }}>
              {token.name}
            </h3>
            <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              {token.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium" style={{ color: 'var(--page-text-primary)' }}>Class:</span>
              <code className="ml-1 px-1 rounded text-xs" style={{ 
                color: 'var(--page-text-primary)', 
                backgroundColor: 'var(--page-surface-sunken)' 
              }}>
                .{utilityClass}
              </code>
            </div>
            <div>
              <span className="font-medium" style={{ color: 'var(--page-text-primary)' }}>CSS Variable:</span>
              <code className="ml-1 px-1 rounded text-xs" style={{ 
                color: 'var(--page-text-primary)', 
                backgroundColor: 'var(--page-surface-sunken)' 
              }}>
                {token.cssVar}
              </code>
            </div>
          </div>

          <div 
            className="p-2 rounded font-mono text-xs cursor-pointer transition-colors"
            style={{
              backgroundColor: 'var(--page-surface-sunken)',
              color: 'var(--page-text-primary)'
            }}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(token.cssVar);
            }}
          >
            {token.cssVar}
          </div>
        </div>
      </div>
    );
  };

  const getSampleText = (category: string, name: string) => {
    const samples: Record<string, Record<string, string>> = {
      heading: {
        'Heading XXL': 'Hero Text',
        'Heading XL': 'Create Beautiful Interfaces',
        'Heading L': 'Design System Excellence',
        'Heading M': 'Typography Guidelines',
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

  const renderFontFamilies = () => (
    <div className="space-y-16">
      {/* Font Families */}
      <section>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
            Font Families
          </h1>
          <p className="text-lg" style={{ color: 'var(--page-text-secondary)' }}>
            Our typography stack combines Inter for body text with DIN-2014 for headings, ensuring optimal readability and distinctive branding.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div 
            className="p-6 rounded-lg border"
            style={{
              backgroundColor: 'var(--page-background)',
              borderColor: 'var(--page-border)'
            }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-heading)' }}>
              DIN-2014 (Headings)
            </h2>
            <div className="space-y-3 mb-4">
              <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                Professional industrial font providing distinctive character, displayed in uppercase for strong hierarchy
              </p>
              <div className="p-3 rounded" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
                  --font-family-heading: "DIN-2014", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif
                </code>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-heading)' }}>Sample Heading Text</h3>
              <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>Automatically displayed in uppercase with enhanced letter spacing</p>
            </div>
          </div>
          
          <div 
            className="p-6 rounded-lg border"
            style={{
              backgroundColor: 'var(--page-background)',
              borderColor: 'var(--page-border)'
            }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-body)' }}>
              Inter (Body Text)
            </h2>
            <div className="space-y-3 mb-4">
              <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                Optimized for screen readability with excellent character spacing and openness
              </p>
              <div className="p-3 rounded" style={{ backgroundColor: 'var(--page-surface-sunken)' }}>
                <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
                  --font-family-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
                </code>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-base" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-body)' }}>
                This paragraph demonstrates Inter's excellent readability for body text. Notice the improved character spacing and openness for comfortable reading.
              </p>
              <p className="text-sm" style={{ color: 'var(--page-text-muted)' }}>Self-hosted for consistent cross-platform experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderDesignPrinciples = () => (
    <div className="space-y-16">
      {/* Design Principles */}
      <section>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
            Design Principles
          </h1>
          <p className="text-lg" style={{ color: 'var(--page-text-secondary)' }}>
            Core principles that guide our typography decisions and ensure consistency across all experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            className="p-6 rounded-lg border-l-4"
            style={{ 
              backgroundColor: 'var(--page-surface-elevated)', 
              borderLeftColor: 'var(--color-success)' 
            }}
          >
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
              ✅ Automatic Uppercase
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              <li>• All headings automatically display in UPPERCASE</li>
              <li>• Enhanced letter spacing (0.025em) for optimal readability</li>
              <li>• Creates strong visual hierarchy and professional appearance</li>
            </ul>
          </div>

          <div 
            className="p-6 rounded-lg border-l-4"
            style={{ 
              backgroundColor: 'var(--page-surface-elevated)', 
              borderLeftColor: 'var(--color-info)' 
            }}
          >
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
              ✅ Weight Hierarchy
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              <li>• <strong>Bold (700)</strong>: Display text only</li>
              <li>• <strong>SemiBold (600)</strong>: All other headings</li>
              <li>• <strong>Medium (500)</strong>: Interactive elements</li>
              <li>• <strong>Regular (400)</strong>: All body text</li>
            </ul>
          </div>

          <div 
            className="p-6 rounded-lg border-l-4"
            style={{ 
              backgroundColor: 'var(--page-surface-elevated)', 
              borderLeftColor: 'var(--color-accent-purple)' 
            }}
          >
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
              ✅ Line Height Optimization
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              <li>• <strong>Tight (1.1-1.2)</strong>: Large headings for impact</li>
              <li>• <strong>Normal (1.25-1.4)</strong>: Small headings for readability</li>
              <li>• <strong>Relaxed (1.4-1.6)</strong>: Body text for comfortable reading</li>
            </ul>
          </div>

          <div 
            className="p-6 rounded-lg border-l-4"
            style={{ 
              backgroundColor: 'var(--page-surface-elevated)', 
              borderLeftColor: 'var(--color-warning)' 
            }}
          >
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
              ✅ Accessibility
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              <li>• All sizes use rem units for user font size scaling</li>
              <li>• Sufficient contrast ratios maintained</li>
              <li>• Semantic HTML structure supported</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

  const renderUsageGuidelines = () => (
    <div className="space-y-16">
      {/* Usage Guidelines */}
      <section>
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>
            Usage Guidelines
          </h1>
          <p className="text-lg" style={{ color: 'var(--page-text-secondary)' }}>
            Best practices for implementing typography in your designs and code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Heading Scale Rules
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span>Use only <strong>one Display heading per page</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span>Don't skip heading levels (H1 → H3)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span>All headings display in uppercase automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span>Maintain logical content hierarchy</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              Body Text Rules
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span><strong>Body Medium</strong> is the default for paragraphs</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span><strong>Body Large</strong> for emphasis or introduction text</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span><strong>Body Small</strong> for secondary information</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                <span><strong>Captions</strong> for metadata and annotations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Examples */}
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--page-surface-elevated)', 
            borderColor: 'var(--page-border)' 
          }}
        >
          <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
            Quick Reference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>For Designers</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                <li>• <strong>Need a heading?</strong> → Use semantic HTML (h1, h2, etc.)</li>
                <li>• <strong>Need body text?</strong> → Use p with appropriate CSS variables</li>
                <li>• <strong>Need custom styling?</strong> → Use CSS custom properties</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>For Developers</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                <li>• Use CSS variables for all typography references</li>
                <li>• All sizes use rem units for user font scaling</li>
                <li>• Override uppercase with .heading-normal-case class</li>
              </ul>
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
      showSidebar={false}
      sidebarType="none"
    >
        {/* Navigation Tabs */}
        <div className="mb-8">
          <Tabs
            items={tabItems}
            activeItem={activeTab}
            onItemClick={(item) => setActiveTab(item.id as any)}
            variant="underline"
            size="medium"
            position="left"
          />
        </div>

        {/* Content */}
        <div className="typography-content">
          {activeTab === 'families' ? (
            renderFontFamilies()
          ) : activeTab === 'principles' ? (
            renderDesignPrinciples()
          ) : activeTab === 'usage' ? (
            renderUsageGuidelines()
          ) : activeTab === 'tokens' ? (
            typographyScales.tokens?.map((scale, index) => (
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
