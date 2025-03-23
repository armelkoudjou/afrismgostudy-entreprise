import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from "./new_components/Principal.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>
);