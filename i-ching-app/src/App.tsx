import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import DivinationPage from './pages/DivinationPage';
import ClassicsPage from './pages/ClassicsPage';
import HexagramDetailPage from './pages/HexagramDetailPage';
import NetworkPage from './pages/NetworkPage';
import HistoryPage from './pages/HistoryPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Router>
          <div>
            <Navigation />            <Routes>
              <Route path="/" element={<DivinationPage />} />
              <Route path="/divination" element={<DivinationPage />} />
              <Route path="/classics" element={<ClassicsPage />} />
              <Route path="/hexagram/:id" element={<HexagramDetailPage />} />
              <Route path="/network" element={<NetworkPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
          </div>        </Router>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;