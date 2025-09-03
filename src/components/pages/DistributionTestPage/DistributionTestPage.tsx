import React, { useState } from 'react';

export const DistributionTestPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('monolithic');

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Distribution Testing
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Test tabs component using different CSS distributions to ensure consistency.
        </p>
        
        {/* Toggle between distributions */}
        <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <input 
              type="radio" 
              name="distribution" 
              value="monolithic"
              checked={activeTab === 'monolithic'}
              onChange={(e) => setActiveTab(e.target.value)}
            />
            Monolithic CSS (all components + tokens)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="radio" 
              name="distribution" 
              value="incremental"
              checked={activeTab === 'incremental'}
              onChange={(e) => setActiveTab(e.target.value)}
            />
            Incremental CSS (tabs component only)
          </label>
        </div>
      </div>

      {/* Dynamic CSS loading */}
      {activeTab === 'monolithic' && (
        <link rel="stylesheet" href="/dist/monolithic-clean.css" />
      )}
      {activeTab === 'incremental' && (
        <link rel="stylesheet" href="/dist/incremental/components/tabs.css" />
      )}

      {/* Test Content */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          Testing: {activeTab === 'monolithic' ? 'Monolithic' : 'Incremental'} Distribution
        </h2>
        
        {/* Basic Tabs Example */}
        <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Basic Tabs</h3>
          <div className="tabs">
            <ul className="tabs__list">
              <li className="tabs__item">
                <button className="tabs__button tabs__button--active">Overview</button>
              </li>
              <li className="tabs__item">
                <button className="tabs__button">Features</button>
              </li>
              <li className="tabs__item">
                <button className="tabs__button">Guidelines</button>
              </li>
              <li className="tabs__item">
                <button className="tabs__button">Examples</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Visual Inspection Guide */}
        <div style={{ padding: '1rem', background: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '8px' }}>
          <h4 style={{ marginBottom: '0.5rem', fontWeight: '600' }}>Expected Visual</h4>
          <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
            <li>Active tab should have a gray underline (not red)</li>
            <li>Text should be readable with proper contrast</li>
            <li>Hover states should work smoothly</li>
            <li>Both distributions should look identical</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
