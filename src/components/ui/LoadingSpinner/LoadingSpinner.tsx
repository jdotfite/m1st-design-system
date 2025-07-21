import React from 'react';
import './LoadingSpinner.css';

export interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'logo' | 'simple' | 'original';
  className?: string;
  /** Show text below the spinner */
  text?: string;
  /** Control animation speed (defaults to 1.3s for logo variant) */
  duration?: number;
  /** Custom color for the first half circle (top-right) in simple variant */
  primaryColor?: string;
  /** Custom color for the second half circle (bottom-left) in simple variant */
  secondaryColor?: string;
  /** Custom color for the center area in simple variant */
  centerColor?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'sm',
  variant = 'logo',
  className = '',
  text,
  duration = 1.3,
  primaryColor = 'var(--color-brand-primary)',
  secondaryColor = '#213d70',
  centerColor = 'transparent'
}) => {
  const sizeClasses = {
    xs: 'w-12 h-12',
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
    xxl: 'w-64 h-64'
  };

  const sizeInPx = {
    xs: 48,
    sm: 64,
    md: 96,
    lg: 128,
    xl: 192,
    xxl: 256
  };

  const renderLogoSpinner = () => (
    <div 
      className={`loading-spinner-container ${sizeClasses[size]} ${className}`}
      style={{ 
        '--animation-duration': `${duration}s`,
        '--animation-delay': `${duration * 0.9}s`
      } as React.CSSProperties}
    >
      {/* M1st Logo with Pulsing Animation */}
      <svg 
        className="loading-spinner-logo" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="362 362 300 300"
        width="100%"
        height="100%"
      >
        {/* Single pulsing square - centered in viewBox */}
        <rect 
          className="pulse-square pulse-square-1" 
          x="412" 
          y="412" 
          width="200" 
          height="200" 
          fill="var(--color-brand-primary)" 
        />
        
        {/* Static logo that stays in place */}
        <g className="static-logo">
          {/* Red background square */}
          <rect 
            x="412" 
            y="412" 
            width="200" 
            height="200" 
            fill="var(--color-brand-primary)"
          />
          
          {/* White M logo - scaled and positioned for the 200x200 square */}
          <g transform="translate(412, 412) scale(0.195)">
            <path 
              d="M817.2 775.82c-1.84-.48-3.62-1.16-5.3-2.04-.8-.38-1.66-.71-2.41-1.14a37.208 37.208 0 0 1-5.49-3.83 27.326 27.326 0 0 1-10.6-22.06l.24-536.62c0-3.53-2.86-6.39-6.39-6.39h-91.78c-4.4-.1-8.47 2.28-10.56 6.15L626.74 327.8c-.65 1.31-.12 2.9 1.19 3.56.37.18.77.28 1.18.28h38.34c8.42-.05 15.32 6.68 15.48 15.1V746.7c.1 8.6-3.82 16.76-10.6 22.06-1.73 1.42-3.56 2.7-5.49 3.83l-2.41 1.14c-1.69.87-3.47 1.55-5.3 2.04-.54.15-1.06.36-1.56.62v18.65l.28.28h160.13l.28-.28v-18.65c-.48-.27-.99-.47-1.51-.62" 
              fill="white"
            />
            <path 
              d="m487.2 703.21-180.1-306c-.32-.44-.6-.89-.85-1.37-1.42 0-1.75 1.04-1.94 1.99-.07.96-.07 1.93 0 2.89v344.73a27.493 27.493 0 0 0 10.6 22.2c4.31 3.51 9.33 6.03 14.72 7.38v19.17H170.54v-18.93c2.89-1.33 5.82-2.6 8.52-4.02 2.96-1.66 5.79-3.54 8.47-5.63a17.93 17.93 0 0 0 6.96-15.05v-505.5c.39-7-2.43-13.8-7.67-18.46a35.094 35.094 0 0 0-13.77-7.67c-1.18-.33-2.32-.43-3.88-.71.24-5.02.33-9.99.43-14.86h144.55c8.71-.02 16.64 5 20.35 12.87L520 533.32l65.98-134.14a7.666 7.666 0 0 1 6.77-4.17h41.37c1.52-.02 2.76 1.2 2.78 2.71 0 .42-.09.84-.27 1.22m225.92-120.78a25.44 25.44 0 0 0-6.34-4.4 58.442 58.442 0 0 0-8.09-3.5c-2.98-1.04-5.35-1.94-7.19-2.75-1.67-.67-3.26-1.52-4.73-2.56a9.47 9.47 0 0 1-2.84-3.41 11.66 11.66 0 0 1-.95-4.73c-.04-2.5 1-4.89 2.84-6.58 2.22-1.91 5.08-2.89 8-2.75 4.03 0 7.87 1.73 10.56 4.73 3.04 3.28 5.02 7.41 5.68 11.83v.47h5.44l-1.04-23.43h-5.49l-1.37 3.46a25.015 25.015 0 0 0-5.96-2.27c-2.53-.71-5.14-1.07-7.76-1.09a21.297 21.297 0 0 0-15.9 6.06c-3.87 3.76-6.08 8.9-6.15 14.29-.09 3.01.55 5.99 1.85 8.71 1.16 2.37 2.77 4.49 4.73 6.25a26.63 26.63 0 0 0 6.34 3.98c2.2 1.05 4.46 1.97 6.77 2.75 2.46.8 4.73 1.66 6.86 2.56 1.82.71 3.54 1.67 5.11 2.84 1.26.94 2.28 2.15 2.98 3.55.68 1.48 1.02 3.1.99 4.73.21 3.11-.95 6.15-3.17 8.33-2.58 2.1-5.86 3.15-9.18 2.93-2.7.05-5.35-.66-7.67-2.04a22.407 22.407 0 0 1-5.87-5.06c-1.6-2-2.93-4.19-3.98-6.53-.97-1.99-1.71-4.09-2.18-6.25v-.47h-5.4l.66 25.23h5.73l1.18-4.17c1.94 1.4 4.01 2.59 6.2 3.55 9.31 4.05 20.1 2.49 27.88-4.02 4.51-4.14 7-10.03 6.82-16.14.07-2.85-.44-5.69-1.51-8.33-.96-2.27-2.38-4.32-4.17-6.01m53.9 25.89c-1.4.44-2.84.7-4.31.76-1.57.2-3.15.31-4.73.33-1.79.15-3.58-.11-5.25-.76a6.297 6.297 0 0 1-2.84-2.84c-.73-1.48-1.18-3.09-1.33-4.73 0-1.99-.28-45.06-.28-45.06h18.08v-8.47h-18.22v-21.58h-12.78v21.58h-11.74v7.86h11.45v46.29c-.27 4.52.93 9 3.41 12.78 2.88 3.37 7.22 5.14 11.64 4.73 3.21.07 6.4-.37 9.47-1.33 2.46-.9 5.16-1.94 7.95-3.22h.33v-6.63l-.85.28Zm-32.82 460.46h3.28c3.71 0 6.9-1.35 6.9-4.88 0-2.48-1.81-4.97-6.9-4.97-1.1 0-2.2.08-3.28.25v9.6Zm0 15.71h-4.55V751.6c2.66-.44 5.85-.67 8.04-.67s6.19.53 8.84 2.15a6.723 6.723 0 0 1 2.57 5.85 7.024 7.024 0 0 1-5.52 6.9v.25c2.48.42 4.21 2.69 4.76 6.9.24 2.4.83 4.76 1.77 6.99h-4.88a20.28 20.28 0 0 1-1.94-7.24c-.15-2.93-2.44-4.98-5.53-4.98s-3.73.01-3.73.01l.17 12.21Z" 
              fill="white"
            />
            <path 
              d="M889 737.05c-15.69 0-28.4 12.72-28.4 28.4s12.72 28.4 28.4 28.4 28.4-12.72 28.4-28.4-12.72-28.4-28.4-28.4Zm0 53.02c-13.59 0-24.61-11.02-24.61-24.61s11.02-24.61 24.61-24.61 24.61 11.02 24.61 24.61-11.02 24.61-24.61 24.61Z" 
              fill="white"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const renderSimpleSpinner = () => (
    <div 
      className={`loading-spinner-simple ${sizeClasses[size]} ${className}`}
      style={{ 
        '--spinner-size': `${sizeInPx[size]}px`,
        '--spinner-primary-color': primaryColor,
        '--spinner-secondary-color': secondaryColor,
        '--spinner-center-color': centerColor
      } as React.CSSProperties}
    >
      <div className="simple-spinner-circle"></div>
    </div>
  );

  const renderOriginalSpinner = () => (
    <div 
      className={`loading-spinner-original ${sizeClasses[size]} ${className}`}
      style={{ '--spinner-size': `${sizeInPx[size]}px` } as React.CSSProperties}
    >
      <div className="original-spinner-circle"></div>
    </div>
  );

  return (
    <div className="loading-spinner-wrapper">
      {variant === 'logo' 
        ? renderLogoSpinner() 
        : variant === 'original'
        ? renderOriginalSpinner()
        : renderSimpleSpinner()}
      {text && (
        <p className="loading-spinner-text" style={{ color: 'var(--page-text-secondary)' }}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
