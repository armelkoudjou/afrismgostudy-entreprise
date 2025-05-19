"use client";
import React, { useState, useEffect } from "react";
import { calculateTuitionFee } from "../../utils/CalculateTuitionFee";

/**
 * Composant de sélection du programme d'études avec intégration du
 * sélecteur d'université amélioré et recherche optimisée
 */
export default function ProgramSelectionForm({ 
    formData, 
    handleChange, 
    nextStep, 
    prevStep, 
    errors, 
    mockData,
    UniversitySelector // Nouveau composant de sélection d'université
}) {
    const [subStep, setSubStep] = useState(1);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [availableUniversities, setAvailableUniversities] = useState([]);
    const [availableFields, setAvailableFields] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentTuitionFee, setCurrentTuitionFee] = useState(0);
    const [isLoadingUniversities, setIsLoadingUniversities] = useState(false);
    const [isLoadingFields, setIsLoadingFields] = useState(false);

    // Charger les catégories disponibles quand le pays change
    useEffect(() => {
        if (formData.country) {
            setAvailableCategories(mockData?.categories?.[formData.country] || []);
        } else {
            setAvailableCategories([]);
        }
    }, [formData.country, mockData]);

    // Charger les universités disponibles quand la catégorie change
    useEffect(() => {
        if (formData.category) {
            setIsLoadingUniversities(true);
            
            // Simuler une légère latence comme dans une application réelle
            setTimeout(() => {
                const universities = mockData?.universities?.[formData.category] || [];
                setAvailableUniversities(universities);
                setIsLoadingUniversities(false);
            }, 300);
        } else {
            setAvailableUniversities([]);
        }
    }, [formData.category, mockData]);

    // Charger les filières disponibles quand l'université et le niveau changent
    useEffect(() => {
        if (formData.university && formData.level) {
            setIsLoadingFields(true);
            
            // Simuler une légère latence comme dans une application réelle
            setTimeout(() => {
                setAvailableFields(mockData?.fields?.[formData.university]?.[formData.level] || []);
                setIsLoadingFields(false);
            }, 300);
        } else {
            setAvailableFields([]);
        }
    }, [formData.university, formData.level, mockData]);

    // Mise à jour des frais de scolarité à chaque changement pertinent
    useEffect(() => {
        if (formData.category && formData.university && formData.level && formData.field) {
            const fee = calculateTuitionFee({
                category: formData.category,
                university: formData.university,
                level: formData.level,
                field: formData.field
            });
            setCurrentTuitionFee(fee);
            handleChange({ target: { name: "tuitionFee", value: fee } });
        } else if (formData.category && formData.university && formData.level) {
            // Si seule la filière manque, calculer quand même les frais au niveau de l'université/niveau
            const fee = calculateTuitionFee({
                category: formData.category,
                university: formData.university,
                level: formData.level,
                field: null
            });
            setCurrentTuitionFee(fee);
            handleChange({ target: { name: "tuitionFee", value: fee } });
        } else if (formData.category && formData.level) {
            // Si seule l'université manque, calculer les frais au niveau de la catégorie/niveau
            const fee = calculateTuitionFee({
                category: formData.category,
                university: null,
                level: formData.level,
                field: null
            });
            setCurrentTuitionFee(fee);
            handleChange({ target: { name: "tuitionFee", value: fee } });
        }
    }, [formData.category, formData.university, formData.level, formData.field, handleChange]);

    // Gestion des sous-étapes
    const handleSubStepNext = () => {
        if (subStep === 1 && !formData.country) return;
        if (subStep === 2 && !formData.category) return;
        if (subStep === 3 && !formData.university) return;
        if (subStep === 4 && !formData.level) return;
        if (subStep === 5 && !formData.field) return;
        if (subStep < 5) {
            setSubStep(subStep + 1);
        } else {
            nextStep();
        }
    };

    const handleSubStepPrev = () => {
        if (subStep > 1) {
            setSubStep(subStep - 1);
        } else {
            prevStep();
        }
    };

    // Recherche de pays
    const handleCountrySearch = (query) => {
        if (!query) return mockData?.countries || [];
        
        const lowercaseQuery = query.toLowerCase();
        return (mockData?.countries || []).filter(country => 
            country.toLowerCase().includes(lowercaseQuery)
        );
    };

    // Nouveau rendu pour la sélection d'université avec le composant amélioré
    const renderUniversitySelector = () => {
        return (
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Sélection de l'Université</h3>
                <p className="text-sm text-gray-600">Choisissez l'université où vous souhaitez étudier</p>
                
                {isLoadingUniversities ? (
                    <div className="flex items-center justify-center py-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-indigo-500 border-t-transparent"></div>
                        <span className="ml-2 text-gray-600">Chargement des universités...</span>
                    </div>
                ) : (
                    <>
                        {/* Utilisation du composant de sélection d'université amélioré */}
                        {UniversitySelector ? (
                            <UniversitySelector
                                category={formData.category}
                                onSelect={(university) => handleChange({ 
                                    target: { name: "university", value: university } 
                                })}
                                initialValue={formData.university}
                                universities={availableUniversities}
                                placeholder="Rechercher une université..."
                            />
                        ) : (
                            // Fallback vers le sélecteur standard au cas où le composant avancé n'est pas disponible
                            <>
                                <input
                                    type="text"
                                    placeholder="Rechercher une université..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                
                                <div className="grid grid-cols-1 gap-4">
                                    {availableUniversities
                                        .filter(university => 
                                            university.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .map((university) => (
                                            <div
                                                key={university}
                                                onClick={() => handleChange({ 
                                                    target: { name: "university", value: university } 
                                                })}
                                                className={`p-4 border rounded-md cursor-pointer ${
                                                    formData.university === university
                                                        ? "border-indigo-500 bg-indigo-50"
                                                        : "border-gray-300 hover:border-indigo-300"
                                                }`}
                                            >
                                                <div className="font-medium">{university}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )}
                        
                        {availableUniversities.length === 0 && (
                            <p className="text-sm text-gray-500 text-center py-4">
                                Aucune université disponible pour cette catégorie.
                            </p>
                        )}
                    </>
                )}
                
                {errors.university && <p className="mt-1 text-sm text-red-600">{errors.university}</p>}
            </div>
        );
    };

    // Rendu principal basé sur la sous-étape
    const renderSubStep = () => {
        switch (subStep) {
            case 1:
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection du Pays</h3>
                        <p className="text-sm text-gray-600">Choisissez le pays où vous souhaitez étudier</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mockData?.countries?.map((country) => (
                                <div
                                    key={country}
                                    onClick={() => handleChange({ target: { name: "country", value: country } })}
                                    className={`p-4 border rounded-md cursor-pointer ${formData.country === country ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}
                                >
                                    <div className="font-medium">{country}</div>
                                </div>
                            ))}
                        </div>
                        {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection de la Catégorie d'Université</h3>
                        <p className="text-sm text-gray-600">Choisissez une catégorie d'université</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {availableCategories.map((category) => (
                                <div
                                    key={category}
                                    onClick={() => handleChange({ target: { name: "category", value: category } })}
                                    className={`p-4 border rounded-md cursor-pointer ${formData.category === category ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}
                                >
                                    <div className="font-medium">{category}</div>
                                </div>
                            ))}
                        </div>
                        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                    </div>
                );
            
            case 3:
                const filteredUniversities = availableUniversities.filter(university =>
                    university.toLowerCase().includes(searchQuery.toLowerCase())
                );
                
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection de l'Université</h3>
                        <p className="text-sm text-gray-600">Choisissez l'université où vous souhaitez étudier</p>
                        <input
                            type="text"
                            placeholder="Rechercher une université..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                
                        {filteredUniversities.length === 0 ? (
                            <p className="text-sm text-gray-500">Aucune université trouvée.</p>
                        ) : (
                            <div className="grid grid-cols-1 gap-4">
                                {filteredUniversities.map((university) => (
                                    <div
                                        key={university}
                                onClick={() => handleChange({
                                target: { name: "university", value: university }
                })}                                        className={`p-4 border rounded-md cursor-pointer ${
                                            formData.university === university
                                                ? "border-indigo-500 bg-indigo-50"
                                                : "border-gray-300 hover:border-indigo-300"
                                        }`}
                                    >
                                        <div className="font-medium">{university}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                
                        {errors.university && <p className="mt-1 text-sm text-red-600">{errors.university}</p>}
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Niveau d'Études</h3>
                        <p className="text-sm text-gray-600">Choisissez le niveau d'études que vous souhaitez poursuivre</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {["Licence", "Master", "Doctorat"].map((level) => (
                                <div
                                    key={level}
                                    onClick={() => handleChange({ target: { name: "level", value: level } })}
                                    className={`p-4 border rounded-md cursor-pointer ${formData.level === level ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}
                                >
                                    <div className="font-medium">{level}</div>
                                </div>
                            ))}
                        </div>
                        {errors.level && <p className="mt-1 text-sm text-red-600">{errors.level}</p>}
                    </div>
                );
                
            case 5:
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection de la Filière</h3>
                        <p className="text-sm text-gray-600">Choisissez la filière que vous souhaitez étudier</p>
                        
                        {currentTuitionFee > 0 && (
                            <div className="p-4 bg-gray-50 border rounded-md mb-4">
                                <h4 className="text-md font-medium text-gray-900">Frais de scolarité</h4>
                                <p className="text-sm text-gray-600">
                                    {currentTuitionFee.toLocaleString()} FCFA
                                </p>
                            </div>
                        )}
                        
                        {isLoadingFields ? (
                            <div className="flex items-center justify-center py-4">
                                <div className="animate-spin rounded-full h-6 w-6 border-2 border-indigo-500 border-t-transparent"></div>
                                <span className="ml-2 text-gray-600">Chargement des filières...</span>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {availableFields.map((field) => (
                                    <div
                                        key={field}
                                        onClick={() => handleChange({ target: { name: "field", value: field } })}
                                        className={`p-4 border rounded-md cursor-pointer ${formData.field === field ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}
                                    >
                                        <div className="font-medium">{field}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {availableFields.length === 0 && !isLoadingFields && (
                            <p className="text-sm text-gray-500 text-center py-4">
                                Aucune filière disponible pour cette université et ce niveau d'études.
                            </p>
                        )}
                        
                        {errors.field && <p className="mt-1 text-sm text-red-600">{errors.field}</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    // Afficher l'indicateur d'étape
    const renderProgressIndicator = () => {
        return (
            <div className="mb-6">
                <div className="flex items-center justify-between">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className="flex flex-col items-center">
                            <div 
                                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors
                                    ${subStep === step 
                                        ? 'bg-indigo-600 text-white' 
                                        : subStep > step
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {subStep > step ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    step
                                )}
                            </div>
                            <span className="text-xs mt-1 text-gray-500">
                                {step === 1 ? 'Pays' : 
                                 step === 2 ? 'Catégorie' : 
                                 step === 3 ? 'Université' : 
                                 step === 4 ? 'Niveau' : 'Filière'}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-3 h-1 bg-gray-200 rounded-full">
                    <div 
                        className="h-full bg-indigo-600 rounded-full transition-all duration-300" 
                        style={{ width: `${(subStep / 5) * 100}%` }}
                    ></div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {/* Indicateur de progression entre les sous-étapes */}
            {renderProgressIndicator()}
            
            {/* Contenu de la sous-étape */}
            {renderSubStep()}
            
            {/* Boutons de navigation */}
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={handleSubStepPrev}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {subStep === 1 ? 'Retour aux informations personnelles' : 'Précédent'}
                </button>
                <button
                    type="button"
                    onClick={handleSubStepNext}
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={
                        (subStep === 1 && !formData.country) ||
                        (subStep === 2 && !formData.category) ||
                        (subStep === 3 && !formData.university) ||
                        (subStep === 4 && !formData.level) ||
                        (subStep === 5 && !formData.field)
                    }
                >
                    {subStep < 5 ? "Suivant" : "Continuer vers Choix Logement"}
                </button>
            </div>
        </div>
    );
}