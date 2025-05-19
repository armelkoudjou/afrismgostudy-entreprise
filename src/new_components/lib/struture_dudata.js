export const SERVICE_IDS = {
  PASSPORT: "passport",
  TRANSLATION: "translation",
  AIRPORT: "airport",
  ASSURANCE: "assurance"
};

export const mockData = {
  accommodations: [
    { type: "Chambre Simple", capacity: "1 personne", price: 150000 },
    { type: "Chambre Double", capacity: "2 personnes", price: 100000 },
    // ... autres types d'hébergements
  ],
  additionalServices: [
    { id: "passport", name: "Passeport", description: "Aide à l'obtention...", price: 115000 },
    { id: "translation", name: "Traduction...", description: "Traduction de vos...", price: 30000 },
    // ... autres services additionnels
  ],
  studyLevels: ["Licence", "Master", "Doctorat"],
  countries: ["France", "Canada", "Belgique", /* ... autres pays */ "Russie"],
  categories: {
    France: ["Université Paris-Sorbonne", "École Polytechnique", /* ... */ ],
    Canada: ["Université de Montréal", "McGill University", /* ... */ ],
    // ... autres pays et leurs catégories
    Russie: [
      "Les Universites Medicales de la Russie",
      "Les Universites D'ingenieur Et Techniques de la Russie",
      // ... autres catégories russes
    ],
  },
  universities: {
    "Les Universites Medicales de la Russie": [
      "L'université d'État médicale d'Altaï",
      "L'académie d'État médicale d'Amour",
      // ... autres universités médicales russes
    ],
    "Les Universites D'ingenieur Et Techniques de la Russie": [
      "L'université d'État technique de Tambov",
      "L'université d'État technique d'Altaï I.I.Polzounov",
      // ... autres universités d'ingénierie russes
    ],
    // ... autres catégories d'universités
  },
  fields: {
    "Université Paris-Sorbonne": {
      Licence: ["Lettres", "Histoire", /* ... */ ],
      Master: ["Lettres Modernes", "Histoire Contemporaine", /* ... */ ],
      Doctorat: ["Recherche en Lettres", "Histoire des Civilisations", /* ... */ ],
    },
    "École Polytechnique": {
      Licence: ["Mathématiques", "Physique", /* ... */ ],
      Master: ["Mathématiques Appliquées", "Physique Quantique", /* ... */ ],
      Doctorat: ["Recherche en Mathématiques", "Physique Théorique", /* ... */ ],
    },
    // ... autres universités et leurs domaines d'études
    "L'université d'État technique de Tambov": {
      Licence: [
        "Ecologie et gestion de la nature",
        "Architecture (5 ans)",
        // ... autres licences de Tambov
      ],
      // ... masters et doctorats de Tambov (si présents dans l'extrait complet)
    },
  },
};