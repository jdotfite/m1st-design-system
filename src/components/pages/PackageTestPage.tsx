import React, { useState } from 'react';
// Using local component instead of external package
import { Tabs, type TabItem } from '../ui/Tabs';

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
        background: '#fff3cd', 
        padding: '1rem', 
        borderRadius: '8px', 
        marginBottom: '2rem',
        fontWeight: 'bold',
        color: '#856404',
        border: '1px solid #ffeaa7'
      }}>
        ⚠️ UPDATED: This page now uses local Tabs component instead of external package
      </div>
      
      <h1>Package Test Page</h1>
      <p>This page imports the Tabs component from the local <code>src/components/ui/Tabs</code> module.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Tabs from local components:</h3>
        <Tabs
          items={testItems}
          activeItem={activeTab}
          onItemClick={(item: TabItem) => setActiveTab(item.id)}
        />
        
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '4px' }}>
          <p>Active tab: <strong>{activeTab}</strong></p>
          <p style={{ fontSize: '0.875rem', color: '#666' }}>
            This component is being imported from the local component library, not from an external package.
          </p>
        </div>
      </div>
    </div>
  );
};
