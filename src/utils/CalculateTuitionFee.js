//J'ai créé une fonction calculateTuitionFee qui détermine les frais en fonction des critères fournis. Cette fonction suit une logique de priorité :

//1.Recherche d'abord les frais spécifiques à la filière, au niveau d'études et à l'université
//2.Si non trouvé, utilise les frais du niveau d'études pour l'université
//3.Si non trouvé, utilise les frais par défaut de l'université
//4.Si non trouvé, utilise les frais du niveau d'études pour la catégorie
//5.Si non trouvé, utilise les frais par défaut de la catégorie
//6.Si rien n'est trouvé, retourne 0


import { tuitionFees } from './tuitionFees';

/**
 * Calcule les frais de scolarité en fonction de la catégorie, de l'université, du niveau et de la filière
 * 
 * @param {Object} params - Paramètres pour le calcul
 * @param {string} params.category - Catégorie d'université
 * @param {string} params.university - Nom de l'université
 * @param {string} params.level - Niveau d'études (Licence, Master, Doctorat)
 * @param {string} params.field - Filière d'études
 * @returns {number} Frais de scolarité en FCFA
 */
export function calculateTuitionFee({ category, university, level, field }) {
  // Vérification de la présence de la catégorie
  if (!tuitionFees[category]) {
    return 0;
  }
  
  // Récupérer le tarif par défaut pour la catégorie
  let fee = tuitionFees[category].defaultFee;
  
  // Appliquer le tarif du niveau d'études pour la catégorie s'il existe
  if (tuitionFees[category].levels && tuitionFees[category].levels[level]) {
    fee = tuitionFees[category].levels[level];
  }
  
  // Vérification de la présence de l'université
  if (!university || !tuitionFees[category].universities[university]) {
    return fee;
  }
  
  const universityData = tuitionFees[category].universities[university];
  
  // Appliquer le tarif par défaut de l'université s'il existe
  if (universityData.defaultFee) {
    fee = universityData.defaultFee;
  }
  
  // Appliquer le tarif du niveau d'études pour l'université s'il existe
  if (universityData.levels && universityData.levels[level]) {
    fee = universityData.levels[level];
  }
  
  // Vérification de la présence de la filière
  if (!field || !universityData.fields || !universityData.fields[level] || !universityData.fields[level][field]) {
    return fee;
  }
  
  // Appliquer le tarif spécifique à la filière et au niveau
  return universityData.fields[level][field];
}

/**
 * Exemple d'utilisation :
 * 
 * const fee = calculateTuitionFee({
 *   category: "Les Universites Medicales de la Russie",
 *   university: "L'université d'État médicale d'Altaï",
 *   level: "Licence",
 *   field: "Médecine Générale"
 * });
 * 
 * console.log(`Frais de scolarité: ${fee.toLocaleString()} FCFA`);
 */