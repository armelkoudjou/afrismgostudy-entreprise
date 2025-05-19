import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Composant d'autocomplétion avancé et accessible
 * 
 * @param {string} value - Valeur actuelle
 * @param {function} onChange - Fonction appelée quand la valeur change
 * @param {function} getSuggestions - Fonction pour récupérer les suggestions
 * @param {function} onSelect - Fonction appelée quand une suggestion est sélectionnée
 * @param {string} placeholder - Placeholder pour le champ
 * @param {string} label - Label du champ
 * @param {string} id - ID unique pour le champ
 * @param {boolean} error - Si le champ contient une erreur
 * @param {string} errorMessage - Message d'erreur à afficher
 * @param {boolean} disabled - Si le champ est désactivé
 * @param {boolean} required - Si le champ est requis
 */
export default function AutoComplete({
  value = '',
  onChange,
  onSelect,
  getSuggestions,
  placeholder = '',
  label = '',
  id,
  error = false,
  errorMessage = '',
  disabled = false,
  required = false,
  className = '',
  renderOption = null,
  loadingState = false,
  loadingMessage = 'Recherche...',
  clearOnSelect = false,
  highlightQuery = true,
}) {
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  
  // Mise à jour des suggestions quand l'input change
  const updateSuggestions = useCallback(async (value) => {
    if (!getSuggestions || value.length < 2) {
      setSuggestions([]);
      return;
    }
    
    setLoading(true);
    
    try {
      // Débounce pour limiter les appels API
      const timer = setTimeout(async () => {
        const suggestions = await getSuggestions(value);
        setSuggestions(suggestions || []);
        setShowSuggestions(true);
        setLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Erreur lors de la récupération des suggestions:', error);
      setLoading(false);
    }
  }, [getSuggestions]);
  
  // Mise à jour de l'input
  useEffect(() => {
    setInputValue(value || '');
  }, [value]);
  
  // Récupérer les suggestions quand inputValue change
  useEffect(() => {
    if (focused) {
      updateSuggestions(inputValue);
    }
  }, [inputValue, focused, updateSuggestions]);
  
  // Gérer le clic en dehors du composant
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Gérer les changements dans l'input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setHighlightedIndex(-1);
    
    if (onChange) {
      onChange(value);
    }
  };
  
  // Gérer la sélection d'une suggestion
  const handleSelectSuggestion = (suggestion) => {
    if (clearOnSelect) {
      setInputValue('');
    } else {
      setInputValue(suggestion.label || suggestion.value);
    }
    
    setShowSuggestions(false);
    setHighlightedIndex(-1);
    
    if (onSelect) {
      onSelect(suggestion);
    }
    
    // Remettre le focus sur l'input
    inputRef.current && inputRef.current.focus();
  };
  
  // Gérer la navigation au clavier
  const handleKeyDown = (e) => {
    // Flèche vers le bas
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const nextIndex = prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex;
        
        // Scroller jusqu'à l'élément surligné
        if (suggestionsRef.current && suggestionsRef.current.children[nextIndex]) {
          suggestionsRef.current.children[nextIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
        
        return nextIndex;
      });
    }
    
    // Flèche vers le haut
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const nextIndex = prevIndex > 0 ? prevIndex - 1 : 0;
        
        // Scroller jusqu'à l'élément surligné
        if (suggestionsRef.current && suggestionsRef.current.children[nextIndex]) {
          suggestionsRef.current.children[nextIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
        
        return nextIndex;
      });
    }
    
    // Entrée
    if (e.key === 'Enter' && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[highlightedIndex]);
    }
    
    // Échap
    if (e.key === 'Escape') {
      e.preventDefault();
      setShowSuggestions(false);
    }
  };
  
  // Fonction pour surligner le texte recherché
  const highlightMatch = (text, query) => {
    if (!highlightQuery || !query || !text) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    
    return (
      <>
        {parts.map((part, index) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="bg-indigo-100 text-indigo-800 font-medium">
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };
  
  return (
    <div className="w-full" ref={containerRef}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => {
            setFocused(true);
            setShowSuggestions(inputValue.length >= 2 && suggestions.length > 0);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
          aria-autocomplete="list"
          aria-expanded={showSuggestions}
          aria-owns={`${id}-suggestions`}
          aria-activedescendant={
            highlightedIndex >= 0 ? `${id}-suggestion-${highlightedIndex}` : undefined
          }
          autoComplete="off"
        />
        
        {(loading || loadingState) && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-indigo-500 border-t-transparent"></div>
            <span className="sr-only">{loadingMessage}</span>
          </div>
        )}
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          id={`${id}-suggestions`}
          role="listbox"
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.id || index}
              id={`${id}-suggestion-${index}`}
              role="option"
              aria-selected={highlightedIndex === index}
              onClick={() => handleSelectSuggestion(suggestion)}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                highlightedIndex === index
                  ? 'bg-indigo-50 text-indigo-900'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {renderOption ? (
                renderOption(suggestion, inputValue)
              ) : (
                <div className="flex flex-col">
                  <span className="font-medium">
                    {highlightMatch(suggestion.label || suggestion.value, inputValue)}
                  </span>
                  {suggestion.description && (
                    <span className="text-sm text-gray-500">
                      {suggestion.description}
                    </span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}