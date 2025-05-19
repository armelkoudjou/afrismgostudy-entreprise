// search-utils.js
import Fuse from 'fuse.js';

import React, { useState, useCallback } from 'react';


/**
 * Classe pour gérer la recherche rapide dans les données locales
 */
export class LocalSearchEngine {
  constructor(dataCollections = {}) {
    this.indexes = {};
    this.dataCollections = dataCollections;
    this.initializeIndexes();
  }

  /**
   * Initialise les index de recherche pour toutes les collections
   */
  initializeIndexes() {
    Object.entries(this.dataCollections).forEach(([collectionName, data]) => {
      // Configuration de Fuse avec différentes options selon le type de données
      const options = {
        keys: this.getSearchableKeys(collectionName),
        threshold: 0.3, // Seuil de correspondance (plus bas = plus strict)
        includeScore: true,
        ignoreLocation: true,
        useExtendedSearch: true,
        shouldSort: true,
        minMatchCharLength: 2,
      };

      this.indexes[collectionName] = new Fuse(data, options);
    });
  }

  /**
   * Détermine les champs à indexer en fonction du type de collection
   */
  getSearchableKeys(collectionName) {
    switch (collectionName) {
      case 'universities':
        return ['name', 'category', 'country'];
      case 'fields':
        return ['name', 'university', 'level'];
      default:
        return ['name', 'type', 'description']; // Configuration par défaut
    }
  }

  /**
   * Recherche dans une collection spécifique
   * @param {string} collectionName - Nom de la collection
   * @param {string} query - Terme de recherche
   * @param {Object} filters - Filtres additionnels (ex: {country: 'France'})
   * @param {number} limit - Nombre maximum de résultats
   * @returns {Array} Résultats de recherche
   */
  search(collectionName, query, filters = {}, limit = 20) {
    if (!this.indexes[collectionName]) {
      console.error(`Collection "${collectionName}" non indexée`);
      return [];
    }

    // Recherche initiale
    let results = this.indexes[collectionName].search(query);

    // Application des filtres
    if (Object.keys(filters).length > 0) {
      results = results.filter(result => {
        const item = result.item;
        return Object.entries(filters).every(([key, value]) => 
          item[key] === value || 
          (Array.isArray(item[key]) && item[key].includes(value))
        );
      });
    }

    // Limiter les résultats et formater
    return results
      .slice(0, limit)
      .map(result => ({
        ...result.item,
        score: result.score
      }));
  }

  /**
   * Recherche avec autocomplétion et suggestions en temps réel
   * @param {string} collectionName - Nom de la collection 
   * @param {string} query - Terme de recherche partiel
   * @param {number} limit - Nombre maximum de suggestions
   * @returns {Array} Suggestions de complétion
   */
  autocomplete(collectionName, query, limit = 5) {
    if (!query || query.length < 2) return [];
    
    // Utiliser une recherche plus tolérante pour l'autocomplétion
    const results = this.search(collectionName, query, {}, limit * 2);
    
    // Regrouper et formater les suggestions
    const suggestions = results.map(result => ({
      value: result.name || result.type || result.toString(),
      label: result.name || result.type || result.toString(),
      data: result
    }));
    
    // Éliminer les doublons et limiter les résultats
    return Array.from(new Map(suggestions.map(item => [item.value, item])).values())
      .slice(0, limit);
  }

  /**
   * Met à jour ou ajoute de nouvelles données à une collection
   * @param {string} collectionName - Nom de la collection
   * @param {Array} newData - Nouvelles données à indexer
   */
  updateCollection(collectionName, newData) {
    this.dataCollections[collectionName] = newData;
    
    // Reconfigurer l'index pour cette collection
    const options = {
      keys: this.getSearchableKeys(collectionName),
      threshold: 0.3,
      includeScore: true
    };
    
    this.indexes[collectionName] = new Fuse(newData, options);
  }

  /**
   * Recherche unifiée dans plusieurs collections
   * @param {string} query - Terme de recherche
   * @param {Array} collections - Collections à chercher
   * @param {number} limit - Limite par collection
   * @returns {Object} Résultats par collection
   */
  multiSearch(query, collections = [], limit = 10) {
    if (!query || query.length < 2) return {};
    
    const collectionsToSearch = collections.length > 0 
      ? collections 
      : Object.keys(this.indexes);
    
    const results = {};
    
    collectionsToSearch.forEach(collection => {
      if (this.indexes[collection]) {
        results[collection] = this.search(collection, query, {}, limit);
      }
    });
    
    return results;
  }
}

/**
 * Hook React pour utiliser le moteur de recherche local
 */
export function useLocalSearch(initialData = {}) {
  const [searchEngine] = React.useState(() => new LocalSearchEngine(initialData));
  
  const searchData = React.useCallback((collection, query, filters, limit) => {
    return searchEngine.search(collection, query, filters, limit);
  }, [searchEngine]);
  
  const getSuggestions = React.useCallback((collection, query, limit) => {
    return searchEngine.autocomplete(collection, query, limit);
  }, [searchEngine]);
  
  const updateSearchData = React.useCallback((collection, newData) => {
    searchEngine.updateCollection(collection, newData);
  }, [searchEngine]);
  
  return {
    searchData,
    getSuggestions,
    updateSearchData,
    multiSearch: (query, collections, limit) => 
      searchEngine.multiSearch(query, collections, limit)
  };
}
