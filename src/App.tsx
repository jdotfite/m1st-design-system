import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/components.css';
import { ThemeProvider, SidebarProvider } from './contexts';
import { 
  Footer,
  ComponentsPage,
  ButtonComponentPage,
  LoadingSpinnerComponentPage,
  ModalComponentPage,
  TabsPage,
  TypographyPage,
  HomePage,
  GetStartedPage,
  RoadmapPage,
  TokenVisualizerPage,
  ColorSystemPage,
  GuidelinesPage,
  PatternsPage,
  DistributionTestPage,
  WebComponentsTestPage,
  TokenDiagnostics
} from './components';

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <div className="App min-h-screen" style={{
            backgroundColor: 'var(--page-background)',
            color: 'var(--page-text-primary)'
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/typography" element={<TypographyPage />} />
              <Route path="/colors" element={<ColorSystemPage />} />
              <Route path="/get-started" element={<GetStartedPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/patterns" element={<PatternsPage />} />
              <Route path="/guidelines" element={<GuidelinesPage />} />
              <Route path="/component/button" element={<ButtonComponentPage />} />
              <Route path="/component/loading-spinner" element={<LoadingSpinnerComponentPage />} />
              <Route path="/component/modal" element={<ModalComponentPage />} />
              <Route path="/component/tabs" element={<TabsPage />} />
              <Route path="/token-visualizer" element={<TokenVisualizerPage />} />
              <Route path="/test/distributions" element={<DistributionTestPage />} />
              <Route path="/test/web-components" element={<WebComponentsTestPage />} />
              <Route path="/test/token-diagnostics" element={<TokenDiagnostics />} />
            </Routes>
          </div>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
