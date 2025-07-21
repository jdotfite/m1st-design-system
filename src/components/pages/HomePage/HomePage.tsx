import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Badge } from '../../ui';
import { useTheme } from '../../../contexts';

// Component statistics (dynamically calculated based on actual components)
const COMPONENTS_COUNT = 12; // Alert, Badge, Breadcrumb, Button, Card, Checkbox, Input, Modal, ProgressBar, SidebarToggle, Spinner, ThemeSwitch
const PATTERNS_COUNT = 0;    // To be added
const DEMOS_COUNT = 3;       // Current demos: Component preview, Theme switching, Button variants

const HomePage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
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
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  M1st Design System
                </h1>
                <p className="text-xl lg:text-2xl leading-relaxed mb-8" 
                   style={{ color: 'var(--page-text-secondary)' }}>
                  An enterprise-grade design system for banking applications.
                  M1st provides interface guidelines, components, design tokens, 
                  and development tools for building secure, accessible, and 
                  professional financial experiences.
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
                <div className="flex items-center gap-3" style={{ color: 'var(--page-text-muted)' }}>
                  <span className="text-sm">Current theme:</span>
                  <Badge variant={theme === 'dark' ? 'warning' : 'success'}>
                    {theme}
                  </Badge>
                  <button 
                    onClick={toggleTheme}
                    className="text-sm underline hover:no-underline"
                    style={{ color: 'var(--color-accent-primary)' }}
                  >
                    Switch to {theme === 'dark' ? 'light' : 'dark'}
                  </button>
                </div>
              </div>

              {/* Right Content - Component Preview */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="rounded-xl p-6 backdrop-blur-sm border" 
                       style={{ 
                         backgroundColor: 'var(--page-surface-elevated)',
                         borderColor: 'var(--page-border)'
                       }}>
                    <h3 className="text-lg font-semibold mb-4" 
                        style={{ color: 'var(--page-text-primary)' }}>
                      Live Component Preview
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-2 flex-wrap">
                        <Button variant="primary" size="sm">Primary</Button>
                        <Button variant="secondary" size="sm">Secondary</Button>
                        <Button variant="ghost" size="sm">Ghost</Button>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <Button variant="success" size="sm">Success</Button>
                        <Button variant="warning" size="sm">Warning</Button>
                        <Button variant="danger" size="sm">Danger</Button>
                      </div>
                    </div>
                  </div>
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
              <Card variant="outlined" className="h-full hover:shadow-lg transition-all duration-200 group-hover:border-opacity-50" 
                    style={{ borderColor: 'var(--color-accent-primary)' }}>
                <CardBody className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                         style={{ backgroundColor: 'var(--color-accent-primary)' }}>
                      🎨
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" 
                      style={{ color: 'var(--page-text-primary)' }}>
                    Foundation
                  </h3>
                  <p className="text-sm leading-relaxed" 
                     style={{ color: 'var(--page-text-secondary)' }}>
                    Learn about our 4-layer token architecture, design principles, 
                    and enterprise-grade foundation system.
                  </p>
                </CardBody>
              </Card>
            </Link>

            {/* Components Card */}
            <Link to="/components" className="group">
              <Card variant="outlined" className="h-full hover:shadow-lg transition-all duration-200 group-hover:border-opacity-50"
                    style={{ borderColor: 'var(--color-success)' }}>
                <CardBody className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold"
                         style={{ backgroundColor: 'var(--color-success)' }}>
                      🧩
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" 
                      style={{ color: 'var(--page-text-primary)' }}>
                    Components
                  </h3>
                  <p className="text-sm leading-relaxed" 
                     style={{ color: 'var(--page-text-secondary)' }}>
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
                <h3 className="text-lg font-semibold mb-2" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  Patterns
                  <Badge variant="warning" className="ml-2 text-xs">Coming Soon</Badge>
                </h3>
                <p className="text-sm leading-relaxed" 
                   style={{ color: 'var(--page-text-secondary)' }}>
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
                <h3 className="text-lg font-semibold mb-2" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  Demos
                  <Badge variant="info" className="ml-2 text-xs">Coming Soon</Badge>
                </h3>                  <p className="text-sm leading-relaxed" 
                     style={{ color: 'var(--page-text-secondary)' }}>
                    View M1st in action by browsing through our collection 
                    of real-world banking application demos.
                  </p>
              </CardBody>
            </Card>

          </div>
        </div>
      </section>

      {/* About M1st Section */}
      <section className="px-8 py-16" style={{ backgroundColor: 'var(--page-surface)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" 
              style={{ color: 'var(--page-text-primary)' }}>
            Meet M1st
          </h2>
          <p className="text-lg leading-relaxed mb-8" 
             style={{ color: 'var(--page-text-secondary)' }}>
            M1st is an enterprise design system developed specifically for banking applications. 
            Our system follows industry standards used by Adobe, Microsoft, and Google, featuring 
            a robust 4-layer token architecture, comprehensive theming, and accessibility-first components. 
            Built for teams who need to deliver consistent, professional, and secure financial interfaces.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2" 
                   style={{ color: 'var(--color-accent-primary)' }}>
                4-Layer
              </div>
              <div className="text-sm" 
                   style={{ color: 'var(--page-text-secondary)' }}>
                Token Architecture
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" 
                   style={{ color: 'var(--color-success)' }}>
                Enterprise
              </div>
              <div className="text-sm" 
                   style={{ color: 'var(--page-text-secondary)' }}>
                Grade Standards
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" 
                   style={{ color: 'var(--color-info)' }}>
                Banking
              </div>
              <div className="text-sm" 
                   style={{ color: 'var(--page-text-secondary)' }}>
                Focused Design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Overview Stats */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" 
              style={{ color: 'var(--page-text-primary)' }}>
            System Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Components Count */}
            <div className="flex flex-col items-center">
              <div className="text-6xl font-bold mb-2" 
                   style={{ color: 'var(--color-success)' }}>
                {COMPONENTS_COUNT}
              </div>
              <Link to="/components" 
                    className="text-lg font-medium hover:underline" 
                    style={{ color: 'var(--color-success)' }}>
                Components
              </Link>
              <p className="text-sm mt-2" 
                 style={{ color: 'var(--page-text-muted)' }}>
                Production-ready React components
              </p>
            </div>

            {/* Patterns Count */}
            <div className="flex flex-col items-center opacity-60">
              <div className="text-6xl font-bold mb-2" 
                   style={{ color: 'var(--color-warning)' }}>
                {PATTERNS_COUNT}
              </div>
              <div className="text-lg font-medium" 
                   style={{ color: 'var(--color-warning)' }}>
                Patterns
              </div>
              <p className="text-sm mt-2" 
                 style={{ color: 'var(--page-text-muted)' }}>
                Design patterns and guidelines
              </p>
            </div>

            {/* Demos Count */}
            <div className="flex flex-col items-center opacity-60">
              <div className="text-6xl font-bold mb-2" 
                   style={{ color: 'var(--color-info)' }}>
                {DEMOS_COUNT}
              </div>
              <div className="text-lg font-medium" 
                   style={{ color: 'var(--color-info)' }}>
                Demos
              </div>
              <p className="text-sm mt-2" 
                 style={{ color: 'var(--page-text-muted)' }}>
                Live examples and showcases
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="px-8 py-16" style={{ backgroundColor: 'var(--page-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" 
              style={{ color: 'var(--page-text-primary)' }}>
            Core Features
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto" 
             style={{ color: 'var(--page-text-secondary)' }}>
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
                <h3 className="font-semibold mb-2" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  Light/Dark Mode
                </h3>
                <p className="text-sm" 
                   style={{ color: 'var(--page-text-secondary)' }}>
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
                <h3 className="font-semibold mb-2" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  Design Tokens
                </h3>
                <p className="text-sm" 
                   style={{ color: 'var(--page-text-secondary)' }}>
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
                <h3 className="font-semibold mb-2" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  Accessibility
                </h3>
                <p className="text-sm" 
                   style={{ color: 'var(--page-text-secondary)' }}>
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
                <h3 className="font-semibold mb-2" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  Responsive Design
                </h3>
                <p className="text-sm" 
                   style={{ color: 'var(--page-text-secondary)' }}>
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
          <h2 className="text-3xl font-bold text-center mb-12" 
              style={{ color: 'var(--page-text-primary)' }}>
            Start Building
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* For Designers */}
            <Card variant="outlined">
              <CardBody className="p-8">
                <h3 className="text-xl font-bold mb-4" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  For Designers
                </h3>
                <p className="mb-6" 
                   style={{ color: 'var(--page-text-secondary)' }}>
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
                <h3 className="text-xl font-bold mb-4" 
                    style={{ color: 'var(--page-text-primary)' }}>
                  For Developers
                </h3>
                <p className="mb-6" 
                   style={{ color: 'var(--page-text-secondary)' }}>
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
  );
};

export default HomePage;
