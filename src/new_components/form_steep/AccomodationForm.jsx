// src/new_components/form_steep/AccomodationForm.jsx
"use client";
import React from 'react';

export default function AccommodationForm({
                                            formData,
                                            handleAccommodationSelect,
                                            nextStep,
                                            prevStep,
                                            errors,
                                            accommodations, // Ceci devrait venir de mockData.accommodations
                                        }) {
    
    // Détermine si le bouton "Continuer" doit être désactivé.
    // Il est désactivé si aucun logement n'a été sélectionné (formData.accommodation est null ou undefined).
    const isNextButtonDisabled = !formData.accommodation;

    // // OPTIONNEL: DEBUG LOGS pour vérifier l'état lors du développement
    // console.log("--- AccommodationForm RENDER ---");
    // console.log("Current formData.accommodation:", formData.accommodation);
    // console.log("Is 'Continuer' button disabled (isNextButtonDisabled):", isNextButtonDisabled);
    // console.log("Errors object from parent:", errors);
    // console.log("Available accommodations from props:", accommodations);
    // console.log("--------------------------------------");
                
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Choix du Logement</h3>
                <p className="text-sm text-gray-600 mb-6">Sélectionnez le type de Logement qui vous convient.</p>

                {/* Affichage de l'erreur spécifique à la sélection du logement */}
                {errors.accommodation && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md">
                        {errors.accommodation}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(accommodations || []).map((accommodationOption) => ( // Renommé en accommodationOption pour éviter la confusion
                        <div
                            key={accommodationOption.type} // Utiliser un identifiant unique, ici le type
                            onClick={() => handleAccommodationSelect(accommodationOption)} // Met à jour formData.accommodation
                            className={`p-4 border rounded-md cursor-pointer transition-all duration-150 ease-in-out
                                ${formData.accommodation?.type === accommodationOption.type 
                                    ? "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500 shadow-lg transform scale-105" // Style pour l'option sélectionnée
                                    : "border-gray-300 bg-white hover:border-indigo-400 hover:shadow-md" // Style pour les options non sélectionnées
                                }`}
                        >
                            <div className="font-semibold text-gray-800">{accommodationOption.type}</div>
                            {accommodationOption.capacity && <div className="text-sm text-gray-500 mt-1">Capacité: {accommodationOption.capacity}</div>}
                            {typeof accommodationOption.price === 'number' && ( // S'assurer que le prix est un nombre
                                <div className="mt-2 font-medium text-indigo-700">
                                    {accommodationOption.price.toLocaleString()} FCFA / mois
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {(!accommodations || accommodations.length === 0) && (
                     <p className="text-sm text-gray-500 text-center py-4">
                        Aucune option de logement n'est disponible pour le moment.
                    </p>
                )}
            </div>

            <div className="flex justify-between pt-4 border-t border-gray-200 mt-8"> {/* Ajout d'un séparateur et d'une marge */}
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Précédent
                </button>

                <button
                    type="button"
                    onClick={nextStep} // nextStep de FormContainer qui appellera validateStep(3)
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300 disabled:text-indigo-100 disabled:cursor-not-allowed disabled:opacity-70" // Styles pour actif et désactivé
                    disabled={isNextButtonDisabled} 
                >
                    Continuer vers Services Complémentaires
                </button>
            </div>
        </div>
    )
}