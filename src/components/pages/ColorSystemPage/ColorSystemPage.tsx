import React, { useState } from 'react';
import { PageTemplate } from '../../layout/PageTemplate';
import { Modal, Tooltip, Tabs } from '../../ui';
import { useDocumentTitle } from '../../../utils';
import './ColorSystemPage.css';

interface ColorToken {
  name: string;
  lightValue: string;
  darkValue: string;
  cssVar: string;
  description: string;
  category: string;
}

interface ColorPalette {
  name: string;
  description: string;
  colors: ColorToken[];
}

export const ColorSystemPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorToken | null>(null);
  const [activeTab, setActiveTab] = useState<'brand' | 'neutral' | 'semantic' | 'component'>('brand');

  // Set the document title
  useDocumentTitle('Colors');

  // Color palettes organized by category
  const colorPalettes: Record<string, ColorPalette[]> = {
    brand: [
      {
        name: "Brand Primary",
        description: "Core M1st brand colors derived from the logo",
        colors: [
          { name: "Brand Primary", lightValue: "#EE3831", darkValue: "#EE3831", cssVar: "--color-brand-primary", description: "M1st brand red - matches M logo", category: "brand" }
        ]
      },
      {
        name: "Accent Colors - Warm",
        description: "Warm accent colors for highlights, illustrations, and visual interest",
        colors: [
          { name: "Accent Red", lightValue: "#E71C23", darkValue: "#E71C23", cssVar: "--color-accent-red", description: "Vibrant red accent", category: "accent" },
          { name: "Accent Green", lightValue: "#55A444", darkValue: "#55A444", cssVar: "--color-accent-green", description: "Fresh green accent", category: "accent" },
          { name: "Accent Blue", lightValue: "#0090C4", darkValue: "#0090C4", cssVar: "--color-accent-blue", description: "Blue accent", category: "accent" },
          { name: "Accent Orange", lightValue: "#F15C22", darkValue: "#F15C22", cssVar: "--color-accent-orange", description: "Energetic orange accent", category: "accent" },
          { name: "Accent Yellow", lightValue: "#FAA61A", darkValue: "#FAA61A", cssVar: "--color-accent-yellow", description: "Warm yellow accent", category: "accent" }
        ]
      },
      {
        name: "Accent Colors - Cool",
        description: "Cool accent colors for balance, trust, and professional highlights",
        colors: [
          { name: "Accent Teal", lightValue: "#006068", darkValue: "#006068", cssVar: "--color-accent-teal", description: "Sophisticated teal accent", category: "accent" },
          { name: "Accent Blue Light", lightValue: "#0071999", darkValue: "#0071999", cssVar: "--color-accent-blue-light", description: "Light blue accent", category: "accent" },
          { name: "Accent Blue Dark", lightValue: "#133156", darkValue: "#133156", cssVar: "--color-accent-blue-dark", description: "Deep blue accent", category: "accent" },
          { name: "Accent Purple", lightValue: "#7C2984", darkValue: "#7C2984", cssVar: "--color-accent-purple", description: "Rich purple accent", category: "accent" },
          { name: "Accent Magenta", lightValue: "#AD1F63", darkValue: "#AD1F63", cssVar: "--color-accent-magenta", description: "Bold magenta accent", category: "accent" },
          { name: "Accent Dark Red", lightValue: "#BF0000", darkValue: "#BF0000", cssVar: "--color-accent-dark-red", description: "Dark red accent", category: "accent" }
        ]
      }
    ],
    neutral: [
      {
        name: "Extended Neutral Scale",
        description: "25-step neutral palette from white to black with calculated middle values",
        colors: [
          { name: "Neutral 0", lightValue: "#ffffff", darkValue: "#000000", cssVar: "--neutral-0", description: "Pure white/black", category: "neutral" },
          { name: "Neutral 25", lightValue: "#fefefd", darkValue: "#050505", cssVar: "--neutral-25", description: "Almost white/very dark", category: "neutral" },
          { name: "Neutral 50", lightValue: "#fafafa", darkValue: "#0a0a0a", cssVar: "--neutral-50", description: "Very light/dark gray", category: "neutral" },
          { name: "Neutral 75", lightValue: "#f7f7f7", darkValue: "#0d0d0d", cssVar: "--neutral-75", description: "Light subtle gray", category: "neutral" },
          { name: "Neutral 100", lightValue: "#f5f5f5", darkValue: "#171717", cssVar: "--neutral-100", description: "Light/dark gray", category: "neutral" },
          { name: "Neutral 150", lightValue: "#ececec", darkValue: "#1e1e1e", cssVar: "--neutral-150", description: "Soft light gray", category: "neutral" },
          { name: "Neutral 200", lightValue: "#e5e5e5", darkValue: "#262626", cssVar: "--neutral-200", description: "Light border/dark border gray", category: "neutral" },
          { name: "Neutral 250", lightValue: "#d9d9d9", darkValue: "#303030", cssVar: "--neutral-250", description: "Divider gray", category: "neutral" },
          { name: "Neutral 300", lightValue: "#d4d4d4", darkValue: "#404040", cssVar: "--neutral-300", description: "Medium light/medium dark gray", category: "neutral" },
          { name: "Neutral 350", lightValue: "#b8b8b8", darkValue: "#4a4a4a", cssVar: "--neutral-350", description: "Muted gray", category: "neutral" },
          { name: "Neutral 400", lightValue: "#a3a3a3", darkValue: "#525252", cssVar: "--neutral-400", description: "Medium gray", category: "neutral" },
          { name: "Neutral 450", lightValue: "#8b8b8b", darkValue: "#5c5c5c", cssVar: "--neutral-450", description: "Readable gray", category: "neutral" },
          { name: "Neutral 500", lightValue: "#737373", darkValue: "#737373", cssVar: "--neutral-500", description: "True middle gray (same in both themes)", category: "neutral" },
          { name: "Neutral 550", lightValue: "#646464", darkValue: "#787878", cssVar: "--neutral-550", description: "Medium dark/light gray", category: "neutral" },
          { name: "Neutral 600", lightValue: "#525252", darkValue: "#a3a3a3", cssVar: "--neutral-600", description: "Medium dark/medium light gray", category: "neutral" },
          { name: "Neutral 650", lightValue: "#434343", darkValue: "#adadad", cssVar: "--neutral-650", description: "Strong dark gray", category: "neutral" },
          { name: "Neutral 700", lightValue: "#404040", darkValue: "#d4d4d4", cssVar: "--neutral-700", description: "Dark/light gray", category: "neutral" },
          { name: "Neutral 750", lightValue: "#2b2b2b", darkValue: "#dedede", cssVar: "--neutral-750", description: "Rich dark gray", category: "neutral" },
          { name: "Neutral 800", lightValue: "#262626", darkValue: "#e5e5e5", cssVar: "--neutral-800", description: "Very dark/very light gray", category: "neutral" },
          { name: "Neutral 850", lightValue: "#1e1e1e", darkValue: "#ebebeb", cssVar: "--neutral-850", description: "Deep dark gray", category: "neutral" },
          { name: "Neutral 900", lightValue: "#171717", darkValue: "#f5f5f5", cssVar: "--neutral-900", description: "Almost black/almost white", category: "neutral" },
          { name: "Neutral 925", lightValue: "#0f0f0f", darkValue: "#f7f7f7", cssVar: "--neutral-925", description: "Near black", category: "neutral" },
          { name: "Neutral 950", lightValue: "#0a0a0a", darkValue: "#f9f9f9", cssVar: "--neutral-950", description: "Very dark", category: "neutral" },
          { name: "Neutral 975", lightValue: "#050505", darkValue: "#fbfbfb", cssVar: "--neutral-975", description: "Almost pure black", category: "neutral" },
          { name: "Neutral 1000", lightValue: "#000000", darkValue: "#ffffff", cssVar: "--neutral-1000", description: "Pure black/white", category: "neutral" }
        ]
      }
    ],
    semantic: [
      {
        name: "Background Colors",
        description: "Semantic background colors for different surfaces",
        colors: [
          { name: "Background Primary", lightValue: "#ffffff", darkValue: "#0f0f0f", cssVar: "--color-background-primary", description: "Main app background", category: "background" },
          { name: "Background Secondary", lightValue: "#fafafa", darkValue: "#171717", cssVar: "--color-background-secondary", description: "Subtle background variation", category: "background" },
          { name: "Background Tertiary", lightValue: "#f5f5f5", darkValue: "#1e1e1e", cssVar: "--color-background-tertiary", description: "Card and component backgrounds", category: "background" },
          { name: "Surface Primary", lightValue: "#f7f7f7", darkValue: "#171717", cssVar: "--color-surface-primary", description: "Main content surfaces", category: "background" },
          { name: "Surface Elevated", lightValue: "#ffffff", darkValue: "#1e1e1e", cssVar: "--color-surface-elevated", description: "Elevated cards and modals", category: "background" }
        ]
      },
      {
        name: "Text Colors",
        description: "Semantic text colors for different content hierarchies",
        colors: [
          { name: "Text Primary", lightValue: "#171717", darkValue: "#ffffff", cssVar: "--color-text-primary", description: "Primary text content", category: "text" },
          { name: "Text Secondary", lightValue: "#525252", darkValue: "#a0a0a0", cssVar: "--color-text-secondary", description: "Secondary text content", category: "text" },
          { name: "Text Tertiary", lightValue: "#737373", darkValue: "#6b7280", cssVar: "--color-text-tertiary", description: "Muted helper text", category: "text" },
          { name: "Text Placeholder", lightValue: "#a3a3a3", darkValue: "#6b7280", cssVar: "--color-text-placeholder", description: "Form placeholder text", category: "text" },
          { name: "Text Inverse", lightValue: "#ffffff", darkValue: "#121212", cssVar: "--color-text-inverse", description: "Text on contrasting backgrounds", category: "text" }
        ]
      },
      {
        name: "Status Colors",
        description: "Semantic colors for different states and feedback",
        colors: [
          { name: "Success", lightValue: "#059669", darkValue: "#22c55e", cssVar: "--color-success", description: "Success states and positive feedback", category: "status" },
          { name: "Warning", lightValue: "#d97706", darkValue: "#f59e0b", cssVar: "--color-warning", description: "Warning states and caution", category: "status" },
          { name: "Danger", lightValue: "#EE3831", darkValue: "#EE3831", cssVar: "--color-danger", description: "Error states and destructive actions", category: "status" },
          { name: "Info", lightValue: "#0891b2", darkValue: "#3b82f6", cssVar: "--color-info", description: "Informational content", category: "status" }
        ]
      }
    ],
    component: [
      {
        name: "Button Tokens",
        description: "Component-specific tokens for button styling",
        colors: [
          { name: "Primary Button", lightValue: "#0f0f0f", darkValue: "#f7f7f7", cssVar: "--button-primary-bg", description: "Primary button background", category: "button" },
          { name: "Secondary Button", lightValue: "transparent", darkValue: "transparent", cssVar: "--button-secondary-bg", description: "Secondary button background", category: "button" },
          { name: "Danger Button", lightValue: "#EE3831", darkValue: "#EE3831", cssVar: "--button-danger-bg", description: "Destructive action button", category: "button" },
          { name: "Success Button", lightValue: "#059669", darkValue: "#22c55e", cssVar: "--button-success-bg", description: "Positive action button", category: "button" }
        ]
      },
      {
        name: "Interactive States",
        description: "Hover, focus, and active state colors",
        colors: [
          { name: "Hover State", lightValue: "rgba(229, 229, 229, 0.5)", darkValue: "rgba(255, 255, 255, 0.08)", cssVar: "--color-state-hover", description: "Hover interaction feedback", category: "interaction" },
          { name: "Active State", lightValue: "rgba(212, 212, 212, 0.7)", darkValue: "rgba(255, 255, 255, 0.12)", cssVar: "--color-state-active", description: "Active interaction feedback", category: "interaction" },
          { name: "Focus State", lightValue: "rgba(238, 56, 49, 0.12)", darkValue: "rgba(238, 56, 49, 0.12)", cssVar: "--color-state-focus", description: "Focus ring color", category: "interaction" },
          { name: "Selected State", lightValue: "rgba(238, 56, 49, 0.08)", darkValue: "rgba(238, 56, 49, 0.15)", cssVar: "--color-state-selected", description: "Selected item background", category: "interaction" }
        ]
      }
    ]
  };

  // Tab configuration for the Tabs component
  const tabItems = [
    { 
      id: 'brand', 
      label: 'Brand Colors', 
      extra: <span className="ml-1 text-xs opacity-60">({colorPalettes.brand.reduce((acc, p) => acc + p.colors.length, 0)})</span>
    },
    { 
      id: 'neutral', 
      label: 'Neutral Scale', 
      extra: <span className="ml-1 text-xs opacity-60">({colorPalettes.neutral.reduce((acc, p) => acc + p.colors.length, 0)})</span>
    },
    { 
      id: 'semantic', 
      label: 'Semantic Colors', 
      extra: <span className="ml-1 text-xs opacity-60">({colorPalettes.semantic.reduce((acc, p) => acc + p.colors.length, 0)})</span>
    },
    { 
      id: 'component', 
      label: 'Component Tokens', 
      extra: <span className="ml-1 text-xs opacity-60">({colorPalettes.component.reduce((acc, p) => acc + p.colors.length, 0)})</span>
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const ColorSwatch: React.FC<{ color: ColorToken; size?: 'small' | 'medium' | 'large' }> = ({ 
    color, 
    size = 'medium' 
  }) => {
    const sizeClasses = {
      small: 'w-8 h-8',
      medium: 'w-12 h-12',
      large: 'w-16 h-16'
    };

    return (
      <div 
        className={`color-swatch ${sizeClasses[size]} rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-md`}
        style={{ 
          backgroundColor: `var(${color.cssVar})`,
          borderColor: 'var(--page-border)'
        }}
        onClick={() => setSelectedColor(color)}
      />
    );
  };

  const ColorCard: React.FC<{ color: ColorToken }> = ({ color }) => (
    <div 
      className="color-card rounded-lg border p-4 transition-shadow duration-200"
      style={{
        backgroundColor: 'var(--page-surface-elevated)',
        borderColor: 'var(--page-border)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
      }}
    >
      <div className="flex items-start gap-3">
        <ColorSwatch color={color} size="large" />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold mb-1" style={{ color: 'var(--page-text-primary)' }}>{color.name}</h4>
          <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>{color.description}</p>
          <div className="space-y-1">
            <Tooltip content="Click to copy CSS variable">
              <div 
                className="text-xs font-mono px-2 py-1 rounded cursor-pointer transition-colors"
                style={{
                  backgroundColor: 'var(--page-surface-sunken)',
                  color: 'var(--page-text-primary)',
                  borderColor: 'var(--page-border)'
                }}
                onClick={() => copyToClipboard(color.cssVar)}
                onMouseEnter={(e) => {
                  // console.log('CSS var field hover');
                  e.currentTarget.style.backgroundColor = 'var(--page-surface)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--page-surface-sunken)';
                }}
                data-testid="css-var-field"
              >
                {color.cssVar}
              </div>
            </Tooltip>
            <div className="flex gap-1">
              <Tooltip content="Light theme value">
                <div 
                  className="text-xs font-mono px-2 py-1 rounded cursor-pointer transition-colors flex-1 flex items-center gap-1"
                  style={{
                    backgroundColor: 'var(--page-surface-sunken)',
                    color: 'var(--page-text-primary)',
                    borderColor: 'var(--page-border)'
                  }}
                  onClick={() => copyToClipboard(color.lightValue)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-surface)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-surface-sunken)';
                  }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                  {color.lightValue}
                </div>
              </Tooltip>              <Tooltip content="Dark theme value">
                <div 
                  className="text-xs font-mono px-2 py-1 rounded cursor-pointer transition-colors flex-1 flex items-center gap-1"
                  style={{
                    backgroundColor: 'var(--page-surface-sunken)',
                    color: 'var(--page-text-primary)',
                    borderColor: 'var(--page-border)'
                  }}
                  onClick={() => copyToClipboard(color.darkValue)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-surface)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--page-surface-sunken)';
                  }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                  </svg>
                  {color.darkValue}
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PaletteSection: React.FC<{ palette: ColorPalette }> = ({ palette }) => (
    <div className="palette-section mb-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>{palette.name}</h3>
        <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>{palette.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {palette.colors.map((color) => (
          <ColorCard key={color.cssVar} color={color} />
        ))}
      </div>
    </div>
  );

  const breadcrumbs = [
    { label: 'M1st Design System', href: '/' },
    { label: 'Colors', href: '/colors', isActive: true }
  ];

  return (
    <PageTemplate
      showSidebar={false}
      sidebarType="none"
      showFooter={true}
      breadcrumbs={breadcrumbs}
      title="Color System"
      description="Comprehensive color palette and design tokens inspired by Material Design 3 principles, tailored for the M1st banking application. Colors automatically adapt between light and dark themes."
    >
      <div className="color-system-page">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <Tabs
            items={tabItems}
            activeItem={activeTab}
            onItemClick={(item) => setActiveTab(item.id as any)}
          />
        </div>

        {/* Color Content */}
        <div className="color-content">
          {colorPalettes[activeTab]?.map((palette) => (
            <PaletteSection key={palette.name} palette={palette} />
          ))}
        </div>

        {/* Color Detail Modal */}
        <Modal
          isOpen={!!selectedColor}
          onClose={() => setSelectedColor(null)}
          title={selectedColor?.name}
          size="md"
        >
          {selectedColor && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <ColorSwatch color={selectedColor} size="large" />
                <div className="flex-1">
                  <p className="text-sm mb-4" style={{ color: 'var(--page-text-secondary)' }}>
                    {selectedColor.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wide mb-1 block" style={{ color: 'var(--page-text-secondary)' }}>
                        CSS Variable
                      </label>
                      <div 
                        className="text-sm font-mono px-3 py-2 rounded border cursor-pointer transition-colors"
                        style={{ 
                          backgroundColor: 'var(--page-surface-sunken)', 
                          color: 'var(--page-text-primary)',
                          borderColor: 'var(--page-border)'
                        }}
                        onClick={() => copyToClipboard(selectedColor.cssVar)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--page-surface-elevated)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--page-surface-sunken)';
                        }}
                      >
                        {selectedColor.cssVar}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wide mb-1 block" style={{ color: 'var(--page-text-secondary)' }}>
                        Light Theme Value
                      </label>
                      <div 
                        className="text-sm font-mono px-3 py-2 rounded border cursor-pointer transition-colors flex items-center gap-2"
                        style={{ 
                          backgroundColor: 'var(--page-surface-sunken)', 
                          color: 'var(--page-text-primary)',
                          borderColor: 'var(--page-border)'
                        }}
                        onClick={() => copyToClipboard(selectedColor.lightValue)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--page-surface-elevated)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--page-surface-sunken)';
                        }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>
                        {selectedColor.lightValue}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wide mb-1 block" style={{ color: 'var(--page-text-secondary)' }}>
                        Dark Theme Value
                      </label>
                      <div 
                        className="text-sm font-mono px-3 py-2 rounded border cursor-pointer transition-colors flex items-center gap-2"
                        style={{ 
                          backgroundColor: 'var(--page-surface-sunken)', 
                          color: 'var(--page-text-primary)',
                          borderColor: 'var(--page-border)'
                        }}
                        onClick={() => copyToClipboard(selectedColor.darkValue)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--page-surface-elevated)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--page-surface-sunken)';
                        }}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                        </svg>
                        {selectedColor.darkValue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>

        {/* Usage Guidelines */}
        <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>Color Accessibility</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                <li>• All color combinations meet WCAG AA contrast requirements</li>
                <li>• Use semantic tokens for consistent theming</li>
                <li>• Test with color blindness simulators</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>Implementation</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                <li>• Use CSS variables for all color references</li>
                <li>• Prefer page-level tokens for components</li>
                <li>• Always use semantic tokens over raw values</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>Theme System</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--page-text-secondary)' }}>
                <li>• Neutral scale inverts between light/dark themes</li>
                <li>• Brand colors remain consistent across themes</li>
                <li>• Status colors adapt for better contrast</li>
              </ul>
            </div>
          </div>
          
          <div 
            className="mt-6 p-4 rounded border-l-4"
            style={{ 
              backgroundColor: 'var(--page-info-subtle)', 
              borderLeftColor: 'var(--color-info)' 
            }}
          >
            <h4 className="font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>🎯 Theme-Aware Development</h4>
            <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
              The M1st design system uses an inverted neutral scale where <code 
                className="px-1 rounded"
                style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
              >--neutral-0</code> is white in light theme 
              but black in dark theme. This ensures consistent semantic meaning while providing optimal contrast in both themes.
            </p>
          </div>
        </div>

        {/* 4-Layer CSS System Explanation for UX Team */}
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--page-text-primary)' }}>
            M1st 4-Layer CSS Architecture
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--page-text-secondary)' }}>
            Our design system follows industry-standard 4-layer token architecture used by Adobe Spectrum, 
            Microsoft Fluent, Google Material Design 3, and Shopify Polaris. This ensures scalability, 
            maintainability, and future-proofing.
          </p>

          {/* Layer Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Layer 1: Foundation */}
            <div 
              className="rounded-lg p-6 border"
              style={{ 
                backgroundColor: 'var(--page-danger-subtle)', 
                borderColor: 'var(--page-border)' 
              }}
            >
              <div className="text-center mb-4">
                <div 
                  className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                  style={{ backgroundColor: 'var(--color-danger)' }}
                >
                  1
                </div>
                <h3 className="font-bold" style={{ color: 'var(--page-text-primary)' }}>Foundation</h3>
                <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Raw Values</p>
              </div>
              <div className="space-y-2 text-sm">
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --neutral-100: #f5f5f5
                </div>
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --red-500: #EE3831
                </div>
              </div>
              <div className="mt-3 text-xs" style={{ color: 'var(--page-text-secondary)' }}>
                <strong>Usage:</strong> Never use directly in components
              </div>
            </div>

            {/* Layer 2: Semantic */}
            <div 
              className="rounded-lg p-6 border"
              style={{ 
                backgroundColor: 'var(--page-warning-subtle)', 
                borderColor: 'var(--page-border)' 
              }}
            >
              <div className="text-center mb-4">
                <div 
                  className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                  style={{ backgroundColor: 'var(--color-warning)' }}
                >
                  2
                </div>
                <h3 className="font-bold" style={{ color: 'var(--page-text-primary)' }}>Semantic</h3>
                <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Intent-Based</p>
              </div>
              <div className="space-y-2 text-sm">
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --color-text-primary: var(--neutral-900)
                </div>
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --color-background-primary: var(--neutral-0)
                </div>
              </div>
              <div className="mt-3 text-xs" style={{ color: 'var(--page-text-secondary)' }}>
                <strong>Usage:</strong> For building higher-level tokens
              </div>
            </div>

            {/* Layer 3: Page-Level */}
            <div 
              className="rounded-lg p-6 border"
              style={{ 
                backgroundColor: 'var(--page-info-subtle)', 
                borderColor: 'var(--page-border)' 
              }}
            >
              <div className="text-center mb-4">
                <div 
                  className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                  style={{ backgroundColor: 'var(--color-info)' }}
                >
                  3
                </div>
                <h3 className="font-bold" style={{ color: 'var(--page-text-primary)' }}>Page-Level</h3>
                <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Context-Specific</p>
              </div>
              <div className="space-y-2 text-sm">
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --page-background: var(--color-background-primary)
                </div>
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --page-text-primary: var(--color-text-primary)
                </div>
              </div>
              <div className="mt-3 text-xs" style={{ color: 'var(--page-text-secondary)' }}>
                <strong>Usage:</strong> Ideal for layouts and sections
              </div>
            </div>

            {/* Layer 4: Component */}
            <div 
              className="rounded-lg p-6 border"
              style={{ 
                backgroundColor: 'var(--page-success-subtle)', 
                borderColor: 'var(--page-border)' 
              }}
            >
              <div className="text-center mb-4">
                <div 
                  className="w-12 h-12 mx-auto text-white rounded-full flex items-center justify-center font-bold text-lg mb-2"
                  style={{ backgroundColor: 'var(--color-success)' }}
                >
                  4
                </div>
                <h3 className="font-bold" style={{ color: 'var(--page-text-primary)' }}>Component</h3>
                <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>Specialized</p>
              </div>
              <div className="space-y-2 text-sm">
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --button-primary-bg: var(--page-accent-primary)
                </div>
                <div 
                  className="p-2 rounded font-mono text-xs"
                  style={{ 
                    backgroundColor: 'var(--page-surface-elevated)',
                    color: 'var(--page-text-primary)' 
                  }}
                >
                  --card-shadow: 0 1px 3px rgba(0,0,0,0.1)
                </div>
              </div>
              <div className="mt-3 text-xs" style={{ color: 'var(--page-text-secondary)' }}>
                <strong>Usage:</strong> Only when specialized styling needed
              </div>
            </div>
          </div>

          {/* Industry Standards */}
          <div 
            className="border rounded-lg p-6"
            style={{ 
              backgroundColor: 'var(--page-surface-elevated)', 
              borderColor: 'var(--page-border)' 
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              🏭 Industry Standard Architecture
            </h3>
            <p className="mb-6" style={{ color: 'var(--page-text-secondary)' }}>
              This 4-layer approach is the gold standard used by all major tech companies and design systems:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>Major Design Systems</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-danger)' }}
                    >
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    <div style={{ color: 'var(--page-text-primary)' }}>
                      <strong>Adobe Spectrum:</strong> Global → Alias → Component → Scale
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-info)' }}
                    >
                      <span className="text-white text-xs font-bold">M</span>
                    </div>
                    <div style={{ color: 'var(--page-text-primary)' }}>
                      <strong>Microsoft Fluent:</strong> Global → Alias → Component → Pattern
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-success)' }}
                    >
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    <div style={{ color: 'var(--page-text-primary)' }}>
                      <strong>Google Material:</strong> Reference → System → Component → Custom
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-accent-purple)' }}
                    >
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <div style={{ color: 'var(--page-text-primary)' }}>
                      <strong>Shopify Polaris:</strong> Base → Semantic → Component → Pattern
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3" style={{ color: 'var(--page-text-primary)' }}>Benefits for UX Teams</h4>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                    <span><strong>Consistency:</strong> All colors automatically adapt across themes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                    <span><strong>Scalability:</strong> Easy to add new components without breaking existing ones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                    <span><strong>Maintenance:</strong> Change foundation colors once, updates everywhere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                    <span><strong>Theming:</strong> Light/dark themes work automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: 'var(--color-success)' }} className="mt-1">✓</span>
                    <span><strong>Future-Proof:</strong> Industry standard ensures longevity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practical Examples */}
          <div 
            className="border rounded-lg p-6"
            style={{ 
              backgroundColor: 'var(--page-surface-elevated)', 
              borderColor: 'var(--page-border)' 
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>
              🎯 Practical UX Workflow
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3" style={{ color: 'var(--color-success)' }}>✅ What UX Teams Should Do</h4>
                <div className="space-y-3">
                  <div 
                    className="p-4 rounded border-l-4"
                    style={{ 
                      backgroundColor: 'var(--page-success-subtle)', 
                      borderLeftColor: 'var(--color-success)' 
                    }}
                  >
                    <h5 className="font-medium mb-1" style={{ color: 'var(--page-text-primary)' }}>For Page Layouts</h5>
                    <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Use Layer 3 (Page-level) tokens:</p>
                    <code 
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
                    >--page-background</code>
                    <code 
                      className="text-xs px-2 py-1 rounded ml-2"
                      style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
                    >--page-text-primary</code>
                  </div>
                  
                  <div 
                    className="p-4 rounded border-l-4"
                    style={{ 
                      backgroundColor: 'var(--page-info-subtle)', 
                      borderLeftColor: 'var(--color-info)' 
                    }}
                  >
                    <h5 className="font-medium mb-1" style={{ color: 'var(--page-text-primary)' }}>For Components</h5>
                    <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Use existing UI components or Layer 2 (Semantic) tokens:</p>
                    <code 
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
                    >{'<Button variant="primary">'}</code>
                  </div>
                  
                  <div 
                    className="p-4 rounded border-l-4"
                    style={{ 
                      backgroundColor: 'var(--page-surface)', 
                      borderLeftColor: 'var(--color-accent-purple)' 
                    }}
                  >
                    <h5 className="font-medium mb-1" style={{ color: 'var(--page-text-primary)' }}>For Brand Requirements</h5>
                    <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Reference Layer 1 values in design specs:</p>
                    <code 
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
                    >#EE3831 (M1st brand red)</code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3" style={{ color: 'var(--color-danger)' }}>❌ What to Avoid</h4>
                <div className="space-y-3">
                  <div 
                    className="p-4 rounded border-l-4"
                    style={{ 
                      backgroundColor: 'var(--page-danger-subtle)', 
                      borderLeftColor: 'var(--color-danger)' 
                    }}
                  >
                    <h5 className="font-medium mb-1" style={{ color: 'var(--page-text-primary)' }}>Don't Use Raw Values</h5>
                    <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Never use hex codes or raw values directly:</p>
                    <code 
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
                    >color: #171717 ❌</code>
                  </div>
                  
                  <div 
                    className="p-4 rounded border-l-4"
                    style={{ 
                      backgroundColor: 'var(--page-warning-subtle)', 
                      borderLeftColor: 'var(--color-warning)' 
                    }}
                  >
                    <h5 className="font-medium mb-1" style={{ color: 'var(--page-text-primary)' }}>Don't Skip Layers</h5>
                    <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Don't use foundation tokens in components:</p>
                    <code 
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
                    >var(--neutral-900) ❌</code>
                  </div>
                  
                  <div 
                    className="p-4 rounded border-l-4"
                    style={{ 
                      backgroundColor: 'var(--page-warning-subtle)', 
                      borderLeftColor: 'var(--color-warning)' 
                    }}
                  >
                    <h5 className="font-medium mb-1" style={{ color: 'var(--page-text-primary)' }}>Don't Create One-Off Tokens</h5>
                    <p className="text-sm mb-2" style={{ color: 'var(--page-text-secondary)' }}>Avoid component tokens for single-use values:</p>
                    <code 
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: 'var(--page-surface-elevated)', color: 'var(--page-text-primary)' }}
                    >--my-special-button-color ❌</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div 
            className="rounded-lg p-6"
            style={{ 
              backgroundColor: 'var(--page-surface-elevated)', 
              color: 'var(--page-text-primary)' 
            }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--page-text-primary)' }}>🚀 Quick Reference for UX Teams</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>Most Common Tokens</h4>
                <div className="space-y-1 text-sm font-mono" style={{ color: 'var(--page-text-secondary)' }}>
                  <div>--page-background</div>
                  <div>--page-text-primary</div>
                  <div>--page-text-secondary</div>
                  <div>--page-surface</div>
                  <div>--page-border</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>Status Colors</h4>
                <div className="space-y-1 text-sm font-mono" style={{ color: 'var(--page-text-secondary)' }}>
                  <div>--color-success</div>
                  <div>--color-warning</div>
                  <div>--color-danger</div>
                  <div>--color-info</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'var(--page-text-primary)' }}>Interactive States</h4>
                <div className="space-y-1 text-sm font-mono" style={{ color: 'var(--page-text-secondary)' }}>
                  <div>--page-hover</div>
                  <div>--page-active</div>
                  <div>--page-focus</div>
                  <div>--page-accent-primary</div>
                </div>
              </div>
            </div>

            <div 
              className="mt-6 p-4 rounded"
              style={{ 
                backgroundColor: 'var(--page-surface)', 
                color: 'var(--page-text-primary)' 
              }}
            >
              <h4 className="font-medium mb-2" style={{ color: 'var(--page-text-primary)' }}>💡 Pro Tip for UX Teams</h4>
              <p className="text-sm" style={{ color: 'var(--page-text-secondary)' }}>
                When designing, think in terms of <strong>semantic meaning</strong> rather than specific colors. 
                Instead of "make this red", think "this should indicate danger" or "this should be the primary action".
                This approach ensures your designs work perfectly across all themes and future brand updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ColorSystemPage;
