export const countries = ['France','Canada', 'Belgique'];

export const levels = ['License', 'Master', 'Doctorat'];

export const fields = {
  'Médecine': ['Médecine Générale', 'Chirurgie', 'Pédiatrie'],
  'Ingénierie': ['Informatique', 'Mécanique', 'Électrique', 'Civil'],
  'Pharmacie': ['Pharmacie Industrielle', 'Pharmacie Clinique'],
  'Commerce': ['Finance', 'Marketing', 'Management']
};

export const serviceFees = {
  passportAssistance: 300,
  diplomaTranslation: 200,
  airportPickup: 150,
  yearlyAssistance: 1200,
  studentInsurance: 500
};

export const programs = [
  {
    id: '1',
    city: 'Paris',
    country: 'France',
    university: 'Sorbonne University',
    field: 'Commerce',
    subField: 'Finance',
    level: 'Licence',
    duration: '3 ans',
    ranking: 83,
    description: 'Formation d\'excellence en finance internationale. Le programme comprend des stages en entreprise et des échanges internationaux.',
    careers: ['Analyste financier', 'Gestionnaire de portefeuille', 'Consultant'],
    tuitionFee: 9500,
    accommodationFee: 800,
    availability: true,
    additionalServices: {
      hasPassport: false,
      needPassportAssistance: false,
      hasTranslatedDiplomas: false,
      needTranslationService: false,
      hasRussianContact: false,
      needAirportPickup: false,
      needYearlyAssistance: true
    }
  },
  {
    id: '2',
    city: 'Lyon',
    country: 'France',
    university: 'École Centrale de Lyon',
    field: 'Ingénierie',
    subField: 'Mécanique',
    level: 'Master',
    duration: '5 ans',
    ranking: 45,
    description: 'Programme leader en ingénierie mécanique avec spécialisation en conception et innovation industrielle.',
    careers: ['Ingénieur R&D', 'Chef de projet', 'Consultant technique'],
    tuitionFee: 8500,
    accommodationFee: 600,
    availability: true,
    additionalServices: {
      hasPassport: false,
      needPassportAssistance: false,
      hasTranslatedDiplomas: false,
      needTranslationService: false,
      hasRussianContact: false,
      needAirportPickup: false,
      needYearlyAssistance: true
    }
  },
  {
    id: '3',
    city: 'Moscou',
    country: 'Russie',
    university: 'Université d\'État de Moscou',
    field: 'Médecine',
    subField: 'Médecine Générale',
    level: 'Doctorat',
    duration: '8 ans',
    ranking: 78,
    description: 'Formation médicale complète avec stage clinique et recherche approfondie. Programme en langue russe avec année préparatoire linguistique incluse.',
    careers: ['Médecin généraliste', 'Chercheur médical'],
    tuitionFee: 6000,
    accommodationFee: 400,
    availability: true,
    additionalServices: {
      hasPassport: false,
      needPassportAssistance: false,
      hasTranslatedDiplomas: false,
      needTranslationService: false,
      hasRussianContact: false,
      needAirportPickup: false,
      needYearlyAssistance: true
    }

  },
  {
    id: '4',
    city: 'Saint-Pétersbourg',
    country: 'Russie',
    university: 'Université Polytechnique Pierre le Grand',
    field: 'Ingénierie',
    subField: 'Informatique',
    level: 'Master',
    duration: '2 ans',
    ranking: 50,
    description: 'Programme avancé en ingénierie informatique avec un accent sur les technologies émergentes.',
    careers: ['Développeur logiciel', 'Architecte cloud'],
    tuitionFee: 5000,
    accommodationFee: 300,
    availability: true,
    additionalServices: {
      hasPassport: false,
      needPassportAssistance: false,
      hasTranslatedDiplomas: true,
      needTranslationService: false,
      hasRussianContact: false,
      needAirportPickup: true,
      needYearlyAssistance: true
    }
  }
  
];
