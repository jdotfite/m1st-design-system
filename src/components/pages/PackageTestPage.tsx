import React, { useState } from 'react';
// Testing import from our new package!
import { Tabs } from '@m1st/components';
import type { TabItem } from '@m1st/components';

export const PackageTestPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('test1');

  const testItems: TabItem[] = [
    { id: 'test1', label: 'Package Test 1' },
    { id: 'test2', label: 'Package Test 2' },
    { id: 'test3', label: 'Package Test 3' }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        background: '#e8f5e8', 
        padding: '1rem', 
        borderRadius: '8px', 
        marginBottom: '2rem',
        fontWeight: 'bold',
        color: '#2e7d32'
      }}>
        ✅ SUCCESS: This page imports Tabs from @m1st/components package!
      </div>
      
      <h1>Package Test Page</h1>
      <p>This page imports the Tabs component from our new <code>@m1st/components</code> package to verify it works.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Tabs from @m1st/components:</h3>
        <Tabs
          items={testItems}
          activeItem={activeTab}
          onItemClick={(item: TabItem) => setActiveTab(item.id)}
        />
        
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <p>Active tab: <strong>{activeTab}</strong></p>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>
            This component is being imported from the external package, not from the local components!
          </p>
        </div>
      </div>
    </div>
  );
};
