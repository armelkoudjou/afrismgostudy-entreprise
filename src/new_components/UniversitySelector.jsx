import React, { useEffect, useState, useRef } from 'react';
import { useLocalSearch } from '../utils/search-utils';

/**
 * Composant amélioré pour la recherche et sélection d'université
 */
export default function UniversitySelector({ 
  category,
  onSelect,
  initialValue = "",
  universities = [],
  placeholder = "Rechercher une université..."
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState(initialValue);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);
  
  // Initialiser le moteur de recherche avec les universités
  const { searchData } = useLocalSearch({
    universities: universities.map(name => ({ name, category }))
  });
  
  // Effectuer la recherche quand la requête change
  useEffect(() => {
    if (searchQuery.length < 2) {
      setFilteredResults(universities);
      return;
    }
    
    setLoading(true);
    
    // Simuler un délai pour éviter trop de rendus en cas de frappe rapide
    const timer = setTimeout(() => {
      const results = searchData('universities', searchQuery)
        .map(item => item.name)
        .filter(Boolean);
      
      setFilteredResults(results.length > 0 ? results : universities);
      setLoading(false);
    }, 150);
    
    return () => clearTimeout(timer);
  }, [searchQuery, universities, searchData]);
  
  // Fermer le dropdown si on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  // Gérer la sélection d'une université
  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
    setSearchQuery("");
    setShowDropdown(false);
    if (onSelect) {
      onSelect(university);
    }
  };
  
  // Gérer le changement dans la recherche
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowDropdown(true);
  };
  
  // Focus sur le champ de recherche
  const handleSearchFocus = () => {
    setShowDropdown(true);
  };

  return (
    <div className="w-full relative">
      <div className="relative">
        <input
          ref={searchInputRef}
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
          autoComplete="off"
        />
        
        {loading ? (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Liste des résultats */}
      {showDropdown && (
        <div 
          ref={dropdownRef}
          className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-md max-h-80 overflow-y-auto"
        >
          {filteredResults.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              Aucune université trouvée
            </div>
          ) : (
            <ul className="py-1">
              {filteredResults.map((university, index) => (
                <li 
                  key={index}
                  onClick={() => handleUniversitySelect(university)}
                  className={`px-4 py-3 hover:bg-indigo-50 cursor-pointer ${
                    selectedUniversity === university ? 'bg-indigo-100 font-medium' : ''
                  }`}
                >
                  {university}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Afficher l'université sélectionnée */}
      {selectedUniversity && !showDropdown && (
        <div className="mt-3 p-3 bg-indigo-50 rounded-md border border-indigo-100">
          <div className="flex justify-between items-center">
            <div className="font-medium text-indigo-700">{selectedUniversity}</div>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedUniversity("");
                setShowDropdown(true);
                searchInputRef.current.focus();
                if (onSelect) onSelect("");
              }}
              className="text-indigo-500 hover:text-indigo-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}