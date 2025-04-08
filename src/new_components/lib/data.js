// Données simulées pour l'application
export const mockData = {
    countries: ["France", "Canada", "Belgique", "Suisse", "Maroc", "Sénégal", "Russie"],
    universities: {
        France: ["Université Paris-Sorbonne", "École Polytechnique", "Sciences Po Paris"],
        Canada: ["Université de Montréal", "McGill University", "Université Laval"],
        Belgique: ["Université Libre de Bruxelles", "Université de Liège", "KU Leuven"],
        Suisse: ["ETH Zurich", "Université de Genève", "EPFL"],
        Maroc: ["Université Mohammed V", "Université Hassan II", "ENSA"],
        Sénégal: ["Université Cheikh Anta Diop", "Université Gaston Berger", "ISM Dakar"],
        Russie: ["Université Technique d'État de Tambov", "Université d'État de Moscou", "Université Polytechnique de Saint-Pétersbourg", "Université d'État de Novossibirsk"]
    },
    fields: {
        "Université Paris-Sorbonne": {
            Licence: ["Lettres", "Histoire", "Philosophie", "Droit"],
            Master: ["Lettres Modernes", "Histoire Contemporaine", "Philosophie Politique", "Droit International"],
            Doctorat: ["Recherche en Lettres", "Histoire des Civilisations", "Philosophie Avancée", "Droit Comparé"]
        },
        "École Polytechnique": {
            Licence: ["Mathématiques", "Physique", "Informatique", "Génie Civil"],
            Master: ["Mathématiques Appliquées", "Physique Quantique", "Intelligence Artificielle", "Génie Mécanique"],
            Doctorat: ["Recherche en Mathématiques", "Physique Théorique", "Systèmes Informatiques", "Structures Avancées"]
        },
        "Université de Montréal": {
            Licence: ["Médecine", "Informatique", "Psychologie", "Économie"],
            Master: ["Médecine Avancée", "Science des Données", "Psychologie Clinique", "Économie Internationale"],
            Doctorat: ["Recherche Médicale", "Informatique Théorique", "Psychologie Cognitive", "Économie Quantitative"]
        },
        "Université Technique d'État de Tambov": {
            Licence: ["Architecture", "Informatique", "Génie Mécanique", "Économie"],
            Master: ["Architecture Avancée", "Systèmes Informatiques", "Génie Industriel", "Gestion Financière"],
            Doctorat: ["Recherche en Architecture", "Informatique Avancée", "Génie Mécanique Avancé", "Économie Appliquée"]
        },
        "Université d'État de Moscou": {
            Licence: ["Médecine", "Physique", "Mathématiques", "Droit"],
            Master: ["Médecine Générale", "Physique Appliquée", "Mathématiques Avancées", "Droit International"],
            Doctorat: ["Recherche Médicale", "Physique Théorique", "Mathématiques Pures", "Droit Comparé"]
        },
        // Ajoutez d'autres universités et leurs niveaux ici
    },
    accommodations: [
        { type: "Chambre Simple", capacity: "1 personne", price: 150000 },
        { type: "Chambre Double", capacity: "2 personnes", price: 100000 },
        { type: "Studio", capacity: "1 personne", price: 250000 },
        { type: "Appartement T1", capacity: "1-2 personnes", price: 350000 },
        { type: "Appartement T2", capacity: "2-3 personnes", price: 450000 },
        { type: "Résidence Universitaire", capacity: "1 personne", price: 80000 }
    ],
    additionalServices: [
        {
            id: "passport",
            name: "Passeport",
            description: "Aide à l'obtention d'un passeport",
            price: 50000
        },
        {
            id: "translation",
            name: "Traduction",
            description: "Traduction de vos certificats et diplômes",
            price: 30000
        },
        {
            id: "airport",
            name: "Accueil à l'aéroport",
            description: "Service d'accueil et suivi à l'aéroport",
            price: 300000
        }
    ],
    studyLevels: ["Licence", "Master", "Doctorat"]
};

