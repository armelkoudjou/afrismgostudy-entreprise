"use client";
import React, { useState, useEffect, useCallback } from "react"; // Ajout de useCallback
import { GraduationCap, Info } from "lucide-react";
import PersonalInfoForm from "./form_steep/PersonnalInfoForm.jsx";
import ProgramSelectionForm from "./form_steep/ProgrammSelectionForm.jsx";
import AccommodationForm from "./form_steep/AccomodationForm.jsx";
import AdditionalServicesForm from "./form_steep/AdditionalServiceForm.jsx";
import SummaryForm from "./form_steep/SummuryForm.jsx";
import StepIndicator from "./SteepIndicator.jsx";
import { mockData } from "./lib/data";

import { useLocalDatabase, useFormCache } from "../utils/database.js";
import SavedFormsList from "../new_components/SavedFormsList.jsx";
import UniversitySelector from "../new_components/UniversitySelector.jsx"; // Assurez-vous que ce composant est utilisé ou retirez l'import

export default function FormContainer() {
    const { db, isInitialized, isLoading: isLoadingDb } = useLocalDatabase(); // Renommé isLoading pour éviter conflit
    const {
        currentFormId,
        savedForms,
        saveForm,
        loadForm,
        setCurrentFormId
    } = useFormCache();

    const [showSavedForms, setShowSavedForms] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", birthDate: "", birthPlace: "", email: "",
        phone: "", parentName: "", parentContact: "", country: "", university: "",
        field: "", level: "", accommodation: null, selectedServices: [],
        tuitionFee: 0, // Ajout pour que handleChange dans ProgramSelectionForm puisse le mettre à jour
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const autoSave = async () => {
            if (!isLoadingDb && (formData.firstName || formData.email)) {
                await saveForm(formData);
            }
        };
        autoSave();
    }, [formData, saveForm, isLoadingDb]);

    const handleFormSelect = useCallback((formDataFromDb) => {
        setFormData(formDataFromDb);
        setShowSavedForms(false);

        let step = 1;
        if (formDataFromDb.firstName && formDataFromDb.lastName && formDataFromDb.email) {
            step = 2;
            if (formDataFromDb.university && formDataFromDb.field && formDataFromDb.level) {
                step = 3;
                if (formDataFromDb.accommodation) {
                    step = 4;
                    if (formDataFromDb.selectedServices && formDataFromDb.selectedServices.length >= 0) { // Peut-être > 0 ?
                        step = 5;
                    }
                }
            }
        }
        setCurrentStep(step);
    }, []); // Dépendances vides si handleFormSelect ne dépend pas de l'état/props de FormContainer

    const handleStartNewForm = useCallback(() => {
        const newFormId = `form_${Date.now()}`;
        setCurrentFormId(newFormId);
        setFormData({
            firstName: "", lastName: "", birthDate: "", birthPlace: "", email: "",
            phone: "", parentName: "", parentContact: "", country: "", university: "",
            field: "", level: "", accommodation: null, selectedServices: [], tuitionFee: 0,
        });
        setCurrentStep(1);
        setShowSavedForms(false);
    }, [setCurrentFormId]);

    const validateStep = useCallback((step) => {
        const newErrors = {};
        let isValid = true;

        if (step === 1) {
            if (!formData.firstName.trim()) { newErrors.firstName = "Le prénom est requis"; isValid = false; }
            if (!formData.lastName.trim()) { newErrors.lastName = "Le nom est requis"; isValid = false; }
            if (!formData.birthDate) { newErrors.birthDate = "La date de naissance est requise"; isValid = false; }
            if (!formData.birthPlace.trim()) { newErrors.birthPlace = "Le lieu de naissance est requis"; isValid = false; }
            if (!formData.email.trim()) { newErrors.email = "L'email est requis"; isValid = false; }
            else if (!/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "L'email est invalide"; isValid = false; }
            if (!formData.phone.trim()) { newErrors.phone = "Le numéro de téléphone est requis"; isValid = false; }
            if (!formData.parentName.trim()) { newErrors.parentName = "Le nom du parent est requis"; isValid = false; }
            if (!formData.parentContact.trim()) { newErrors.parentContact = "Le contact du parent est requis"; isValid = false; }
        } else if (step === 2) {
            if (!formData.country) { newErrors.country = "Le pays est requis"; isValid = false; }
            if (!formData.university) { newErrors.university = "L'université est requise"; isValid = false; }
            if (!formData.field) { newErrors.field = "La filière est requise"; isValid = false; }
            if (!formData.level) { newErrors.level = "Le niveau d'études est requis"; isValid = false; }
        } else if (step === 3) {
            if (!formData.accommodation) { newErrors.accommodation = "Le choix d'hébergement est requis"; isValid = false; }
        }
        setErrors(newErrors);
        return isValid;
    }, [formData]); // formData est une dépendance car validateStep lit formData

    const nextStep = useCallback(() => {
        if (validateStep(currentStep)) {
            setCurrentStep(prevCurrentStep => prevCurrentStep + 1); // Utiliser la forme fonctionnelle pour setCurrentStep
            saveForm(formData);
        }
    }, [currentStep, validateStep, saveForm, formData]); // Ajout des dépendances

    const prevStep = useCallback(() => {
        setCurrentStep(prevCurrentStep => prevCurrentStep - 1); // Utiliser la forme fonctionnelle
    }, []);

    // ICI LA CORRECTION PRINCIPALE
    const handleChange = useCallback((e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData(prev => ({ ...prev, [name]: newValue }));
    }, []); // Tableau de dépendances vide car la logique interne ne dépend pas d'autres props/state de FormContainer

    const handleAccommodationSelect = useCallback((accommodation) => {
        setFormData(prev => ({ ...prev, accommodation }));
    }, []);

    const handleServiceToggle = useCallback((serviceId) => {
        setFormData(prevFormData => {
            const currentServices = [...prevFormData.selectedServices];
            if (currentServices.includes(serviceId)) {
                return { ...prevFormData, selectedServices: currentServices.filter((id) => id !== serviceId) };
            } else {
                return { ...prevFormData, selectedServices: [...currentServices, serviceId] };
            }
        });
    }, []);


    if (isLoadingDb) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
                <p className="ml-3 text-gray-600">Chargement des données...</p>
            </div>
        );
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalInfoForm formData={formData} handleChange={handleChange} nextStep={nextStep} errors={errors} />;
            case 2:
                return <ProgramSelectionForm formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} errors={errors} mockData={mockData} UniversitySelector={UniversitySelector} />;
            case 3:
                return <AccommodationForm formData={formData} handleAccommodationSelect={handleAccommodationSelect} nextStep={nextStep} prevStep={prevStep} errors={errors} accommodations={mockData.accommodations} />;
            case 4:
                return (
                    <div className="space-y-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Frais Obligatoires</h3>
                        <p className="text-sm text-gray-600 mb-6">Les frais suivants sont requis pour le traitement de votre dossier.</p>
                        <div className="space-y-3">
                            {mockData.obligatoryFees && mockData.obligatoryFees.map(fee => (
                                <div key={fee.id} className="p-4 border rounded-md bg-gray-50">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-800">{fee.name}</span>
                                        <span className="font-semibold text-indigo-600">{fee.price.toLocaleString()} FCFA</span>
                                    </div>
                                    {fee.description && <p className="text-xs text-gray-500 mt-1">{fee.description}</p>}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-3 border-t border-gray-200 bg-indigo-50 rounded-md">
                             <div className="flex items-start">
                                <Info className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                                <p className="text-sm text-indigo-700">
                                    Ces frais seront à régler une fois votre dossier initial soumis et validé pour étude. Vous recevrez des instructions de paiement par email.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-8">
                            <button type="button" onClick={prevStep} className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50">Précédent</button>
                            <button type="button" onClick={nextStep} className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700">Continuer</button>
                        </div>
                    </div>
                );
            case 5:
                return <AdditionalServicesForm formData={formData} handleServiceToggle={handleServiceToggle} nextStep={nextStep} prevStep={prevStep} services={mockData.additionalServices} />;
            case 6:
                return <SummaryForm formData={formData} prevStep={prevStep} mockData={mockData} />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden relative">
            <div className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-8">
                    <GraduationCap className="h-8 w-8 text-indigo-600" />
                    <h1 className="text-2xl font-bold text-gray-900">Inscription aux Études à l'Étranger</h1>
                    <div className="ml-auto flex space-x-2">
                        <button onClick={() => setShowSavedForms(!showSavedForms)}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                        >
                            {showSavedForms ? 'Masquer' : 'Mes formulaires'}
                        </button>
                    </div>
                </div>
                {showSavedForms && (
                    <div className="mb-6">
                        <SavedFormsList onFormSelect={handleFormSelect} onNewForm={handleStartNewForm} />
                    </div>
                )}
                <StepIndicator currentStep={currentStep} totalSteps={6} /> {/* Assurez-vous que totalSteps est correct */}
                <div className="mt-8">{renderStep()}</div>
            </div>
        </div>
    );
}