"use client";
import React, { useState, useEffect } from "react";
import { calculateTuitionFee } from "../..//utils/CalculateTuitionFee";


export default function ProgramSelectionForm({ formData, handleChange, nextStep, prevStep, errors, mockData }) {
    const [subStep, setSubStep] = useState(1);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [availableUniversities, setAvailableUniversities] = useState([]);
    const [availableFields, setAvailableFields] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentTuitionFee, setCurrentTuitionFee] = useState(0);

    useEffect(() => {
        if (formData.country) {
            setAvailableCategories(mockData?.categories?.[formData.country] || []);
        } else {
            setAvailableCategories([]);
        }
    }, [formData.country, mockData]);

    useEffect(() => {
        if (formData.category) {
            const universities = mockData?.universities?.[formData.category];
            setAvailableUniversities(universities || []);
        } else {
            setAvailableUniversities([]);
        }
    }, [formData.category, mockData]);

    useEffect(() => {
        if (formData.university && formData.level) {
            setAvailableFields(mockData?.fields?.[formData.university]?.[formData.level] || []);
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
    }, [formData.category, formData.university, formData.level, formData.field]);

    const handleUniversitySelect = (university) => {
        handleChange({ target: { name: "university", value: university } });
    };

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
                                        onClick={() => handleUniversitySelect(university)}
                                        className={`p-4 border rounded-md cursor-pointer ${
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
                        {errors.field && <p className="mt-1 text-sm text-red-600">{errors.field}</p>}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6">
            {renderSubStep()}
            <div className="flex justify-between">
                <button
                    type="button"
                    onClick={handleSubStepPrev}
                    className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Précédent
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
