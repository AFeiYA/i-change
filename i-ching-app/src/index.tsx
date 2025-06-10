import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import './assets/styles/main.css';

// New React 18 createRoot API
const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}