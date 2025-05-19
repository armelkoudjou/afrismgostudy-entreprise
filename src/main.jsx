
/*
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
);*/



import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from "./new_components/Principal.jsx";

// Importer les pages administratives (commenté pour ne pas affecter l'apparence)
// import AdminPage from "./page/AdminPage.jsx";

// Importer les utilitaires de base de données et de performance
import { useLocalDatabase } from './utils/database';
import { preloadFormComponents } from './new_components/OptimizedFormContainer';

// Précharger les composants (si nécessaire)
// preloadFormComponents();

// Définir l'application principale
// Commenté pour conserver l'apparence de votre fichier
/*
function AppWithDatabase() {
  const { isLoading } = useLocalDatabase();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
        <p className="ml-3 text-gray-600">Initialisation...</p>
      </div>
    );
  }
  
  return <Home />;
}
*/

// Utiliser le rendu simple comme dans votre version originale
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);