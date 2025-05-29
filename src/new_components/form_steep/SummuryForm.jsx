// src/new_components/form_steep/SummuryForm.jsx

"use client";
import React, { useState } from 'react';
// import { SERVICE_IDS } from '../lib/data'; // Non utilisé directement ici
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../PDFDocument"; // Assurez-vous que ce chemin est correct
// mockData est reçu en prop, donc l'import direct n'est pas strictement nécessaire ici
// si FormContainer l'importe déjà et le passe.
// import { mockData as localMockData } from "../lib/data"; // Alternative si prop mockData n'est pas passée

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CostVisualization from "../CostVisualization"; // Assurez-vous que ce chemin est correct

// Fonction pour formater les montants en FCFA
const formatToFCFA = (amount) => {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) {
        return 'N/A'; 
    }
    return new Intl.NumberFormat('fr-FR').format(numericAmount) + ' FCFA';
};

export default function SummaryForm({ formData, prevStep, mockData }) { // mockData est une prop
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!formData.firstName || !formData.university || !formData.field) {
            toast.error('Veuillez compléter toutes les informations obligatoires des étapes précédentes !');
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            toast.success('Inscription finalisée avec succès 🎉');
        }, 1500);
    };

    // Calcul des services additionnels
    const selectedServices = formData.selectedServices
        .map(serviceId => mockData.additionalServices.find(s => s.id === serviceId))
        .filter(Boolean); 

    const servicesCost = selectedServices.reduce((total, service) => {
        return total + (Number(service.price) || 0); 
    }, 0);

    // Calcul des frais obligatoires
    const obligatoryFeesList = mockData.obligatoryFees || []; 
    const obligatoryFeesCost = obligatoryFeesList.reduce((total, fee) => {
        return total + (Number(fee.price) || 0); 
    }, 0);


    return (
        <div className="space-y-8"> {/* Augmenté l'espacement global pour une meilleure séparation */}
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Récapitulatif de votre inscription</h3> {/* Taille de police augmentée */}
                <p className="text-sm text-gray-600 mb-6">Veuillez vérifier attentivement toutes les informations avant de finaliser.</p>

                <div className="space-y-6">
                    {/* Informations personnelles */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm"> {/* Style légèrement amélioré */}
                        <h4 className="text-md font-semibold text-gray-800 mb-3">Informations Personnelles</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                            <div><p className="text-gray-500">Nom complet:</p><p className="font-medium text-gray-700">{formData.firstName} {formData.lastName}</p></div>
                            <div><p className="text-gray-500">Date de naissance:</p><p className="font-medium text-gray-700">{formData.birthDate}</p></div>
                            <div><p className="text-gray-500">Lieu de naissance:</p><p className="font-medium text-gray-700">{formData.birthPlace}</p></div>
                            <div><p className="text-gray-500">Email:</p><p className="font-medium text-gray-700">{formData.email}</p></div>
                            <div><p className="text-gray-500">Téléphone:</p><p className="font-medium text-gray-700">{formData.phone}</p></div>
                            <div><p className="text-gray-500">Parent / Tuteur:</p><p className="font-medium text-gray-700">{formData.parentName} ({formData.parentContact})</p></div>
                        </div>
                    </div>

                    {/* Programme d'études */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-md font-semibold text-gray-800 mb-3">Programme d'Études</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                            <div><p className="text-gray-500">Pays de destination:</p><p className="font-medium text-gray-700">{formData.country}</p></div>
                            <div><p className="text-gray-500">Université choisie:</p><p className="font-medium text-gray-700">{formData.university}</p></div>
                            <div><p className="text-gray-500">Domaine d'études:</p><p className="font-medium text-gray-700">{formData.field}</p></div>
                            <div><p className="text-gray-500">Niveau d'études visé:</p><p className="font-medium text-gray-700">{formData.level}</p></div>
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-300">
                            <p className="font-medium text-gray-800 text-sm">Frais de scolarité (estimés):</p>
                            <p className="text-indigo-600 font-semibold">
                                {formData.tuitionFee ? formatToFCFA(formData.tuitionFee) : formatToFCFA(0)}
                            </p>
                        </div>
                    </div>

                    {/* Logement */}
                    {formData.accommodation && ( // Afficher seulement si un logement est sélectionné
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                            <h4 className="text-md font-semibold text-gray-800 mb-3">Logement</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                                <div><p className="text-gray-500">Type:</p><p className="font-medium text-gray-700">{formData.accommodation.type}</p></div>
                                {formData.accommodation.capacity && <div><p className="text-gray-500">Capacité:</p><p className="font-medium text-gray-700">{formData.accommodation.capacity}</p></div>}
                                <div><p className="text-gray-500">Prix mensuel (estimé):</p>
                                    <p className="font-medium text-gray-700">
                                        {formData.accommodation.price ? formatToFCFA(formData.accommodation.price) : formatToFCFA(0)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* NOUVELLE SECTION : Frais de Dossier Obligatoires */}
                    {obligatoryFeesList.length > 0 && (
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 shadow-sm"> {/* Couleur différente pour attirer l'attention */}
                            <h4 className="text-md font-semibold text-yellow-800 mb-3">Frais de Dossier Obligatoires</h4>
                            <div className="space-y-2">
                                {obligatoryFeesList.map((fee) => (
                                    <div key={fee.id} className="flex justify-between items-start p-3 border-b border-yellow-100 last:border-b-0">
                                        <div>
                                            <p className="font-medium text-gray-800 text-sm">{fee.name}</p>
                                            {fee.description && <p className="text-xs text-gray-600">{fee.description}</p>}
                                        </div>
                                        <p className="font-semibold text-yellow-700 ml-4 whitespace-nowrap">{formatToFCFA(fee.price)}</p>
                                    </div>
                                ))}
                                {obligatoryFeesList.length > 1 && ( // Afficher le total si plus d'un frais obligatoire
                                     <div className="flex justify-between items-center pt-3 mt-2 border-t border-yellow-200 font-medium">
                                        <p className="text-gray-800 text-sm">Total des frais obligatoires</p>
                                        <p className="text-yellow-700 text-md font-semibold">{formatToFCFA(obligatoryFeesCost)}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Services Complémentaires */}
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                        <h4 className="text-md font-semibold text-gray-800 mb-3">Services Complémentaires</h4>
                        {selectedServices.length > 0 ? (
                            <div className="space-y-2">
                                {selectedServices.map((service) => (
                                    <div key={service.id} className="flex justify-between items-start p-3 border-b border-gray-100 last:border-b-0">
                                        <div>
                                            <p className="font-medium text-gray-800 text-sm">{service.name}</p>
                                            {service.description && <p className="text-xs text-gray-600">{service.description}</p>}
                                        </div>
                                        <p className="font-medium text-indigo-600 ml-4 whitespace-nowrap">{formatToFCFA(service.price)}</p>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-3 mt-2 border-t border-gray-300 font-medium">
                                    <p className="text-gray-800 text-sm">Total des services complémentaires</p>
                                    <p className="text-indigo-600 text-md font-semibold">{formatToFCFA(servicesCost)}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500 italic">Aucun service complémentaire sélectionné.</p>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Visualisation des coûts */}
            <div className="mt-8">
                <h4 className="text-md font-semibold text-gray-800 mb-3">Analyse Estimative des Coûts Annuels</h4>
                <CostVisualization 
                    formData={formData} // Contient tuitionFee, accommodation.price, selectedServices
                    mockData={mockData} // Contient additionalServices et obligatoryFees
                    showDetails={true}  // Afficher la liste détaillée sous le graphique
                />
            </div>

            {/* Boutons d'action */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                <button
                    type="button"
                    onClick={prevStep}
                    disabled={isSubmitting || isSubmitted} // Désactiver si soumis ou en soumission
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    Précédent
                </button>

                <div className="space-x-3">
                    {isSubmitted ? (
                        <PDFDownloadLink
                            document={<PDFDocument formData={formData} mockData={mockData} />}
                            fileName={`AFRISM_Fiche_Inscription_${formData.lastName || 'Candidat'}_${formData.firstName || ''}.pdf`}
                            className="inline-flex items-center px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            {({ loading }) => (loading ? "Préparation..." : "Télécharger la Fiche (PDF)")}
                        </PDFDownloadLink>
                    ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-300"
                    >
                        {isSubmitting ? "Finalisation en cours..." : "Finaliser l'Inscription"}
                    </button>)}
                </div>
            </div>

            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
}