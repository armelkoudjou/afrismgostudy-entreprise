// database.js
import localforage from 'localforage';
import { useState, useEffect } from 'react';

/**
 * Gestionnaire de données local utilisant IndexedDB via localforage
 * Optimisé pour une application strictement hors ligne
 */
class LocalDatabase {
  constructor() {
    // Configuration des différents stores
    this.stores = {
      universities: localforage.createInstance({
        name: 'universitiesDB',
        storeName: 'universities'
      }),
      categories: localforage.createInstance({
        name: 'universitiesDB',
        storeName: 'categories'
      }),
      fields: localforage.createInstance({
        name: 'universitiesDB',
        storeName: 'fields'
      }),
      tuitionFees: localforage.createInstance({
        name: 'universitiesDB',
        storeName: 'tuitionFees'
      }),
      accommodations: localforage.createInstance({
        name: 'universitiesDB',
        storeName: 'accommodations'
      }),
      services: localforage.createInstance({
        name: 'universitiesDB',
        storeName: 'services'
      }),
      formCache: localforage.createInstance({
        name: 'universitiesDB',
        storeName: 'formCache'
      }),
    };
    
    // Métadonnées d'initialisation
    this.metadataStore = localforage.createInstance({
      name: 'universitiesDB',
      storeName: 'metadata'
    });
  }

