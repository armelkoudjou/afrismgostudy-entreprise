"use client";
import React, { useState, useEffect } from "react";

// Frais par catégorie (ajoute ou modifie selon tes besoins)



export default function ProgramSelectionForm({ formData, handleChange, nextStep, prevStep, errors, mockData }) {
    const [subStep, setSubStep] = useState(1);
    const [availableCategories, setAvailableCategories] = useState([]);
    const [availableUniversities, setAvailableUniversities] = useState([]);
    const [availableFields, setAvailableFields] = useState([]);
    const tuitionFees = {
        "Les Universites Medicales de la Russie": 50000,
          "Les Universites D'ingenieur Et Techniques de la Russie": 60000,
          "Les Universites D’economie de la Russie": 55000,
          "Les Universites Agricoles / Agraire de la Russie": 52000,
          "Les Universites D'architecture Et De La Construction de la Russie": 58000,
          "Les Universites Chimiques Et Technologiques de la Russie": 58000,
          "Les Universites de La Geologie, L'industrie Miniere Et La Metallurgie de la Russie": 58000,
          "Les Universites Petro-Gaziers de la Russie": 58000,
          "Les Universites De La Technologie D’alimentation de la Russie": 58000,
          "Les Universites D’industrie Forestiere de la Russie": 58000,
          "Les Universites Marines Et Maritimes de la Russie": 58000,
          "Les Universites D’aviation de la Russie": 58000,
          "Les Universites Universites D'état de la Russie": 58000
        };
        


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
            
            const tuitionFee = tuitionFees[formData.category] || 0;
            handleChange({ target: { name: "tuitionFee", value: tuitionFee } });

            
            if (universities) {
                setAvailableUniversities(universities);
            } else {
                console.error(`La catégorie "${formData.category}" n'a pas de correspondance dans mockData.universities.`);
                setAvailableUniversities([]);
            }
        } else {
            setAvailableUniversities([]);
        }
    }, [formData.category, mockData]);

    useEffect(() => {
        console.log("Catégorie sélectionnée :", formData.category);
        console.log("Universités disponibles :", mockData?.universities?.[formData.category]);
    }, [formData.category, mockData]);

    useEffect(() => {
        if (formData.university && formData.level) {
            setAvailableFields(mockData?.fields?.[formData.university]?.[formData.level] || []);
        } else {
            setAvailableFields([]);
        }
    }, [formData.university, formData.level, mockData]);

    const handleUniversitySelect = (university) => {
        const tuitionFee = tuitionFees[formData.category] || 0;
        handleChange({ target: { name: "university", value: university } });
        handleChange({ target: { name: "tuitionFee", value: tuitionFee } });
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
                                    className={`p-4 border rounded-md cursor-pointer ${
                                        formData.country === country
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-gray-300 hover:border-indigo-300"
                                    }`}
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
                                    className={`p-4 border rounded-md cursor-pointer ${
                                        formData.category === category
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-gray-300 hover:border-indigo-300"
                                    }`}
                                >
                                    <div className="font-medium">{category}</div>
                                </div>
                            ))}
                        </div>
                        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900">Sélection de l'Université</h3>
                        <p className="text-sm text-gray-600">Choisissez l'université où vous souhaitez étudier</p>
                        <div className="grid grid-cols-1 gap-4">
                            {availableUniversities.map((university) => (
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
                                    className={`p-4 border rounded-md cursor-pointer ${
                                        formData.level === level
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-gray-300 hover:border-indigo-300"
                                    }`}
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {availableFields.map((field) => (
                                <div
                                    key={field}
                                    onClick={() => handleChange({ target: { name: "field", value: field } })}
                                    className={`p-4 border rounded-md cursor-pointer ${
                                        formData.field === field
                                            ? "border-indigo-500 bg-indigo-50"
                                            : "border-gray-300 hover:border-indigo-300"
                                    }`}
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
