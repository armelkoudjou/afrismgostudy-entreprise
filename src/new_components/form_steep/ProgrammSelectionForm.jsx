"use client";
import React, { useState, useEffect, useCallback } from "react"; // Ajout de useCallback
import { calculateTuitionFee } from "../../utils/CalculateTuitionFee";

export default function ProgramSelectionForm({
    formData,
    handleChange, // Cette fonction vient de FormContainer et est maintenant mémorisée
    nextStep,
    prevStep,
    errors,
    mockData,
    UniversitySelector
}) {
    const [subStep, setSubStep] = useState(1);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [availableUniversities, setAvailableUniversities] = useState([]);
    const [availableFields, setAvailableFields] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentTuitionFee, setCurrentTuitionFee] = useState(formData.tuitionFee || 0); // Initialiser avec la valeur de formData
    const [isLoadingUniversities, setIsLoadingUniversities] = useState(false);
    const [isLoadingFields, setIsLoadingFields] = useState(false);

    // Charger les catégories disponibles quand le pays change
    useEffect(() => {
        // console.log("[ProgramSelectionForm] useEffect - formData.country changed:", formData.country);
        if (formData.country) {
            setAvailableCategories(mockData?.categories?.[formData.country] || []);
        } else {
            setAvailableCategories([]);
        }
    }, [formData.country, mockData]); // mockData est supposé stable

    // Charger les universités disponibles quand la catégorie change
    useEffect(() => {
        // console.log("[ProgramSelectionForm] useEffect - formData.category changed:", formData.category);
        if (formData.category) {
            setIsLoadingUniversities(true);
            const timer = setTimeout(() => { // Stocker le timer pour le nettoyer
                const universities = mockData?.universities?.[formData.category] || [];
                setAvailableUniversities(universities);
                setIsLoadingUniversities(false);
                // console.log("[ProgramSelectionForm] Universities loaded:", universities);
            }, 300);
            return () => clearTimeout(timer); // Nettoyer le timeout
        } else {
            setAvailableUniversities([]);
        }
    }, [formData.category, mockData]);

    // Charger les filières disponibles quand l'université et le niveau changent
    useEffect(() => {
        // console.log("[ProgramSelectionForm] useEffect - formData.university or formData.level changed. Uni:", formData.university, "Level:", formData.level);
        if (formData.university && formData.level) {
            setIsLoadingFields(true);
            const timer = setTimeout(() => { // Stocker le timer pour le nettoyer
                const fields = mockData?.fields?.[formData.university]?.[formData.level] || [];
                setAvailableFields(fields);
                setIsLoadingFields(false);
                // console.log("[ProgramSelectionForm] Fields loaded:", fields);
            }, 300);
            return () => clearTimeout(timer); // Nettoyer le timeout
        } else {
            setAvailableFields([]);
        }
    }, [formData.university, formData.level, mockData]);

    // Mise à jour des frais de scolarité
    useEffect(() => {
        let fee = 0;
        if (formData.category && formData.university && formData.level && formData.field) {
            fee = calculateTuitionFee({ category: formData.category, university: formData.university, level: formData.level, field: formData.field });
        } else if (formData.category && formData.university && formData.level) {
            fee = calculateTuitionFee({ category: formData.category, university: formData.university, level: formData.level, field: null });
        } else if (formData.category && formData.level) { // Moins probable d'avoir un tarif sans université, mais on garde la logique
            fee = calculateTuitionFee({ category: formData.category, university: null, level: formData.level, field: null });
        }
        
        if (fee !== currentTuitionFee) { // Mettre à jour seulement si la valeur change
            setCurrentTuitionFee(fee);
            // Important: handleChange est maintenant stable grâce à useCallback dans FormContainer
            handleChange({ target: { name: "tuitionFee", value: fee } });
        }
    }, [formData.category, formData.university, formData.level, formData.field, handleChange, currentTuitionFee]); // Ajout de currentTuitionFee pour éviter appel si fee n'a pas changé

    const handleSubStepNext = useCallback(() => {
        // console.log("[ProgramSelectionForm] handleSubStepNext called. Current subStep:", subStep, "formData.field:", formData.field);
        if (subStep === 1 && !formData.country) { /*console.log("Country not selected");*/ return; }
        if (subStep === 2 && !formData.category) { /*console.log("Category not selected");*/ return; }
        if (subStep === 3 && !formData.university) { /*console.log("University not selected");*/ return; }
        if (subStep === 4 && !formData.level) { /*console.log("Level not selected");*/ return; }
        if (subStep === 5 && !formData.field) { /*console.log("Field not selected, cannot proceed from subStep 5");*/ return; }

        if (subStep < 5) {
            // console.log("[ProgramSelectionForm] Advancing to next subStep from:", subStep);
            setSubStep(prev => prev + 1);
        } else {
            // console.log("[ProgramSelectionForm] All subSteps completed, calling nextStep (from FormContainer)");
            nextStep();
        }
    }, [subStep, formData, nextStep]); // Dépendances pour handleSubStepNext

    const handleSubStepPrev = useCallback(() => {
        // console.log("[ProgramSelectionForm] handleSubStepPrev called. Current subStep:", subStep);
        if (subStep > 1) {
            setSubStep(prev => prev - 1);
        } else {
            prevStep();
        }
    }, [subStep, prevStep]); // Dépendances pour handleSubStepPrev

    const handleLocalChange = useCallback((event) => {
        // console.log("[ProgramSelectionForm] handleLocalChange called for field:", event.target.name, "with value:", event.target.value);
        // Réinitialiser les sélections dépendantes lors d'un changement plus haut dans la hiérarchie
        const { name, value } = event.target;
        let resetFields = {};
        if (name === "country") {
            resetFields = { category: "", university: "", level: "", field: "", tuitionFee: 0 };
            setAvailableCategories(mockData?.categories?.[value] || []);
            setAvailableUniversities([]);
            setAvailableFields([]);
        } else if (name === "category") {
            resetFields = { university: "", level: "", field: "", tuitionFee: 0 };
            setAvailableUniversities(mockData?.universities?.[value] || []);
            setAvailableFields([]);
        } else if (name === "university") {
            resetFields = { field: "", tuitionFee: 0 }; // Garder le niveau si possible
            setAvailableFields(mockData?.fields?.[value]?.[formData.level] || []);
        } else if (name === "level") {
            resetFields = { field: "", tuitionFee: 0 };
            setAvailableFields(mockData?.fields?.[formData.university]?.[value] || []);
        }

        handleChange({ target: { name, value } }); // Propage le changement original
        for (const key in resetFields) { // Propage les réinitialisations
            handleChange({ target: { name: key, value: resetFields[key] }});
        }

    }, [handleChange, mockData, formData.level, formData.university]); // Dépendances pour handleLocalChange


    // DEBUG LOGS (à retirer ou commenter en production)
    // console.log("--- Debug ProgramSelectionForm RENDER ---");
    // console.log("Current subStep:", subStep);
    // console.log("formData:", formData);
    // console.log("Is 'Continuer' button disabled?:", isButtonDisabled);
    // console.log("Available fields:", availableFields);
    // console.log("Errors:", errors);
    // console.log("--------------------------------------");

    const isButtonDisabled =
        (subStep === 1 && !formData.country) ||
        (subStep === 2 && !formData.category) ||
        (subStep === 3 && !formData.university) ||
        (subStep === 4 && !formData.level) ||
        (subStep === 5 && !formData.field);

    const renderSubStep = () => {
        // ... (Le code de renderSubStep reste le même, mais il utilisera le handleLocalChange mémorisé)
        // Assurez-vous que tous les onClick dans renderSubStep appellent handleLocalChange
        // Exemple pour le cas 1 (Sélection du Pays):
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
                                    onClick={() => handleLocalChange({ target: { name: "country", value: country } })}
                                    className={`p-4 border rounded-md cursor-pointer ${formData.country === country ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}
                                >
                                    <div className="font-medium">{country}</div>
                                </div>
                            ))}
                        </div>
                        {errors?.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
                    </div>
                );
            case 2: // Sélection de la Catégorie
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection de la Catégorie d'Université</h3>
                        <p className="text-sm text-gray-600">Choisissez une catégorie d'université</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {availableCategories.map((category) => (
                                <div
                                    key={category}
                                    onClick={() => handleLocalChange({ target: { name: "category", value: category } })}
                                    className={`p-4 border rounded-md cursor-pointer ${formData.category === category ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}
                                >
                                    <div className="font-medium">{category}</div>
                                </div>
                            ))}
                        </div>
                        {errors?.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                    </div>
                );
            case 3: // Sélection de l'Université
                const filteredUniversities = availableUniversities.filter(university =>
                    university.toLowerCase().includes(searchQuery.toLowerCase())
                );
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection de l'Université</h3>
                        <p className="text-sm text-gray-600">Choisissez l'université où vous souhaitez étudier</p>
                        <input type="text" placeholder="Rechercher une université..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        {isLoadingUniversities ? ( <div>Chargement...</div> ) : filteredUniversities.length === 0 ? (
                            <p className="text-sm text-gray-500">Aucune université trouvée pour cette catégorie ou recherche.</p>
                        ) : (
                            <div className="grid grid-cols-1 gap-4 max-h-60 overflow-y-auto"> {/* Ajout de scroll si trop d'items */}
                                {filteredUniversities.map((university) => (
                                    <div key={university} onClick={() => handleLocalChange({ target: { name: "university", value: university } })}
                                        className={`p-4 border rounded-md cursor-pointer ${formData.university === university ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}>
                                        <div className="font-medium">{university}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {errors?.university && <p className="mt-1 text-sm text-red-600">{errors.university}</p>}
                    </div>
                );
            case 4: // Niveau d'Études
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Niveau d'Études</h3>
                        <p className="text-sm text-gray-600">Choisissez le niveau d'études</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {["Licence", "Master", "Doctorat"].map((level) => (
                                <div key={level} onClick={() => handleLocalChange({ target: { name: "level", value: level } })}
                                    className={`p-4 border rounded-md cursor-pointer ${formData.level === level ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}>
                                    <div className="font-medium">{level}</div>
                                </div>
                            ))}
                        </div>
                        {errors?.level && <p className="mt-1 text-sm text-red-600">{errors.level}</p>}
                    </div>
                );
            case 5: // Sélection de la Filière
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection de la Filière</h3>
                        <p className="text-sm text-gray-600">Choisissez la filière</p>
                        {currentTuitionFee > 0 && (
                            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md mb-4">
                                <p className="text-sm text-blue-700">Frais de scolarité (estimés): <span className="font-semibold">{currentTuitionFee.toLocaleString()} FCFA</span></p>
                            </div>
                        )}
                        {isLoadingFields ? ( <div>Chargement des filières...</div> ) :
                            availableFields.length === 0 ? (<p className="text-sm text-gray-500 text-center py-4">Aucune filière disponible pour cette université et ce niveau.</p>) :
                            (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto"> {/* Ajout de scroll si trop d'items */}
                                {availableFields.map((fieldItem) => (
                                    <div key={fieldItem} onClick={() => handleLocalChange({ target: { name: "field", value: fieldItem } })}
                                        className={`p-4 border rounded-md cursor-pointer ${formData.field === fieldItem ? "border-indigo-500 bg-indigo-50" : "border-gray-300 hover:border-indigo-300"}`}>
                                        <div className="font-medium">{fieldItem}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {errors?.field && <p className="mt-1 text-sm text-red-600">{errors.field}</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    const renderProgressIndicator = () => {
        return ( <div className="mb-6"> <div className="flex items-center justify-between"> {[1, 2, 3, 4, 5].map((step) => ( <div key={step} className="flex flex-col items-center w-1/5"> <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${subStep === step ? 'bg-indigo-600 text-white' : subStep > step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}> {subStep > step ? ( <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> ) : ( step )} </div> <span className="text-xs mt-1 text-gray-500 text-center"> {step === 1 ? 'Pays' : step === 2 ? 'Catégorie' : step === 3 ? 'Université' : step === 4 ? 'Niveau' : 'Filière'} </span> </div> ))} </div> <div className="mt-3 h-1 bg-gray-200 rounded-full"> <div className="h-full bg-indigo-600 rounded-full transition-all duration-300" style={{ width: `${((subStep -1) / 4) * 100}%` }}></div> </div> </div> );
    };


    return (
        <div className="space-y-6">
            {renderProgressIndicator()}
            {renderSubStep()}
            <div className="flex justify-between pt-4 border-t border-gray-200 mt-6">
                <button
                    type="button"
                    onClick={handleSubStepPrev}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    {subStep === 1 ? 'Retour aux infos perso.' : 'Précédent'}
                </button>
                <button
                    type="button"
                    onClick={handleSubStepNext}
                    className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isButtonDisabled}
                >
                    {subStep < 5 ? "Suivant" : "Continuer"} {/* Changé le texte du dernier bouton */}
                </button>
            </div>
        </div>
    );
}