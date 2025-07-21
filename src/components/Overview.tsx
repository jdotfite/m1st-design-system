import React from 'react';
import { Card } from './ui/Card/Card';
import './Overview.css';

const Overview: React.FC = () => {
  const stats = [
    { number: '89', label: 'Components' },
    { number: '58', label: 'Patterns' },
    { number: '33', label: 'Demos' }
  ];

  const features = [
    {
      title: 'Foundation',
      description: 'Learn about the visual foundation of our design system, such as colors, spacing, and iconography.',
      icon: '🎨'
    },
    {
      title: 'Components',
      description: 'Discover our library of components. Built with React, they are tested, accessible, and responsive.',
      icon: '🧩'
    },
    {
      title: 'Patterns',
      description: 'Explore our guidelines and best practices for building user experiences.',
      icon: '📋'
    },
    {
      title: 'Demos',
      description: 'View M1st in action by browsing through our demos.',
      icon: '🚀'
    }
  ];

  const coreFeatures = [
    {
      title: 'Light/Dark mode',
      description: 'Support for both light and dark themes',
      visual: '🌓'
    },
    {
      title: 'Theming',
      description: 'Customizable theme variants',
      visual: '🎨'
    },
    {
      title: 'Accessibility',
      description: 'Built with accessibility in mind',
      visual: '♿'
    },
    {
      title: 'Responsiveness',
      description: 'Mobile-first responsive design',
      visual: '📱'
    }
  ];

  return (
    <section className="overview section">
      <div className="container">
        {/* Stats Section */}
        <div className="overview-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="features-grid grid grid-2">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Core Features Section */}
        <div className="core-features">
          <h2 className="section-title text-center">Core features</h2>
          <p className="section-subtitle text-center">
            M1st supports various visual modes, accessibility, responsive design, and
            broad browser coverage. Services built with M1st are designed for all
            customers, regardless of browser, screen size, or ability.
          </p>
          <div className="core-features-grid grid grid-2">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="core-feature-item">
                <div className="core-feature-visual">{feature.visual}</div>
                <div className="core-feature-content">
                  <h4 className="core-feature-title">{feature.title}</h4>
                  <p className="core-feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
