// form-validation.js
import { useState, useEffect, useCallback } from 'react';

/**
 * Hook React pour gérer la validation de formulaire
 * @param {Object} initialValues - Valeurs initiales du formulaire
 * @param {Function} validate - Fonction de validation
 * @param {Function} onSubmit - Fonction exécutée à la soumission si le formulaire est valide
 */
export function useFormValidation(initialValues, validate, onSubmit) {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Validation en temps réel
  const validateForm = useCallback(() => {
    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
    return validationErrors;
  }, [values, validate]);

  // Validation au changement des valeurs
  useEffect(() => {
    if (isDirty) {
      validateForm();
    }
  }, [values, isDirty, validateForm]);

  // Initialiser la validation
  useEffect(() => {
    validateForm();
  }, [validateForm]);

  // Gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: fieldValue,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setIsDirty(true);
  };

  // Mise à jour directe d'une valeur
  const setValue = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));

    setIsDirty(true);
  };

  // Mise à jour directe de plusieurs valeurs
  const setMultipleValues = (newValues) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...newValues,
    }));

    // Marquer tous les champs mis à jour comme touchés
    const touchedFields = {};
    Object.keys(newValues).forEach((key) => {
      touchedFields[key] = true;
    });

    setTouched((prevTouched) => ({
      ...prevTouched,
      ...touchedFields,
    }));

    setIsDirty(true);
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    setIsDirty(true);
    
    // Marquer tous les champs comme touchés
    const allTouched = {};
    Object.keys(values).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Erreur lors de la soumission:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Gérer la perte de focus sur un champ
  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  // Réinitialiser le formulaire
  const resetForm = (newValues = {}) => {
    setValues(newValues);
    setErrors({});
    setTouched({});
    setIsDirty(false);
    setIsSubmitting(false);
  };

  // Récupérer les attributs communs pour un champ
  const getFieldProps = (name) => ({
    name,
    id: name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': touched[name] && errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    setValue,
    setMultipleValues,
    resetForm,
    getFieldProps,
  };
}

/**
 * Fonctions de validation utilitaires
 */
export const validators = {
  // Vérifier si une valeur est requise
  required: (value) => {
    if (value === undefined || value === null) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (typeof value === 'number') return true;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    return !!value;
  },

  // Vérifier si une valeur est un email valide
  email: (value) => {
    if (!value) return true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  },

  // Vérifier si une valeur est un numéro de téléphone valide (plusieurs formats)
  phone: (value) => {
    if (!value) return true;
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{8,15}$/;
    return phoneRegex.test(value.replace(/\s/g, ''));
  },

  // Vérifier si une valeur est une date valide
  date: (value) => {
    if (!value) return true;
    const date = new Date(value);
    return !isNaN(date.getTime());
  },

  // Vérifier la longueur minimale
  minLength: (value, length) => {
    if (!value) return true;
    return value.length >= length;
  },

  // Vérifier la longueur maximale
  maxLength: (value, length) => {
    if (!value) return true;
    return value.length <= length;
  },

  // Vérifier si une valeur est un nombre
  number: (value) => {
    if (!value) return true;
    return !isNaN(Number(value));
  },

  // Vérifier si une valeur est dans une plage
  range: (value, min, max) => {
    if (!value) return true;
    const num = Number(value);
    return !isNaN(num) && num >= min && num <= max;
  },

  // Vérifier si une valeur correspond à un motif regex
  pattern: (value, regex) => {
    if (!value) return true;
    return regex.test(value);
  },

  // Vérifier l'âge minimum basé sur une date de naissance
  minAge: (birthDate, minAge) => {
    if (!birthDate) return true;
    
    const birthDateObj = new Date(birthDate);
    if (isNaN(birthDateObj.getTime())) return false;
    
    const today = new Date();
    const age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      return age - 1 >= minAge;
    }
    
    return age >= minAge;
  },
};

/**
 * Fonction pour créer des règles de validation
 * @param {Object} schema - Schéma de validation
 * @returns {Function} Fonction de validation qui retourne les erreurs
 * 
 * Exemple d'utilisation:
 * const validateSchema = createValidator({
 *   firstName: {
 *     required: true,
 *     message: 'Le prénom est requis',
 *   },
 *   email: {
 *     required: true,
 *     email: true,
 *     message: {
 *       required: 'L\'email est requis',
 *       email: 'Format d\'email invalide',
 *     },
 *   },
 * });
 */
export function createValidator(schema) {
  return (values) => {
    const errors = {};

    Object.entries(schema).forEach(([field, rules]) => {
      const value = values[field];
      let isValid = true;
      let errorType = '';

      // Parcourir chaque règle pour le champ
      Object.entries(rules).forEach(([rule, ruleValue]) => {
        if (rule === 'message') return;

        // Ignorer si déjà invalide
        if (!isValid) return;

        // Vérifier la règle
        switch (rule) {
          case 'required':
            if (ruleValue && !validators.required(value)) {
              isValid = false;
              errorType = 'required';
            }
            break;
          case 'email':
            if (ruleValue && !validators.email(value)) {
              isValid = false;
              errorType = 'email';
            }
            break;
          case 'phone':
            if (ruleValue && !validators.phone(value)) {
              isValid = false;
              errorType = 'phone';
            }
            break;
          case 'date':
            if (ruleValue && !validators.date(value)) {
              isValid = false;
              errorType = 'date';
            }
            break;
          case 'minLength':
            if (!validators.minLength(value, ruleValue)) {
              isValid = false;
              errorType = 'minLength';
            }
            break;
          case 'maxLength':
            if (!validators.maxLength(value, ruleValue)) {
              isValid = false;
              errorType = 'maxLength';
            }
            break;
          case 'pattern':
            if (!validators.pattern(value, ruleValue)) {
              isValid = false;
              errorType = 'pattern';
            }
            break;
          case 'minAge':
            if (!validators.minAge(value, ruleValue)) {
              isValid = false;
              errorType = 'minAge';
            }
            break;
          case 'custom':
            if (typeof ruleValue === 'function') {
              const customResult = ruleValue(value, values);
              if (customResult !== true) {
                isValid = false;
                errorType = 'custom';
                
                // Si le résultat est une chaîne, l'utiliser comme message
                if (typeof customResult === 'string') {
                  errors[field] = customResult;
                }
              }
            }
            break;
          default:
            break;
        }
      });

      // Si invalide, ajouter l'erreur
      if (!isValid && !errors[field]) {
        const message = rules.message;
        
        if (typeof message === 'string') {
          errors[field] = message;
        } else if (typeof message === 'object' && message[errorType]) {
          errors[field] = message[errorType];
        } else {
          // Messages par défaut si non spécifiés
          const defaultMessages = {
            required: `Ce champ est requis`,
            email: `Format d'email invalide`,
            phone: `Format de téléphone invalide`,
            date: `Date invalide`,
            minLength: `Doit contenir au moins ${rules.minLength} caractères`,
            maxLength: `Ne doit pas dépasser ${rules.maxLength} caractères`,
            pattern: `Format invalide`,
            minAge: `L'âge minimum requis est de ${rules.minAge} ans`,
            custom: `Ce champ est invalide`,
          };
          
          errors[field] = defaultMessages[errorType] || 'Champ invalide';
        }
      }
    });

    return errors;
  };
}

/**
 * Composant de champ de formulaire avec gestion des erreurs
 */
