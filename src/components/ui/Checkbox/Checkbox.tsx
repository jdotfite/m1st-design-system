import React from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: string;
  indeterminate?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  helperText,
  error,
  indeterminate = false,
  className = '',
  id,
  ...props
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  const checkboxClasses = [
    'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
    error ? 'border-red-500' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={checkboxId}
          type="checkbox"
          className={checkboxClasses}
          ref={(input) => {
            if (input) input.indeterminate = indeterminate;
          }}
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3 text-sm">
          <label htmlFor={checkboxId} className="font-medium text-gray-700">
            {label}
          </label>
          {helperText && !error && (
            <p className="text-gray-500">{helperText}</p>
          )}
          {error && (
            <p className="text-red-600">{error}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
