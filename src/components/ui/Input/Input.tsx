import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  inputSize?: 'sm' | 'md' | 'lg';
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  variant = 'default',
  inputSize = 'md',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2';
  
  const variantClasses = {
    default: 'border-[var(--page-border-muted)] bg-[var(--page-surface)] focus:border-[var(--page-focus)] focus:ring-[var(--page-focus)]/20',
    filled: 'border-[var(--page-border-muted)] bg-[var(--page-surface)] focus:bg-[var(--page-surface)] focus:border-[var(--page-focus)] focus:ring-[var(--page-focus)]/20',
    outline: 'border-2 border-[var(--page-border)] bg-transparent focus:border-[var(--page-focus)] focus:ring-[var(--page-focus)]/20'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base'
  };
  
  const errorClasses = error ? 'border-[var(--page-danger)] focus:ring-[var(--page-danger)]/20 focus:border-[var(--page-danger)]' : '';
  
  const inputClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[inputSize],
    'text-[var(--page-text-primary)] placeholder:text-[var(--page-text-muted)]',
    leftIcon ? 'pl-10' : '',
    rightIcon ? 'pr-10' : '',
    errorClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--page-text-primary)] mb-1"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-[var(--page-text-muted)]">{leftIcon}</span>
          </div>
        )}
        
        <input
          id={inputId}
          className={inputClasses}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-[var(--page-text-muted)]">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-[var(--color-danger)]">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-[var(--page-text-secondary)]">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
