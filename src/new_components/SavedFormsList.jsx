// src/new_components/SavedFormsList.jsx
import React, { useState, useEffect } from 'react';
import { useFormCache } from '../utils/database.js';

/**
 * Composant qui affiche les formulaires sauvegardés et permet de les reprendre
 */
export default function SavedFormsList({ onFormSelect, onNewForm }) {
  const { savedForms, isLoading, loadForm, deleteForm } = useFormCache();
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Formater la date pour l'affichage
  const formatDate = (dateString) => {
    if (!dateString) return 'Date inconnue';
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Gérer la sélection d'un formulaire
  const handleFormSelect = async (formId) => {
    const formData = await loadForm(formId);
    
    if (formData && onFormSelect) {
      onFormSelect(formData);
    }
  };

  // Gérer la suppression d'un formulaire
  const handleDeleteConfirm = async (formId) => {
    await deleteForm(formId);
    setConfirmDelete(null);
  };

  // Extraire les informations principales du formulaire pour l'affichage
  const getFormSummary = (formData) => {
    if (!formData || !formData.data) return {};
    
    const data = formData.data;
    return {
      name: data.firstName && data.lastName 
        ? `${data.firstName} ${data.lastName}`
        : 'Sans nom',
      university: data.university || 'Non sélectionnée',
      program: data.field ? `${data.level} en ${data.field}` : 'Non sélectionné',
      date: formatDate(formData.lastUpdated)
    };
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 bg-indigo-600 text-white flex justify-between items-center">
        <h2 className="text-lg font-semibold">Formulaires Sauvegardés</h2>
        <button
          onClick={onNewForm}
          className="px-3 py-1 bg-white text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-50"
        >
          Nouveau Formulaire
        </button>
      </div>

      {isLoading ? (
        <div className="p-6 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
          <p className="mt-2 text-gray-600">Chargement des formulaires...</p>
        </div>
      ) : savedForms.length === 0 ? (
        <div className="p-6 text-center">
          <p className="text-gray-500">Aucun formulaire sauvegardé</p>
          <button
            onClick={onNewForm}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700"
          >
            Commencer un nouveau formulaire
          </button>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
          {savedForms.map((form) => {
            const summary = getFormSummary(form);
            return (
              <li key={form.id} className="relative hover:bg-gray-50">
                {confirmDelete === form.id ? (
                  <div className="p-4 bg-red-50">
                    <p className="text-red-600 font-medium">Confirmer la suppression ?</p>
                    <div className="flex mt-2 space-x-2">
                      <button
                        onClick={() => handleDeleteConfirm(form.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-md text-sm"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => setConfirmDelete(null)}
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm"
                      >
                        Annuler
                      </button>
                    </div>
                  </div>
                ) : (
                  <div 
                    onClick={() => handleFormSelect(form.id)}
                    className="p-4 cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <h3 className="text-md font-semibold text-gray-800">{summary.name}</h3>
                      <span className="text-xs text-gray-500">{summary.date}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-1">{summary.university}</p>
                    <p className="text-sm text-gray-600">{summary.program}</p>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConfirmDelete(form.id);
                      }}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                      aria-label="Supprimer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}