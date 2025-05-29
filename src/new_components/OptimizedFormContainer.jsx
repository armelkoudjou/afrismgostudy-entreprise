import React, { lazy, Suspense, memo, useState, useCallback, useMemo } from 'react';

/**
 * Chargement différé des étapes de formulaire pour réduire le bundle initial
 */
const LazyPersonalInfoForm = lazy(() => import('./form_steep/PersonnalInfoForm.jsx'));
const LazyProgramSelectionForm = lazy(() => import('./form_steep/ProgrammSelectionForm.jsx'));
const LazyAccommodationForm = lazy(() => import('./form_steep/AccomodationForm.jsx'));
const LazyAdditionalServicesForm = lazy(() => import('./form_steep/AdditionalServiceForm.jsx'));
const LazySummaryForm = lazy(() => import('./form_steep/SummuryForm.jsx'));

/**
 * Composant de fallback pendant le chargement
 */
function FormLoading() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-md shadow-sm">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent"></div>
      <p className="mt-4 text-gray-600">Chargement du formulaire...</p>
    </div>
  );
}

/**
 * Version optimisée du StepIndicator
 */
const OptimizedStepIndicator = memo(({ currentStep, steps }) => {
  return (
    <div className="flex justify-between">
      {steps.map((step) => (
        <div key={step.number} className="flex items-center">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep === step.number 
                ? "bg-indigo-600 text-white" 
                : currentStep > step.number
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-200 text-gray-600"
            }`}
          >
            {currentStep > step.number ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              step.number
            )}
          </div>
          <span
            className={`ml-2 text-sm ${
              currentStep === step.number 
                ? "text-gray-900 font-medium" 
                : "text-gray-500"
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
});

OptimizedStepIndicator.displayName = 'OptimizedStepIndicator';

/**
 * Version optimisée du conteneur de formulai²re
 */
export default function OptimizedFormContainer() {
  // Définition des étapes
  const formSteps = useMemo(() => [
    { number: 1, label: "Informations Personnelles" },
    { number: 2, label: "Choix du Programme" },
    { number: 3, label: "Choix du Logement" },
    { number: 4, label: "Services Complémentaires" },
    { number: 5, label: "Résumé" },
  ], []);
  
  const [currentStep, setCurrentStep] = useState(1);
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
    
    // Étape 4: Services Supplémentaires
    selectedServices: [],
  });
  
  const [errors, setErrors] = useState({});
  
  // Fonctions de validation et navigation memoizées pour éviter les re-renders inutiles
  const validateStep = useCallback((step) => {
    const newErrors = {};
    let isValid = true;
    
    if (step === 1) {
      // Validation des informations personnelles
      if (!formData.firstName.trim()) {
        newErrors.firstName = "Le prénom est requis";
        isValid = false;
      }
      
      if (!formData.lastName.trim()) {
        newErrors.lastName = "Le nom est requis";
        isValid = false;
      }
      
      if (!formData.birthDate) {
        newErrors.birthDate = "La date de naissance est requise";
        isValid = false;
      }
      
      if (!formData.birthPlace.trim()) {
        newErrors.birthPlace = "Le lieu de naissance est requis";
        isValid = false;
      }
      
      if (!formData.email.trim()) {
        newErrors.email = "L'email est requis";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "L'email est invalide";
        isValid = false;
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = "Le numéro de téléphone est requis";
        isValid = false;
      }
      
      if (!formData.parentName.trim()) {
        newErrors.parentName = "Le nom du parent est requis";
        isValid = false;
      }
      
      if (!formData.parentContact.trim()) {
        newErrors.parentContact = "Le contact du parent est requis";
        isValid = false;
      }
    } else if (step === 2) {
      // Validation du programme d'étude
      if (!formData.country) {
        newErrors.country = "Le pays est requis";
        isValid = false;
      }
      
      if (!formData.university) {
        newErrors.university = "L'université est requise";
        isValid = false;
      }
      
      if (!formData.field) {
        newErrors.field = "La filière est requise";
        isValid = false;
      }
      
      if (!formData.level) {
        newErrors.level = "Le niveau d'études est requis";
        isValid = false;
      }
    } else if (step === 3) {
      // Validation de l'hébergement
      if (!formData.accommodation) {
        newErrors.accommodation = "Le choix d'hébergement est requis";
        isValid = false;
      }
    }
    
    setErrors(newErrors);
    return isValid;
  }, [formData]);
  
  const nextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
      
      // Sauvegarder l'état du formulaire dans localStorage
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('currentStep', JSON.stringify(currentStep + 1));
    }
  }, [currentStep, formData, validateStep]);
  
  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
    localStorage.setItem('currentStep', JSON.stringify(currentStep - 1));
  }, [currentStep]);
  
  // Optimiser handleChange avec useCallback pour éviter les re-renders inutiles
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  }, []);
  
  const handleAccommodationSelect = useCallback((accommodation) => {
    setFormData((prev) => ({
      ...prev,
      accommodation,
    }));
  }, []);
  
  const handleServiceToggle = useCallback((serviceId) => {
    setFormData((prev) => {
      const currentServices = [...prev.selectedServices];
      
      if (currentServices.includes(serviceId)) {
        // Retirer le service s'il est déjà sélectionné
        return {
          ...prev,
          selectedServices: currentServices.filter((id) => id !== serviceId),
        };
      } else {
        // Ajouter le service s'il n'est pas déjà sélectionné
        return {
          ...prev,
          selectedServices: [...currentServices, serviceId],
        };
      }
    });
  }, []);
  
  // Récupérer les données sauvegardées au chargement initial
  React.useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    const savedStep = localStorage.getItem('currentStep');
    
    if (savedFormData) {
      try {
        setFormData(JSON.parse(savedFormData));
      } catch (e) {
        console.error('Erreur lors de la lecture des données sauvegardées:', e);
      }
    }
    
    if (savedStep) {
      try {
        setCurrentStep(JSON.parse(savedStep));
      } catch (e) {
        console.error('Erreur lors de la lecture de l\'étape sauvegardée:', e);
      }
    }
  }, []);
  
  // Rendu du formulaire courant avec Suspense/lazy pour le code-splitting
  const renderCurrentForm = useCallback(() => {
    return (
      <Suspense fallback={<FormLoading />}>
        {currentStep === 1 && (
          <LazyPersonalInfoForm 
            formData={formData} 
            handleChange={handleChange} 
            nextStep={nextStep} 
            errors={errors} 
          />
        )}
        {currentStep === 2 && (
          <LazyProgramSelectionForm
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
            mockData={window.mockData} // Accéder aux données via une variable globale pour éviter les imports coûteux
          />
        )}
        {currentStep === 3 && (
          <LazyAccommodationForm
            formData={formData}
            handleAccommodationSelect={handleAccommodationSelect}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
            accommodations={window.mockData?.accommodations || []}
          />
        )}
        {currentStep === 4 && (
          <LazyAdditionalServicesForm
            formData={formData}
            handleServiceToggle={handleServiceToggle}
            nextStep={nextStep}
            prevStep={prevStep}
            services={window.mockData?.additionalServices || []}
          />
        )}
        {currentStep === 5 && (
          <LazySummaryForm 
            formData={formData} 
            prevStep={prevStep} 
            mockData={window.mockData} 
          />
        )}
      </Suspense>
    );
  }, [
    currentStep, 
    formData, 
    errors, 
    handleChange, 
    nextStep, 
    prevStep, 
    handleAccommodationSelect, 
    handleServiceToggle
  ]);
  
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-white">
        <div className="flex items-center gap-3 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900">Inscription aux Études à l'Étranger</h1>
        </div>
        
        <OptimizedStepIndicator currentStep={currentStep} steps={formSteps} />
        
        <div className="mt-8">
          {renderCurrentForm()}
        </div>
      </div>
    </div>
  );
}

/**
 * Méthode pour pré-charger les formulaires en arrière-plan
 */
export function preloadFormComponents() {
  // Précharger les composants en arrière-plan
  const promises = [
    import('./form_steep/PersonnalInfoForm.jsx'),
    import('./form_steep/ProgrammSelectionForm.jsx'),
    import('./form_steep/AccomodationForm.jsx'),
    import('./form_steep/AdditionalServiceForm.jsx'),
    import('./form_steep/SummuryForm.jsx')
  ];
  
  // Exécuter les promesses en arrière-plan
  Promise.all(promises).catch(error => {
    console.warn('Erreur lors du préchargement des composants:', error);
  });
}