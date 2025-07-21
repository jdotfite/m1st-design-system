import React from 'react';
import { Card } from './ui/Card/Card';
import './GetStarted.css';

const GetStarted: React.FC = () => {
  return (
    <section className="get-started py-xl">
      <div className="max-w-content mx-auto px-l">
        <div className="get-started-header text-center">
          <h2 className="section-title">Start building</h2>
          <p className="section-subtitle">
            Choose the path that suits your needs to start building with M1st.
          </p>
        </div>

        <div className="get-started-grid grid grid-2">
          <Card className="get-started-card">
            <div className="card-visual">
              <div className="visual-placeholder designer">
                <span className="visual-icon">🎨</span>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">For designers</h3>
              <p className="card-description">
                Get started with designing accessible and intuitive interfaces. Use our 
                visual foundation, UX guidelines, and Figma resources to reduce the time 
                needed to get from project inception to wireframe and prototype.
              </p>
              <a 
                href="/get-started/design" 
                className="inline-flex items-center px-xl py-m rounded font-semibold transition-colors"
                style={{
                  backgroundColor: 'var(--button-primary-bg)',
                  color: 'var(--button-primary-text)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--button-primary-bg-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--button-primary-bg)';
                }}
              >
                Get started
              </a>
            </div>
          </Card>

          <Card className="get-started-card">
            <div className="card-visual">
              <div className="visual-placeholder developer">
                <span className="visual-icon">💻</span>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">For developers</h3>
              <p className="card-description">
                Integrate with our system to start developing. Use our accessible and 
                responsive React components to quickly create high quality interfaces. 
                Install packages, check out interactive playgrounds, and see demos.
              </p>
              <a 
                href="/get-started/dev" 
                className="inline-flex items-center px-xl py-m rounded font-semibold transition-colors"
                style={{
                  backgroundColor: 'var(--button-primary-bg)',
                  color: 'var(--button-primary-text)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--button-primary-bg-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--button-primary-bg)';
                }}
              >
                Get started
              </a>
            </div>
          </Card>
        </div>

        <div className="additional-info">
          <div className="info-grid grid grid-3">
            <div className="info-item">
              <h4 className="info-title">Meet M1st</h4>
              <p className="info-description">
                M1st design system to create web applications. 
                Built for modern applications with accessibility, responsiveness, 
                and user experience at its core.
              </p>
            </div>
            <div className="info-item">
              <h4 className="info-title">Get familiar with the system</h4>
              <p className="info-description">
                Each component has a playground where designers and developers can 
                see how the component behaves, along with sample code and extensive 
                guidance on accessibility options.
              </p>
            </div>
            <div className="info-item">
              <h4 className="info-title">Open Source</h4>
              <p className="info-description">
                We publish our source code on GitHub under the Apache 2.0 License. 
                You can contribute, open issues, ask questions, and help us improve 
                the system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
