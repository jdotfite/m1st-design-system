import React, { useState, useEffect } from 'react';
import { PageTemplate } from '../../layout';
import { BreadcrumbItem, Tabs } from '../../ui';
import { useDocumentTitle } from '../../../utils';
import './TokenVisualizerPage.css';

// Token data structure
interface Token {
  name: string;
  value: string;
  category: string;
  layer: number;
  description?: string;
  references?: string[];
  usage?: string;
  examples?: string[];
}

interface TokenGroup {
  [key: string]: Token[];
}

const TokenVisualizerPage: React.FC = () => {
  const [tokens, setTokens] = useState<TokenGroup>({});
  const [selectedLayer, setSelectedLayer] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'visualizer' | 'architecture' | 'usage'>('visualizer');

  // Set the document title
  useDocumentTitle('Design Tokens');

  // Parse CSS tokens from your index.css
  useEffect(() => {
    parseTokens();
  }, []);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'M1st Design System', href: '/' },
    { label: 'Foundation', href: '/foundation' },
    { label: 'Design Tokens', isActive: true }
  ];

  const parseTokens = () => {
    // Comprehensive token representation matching your actual system
    const parsedTokens: TokenGroup = {
      'Foundation (Layer 1) - Raw Values': [
        // Neutral Scale
        {
          name: '--neutral-0',
          value: '#ffffff',
          category: 'Neutral Colors',
          layer: 1,
          description: 'Pure white - Foundation of neutral scale',
          usage: 'Never use directly - reference through semantic tokens'
        },
        {
          name: '--neutral-100',
          value: '#f5f5f5',
          category: 'Neutral Colors',
          layer: 1,
          description: 'Very light gray',
          usage: 'Never use directly - reference through semantic tokens'
        },
        {
          name: '--neutral-500',
          value: '#737373',
          category: 'Neutral Colors',
          layer: 1,
          description: 'True middle gray (same in both themes)',
          usage: 'Never use directly - reference through semantic tokens'
        },
        {
          name: '--neutral-900',
          value: '#171717',
          category: 'Neutral Colors',
          layer: 1,
          description: 'Very dark gray - almost black',
          usage: 'Never use directly - reference through semantic tokens'
        },
        {
          name: '--neutral-1000',
          value: '#000000',
          category: 'Neutral Colors',
          layer: 1,
          description: 'Pure black',
          usage: 'Never use directly - reference through semantic tokens'
        },
        // Brand Colors
        {
          name: '--color-brand-primary',
          value: '#EE3831',
          category: 'Brand Colors',
          layer: 1,
          description: 'M1st brand red - matches M logo',
          usage: 'Use for primary brand moments and key actions'
        },
        // Accent Colors
        {
          name: '--color-accent-blue',
          value: '#2563EB',
          category: 'Accent Colors',
          layer: 1,
          description: 'Primary blue accent for highlights',
          usage: 'Info states, secondary actions, illustrations'
        },
        {
          name: '--color-accent-green',
          value: '#16A34A',
          category: 'Accent Colors',
          layer: 1,
          description: 'Success green for positive feedback',
          usage: 'Success states, confirmations'
        }
      ],
      'Semantic (Layer 2) - Intent-Based': [
        // Background Tokens
        {
          name: '--color-background-primary',
          value: 'var(--neutral-0)',
          category: 'Background Colors',
          layer: 2,
          description: 'Main app background - adapts to theme',
          references: ['--neutral-0'],
          usage: 'Primary app background, main content areas',
          examples: ['App shell', 'Main content background']
        },
        {
          name: '--color-background-secondary',
          value: 'var(--neutral-50)',
          category: 'Background Colors',
          layer: 2,
          description: 'Subtle background variation',
          references: ['--neutral-50'],
          usage: 'Secondary surfaces, subtle containers',
          examples: ['Sidebar backgrounds', 'Secondary panels']
        },
        {
          name: '--color-surface-elevated',
          value: 'var(--neutral-0)',
          category: 'Background Colors',
          layer: 2,
          description: 'Elevated surfaces like cards and modals',
          references: ['--neutral-0'],
          usage: 'Cards, modals, dropdowns, tooltips',
          examples: ['Modal backgrounds', 'Card surfaces']
        },
        // Text Tokens
        {
          name: '--color-text-primary',
          value: 'var(--neutral-900)',
          category: 'Text Colors',
          layer: 2,
          description: 'Primary text content - high contrast',
          references: ['--neutral-900'],
          usage: 'Headlines, body text, primary content',
          examples: ['Page titles', 'Article content', 'Button labels']
        },
        {
          name: '--color-text-secondary',
          value: 'var(--neutral-600)',
          category: 'Text Colors',
          layer: 2,
          description: 'Secondary text content - medium contrast',
          references: ['--neutral-600'],
          usage: 'Supporting text, descriptions, metadata',
          examples: ['Captions', 'Help text', 'Timestamps']
        },
        {
          name: '--color-text-tertiary',
          value: 'var(--neutral-400)',
          category: 'Text Colors',
          layer: 2,
          description: 'Tertiary text - low contrast',
          references: ['--neutral-400'],
          usage: 'Placeholder text, disabled states',
          examples: ['Form placeholders', 'Disabled labels']
        },
        // Status Colors
        {
          name: '--color-success',
          value: 'var(--color-accent-green)',
          category: 'Status Colors',
          layer: 2,
          description: 'Success states and positive feedback',
          references: ['--color-accent-green'],
          usage: 'Success messages, confirmations, positive states',
          examples: ['Success alerts', 'Completed status']
        },
        {
          name: '--color-danger',
          value: 'var(--color-brand-primary)',
          category: 'Status Colors',
          layer: 2,
          description: 'Error states and destructive actions',
          references: ['--color-brand-primary'],
          usage: 'Error messages, destructive actions, warnings',
          examples: ['Error alerts', 'Delete buttons']
        },
        // Interactive States
        {
          name: '--color-state-hover',
          value: 'rgba(229, 229, 229, 0.5)',
          category: 'Interactive States',
          layer: 2,
          description: 'Hover interaction feedback',
          usage: 'Hover states for interactive elements',
          examples: ['Button hovers', 'Link hovers']
        }
      ],
      'Page (Layer 3) - Context-Specific': [
        {
          name: '--page-background',
          value: 'var(--color-background-primary)',
          category: 'Page Structure',
          layer: 3,
          description: 'Main page background',
          references: ['--color-background-primary'],
          usage: 'Page-level background color',
          examples: ['App shell background', 'Main content area']
        },
        {
          name: '--page-surface',
          value: 'var(--color-surface-elevated)',
          category: 'Page Structure',
          layer: 3,
          description: 'Elevated surface elements',
          references: ['--color-surface-elevated'],
          usage: 'Cards, panels, content containers',
          examples: ['Content cards', 'Information panels']
        },
        {
          name: '--page-text-primary',
          value: 'var(--color-text-primary)',
          category: 'Page Typography',
          layer: 3,
          description: 'Primary text for page content',
          references: ['--color-text-primary'],
          usage: 'Main page text content',
          examples: ['Page headings', 'Body text']
        },
        {
          name: '--page-text-secondary',
          value: 'var(--color-text-secondary)',
          category: 'Page Typography',
          layer: 3,
          description: 'Secondary text for page content',
          references: ['--color-text-secondary'],
          usage: 'Supporting text on pages',
          examples: ['Descriptions', 'Meta information']
        },
        {
          name: '--page-border',
          value: 'var(--neutral-200)',
          category: 'Page Structure',
          layer: 3,
          description: 'Standard border color for page elements',
          references: ['--neutral-200'],
          usage: 'Borders, dividers, separators',
          examples: ['Card borders', 'Section dividers']
        },
        {
          name: '--page-accent-primary',
          value: 'var(--color-brand-primary)',
          category: 'Page Interactive',
          layer: 3,
          description: 'Primary accent for page-level interactions',
          references: ['--color-brand-primary'],
          usage: 'Primary actions, brand moments',
          examples: ['Primary buttons', 'Active states']
        }
      ],
      'Component (Layer 4) - Specialized': [
        {
          name: '--button-primary-bg',
          value: 'var(--page-accent-primary)',
          category: 'Button Tokens',
          layer: 4,
          description: 'Primary button background',
          references: ['--page-accent-primary'],
          usage: 'Only when button needs specialized styling',
          examples: ['Custom primary buttons']
        },
        {
          name: '--button-secondary-border',
          value: 'var(--page-border)',
          category: 'Button Tokens',
          layer: 4,
          description: 'Secondary button border',
          references: ['--page-border'],
          usage: 'Secondary button styling',
          examples: ['Outline buttons']
        },
        {
          name: '--card-shadow',
          value: '0 1px 3px rgba(0, 0, 0, 0.1)',
          category: 'Card Tokens',
          layer: 4,
          description: 'Standard card shadow',
          usage: 'Card component shadows',
          examples: ['Content cards', 'Modal shadows']
        },
        {
          name: '--navigation-active-bg',
          value: 'var(--color-state-hover)',
          category: 'Navigation Tokens',
          layer: 4,
          description: 'Active navigation item background',
          references: ['--color-state-hover'],
          usage: 'Navigation component active states',
          examples: ['Active nav items', 'Selected menu items']
        }
      ]
    };

    setTokens(parsedTokens);
  };

  // Filter tokens based on selections
  const filteredTokens = Object.entries(tokens).reduce((acc, [groupName, groupTokens]) => {
    const filtered = groupTokens.filter(token => {
      const layerMatch = selectedLayer === 'all' || token.layer === selectedLayer;
      const categoryMatch = selectedCategory === 'all' || token.category === selectedCategory;
      const searchMatch = token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         token.description?.toLowerCase().includes(searchTerm.toLowerCase());
      
      return layerMatch && categoryMatch && searchMatch;
    });

    if (filtered.length > 0) {
      acc[groupName] = filtered;
    }
    return acc;
  }, {} as TokenGroup);

  // Get unique categories
  const categories = Array.from(new Set(
    Object.values(tokens).flat().map(token => token.category)
  ));

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const renderColorSwatch = (value: string, size: 'small' | 'medium' | 'large' = 'medium') => {
    const sizeClasses = {
      small: 'w-8 h-8',
      medium: 'w-12 h-12',
      large: 'w-16 h-16'
    };

    // Extract hex color from CSS value or use CSS variable
    const hexMatch = value.match(/#[0-9a-fA-F]{6}/);
    const colorValue = hexMatch ? hexMatch[0] : value;
    
    return (
      <div 
        className={`${sizeClasses[size]} rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md flex-shrink-0`}
        style={{ 
          backgroundColor: colorValue.startsWith('var(') ? colorValue : colorValue,
          borderColor: 'var(--page-border)'
        }}
        title={colorValue}
      />
    );
  };

  const renderTokenReferences = (token: Token) => {
    if (!token.references) return null;

    return (
      <div className="mt-3">
        <span className="text-xs font-medium uppercase tracking-wide mb-1 block" style={{ color: 'var(--page-text-muted)' }}>
          References
        </span>
        <div className="flex flex-wrap gap-1">
          {token.references.map(ref => (
            <span 
              key={ref}
              className="reference-tag inline-block px-2 py-1 text-xs rounded border cursor-pointer"
              onClick={() => copyToClipboard(ref)}
            >
              {ref}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderUsageExamples = (token: Token) => {
    if (!token.examples) return null;

    return (
      <div className="mt-3">
        <span className="text-xs font-medium uppercase tracking-wide mb-1 block" style={{ color: 'var(--page-text-muted)' }}>
          Examples
        </span>
        <div className="flex flex-wrap gap-1">
          {token.examples.map((example, index) => (
            <span 
              key={index}
              className="example-tag inline-block px-2 py-1 text-xs rounded border"
            >
              {example}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const getLayerColor = (layer: number) => {
    const layerStyles = {
      1: 'layer-badge-1',
      2: 'layer-badge-2', 
      3: 'layer-badge-3',
      4: 'layer-badge-4'
    };
    return layerStyles[layer as keyof typeof layerStyles] || 'layer-badge-1';
  };

  const renderTokenCard = (token: Token) => (
    <div 
      key={token.name}
      className="token-card rounded-lg border p-6 hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex items-start gap-4">
        {renderColorSwatch(token.value, 'large')}
        <div className="flex-1 min-w-0">
          {/* Layer Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded border ${getLayerColor(token.layer)}`}>
              Layer {token.layer}
            </span>
            <span className="text-xs" style={{ color: 'var(--page-text-muted)' }}>{token.category}</span>
          </div>

          {/* Token Name */}
          <h4 className="font-semibold mb-1 text-lg" style={{ color: 'var(--page-text-primary)' }}>
            {token.name}
          </h4>
          
          {/* Description */}
          <p className="text-sm mb-3" style={{ color: 'var(--page-text-secondary)' }}>
            {token.description}
          </p>

          {/* Usage Guidelines */}
          {token.usage && (
            <div className="mb-3">
              <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--page-text-muted)' }}>
                Usage
              </span>
              <p className="text-sm mt-1" style={{ color: 'var(--page-text-primary)' }}>{token.usage}</p>
            </div>
          )}

          {/* Token Value */}
          <div className="mb-3">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--page-text-muted)' }}>
              CSS Variable
            </span>
            <div 
              className="code-block text-sm font-mono px-3 py-2 rounded border cursor-pointer mt-1"
              onClick={() => copyToClipboard(token.name)}
            >
              {token.name}
            </div>
          </div>

          <div className="mb-3">
            <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--page-text-muted)' }}>
              Value
            </span>
            <div 
              className="code-block text-sm font-mono px-3 py-2 rounded border cursor-pointer mt-1"
              onClick={() => copyToClipboard(token.value)}
            >
              {token.value}
            </div>
          </div>

          {/* References */}
          {renderTokenReferences(token)}
          
          {/* Usage Examples */}
          {renderUsageExamples(token)}
        </div>
      </div>
    </div>
  );

  return (
    <PageTemplate
      showSidebar={false}
      sidebarType="none"
      showFooter={true}
      breadcrumbs={breadcrumbs}
      title="Design Token Visualizer"
      description="Visual mapping of your 4-layer token architecture. Understand how foundation tokens flow through semantic, page, and component layers to create a cohesive design system."
    >
      <div className="token-visualizer-page">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <Tabs
            items={[
              { 
                id: 'visualizer', 
                label: 'Token Explorer', 
                extra: <span className="ml-1 text-xs opacity-60">({Object.values(tokens).flat().length})</span>
              },
              { 
                id: 'architecture', 
                label: 'Architecture Guide', 
                extra: <span className="ml-1 text-xs opacity-60">(4)</span>
              },
              { 
                id: 'usage', 
                label: 'UX Guidelines'
              }
            ]}
            activeItem={activeTab}
            onItemClick={(item) => setActiveTab(item.id as any)}
          />
        </div>

        {/* Token Explorer Tab */}
        {activeTab === 'visualizer' && (
          <>
            {/* Filters */}
            <div className="mb-8">
              <div className="filter-section rounded-lg border p-6">
                <h2 className="text-lg font-semibold mb-4">
                  🔍 Token Explorer
                </h2>
                <p className="text-sm mb-6">
                  Explore tokens by layer, category, or search for specific tokens. Click any value to copy to clipboard.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Layer Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Token Layer
                    </label>
                    <select
                      value={selectedLayer}
                      onChange={(e) => setSelectedLayer(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--page-surface-elevated)',
                        borderColor: 'var(--page-border)',
                        color: 'var(--page-text-primary)'
                      }}
                    >
                      <option value="all">All Layers</option>
                      <option value={1}>Layer 1 (Foundation)</option>
                      <option value={2}>Layer 2 (Semantic)</option>
                      <option value={3}>Layer 3 (Page)</option>
                      <option value={4}>Layer 4 (Component)</option>
                    </select>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--page-surface-elevated)',
                        borderColor: 'var(--page-border)',
                        color: 'var(--page-text-primary)'
                      }}
                    >
                      <option value="all">All Categories</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Search Tokens
                    </label>
                    <input
                      type="text"
                      placeholder="Search by name or description..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--page-surface-elevated)',
                        borderColor: 'var(--page-border)',
                        color: 'var(--page-text-primary)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Token Groups */}
            <div className="space-y-8">
              {Object.entries(filteredTokens).map(([groupName, groupTokens]) => (
                <div key={groupName} className="token-group">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>{groupName}</h3>
                    <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                      {groupName.includes('Layer 1') && "Raw foundation values - never use directly in components"}
                      {groupName.includes('Layer 2') && "Intent-based tokens that reference foundation values"}
                      {groupName.includes('Layer 3') && "Context-specific tokens for page-level styling"}
                      {groupName.includes('Layer 4') && "Specialized tokens for unique component needs"}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {groupTokens.map(renderTokenCard)}
                  </div>
                </div>
              ))}

              {Object.keys(filteredTokens).length === 0 && (
                <div className="text-center py-12">
                  <p style={{ color: 'var(--page-text-muted)' }}>
                    No tokens match your current filters.
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Architecture Guide Tab */}
        {activeTab === 'architecture' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
              M1st 4-Layer Token Architecture
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
              Our design system follows industry-standard 4-layer token architecture used by Adobe Spectrum, 
              Microsoft Fluent, Google Material Design 3, and Shopify Polaris. This ensures scalability, 
              maintainability, and future-proofing.
            </p>

            {/* Layer Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Layer 1: Foundation */}
              <div className="rounded-lg border p-6" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-1-text)' }}>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                       style={{ backgroundColor: 'var(--layer-1-text)' }}>
                    1
                  </div>
                  <h3 className="font-bold" style={{ color: 'var(--layer-1-text)' }}>Foundation</h3>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Raw Values</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --neutral-100: #f5f5f5
                  </div>
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --color-brand-primary: #EE3831
                  </div>
                </div>
                <div className="mt-3 text-xs" style={{ color: 'var(--layer-1-text)' }}>
                  <strong>Usage:</strong> Never use directly in components
                </div>
              </div>

              {/* Layer 2: Semantic */}
              <div className="rounded-lg border p-6" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-2-text)' }}>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                       style={{ backgroundColor: 'var(--layer-2-text)' }}>
                    2
                  </div>
                  <h3 className="font-bold" style={{ color: 'var(--layer-2-text)' }}>Semantic</h3>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Intent-Based</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --color-text-primary: var(--neutral-900)
                  </div>
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --color-background-primary: var(--neutral-0)
                  </div>
                </div>
                <div className="mt-3 text-xs" style={{ color: 'var(--layer-2-text)' }}>
                  <strong>Usage:</strong> For building higher-level tokens
                </div>
              </div>

              {/* Layer 3: Page-Level */}
              <div className="rounded-lg border p-6" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-3-text)' }}>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                       style={{ backgroundColor: 'var(--layer-3-text)' }}>
                    3
                  </div>
                  <h3 className="font-bold" style={{ color: 'var(--layer-3-text)' }}>Page-Level</h3>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Context-Specific</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --page-background: var(--color-background-primary)
                  </div>
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --page-text-primary: var(--color-text-primary)
                  </div>
                </div>
                <div className="mt-3 text-xs" style={{ color: 'var(--layer-3-text)' }}>
                  <strong>Usage:</strong> Ideal for layouts and sections
                </div>
              </div>

              {/* Layer 4: Component */}
              <div className="rounded-lg border p-6" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-4-text)' }}>
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                       style={{ backgroundColor: 'var(--layer-4-text)' }}>
                    4
                  </div>
                  <h3 className="font-bold" style={{ color: 'var(--layer-4-text)' }}>Component</h3>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Specialized</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --button-primary-bg: var(--page-accent-primary)
                  </div>
                  <div className="p-2 rounded font-mono text-xs" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>
                    --card-shadow: 0 1px 3px rgba(0,0,0,0.1)
                  </div>
                </div>
                <div className="mt-3 text-xs" style={{ color: 'var(--layer-4-text)' }}>
                  <strong>Usage:</strong> Only when specialized styling needed
                </div>
              </div>
            </div>

            {/* Token Flow Diagram */}
            <div className="rounded-lg border p-8" style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
                🔄 Token Reference Flow
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between gradient-flow p-6 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto text-white rounded-full flex items-center justify-center font-bold text-xl mb-2"
                         style={{ backgroundColor: 'var(--layer-1-text)' }}>
                      1
                    </div>
                    <div className="font-mono text-sm" style={{ color: 'var(--page-text-primary)' }}>--neutral-900</div>
                    <div className="text-xs" style={{ color: 'var(--page-text-secondary)' }}>#171717</div>
                  </div>
                  <div className="flow-arrow text-2xl">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto text-white rounded-full flex items-center justify-center font-bold text-xl mb-2"
                         style={{ backgroundColor: 'var(--layer-2-text)' }}>
                      2
                    </div>
                    <div className="font-mono text-sm" style={{ color: 'var(--page-text-primary)' }}>--color-text-primary</div>
                    <div className="text-xs" style={{ color: 'var(--page-text-secondary)' }}>var(--neutral-900)</div>
                  </div>
                  <div className="flow-arrow text-2xl">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto text-white rounded-full flex items-center justify-center font-bold text-xl mb-2"
                         style={{ backgroundColor: 'var(--layer-3-text)' }}>
                      3
                    </div>
                    <div className="font-mono text-sm" style={{ color: 'var(--page-text-primary)' }}>--page-text-primary</div>
                    <div className="text-xs" style={{ color: 'var(--page-text-secondary)' }}>var(--color-text-primary)</div>
                  </div>
                  <div className="flow-arrow text-2xl">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto text-white rounded-full flex items-center justify-center font-bold text-xl mb-2"
                         style={{ backgroundColor: 'var(--layer-4-text)' }}>
                      4
                    </div>
                    <div className="font-mono text-sm" style={{ color: 'var(--page-text-primary)' }}>--button-text</div>
                    <div className="text-xs" style={{ color: 'var(--page-text-secondary)' }}>var(--page-text-primary)</div>
                  </div>
                </div>
                
                <div className="text-center text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                  <strong>Example:</strong> How a foundation color flows through all layers to become a button text color
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UX Guidelines Tab */}
        {activeTab === 'usage' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
              🎯 UX Team Guidelines
            </h2>
            
            {/* Quick Reference */}
            <div className="quick-ref-card rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">🚀 Quick Reference for UX Teams</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold accent-blue mb-2">Most Common Tokens</h4>
                  <div className="space-y-1 text-sm font-mono">
                    <div>--page-background</div>
                    <div>--page-text-primary</div>
                    <div>--page-text-secondary</div>
                    <div>--page-surface</div>
                    <div>--page-border</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold accent-green mb-2">Status Colors</h4>
                  <div className="space-y-1 text-sm font-mono">
                    <div>--color-success</div>
                    <div>--color-warning</div>
                    <div>--color-danger</div>
                    <div>--color-info</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold accent-purple mb-2">Interactive States</h4>
                  <div className="space-y-1 text-sm font-mono">
                    <div>--page-hover</div>
                    <div>--page-active</div>
                    <div>--page-focus</div>
                    <div>--page-accent-primary</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 pro-tip rounded">
                <h4 className="font-medium mb-2">💡 Pro Tip for UX Teams</h4>
                <p className="text-sm">
                  When designing, think in terms of <strong>semantic meaning</strong> rather than specific colors. 
                  Instead of "make this red", think "this should indicate danger" or "this should be the primary action".
                  This approach ensures your designs work perfectly across all themes and future brand updates.
                </p>
              </div>
            </div>

            {/* Practical Examples */}
            <div className="rounded-lg border p-6" style={{ backgroundColor: 'var(--page-surface-elevated)', borderColor: 'var(--page-border)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
                🎯 Practical UX Workflow
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--layer-4-text)' }}>✅ What UX Teams Should Do</h4>
                  <div className="space-y-3">
                    <div className="p-4 rounded border-l-4" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-4-text)' }}>
                      <h5 className="font-medium mb-1" style={{ color: 'var(--layer-4-text)' }}>For Page Layouts</h5>
                      <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Use Layer 3 (Page-level) tokens:</p>
                      <code className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>--page-background</code>
                      <code className="text-xs px-2 py-1 rounded ml-2" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>--page-text-primary</code>
                    </div>
                    
                    <div className="p-4 rounded border-l-4" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-3-text)' }}>
                      <h5 className="font-medium mb-1" style={{ color: 'var(--layer-3-text)' }}>For Components</h5>
                      <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Use existing UI components or Layer 2 (Semantic) tokens:</p>
                      <code className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>{'<Button variant="primary">'}</code>
                    </div>
                    
                    <div className="p-4 rounded border-l-4" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-2-text)' }}>
                      <h5 className="font-medium mb-1" style={{ color: 'var(--layer-2-text)' }}>For Brand Requirements</h5>
                      <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Reference Layer 1 values in design specs:</p>
                      <code className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>#EE3831 (M1st brand red)</code>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3" style={{ color: 'var(--layer-1-text)' }}>❌ What to Avoid</h4>
                  <div className="space-y-3">
                    <div className="p-4 rounded border-l-4" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-1-text)' }}>
                      <h5 className="font-medium mb-1" style={{ color: 'var(--layer-1-text)' }}>Don't Use Raw Values</h5>
                      <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Never use hex codes or raw values directly:</p>
                      <code className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--layer-1-text)' }}>color: #171717 ❌</code>
                    </div>
                    
                    <div className="p-4 rounded border-l-4" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-2-text)' }}>
                      <h5 className="font-medium mb-1" style={{ color: 'var(--layer-2-text)' }}>Don't Skip Layers</h5>
                      <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Don't use foundation tokens in components:</p>
                      <code className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--layer-2-text)' }}>var(--neutral-900) ❌</code>
                    </div>
                    
                    <div className="p-4 rounded border-l-4" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-1-text)' }}>
                      <h5 className="font-medium mb-1" style={{ color: 'var(--layer-1-text)' }}>Don't Create One-Off Tokens</h5>
                      <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Avoid component tokens for single-use values:</p>
                      <code className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--layer-1-text)' }}>--my-special-button-color ❌</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision Tree */}
            <div className="rounded-lg border p-6" style={{ backgroundColor: 'var(--page-surface)', borderColor: 'var(--layer-3-text)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--layer-3-text)' }}>
                🌲 Token Selection Decision Tree
              </h3>
              <div className="space-y-4">
                <div className="decision-item p-4 rounded border">
                  <h4 className="font-medium mb-2" style={{ color: 'var(--layer-3-text)' }}>🤔 "I need to style a page background"</h4>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>→ Use <code className="px-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>--page-background</code> (Layer 3)</p>
                </div>
                <div className="decision-item p-4 rounded border">
                  <h4 className="font-medium mb-2" style={{ color: 'var(--layer-3-text)' }}>🤔 "I need to show an error message"</h4>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>→ Use <code className="px-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>--color-danger</code> (Layer 2)</p>
                </div>
                <div className="decision-item p-4 rounded border">
                  <h4 className="font-medium mb-2" style={{ color: 'var(--layer-3-text)' }}>🤔 "I need to create a custom button"</h4>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>→ First check if existing Button component works, then use Layer 3 tokens</p>
                </div>
                <div className="decision-item p-4 rounded border">
                  <h4 className="font-medium mb-2" style={{ color: 'var(--layer-3-text)' }}>🤔 "I need the exact M1st brand red"</h4>
                  <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>→ Reference <code className="px-1 rounded" style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}>--color-brand-primary</code> in design specs, but use semantic tokens in code</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default TokenVisualizerPage;
