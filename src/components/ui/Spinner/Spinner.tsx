import React from 'react';
import './Spinner.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  variant?: 'circle' | 'dots' | 'pulse';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  variant = 'circle',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };
  
  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  const renderCircleSpinner = () => (
    <svg 
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4" 
        className="opacity-25"
      />
      <path 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        className="opacity-75"
      />
    </svg>
  );

  const renderDotsSpinner = () => (
    <div className={`flex space-x-1 ${className}`}>
      <div className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full animate-bounce`} style={{ animationDelay: '0ms' }} />
      <div className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full animate-bounce`} style={{ animationDelay: '150ms' }} />
      <div className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full animate-bounce`} style={{ animationDelay: '300ms' }} />
    </div>
  );

  const renderPulseSpinner = () => (
    <div 
      className={`${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full animate-pulse ${className}`}
    />
  );

  switch (variant) {
    case 'dots':
      return renderDotsSpinner();
    case 'pulse':
      return renderPulseSpinner();
    case 'circle':
    default:
      return renderCircleSpinner();
  }
};

export default Spinner;
