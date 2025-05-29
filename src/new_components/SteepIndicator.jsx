import React from 'react';

export default function StepIndicator({ currentStep }) {
    const steps = [
        { number: 1, label: "Informations Personnelles" },
        { number: 2, label: "Choix du Programme" },
        { number: 3, label: "Choix du Logement" },
        { number: 4,label:"Frais obligatoires"},
        { number: 5, label: "Services Supplémentaires" },
        { number: 6, label: "Résumé" },
    ]

    return (
        <div className="flex justify-between">
            {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                    <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            currentStep === step.number ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-600"
                        }`}
                    >
                        {step.number}
                    </div>
                    <span
                        className={`ml-2 text-sm ${currentStep === step.number ? "text-gray-900 font-medium" : "text-gray-500"}`}
                    >
            {step.label}
          </span>
                </div>
            ))}
        </div>
    )
}

