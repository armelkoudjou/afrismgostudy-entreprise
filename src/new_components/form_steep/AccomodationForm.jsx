"use client"
import React from 'react';
export default function AccommodationForm({
                                              formData,
                                              handleAccommodationSelect,
                                              nextStep,
                                              prevStep,
                                              errors,
                                              accommodations,
                                          }) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Choix de l'Hébergement</h3>
                <p className="text-sm text-gray-600 mb-6">Sélectionnez le type d'hébergement qui vous convient</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {accommodations.map((accommodation) => (
                        <div
                            key={accommodation.type}
                            onClick={() => handleAccommodationSelect(accommodation)}
                            className={`p-4 border rounded-md cursor-pointer ${
                                formData.accommodation?.type === accommodation.type
                                    ? "border-indigo-500 bg-indigo-50"
                                    : "border-gray-300 hover:border-indigo-300"
                            }`}
                        >
                            <div className="font-medium">{accommodation.type}</div>
                            <div className="text-sm text-gray-600">{accommodation.capacity}</div>
                            <div className="mt-2 font-medium text-indigo-600">{accommodation.price.toLocaleString()} FCFA / mois</div>
                        </div>
                    ))}
                </div>

                {errors.accommodation && <p className="mt-1 text-sm text-red-600">{errors.accommodation}</p>}
            </div>

            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Précédent
                </button>

                <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={!formData.accommodation}
                >
                    Continuer vers Services Complémentaires
                </button>
            </div>
        </div>
    )
}

