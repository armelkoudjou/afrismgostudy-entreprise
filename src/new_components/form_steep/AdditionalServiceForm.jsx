"use client"
import React from 'react';

export default function AdditionalServicesForm({ formData, handleChange, nextStep, prevStep }) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Services Complémentaires</h3>
                <p className="text-sm text-gray-600 mb-6">Sélectionnez les services complémentaires dont vous avez besoin</p>

                <div className="space-y-4">
                    <div className="flex items-start p-4 border rounded-md">
                        <input
                            type="checkbox"
                            id="needPassport"
                            name="needPassport"
                            checked={formData.needPassport}
                            onChange={handleChange}
                            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <div className="ml-3">
                            <label htmlFor="needPassport" className="font-medium text-gray-900">
                                Besoin d'un passeport
                            </label>
                            <p className="text-sm text-gray-600">Nous pouvons vous aider à obtenir un passeport</p>
                        </div>
                    </div>

                    <div className="flex items-start p-4 border rounded-md">
                        <input
                            type="checkbox"
                            id="needTranslation"
                            name="needTranslation"
                            checked={formData.needTranslation}
                            onChange={handleChange}
                            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <div className="ml-3">
                            <label htmlFor="needTranslation" className="font-medium text-gray-900">
                                Service de traduction
                            </label>
                            <p className="text-sm text-gray-600">Traduction de vos certificats et diplômes</p>
                        </div>
                    </div>

                    <div className="flex items-start p-4 border rounded-md">
                        <input
                            type="checkbox"
                            id="hasContact"
                            name="hasContact"
                            checked={formData.hasContact}
                            onChange={handleChange}
                            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                        />
                        <div className="ml-3">
                            <label htmlFor="hasContact" className="font-medium text-gray-900">
                                Contact dans le pays
                            </label>
                            <p className="text-sm text-gray-600">Avez-vous un contact dans le pays choisi?</p>
                        </div>
                    </div>

                    {formData.hasContact && (
                        <div className="ml-8 mt-2">
                            <label htmlFor="contactDetails" className="block text-sm font-medium text-gray-700 mb-1">
                                Détails du contact
                            </label>
                            <textarea
                                id="contactDetails"
                                name="contactDetails"
                                value={formData.contactDetails}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Nom, numéro de téléphone, adresse..."
                            />
                        </div>
                    )}
                </div>
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
                >
                    Continuer vers Résumé
                </button>
            </div>
        </div>
    )
}

