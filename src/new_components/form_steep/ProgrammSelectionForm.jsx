"use client"
import React, { useState, useEffect } from "react";

export default function ProgramSelectionForm({ formData, handleChange, nextStep, prevStep, errors, mockData }) {
    const [subStep, setSubStep] = useState(1);
    const [availableUniversities, setAvailableUniversities] = useState([]);
    const [availableFields, setAvailableFields] = useState([]);

    useEffect(() => {
        if (formData.country) {
            setAvailableUniversities(mockData.universities[formData.country] || []);
        } else {
            setAvailableUniversities([]);
        }
    }, [formData.country, mockData.universities]);

    useEffect(() => {
        if (formData.university && formData.level) {
            setAvailableFields(mockData.fields[formData.university]?.[formData.level] || []);
        } else {
            setAvailableFields([]);
        }
    }, [formData.university, formData.level, mockData.fields]);

    const handleSubStepNext = () => {
        if (subStep === 1 && !formData.country) return;
        if (subStep === 2 && !formData.university) return;
        if (subStep === 3 && !formData.level) return;
        if (subStep === 4 && !formData.field) return;

        if (subStep < 4) {
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
                            {mockData.countries.map((country) => (
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
                        <h3 className="text-lg font-medium text-gray-900">Sélection de l'Université</h3>
                        <p className="text-sm text-gray-600">Choisissez l'université où vous souhaitez étudier</p>
                        <div className="grid grid-cols-1 gap-4">
                            {availableUniversities.map((university) => (
                                <div
                                    key={university}
                                    onClick={() => handleChange({ target: { name: "university", value: university } })}
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
            case 3:
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
            case 4:
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
                        (subStep === 2 && !formData.university) ||
                        (subStep === 3 && !formData.level) ||
                        (subStep === 4 && !formData.field)
                    }
                >
                    {subStep < 4 ? "Suivant" : "Continuer vers Hébergement"}
                </button>
            </div>
        </div>
    );
}

