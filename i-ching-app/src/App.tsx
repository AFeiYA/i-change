import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { KeyboardShortcutHelp } from './components/common';
import useAppShortcuts from './hooks/useAppShortcuts';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load components for better performance
const DivinationPage = lazy(() => import('./pages/DivinationPage'));
const ClassicsPage = lazy(() => import('./pages/ClassicsPage'));
const HexagramDetailPage = lazy(() => import('./pages/HexagramDetailPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </ThemeProvider>
  );
};

const AppContent: React.FC = () => {
  const { shortcuts, isHelpVisible, hideHelp } = useAppShortcuts();

  return (
    <Router>
      <div>
        <Navigation />
        <Suspense fallback={
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>载入中...</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<DivinationPage />} />
            <Route path="/divination" element={<DivinationPage />} />
            <Route path="/classics" element={<ClassicsPage />} />
            <Route path="/hexagram/:id" element={<HexagramDetailPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
        <Footer />
        
        <KeyboardShortcutHelp
          shortcuts={shortcuts}
          isVisible={isHelpVisible}
          onClose={hideHelp}
        />
      </div>        </Router>
  );
};

export default App;