  /**
   * Initialiser la base de données avec des données par défaut
   * @param {Object} defaultData - Données par défaut à utiliser
   */
  async initialize(defaultData) {
    try {
      // Vérifier si la base est déjà initialisée
      const isInitialized = await this.metadataStore.getItem('initialized');
      
      if (!isInitialized) {
        console.log('Initialisation de la base de données locale...');
        
        // Charger les données par défaut dans chaque store
        const initPromises = Object.entries(defaultData).map(async ([key, data]) => {
          if (this.stores[key]) {
            if (Array.isArray(data)) {
              // Pour les tableaux, on indexe par position
              await Promise.all(data.map((item, index) => 
                this.stores[key].setItem(`${index}`, item)
              ));
            } else {
              // Pour les objets, on stocke les paires clé-valeur
              await Promise.all(Object.entries(data).map(([id, value]) => 
                this.stores[key].setItem(id, value)
              ));
            }
          }
        });
        
        await Promise.all(initPromises);
        
        // Marquer la base comme initialisée avec un timestamp
        await this.metadataStore.setItem('initialized', true);
        await this.metadataStore.setItem('lastUpdate', new Date().toISOString());
        
        console.log('Base de données locale initialisée avec succès');
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la base de données:', error);
      return false;
    }
  }

  /**
   * Sauvegarder un formulaire
   * @param {string} formId - Identifiant du formulaire (UUID ou timestamp)
   * @param {Object} formData - Données du formulaire
   */
  async saveFormProgress(formId, formData) {
    try {
      const timestamp = new Date().toISOString();
      await this.stores.formCache.setItem(formId, {
        data: formData,
        lastUpdated: timestamp
      });
      return true;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du formulaire:', error);
      return false;
    }
  }

  /**
   * Récupérer un formulaire sauvegardé
   * @param {string} formId - Identifiant du formulaire
   */
  async getFormProgress(formId) {
    try {
      return await this.stores.formCache.getItem(formId);
    } catch (error) {
      console.error('Erreur lors de la récupération du formulaire:', error);
      return null;
    }
  }

  /**
   * Récupérer tous les formulaires sauvegardés
   * @returns {Array} Liste des formulaires sauvegardés
   */
  async getAllSavedForms() {
    try {
      const forms = [];
      await this.stores.formCache.iterate((value, key) => {
        forms.push({
          id: key,
          ...value
        });
      });
      return forms.sort((a, b) => 
        new Date(b.lastUpdated) - new Date(a.lastUpdated)
      );
    } catch (error) {
      console.error('Erreur lors de la récupération des formulaires:', error);
      return [];
    }
  }

  /**
   * Récupérer des données depuis un store spécifique
   * @param {string} storeName - Nom du store
   * @param {string} key - Clé à récupérer (optionnel)
   */
  async getData(storeName, key = null) {
    try {
      if (!this.stores[storeName]) {
        console.error(`Store "${storeName}" non trouvé`);
        return null;
      }
      
      if (key !== null) {
        return await this.stores[storeName].getItem(key);
      }
      
      // Récupérer toutes les données du store
      const allData = [];
      await this.stores[storeName].iterate((value, key) => {
        allData.push({
          id: key,
          ...value
        });
      });
      
      return allData;
    } catch (error) {
      console.error(`Erreur lors de la récupération depuis ${storeName}:`, error);
      return null;
    }
  }

  /**
   * Mettre à jour des données dans un store
   * @param {string} storeName - Nom du store
   * @param {string} key - Clé à mettre à jour
   * @param {any} data - Nouvelles données
   */
  async updateData(storeName, key, data) {
    try {
      if (!this.stores[storeName]) {
        console.error(`Store "${storeName}" non trouvé`);
        return false;
      }
      
      await this.stores[storeName].setItem(key, data);
      
      // Mettre à jour le timestamp de dernière modification
      await this.metadataStore.setItem('lastUpdate', new Date().toISOString());
      
      return true;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour dans ${storeName}:`, error);
      return false;
    }
  }

  /**
   * Rechercher des données dans un store avec filtrage
   * @param {string} storeName - Nom du store
   * @param {Function} filterFn - Fonction de filtrage
   */
  async searchData(storeName, filterFn) {
    try {
      if (!this.stores[storeName]) {
        console.error(`Store "${storeName}" non trouvé`);
        return [];
      }
      
      const results = [];
      
      await this.stores[storeName].iterate((value, key) => {
        const item = typeof value === 'object' ? { ...value, id: key } : { value, id: key };
        
        if (filterFn(item)) {
          results.push(item);
        }
      });
      
      return results;
    } catch (error) {
      console.error(`Erreur lors de la recherche dans ${storeName}:`, error);
      return [];
    }
  }

  /**
   * Effacer complètement un store
   * @param {string} storeName - Nom du store à vider
   */
  async clearStore(storeName) {
    try {
      if (!this.stores[storeName]) {
        console.error(`Store "${storeName}" non trouvé`);
        return false;
      }
      
      await this.stores[storeName].clear();
      return true;
    } catch (error) {
      console.error(`Erreur lors de la suppression du store ${storeName}:`, error);
      return false;
    }
  }

  /**
   * Récupérer les frais de scolarité
   * @param {Object} params - Paramètres de recherche (catégorie, université, niveau, filière)
   */
  async getTuitionFee(params) {
    try {
      const { category, university, level, field } = params;
      
      // Essayer de récupérer directement la structure complète
      const categoryData = await this.stores.tuitionFees.getItem(category);
      
      if (!categoryData) return 0;
      
      // Logique similaire à calculateTuitionFee.js
      let fee = categoryData.defaultFee || 0;
      
      if (categoryData.levels && categoryData.levels[level]) {
        fee = categoryData.levels[level];
      }
      
      if (!university || !categoryData.universities[university]) {
        return fee;
      }
      
      const universityData = categoryData.universities[university];
      
      if (universityData.defaultFee) {
        fee = universityData.defaultFee;
      }
      
      if (universityData.levels && universityData.levels[level]) {
        fee = universityData.levels[level];
      }
      
      if (!field || !universityData.fields || !universityData.fields[level] || !universityData.fields[level][field]) {
        return fee;
      }
      
      return universityData.fields[level][field];
    } catch (error) {
      console.error('Erreur lors de la récupération des frais de scolarité:', error);
      return 0;
    }
  }
}

// Exporter une instance unique
const localDB = new LocalDatabase();
export default localDB;

// Hook React pour utiliser la base de données
export function useLocalDatabase() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialiser la base de données au chargement du composant
  useEffect(() => {
    async function initDB() {
      try {
        // Importer les données par défaut
        const { mockData } = await import('../new_components/lib/data');
        const { tuitionFees } = await import('../utils/tuitionFees');
        
        const defaultData = {
          ...mockData,
          tuitionFees
        };
        
        const initialized = await localDB.initialize(defaultData);
        setIsInitialized(initialized);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données:', error);
        setIsLoading(false);
      }
    }
    
    initDB();
  }, []);
  
  return {
    db: localDB,
    isInitialized,
    isLoading
  };
}

// Hook pour gérer la sauvegarde des formulaires
export function useFormCache(formId = null) {
  const [currentFormId, setCurrentFormId] = useState(formId || `form_${Date.now()}`);
  const [savedForms, setSavedForms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Charger les formulaires sauvegardés
  useEffect(() => {
    async function loadSavedForms() {
      try {
        const forms = await localDB.getAllSavedForms();
        setSavedForms(forms);
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des formulaires:', error);
        setIsLoading(false);
      }
    }
    
    loadSavedForms();
  }, []);
  
  // Sauvegarder un formulaire
  const saveForm = async (formData) => {
    try {
      const success = await localDB.saveFormProgress(currentFormId, formData);
      
      if (success) {
        // Rafraîchir la liste des formulaires
        const forms = await localDB.getAllSavedForms();
        setSavedForms(forms);
      }
      
      return success;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du formulaire:', error);
      return false;
    }
  };
    
  // Charger un formulaire spécifique
  const loadForm = async (formId) => {
    try {
      const formData = await localDB.getFormProgress(formId);
      
      if (formData) {
        setCurrentFormId(formId);
        return formData.data;
      }
      
      return null;
    } catch (error) {
      console.error('Erreur lors du chargement du formulaire:', error);
      return null;
    }
  };
  
  // Supprimer un formulaire
  const deleteForm = async (formId) => {
    try {
      await localDB.stores.formCache.removeItem(formId);
      
      // Rafraîchir la liste
      const forms = await localDB.getAllSavedForms();
      setSavedForms(forms);
      
      return true;
    } catch (error) {
      console.error('Erreur lors de la suppression du formulaire:', error);
      return false;
    }
  };
  

  return {
    currentFormId,
    savedForms,
    isLoading,
    saveForm,
    loadForm,
    deleteForm,
    setCurrentFormId
  };
}