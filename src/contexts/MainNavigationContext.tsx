import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MainNavigationContextType {
  isMainNavCollapsed: boolean;
  toggleMainNav: () => void;
  setMainNavCollapsed: (collapsed: boolean) => void;
}

const MainNavigationContext = createContext<MainNavigationContextType | undefined>(undefined);

export const useMainNavigation = (): MainNavigationContextType => {
  const context = useContext(MainNavigationContext);
  if (!context) {
    throw new Error('useMainNavigation must be used within a MainNavigationProvider');
  }
  return context;
};

interface MainNavigationProviderProps {
  children: ReactNode;
}

export const MainNavigationProvider: React.FC<MainNavigationProviderProps> = ({ children }) => {
  const [isMainNavCollapsed, setIsMainNavCollapsed] = useState(true);

  const toggleMainNav = () => {
    setIsMainNavCollapsed(prev => !prev);
  };

  const setMainNavCollapsed = (collapsed: boolean) => {
    setIsMainNavCollapsed(collapsed);
  };

  return (
    <MainNavigationContext.Provider 
      value={{ 
        isMainNavCollapsed, 
        toggleMainNav, 
        setMainNavCollapsed 
      }}
    >
      {children}
    </MainNavigationContext.Provider>
  );
};

export default MainNavigationProvider;
