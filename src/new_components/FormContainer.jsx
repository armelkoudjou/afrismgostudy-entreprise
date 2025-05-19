"use client"
import React from 'react';
import { useState, useEffect } from "react"
import { GraduationCap } from "lucide-react"
import PersonalInfoForm from "./form_steep/PersonnalInfoForm.jsx"
import ProgramSelectionForm from "./form_steep/ProgrammSelectionForm.jsx"
import AccommodationForm from "./form_steep/AccomodationForm.jsx"
import AdditionalServicesForm from "./form_steep/AdditionalServiceForm.jsx"
import SummaryForm from "./form_steep/SummuryForm.jsx"
import StepIndicator from "./SteepIndicator.jsx"
import { mockData } from "./lib/data"

// Importation des fonctionnalités conservées
import { useLocalDatabase, useFormCache } from "../utils/database.js";
import SavedFormsList from "../new_components/SavedFormsList.jsx";
import UniversitySelector from "../new_components/UniversitySelector.jsx";

export default function FormContainer() {
    // Hook pour la base de données locale
    const { db, isInitialized, isLoading } = useLocalDatabase();

    // Hook pour la mise en cache des formulaires
    const { 
        currentFormId, 
        savedForms, 
        saveForm, 
        loadForm, 
        setCurrentFormId 
    } = useFormCache();
    
    // État pour afficher la liste des formulaires sauvegardés
    const [showSavedForms, setShowSavedForms] = useState(false);

    // État pour l'étape actuelle et les données du formulaire
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        // Étape 1: Informations personnelles
        firstName: "",
        lastName: "",
        birthDate: "",
        birthPlace: "",
        email: "",
        phone: "",
        parentName: "",
        parentContact: "",

        // Étape 2: Programme d'étude
        country: "",
        university: "",
        field: "",
        level: "",
        
        // Étape 3: Hébergement
        accommodation: null,

        // Étape 4: Services complémentaires
        selectedServices: [],
    })
    // État pour les erreurs
    const [errors, setErrors] = useState({})

    // Sauvegarde automatique des modifications
    useEffect(() => {
        const autoSave = async () => {
            if (!isLoading && (formData.firstName || formData.email)) {
                await saveForm(formData);
            }
        };
        
        autoSave();
    }, [formData, saveForm, isLoading]);

    // Fonction pour gérer la sélection d'un formulaire sauvegardé
    const handleFormSelect = (formData) => {
        setFormData(formData);
        setShowSavedForms(false);

        // Déterminer l'étape en fonction des données remplies
        let step = 1;
        if (formData.firstName && formData.lastName && formData.email) {
            step = 2;
            if (formData.university && formData.field && formData.level) {
                step = 3;
                if (formData.accommodation) {
                    step = 4;
                    if (formData.selectedServices) {
                        step = 5;
                    }
                }
            }
        }
        
        setCurrentStep(step);
    };
        
    // Fonction pour démarrer un nouveau formulaire
    const handleStartNewForm = () => {
        // Générer un nouvel ID
        const newFormId = `form_${Date.now()}`;
        setCurrentFormId(newFormId);
        
        // Réinitialiser le formulaire
        setFormData({
            firstName: "",
            lastName: "",
            birthDate: "",
            birthPlace: "",
            email: "",
            phone: "",
            parentName: "",
            parentContact: "",
            country: "",
            university: "",
            field: "",
            level: "",
            accommodation: null,
            selectedServices: [],
        });
        
        setCurrentStep(1);
        setShowSavedForms(false);
    };

    const validateStep = (step) => {
        const newErrors = {}
        let isValid = true

        if (step === 1) {
            // Validation des informations personnelles
            if (!formData.firstName.trim()) {
                newErrors.firstName = "Le prénom est requis"
                isValid = false
            }

            if (!formData.lastName.trim()) {
                newErrors.lastName = "Le nom est requis"
                isValid = false
            }

            if (!formData.birthDate) {
                newErrors.birthDate = "La date de naissance est requise"
                isValid = false
            }

            if (!formData.birthPlace.trim()) {
                newErrors.birthPlace = "Le lieu de naissance est requis"
                isValid = false
            }

            if (!formData.email.trim()) {
                newErrors.email = "L'email est requis"
                isValid = false
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "L'email est invalide"
                isValid = false
            }

            if (!formData.phone.trim()) {
                newErrors.phone = "Le numéro de téléphone est requis"
                isValid = false
            }

            if (!formData.parentName.trim()) {
                newErrors.parentName = "Le nom du parent est requis"
                isValid = false
            }

            if (!formData.parentContact.trim()) {
                newErrors.parentContact = "Le contact du parent est requis"
                isValid = false
            }
        } else if (step === 2) {
            // Validation du programme d'étude
            if (!formData.country) {
                newErrors.country = "Le pays est requis"
                isValid = false
            }

            if (!formData.university) {
                newErrors.university = "L'université est requise"
                isValid = false
            }

            if (!formData.field) {
                newErrors.field = "La filière est requise"
                isValid = false
            }

            if (!formData.level) {
                newErrors.level = "Le niveau d'études est requis"
                isValid = false
            }
        } else if (step === 3) {
            // Validation de l'hébergement
            if (!formData.accommodation) {
                newErrors.accommodation = "Le choix d'hébergement est requis"
                isValid = false
            }
        } else if (step === 4) {
            // Validation des services complémentaires
            if (!formData.selectedServices) {
                newErrors.selectedServices = "Le service obligatoire doit être sélectionné.";
                isValid = false;
            }
        }

        setErrors(newErrors)
        return isValid
    };

    // Navigation entre les étapes
    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(currentStep + 1)
            saveForm(formData); // Sauvegarder à chaque étape
        }
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1)
    }

    // Gérer les changements dans le formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        
        setFormData(prev => ({
            ...prev,
            [name]: newValue,
        }));
    };
    
    // Gérer la sélection d'hébergement
    const handleAccommodationSelect = (accommodation) => {
        setFormData({
            ...formData,
            accommodation,
        });
    };
    
    // Gérer la sélection de services
    const handleServiceToggle = (serviceId) => {
        const currentServices = [...formData.selectedServices]

        if (currentServices.includes(serviceId)) {
            // Retirer le service s'il est déjà sélectionné
            setFormData({
                ...formData,
                selectedServices: currentServices.filter((id) => id !== serviceId),
            })
        } else {
            // Ajouter le service s'il n'est pas déjà sélectionné
            setFormData({
                ...formData,
                selectedServices: [...currentServices, serviceId],
            });
        }
    };
    
    // Afficher le chargement pendant l'initialisation
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
                <p className="ml-3 text-gray-600">Chargement des données...</p>
            </div>
        );
    }

    // Afficher le formulaire correspondant à l'étape actuelle
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <PersonalInfoForm 
                    formData={formData} 
                    handleChange={handleChange} 
                    nextStep={nextStep} 
                    errors={errors} 
                />;
            case 2:
                return (
                    <ProgramSelectionForm
                        formData={formData}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        errors={errors}
                        mockData={mockData}
                        UniversitySelector={UniversitySelector} // Utiliser le nouveau sélecteur
                    />
                );
            case 3:
                return (
                    <AccommodationForm
                        formData={formData}
                        handleAccommodationSelect={handleAccommodationSelect}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        errors={errors}
                        accommodations={mockData.accommodations}
                    />
                );
            case 4:
                return (
                    <AdditionalServicesForm
                        formData={formData}
                        handleServiceToggle={handleServiceToggle}
                        nextStep={nextStep}
                        prevStep={prevStep}
                        services={mockData.additionalServices}
                    />
                );
            case 5:
                return <SummaryForm 
                    formData={formData} 
                    prevStep={prevStep} 
                    mockData={mockData} 
                />;
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
                        {/* Bouton pour afficher les formulaires sauvegardés */}
                        <button 
                            onClick={() => setShowSavedForms(!showSavedForms)} 
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                        >
                            {showSavedForms ? 'Masquer' : 'Mes formulaires'}
                        </button>
                    </div>
                </div>
                
                {/* Liste des formulaires sauvegardés */}
                {showSavedForms && (
                    <div className="mb-6">
                        <SavedFormsList
                            onFormSelect={handleFormSelect}
                            onNewForm={handleStartNewForm}
                        />
                    </div>
                )}
                
                <StepIndicator currentStep={currentStep} />
                
                <div className="mt-8">{renderStep()}</div>
            </div>
        </div>
    );
}