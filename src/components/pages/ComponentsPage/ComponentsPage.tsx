import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageTemplate } from '../../layout';
import { BreadcrumbItem } from '../../ui';
import { useDocumentTitle } from '../../../utils';
import '../../components.css';

interface Component {
  name: string;
  description: string;
  category: string;
  status: 'stable' | 'beta' | 'experimental';
  image?: string;
}

// Sample component data - includes all stable components
const COMPONENTS: Component[] = [
  {
    name: 'Button',
    description: 'A comprehensive button system with 6 variants (primary, secondary, light, outline, ghost, danger) that work seamlessly across 4 background types. Features almost-black/white theming with Bootstrap-like light colors.',
    category: 'Form Controls',
    status: 'stable'
  },
  {
    name: 'LoadingSpinner',
    description: 'M1st branded loading animations for indicating loading states and processing operations. Features logo variant with pulsing animation and simple circular spinner.',
    category: 'Feedback',
    status: 'stable'
  },
  {
    name: 'Modal',
    description: 'A versatile modal dialog component for displaying content in a focused overlay. Supports multiple sizes, variants, and interaction patterns with accessibility and responsive design built-in.',
    category: 'Overlay',
    status: 'stable'
  },
  {
    name: 'Tabs',
    description: 'Flexible tab navigation component with multiple variants (default, underline, pills, card) and advanced features like editable tabs, animations, and content panels.',
    category: 'Navigation',
    status: 'stable'
  }
];

const CATEGORIES = [
  'All',
  'Form Controls',
  'Feedback',
  'Navigation',
  'Overlay'
];

const STATUS_COLORS = {
  stable: 'bg-green-100 text-green-800',
  beta: 'bg-yellow-100 text-yellow-800', 
  experimental: 'bg-orange-100 text-orange-800'
};

const ComponentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Set the document title
  useDocumentTitle('Components');

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'M1st Design System', href: '/' },
    { label: 'Components', isActive: true }
  ];

  // Function to handle component navigation
  const handleComponentClick = (componentName: string) => {
    if (componentName === 'Button') {
      navigate('/component/button');
    } else if (componentName === 'LoadingSpinner') {
      navigate('/component/loading-spinner');
    } else if (componentName === 'Modal') {
      navigate('/component/modal');
    } else if (componentName === 'Tabs') {
      navigate('/component/tabs');
    }
  };

  const filteredComponents = useMemo(() => {
    return COMPONENTS.filter(component => {
      const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           component.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || component.status === selectedStatus;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  return (
    <PageTemplate
      showSidebar={true}
      sidebarType="components"
      showFooter={true}
      breadcrumbs={breadcrumbs}
      title="Components"
      description="Browse our collection of reusable UI components. Each component is designed with accessibility and consistency in mind."
    >
      {/* Filters and Search */}
      <div 
        className="border-b p-6 mb-8"
        style={{ 
          borderColor: 'var(--page-border)',
          backgroundColor: 'var(--page-surface)' 
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label 
              htmlFor="search" 
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--page-text-primary)' }}
            >
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              style={{
                backgroundColor: 'var(--page-surface)',
                borderColor: 'var(--page-border)',
                color: 'var(--page-text-primary)'
              }}
            />
          </div>

          {/* Category Filter */}
          <div>
            <label 
              htmlFor="category" 
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--page-text-primary)' }}
            >
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              style={{
                backgroundColor: 'var(--page-surface)',
                borderColor: 'var(--page-border)',
                color: 'var(--page-text-primary)'
              }}
            >
              {CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label 
              htmlFor="status" 
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--page-text-primary)' }}
            >
              Status
            </label>
            <select
              id="status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              style={{
                backgroundColor: 'var(--page-surface)',
                borderColor: 'var(--page-border)',
                color: 'var(--page-text-primary)'
              }}
            >
              <option value="All">All</option>
              <option value="stable">Stable</option>
              <option value="beta">Beta</option>
              <option value="experimental">Experimental</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <p 
              className="text-sm"
              style={{ color: 'var(--page-text-secondary)' }}
            >
              {filteredComponents.length} component{filteredComponents.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <div
            key={component.name}
            className="rounded-lg border p-6 cursor-pointer transition-all duration-200 hover:shadow-md"
            style={{
              backgroundColor: 'var(--page-surface)',
              borderColor: 'var(--page-border)'
            }}
            onClick={() => handleComponentClick(component.name)}
          >
            {/* Component Header */}
            <div className="flex items-start justify-between mb-4">
              <h3 
                className="text-xl font-semibold"
                style={{ color: 'var(--page-text-primary)' }}
              >
                {component.name}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[component.status]}`}>
                {component.status}
              </span>
            </div>

            {/* Component Description */}
            <p 
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--page-text-secondary)' }}
            >
              {component.description}
            </p>

            {/* Component Category */}
            <div className="flex items-center justify-between">
              <span 
                className="text-xs"
                style={{ color: 'var(--page-text-muted)' }}
              >
                {component.category}
              </span>
              <span 
                className="text-sm font-medium"
                style={{ color: 'var(--color-accent-primary)' }}
              >
                View Details →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p 
            className="text-lg mb-2"
            style={{ color: 'var(--page-text-secondary)' }}
          >
            No components found
          </p>
          <p 
            className="text-sm"
            style={{ color: 'var(--page-text-muted)' }}
          >
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </PageTemplate>
  );
};

export default ComponentsPage;