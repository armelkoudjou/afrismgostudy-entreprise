// Résumé du formulaire — version avec format FCFA uniforme
"use client";
import React, { useState } from 'react';
import { SERVICE_IDS } from '../lib/data';
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../PDFDocument";
import { mockData } from "../lib/data";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Fonction pour formater les montants en FCFA
const formatToFCFA = (amount) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
};

export default function SummaryForm({ formData, prevStep, mockData }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);



    const handleSubmit = () => {
    if (!formData.firstName || !formData.university || !formData.field) {
        toast.error('Veuillez compléter toutes les informations obligatoires !');
        return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success('Inscription finalisée avec succès 🎉');
    }, 1500);
};




    const calculateServicesCost = () => {
        return formData.selectedServices.reduce((total, serviceId) => {
            const service = mockData.additionalServices.find(service => service.id === serviceId);
            return total + (service ? service.price : 0);
        }, 0);
    };

    const selectedServices = formData.selectedServices
        .map(serviceId => mockData.additionalServices.find(s => s.id === serviceId))
        .filter(Boolean);

    const servicesCost = calculateServicesCost();

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Récapitulatif de votre inscription</h3>
                <p className="text-sm text-gray-600 mb-6">Vérifiez les informations avant de finaliser votre inscription</p>

                <div className="space-y-6">
                    {/* Informations personnelles */}
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h4 className="text-md font-medium text-gray-900 mb-3">Informations Personnelles</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><p className="text-sm text-gray-600">Nom complet</p><p className="font-medium">{formData.firstName} {formData.lastName}</p></div>
                            <div><p className="text-sm text-gray-600">Date de naissance</p><p className="font-medium">{formData.birthDate}</p></div>
                            <div><p className="text-sm text-gray-600">Lieu de naissance</p><p className="font-medium">{formData.birthPlace}</p></div>
                            <div><p className="text-sm text-gray-600">Email</p><p className="font-medium">{formData.email}</p></div>
                            <div><p className="text-sm text-gray-600">Téléphone</p><p className="font-medium">{formData.phone}</p></div>
                            <div><p className="text-sm text-gray-600">Parent</p><p className="font-medium">{formData.parentName} ({formData.parentContact})</p></div>
                        </div>
                    </div>

                    {/* Programme d'études */}
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h4 className="text-md font-medium text-gray-900 mb-3">Programme d'Études</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><p className="text-sm text-gray-600">Pays</p><p className="font-medium">{formData.country}</p></div>
                            <div><p className="text-sm text-gray-600">Université</p><p className="font-medium">{formData.university}</p></div>
                            <div><p className="text-sm text-gray-600">Filière</p><p className="font-medium">{formData.field}</p></div>
                            <div><p className="text-sm text-gray-600">Niveau</p><p className="font-medium">{formData.level}</p></div>
                        </div>
                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-300">
                            <p className="font-medium text-gray-900">Frais de scolarité</p>
                            <p className="text-indigo-600 font-medium">
                                {formData.tuitionFee ? formatToFCFA(formData.tuitionFee) : formatToFCFA(0)}
                            </p>
                        </div>
                    </div>

                    {/* Logement */}
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h4 className="text-md font-medium text-gray-900 mb-3">Logement</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div><p className="text-sm text-gray-600">Type</p><p className="font-medium">{formData.accommodation?.type}</p></div>
                            <div><p className="text-sm text-gray-600">Capacité</p><p className="font-medium">{formData.accommodation?.capacity}</p></div>
                            <div><p className="text-sm text-gray-600">Prix mensuel</p>
                                <p className="font-medium">
                                    {formData.accommodation?.price ? formatToFCFA(formData.accommodation.price) : formatToFCFA(0)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services Complémentaires */}
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h4 className="text-md font-medium text-gray-900 mb-3">Services Complémentaires</h4>
                        {selectedServices.length > 0 ? (
                            <div className="space-y-3">
                                {selectedServices.map((service) => (
                                    <div key={service.id} className="flex justify-between items-start p-3 border rounded-md bg-white">
                                        <div>
                                            <p className="font-medium text-gray-900">{service.name}</p>
                                            <p className="text-sm text-gray-600">{service.description}</p>
                                        </div>
                                        <p className="font-medium text-indigo-600 ml-4">{formatToFCFA(service.price)}</p>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-3 mt-2 border-t border-gray-300 font-medium">
                                    <p>Total des services</p>
                                    <p className="text-indigo-600 text-lg">{formatToFCFA(servicesCost)}</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500 italic">Aucun service complémentaire sélectionné</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Boutons d'action */}
            <>
            <div className="flex justify-between">
            <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Précédent
            </button>

            <div className="space-x-4">
                {isSubmitted ? (
                    <PDFDownloadLink
                        document={<PDFDocument formData={formData} mockData={mockData} />}
                        fileName={`inscription_${formData.lastName}_${formData.firstName}.pdf`}
                        className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {({ loading }) => (loading ? "Préparation du PDF..." : "Télécharger le PDF")}
                    </PDFDownloadLink>
                ) : (
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-indigo-400"
                >
                    {isSubmitting ? "Enregistrement..." : "Finaliser l'inscription"}
                </button>)}
            </div>
    </div>

    {/* Toast container */}
    <ToastContainer />
    </>
        </div>
    );
}
