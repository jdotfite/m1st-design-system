import React, { useState } from 'react';
import { PageTemplate } from '../../layout/PageTemplate';
import { useDocumentTitle } from '../../../utils';

const TypographyPage: React.FC = () => {
  const [copiedVariable, setCopiedVariable] = useState<string | null>(null);

  // Set the document title
  useDocumentTitle('Typography');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVariable(text);
    setTimeout(() => setCopiedVariable(null), 2000);
  };

  // Sidebar navigation items
  const sidebarItems = [
    { label: 'Installation', href: '#installation' },
    { label: 'Font Families', href: '#font-families' },
    { label: 'Typography Scale', href: '#typography-scale' },
    { label: 'Examples', href: '#examples' },
    { label: 'CSS Variables', href: '#css-variables' },
    { label: 'Accessibility', href: '#accessibility' }
  ];

  return (
    <PageTemplate
      title="Typography"
      description="Typography creates hierarchy, communicates brand personality, and guides user attention. Our type scale provides consistent, accessible text sizing across all experiences."
      showSidebar={true}
      sidebarType="typography"
      sidebarItems={sidebarItems}
    >
      <div className="max-w-4xl">
        {/* Installation Section */}
        <section id="installation" className="mb-16">
          <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
            Installation
          </h1>
          <p className="text-lg mb-6" style={{ color: 'var(--page-text-secondary)' }}>
            Get started with our typography system by installing the design tokens package and importing the typography styles.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                Install the package
              </h3>
              <div 
                className="p-4 rounded-lg border font-mono text-sm cursor-pointer transition-colors"
                style={{
                  backgroundColor: 'var(--page-surface-sunken)',
                  borderColor: 'var(--page-border)',
                  color: 'var(--page-text-primary)'
                }}
                onClick={() => copyToClipboard('npm install m1st-design-tokens')}
              >
                <span className="text-gray-500">$</span> npm install m1st-design-tokens
                {copiedVariable === 'npm install m1st-design-tokens' && (
                  <span className="ml-2 text-green-600">✓ Copied</span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>
                Import typography styles
              </h3>
              <div 
                className="p-4 rounded-lg border font-mono text-sm cursor-pointer transition-colors"
                style={{
                  backgroundColor: 'var(--page-surface-sunken)',
                  borderColor: 'var(--page-border)',
                  color: 'var(--page-text-primary)'
                }}
                onClick={() => copyToClipboard("import 'm1st-design-tokens/dist/css/typography.css';")}
              >
                import 'm1st-design-tokens/dist/css/typography.css';
                {copiedVariable === "import 'm1st-design-tokens/dist/css/typography.css';" && (
                  <span className="ml-2 text-green-600">✓ Copied</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Font Families Section */}
        <section id="font-families" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
            Font Families
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
            Our typography system includes three carefully selected typefaces.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div 
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--page-surface-elevated)',
                borderColor: 'var(--page-border)'
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-heading)' }}>
                DIN-2014
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--page-text-secondary)' }}>
                Professional industrial font for headings and display text.
              </p>
              <div 
                className="p-3 rounded mb-4 cursor-pointer"
                style={{ backgroundColor: 'var(--page-surface-sunken)' }}
                onClick={() => copyToClipboard('var(--font-family-heading)')}
              >
                <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
                  var(--font-family-heading)
                  {copiedVariable === 'var(--font-family-heading)' && (
                    <span className="ml-2 text-green-600">✓</span>
                  )}
                </code>
              </div>
            </div>
            
            <div 
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--page-surface-elevated)',
                borderColor: 'var(--page-border)'
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-body)' }}>
                Inter
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--page-text-secondary)' }}>
                Optimized for screen readability. Perfect for interface text.
              </p>
              <div 
                className="p-3 rounded mb-4 cursor-pointer"
                style={{ backgroundColor: 'var(--page-surface-sunken)' }}
                onClick={() => copyToClipboard('var(--font-family-body)')}
              >
                <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
                  var(--font-family-body)
                  {copiedVariable === 'var(--font-family-body)' && (
                    <span className="ml-2 text-green-600">✓</span>
                  )}
                </code>
              </div>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--page-surface-elevated)',
                borderColor: 'var(--page-border)'
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-serif)' }}>
                Lora
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--page-text-secondary)' }}>
                Elegant serif font for special content and quotes.
              </p>
              <div 
                className="p-3 rounded mb-4 cursor-pointer"
                style={{ backgroundColor: 'var(--page-surface-sunken)' }}
                onClick={() => copyToClipboard('var(--font-family-serif)')}
              >
                <code className="text-sm" style={{ color: 'var(--page-text-primary)' }}>
                  var(--font-family-serif)
                  {copiedVariable === 'var(--font-family-serif)' && (
                    <span className="ml-2 text-green-600">✓</span>
                  )}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Scale Section */}
        <section id="typography-scale" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
            Typography Scale
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
            Our typographic scale provides consistent hierarchy for all text content.
          </p>

          <div className="space-y-6">
            <div 
              className="p-6 rounded-lg border"
              style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}
            >
              <div className="text-6xl font-bold mb-2" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-heading)' }}>
                Display
              </div>
              <div className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>
                4rem / 64px • Bold (700)
              </div>
              <code 
                className="text-xs px-2 py-1 rounded cursor-pointer"
                style={{ backgroundColor: 'var(--page-surface-sunken)', color: 'var(--page-text-primary)' }}
                onClick={() => copyToClipboard('var(--font-size-display-m)')}
              >
                var(--font-size-display-m)
                {copiedVariable === 'var(--font-size-display-m)' && <span className="ml-1 text-green-600">✓</span>}
              </code>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}
            >
              <div className="text-5xl font-semibold mb-2" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-heading)' }}>
                Heading XL
              </div>
              <div className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>
                3rem / 48px • SemiBold (600)
              </div>
              <code 
                className="text-xs px-2 py-1 rounded cursor-pointer"
                style={{ backgroundColor: 'var(--page-surface-sunken)', color: 'var(--page-text-primary)' }}
                onClick={() => copyToClipboard('var(--font-size-heading-xl)')}
              >
                var(--font-size-heading-xl)
                {copiedVariable === 'var(--font-size-heading-xl)' && <span className="ml-1 text-green-600">✓</span>}
              </code>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
            Examples
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
            See how our typography works in real content scenarios.
          </p>

          <div 
            className="p-8 rounded-lg border"
            style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}
          >
            <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--page-text-primary)', fontFamily: 'var(--font-family-heading)' }}>
              Design Systems at Scale
            </h1>
            
            <p className="text-lg mb-6" style={{ color: 'var(--page-text-secondary)', fontFamily: 'var(--font-family-body)' }}>
              Building consistent experiences across teams requires thoughtful planning.
            </p>
            
            <blockquote 
              className="text-lg italic pl-6 border-l-4 my-6"
              style={{ 
                color: 'var(--page-text-secondary)', 
                fontFamily: 'var(--font-family-serif)',
                borderColor: 'var(--color-primary)' 
              }}
            >
              "Good typography is invisible until it's not."
            </blockquote>
          </div>
        </section>

        {/* CSS Variables Section */}
        <section id="css-variables" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
            CSS Variables Reference
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
            Typography CSS variables available in the design token system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Display XL', variable: '--font-size-display-xl', size: '6rem' },
              { name: 'Display L', variable: '--font-size-display-l', size: '5rem' },
              { name: 'Display M', variable: '--font-size-display-m', size: '4.5rem' },
              { name: 'Heading XXL', variable: '--font-size-heading-xxl', size: '4rem' },
              { name: 'Heading XL', variable: '--font-size-heading-xl', size: '3rem' },
              { name: 'Heading L', variable: '--font-size-heading-l', size: '2.25rem' },
              { name: 'Heading M', variable: '--font-size-heading-m', size: '1.5rem' },
              { name: 'Heading S', variable: '--font-size-heading-s', size: '1.125rem' },
              { name: 'Heading XS', variable: '--font-size-heading-xs', size: '1rem' },
              { name: 'Body Large', variable: '--font-size-body-l', size: '1.125rem' },
              { name: 'Body Medium', variable: '--font-size-body-m', size: '1rem' },
              { name: 'Body Small', variable: '--font-size-body-s', size: '0.875rem' },
              { name: 'Body XS', variable: '--font-size-body-xs', size: '0.75rem' },
              { name: 'Button', variable: '--font-size-button', size: '0.875rem' }
            ].map((item) => (
              <div 
                key={item.variable}
                className="p-4 rounded-lg border cursor-pointer transition-colors hover:bg-opacity-75"
                style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}
                onClick={() => copyToClipboard(`var(${item.variable})`)}
              >
                <div className="font-medium mb-1" style={{ color: 'var(--page-text-primary)' }}>
                  {item.name}
                </div>
                <div className="text-xs mb-2" style={{ color: 'var(--page-text-muted)' }}>
                  {item.size}
                </div>
                <code className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                  var({item.variable})
                  {copiedVariable === `var(${item.variable})` && (
                    <span className="ml-2 text-green-600">✓</span>
                  )}
                </code>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility Section */}
        <section id="accessibility" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
            Accessibility
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
            Our typography system is designed with accessibility as a core principle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="p-6 rounded-lg border"
              style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}
            >
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
                Font Scaling
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                <li>• All font sizes use rem units</li>
                <li>• Scales with user's browser preferences</li>
                <li>• Supports up to 200% zoom</li>
              </ul>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}
            >
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--page-text-primary)' }}>
                Contrast & Legibility
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                <li>• Minimum 4.5:1 contrast ratio for body text</li>
                <li>• Minimum 3:1 contrast ratio for large text</li>
                <li>• Optimized line heights for reading</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default TypographyPage;
