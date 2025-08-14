import { useEffect } from 'react';

/**
 * Custom hook to set the document title with consistent formatting
 * @param pageTitle - The specific page title (e.g., "Roadmap", "Typography")
 * @param baseTitle - Optional base title (defaults to "M1st Design System")
 */
export function useDocumentTitle(pageTitle: string, baseTitle: string = "M1st Design System") {
  useEffect(() => {
    const fullTitle = pageTitle ? `${baseTitle} - ${pageTitle}` : baseTitle;
    document.title = fullTitle;
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = baseTitle;
    };
  }, [pageTitle, baseTitle]);
}
