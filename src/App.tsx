import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/components.css';
import { ThemeProvider, SidebarProvider } from './contexts';
import { 
  MainNavigation, 
  Footer,
  ComponentsPage,
  ButtonComponentPage,
  LoadingSpinnerComponentPage,
  ModalComponentPage,
  TabsPage,
  FoundationPage,
  HomePage,
  GetStartedPage,
  RoadmapPage,
  TokenVisualizerPage,
  ColorSystemPage
} from './components';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
            <div className="App min-h-screen flex" style={{
              backgroundColor: 'var(--page-background)',
              color: 'var(--page-text-primary)'
            }}>
              <MainNavigation />
              <div 
                className="flex-1 flex flex-col main-content"
                style={{ 
                  transition: 'margin-left 0.3s ease'
                }}
              >
                <Routes>
                  <Route path="/" element={<><HomePage /><Footer /></>} />
                  <Route path="/foundation" element={<FoundationPage />} />
                  <Route path="/colors" element={<ColorSystemPage />} />
                  <Route path="/get-started" element={<GetStartedPage />} />
                  <Route path="/roadmap" element={<RoadmapPage />} />
                  <Route path="/components" element={<ComponentsPage />} />
                  <Route path="/component/button" element={<ButtonComponentPage />} />
                  <Route path="/component/loading-spinner" element={<LoadingSpinnerComponentPage />} />
                  <Route path="/component/modal" element={<ModalComponentPage />} />
                  <Route path="/component/tabs" element={<TabsPage />} />
                  <Route path="/token-visualizer" element={<TokenVisualizerPage />} />
                </Routes>
              </div>
            </div>
          </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
