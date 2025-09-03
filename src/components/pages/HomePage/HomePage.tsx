import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Badge } from '../../ui';
import { PageTemplate } from '../../layout';
import { useTheme } from '../../../contexts';
import { useDocumentTitle } from '../../../utils';
import figmaDesignImage from '../../../assets/figma-design.png';

// Component statistics (dynamically calculated based on actual components)
const COMPONENTS_COUNT = 12; // Alert, Badge, Breadcrumb, Button, Card, Checkbox, Input, Modal, ProgressBar, SidebarToggle, Spinner, ThemeSwitch
const PATTERNS_COUNT = 0;    // To be added
const DEMOS_COUNT = 3;       // Current demos: Component preview, Theme switching, Button variants

const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Set the document title to just the base title for home page
  useDocumentTitle('');

  return (
    <PageTemplate
      showSidebar={false}
      sidebarType="none"
      showFooter={true}
    >
      <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full" 
               style={{ backgroundColor: 'var(--color-accent-primary)' }}></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full" 
               style={{ backgroundColor: 'var(--color-success)' }}></div>
        </div>
        
        <div className="relative z-10 px-8 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div>
                <h1 className="font-size-headings leading-tight mb-6 text-[var(--page-text-primary)]">
                  M1st Design System
                </h1>
                <p className="text-lg lg:text-xl leading-relaxed mb-8 text-[var(--page-text-secondary)]">
                  A comprehensive design system powering Members 1st Federal Credit Union's 
                  digital platforms. M1st provides interface guidelines, components, design tokens, 
                  and development tools for building secure, accessible, and professional 
                  member experiences across marketing websites and digital banking.
                </p>
                
                <div className="flex gap-4 flex-wrap mb-8">
                  <Link to="/foundation">
                    <Button variant="primary" size="lg">
                      Get started
                    </Button>
                  </Link>
                  <Link to="/components">
                    <Button variant="secondary" size="lg">
                      View components
                    </Button>
                  </Link>
                </div>

                {/* Theme toggle demonstration */}
                <div className="flex items-center gap-3 text-[var(--page-text-muted)]">
                  <span className="text-sm">Current theme:</span>
                  <Badge variant={theme === 'dark' ? 'warning' : 'success'}>
                    {theme}
                  </Badge>
                  <button 
                    onClick={toggleTheme}
                    className="text-sm underline hover:no-underline text-[var(--color-accent-primary)]"
                  >
                    Switch to {theme === 'dark' ? 'light' : 'dark'}
                  </button>
                </div>
              </div>

              {/* Right Content - Figma Design Kit */}
              <div className="relative">
                <div className="relative z-10">
                  <a 
                    href="https://www.figma.com/design/mvnAx5lkJD3CDXWCC7l3f0/Digital-Design-System--draft-?node-id=699-3970&t=0WhmCvL22HYxFinM-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card variant="outlined" className="hover:shadow-lg transition-all duration-200 group-hover:border-opacity-70">
                      <CardBody className="p-0" style={{ backgroundColor: 'var(--page-surface)' }}>
                        <img 
                          src={figmaDesignImage}
                          alt="M1st Design System Figma UI Kit"
                          className="w-full h-auto rounded-lg pb-4"
                          style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                        <div className="px-3">
                          <h3 className="heading-s mb-2 text-[var(--page-text-primary)]">
                            Figma UI Kit
                          </h3>
                          <p className="text-sm text-[var(--page-text-secondary)] pb-0">
                            Design with our Figma library featuring ready-to-use components and symbols
                          </p>
                        </div>
                      </CardBody>
                    </Card>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Foundation Card */}
            <Link to="/foundation" className="group">
              <Card variant="outlined" className="h-full hover:shadow-lg transition-all duration-200 group-hover:border-opacity-50">
                <CardBody className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                         style={{ backgroundColor: 'var(--color-accent-primary)' }}>
                      🎨
                    </div>
                  </div>
                  <h3 className="heading-s mb-2 text-[var(--page-text-primary)]">
                    Foundation
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--page-text-secondary)]">
                    Learn about our 4-layer token architecture, design principles, 
                    and enterprise-grade foundation system.
                  </p>
                </CardBody>
              </Card>
            </Link>

            {/* Components Card */}
            <Link to="/components" className="group">
              <Card variant="outlined" className="h-full hover:shadow-lg transition-all duration-200 group-hover:border-opacity-50">
                <CardBody className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                         style={{ backgroundColor: 'var(--color-success)' }}>
                      🧩
                    </div>
                  </div>
                  <h3 className="heading-s mb-2 text-[var(--page-text-primary)]">
                    Components
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--page-text-secondary)]">
                    Discover our library of production-ready components, 
                    built with React and fully responsive design.
                  </p>
                </CardBody>
              </Card>
            </Link>

            {/* Patterns Card */}
            <Card variant="outlined" className="h-full opacity-60 cursor-not-allowed">
              <CardBody className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                       style={{ backgroundColor: 'var(--color-warning)' }}>
                    📐
                  </div>
                </div>
                <h3 className="heading-s mb-2 text-[var(--page-text-primary)]">
                  Patterns
                </h3>
                <p className="text-sm leading-relaxed text-[var(--page-text-secondary)]">
                  Explore our guidelines and best practices for building 
                  user interface patterns and workflows.
                </p>
              </CardBody>
            </Card>

            {/* Demos Card */}
            <Card variant="outlined" className="h-full opacity-60 cursor-not-allowed">
              <CardBody className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                       style={{ backgroundColor: 'var(--color-info)' }}>
                    🚀
                  </div>
                </div>
                <h3 className="heading-s mb-2 text-[var(--page-text-primary)]">
                  Demos
                </h3>
                <p className="text-sm leading-relaxed text-[var(--page-text-secondary)]">
                    View M1st in action by browsing through our collection 
                    of real-world banking application demos.
                  </p>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>

  {/* Removed 'Meet M1st' section per request */}

      {/* System Overview Stats */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-l text-center mb-10 text-[var(--page-text-primary)]">
            System Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Components Count */}
    <div className="flex flex-col items-center">
              <div className="heading-l leading-none mb-1 text-[var(--color-success)]">
                {COMPONENTS_COUNT}
              </div>
      <Link to="/components" 
        className="text-heading-xs font-semibold mb-1 text-[var(--color-success)] hover:underline">
                Components
              </Link>
      <p className="text-body-sm text-[var(--page-text-secondary)] max-w-[14rem] leading-snug">
                Production-ready React components
              </p>
            </div>

            {/* Patterns Count */}
            <div className="flex flex-col items-center opacity-60">
              <div className="heading-l leading-none mb-1 text-[var(--color-warning)]">
                {PATTERNS_COUNT}
              </div>
              <div className="text-heading-xs font-semibold mb-1 text-[var(--color-warning)]">
                Patterns
              </div>
              <p className="text-body-sm text-[var(--page-text-secondary)] max-w-[14rem] leading-snug">
                Design patterns and guidelines
              </p>
            </div>

            {/* Demos Count */}
            <div className="flex flex-col items-center opacity-60">
              <div className="heading-l leading-none mb-1 text-[var(--color-info)]">
                {DEMOS_COUNT}
              </div>
              <div className="text-heading-xs font-semibold mb-1 text-[var(--color-info)]">
                Demos
              </div>
              <p className="text-body-sm text-[var(--page-text-secondary)] max-w-[14rem] leading-snug">
                Live examples and showcases
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Features Section */}
  <section className="full-bleed full-bleed-padding py-16" style={{ backgroundColor: 'var(--page-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-l text-center mb-4 text-[var(--page-text-primary)]">
            Core Features
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-[var(--page-text-secondary)]">
            M1st supports enterprise requirements including accessibility, responsive design, 
            and comprehensive theming. Components built with M1st are designed for banking 
            applications with security and professionalism as core principles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Light/Dark Mode */}
            <Card variant="outlined" className="text-center">
              <CardBody className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl"
                     style={{ backgroundColor: 'var(--color-background-tertiary)' }}>
                  🌗
                </div>
                <h3 className="heading-s mb-2 text-[var(--page-text-primary)] normal-case tracking-wide">
                  Light/Dark Mode
                </h3>
                <p className="text-sm text-[var(--page-text-secondary)]">
                  Seamless theme switching with 4-layer token architecture
                </p>
              </CardBody>
            </Card>

            {/* Token System */}
            <Card variant="outlined" className="text-center">
              <CardBody className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl"
                     style={{ backgroundColor: 'var(--color-background-tertiary)' }}>
                  🎨
                </div>
                <h3 className="heading-s mb-2 text-[var(--page-text-primary)] normal-case tracking-wide">
                  Design Tokens
                </h3>
                <p className="text-sm text-[var(--page-text-secondary)]">
                  Enterprise-grade 4-layer token system for scalability
                </p>
              </CardBody>
            </Card>

            {/* Accessibility */}
            <Card variant="outlined" className="text-center">
              <CardBody className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl"
                     style={{ backgroundColor: 'var(--color-background-tertiary)' }}>
                  ♿
                </div>
                <h3 className="heading-s mb-2 text-[var(--page-text-primary)] normal-case tracking-wide">
                  Accessibility
                </h3>
                <p className="text-sm text-[var(--page-text-secondary)]">
                  WCAG compliant components for inclusive banking experiences
                </p>
              </CardBody>
            </Card>

            {/* Responsive */}
            <Card variant="outlined" className="text-center">
              <CardBody className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center text-2xl"
                     style={{ backgroundColor: 'var(--color-background-tertiary)' }}>
                  📱
                </div>
                <h3 className="heading-s mb-2 text-[var(--page-text-primary)] normal-case tracking-wide">
                  Responsive Design
                </h3>
                <p className="text-sm text-[var(--page-text-secondary)]">
                  Mobile-first components that work across all devices
                </p>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-l text-center mb-12 text-[var(--page-text-primary)]">
            Start Building
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* For Designers */}
            <Card variant="outlined">
              <CardBody className="p-8">
                <h3 className="heading-m mb-4 text-[var(--page-text-primary)]">
                  For Designers
                </h3>
                <p className="mb-6 text-[var(--page-text-secondary)]">
                  Get started with designing accessible and intuitive banking interfaces. 
                  Use our foundation tokens, guidelines, and Figma resources to 
                  reduce design time and maintain consistency.
                </p>
                <Link to="/foundation">
                  <Button variant="primary" className="w-full">
                    View Foundation
                  </Button>
                </Link>
              </CardBody>
            </Card>

            {/* For Developers */}
            <Card variant="outlined">
              <CardBody className="p-8">
                <h3 className="heading-m mb-4 text-[var(--page-text-primary)]">
                  For Developers
                </h3>
                <p className="mb-6 text-[var(--page-text-secondary)]">
                  Integrate with our component library for React development. 
                  Use our accessible and responsive components to quickly 
                  create professional banking interfaces.
                </p>
                <Link to="/components">
                  <Button variant="primary" className="w-full">
                    Browse Components
                  </Button>
                </Link>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>

      </div>
    </PageTemplate>
  );
};

export default HomePage;
