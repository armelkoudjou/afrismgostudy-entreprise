
import React, { useState, useEffect, useRef } from 'react';


/**
 * Composant SearchInput avec suggestions en temps réel
 */
export function SearchInput({ 
  placeholder = "Rechercher...", 
  onChange, 
  onSearch, 
  onSelect, 
  getSuggestions,
  className = "",
  autoFocus = false
}) {
  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(-1);
  const inputRef = React.useRef(null);
  
  // Mettre à jour les suggestions quand la requête change
  React.useEffect(() => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }
    
    const newSuggestions = getSuggestions ? getSuggestions(query) : [];
    setSuggestions(newSuggestions);
    setIsOpen(newSuggestions.length > 0);
  }, [query, getSuggestions]);
  
  // Gérer les changements dans le champ de recherche
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setHighlightedIndex(-1);
    
    if (onChange) {
      onChange(value);
    }
  };
  
  // Gérer la sélection d'une suggestion
  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.label);
    setSuggestions([]);
    setIsOpen(false);
    
    if (onSelect) {
      onSelect(suggestion);
    }
  };
  
  // Gérer la soumission de la recherche
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (highlightedIndex >= 0 && suggestions[highlightedIndex]) {
      handleSelectSuggestion(suggestions[highlightedIndex]);
    } else if (onSearch) {
      onSearch(query);
    }
  };
  
  // Gérer la navigation au clavier dans les suggestions
  const handleKeyDown = (e) => {
    if (!isOpen) return;
    
    // Flèche vers le bas
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }
    
    // Flèche vers le haut
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex(prev => prev > 0 ? prev - 1 : 0);
    }
    
    // Entrée
    if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[highlightedIndex]);
    }
    
    // Echap
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };
  
  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(suggestions.length > 0)}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
          autoFocus={autoFocus}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-indigo-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
      
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          {suggestions.map((suggestion, index) => (
            <li
              key={`${suggestion.value}-${index}`}
              onClick={() => handleSelectSuggestion(suggestion)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                index === highlightedIndex ? "bg-indigo-50" : ""
              }`}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}