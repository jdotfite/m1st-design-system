import React, { useEffect } from 'react';
import './Modal.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: 'default' | 'centered' | 'confirmation';
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  footer?: React.ReactNode;
  loading?: boolean;
  destroyOnClose?: boolean;
  maskClosable?: boolean;
  className?: string;
  overlayClassName?: string;
  zIndex?: number;
  focusTrap?: boolean;
  autoFocus?: boolean;
  /** Called when modal is completely closed */
  afterClose?: () => void;
  /** Called when modal is completely opened */
  afterOpen?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  variant = 'default',
  children,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  footer,
  loading = false,
  destroyOnClose = false,
  maskClosable = true,
  className = '',
  overlayClassName = '',
  zIndex = 1000,
  focusTrap = true,
  autoFocus = true,
  afterClose,
  afterOpen
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      if (afterOpen) {
        afterOpen();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      if (!isOpen && afterClose) {
        afterClose();
      }
    };
  }, [isOpen, onClose, closeOnEscape, afterOpen, afterClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg', 
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
  };

  const variantClasses = {
    default: 'items-center justify-center min-h-screen px-4 pt-4 pb-20 sm:block sm:p-0',
    centered: 'items-center justify-center min-h-screen px-4',
    confirmation: 'items-center justify-center min-h-screen px-4'
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((closeOnOverlayClick || maskClosable) && event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div 
      className={`modal-overlay ${overlayClassName}`}
      style={{ zIndex }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div className={`modal-container ${variantClasses[variant]}`}>
        {/* Background overlay with blur effect */}
        <div className="modal-backdrop" />

        {/* Modal panel */}
        <div 
          className={`modal-panel ${sizeClasses[size]} ${className}`}
          onClick={handleModalClick}
        >
          <div className="modal-surface">
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="modal-header">
                {title && (
                  <h3 id="modal-title" className="modal-title">
                    {title}
                  </h3>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="modal-close-button"
                    aria-label="Close modal"
                    type="button"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="modal-body">
              {loading ? (
                <div className="modal-loading">
                  <div className="modal-spinner" />
                  <p>Loading...</p>
                </div>
              ) : (
                children
              )}
            </div>

            {/* Footer */}
            {footer && (
              <div className="modal-footer">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
