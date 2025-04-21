import { University } from "lucide-react";


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
        price: 115000
    },
    {
        id: "translation",
        name: "Traduction par document",
        description: "Traduction de vos documents",
        price: 30000
    },
    {
        id: "airport",
        name: "Accueil à l'aéroport",
        description: "Accueil à l'aéroport et transport au lieu d'étude",
        price: 300000
    },
    {
      id: "assurance",
      name: "Assurance",
      description: "Assurance santé",
      price: 65000
  },
  
],






studyLevels: ["Licence", "Master", "Doctorat"],

    // Liste des pays

    countries: ["France", "Canada", "Belgique", "Suisse", "Maroc", "Sénégal", "Russie"],
    
    
    categories: {
        France: ["Université Paris-Sorbonne", "École Polytechnique", "Sciences Po Paris"],
        Canada: ["Université de Montréal", "McGill University", "Université Laval"],
        Belgique: ["Université Libre de Bruxelles", "Université de Liège", "KU Leuven"],
        Suisse: ["ETH Zurich", "Université de Genève", "EPFL"],
        Maroc: ["Université Mohammed V", "Université Hassan II", "ENSA"],
        Sénégal: ["Université Cheikh Anta Diop", "Université Gaston Berger", "ISM Dakar"],
        Russie:[
            "Les Universites Medicales de la Russie",
            "Les Universites D'ingenieur Et Techniques de la Russie",
            "Les Universites Universites D'état de la Russie",
            "Les Universites Marines Et Maritimes de la Russie",
            "Les Universites D’aviation de la Russie",
            "Les Universites D’economie de la Russie",
            "Les Universites Agricoles / Agraire de la Russie",          
            "Les Universites D'architecture Et De La Construction de la Russie",
            "Les Universites Chimiques Et Technologiques de la Russie",
            "Les Universites de La Geologie, L'industrie Miniere Et La Metallurgie de la Russie",
            "Les Universites Petro-Gaziers de la Russie",
            "Les Universites De La Technologie D’alimentation de la Russie",
            "Les Universites D’industrie Forestiere de la Russie",
        ]
    },








    universities: {
        "Les Universites Medicales de la Russie":[
            "L'université d'État médicale d'Altaï",
            "L'académie d'État médicale d'Amour",
            "L'académie d'État médicale d'Astrakhan",
            "L'université d'État médicale de la Bachkirie",
            "L'université d'État de Belgorod, 'la Faculté de médecine'",
            "L'université d'État de la Bouriatie, 'la Faculté de médecine'",
            "L'université d'État médicale de Vladivostok",
            "L'académie militaire-médicale S.M.Kirov",
            "L'université d'État médicale de Volgograd",
            "L'académie d'État médicale de Voronej N.N.Bourdenko",
            "L'académie d'État classique Maymonid, 'la Faculté de médecine'",
            "L'académie d'État médicale de Daghestan",
            "L'université d'État médicale d'Extrême-Orient",
            "L'académie d'État médicale d'Ivanovo",
            "L'académie d'État médicale d'Ijevsk",
            "L'université d'État médicale d'Irkoutsk",
            "L'université d'État du Kabardino-Balkarie, 'la Faculté de médecine'",
            "L'université d'État médicale de Kazan",
            "L'académie d'État médicale de Kémérovo",
            "L'académie d'État médicale de Kirov",
            "L'université d'État médicale de Krasnoïarsk V.F.Voyno-Yasenetsky",
            "L'université d'État médicale de Kuban",
            "L'université d'État médicale de Koursk",
            "L'institut de médecine V.M.Molotov",
            "L'université d'État de la Mordovie N.P.Ogarev (Domaine Medicales)",
            "L'université d'État médical et dentaire de Moscou A.I.Evdokimov",
            "L'université d'État de Moscou M.V.Lomonosov, 'la Faculté de médecine'",
            "L'institut médico-social de reabilitology de Moscou",
            "L'institut de médecine du Ministère de la santé de la Fédération de Russie de Moscou (le Premier MGMU)",
            "L'académie d'État médicale de Nizhniy Novrogod",
            "L'université d'État de Novgorod Iaroslav le Sage, 'la Faculté de médecine'",
            "L'université d'État médicale de Novosibirsk",
            "L'université d'État de Novosibirsk, 'la Faculté de médecine'",
            "L'académie d'État médicale d'Omsk",
            "L'académie d'État médicale d'Orenbourg",
            "L'université d'État de Penza, l'Institut de médecine",
            "La première université d'État médicale de Moscou I.M.Setchenov",
            "L'académie d'État médicale de Perm",
            "L'académie d'État pharmaceutique de Perm",
            "L'université d'État de Pétrozavodsk",
            "L'académie d'État pharmaceutique de Piatigorsk",
            "L'université russe nationale scientifique médicale N.I.Pirogov",
            "L'université russe de l'amitié des peuples",
            "L'université d'État médicale de Rostov",
            "L'université d'État médicale de Riazan I.P.Pavlov",
            "L'université d'État médicale de Samara",
            "L'institut de médecine 'Reaviz' de Samara",
            "L'académie d'État chimique et pharmaceutique de Saint-Pétersbourg",
            "L'université d'État médicale de Saint-Pétersbourg I.P.Pavlov",
            "L'université d'État pédiatrique et médicale de Saint-Pétersbourg",
            "L'université d'État de Saint-Pétersbourg,'la Faculté de médecine'",
            "L'institut médical et technique de Saint-Pétersbourg",
            "L'université d'État médicale de Saratov V.I.Razoumovsky",
            "L'université d'État médicale du nord, Arkhangelsk",
            "L'université fédérale de nord-est M.K.Ammosov, l'institut de médecine",
            "L'université d'État médicale de nord-ouest I.I.Metchnikov",
            "L'académie d'État du Nord médicale de Ossétie",
            "L'université d'État médicale sibérienne",
            "L'académie d'État médicale de Smolensk",
            "L'université d'État médicale de Stavropol",
            "L'académie d'État médicale de Tver",
            "L'université d'État médicale du Pacifique",
            "L'université d'État de Toula, l'Institut de médecine",
            "L'académie d'État médicale de Tioumen",
            "L'université d'État d'Oulianovsk ('Faculté de médecine'), l'institut de la médecine et l'écologie d'Oulianovsk, ULGU",
            "L'université d'État médicale d'Oural (Ekaterinbourg)",
            "L'université d'État de la Tchétchénie, 'la Faculté de médecine'",
            "L'académie d'État médicale de Tchita",
            "L'institut de médecine de Chkalovsk",
            "L'université d'État de la Tchouvachie, 'la Faculté de médecine'",
            "L'université d'État médicale sud d'Oural",
            "L'université d'État médicale d'Iaroslavl"
        ]
        ,
        "Les Universites D'ingenieur Et Techniques de la Russie":[
            "L'université d'État technique de Tambov",
            "L'université d'État technique d'Altaï I.I.Polzounov",
            "L'académie d'État technique d’Angarsk",
            "L'université d'État technique d'Astrakhan",
            "L'université d'État technique 'VOENMEH' de la Baltie D.F.Ustinov",
            "L'université d'État technologique de Belgorod",
            "L'académie d'État d'ingenieur et technologique de Bryansk",
            "L'université d'État technique de Volgograd",
            "L'université d'État d'ingénieur et pédagogique de Volga",
            "L'université d'État technique de la Volga",
            "L'université d'État technique de Vologda",
            "L'université d'État technique de Voronej",
            "L'université d'État des technologies d'ingenieur de Voronej",
            "L'université d'État technologique d’Est de Sibérie",
            "L'université d'État technique de Daghestan",
            "L'université d'État technique d'Extrême Orient V.V.Kouybychev",
            "L'université d'État technique du Rostov",
            "L'université d'État énergétique d'Ivanovo",
            "L'université d'État technique d'Ijevsk M.T.Kalashnikov",
            "L'université d'État technique d'Irkoutsk",
            "L'université d'État technique de Kazan A.N.Toupolev",
            "L'université d'État énergétique de Kazan",
            "L'université d'État technique de Kaliningrad",
            "L'académie d'État technologique de Kirov",
            "L'université d'État technique du Komsomol-sur-Amour",
            "L'université d'État technologique de Kostroma",
            "L'université d'État technique de Krasnoïarsk (l'Université Sibérienne Fédérale)",
            "L'université d'État technologique de Kouban",
            "L'université d'État technique de Kouzbass T.F.Gorbatchev",
            "L'université d'État technique de Koursk",
            "L'université d'État technique du Lipetsk",
            "L'université d'État technique de Magnitogorsk G.I.Nosov",
            "L'université d'État technologique du Maikop",
            "L'université d'État industrielle de Moscou",
            "L'institut d'État de l'électronique et la mathématique de Moscou",
            "L'université d'État mécanique de Moscou (MAMI)",
            "L'université d'État technique de Moscou (l'Université Nationale Scientifique)",
            "L'université d'État technique de la radiotechnique, l'électronique et l'automatique de Moscou",
            "L'université d'État technologique de Moscou (STANKIN)",
            "L'université d'État de la construction d'appareils et l'informatique de Moscou",
            "L'université d'État de la biotechnologie appliquée de Moscou",
            "L'université d'État des technologies et la gestion de Moscou K.G.Razoumovsky",
            "L'université nationale scientifique technologique de Moscou (MISiS)",
            "L'université nationale scientifique nucléaire (MIFI), l'institut d'ingenieur et physique de Moscou",
            "L'université d'État technique d’Orel",
            "L'académie d'État technologique de Penza",
            "L'université nationale scientifique technique de Perm",
            "L'université russe d'État technologique (MATI)",
            "L'université russe d'État des technologies innovants et l'entreprise",
            "L'université d'État radiotechnique de Riazan",
            "L'université d'État technique de Samara",
            "L'université d'État polytechnique de Saint-Pétersbourg",
            "L'institut d'État technologique de Saint-Pétersbourg (l'Université Technique)",
            "L'université d'État technologique des polymères végétaux de Saint-Pétersbourg",
            "L'université d'État des télécommunications de Saint-Pétersbourg M.A.Bontch-Brouevitch",
            "L'université d'État électrotechnique de Saint-Pétersbourg V.I.Oul'yanov 'LETI'",
            "L'université nationale scientifique des télématiques, la mécanique et l'optique de Saint-Pétersbourg",
            "L'université d'État technique de Saratov Y.A.Gagarine",
            "L'université technique ouverte de nord-ouest",
            "L'université d'État technique du Nord du Caucase",
            "L'université d'État industrielle sibérienne",
            "L'université d'État des télécommunications et l'informatique sibérienne",
            "L'université d'État radiotechnique de Taganrog",
           
            "L'université d'État technique de Tver",
            "L'université d'État des systèmes de guidage et la radio-électronique de Tomsk",
            "L'université d'État technique d'Oulianovsk",
            "L'université d'État technique d’Oukhta",
            "L'université russe d'État technique du Sud M.I.Platov",
            "L'université d'État technique d'Iaroslavl"
        ],

            "Les Universites Universites D'état de la Russie":[
                "L'université d'État d’Adyguéens",
                "L'université d'État d'Altaï",
                "L'université d'État d'Amour",
                "L'université d'État d'Astrakhan",
                "L'université d'État de la Bachkirie",
                "L'université d'État de Belgorod",
                "L'université d'État du Bratsk",
                "L'université d'État de Bryansk",
                "L'université d'État de la Bouriatie",
                "L'université d'État de Vladimir Alexandre Grigoriévitch, Nikolay Grigoriévitch Stoletovy",
                "L'université d'État de Volgograd",
                "L'université d'État de Volga",
                "L'université d'État de Voronej",
                "L'université d'État de Viatka",
                "L'université d'État des mines d'Altaï",
                "L'université d'État de Daghestan",
                "L'université d'Extrême Orient fédérale",
                "L'université d'État d'Ielets I.A.Bounin",
                "L'université d'État du Zabaikalsk",
                "L'université d'État d'Ivanovo",
                "L'université d'État d’Ingouchie",
                "L'université d'État d'Irkoutsk",
                "L'université d'État du Kabardino-Balkarie K.M.Berbekov",
                "L'université d'État de Kazan V. I. Oul'yanov (Lénine)",
                "L'université de Kazan fédérale",
                "L'université d'État de la Kalmoukie",
                "L'université d'État de Kamtchatka Vitous Bering",
                "L'université d'État de Kémérovo",
                "L'université d'État de Kostroma N.A.Nekrasov",
                "L'université d'État de Kuban",
                "L'université d'État du Kourgan",
                "L'université d'État de Koursk",
                "L'université d'État de Léningrad A.S.Pouchkin",
                "L'université d'État du Magnitogorsk",
                "L'université d'État du Maikop (l'université d'État d’Adyguéens)",
                "L'université d'État de la Mordovie N.P.Ogarev",
                "L'université d'État de Moscou M.V.Lomonosov",
                "L'université de Moscou S.Ju.Vitte",
                "L'université d'État d'Omsk F.M.Dostoevskiy",
                "L'université d'État d’Orel",
                "L'université d'État de Penza",
                "L'université d'État nationale scientifique de Perm",
                "L'université d'État de Perm",
                "L'université d'État de Pétrozavodsk",
                "L'université d'État du Pomorsk M.V.Lomonosov",
                "L'université d'État de Pskov",
                "L'université d'État de Pushchino",
                "L'université russe d'État Emmanuel Kant",
                "L’université russe nouvelle",
                "L'université russe de l'amitié des peuples",
                "L'université d'État de Rostov",
                "L'université d'État de Riazan S.A.Esénin",
                "L'université d'État de Samara",
                "L'université d'État de Saint-Pétersbourg",
                "L'université d'État de Sakhaline",
                "L'université du nord fédérale",
                "L'université du nord fédérale M.V.Lomonosov",
                "L'université d'État de nord-est",
                "L'université de nord-est fédérale d’Iakoutsk",
                "L'université du Nord fédérale du Caucase",
                "L'université d'État du Nord d'Ossétie K.L.Khetagourov",
                "L'université sibérienne fédérale",
                "L'université d'État de Sotchi",
                "L'université d'État de Syktyvkar",
                "L'université d'État de Tambov G.P.Derjavin",
                "L'université d'État de Tver",
                "L'université nationale du Pacifique",
                "L'université d'État de Togliatti",
                "L'université d'État de Tomsk",
                "L'université d'État de Tuva",
                "L'université d'État de Toula",
                "L'université d'État de la Oudmourtie",
                "L'université d'Oulyanovsk d'État",
                "L'université d'Oural d'État",
                "L'université d'État de Khabarovsk N.P.Katanov",
                "L'université d'État de Tchéliabinsk",
                "L'université d'État de Tcherepovets",
                "L'université d'État de la Tchétchénie",
                "L'université d'État de la Tchouvachie I.N.Oul'yanov",
                "L'université d'État d’Yugorsk",
                "L'université d'État du Sud d'Oural",
                "L'université du Sud fédérale",
                "L'université d'État d'Iaroslavl P.G.Demidov"
            ],



            "Les Universites Marines Et Maritimes de la Russie":[
                "L'académie d'État baltique de la flotte de pêche",
                "Le collège maritime de pêche de Volga et Kaspiysk",
                "L'académie d'État du transport par eau de Volga",
                "L'académie d'État maritime S.O.Makarov",
                "L'académie d'État maritime F.F.Ouchakov",
                "L'université d'État maritime F.F.Ouchakova, Novosibirsk",
                "L'université d'État de la flotte marine et la flotte fluviale S.O.Makarov",
                "L'université d'État technique d’industrie de la pêche d'Extrême Orient",
                "L'institut du transport par eau G.Ya.Sedov",
                "L'institut des technologies maritimes de l'université d'État technique d'Astrakhan",
                "L'institut d’industrie de la pêche de l'université d'État technique d'Astrakhan",
                "L'université d'État technique de Kaliningrad (Marines et Maritimes)",
                "L'université d'État technique du Komsomolsk-sur-Amour",
                "L'académie maritime de l'université d'État technique de Mourmansk",
                "L'université d'État maritime G.I.Nevel'skiy",
                "L'académie d'État du transport par eau de Moscou",
                "L'académie de Novosibirsk d'État du transport par eau",
                "L'université d'État maritime technique de Saint-Pétersbourg",
                "L'université d'État des communications aquatiques de Saint-Pétersbourg",
                "L'académie maritime de Sébastopol"
            ],



            "Les Universites D’aviation de la Russie":[
                "L'institut d'aviation de Moscou (l'Université Nationale scientifique)",
                "L'université d'État technique de l'aviation civile de Moscou",
                "L'université d'État technique de Moscou Bauman",
                "L'université d'État d'aviation technique de Rybinsk R.A.Solov'ev",
                "L'université d'État aérospatiale de Samara l'académicien S.P.Korolev",
                "L'université d'État de la construction d'appareils aérospatiale de Saint-Pétersbourg",
                "L'université d'État d'aviation civile de Saint-Pétersbourg",
                "L'université d'État aérospatiale sibérienne",
                "L'école supérieure d'aviation civile d'Oulianovsk",
                "L'université d'État d'aviation technique d'Oufa"
            ],



            "Les Universites D’economie de la Russie":[
                "L'académie du marketing et des technologies sociales et informatiques",
                "L'académie d'économie et le droit d'Altaï",
                "L'institut d'économie et le droit d'Altaï",
                "L'université d'État de l'économie et le service de Vladivostok",
                "L'université d'État du service de Volga",
                "L'institut d'État des finances et l'économie de Kazan",
                "L'université d'économie, la gestion et le droit de Kazan",
                "L'institut d'État du commerce et l'économie de Krasnoïarsk",
                "L'institut de l'entreprise internationale et le management de Kuban",
                "L'académie financière-technologique de Moscou",
                "L'université d'État humanitaire de Moscou",
                "L'université d'État de la gestion de Moscou",
                "L'université d'État de l'économie, la statistique et l'informatique de Moscou",
                "L'université financière et industrielle de Moscou 'Synergie'",
                "L'université nationale scientifique, l'école supérieure de l'économie de Moscou",
                "L'académie russe du tourisme",
                "L'académie russe du tourisme internationale",
                "L'université russe d'État des technologies d'innovation et l'entreprise",
                "L'université russe d'État du commerce et l'économie",
                "L'université russe d'État du tourisme et le service",
                "L'université russe de la coopération",
                "L'université russe économique G.V.Plehanov",
                "L'université d'État économique de Rostov",
                "L'université d'État économique de Samara",
                "L'université d'État du commerce et l'économie de Saint-Pétersbourg",
                "L'université d'État de l'économie et les finances de Saint-Pétersbourg",
                "L'université d'État économique de Saint-Pétersbourg",
                "L'université d'État socio-économique de Saratov",
                "L'institut des relations internationales et les études régionales sibérienne",
                "L'université d'État économique du Pacifique",
                "L'université de la gestion 'Tisbi'",
                "L'université d'État économique d'Oural",
                "L'académie d'État d'économie et les services d'Oufa",
                "L'université financière près du président de la Fédération de Russie",
                "L'académie d'État de l'économie et le droit de Khabarovsk"
            ],


            "Les Universites Agricoles / Agraire de la Russie":[
                "L'université d'État agraire d'Altaï",
                "L'université d'État agraire de la Bachkirie",
                "L'Académie d'État d'Agriculture du Briansk",
                "L'Académie d'État d'Agriculture de la Bouriatie V.P.Filippov",
                "L'université d'État agraire d'Extrême Orient",
                "L'Académie d'État d'Agriculture d'Irkoutsk",
                "L'Académie d'État d'Agriculture d'Ijevsk",
                "L'université d'État agraire du Kabardino-Balkarie V.M.Kokov",
                "L'université d'État agraire de Kazan",
                "L'université d'État agraire de Kuban",
                "L'université d'État agraire Mitchourin",
                "L'Académie d'État d'Agriculture de Nizhniy Novrogod",
                "L'université d'État agraire de Novosibirsk",
                "L'université d'État agraire d'Omsk",
                "L'université d'État agraire d'Orenbourg",
                "L'Académie d'État d'Agriculture de Penza",
                "L'Académie d'État d'Agriculture de Perm l'académicien Pryanichnikov",
                "L'Académie d'État maritime d'Agriculture",
                "L'académie d'État de la construction d'équipement agricole du Rostov",
                "L'université russe d'État agraire K.A.Timiryazev",
                "L'université d'État agrotechnologique de Riazan P.A.Kostitchev",
                "L'université d'État agraire de Saint-Pétersbourg",
                "L'Académie d'État d'Agriculture de Samara",
                "L'université d'État agraire du nord d'Oural",
                "L'université d'État agraire de Stavropol",
                "L'Académie d'État d'Agriculture d'Oulyanovsk P.A.Stolypin",
                "L'université d'État agraire de Volgograd",
                "L'université d'État agraire de Voronej Pierre le Grand",
                "L'Académie d'État d'Agriculture d'Yakoutsk"
            ],

            "Les Universites D'architecture Et De La Construction de la Russie":[
    "L'université d'État d'architecture et de la construction de Volgograd",
    "L'université d'État d'architecture et de la construction de Voronej",
    "L'académie d'État d'architecture et de la construction d'Ivanovo",
    "L'université d'État d'architecture et de la construction de Kazan",
    "L'institut d'architecture de Moscou (l'Académie d'État)",
    "L'université d'État de la construction de Moscou",
    "L'institut du lien et la construction de Moscou",
    "L'université d'État de l'architecture et la construction de Penza",
    "L'académie d'État d'architecture et de la construction de Rostov",
    "L'université d'État de construction de Rostov",
    "L'université d'État d'architecture et de la construction de Samara",
    "L'université d'État d'architecture et de la construction de Saint-Pétersbourg",
    "L'université d'État d'architecture et de la construction de Tomsk",
    "L'université d'État d'architecture et de la construction de Tioumen",
    "L'académie d'État architecturale et artistique d'Oural"
],



            "Les Universites Chimiques Et Technologiques de la Russie":[
                "L'Université d'État technique d'Altaï, 'la Faculté de la chimie'",
                "L'université d'État d'Altaï, 'la faculté chimique et technologique'",
                "L'université d'État de la Bachkirie",
                "L'université d'État technique de Volgograd, 'la faculté chimique et technologique'",
                "Le collège supérieur chimique de l'Académie des Sciences de la Russie",
                "L'université d'État des métaux non-ferreux et l'or",
                "L'université d'Extrême Orient fédérale, 'la Faculté de la chimie'",
                "L'université d'État chimique et technologique d'Ivanovo",
                "L'université d'État de Kazan, 'la Faculté de la chimie'",
                "L'université d'État mécanique de Moscou, l'Institut de la technologie écologique et chimique",
                "L'université d'État technique de l'aviation civile de Moscou, 'la Faculté de la chimie'",
                "L'université d'État technique de Moscou N.E. Baouman, 'la Faculté de la chimie'",
                "L'université d'État technologique de Moscou 'Stankin', 'la Faculté de la chimie'",
                "L'université d'État de Moscou M.V.Lomonosov, 'la Faculté de la chimie'",
                "L'université de Moscou d'État des technologies fines chimiques M.V.Lomonosova",
                "L'institut physique d'ingénieur de Moscou",
                "L'institut de l'acier et les alliages de Moscou",
                "L'institut physique et technique de Moscou",
                "L'institut énergétique de Moscou",
                "L'université nationale scientifique technologique 'MISiS', 'la Faculté de la chimie'",
                "L'université nationale scientifique 'MEI', 'la Faculté de la chimie'",
                "L'université d'État de Nizhniy Novrogod, 'la Faculté de la chimie'",
                "L'institut chimique et technologique de Nizhnekamsk",
                "L'institut chimique et technologique de Novomoskovsk",
                "L'université d'État de Novosibirsk, 'la Faculté de la chimie'",
                "L'université d'État d'Omsk F.M.Dostoevskiy",
                "L'université d'État de Perm, 'la Faculté de la chimie'",
                "L'université russe d'État agraire K.A.Timiryazev, 'la Faculté de la chimie'",
                "L'université russe d'État du pétrole et le gaz I.M.Goubkin, 'la faculté de la chimie'",
                "L'université russe chimique et technologique D.I.Mendeleev",
                "L'université d'État de Rostov, 'la Faculté de la chimie'",
                "L'académie chimique et pharmaceutique de Saint-Pétersbourg",
                "L'université d'État polytechnique de Saint-Pétersbourg, 'la Faculté de la chimie'",
                "L'institut d'État technique de Saint-Pétersbourg (l'Université technique)",
                "L'université d'État technologique des polymères végétaux de Saint-Pétersbourg",
                "L'université d'État de Saint-Pétersbourg 'la Faculté de la chimie'",
                "L'université d'État de Tomsk, 'la Faculté de la chimie'",
                "L'université d'État de Tioumen, l'Institut chimique",
                "L'université d'État pétrolière technique d'Oufa",
                "L'université du sud fédérale, 'la Faculté de la chimie'"
            ],



 "Les Universites de La Geologie, L'industrie Miniere Et La Metallurgie de la Russie":[
    "L'université d'État de la Bachkirie, 'la Faculté de la géologie et la géomorphologie'",
    "L'université d'État technologique de Belgorod, 'la Faculté minière'",
    "L'université d'État de Belgorod, 'la faculté minière'",
    "L'Institut des Mines de Vorkuta",
    "L'université d'État de Voronej, 'la Faculté de la géologie'",
    "L'université d'Extrême Orient fédérale, 'la Faculté de la géologie, la géophysique et la géoécologie'",
    "L'université d'État de la Transbaïkalie 'la Faculté de l'industrie minière'",
    "L'université d'État technique d'Irkoutsk, l'Institut de la gestion et le traitement des ressources minérales",
    "L'université d'État d'Irkoutsk, 'la Faculté de la géologie'",
    "L'université de Kazan fédérale, l'Institut de la géologie",
    "L'université d'État de Kuban, 'la Faculté géologique'",
    "L'université d'État technique de Kouzbass, l'Institut des Mines",
    "L'université d'État technique de Lipetsk, l'Institut de la métallurgie",
    "L'université d'État technique de Magnitogorsk, l'Institut de l'industrie minière",
    "L'université d'État minière de Moscou",
    "L'université d'État mécanique de Moscou, 'la Faculté de l'industrie minière'",
    "L'université d'État de Moscou M.V.Lomonosov, 'la Faculté de la géologie'",
    "L'Université nationale minérale et les ressources matières premières 'L'Université minière'",
    "L'université d'État de Novosibirsk, 'la Faculté de la géologie et la géophysique'",
    "L'institut d'État industriel de Norilsk, 'la Faculté minière et technique'",
    "L'université d'État d'Orenbourg, 'la Faculté de la géologie et les ressources minérales'",
    "L'université d'État de Perm, 'la Faculté de la géologie'",
    "L'université d'État de Pétrozavodsk, 'la Faculté minière et géologique'",
    "L'université russe d'État de prospection géologique",
    "L'université russe d'État de la hydrométéorologie",
    "L'Institut d'État des Mines de Saint-Pétersbourg G.V.Plehanov, (l'Université d'État)",
    "L'université d'État de Saint-Pétersbourg, 'la Faculté géologique'",
    "L'université d'État de Saratov, 'la Faculté de la géologie'",
    "L'université d'État de nord-est, 'la Faculté de la géologie et l'industrie minière'",
    "L'université de nord-ouest fédérale M.K.Ammosov, l'Institut des Mines",
    "L'institut d'État métallurgique du Nord du Caucase (l'Université d'État technique)",
    "L'université d'État des géosystèmes et les géotechnologies sibérienne",
    "L'université d'État technique de Tver, 'la Faculté de la géologie appliquée, de la science des mines, d'industrie pétrolière et gazière, et de la géodésie'",
    "L'université d'État de Tomsk, 'la Faculté géologique'",
    "L'université polytechnique de Tomsk, l'Institut des ressources minérales",
    "L'université d'État de Toula, l'Institut de l'industrie minière",
    "L'université d'État minière d'Oural",
    "L'université d'État technique d'Oukhta, l'Institut de la géologie",
    "L'université d'État d'Yugorsk, l'Institut des Mines",
    "L'université d'État du Sud-Ouest, 'la Faculté d'industrie minière'",
    "L'université russe d'État polytechnique du sud M.I.Platov (l'institut polytechnique de Novotcherkassk), 'la Faculté de la géologie, l'industrie minière et d'industrie pétrolière et gazière'",
    "L'université du sud fédérale, l'Institut des sciences terrestres"
],

            "Les Universites Petro-Gaziers de la Russie":[
                "L'institut d'État pétrolier d'Almetyevsk",
                "L'université d'État technique d'Arkhangelsk, l'Institut du pétrole et du gaz",
                "L'université d'État technique d'Astrakhan, l'Institut du pétrole et du gaz",
                "L'université d'État technique de Voronej, l'Institut du pétrole et du gaz",
                "L'institut pétrolier de Grozniy l'académicien M.D.Millionchtchikov",
                "L'université d'État technique de Daghestan, l'Institut du pétrole et du gaz",
                "L'université d'Extrême Orient fédérale, l'Institut du pétrole et du gaz",
                "L'université d'État technique d'Irkoutsk, 'la Faculté du pétrole et du gaz'",
                "L'université de Kazan fédérale, l'Institut du pétrole et du gaz",
                "L'institut des technologies humanitaires et d'ingénieur de Kama",
                "L'université d'État technique de Kuban, 'la Faculté du pétrole et du gaz'",
                "L'institut d'État technologique de Maikop, 'la Faculté du pétrole et du gaz'",
                "L'université d'État ouverte de Moscou, l'Institut du pétrole et du gaz",
                "L'institut du business de l'industrie pétrolière et gazière de Moscou",
                "L'université d'État technique d'Omsk, 'la Faculté du pétrole et du gaz'",
                "L'université d'État technique de Perm, 'la Faculté du pétrole et du gaz'",
                "L'université russe d'État du pétrole et du gaz I.M.Goubkine",
                "L'université d'État technique de Samara, 'la Faculté du pétrole et du gaz'",
                "L'Institut d'État des Mines de Saint-Pétersbourg (l'Université Technique), 'la Faculté du pétrole et du gaz'",
                "L'université d'État de Sakhaline, 'la Faculté du pétrole et du gaz'",
                "L'université du nord (Arctique) fédérale M.V.Lomonosov, l'Institut du pétrole et du gaz",
                "L'université d'État technique du Nord du Caucase, l'Institut du pétrole et du gaz",
                "L'institut du pétrole et du gaz de Surgut (l'université d'État de gaz et de pétrole de Tioumen)",
                "L'université d'État de Tomsk, l'Institut du pétrole et du gaz",
                "L'université d'État de gaz et de pétrole de Tioumen",
                "L'université d'État pétrolière technique d'Oufa",
                "L'université d'État technique d'Oukhta, l'Institut du pétrole et du gaz",
                "L'université russe d'État technique du sud, l'Institut du pétrole et du gaz",
                "L'institut de gaz et de pétrole de Yamal (l'université d'État de gaz et de pétrole de Tioumen)"
            ],


 

            "Les Universites De La Technologie D’alimentation de la Russie": [
                "L'Académie d'État de la laiterie de Vologda N.V. Verechtchagin",
                "L'Institut d'État de l'industrie de l'alimentation de Kémérovo",
                "L'Université d'État technologique de Kuban",
                "L'Université d'État de la production alimentaire de Moscou",
                "L'Université d'État des technologies et de la gestion de Moscou K.G. Razoumovskiy",
                "L'Université d'État du froid et des biotechnologies de Saint-Pétersbourg"
            ],


            "Les Universites D’industrie Forestiere de la Russie": [
                "L'Académie d'État de l'économie forestière et des technologies de Voronej",
                "L'Université d'État technique forestière de Saint-Pétersbourg",
            ]


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
        "Université d'État de Moscou": {
            Licence: ["Médecine", "Physique", "Mathématiques", "Droit"],
            Master: ["Médecine Générale", "Physique Appliquée", "Mathématiques Avancées", "Droit International"],
            Doctorat: ["Recherche Médicale", "Physique Théorique", "Mathématiques Pures", "Droit Comparé"]
        },


        "L'université d'État technique de Tambov":{
            
            Licence:  [
                "Ecologie et gestion de la nature",
                "Architecture (5 ans)",
                "Urbanisme",
                "Construction",
                "Informatique et génie informatique",
                "Systèmes et technologies d'information",
                "Informatique Appliquée",
                "Radiotechnique",
                "Technologies d'information et systèmes de communication",
                "Conception et technologies des moyens radioélectroniques",
                "Systèmes et technologies biotechniques",
                "Thermoénergetique et thermotechnique",
                "Electroénergétique et électrotechnique",
                "Constructions mécaniques",
                "Machines et équipement technologiques",
                "Mécatronique et robotique",
                "Génie chimique",
                "Processus économes en énergie et en ressources en technologie chimique, pétrochimie et biotechnologie",
                "Biotechnologie",
                "Sécurité de technosphere",
                "Ingénierie pétrolière et gazière",
                "Gestion de la qualité",
                "Gestion dans les systèmes techniques",
                "Nanoingénierie",
                "Agroingénierie",
                "Economie",
                "Management",
                "Informatique des affaires",
                "Jurisprudence",
                "Publicité et relations publiques",
                "Service (Technologies d’organisation des services logistiques)",
                "Design (Design de l’environnement)"
            ],



            Master: [
                "Architecture",
                "La reconstruction et la restauration du patrimoine architectural",
                "Urbanisme",
                "Construction",
                "Informatique et génie informatique",
                "Systèmes et technologies d'information",
                "Radiotechnique",
                "Technologies d’infocommunication et systèmes de communication",
                "Systèmes et technologies biotechniques",
                "Thermoénergetique et thermotechnique",
                "Electroénergétique et électrotechnique",
                "Génie mécanique",
                "Machines et équipement technologiques",
                "Génie chimique",
                "Les processus d'économie d'énergie et des ressources dans génie chimique, pétrochimie et génie biologique",
                "Ingénierie pétrolière et gazière",
                "Exploitation des transports, des machines technologiques et des complexes",
                "Gestion de la qualité",
                "Analyse systémique et la gestion",
                "Gestion dans les systèmes techniques",
                "Agroingénierie",
                "Economie",
                "Management",
                "Informatique des affaires",
                "Jurisprudence",
                "Publicité et relations publiques",
                "Service (Technologies d’organisation des services logistiques)",
                "Design (Design de l’environnement)"
            ]
            ,
            Doctorat: [
                "Sciences de l'informatique",
                "Modélisation Mathématique, Méthodes Numériques et Complexes Logiciels",
                "Sciences chimiques",
                "Électrochimie",
                "Chimie du solide",
                "Biosciences",
                "Biotechnologie",
                "Écologie",
                "Architecture and Construction",
                "Constructions, bâtiments et structures",
                "Matériaux et Produits de Construction",
                "Conception et construction d'autoroutes, de métros, d'aérodromes, de ponts et de tunnels",
                "Électronique, photonique, instrumentation et communications",
                "Dispositifs et Méthodes de Contrôle de l'Environnement, des Substances, des Matériaux et des Produits",
                "Systèmes d'information, de mesure et de contrôle",
                "Dispositifs, Systèmes et Produits Médicaux",
                "Ingénierie radio, y compris les systèmes et appareils de télévision",
                "Systèmes, Réseaux et Appareils de télécommunication",
                "Technologies de l'information et télécommunications",
                "Analyse des systèmes, gestion et traitement de l'information, statistiques",
                "Automatisation et Contrôle des Traitements et des Productions",
                "Méthodes et Systèmes de Protection de l'Information, Sécurité de l'Information",
                "Systèmes et Processus d'Information",
                "Génie électrique et énergétique",
                "Complexes et Systèmes Électrotechniques",
                "Génie mécanique",
                "Machines, unités et processus technologiques",
                "Génie Chimique, Science des Matériaux, Métallurgie",
                "Nanotechnologies et nanomatériaux",
                "Technologie des Procédés Électrochimiques et Protection contre la Corrosion",
                "Procédés et Dispositifs de Génie Chimique",
                "Génie agricole et technologies alimentaires",
                "Technologie, machines et équipements agro-industriels",
                "Droit",
                "Sciences juridiques théoriques et historiques",
                "Sciences du Droit Pénal",
                "Sciences juridiques internationales",
                "Économie",
                "Économie régionale et de branche",
                "Sciences Politiques",
                "Institutions, processus et technologies politiques",
                "Études Historiques",
                "Histoire autochtone",
                "Éducation et Sciences Pédagogiques",
                "Théorie et méthodes de la formation professionnelle",
                "Philologie",
                "Linguistique Théorique, Appliquée et Comparée"
            ]
        },
        
            "L'université d'État technique d'Altaï I.I.Polzounov":{
                Licence: [
                    "Génie civil",
                    "Technologies de l'information",
                    "Génie énergétique",
                    "Biotechnologie, ingénierie alimentaire et chimique",
                    "Architecture et design",
                    "Économie et gestion"
                  ],
                Master: [
                    "Informatique (y compris un programme en anglais)",
                    "Génie mécanique",
                    "Génie chimique",
                    "Gestion de la qualité",
                    "Design et architecture"
                  ],
                Doctorat: [
                    "Modélisation mathématique et méthodes numériques",
                    "Génie énergétique",
                    "Technologies de l'information",
                    "Sciences des matériaux"
                  ]
            },

            "L'académie d'État technique d’Angarsk":{
                Licence:[
                    "Construction",
                    "Informatique et techniques informatiques (profils : 'Technologies numériques industrielles' et 'Technologies de l'information dans les affaires')",
                    "Électronique et nanoélectronique",
                    "Énergie électrique et ingénierie électrique",
                    "Machines et équipements technologiques",
                    "Automatisation des processus technologiques et de production",
                    "Technologie chimique (profils : 'Matériaux fonctionnels innovants' et 'Technologie chimique des ressources énergétiques naturelles')",
                    "Processus d'économie d'énergie et de ressources en technologie chimique, pétrochimie et biotechnologie",
                    "Sécurité technosphérique",
                    "Technologie des processus de transport",
                    "Économie",
                    "Gestion"
                ],
                Master: [
                    "Construction",
                    "Informatique et techniques informatiques",
                    "Électronique et nanoélectronique",
                    "Machines et équipements technologiques",
                    "Automatisation des processus technologiques et de production",
                    "Technologie chimique (profils : 'Technologie chimique de la synthèse organique' et 'Technologie des substances et matériaux chimiques')",
                    "Sécurité technosphérique"
                ]
                ,
                Doctorat:[
                    "Informatique et techniques informatiques (spécialité : 'Analyse systémique, gestion et traitement de l'information, statistiques')",
                    "Technologie chimique (spécialité : 'Processus et appareils des technologies chimiques')"
                ]

            },
            "L'université d'État technique d'Astrakhan":{
                Licence: [
                    "Aquaculture",
                    "Biologie",
                    "Écologie",
                    "Gestion de l'environnement",
                    "Pêche",
                    "Science alimentaire",
                    "Technologies de l'information",
                    "Génie énergétique",
                    "Transport maritime",
                    "Transport routier",
                    "Droit"
                  ],
                Master:[
                    "Aquaculture",
                    "Biologie",
                    "Écologie",
                    "Gestion de l'environnement",
                    "Pêche",
                    "Science alimentaire",
                    "Technologies de l'information",
                    "Transport maritime",
                    "Gestion de l'eau"
                  ],
                Doctorat:[
                    "Génie agricole",
                    "Modélisation mathématique",
                    "Génie énergétique"
                  ]
            },
            "L'université d'État technique 'VOENMEH' de la Baltie D.F.Ustinov":{
                Licence:[
                    "Systèmes et technologies de l'information",
                    "Génie logiciel",
                    "Industrie de l'ingénierie",
                    "Mécanique appliquée",
                    "Économie",
                    "Gestion",
                    "Publicité et relations publiques",
                    "Linguistique fondamentale et linguistique appliquée",
                    "Conception et soutien technologique des productions de construction mécanique",
                    "Sécurité technosphérique",
                    "Normalisation et métrologie",
                    "Gestion des systèmes d'ingénierie"
                ],
                Master:[
                    "Dynamique et résistance des machines et instruments",
                    "Technique d'ingénierie",
                    "Ingénierie environnementale",
                    "Éléments et dispositifs des systèmes de contrôle",
                    "Contrôle des systèmes robotisés",
                    "Gestion générale et stratégique",
                    "Administration publique et municipale",
                    "Processus et méthodes de développement de logiciels",
                    "Normalisation, gestion de la qualité et métrologie en instrumentation",
                    "Gestion sportive",
                    "Infrastructure de sécurité politique des systèmes sociaux"
                ],
                Doctorat:[
                    "Économie",
                    "Sciences politiques et études régionales",
                    "Philosophie, éthique et études religieuses",
                    "Informatique et technologie",
                    "Industrie de l'ingénierie",
                    "Sécurité technosphérique",
                    "Gestion des systèmes d'ingénierie"
                ]

            },
            "L'université d'État technologique de Belgorod":{
                Licence:[
                    "Architecture",
                    "Technologie informatique",
                    "Ingénierie",
                    "Équipement de traitement et ingénierie",
                    "Industrie chimique",
                    "Logistique",
                    "Économie et gestion"
                ],
                Master:[
                    "Économie",
                    "Sciences techniques",
                    "Nano matériaux"
                ],
                Doctorat:[
                    "Architecture",
                    "Technologie informatique",
                    "Ingénierie",
                    "Industrie chimique",
                    "Sciences techniques"
                ]

            },
            "L'académie d'État d'ingenieur et technologique de Bryansk":{
                Licence:[
                    "Génie civil",
                    "Écologie et gestion de l'environnement",
                    "Foresterie et gestion forestière",
                    "Technologie industrielle",
                    "Génie mécanique",
                    "Construction industrielle et civile",
                    "Construction de routes"
                ],
                Master:[
                    "Génie mécanique",
                    "Écologie et gestion de l'environnement",
                    "Technologie industrielle avancée",
                    "Construction et gestion des infrastructures"
                ],
                Doctorat:[
                    "Génie mécanique",
                    "Écologie et gestion de l'environnement",
                    "Technologie industrielle",
                    "Construction et matériaux de construction"
                ]
            },
            "L'université d'État technique de Volgograd":{
                Licence:[
                    "Génie chimique",
                    "Informatique et génie informatique",
                    "Économie et gestion",
                    "Génie mécanique",
                    "Technologie industrielle",
                    "Métallurgie",
                    "Technologie alimentaire",
                    "Gestion environnementale",
                    "Ingénierie électrique et électronique"
                ],
                Master:[
                    "Génie chimique",
                    "Informatique",
                    "Génie mécanique",
                    "Technologie alimentaire",
                    "Gestion environnementale",
                    "Métallurgie"
                ],
                Doctorat:[
                    "Génie chimique",
                    "Informatique",
                    "Génie mécanique",
                    "Métallurgie",
                    "Technologie industrielle"
                ]
            },
////////////////////////////////////

"L'université d'État d'ingénieur et pédagogique de Volga": {
    Licence: [
        "Génie mécanique",
        "Pédagogie technique",
        "Technologies de l'information",
        "Gestion industrielle"
    ],
    Master: [
        "Génie pédagogique",
        "Technologies éducatives avancées",
        "Gestion des systèmes techniques"
    ],
    Doctorat: [
        "Recherche en pédagogie technique",
        "Systèmes d'ingénierie avancés"
    ]
},
"L'université d'État technique de la Volga": {
    Licence: [
        "Génie civil",
        "Informatique et génie informatique",
        "Électrotechnique",
        "Gestion de la qualité"
    ],
    Master: [
        "Génie mécanique",
        "Systèmes d'information",
        "Gestion stratégique"
    ],
    Doctorat: [
        "Modélisation mathématique",
        "Génie énergétique",
        "Technologies de l'information"
    ]
},
"L'université d'État technique de Vologda": {
    Licence: [
        "Génie mécanique",
        "Technologies de l'information",
        "Gestion environnementale",
        "Économie"
    ],
    Master: [
        "Génie industriel",
        "Systèmes de contrôle",
        "Gestion des ressources naturelles"
    ],
    Doctorat: [
        "Recherche en génie mécanique",
        "Technologies de l'information",
        "Sciences environnementales"
    ]
},
"L'université d'État technique de Voronej": {
    Licence: [
        "Architecture",
        "Urbanisme",
        "Génie mécanique",
        "Technologies de l'information"
    ],
    Master: [
        "Génie civil",
        "Systèmes de communication",
        "Gestion de projets techniques"
    ],
    Doctorat: [
        "Recherche en génie civil",
        "Technologies de l'information",
        "Systèmes énergétiques"
    ]
},

//////////////////////////////////////
"L'université d'État des technologies d'ingenieur de Voronej":{
    Licence: [
        "Génie mécanique",
        "Technologies de l'information",
        "Sécurité informatique",
        "Architecture",
        "Génie aérospatial"
    ],
    Master: [
        "Construction avancée",
        "Gestion technologique",
        "Systèmes énergétiques"
    ],
    Doctorat: [
        "Recherche en ingénierie",
        "Innovation technologique"
    ]
},

"L'université d'État technologique d’Est de Sibérie":{
    Licence: [
        "Sciences humaines",
        "Sciences naturelles",
        "Ingénierie"
    ],
    Master: [
        "Technologies avancées",
        "Gestion de projets techniques"
    ],
    Doctorat: [
        "Études approfondies en sciences naturelles et techniques"
    ]
},

"L'université d'État technique de Daghestan":{
    Licence: [
        "Architecture",
        "Gestion",
        "Ingénierie"
    ],
    Master: [
        "Développement industriel",
        "Technologies de construction"
    ],
    Doctorat: [
        "Recherche en génie mécanique et informatique"
    ]
},
"L'université d'État technique d'Extrême Orient V.V.Kouybychev":{
    Licence: [
        "Énergie",
        "Construction",
        "Pétrole et gaz"],
    Master: [
        "Génie chimique",
        "Automatisation industrielle"
    ],
    Doctorat: [
        "Recherche en ingénierie énergétique et technologique"
    ]
},

"L'université d'État technique du Rostov":{
    Licence: [
        "Agro-ingénierie",
        "Biotechnologie",
        "Technologies de l'information"
    ],
    Master: [
        "Architecture avancée",
        "Génie industriel"
    ],
    Doctorat: [
        "Études en métallurgie et science des matériaux"
    ]
},







"L'université d'État énergétique d'Ivanovo":{
    Licence:["Ingénierie électrique", "Automatisation et ingénierie de contrôle", "Génie logiciel0", "Sociologie", "Économie", "Chauffage et réfrigération", "Ingénierie mécanique", "Sciences de l'information"],
    Master:["Ingénierie électrique", "Automatisation et ingénierie de contrôle", "Génie logiciel", "Économie et Gestion", "Chauffage et réfrigération"],
    Doctorat:["Genie énergétique", "Automatisation et ingénierie de contrôle", "Génie logiciel","Science de l'information", "Économie" ]
},
    "L'université d'État technique d'Ijevsk M.T.Kalashnikov":{
            
                    Licence: [
                        "Mécatronique et robotique",
                        "Génie logiciel",
                        "Génie civil",
                        "Ingénierie pétrolière et gazière"
                    ],
                    Master: [
                        "Génie mécanique",
                        "Sciences de l'information",
                        "Génie civil"
                    ],
                    Doctorat: [
                        "Mécatronique et robotique",
                        "Génie logiciel",
                        "Génie civil",
                        "Sciences de l'information"
                    ]
                
                
            },
            "L'université d'État technique d'Irkoutsk":{
                Licence: [
                    "Ingénierie mécanique",
                    "Informatique",
                    "Économie innovante et durable",
                    "Sciences sociales",
                    "Gestion de l'environnement",
                    "Exploitation technique des équipements aéronautiques"
                ],
                Master: [
                    "Énergies renouvelables",
                    "MBA en gestion globale et leadership",
                    "Analyse de mégadonnées et intelligence artificielle",
                    "Technologies de l'information en exploitation minière"
                ],
                Doctorat: [
                    "Recherche avancée en ingénierie mécanique",
                    "Sciences sociales appliquées",
                    "Systèmes d'information d'entreprise"
                ]
            },

            "L'université d'État technique de Kazan A.N.Toupolev":{
                Licence: [
                    "Ingénierie aéronautique",
                    "Informatique",
                    "Génie mécanique",
                    "Automatisation et fabrication de machines électroniques"
                ],
                Master: [
                    "Technologies avancées en ingénierie",
                    "Programmes de double diplôme avec des universités allemandes (via l'Institut germano-russe des technologies avancées)",
                    "Génie des communications radio"
                ],
                Doctorat: [
                    "Recherche en nanotechnologies",
                    "Systèmes automatisés",
                    "Développement de moteurs et technologies laser"
                ]
            }
            ,
            "L'université d'État énergétique de Kazan":{
                Licence: [
                    "Électricité et électronique",
                    "Énergie thermique",
                    "Technologie numérique et économie",
                    "Automatisation et contrôle"
                ],
                Master: [
                    "Systèmes énergétiques intelligents",
                    "Économie d'énergie et efficacité énergétique",
                    "Technologies numériques appliquées à l'énergie"
                ],
                Doctorat: [
                    "Énergie électrique et thermique",
                    "Technologies d'automatisation",
                    "Économie énergétique"
                ]
            },
           
            "L'université d'État technique de Kaliningrad":{
                Licence: [
            "Écologie et gestion de la nature",
            "Sécurité technosphérique",
            "Bioressources aquatiques et aquaculture",
            "Génie mécanique",
            "Biotechnologie",
            "Informatique appliquée",
            "Génie naval et océanique"
        ],
        Master: [
            "Sécurité des processus technologiques",
            "Gestion environnementale et utilisation de l'eau",
            "Génie mécanique avancé",
            "Biotechnologie",
            "Construction et ingénierie navale"
        ],
        Doctorat: [
            "Recherche en génie naval",
            "Technologies environnementales et marines"
        ]},

            "L'académie d'État technologique de Kirov":{
        Licence: [
            "Génie civil",
            "Technologies de l'information",
            "Génie industriel"
        ],
        Master: [
            "Génie civil avancé",
            "Informatique appliquée"
        ],
        Doctorat: [
            "Recherche en génie civil et technologies de l'information"
        ]
            },
        "L'université d'État technique du Komsomol-sur-Amour":{

        },
            "L'université d'État technologique de Kostroma":{
                Licence:[
                    "Génie mécanique",
                    "Génie électrique",
                    "Informatique appliquée",
                    "Construction navale"
                ],
                Master: [
                    "Technologies de l'information",
                    "Génie industriel",
                    "Automatisation des systèmes"
                ],
                Doctorat: [
                    "Recherche en génie mécanique et électrique"
                ]
            },
            "L'université d'État technique de Krasnoïarsk (l'Université Sibérienne Fédérale)":{  
                 Licence: [
                "Génie civil",
                "Informatique",
                "Énergies renouvelables",
                "Sciences environnementales"
            ],
            Master: [
                "Nanotechnologies",
                "Génie des matériaux",
                "Gestion des ressources naturelles"
            ],
            Doctorat: [
                "Recherche en génie civil et technologies environnementales"
            ]},
            "L'université d'État technologique de Kouban":{
            
                Licence: [
            "Génie chimique",
            "Informatique",
            "Automatisation industrielle",
            "Sociologie"
        ],
        Master: [
            "Génie des procédés alimentaires",
            "Pétrole et gaz",
            "Sécurité technosphérique"
        ],
        Doctorat: [
            "Recherche en génie chimique et technologies alimentaires"
        ]
             },
            "L'université d'État technique de Kouzbass T.F.Gorbatchev":{
                Licence: [
                    "Génie minier",
                    "Génie mécanique",
                    "Informatique appliquée"
                ],
                Master: [
                    "Technologies de l'énergie",
                    "Automatisation industrielle"
                ],
                Doctorat: [
                    "Recherche en génie minier et technologies énergétiques"
                ]
            },
            "L'université d'État technique de Koursk":{
            Licence: [
                    "Génie civil",
                    "Informatique",
                    "Technologie industrielle",
                    "Industrie textile"
                ],
            Master: [
                    "Génie industriel",
                    "Automatisation des systèmes",
                    "Technologie chimique"
                ],
                Doctorat: [
                    "Recherche en génie civil et technologies chimiques"
                ]
            },

    "L'université d'État technique du Lipetsk":{
            Licence: [
      "Génie mécanique et technologie de la production",
      "Ingénierie électrique et électronique",
      "Automatisation et robotique",
      "Informatique et technologies de l’information",
      "Génie des matériaux et métallurgie",
      "Architecture et génie civil",
      "Économie appliquée à l’industrie"
    ],
    Master: [
      "Ingénierie mécanique avancée",
      "Électronique et énergies renouvelables",
      "Automatisation industrielle et robotique",
      "Informatique appliquée",
      "Management technologique et innovation industrielle",
      "Technologies des matériaux avancés"
    ],
    Doctorat: [
      "Recherche en génie mécanique et énergétique",
      "Recherche en électronique, automatisation et contrôle des systèmes",
      "Études sur l'innovation en technologies de l'information appliquées à l'industrie",
      "Recherche en économie industrielle et gestion technologique"
    ]},
            "L'université d'État technique de Magnitogorsk G.I.Nosov": {
                Licence: [
                  "Métallurgie et science des matériaux",
                  "Génie mécanique et construction",
                  "Informatique et technologies numériques",
                  "Électronique et électrotechnique",
                  "Chimie technologique",
                  "Génie civil et architecture industrielle"
                ],
                Master: [
                  "Métallurgie avancée et science des matériaux",
                  "Génie mécanique avancé et robotique",
                  "Systèmes informatiques et technologies de l'information industrielle",
                  "Gestion industrielle et optimisation des procédés",
                  "Électronique appliquée et technologies de l'énergie",
                  "Interdisciplinarité en nanotechnologie et matériaux"
                ],
                Doctorat: [
                  "Recherche en métallurgie et science des matériaux",
                  "Recherche en génie mécanique et en automatisation",
                  "Études avancées en électronique et technologies de l'information industrielle",
                  "Projets intersectoriels en ingénierie appliquée et innovation"
                ]
              },

            "L'université d'État technologique du Maikop":{
                Licence: [
                  "Génie civil et construction",
                  "Mécanique et technologies de production industrielle",
                  "Informatique et systèmes d'information",
                  "Génie électrique et électronique",
                  "Technologies environnementales",
                  "Agriculture et agroalimentaire",
                  "Management et économie appliquée à l’industrie"
                ],
                Master: [
                  "Automatisation et contrôle des procédés industriels",
                  "Génie mécanique avancé",
                  "Technologies de la construction et du génie civil avancé",
                  "Management industriel et stratégique",
                  "Informatique appliquée aux systèmes industriels",
                  "Technologies agroalimentaires et environnementales"
                ],
                Doctorat: [
                  "Recherche en ingénierie de la construction et matériaux",
                  "Recherche en technologies de production et robotique",
                  "Études en management industriel et économies technologiques",
                  "Projets interdisciplinaires en technologies agroalimentaires et environnementales"
                ]
              },
            "L'université d'État industrielle de Moscou":{
                Licence: [
                  "Génie mécanique et de production industrielle",
                  "Automatisation, robotique et systèmes de contrôle",
                  "Informatique appliquée aux technologies industrielles",
                  "Génie des matériaux et métallurgie appliquée",
                  "Électronique pour l’industrie",
                  "Management industriel et logistique"
                ],
                Master: [
                  "Technologies avancées en mécanisation et automatisation",
                  "Ingénierie des systèmes de production et optimisation des procédés",
                  "Robotique et systèmes de contrôle intelligent",
                  "Développement de nouveaux matériaux et innovations industrielles",
                  "Management stratégique et organisation industrielle"
                ],
                Doctorat: [
                  "Recherche en ingénierie industrielle et production",
                  "Développement de technologies de contrôle et d’automatisation",
                  "Innovation en matériaux et procédés industriels",
                  "Projets interdisciplinaire en technologie, management et stratégie industrielle"
                ]
              },
            "L'institut d'État de l'électronique et la mathématique de Moscou":{

                Licence: [
      "Automatisation et génie électronique",
      "Informatique et systèmes d’information",
      "Mathématiques appliquées et informatique",
      "Microélectronique et technologies de l’information",
      "Génie logiciel et systèmes intégrés"
    ],
    Master: [
      "Ingénierie avancée en électronique et automatisation",
      "Informatique avancée et systèmes numériques",
      "Mathématiques appliquées, modélisation numérique et optimisation",
      "Microélectronique et technologies avancées",
      "Systèmes embarqués et ingénierie des logiciels industriels"
    ],
    Doctorat: [
      "Recherche en électronique, systèmes de contrôle et automatisation",
      "Innovations en informatique appliquée et en mathématiques computationnelles",
      "Projets interdisciplinaires en systèmes d'information et microélectronique",
      "Études avancées en ingénierie logicielle et technologies numériques"
    ]
    },

    "L'université d'État mécanique de Moscou (MAMI)":{
        Licence: [
      "Ingénierie automobile",
      "Automatisation et ingénierie de contrôle",
      "Génie mécanique",
      "Chimie technologique",
      "Écologie et génie de l'environnement",
      "Gestion industrielle"
    ],
    Master: [
      "Ingénierie automobile avancée",
      "Automatisation des systèmes industriels",
      "Technologies chimiques appliquées",
      "Gestion stratégique et industrielle"
    ],
    Doctorat: [
      "Recherche en ingénierie automobile",
      "Systèmes automatisés et robotique",
      "Études avancées en génie mécanique"
    ]
    },

    "L'université d'État technique de Moscou (l'Université Nationale Scientifique)":{
        Licence: [
      "Ingénierie mécanique",
      "Informatique et systèmes d'information",
      "Nanotechnologies",
      "Énergies renouvelables"
    ],
    Master: [
      "Technologies avancées en ingénierie",
      "Systèmes énergétiques intelligents",
      "Nanotechnologies et matériaux innovants"
    ],
    Doctorat: [
      "Recherche en nanotechnologies",
      "Systèmes automatisés et robotique",
      "Énergies renouvelables et durables"
    ]
    },


    "L'université d'État technique de la radiotechnique, l'électronique et l'automatique de Moscou":{
        Licence: [
      "Électronique et systèmes embarqués",
      "Automatisation industrielle",
      "Informatique et technologies numériques"
    ],
    Master: [
      "Systèmes électroniques avancés",
      "Robotique et automatisation",
      "Technologies de l'information appliquées"
    ],
    Doctorat: [
      "Recherche en électronique et systèmes embarqués",
      "Robotique avancée",
      "Systèmes d'information industriels"
    ]},
    "L'université d'État technologique de Moscou (STANKIN)":{
    Licence: [
      "Mécatronique et robotique",
      "Génie logiciel",
      "Automatisation des processus industriels",
      "Science et technologie des matériaux"
    ],
    Master: [
      "Robotique et mécatronique avancées",
      "Technologies de fabrication numérique",
      "Gestion de la qualité industrielle"
    ],
    Doctorat: [
      "Recherche en mécatronique et robotique",
      "Technologies avancées des matériaux",
      "Systèmes automatisés industriels"
    ]},
    "L'université d'État de la construction d'appareils et l'informatique de Moscou":{
        Licence: [
      "Informatique et systèmes d'information",
      "Automatisation et contrôle",
      "Technologies de fabrication numérique"
    ],
    Master: [
      "Systèmes d'information avancés",
      "Automatisation industrielle",
      "Technologies numériques appliquées"
    ],
    Doctorat: [
      "Recherche en systèmes d'information",
      "Automatisation et contrôle avancés",
      "Technologies numériques innovantes"
    ]
    },


    "L'université d'État de la biotechnologie appliquée de Moscou":{
    Licence: [
      "Biotechnologie",
      "Chimie appliquée",
      "Technologie alimentaire",
      "Génie logiciel"
    ],
    Master: [
      "Biotechnologie avancée",
      "Technologies alimentaires innovantes",
      "Automatisation des systèmes biotechnologiques"
    ],
    Doctorat: [
      "Recherche en biotechnologie",
      "Technologies alimentaires avancées",
      "Systèmes automatisés en biotechnologie"
    ]
    },


    "L'université d'État des technologies et la gestion de Moscou K.G.Razoumovsky":{
    Licence: [
      "Biotechnologie",
      "Économie",
      "Gestion",
      "Automatisation des processus technologiques"
    ],
    Master: [
      "Gestion stratégique",
      "Biotechnologie avancée",
      "Automatisation industrielle"
    ],
    Doctorat: [
      "Recherche en biotechnologie",
      "Gestion et économie appliquées",
      "Systèmes automatisés"
    ]
    },
    "L'université nationale scientifique technologique de Moscou (MISiS)":{
    
    Licence: [
      "Science des matériaux",
      "Nanotechnologies",
      "Énergies renouvelables",
      "Informatique appliquée"
    ],
    Master: [
      "Matériaux avancés et nanotechnologies",
      "Technologies énergétiques durables",
      "Informatique et systèmes numériques"
    ],
    Doctorat: [
      "Recherche en nanotechnologies",
      "Matériaux innovants",
      "Systèmes énergétiques avancés"
    ]
    },
    "L'université nationale scientifique nucléaire (MIFI), l'institut d'ingenieur et physique de Moscou":{
    Licence: [
      "Physique nucléaire",
      "Informatique et technologies numériques",
      "Énergies renouvelables"
    ],
    Master: [
      "Technologies nucléaires avancées",
      "Systèmes énergétiques intelligents",
      "Informatique appliquée"
    ],
    Doctorat: [
      "Recherche en physique nucléaire",
      "Technologies énergétiques durables",
      "Systèmes numériques avancés"
    ]
    },
    "L'université d'État technique d’Orel":{
    Licence: [
      "Génie mécanique",
      "Informatique et systèmes d'information",
      "Automatisation industrielle"
    ],
    Master: [
      "Technologies avancées en ingénierie",
      "Systèmes automatisés",
      "Informatique appliquée"
    ],
    Doctorat: [
      "Recherche en génie mécanique",
      "Systèmes automatisés avancés",
      "Technologies numériques"
    ]
    },
    
///////////////////////////////////////


    "L'académie d'État technologique de Penza": {
      Licence: [
        "Technologie éducative",
        "Informatique",
        "Économie industrielle",
        "Ingénierie de construction",
        "Technologie alimentaire"
      ],
      Master: [
        "Systèmes technologiques avancés",
        "Gestion industrielle et innovation",
        "Informatique appliquée aux systèmes industriels",
        "Technologies alimentaires et biotechnologie"
      ],
      Doctorat: [
        "Recherche en ingénierie technologique",
        "Innovation en gestion industrielle",
        "Études avancées en technologies appliquées"
      ]
    },
    "L'université nationale scientifique technique de Perm": {
      Licence: [
        "Génie mécanique",
        "Informatique appliquée",
        "Sciences des matériaux",
        "Énergies renouvelables",
        "Ingénierie électronique"
      ],
      Master: [
        "Ingénierie avancée et robotique",
        "Technologies de l'information et télécommunications",
        "Gestion de la production industrielle",
        "Développement durable et énergies renouvelables"
      ],
      Doctorat: [
        "Recherche en génie mécanique",
        "Innovations en science des matériaux",
        "Technologies énergétiques et durables"
      ]
    },
    "L'université russe d'État technologique (MATI)": {
      Licence: [
        "Aéronautique et technologies spatiales",
        "Ingénierie mécanique",
        "Électronique et systèmes embarqués",
        "Informatique appliquée",
        "Mathématiques et modélisation"
      ],
      Master: [
        "Systèmes avioniques et de contrôle",
        "Ingénierie des matériaux et nanotechnologies",
        "Technologies de l'information pour l'aérospatiale",
        "Optimisation des systèmes mécaniques"
      ],
      Doctorat: [
        "Recherche en technologies aéronautiques",
        "Développement de systèmes de contrôle avancés",
     "Innovations en nanotechnologie appliquée à l'aérospatiale"
      ]
    },
    "L'université russe d'État des technologies innovants et l'entreprise": {
      Licence: [
        "Innovation technologique et entrepreneuriat",
        "Informatique appliquée",
        "Génie industriel",
        "Gestion de l'innovation"
      ],
      Master: [
        "Management de l'innovation et stratégie technologique",
        "Développement de nouvelles technologies",
        "Entrepreneuriat technologique et start-up"
      ],
      Doctorat: [
        "Recherche en technologies innovantes",
        "Études en entrepreneuriat technologique",
        "Innovation et gestion d'entreprise"
      ]
    },
    "L'université d'État radiotechnique de Riazan": {
      Licence: [
        "Radioélectronique et télécommunications",
        "Systèmes de radiocommunication",
        "Électronique et automatismes",
        "Informatique pour télécommunications"
      ],
      Master: [
        "Technologies avancées en radiotechnique",
        "Systèmes de communication et réseaux",
        "Ingénierie électronique et automatisation"
      ],
      Doctorat: [
        "Recherche en radioélectronique et communications",
        "Innovations en systèmes de radiocommunication"
      ]
    },
    "L'université d'État technique de Samara": {
      Licence: [
        "Génie mécanique et production",
        "Ingénierie informatique",
        "Automatisation et robotique",
        "Génie électrique et électronique",
        "Technologie de la construction"
      ],
      Master: [
        "Ingénierie des systèmes de production",
        "Technologies de l'automatisation avancée",
        "Développement en ingénierie informatique",
        "Design et innovation en génie mécanique"
      ],
      Doctorat: [
        "Recherche en génie mécanique et automatisation",
        "Études avancées en systèmes industriels",
        "Innovations en technologies électroniques"
      ]
    },
    "L'université d'État polytechnique de Saint-Pétersbourg": {
      Licence: [
        "Ingénierie mécanique et civil",
        "Électronique et télécommunications",
        "Informatique et systèmes d'information",
        "Génie chimique et des matériaux",
        "Mathématiques appliquées"
      ],
      Master: [
        "Technologies de l'information et communication",
        "Ingénierie civile avancée",
        "Robotique et automatisation",
        "Nanotechnologies et matériaux innovants",
        "Gestion de projets technologiques"
      ],
      Doctorat: [
        "Recherche en ingénierie mécanique et structurelle",
        "Innovations en électronique et télécommunications",
        "Études avancées en nanotechnologies",
        "Recherche en génie chimique et matériaux"
      ]
    },
    "L'institut d'État technologique de Saint-Pétersbourg (l'Université Technique)": {
      Licence: [
        "Ingénierie mécanique",
        "Automatisation et robotique",
        "Électronique appliquée",
        "Informatique et systèmes d'information"
      ],
      Master: [
        "Technologies avancées en ingénierie",
        "Systèmes automatisés et robotique",
        "Développement de logiciels industriels"
      ],
      Doctorat: [
        "Recherche en ingénierie appliquée",
        "Innovations en automatisation et robotique",
        "Études avancées en technologie logicielle"
      ]
    },
    "L'université d'État technologique des polymères végétaux de Saint-Pétersbourg": {
      Licence: [
        "Technologie des polymères végétaux",
        "Chimie appliquée des matériaux naturels",
        "Biotechnologie et biopolymères",
        "Gestion de la production de polymères"
      ],
      Master: [
        "Recherche avancée en polymères végétaux",
        "Développement de matériaux biosourcés",
        "Innovation en chimie des polymères"
      ],
      Doctorat: [
        "Recherche en biopolymères et technologies vertes",
        "Développement de nouveaux matériaux durables"
      ]
    },
    "L'université d'État des télécommunications de Saint-Pétersbourg M.A.Bontch-Brouevitch": {
      Licence: [
        "Réseaux de télécommunications",
        "Ingénierie des systèmes de communication",
        "Électronique et radiotechnologie",
        "Informatique appliquée aux télécommunications"
      ],
      Master: [
        "Systèmes avancés de télécommunications",
        "Technologies de l'information et communication",
        "Ingénierie des réseaux et sécurité des communications"
      ],
      Doctorat: [
        "Recherche en télécommunications et réseaux",
        "Innovations en systèmes de communication avancés"
      ]
    },


    "L'université d'État électrotechnique de Saint-Pétersbourg V.I.Oul'yanov 'LETI'":
    {Licence: [
        "Électronique appliquée",
        "Automatisation et contrôle des systèmes",
        "Télécommunications et réseaux numériques",
        "Informatique et systèmes embarqués",
        "Énergies renouvelables et systèmes énergétiques"
      ],
      Master: [
        "Systèmes électroniques avancés",
        "Systèmes intelligents et robotique",
        "Technologies avancées des télécommunications",
        "Automatisation des systèmes industriels"
      ],
      Doctorat: [
        "Recherche en électronique appliquée",
        "Innovations en télécommunications",
        "Études avancées en automatisation"
      ]
    },

    "L'université d'État électrotechnique de Saint-Pétersbourg V.I.Oul'yanov 'LETI'": {
        Licence: [
          "Électronique appliquée",
          "Automatisation et contrôle des systèmes",
          "Télécommunications et réseaux numériques",
          "Informatique et systèmes embarqués",
          "Énergies renouvelables et systèmes énergétiques"
        ],
        Master: [
          "Systèmes électroniques avancés",
          "Systèmes intelligents et robotique",
          "Technologies avancées des télécommunications",
          "Automatisation des systèmes industriels"
        ],
        Doctorat: [
          "Recherche en électronique appliquée",
          "Innovations en télécommunications",
          "Études avancées en automatisation"
        ]
      },
      "L'université nationale scientifique des télématiques, la mécanique et l'optique de Saint-Pétersbourg": {
        Licence: [
          "Optique et photonique",
          "Informatique et télécommunications",
          "Robotique et mécatronique",
          "Systèmes intégrés et technologies embarquées",
          "Génie mécanique et énergétique"
        ],
        Master: [
          "Technologies laser et photonique avancée",
          "Robotique avancée et systèmes automatisés",
          "Systèmes de télécommunications et réseaux intelligents",
          "Nanotechnologies et optoélectronique"
        ],
        Doctorat: [
          "Recherche en photonique et systèmes optiques",
          "Innovations en télécommunications",
          "Nanotechnologies appliquées"
        ]
      },
      "L'université d'État technique de Saratov Y.A.Gagarine": {
        Licence: [
          "Ingénierie aéronautique et spatiale",
          "Électronique et automatisation",
          "Informatique et réseaux",
          "Énergies renouvelables"
        ],
        Master: [
          "Systèmes de contrôle aéronautique",
          "Technologies innovantes pour l'énergie",
          "Automatisation avancée"
        ],
        Doctorat: [
          "Recherche en ingénierie aéronautique",
          "Études avancées en électronique et automatisation",
          "Innovations en systèmes énergétiques"
        ]
      },
      "L'université technique ouverte de nord-ouest": {
        Licence: [
          "Technologies numériques appliquées",
          "Automatisation industrielle",
          "Informatique et cybersécurité",
          "Énergies renouvelables"
        ],
        Master: [
          "Cybersécurité et intelligence artificielle",
          "Systèmes automatisés industriels",
          "Développement durable et technologies énergétiques"
        ],
        Doctorat: [
          "Recherche en cybersécurité",
          "Innovations en automatisation",
          "Systèmes énergétiques avancés"
        ]
      },
      "L'université d'État technique du Nord du Caucase": {
        Licence: [
          "Génie mécanique",
          "Télécommunications et réseaux",
          "Systèmes automatisés",
          "Informatique appliquée"
        ],
        Master: [
          "Robotique et automatisation",
          "Technologies des télécommunications avancées",
          "Informatique et réseaux industriels"
        ],
        Doctorat: [
          "Recherche en ingénierie mécanique",
          "Études avancées en automatisation",
          "Systèmes de communication innovants"
        ]
      },
      "L'université d'État industrielle sibérienne": {
        Licence: [
          "Génie industriel et mécanique",
          "Électronique appliquée",
          "Informatique et gestion des données",
          "Énergies renouvelables"
        ],
        Master: [
          "Technologies industrielles avancées",
          "Énergies durables et renouvelables",
          "Systèmes automatisés"
        ],
        Doctorat: [
          "Recherche en génie industriel",
          "Études en technologies énergétiques",
          "Innovations en automatisation"
        ]
      },
      "L'université d'État des télécommunications et l'informatique sibérienne": {
        Licence: [
          "Systèmes de télécommunications",
          "Réseaux et cybersécurité",
          "Informatique appliquée",
          "Automatisation et contrôle"
        ],
        Master: [
          "Systèmes intelligents de communication",
          "Cybersécurité avancée",
          "Automatisation des réseaux"
        ],
        Doctorat: [
          "Recherche en systèmes de télécommunications",
          "Études en cybersécurité avancée",
          "Systèmes de communication innovants"
        ]
      },
      "L'université d'État radiotechnique de Taganrog": {
        Licence: [
          "Électronique et radiocommunications",
          "Informatique et technologies numériques",
          "Systèmes de contrôle automatisé",
          "Énergies renouvelables"
        ],
        Master: [
          "Technologies de radiocommunication avancées",
          "Systèmes automatisés et robotique",
          "Informatique industrielle avancée"
        ],
        Doctorat: [
          "Recherche en radiocommunications",
          "Innovations en robotique",
          "Systèmes numériques avancés"
        ]
},

//////////////

    "L'université d'État technique de Tver": {
      Licence: [
        "Génie mécanique",
        "Automatisation et contrôle",
        "Informatique appliquée",
        "Technologies énergétiques",
        "Ingénierie civile et industrielle"
      ],
      Master: [
        "Systèmes industriels automatisés",
        "Gestion de l'énergie et durabilité",
        "Informatique avancée et technologies numériques",
        "Robotique et ingénierie mécanique"
      ],
      Doctorat: [
        "Recherche en ingénierie mécanique",
        "Études avancées en automatisation",
        "Systèmes énergétiques renouvelables"
      ]
    },
    "L'université d'État des systèmes de guidage et la radio-électronique de Tomsk": {
      Licence: [
        "Radioélectronique et télécommunications",
        "Automatisation et contrôle des systèmes",
        "Informatique et systèmes embarqués",
        "Électronique appliquée"
      ],
      Master: [
        "Systèmes de guidage avancés",
        "Technologies radio et communication numérique",
        "Automatisation des systèmes industriels"
      ],
      Doctorat: [
        "Recherche en radioélectronique",
        "Systèmes embarqués avancés",
        "Études en télécommunications innovantes"
      ]
    },
    "L'université d'État technique d'Oulianovsk": {
      Licence: [
        "Génie mécanique et aéronautique",
        "Automatisation industrielle",
        "Informatique et réseaux",
        "Ingénierie civile et environnementale"
      ],
      Master: [
        "Technologies aéronautiques avancées",
        "Systèmes automatisés industriels",
        "Innovation en ingénierie informatique"
      ],
      Doctorat: [
        "Recherche en aéronautique",
        "Études avancées en automatisation",
        "Systèmes environnementaux innovants"
      ]
    },
    "L'université d'État technique d’Oukhta": {
      Licence: [
        "Technologies pétrolières et gazières",
        "Génie civil et construction",
        "Électronique et énergies renouvelables",
        "Automatisation industrielle"
      ],
      Master: [
        "Gestion de l'énergie et technologies pétrolières avancées",
        "Systèmes automatisés pour l'industrie du gaz et du pétrole",
        "Développement durable et ingénierie civile"
      ],
      Doctorat: [
        "Recherche en ingénierie pétrolière et gazière",
        "Études avancées en technologies durables",
        "Innovations en automatisation industrielle"
      ]
    },
    "L'université russe d'État technique du Sud M.I.Platov": {
      Licence: [
        "Génie mécanique",
        "Automatisation et robotique",
        "Informatique appliquée",
        "Électronique et télécommunications"
      ],
      Master: [
        "Robotique avancée et mécatronique",
        "Informatique et intelligence artificielle",
        "Systèmes de communication avancés"
      ],
      Doctorat: [
        "Recherche en ingénierie mécanique et robotique",
        "Études en télécommunications innovantes",
        "Systèmes numériques avancés"
      ]
    },
    "L'université d'État technique d'Iaroslavl": {
      Licence: [
        "Ingénierie industrielle et mécanique",
        "Informatique et réseaux",
        "Systèmes automatisés",
        "Énergies renouvelables"
      ],
      Master: [
        "Technologies numériques et intelligence artificielle",
        "Automatisation avancée des systèmes industriels",
        "Énergies durables et renouvelables"
      ],
      Doctorat: [
        "Recherche en ingénierie industrielle",
        "Systèmes automatisés avancés",
        "Innovations en énergie renouvelable"
      ]
    },
  
  ///////////////////////



    "L'université d'État d’Adyguéens": {
      Licence: [
        "Éducation et pédagogie",
        "Langues étrangères",
        "Géographie et environnement",
        "Informatique et mathématiques appliquées"
      ],
      Master: [
        "Éducation spécialisée",
        "Géographie et durabilité",
        "Technologies numériques en éducation"
      ],
      Doctorat: [
        "Recherche en éducation et pédagogie",
        "Études environnementales avancées"
      ]
    },
    "L'université d'État d'Altaï": {
      Licence: [
        "Biologie et sciences naturelles",
        "Mathématiques et informatique",
        "Histoire et archéologie",
        "Géographie et géoécologie"
      ],
      Master: [
        "Technologies de l'information et modélisation",
        "Études en sciences naturelles",
        "Patrimoine historique et culturel"
      ],
      Doctorat: [
        "Recherche en biologie",
        "Sciences historiques avancées"
      ]
    },
    "L'université d'État d'Amour": {
      Licence: [
        "Génie civil",
        "Économie et gestion",
        "Ingénierie des ressources naturelles",
        "Informatique et mathématiques appliquées"
      ],
      Master: [
        "Technologies de l'ingénierie avancée",
        "Gestion stratégique et durabilité",
        "Systèmes numériques appliqués"
      ],
      Doctorat: [
        "Recherche en ingénierie des ressources",
        "Études avancées en économie"
      ]
    },
    "L'université d'État d'Astrakhan": {
      Licence: [
        "Biologie marine",
        "Chimie environnementale",
        "Informatique et mathématiques",
        "Langues étrangères"
      ],
      Master: [
        "Conservation et biotechnologies marines",
        "Gestion de l'environnement",
        "Langues et traduction avancées"
      ],
      Doctorat: [
        "Recherche en biologie marine",
        "Études en chimie environnementale"
      ]
    },
    "L'université d'État de la Bachkirie": {
      Licence: [
        "Sciences politiques",
        "Informatique appliquée",
        "Mathématiques fondamentales",
        "Physique et technologies numériques"
      ],
      Master: [
        "Informatique et cybersécurité",
        "Sciences politiques avancées",
        "Applications mathématiques et physiques"
      ],
      Doctorat: [
        "Recherche en cybersécurité",
        "Études avancées en physique appliquée"
      ]
    },
    "L'université d'État de Belgorod": {
      Licence: [
        "Architecture et urbanisme",
        "Informatique et systèmes d'information",
        "Biologie et biotechnologie",
        "Sciences économiques"
      ],
      Master: [
        "Planification urbaine et technologies vertes",
        "Biotechnologies avancées",
        "Gestion stratégique des entreprises"
      ],
      Doctorat: [
        "Recherche en biotechnologie",
        "Études en urbanisme durable"
      ]
    },
    "L'université d'État du Bratsk": {
      Licence: [
        "Ingénierie énergétique",
        "Automatisation industrielle",
        "Informatique appliquée",
        "Écologie et gestion des ressources naturelles"
      ],
      Master: [
        "Systèmes énergétiques avancés",
        "Robotique et automatisation",
        "Durabilité et gestion de l'environnement"
      ],
      Doctorat: [
        "Recherche en systèmes énergétiques",
        "Études avancées en robotique"
      ]
    },
    "L'université d'État de Bryansk": {
      Licence: [
        "Ingénierie mécanique",
        "Agriculture et technologies alimentaires",
        "Informatique et génie logiciel",
        "Génie civil"
      ],
      Master: [
        "Technologies avancées en ingénierie mécanique",
        "Agro-industrie et biotechnologies",
        "Systèmes numériques pour le génie civil"
      ],
      Doctorat: [
        "Recherche en ingénierie mécanique",
        "Biotechnologies appliquées"
      ]
    },
    "L'université d'État de la Bouriatie": {
      Licence: [
        "Sciences sociales et humanités",
        "Sciences naturelles et environnement",
        "Technologies de l'information",
        "Langues et linguistique"
      ],
      Master: [
        "Gestion environnementale",
        "Études avancées en sciences sociales",
        "Applications des technologies de l'information"
      ],
      Doctorat: [
        "Recherche en sciences sociales",
        "Études en linguistique avancée"
      ]
    },
    "L'université d'État de Vladimir Alexandre Grigoriévitch, Nikolay Grigoriévitch Stoletovy": {
      Licence: [
        "Ingénierie mécanique",
        "Chimie industrielle",
        "Informatique et génie logiciel",
        "Gestion d'entreprise"
      ],
      Master: [
        "Ingénierie avancée en génie chimique",
        "Technologies de l'information",
        "Stratégies de gestion industrielle"
      ],
      Doctorat: [
        "Recherche en chimie industrielle",
        "Études en génie logiciel avancé"
      ]
    },
    "L'université d'État de Volgograd": {
      Licence: [
        "Construction et architecture",
        "Sciences informatiques",
        "Énergies renouvelables",
        "Biotechnologies"
      ],
      Master: [
        "Urbanisme durable",
        "Énergies durables",
        "Biotechnologies et innovation"
      ],
      Doctorat: [
        "Recherche en énergies renouvelables",
        "Études en biotechnologie avancée"
      ]
    },
    "L'université d'État de Volga": {
      Licence: [
        "Informatique et systèmes numériques",
        "Ingénierie industrielle",
        "Langues étrangères",
        "Environnement et durabilité"
      ],
      Master: [
        "Cybersécurité et intelligence artificielle",
        "Applications industrielles avancées",
        "Gestion environnementale et stratégie durable"
      ],
      Doctorat: [
        "Recherche en informatique",
        "Innovations en ingénierie industrielle"
      ]
    },
    "L'université d'État de Voronej": {
      Licence: [
        "Sciences biologiques",
        "Informatique et intelligence artificielle",
        "Sciences politiques et sociales",
        "Écologie et gestion de la nature"
      ],
      Master: [
        "Technologies en biologie moléculaire",
        "Cybersécurité et IA",
        "Études avancées en sciences politiques"
      ],
      Doctorat: [
        "Recherche en biologie moléculaire",
        "Études approfondies en IA et écologie"
      ]
    },
    "L'université d'État de Viatka": {
      Licence: [
        "Informatique et génie logiciel",
        "Énergies renouvelables et durables",
        "Biotechnologies",
        "Langues étrangères"
      ],
      Master: [
        "Développement logiciel avancé",
        "Technologies énergétiques durables",
        "Innovations en biotechnologie"
      ],
      Doctorat: [
        "Recherche en développement logiciel",
        "Études en énergie renouvelable"
      ]
    },
    "L'université d'État des mines d'Altaï": {
      Licence: [
        "Génie minier",
        "Informatique et géoinformatique",
        "Automatisation industrielle",
        "Sciences environnementales"
      ],
      Master: [
        "Technologies avancées pour l'exploitation minière",
        "Systèmes géoinformatiques",
        "Durabilité environnementale"
      ],
      Doctorat: [
        "Recherche en génie minier",
        "Études avancées en géoinformatique"
      ]
    },
    "L'université d'État de Daghestan": {
      Licence: [
        "Sciences naturelles",
        "Informatique et systèmes d'information",
        "Sciences sociales et humanités",
        "Biologie et écologie"
      ],
      Master: [
        "Applications avancées en informatique",
        "Gestion environnementale",
        "Études en sciences naturelles"
      ],
      Doctorat: [
        "Recherche en informatique",
        "Études environnementales avancées"
      ]
    },
    "L'université d'Extrême Orient fédérale": {
      Licence: [
        "Technologies marines",
        "Sciences de l'environnement",
        "Énergies renouvelables",
        "Informatique et systèmes numériques"
      ],
      Master: [
        "Innovation en ingénierie marine",
        "Technologies de l'énergie durable",
        "Cybersécurité et systèmes numériques"
      ],
      Doctorat: [
        "Recherche en sciences marines",
        "Études avancées en énergies renouvelables"
      ]
    },


  /////////////////////




    "L'université d'État d'Ielets I.A.Bounin": {
      Licence: [
        "Linguistique et littérature",
        "Histoire et études culturelles",
        "Mathématiques et technologies de l'information",
        "Chimie et biotechnologie"
      ],
      Master: [
        "Études avancées en linguistique",
        "Applications numériques en histoire",
        "Innovations en chimie et biotechnologie"
      ],
      Doctorat: [
        "Recherche en linguistique",
        "Études historiques approfondies",
        "Biotechnologie appliquée"
      ]
    },
    "L'université d'État du Zabaikalsk": {
      Licence: [
        "Génie mécanique",
        "Informatique appliquée",
        "Biotechnologie",
        "Sciences environnementales"
      ],
      Master: [
        "Technologies avancées en ingénierie",
        "Gestion environnementale durable",
        "Applications numériques en biotechnologie"
      ],
      Doctorat: [
        "Recherche en biotechnologie",
        "Études avancées en ingénierie"
      ]
    },
    "L'université d'État d'Ivanovo": {
      Licence: [
        "Ingénierie électrique",
        "Automatisation et ingénierie de contrôle",
        "Génie logiciel",
        "Économie et gestion"
      ],
      Master: [
        "Génie énergétique avancé",
        "Technologies numériques appliquées",
        "Automatisation industrielle"
      ],
      Doctorat: [
        "Recherche en systèmes énergétiques",
        "Études approfondies en ingénierie de contrôle"
      ]
    },
    "L'université d'État d’Ingouchie": {
      Licence: [
        "Éducation et pédagogie",
        "Sciences sociales",
        "Informatique appliquée",
        "Langues et traduction"
      ],
      Master: [
        "Éducation avancée",
        "Études en sciences sociales",
        "Technologies numériques en éducation"
      ],
      Doctorat: [
        "Recherche en pédagogie",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État d'Irkoutsk": {
      Licence: [
        "Informatique et systèmes d'information",
        "Énergies renouvelables",
        "Gestion environnementale",
        "Sciences de la Terre"
      ],
      Master: [
        "Applications des énergies renouvelables",
        "Technologies numériques avancées",
        "Géosciences et environnement durable"
      ],
      Doctorat: [
        "Recherche en énergies renouvelables",
        "Études en gestion environnementale"
      ]
    },
    "L'université d'État du Kabardino-Balkarie K.M.Berbekov": {
      Licence: [
        "Informatique",
        "Sciences économiques",
        "Ingénierie civile",
        "Langues et culture"
      ],
      Master: [
        "Applications informatiques avancées",
        "Gestion stratégique",
        "Technologies du génie civil"
      ],
      Doctorat: [
        "Recherche en ingénierie civile",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État de Kazan V. I. Oul'yanov (Lénine)": {
      Licence: [
        "Sciences naturelles",
        "Informatique et mathématiques",
        "Langues étrangères et traduction",
        "Gestion et économie"
      ],
      Master: [
        "Technologies numériques avancées",
        "Sciences économiques et gestion",
        "Études culturelles et linguistiques"
      ],
      Doctorat: [
        "Recherche en sciences naturelles",
        "Études en mathématiques appliquées"
      ]
    },
    "L'université de Kazan fédérale": {
      Licence: [
        "Biologie et sciences environnementales",
        "Mathématiques et informatique",
        "Sciences sociales et politiques",
        "Langues et communication"
      ],
      Master: [
        "Applications en biotechnologie",
        "Technologies numériques pour l'environnement",
        "Études en sciences sociales avancées"
      ],
      Doctorat: [
        "Recherche en biologie moléculaire",
        "Études culturelles avancées"
      ]
    },
    "L'université d'État de la Kalmoukie": {
      Licence: [
        "Études culturelles",
        "Langues étrangères",
        "Sciences environnementales",
        "Informatique appliquée"
      ],
      Master: [
        "Études culturelles avancées",
        "Gestion environnementale",
        "Applications numériques en éducation"
      ],
      Doctorat: [
        "Recherche en culture et langues",
        "Études en gestion environnementale"
      ]
    },
    "L'université d'État de Kamtchatka Vitous Bering": {
      Licence: [
        "Sciences marines et environnement",
        "Langues et traduction",
        "Biotechnologie",
        "Géographie appliquée"
      ],
      Master: [
        "Biotechnologies et développement durable",
        "Applications maritimes et environnementales",
        "Études avancées en géographie"
      ],
      Doctorat: [
        "Recherche en sciences marines",
        "Études en biotechnologie et durabilité"
      ]
    },

        "L'université d'État de Kémérovo": {
          Licence: [
            "Psychologie",
            "Économie",
            "Informatique",
            "Langues modernes",
            "Sciences naturelles"
          ],
          Master: [
            "Gestion stratégique",
            "Technologies numériques",
            "Sciences de l'éducation",
            "Biologie moléculaire"
          ],
          Doctorat: [
            "Recherche en sciences naturelles",
            "Études avancées en psychologie",
            "Innovations en économie"
          ]
        },
        "L'université d'État de Kostroma N.A.Nekrasov": {
          Licence: [
            "Littérature et philologie",
            "Mathématiques appliquées",
            "Informatique",
            "Sciences sociales"
          ],
          Master: [
            "Technologies éducatives",
            "Applications numériques",
            "Études avancées en philologie"
          ],
          Doctorat: [
            "Recherche en mathématiques appliquées",
            "Études en sciences sociales"
          ]
        },
        "L'université d'État de Kuban": {
          Licence: [
            "Biologie",
            "Chimie",
            "Informatique",
            "Économie",
            "Droit"
          ],
          Master: [
            "Technologies de l'information",
            "Gestion économique",
            "Études avancées en biologie"
          ],
          Doctorat: [
            "Recherche en chimie",
            "Études en économie durable",
            "Innovations en informatique"
          ]
        },
        "L'université d'État du Kourgan": {
          Licence: [
            "Génie mécanique",
            "Informatique",
            "Sciences environnementales",
            "Économie"
          ],
          Master: [
            "Technologies industrielles avancées",
            "Gestion environnementale",
            "Applications numériques"
          ],
          Doctorat: [
            "Recherche en génie mécanique",
            "Études avancées en environnement"
          ]
        },
        "L'université d'État de Koursk": {
          Licence: [
            "Médecine",
            "Pharmacie",
            "Biotechnologie",
            "Informatique"
          ],
          Master: [
            "Technologies médicales avancées",
            "Gestion pharmaceutique",
            "Applications en biotechnologie"
          ],
          Doctorat: [
            "Recherche en médecine",
            "Études avancées en biotechnologie"
          ]
        },
        "L'université d'État de Léningrad A.S.Pouchkin": {
          Licence: [
            "Langues étrangères",
            "Sciences sociales",
            "Informatique",
            "Éducation"
          ],
          Master: [
            "Études linguistiques avancées",
            "Technologies éducatives",
            "Applications numériques"
          ],
          Doctorat: [
            "Recherche en linguistique",
            "Études en sciences sociales"
          ]
        },
        "L'université d'État du Magnitogorsk": {
          Licence: [
            "Métallurgie",
            "Génie mécanique",
            "Informatique",
            "Économie"
          ],
          Master: [
            "Technologies métallurgiques avancées",
            "Robotique et automatisation",
            "Gestion industrielle"
          ],
          Doctorat: [
            "Recherche en métallurgie",
            "Études avancées en robotique"
          ]
        },
        "L'université d'État du Maikop (l'université d'État d’Adyguéens)": {
          Licence: [
            "Éducation",
            "Langues étrangères",
            "Sciences sociales",
            "Informatique"
          ],
          Master: [
            "Technologies éducatives",
            "Études linguistiques avancées",
            "Applications numériques"
          ],
          Doctorat: [
            "Recherche en éducation",
            "Études en sciences sociales"
          ]
        },
        "L'université d'État de la Mordovie N.P.Ogarev": {
          Licence: [
            "Biologie",
            "Informatique",
            "Économie",
            "Droit"
          ],
          Master: [
            "Technologies biologiques avancées",
            "Gestion économique",
            "Applications numériques"
          ],
          Doctorat: [
            "Recherche en biologie",
            "Études avancées en économie"
          ]
        },
        "L'université d'État de Moscou M.V.Lomonosov": {
          Licence: [
            "Mathématiques",
            "Physique",
            "Chimie",
            "Biologie",
            "Informatique"
          ],
          Master: [
            "Technologies avancées en sciences",
            "Applications numériques",
            "Études en biologie moléculaire"
          ],
          Doctorat: [
            "Recherche en physique",
            "Études avancées en mathématiques"
          ]
        },
        "L'université de Moscou S.Ju.Vitte": {
          Licence: [
            "Gestion",
            "Informatique",
            "Droit",
            "Économie"
          ],
          Master: [
            "Gestion stratégique",
            "Applications numériques",
            "Études avancées en droit"
          ],
          Doctorat: [
            "Recherche en gestion",
            "Études en informatique"
          ]
        },
      
      
  
  //////////////////////////////

  
    "L'université de Moscou S.Ju.Vitte": {
      Licence: [
        "Gestion",
        "Informatique appliquée",
        "Droit",
        "Économie"
      ],
      Master: [
        "Gestion stratégique",
        "Technologies numériques avancées",
        "Études approfondies en droit"
      ],
      Doctorat: [
        "Recherche en gestion et stratégie",
        "Applications numériques en économie",
        "Études avancées en droit"
      ]
    },
    "L'université d'État d'Omsk F.M.Dostoevskiy": {
      Licence: [
        "Langues et littérature",
        "Sciences sociales",
        "Informatique",
        "Gestion et économie"
      ],
      Master: [
        "Applications linguistiques avancées",
        "Gestion stratégique",
        "Technologies numériques"
      ],
      Doctorat: [
        "Recherche en linguistique et littérature",
        "Études en économie durable"
      ]
    },
    "L'université d'État d’Orel": {
      Licence: [
        "Génie mécanique",
        "Informatique et systèmes d'information",
        "Automatisation industrielle",
        "Technologies numériques"
      ],
      Master: [
        "Technologies avancées en génie mécanique",
        "Applications numériques en informatique",
        "Automatisation des processus industriels"
      ],
      Doctorat: [
        "Recherche en systèmes automatisés",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État de Penza": {
      Licence: [
        "Biotechnologie",
        "Informatique appliquée",
        "Sciences sociales",
        "Langues et culture"
      ],
      Master: [
        "Biotechnologies avancées",
        "Applications numériques et informatique",
        "Études en sciences sociales"
      ],
      Doctorat: [
        "Recherche en biotechnologie",
        "Études avancées en linguistique"
      ]
    },
    "L'université d'État nationale scientifique de Perm": {
      Licence: [
        "Génie mécanique",
        "Informatique appliquée",
        "Nanotechnologies",
        "Sciences environnementales"
      ],
      Master: [
        "Technologies avancées en ingénierie",
        "Gestion environnementale",
        "Nanotechnologies et durabilité"
      ],
      Doctorat: [
        "Recherche en nanotechnologies",
        "Études avancées en ingénierie"
      ]
    },
    "L'université d'État de Perm": {
      Licence: [
        "Biologie",
        "Informatique",
        "Économie",
        "Langues et traduction"
      ],
      Master: [
        "Technologies biologiques avancées",
        "Études en informatique",
        "Gestion stratégique"
      ],
      Doctorat: [
        "Recherche en biologie",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État de Pétrozavodsk": {
      Licence: [
        "Langues et littérature",
        "Informatique et systèmes d'information",
        "Sciences naturelles",
        "Gestion et économie"
      ],
      Master: [
        "Applications linguistiques avancées",
        "Technologies numériques appliquées",
        "Études environnementales"
      ],
      Doctorat: [
        "Recherche en linguistique et culture",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État du Pomorsk M.V.Lomonosov": {
      Licence: [
        "Sciences marines et environnement",
        "Langues étrangères",
        "Biotechnologie",
        "Informatique appliquée"
      ],
      Master: [
        "Technologies marines avancées",
        "Applications numériques pour l'environnement",
        "Études en biotechnologie"
      ],
      Doctorat: [
        "Recherche en sciences marines",
        "Études avancées en biotechnologie"
      ]
    },
    "L'université d'État de Pskov": {
      Licence: [
        "Langues et communication",
        "Informatique appliquée",
        "Sciences sociales",
        "Éducation"
      ],
      Master: [
        "Technologies numériques",
        "Études avancées en linguistique",
        "Gestion stratégique"
      ],
      Doctorat: [
        "Recherche en langues et linguistique",
        "Études en éducation numérique"
      ]
    },
    "L'université d'État de Pushchino": {
      Licence: [
        "Biotechnologie",
        "Sciences naturelles",
        "Informatique appliquée",
        "Langues et culture"
      ],
      Master: [
        "Biotechnologies avancées",
        "Applications numériques pour les sciences naturelles",
        "Études en linguistique"
      ],
      Doctorat: [
        "Recherche en biotechnologie",
        "Études avancées en sciences naturelles"
      ]
    },
    "L'université russe d'État Emmanuel Kant": {
      Licence: [
        "Philosophie",
        "Langues et littérature",
        "Informatique appliquée",
        "Économie"
      ],
      Master: [
        "Études philosophiques avancées",
        "Applications numériques",
        "Gestion économique"
      ],
      Doctorat: [
        "Recherche en philosophie",
        "Études en économie durable"
      ]
    },
    "L’université russe nouvelle": {
      Licence: [
        "Sciences sociales",
        "Langues et traduction",
        "Informatique appliquée",
        "Éducation"
      ],
      Master: [
        "Technologies éducatives avancées",
        "Applications numériques",
        "Études linguistiques approfondies"
      ],
      Doctorat: [
        "Recherche en linguistique et traduction",
        "Études en sciences sociales"
      ]
    },
    "L'université russe de l'amitié des peuples": {
      Licence: [
        "Médecine",
        "Langues étrangères",
        "Sciences sociales",
        "Informatique appliquée"
      ],
      Master: [
        "Applications médicales avancées",
        "Technologies numériques pour les langues",
        "Gestion environnementale et sociale"
      ],
      Doctorat: [
        "Recherche en médecine",
        "Études avancées en linguistique"
      ]
    },
    "L'université d'État de Rostov": {
      Licence: [
        "Biologie",
        "Informatique",
        "Langues et traduction",
        "Sciences sociales"
      ],
      Master: [
        "Applications biologiques avancées",
        "Technologies numériques",
        "Études en sciences sociales"
      ],
      Doctorat: [
        "Recherche en biologie moléculaire",
        "Études avancées en informatique"
      ]
    },
  
  ///////////////////////////////


    "L'université d'État de Riazan S.A.Esénin": {
      Licence: [
        "Langues et littérature",
        "Sciences sociales",
        "Informatique",
        "Biologie"
      ],
      Master: [
        "Études linguistiques avancées",
        "Technologies numériques appliquées",
        "Biologie et biotechnologie"
      ],
      Doctorat: [
        "Recherche en linguistique",
        "Études avancées en sciences sociales"
      ]
    },
    "L'université d'État de Samara": {
      Licence: [
        "Génie mécanique",
        "Informatique et technologies de l'information",
        "Sciences politiques",
        "Langues étrangères"
      ],
      Master: [
        "Applications mécaniques avancées",
        "Gestion stratégique et numérique",
        "Études en relations internationales"
      ],
      Doctorat: [
        "Recherche en génie mécanique",
        "Études avancées en sciences politiques"
      ]
    },
    "L'université d'État de Saint-Pétersbourg": {
      Licence: [
        "Sciences humaines",
        "Informatique et systèmes d'information",
        "Mathématiques appliquées",
        "Biologie moléculaire"
      ],
      Master: [
        "Technologies numériques",
        "Biotechnologie avancée",
        "Sciences sociales et politiques"
      ],
      Doctorat: [
        "Recherche en biologie",
        "Études avancées en mathématiques appliquées"
      ]
    },
    "L'université d'État de Sakhaline": {
      Licence: [
        "Sciences marines",
        "Langues étrangères",
        "Biotechnologie",
        "Gestion et économie"
      ],
      Master: [
        "Technologies marines avancées",
        "Gestion durable",
        "Études en biotechnologie"
      ],
      Doctorat: [
        "Recherche en sciences marines",
        "Études en économie maritime"
      ]
    },
    "L'université du nord fédérale": {
      Licence: [
        "Sciences naturelles",
        "Langues et littérature",
        "Informatique",
        "Sciences sociales"
      ],
      Master: [
        "Applications numériques",
        "Études en sciences naturelles",
        "Biotechnologie avancée"
      ],
      Doctorat: [
        "Recherche en sciences naturelles",
        "Études avancées en informatique"
      ]
    },
    "L'université du nord fédérale M.V.Lomonosov": {
      Licence: [
        "Sciences humaines",
        "Informatique",
        "Langues étrangères",
        "Biologie"
      ],
      Master: [
        "Biotechnologie avancée",
        "Technologies numériques",
        "Études culturelles"
      ],
      Doctorat: [
        "Recherche en biologie",
        "Études avancées en linguistique"
      ]
    },
    "L'université d'État de nord-est": {
      Licence: [
        "Informatique",
        "Sciences environnementales",
        "Sciences sociales",
        "Langues modernes"
      ],
      Master: [
        "Applications numériques avancées",
        "Études environnementales",
        "Gestion stratégique"
      ],
      Doctorat: [
        "Recherche en sciences environnementales",
        "Études avancées en informatique"
      ]
    },
    "L'université de nord-est fédérale d’Iakoutsk": {
      Licence: [
        "Sciences arctiques et marines",
        "Langues et traduction",
        "Informatique",
        "Biotechnologie"
      ],
      Master: [
        "Applications marines avancées",
        "Technologies numériques et durabilité",
        "Études culturelles arctiques"
      ],
      Doctorat: [
        "Recherche en sciences marines",
        "Études en biotechnologie et durabilité"
      ]
    },
    "L'université du Nord fédérale du Caucase": {
      Licence: [
        "Génie mécanique",
        "Langues étrangères",
        "Informatique appliquée",
        "Sciences sociales"
      ],
      Master: [
        "Applications en génie mécanique",
        "Technologies numériques",
        "Études culturelles et sociales"
      ],
      Doctorat: [
        "Recherche en génie mécanique",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État du Nord d'Ossétie K.L.Khetagourov": {
      Licence: [
        "Langues étrangères",
        "Sciences sociales",
        "Sciences environnementales",
        "Informatique appliquée"
      ],
      Master: [
        "Études linguistiques avancées",
        "Applications numériques",
        "Études environnementales"
      ],
      Doctorat: [
        "Recherche en linguistique",
        "Études en sciences sociales"
      ]
    },
    "L'université sibérienne fédérale": {
      Licence: [
        "Sciences naturelles",
        "Biologie et écologie",
        "Informatique",
        "Sciences humaines"
      ],
      Master: [
        "Technologies biologiques avancées",
        "Gestion environnementale",
        "Applications numériques"
      ],
      Doctorat: [
        "Recherche en biologie et écologie",
        "Études en informatique appliquée"
      ]
    },
    "L'université d'État de Sotchi": {
      Licence: [
        "Tourisme et gestion",
        "Langues étrangères",
        "Sciences sociales",
        "Informatique"
      ],
      Master: [
        "Gestion stratégique",
        "Technologies éducatives",
        "Applications numériques"
      ],
      Doctorat: [
        "Recherche en gestion du tourisme",
        "Études avancées en sciences sociales"
      ]
    },
    "L'université d'État de Syktyvkar": {
      Licence: [
        "Langues et littérature",
        "Sciences sociales",
        "Informatique",
        "Biologie"
      ],
      Master: [
        "Études linguistiques avancées",
        "Technologies numériques appliquées",
        "Biologie et biotechnologie"
      ],
      Doctorat: [
        "Recherche en linguistique",
        "Études avancées en sciences sociales"
      ]
    },
    "L'université d'État de Tambov G.P.Derjavin": {
      Licence: [
        "Littérature et linguistique",
        "Informatique appliquée",
        "Sciences sociales",
        "Langues étrangères"
      ],
      Master: [
        "Études avancées en linguistique",
        "Applications numériques",
        "Technologies éducatives"
      ],
      Doctorat: [
        "Recherche en linguistique",
        "Études en technologies numériques"
      ]
    },
    "L'université d'État de Tver": {
      Licence: [
        "Génie mécanique",
        "Automatisation et contrôle",
        "Informatique appliquée",
        "Technologies énergétiques"
      ],
      Master: [
        "Systèmes industriels automatisés",
        "Gestion de l'énergie et durabilité",
        "Informatique avancée et technologies numériques"
      ],
      Doctorat: [
        "Recherche en ingénierie mécanique",
        "Études avancées en automatisation",
        "Systèmes énergétiques renouvelables"
      ]
    },
    "L'université nationale du Pacifique": {
      Licence: [
        "Études marines",
        "Langues étrangères",
        "Biotechnologie",
        "Informatique appliquée"
      ],
      Master: [
        "Technologies marines avancées",
        "Applications en biotechnologie",
        "Études en durabilité environnementale"
      ],
      Doctorat: [
        "Recherche en études marines",
        "Études avancées en biotechnologie"
      ]
    },

  
//////////////////////////




    "L'université d'État de Togliatti": {
      Licence: [
        "Génie mécanique",
        "Automatisation industrielle",
        "Informatique",
        "Économie et gestion"
      ],
      Master: [
        "Technologies avancées en génie mécanique",
        "Applications numériques",
        "Gestion stratégique et industrielle"
      ],
      Doctorat: [
        "Recherche en génie mécanique",
        "Études avancées en automatisation"
      ]
    },
    "L'université d'État de Tomsk": {
      Licence: [
        "Sciences naturelles",
        "Informatique appliquée",
        "Biologie moléculaire",
        "Mathématiques"
      ],
      Master: [
        "Technologies numériques avancées",
        "Applications biologiques",
        "Études en mathématiques appliquées"
      ],
      Doctorat: [
        "Recherche en biologie",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État de Tuva": {
      Licence: [
        "Langues et culture locale",
        "Sciences sociales",
        "Informatique",
        "Gestion et économie"
      ],
      Master: [
        "Applications numériques",
        "Études culturelles avancées",
        "Gestion stratégique"
      ],
      Doctorat: [
        "Recherche en sciences sociales",
        "Études en linguistique locale"
      ]
    },
    "L'université d'État de Toula": {
      Licence: [
        "Ingénierie industrielle",
        "Automatisation et contrôle",
        "Biologie et biotechnologie",
        "Sciences sociales"
      ],
      Master: [
        "Applications industrielles avancées",
        "Biotechnologie durable",
        "Études en sciences sociales"
      ],
      Doctorat: [
        "Recherche en ingénierie",
        "Biotechnologie avancée"
      ]
    },
    "L'université d'État de la Oudmourtie": {
      Licence: [
        "Sciences économiques",
        "Langues étrangères",
        "Informatique appliquée",
        "Ingénierie civile"
      ],
      Master: [
        "Gestion stratégique",
        "Applications numériques",
        "Technologies de construction avancées"
      ],
      Doctorat: [
        "Recherche en informatique",
        "Études en sciences économiques"
      ]
    },
    "L'université d'Oulyanovsk d'État": {
      Licence: [
        "Génie mécanique",
        "Automatisation industrielle",
        "Langues étrangères",
        "Sciences sociales"
      ],
      Master: [
        "Applications numériques avancées",
        "Études en langues étrangères",
        "Technologies mécaniques avancées"
      ],
      Doctorat: [
        "Recherche en génie mécanique",
        "Études en automatisation industrielle"
      ]
    },
    "L'université d'Oural d'État": {
      Licence: [
        "Sciences humaines",
        "Informatique appliquée",
        "Biotechnologie",
        "Sciences sociales"
      ],
      Master: [
        "Technologies numériques avancées",
        "Applications biologiques",
        "Études culturelles avancées"
      ],
      Doctorat: [
        "Recherche en sciences humaines",
        "Études en biotechnologie"
      ]
    },
    "L'université d'État de Khabarovsk N.P.Katanov": {
      Licence: [
        "Sciences naturelles",
        "Langues étrangères",
        "Informatique",
        "Sciences sociales"
      ],
      Master: [
        "Applications numériques avancées",
        "Études en sciences naturelles",
        "Gestion stratégique"
      ],
      Doctorat: [
        "Recherche en sciences naturelles",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État de Tchéliabinsk": {
      Licence: [
        "Génie mécanique",
        "Automatisation industrielle",
        "Informatique",
        "Sciences sociales"
      ],
      Master: [
        "Applications numériques avancées",
        "Technologies mécaniques avancées",
        "Études en sciences sociales"
      ],
      Doctorat: [
        "Recherche en génie mécanique",
        "Études en automatisation industrielle"
      ]
    },
    "L'université d'État de Tcherepovets": {
      Licence: [
        "Informatique appliquée",
        "Langues étrangères",
        "Sciences sociales",
        "Sciences environnementales"
      ],
      Master: [
        "Technologies numériques avancées",
        "Études linguistiques approfondies",
        "Gestion environnementale"
      ],
      Doctorat: [
        "Recherche en informatique",
        "Études avancées en sciences sociales"
      ]
    },
    "L'université d'État de la Tchétchénie": {
      Licence: [
        "Langues et culture",
        "Sciences sociales",
        "Informatique",
        "Biologie"
      ],
      Master: [
        "Applications numériques",
        "Études culturelles avancées",
        "Technologies biologiques"
      ],
      Doctorat: [
        "Recherche en sciences sociales",
        "Études en biologie avancée"
      ]
    },
    "L'université d'État de la Tchouvachie I.N.Oul'yanov": {
      Licence: [
        "Langues étrangères",
        "Sciences sociales",
        "Sciences environnementales",
        "Informatique appliquée"
      ],
      Master: [
        "Études linguistiques avancées",
        "Applications numériques",
        "Études environnementales"
      ],
      Doctorat: [
        "Recherche en linguistique",
        "Études en sciences sociales"
      ]
    },
    "L'université d'État d’Yugorsk": {
      Licence: [
        "Langues étrangères",
        "Sciences sociales",
        "Informatique appliquée",
        "Gestion et économie"
      ],
      Master: [
        "Études linguistiques avancées",
        "Applications numériques",
        "Études culturelles"
      ],
      Doctorat: [
        "Recherche en linguistique",
        "Études avancées en sciences sociales"
      ]
    },
    "L'université d'État du Sud d'Oural": {
      Licence: [
        "Sciences naturelles",
        "Biologie et écologie",
        "Informatique",
        "Sciences humaines"
      ],
      Master: [
        "Technologies biologiques avancées",
        "Gestion environnementale",
        "Applications numériques"
      ],
      Doctorat: [
        "Recherche en biologie et écologie",
        "Études en informatique appliquée"
      ]
    },
    "L'université du Sud fédérale": {
      Licence: [
        "Biologie",
        "Informatique",
        "Langues et traduction",
        "Sciences sociales"
      ],
      Master: [
        "Applications biologiques avancées",
        "Technologies numériques",
        "Études en sciences sociales"
      ],
      Doctorat: [
        "Recherche en biologie moléculaire",
        "Études avancées en informatique"
      ]
    },
    "L'université d'État d'Iaroslavl P.G.Demidov": {
      Licence: [
        "Génie mécanique",
        "Informatique appliquée",
        "Langues étrangères",
        "Sciences sociales"
      ],
      Master: [
        "Technologies numériques avancées",
        "Études linguistiques approfondies",
        "Applications mécaniques avancées"
      ],
      Doctorat: [
        "Recherche en informatique",
        "Études avancées en sciences sociales"
      ]
    },
  
  
//////////////////////////////////


    "L'académie du marketing et des technologies sociales et informatiques": {
      Licence: [
        "Marketing numérique",
        "Gestion des réseaux sociaux",
        "Analyse des données informatiques",
        "Sciences sociales appliquées"
      ],
      Master: [
        "Stratégies avancées en marketing",
        "Technologies de l'information appliquées au marketing",
        "Gestion sociale et développement numérique"
      ],
      Doctorat: [
        "Recherche en marketing numérique",
        "Études avancées en technologies sociales"
      ]
    },
    "L'académie d'économie et le droit d'Altaï": {
      Licence: [
        "Sciences économiques",
        "Droit commercial",
        "Gestion publique",
        "Informatique appliquée au droit"
      ],
      Master: [
        "Gestion économique avancée",
        "Applications juridiques numériques",
        "Politiques publiques et législation"
      ],
      Doctorat: [
        "Recherche en droit commercial",
        "Études avancées en gestion publique"
      ]
    },
    "L'institut d'économie et le droit d'Altaï": {
      Licence: [
        "Économie et gestion",
        "Droit privé et commercial",
        "Sciences sociales appliquées",
        "Technologies de l'information"
      ],
      Master: [
        "Applications juridiques avancées",
        "Gestion stratégique",
        "Études économiques approfondies"
      ],
      Doctorat: [
        "Recherche en économie appliquée",
        "Études avancées en droit"
      ]
    },
    "L'université d'État de l'économie et le service de Vladivostok": {
      Licence: [
        "Gestion des entreprises",
        "Tourisme et services",
        "Économie et commerce",
        "Technologies numériques appliquées"
      ],
      Master: [
        "Gestion avancée des services",
        "Applications numériques pour le commerce",
        "Stratégies économiques durables"
      ],
      Doctorat: [
        "Recherche en gestion de services",
        "Études en commerce numérique"
      ]
    },
    "L'université d'État du service de Volga": {
      Licence: [
        "Économie et gestion des services",
        "Tourisme et hôtellerie",
        "Marketing",
        "Technologies numériques"
      ],
      Master: [
        "Stratégies marketing avancées",
        "Gestion des systèmes de service",
        "Applications numériques en tourisme"
      ],
      Doctorat: [
        "Recherche en hôtellerie et tourisme",
        "Études avancées en marketing"
      ]
    },
    "L'institut d'État des finances et l'économie de Kazan": {
      Licence: [
        "Finance et banque",
        "Économie appliquée",
        "Gestion financière",
        "Comptabilité"
      ],
      Master: [
        "Finance avancée",
        "Applications numériques en gestion financière",
        "Stratégies bancaires internationales"
      ],
      Doctorat: [
        "Recherche en finance",
        "Études en économie appliquée"
      ]
    },
    "L'université d'économie, la gestion et le droit de Kazan": {
      Licence: [
        "Droit commercial",
        "Gestion économique",
        "Finance et comptabilité",
        "Informatique juridique"
      ],
      Master: [
        "Droit des affaires avancé",
        "Stratégies économiques",
        "Applications numériques en finance"
      ],
      Doctorat: [
        "Recherche en droit commercial",
        "Études avancées en gestion économique"
      ]
    },
    "L'institut d'État du commerce et l'économie de Krasnoïarsk": {
      Licence: [
        "Économie et commerce",
        "Tourisme et gestion hôtelière",
        "Technologies numériques",
        "Marketing"
      ],
      Master: [
        "Gestion stratégique des entreprises",
        "Applications numériques dans le commerce",
        "Études avancées en marketing"
      ],
      Doctorat: [
        "Recherche en commerce international",
        "Études en gestion stratégique"
      ]
    },
    "L'institut de l'entreprise internationale et le management de Kuban": {
      Licence: [
        "Gestion des entreprises internationales",
        "Marketing et communication",
        "Économie et commerce",
        "Sciences sociales"
      ],
      Master: [
        "Stratégies de communication avancées",
        "Gestion des marchés internationaux",
        "Applications numériques pour les entreprises"
      ],
      Doctorat: [
        "Recherche en gestion internationale",
        "Études avancées en économie"
      ]
    },
    "L'académie financière-technologique de Moscou": {
      Licence: [
        "Finance",
        "Technologies de l'information",
        "Économie appliquée",
        "Gestion des entreprises"
      ],
      Master: [
        "Applications numériques pour les finances",
        "Gestion des entreprises innovantes",
        "Stratégies économiques avancées"
      ],
      Doctorat: [
        "Recherche en finance et technologie",
        "Études en économie durable"
      ]
    },
    "L'université d'État humanitaire de Moscou": {
      Licence: [
        "Sciences humaines",
        "Langues et littérature",
        "Sciences sociales",
        "Informatique appliquée"
      ],
      Master: [
        "Applications numériques en sciences humaines",
        "Études linguistiques avancées",
        "Technologies éducatives"
      ],
      Doctorat: [
        "Recherche en sciences humaines",
        "Études avancées en linguistique"
      ]
    },
    "L'université d'État de la gestion de Moscou": {
      Licence: [
        "Gestion",
        "Économie et finance",
        "Informatique appliquée",
        "Stratégies commerciales"
      ],
      Master: [
        "Gestion stratégique",
        "Applications numériques pour les entreprises",
        "Études avancées en économie"
      ],
      Doctorat: [
        "Recherche en gestion",
        "Études en finance internationale"
      ]
    },
    "L'université d'État de l'économie, la statistique et l'informatique de Moscou": {
      Licence: [
        "Statistiques et analyse",
        "Informatique appliquée",
        "Économie",
        "Finance"
      ],
      Master: [
        "Technologies numériques pour les statistiques",
        "Études avancées en analyse de données",
        "Gestion économique"
      ],
      Doctorat: [
        "Recherche en analyse statistique",
        "Études avancées en informatique appliquée"
      ]
    },
    "L'université financière et industrielle de Moscou 'Synergie'": {
      Licence: [
        "Gestion des entreprises",
        "Finance et économie",
        "Sciences sociales",
        "Informatique"
      ],
      Master: [
        "Stratégies financières avancées",
        "Technologies numériques pour les entreprises",
        "Études en économie durable"
      ],
      Doctorat: [
        "Recherche en finance",
        "Études avancées en gestion stratégique"
      ]
    },
    "L'université nationale scientifique, l'école supérieure de l'économie de Moscou": {
      Licence: [
        "Économie",
        "Statistiques et analyse de données",
        "Sciences sociales",
        "Informatique"
      ],
      Master: [
        "Économie appliquée avancée",
        "Technologies numériques pour les données",
        "Études sociales et politiques"
      ],
      Doctorat: [
        "Recherche en économie",
        "Études avancées en sciences sociales"
      ]
    },
    "L'académie russe du tourisme": {
      Licence: [
        "Gestion hôtelière",
        "Tourisme et services",
        "Marketing",
        "Langues étrangères"
      ],
      Master: [
        "Gestion avancée du tourisme",
        "Stratégies marketing",
        "Applications numériques pour l'industrie du voyage"
      ],
      Doctorat: [
        "Recherche en tourisme",
        "Études en gestion hôtelière"
      ]
    },
    "L'académie russe du tourisme internationale": {
      Licence: [
        "Tourisme",
        "Gestion des services",
        "Langues et communication",
        "Marketing international"
      ],
      Master: [
        "Gestion stratégique du tourisme",
        "Applications numériques en hôtellerie",
        "Langues et relations internationales"
      ],
      Doctorat: [
        "Recherche en gestion touristique",
        "Études avancées en marketing"
      ]
    },
  
//////////////////////////


"L'université russe d'État des technologies d'innovation et l'entreprise": {
      Licence: [
        "Innovation technologique",
        "Gestion des entreprises",
        "Économie appliquée",
        "Informatique pour la gestion"
      ],
      Master: [
        "Applications innovantes en gestion",
        "Stratégies technologiques avancées",
        "Économie numérique"
      ],
      Doctorat: [
        "Recherche en innovation technologique",
        "Études avancées en gestion d'entreprise"
      ]
    },
    "L'université russe d'État du commerce et l'économie": {
      Licence: [
        "Commerce international",
        "Finance et gestion",
        "Économie et marketing",
        "Technologies numériques pour le commerce"
      ],
      Master: [
        "Stratégies de commerce avancées",
        "Gestion financière internationale",
        "Marketing numérique"
      ],
      Doctorat: [
        "Recherche en commerce mondial",
        "Études avancées en économie"
      ]
    },
    "L'université russe d'État du tourisme et le service": {
      Licence: [
        "Tourisme et gestion hôtelière",
        "Marketing international",
        "Langues pour le tourisme",
        "Gestion des services"
      ],
      Master: [
        "Tourisme stratégique",
        "Applications numériques en hôtellerie",
        "Études culturelles et communication"
      ],
      Doctorat: [
        "Recherche en tourisme et services",
        "Études avancées en marketing hôtelier"
      ]
    },
    "L'université russe de la coopération": {
      Licence: [
        "Gestion des coopératives",
        "Économie solidaire",
        "Informatique pour la coopération",
        "Droit coopératif"
      ],
      Master: [
        "Applications avancées en gestion coopérative",
        "Économie sociale et durable",
        "Technologies numériques pour la coopération"
      ],
      Doctorat: [
        "Recherche en économie coopérative",
        "Études avancées en gestion solidaire"
      ]
    },
    "L'université russe économique G.V.Plehanov": {
      Licence: [
        "Économie",
        "Gestion d'entreprise",
        "Finance",
        "Marketing"
      ],
      Master: [
        "Stratégies économiques avancées",
        "Gestion internationale",
        "Finance d'entreprise"
      ],
      Doctorat: [
        "Recherche en économie",
        "Études avancées en marketing et finance"
      ]
    },
    "L'université d'État économique de Rostov": {
      Licence: [
        "Économie et gestion",
        "Marketing",
        "Tourisme et hôtellerie",
        "Informatique pour l'économie"
      ],
      Master: [
        "Économie numérique",
        "Stratégies de gestion avancées",
        "Applications marketing"
      ],
      Doctorat: [
        "Recherche en gestion et marketing",
        "Études avancées en économie"
      ]
    },
    "L'université d'État économique de Samara": {
      Licence: [
        "Commerce et finance",
        "Gestion stratégique",
        "Économie appliquée",
        "Informatique et commerce"
      ],
      Master: [
        "Applications numériques en économie",
        "Stratégies commerciales",
        "Finance et gestion d'entreprise"
      ],
      Doctorat: [
        "Recherche en finance et commerce",
        "Études avancées en économie stratégique"
      ]
    },
    "L'université d'État du commerce et l'économie de Saint-Pétersbourg": {
      Licence: [
        "Commerce international",
        "Économie et gestion",
        "Marketing",
        "Technologies numériques pour les affaires"
      ],
      Master: [
        "Stratégies avancées en commerce",
        "Applications numériques en économie",
        "Marketing international"
      ],
      Doctorat: [
        "Recherche en commerce et économie",
        "Études avancées en marketing"
      ]
    },
    "L'université d'État de l'économie et les finances de Saint-Pétersbourg": {
      Licence: [
        "Finance et banque",
        "Économie publique",
        "Gestion stratégique",
        "Informatique appliquée aux finances"
      ],
      Master: [
        "Finance internationale",
        "Économie numérique",
        "Stratégies bancaires avancées"
      ],
      Doctorat: [
        "Recherche en finance publique",
        "Études avancées en économie appliquée"
      ]
    },
    "L'université d'État économique de Saint-Pétersbourg": {
      Licence: [
        "Économie",
        "Finance et gestion",
        "Tourisme et services",
        "Marketing"
      ],
      Master: [
        "Stratégies économiques avancées",
        "Applications marketing numériques",
        "Gestion internationale"
      ],
      Doctorat: [
        "Recherche en économie et finance",
        "Études en gestion avancée"
      ]
    },
    "L'université d'État socio-économique de Saratov": {
      Licence: [
        "Économie et sociologie",
        "Finance et banque",
        "Informatique appliquée",
        "Gestion"
      ],
      Master: [
        "Économie appliquée",
        "Gestion stratégique",
        "Technologies numériques pour les finances"
      ],
      Doctorat: [
        "Recherche en finance et gestion",
        "Études avancées en sociologie économique"
      ]
    },
    "L'institut des relations internationales et les études régionales sibérienne": {
      Licence: [
        "Relations internationales",
        "Langues étrangères",
        "Gestion des affaires internationales",
        "Sciences politiques"
      ],
      Master: [
        "Stratégies internationales avancées",
        "Applications linguistiques pour les relations internationales",
        "Études régionales approfondies"
      ],
      Doctorat: [
        "Recherche en relations internationales",
        "Études avancées en politiques régionales"
      ]
    },
    "L'université d'État économique du Pacifique": {
      Licence: [
        "Économie maritime",
        "Commerce international",
        "Gestion des ressources maritimes",
        "Informatique pour l'économie"
      ],
      Master: [
        "Stratégies commerciales maritimes",
        "Gestion durable des ressources marines",
        "Applications numériques pour l'économie"
      ],
      Doctorat: [
        "Recherche en économie maritime",
        "Études avancées en gestion des ressources"
      ]
    },
    "L'université de la gestion 'Tisbi'": {
      Licence: [
        "Gestion",
        "Économie",
        "Marketing",
        "Informatique appliquée"
      ],
      Master: [
        "Gestion stratégique",
        "Technologies numériques pour l'économie",
        "Marketing avancé"
      ],
      Doctorat: [
        "Recherche en gestion stratégique",
        "Études avancées en marketing et économie"
      ]
    },
  
////////////////////////:


    "L'université d'État économique d'Oural": {
      Licence: [
        "Économie et finances",
        "Gestion des entreprises",
        "Technologies alimentaires",
        "Tourisme et services"
      ],
      Master: [
        "Planification stratégique et analyse financière",
        "Gestion numérique et sécurité de l'information",
        "Économie régionale et municipale"
      ],
      Doctorat: [
        "Recherche en économie et finances",
        "Études avancées en gestion stratégique"
      ]
    },
    "L'académie d'État d'économie et les services d'Oufa": {
      Licence: [
        "Économie et gestion des services",
        "Tourisme et hôtellerie",
        "Marketing",
        "Technologies numériques"
      ],
      Master: [
        "Stratégies marketing avancées",
        "Gestion des systèmes de service",
        "Applications numériques en tourisme"
      ],
      Doctorat: [
        "Recherche en hôtellerie et tourisme",
        "Études avancées en marketing"
      ]
    },
    "L'université financière près du président de la Fédération de Russie": {
      Licence: [
        "Finance et banque",
        "Économie publique",
        "Gestion stratégique",
        "Informatique appliquée aux finances"
      ],
      Master: [
        "Finance internationale",
        "Économie numérique",
        "Stratégies bancaires avancées"
      ],
      Doctorat: [
        "Recherche en finance publique",
        "Études avancées en économie appliquée"
      ]
    },
    "L'académie d'État de l'économie et le droit de Khabarovsk": {
      Licence: [
        "Droit économique",
        "Gestion des entreprises",
        "Informatique appliquée",
        "Technologies alimentaires"
      ],
      Master: [
        "Gestion stratégique et juridique",
        "Applications numériques en droit économique",
        "Technologies avancées pour les entreprises"
      ],
      Doctorat: [
        "Recherche en droit économique",
        "Études avancées en gestion stratégique"
      ]
    },
   //////////////////////////////////

    "L'université d'État d'architecture et de la construction de Volgograd": {
      Licence: [
        "Architecture et urbanisme",
        "Génie civil",
        "Design intérieur",
        "Gestion de la construction"
      ],
      Master: [
        "Urbanisme durable",
        "Technologies innovantes en construction",
        "Design architectural avancé"
      ],
      Doctorat: [
        "Recherche en urbanisme",
        "Études avancées en génie civil"
      ]
    },
    "L'université d'État d'architecture et de la construction de Voronej": {
      Licence: [
        "Architecture",
        "Ingénierie civile",
        "Design architectural",
        "Gestion de projet"
      ],
      Master: [
        "Architectures innovantes",
        "Planification urbaine",
        "Technologies numériques dans la construction"
      ],
      Doctorat: [
        "Recherche en architecture durable",
        "Études avancées en génie civil"
      ]
    },
    "L'académie d'État d'architecture et de la construction d'Ivanovo": {
      Licence: [
        "Urbanisme et aménagement",
        "Architecture écologique",
        "Technologie de la construction",
        "Design d'intérieur"
      ],
      Master: [
        "Planification urbaine avancée",
        "Technologies écologiques en construction",
        "Design architectural contemporain"
      ],
      Doctorat: [
        "Recherche en urbanisme et écologie",
        "Études avancées en architecture"
      ]
    },
    "L'université d'État d'architecture et de la construction de Kazan": {
      Licence: [
        "Architecture et design",
        "Génie civil et construction",
        "Aménagement du territoire",
        "Gestion de la construction"
      ],
      Master: [
        "Technologies numériques en construction",
        "Planification urbaine durable",
        "Design architectural avancé"
      ],
      Doctorat: [
        "Recherche en technologies de la construction",
        "Études avancées en urbanisme"
      ]
    },
    "L'institut d'architecture de Moscou (l'Académie d'État)": {
      Licence: [
        "Architecture",
        "Urbanisme et environnement",
        "Design urbain",
        "Technologies de la construction"
      ],
      Master: [
        "Architectures modernes et durables",
        "Planification urbaine avancée",
        "Technologies numériques pour l'architecture"
      ],
      Doctorat: [
        "Recherche en urbanisme",
        "Études en design architectural"
      ]
    },
    "L'université d'État de la construction de Moscou": {
      Licence: [
        "Ingénierie civile",
        "Architecture écologique",
        "Gestion de la construction",
        "Technologies de l'information en construction"
      ],
      Master: [
        "Gestion stratégique de projet",
        "Technologies modernes de construction",
        "Énergies renouvelables et bâtiment durable"
      ],
      Doctorat: [
        "Recherche en génie civil",
        "Études avancées en technologies de construction"
      ]
    },
    "L'institut du lien et la construction de Moscou": {
      Licence: [
        "Architecture et design",
        "Construction et génie civil",
        "Gestion de la construction",
        "Technologies innovantes"
      ],
      Master: [
        "Planification urbaine avancée",
        "Technologies numériques en construction",
        "Design architectural innovant"
      ],
      Doctorat: [
        "Recherche en urbanisme et technologies de la construction",
        "Études avancées en design urbain"
      ]
    },
    "L'université d'État de l'architecture et la construction de Penza": {
      Licence: [
        "Génie civil",
        "Architecture écologique",
        "Design intérieur",
        "Gestion urbaine"
      ],
      Master: [
        "Planification durable",
        "Technologies de construction avancées",
        "Architectures modernes"
      ],
      Doctorat: [
        "Recherche en technologies vertes",
        "Études avancées en architecture"
      ]
    },
    "L'académie d'État d'architecture et de la construction de Rostov": {
      Licence: [
        "Architecture et design urbain",
        "Ingénierie civile",
        "Gestion de projet",
        "Technologies de l'information appliquées"
      ],
      Master: [
        "Design urbain et durabilité",
        "Gestion stratégique de la construction",
        "Technologies numériques dans l'architecture"
      ],
      Doctorat: [
        "Recherche en architecture moderne",
        "Études avancées en urbanisme"
      ]
    },
    "L'université d'État de construction de Rostov": {
      Licence: [
        "Génie civil",
        "Technologie de la construction",
        "Design architectural",
        "Gestion de la construction"
      ],
      Master: [
        "Technologies avancées en construction",
        "Urbanisme et aménagement durable",
        "Architectures modernes"
      ],
      Doctorat: [
        "Recherche en génie civil",
        "Études avancées en urbanisme durable"
      ]
    },
    
/////////////////////////////////

    "L'université d'État d'architecture et de la construction de Samara": {
      Licence: [
        "Architecture et design urbain",
        "Génie civil",
        "Technologies de construction",
        "Gestion de la construction"
      ],
      Master: [
        "Urbanisme durable",
        "Technologies numériques en construction",
        "Design architectural avancé"
      ],
      Doctorat: [
        "Recherche en génie civil",
        "Études avancées en urbanisme"
      ]
    },
    "L'université d'État d'architecture et de la construction de Saint-Pétersbourg": {
      Licence: [
        "Architecture",
        "Urbanisme",
        "Génie civil",
        "Gestion des matériaux de construction"
      ],
      Master: [
        "Planification urbaine avancée",
        "Technologies innovantes en construction",
        "Design architectural durable"
      ],
      Doctorat: [
        "Recherche en urbanisme",
        "Études avancées en génie civil"
      ]
    },
    "L'université d'État d'architecture et de la construction de Tomsk": {
      Licence: [
        "Architecture et design",
        "Génie civil",
        "Technologies de construction",
        "Aménagement du territoire"
      ],
      Master: [
        "Technologies numériques pour l'architecture",
        "Planification urbaine durable",
        "Design architectural avancé"
      ],
      Doctorat: [
        "Recherche en technologies de construction",
        "Études avancées en urbanisme"
      ]
    },
    "L'université d'État d'architecture et de la construction de Tioumen": {
      Licence: [
        "Architecture et design urbain",
        "Génie civil",
        "Technologies de construction",
        "Gestion de projet"
      ],
      Master: [
        "Urbanisme durable",
        "Technologies numériques en construction",
        "Design architectural contemporain"
      ],
      Doctorat: [
        "Recherche en génie civil",
        "Études avancées en urbanisme"
      ]
    },
    "L'académie d'État architecturale et artistique d'Oural": {
      Licence: [
        "Architecture",
        "Design graphique",
        "Urbanisme",
        "Arts visuels"
      ],
      Master: [
        "Design architectural avancé",
        "Planification urbaine durable",
        "Technologies numériques pour l'art et l'architecture"
      ],
      Doctorat: [
        "Recherche en design et architecture",
        "Études avancées en urbanisme"
      ]
    },


    //////////////////

        "L'Université d'État technique d'Altaï, 'la Faculté de la chimie'": {
          Licence: [
            "Technologie chimique",
            "Chimie industrielle",
            "Matériaux et polymères",
            "Informatique appliquée à la chimie"
          ],
          Master: [
            "Technologies avancées en chimie industrielle",
            "Polymères et matériaux composites",
            "Applications numériques pour la chimie"
          ],
          Doctorat: [
            "Recherche en chimie industrielle",
            "Études avancées en matériaux"
          ]
        },
        "L'université d'État d'Altaï, 'la faculté chimique et technologique'": {
          Licence: [
            "Chimie organique et inorganique",
            "Technologies alimentaires et chimiques",
            "Biotechnologie",
            "Gestion des procédés chimiques"
          ],
          Master: [
            "Applications chimiques en biotechnologie",
            "Technologies alimentaires avancées",
            "Chimie analytique"
          ],
          Doctorat: [
            "Recherche en biotechnologie chimique",
            "Études avancées en chimie analytique"
          ]
        },
        "L'université d'État de la Bachkirie": {
          Licence: [
            "Chimie organique",
            "Technologie environnementale",
            "Biotechnologie",
            "Matériaux chimiques"
          ],
          Master: [
            "Applications avancées en biotechnologie chimique",
            "Technologies de l'environnement durable",
            "Études des matériaux chimiques"
          ],
          Doctorat: [
            "Recherche en biotechnologie",
            "Études avancées en chimie environnementale"
          ]
        },
        "L'université d'État technique de Volgograd, 'la faculté chimique et technologique'": {
          Licence: [
            "Technologie chimique",
            "Chimie industrielle",
            "Matériaux avancés",
            "Biotechnologie"
          ],
          Master: [
            "Technologies avancées en génie chimique",
            "Biotechnologies et environnement",
            "Applications numériques pour l'industrie chimique"
          ],
          Doctorat: [
            "Recherche en génie chimique",
            "Études avancées en biotechnologie"
          ]
        },
        "Le collège supérieur chimique de l'Académie des Sciences de la Russie": {
          Licence: [
            "Chimie organique et inorganique",
            "Matériaux chimiques avancés",
            "Chimie analytique",
            "Biotechnologie"
          ],
          Master: [
            "Études avancées en chimie analytique",
            "Matériaux et polymères innovants",
            "Biotechnologie appliquée"
          ],
          Doctorat: [
            "Recherche en matériaux chimiques",
            "Études approfondies en chimie organique"
          ]
        },
        "L'université d'État des métaux non-ferreux et l'or": {
          Licence: [
            "Chimie des métaux",
            "Technologies de traitement des métaux non-ferreux",
            "Matériaux métalliques innovants",
            "Environnement et durabilité chimique"
          ],
          Master: [
            "Études avancées des métaux non-ferreux",
            "Technologies environnementales appliquées",
            "Innovation en métallurgie chimique"
          ],
          Doctorat: [
            "Recherche en chimie métallurgique",
            "Études avancées en environnement chimique"
          ]
        },
        "L'université d'Extrême Orient fédérale, 'la Faculté de la chimie'": {
          Licence: [
            "Technologie chimique",
            "Biotechnologie",
            "Matériaux avancés",
            "Chimie environnementale"
          ],
          Master: [
            "Biotechnologie durable",
            "Matériaux innovants pour l'industrie chimique",
            "Chimie analytique avancée"
          ],
          Doctorat: [
            "Recherche en chimie environnementale",
            "Études en biotechnologie avancée"
          ]
        },
        "L'université d'État chimique et technologique d'Ivanovo": {
          Licence: [
            "Technologie chimique",
            "Biotechnologie",
            "Chimie industrielle",
            "Matériaux et polymères"
          ],
          Master: [
            "Technologies avancées en biotechnologie chimique",
            "Matériaux chimiques innovants",
            "Applications industrielles en chimie"
          ],
          Doctorat: [
            "Recherche en chimie industrielle",
            "Études avancées en biotechnologie"
          ]
        },
        "L'université d'État de Kazan, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie organique",
            "Technologies environnementales",
            "Matériaux chimiques",
            "Chimie analytique"
          ],
          Master: [
            "Biotechnologie appliquée à la chimie",
            "Technologies durables en chimie",
            "Matériaux innovants et polymères"
          ],
          Doctorat: [
            "Recherche en chimie analytique",
            "Études avancées en chimie organique"
          ]
        },
        "L'université d'État mécanique de Moscou, l'Institut de la technologie écologique et chimique": {
          Licence: [
            "Technologies écologiques",
            "Chimie industrielle durable",
            "Biotechnologie et environnement",
            "Matériaux chimiques"
          ],
          Master: [
            "Technologies avancées en chimie durable",
            "Applications industrielles en environnement",
            "Matériaux innovants pour la chimie"
          ],
          Doctorat: [
            "Recherche en technologies écologiques",
            "Études avancées en biotechnologie chimique"
          ]
        },
        "L'université d'État technique de l'aviation civile de Moscou, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie appliquée à l'aviation",
            "Matériaux chimiques pour l'aéronautique",
            "Technologies environnementales",
            "Gestion chimique durable"
          ],
          Master: [
            "Études avancées en matériaux aéronautiques",
            "Technologies chimiques appliquées à l'environnement",
            "Innovations chimiques pour l'aviation civile"
          ],
          Doctorat: [
            "Recherche en matériaux chimiques aéronautiques",
            "Études avancées en chimie environnementale"
          ]
        },
        "L'université d'État technique de Moscou N.E. Baouman, 'la Faculté de la chimie'": {
          Licence: [
            "Technologie chimique",
            "Chimie industrielle",
            "Matériaux innovants",
            "Biotechnologie chimique"
          ],
          Master: [
            "Technologies chimiques avancées",
            "Matériaux innovants pour l'industrie",
            "Biotechnologie durable"
          ],
          Doctorat: [
            "Recherche en chimie industrielle",
            "Études en biotechnologie avancée"
          ]
        },
        "L'université d'État technologique de Moscou 'Stankin', 'la Faculté de la chimie'": {
          Licence: [
            "Technologies chimiques",
            "Matériaux innovants",
            "Biotechnologie",
            "Environnement chimique"
          ],
          Master: [
            "Biotechnologie et durabilité",
            "Matériaux innovants pour l'industrie chimique",
            "Technologies chimiques avancées"
          ],
          Doctorat: [
            "Recherche en technologies chimiques",
            "Études avancées en biotechnologie"
          ]
        },
        "L'université d'État de Moscou M.V.Lomonosov, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie organique et inorganique",
            "Matériaux chimiques",
            "Chimie analytique",
            "Biotechnologie"
          ],
          Master: [
            "Études avancées en chimie analytique",
            "Matériaux innovants et polymères",
            "Biotechnologie appliquée"
          ],
          Doctorat: [
            "Recherche en chimie organique",
            "Études approfondies en matériaux chimiques"
          ]
        },
        "L'université de Moscou d'État des technologies fines chimiques M.V.Lomonosova": {
          Licence: [
            "Chimie fine et analytique",
            "Matériaux chimiques avancés",
            "Technologies innovantes en chimie",
            "Biotechnologie"
          ],
          Master: [
            "Technologies chimiques fines",
            "Biotechnologie avancée",
            "Applications chimiques dans l'industrie"
          ],
          Doctorat: [
            "Recherche en chimie analytique",
            "Études avancées en biotechnologie chimique"
          ]
        },
        "L'institut physique d'ingénieur de Moscou": {
          Licence: [
            "Physique appliquée à la chimie",
            "Matériaux avancés",
            "Technologies écologiques",
            "Biotechnologie"
          ],
          Master: [
            "Applications chimiques en physique",
            "Matériaux innovants pour l'industrie",
            "Technologies écologiques durables"
          ],
          Doctorat: [
            "Recherche en physique chimique",
            "Études avancées en matériaux chimiques"
          ]
        },

////////////////////////
            "L'institut de l'acier et les alliages de Moscou": {
              Licence: [
                "Science des matériaux",
                "Métallurgie",
                "Technologie des alliages avancés",
                "Chimie industrielle appliquée"
              ],
              Master: [
                "Matériaux innovants et technologies métallurgiques",
                "Applications chimiques dans les alliages",
                "Technologies de transformation des métaux"
              ],
              Doctorat: [
                "Recherche en métallurgie et matériaux avancés",
                "Études approfondies en alliages spécialisés"
              ]
            },
            "L'institut physique et technique de Moscou": {
              Licence: [
                "Physique appliquée",
                "Technologies des matériaux",
                "Biophysique",
                "Technologie informatique et physique"
              ],
              Master: [
                "Physique quantique et des matériaux",
                "Applications technologiques avancées en physique",
                "Recherche en biophysique et environnement"
              ],
              Doctorat: [
                "Recherche en physique appliquée",
                "Études avancées en physique des matériaux",
                "Projets interdisciplinaires en biophysique"
              ]
            },
            "L'institut énergétique de Moscou": {
              Licence: [
                "Ingénierie énergétique",
                "Énergies renouvelables",
                "Systèmes de réseaux électriques",
                "Gestion énergétique"
              ],
              Master: [
                "Technologies de l'énergie durable",
                "Applications avancées en gestion des réseaux",
                "Innovation en chimie énergétique"
              ],
              Doctorat: [
                "Recherche en énergies renouvelables",
                "Études approfondies en systèmes énergétiques",
                "Projets innovants en gestion énergétique"
              ]
            },

////////////////////////////

    "L'université nationale scientifique technologique 'MISiS', 'la Faculté de la chimie'": {
      Licence: [
        "Technologie chimique",
        "Matériaux avancés et nanotechnologies",
        "Chimie analytique",
        "Biotechnologie"
      ],
      Master: [
        "Technologies innovantes en chimie industrielle",
        "Applications des nanomatériaux",
        "Biotechnologie durable"
      ],
      Doctorat: [
        "Recherche en chimie des matériaux",
        "Études avancées en biotechnologie"
      ]
    },
    "L'université nationale scientifique 'MEI', 'la Faculté de la chimie'": {
      Licence: [
        "Chimie énergétique",
        "Technologies environnementales",
        "Matériaux chimiques avancés",
        "Biotechnologie"
      ],
      Master: [
        "Applications chimiques pour l'énergie durable",
        "Technologies avancées en chimie environnementale",
        "Matériaux innovants pour l'industrie"
      ],
      Doctorat: [
        "Recherche en chimie énergétique",
        "Études avancées en biotechnologie"
      ]
    },
    "L'université d'État de Nizhniy Novrogod, 'la Faculté de la chimie'": {
      Licence: [
        "Chimie organique et inorganique",
        "Technologie chimique",
        "Biotechnologie",
        "Matériaux chimiques"
      ],
      Master: [
        "Technologies avancées en chimie analytique",
        "Applications industrielles en biotechnologie",
        "Matériaux innovants"
      ],
      Doctorat: [
        "Recherche en chimie organique",
        "Études avancées en biotechnologie"
      ]
    },
    "L'institut chimique et technologique de Nizhnekamsk": {
      Licence: [
        "Technologie des polymères",
        "Chimie industrielle",
        "Biotechnologie",
        "Matériaux avancés"
      ],
      Master: [
        "Applications chimiques en biotechnologie",
        "Technologies des polymères avancés",
        "Chimie analytique"
      ],
      Doctorat: [
        "Recherche en chimie des polymères",
        "Études avancées en biotechnologie"
      ]
    },
    "L'institut chimique et technologique de Novomoskovsk": {
      Licence: [
        "Technologie chimique",
        "Matériaux avancés",
        "Biotechnologie",
        "Chimie analytique"
      ],
      Master: [
        "Technologies innovantes en chimie industrielle",
        "Applications des matériaux avancés",
        "Biotechnologie durable"
      ],
      Doctorat: [
        "Recherche en chimie industrielle",
        "Études avancées en biotechnologie"
      ]
    },
    "L'université d'État de Novosibirsk, 'la Faculté de la chimie'": {
      Licence: [
        "Chimie organique et inorganique",
        "Technologie chimique",
        "Biotechnologie",
        "Matériaux chimiques"
      ],
      Master: [
        "Technologies avancées en chimie analytique",
        "Applications industrielles en biotechnologie",
        "Matériaux innovants"
      ],
      Doctorat: [
        "Recherche en chimie organique",
        "Études avancées en biotechnologie"
      ]
    },
    "L'université d'État d'Omsk F.M.Dostoevskiy": {
      Licence: [
        "Chimie organique",
        "Technologie environnementale",
        "Biotechnologie",
        "Matériaux chimiques"
      ],
      Master: [
        "Applications avancées en biotechnologie chimique",
        "Technologies de l'environnement durable",
        "Études des matériaux chimiques"
      ],
      Doctorat: [
        "Recherche en biotechnologie",
        "Études avancées en chimie environnementale"
      ]
    },

    //////////////////
        "L'université d'État de Perm, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie organique et inorganique",
            "Technologies chimiques",
            "Biotechnologie",
            "Matériaux chimiques"
          ],
          Master: [
            "Technologies avancées en chimie analytique",
            "Applications industrielles en biotechnologie",
            "Études des polymères"
          ],
          Doctorat: [
            "Recherche en chimie des matériaux",
            "Études avancées en chimie organique"
          ]
        },
        "L'université russe d'État agraire K.A.Timiryazev, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie pour l'agriculture",
            "Technologies environnementales",
            "Biotechnologie appliquée",
            "Gestion des processus chimiques agricoles"
          ],
          Master: [
            "Chimie durable pour l'agriculture",
            "Biotechnologie agricole avancée",
            "Applications chimiques pour la durabilité environnementale"
          ],
          Doctorat: [
            "Recherche en chimie agricole",
            "Études avancées en biotechnologie appliquée"
          ]
        },
        "L'université russe d'État du pétrole et le gaz I.M.Goubkin, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie organique pour l'énergie",
            "Technologie des procédés chimiques",
            "Matériaux chimiques pour l'industrie pétrolière",
            "Gestion de la durabilité environnementale"
          ],
          Master: [
            "Technologies avancées pour les industries pétrochimiques",
            "Chimie environnementale dans le pétrole et le gaz",
            "Matériaux innovants pour l'énergie"
          ],
          Doctorat: [
            "Recherche en chimie pétrochimique",
            "Études avancées en durabilité énergétique"
          ]
        },
        "L'université russe chimique et technologique D.I.Mendeleev": {
          Licence: [
            "Chimie analytique",
            "Technologies des matériaux avancés",
            "Chimie fine et industrielle",
            "Biotechnologie"
          ],
          Master: [
            "Applications avancées en chimie industrielle",
            "Biotechnologie pour l'industrie chimique",
            "Matériaux innovants pour les technologies chimiques"
          ],
          Doctorat: [
            "Recherche en chimie analytique",
            "Études avancées en chimie fine"
          ]
        },
        "L'université d'État de Rostov, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie organique",
            "Technologies chimiques",
            "Matériaux polymères",
            "Biotechnologie"
          ],
          Master: [
            "Études avancées en chimie analytique",
            "Applications chimiques industrielles",
            "Chimie des polymères innovants"
          ],
          Doctorat: [
            "Recherche en chimie organique",
            "Études avancées en matériaux polymères"
          ]
        },
        "L'académie chimique et pharmaceutique de Saint-Pétersbourg": {
          Licence: [
            "Pharmacologie et chimie",
            "Chimie analytique",
            "Biotechnologie pharmaceutique",
            "Technologies chimiques appliquées à la médecine"
          ],
          Master: [
            "Chimie pharmaceutique avancée",
            "Biotechnologie médicale",
            "Technologies innovantes pour la pharmacie"
          ],
          Doctorat: [
            "Recherche en pharmacologie",
            "Études avancées en biotechnologie médicale"
          ]
        },
        "L'université d'État polytechnique de Saint-Pétersbourg, 'la Faculté de la chimie'": {
          Licence: [
            "Chimie et génie chimique",
            "Matériaux avancés",
            "Chimie industrielle",
            "Biotechnologie"
          ],
          Master: [
            "Technologies avancées en génie chimique",
            "Matériaux innovants pour l'industrie",
            "Biotechnologie et applications industrielles"
          ],
          Doctorat: [
            "Recherche en génie chimique",
            "Études avancées en matériaux chimiques"
          ]
        },
        "L'institut d'État technique de Saint-Pétersbourg (l'Université technique)": {
          Licence: [
            "Technologie chimique et environnementale",
            "Chimie industrielle avancée",
            "Biotechnologie",
            "Matériaux chimiques"
          ],
          Master: [
            "Applications environnementales en chimie industrielle",
            "Technologies avancées pour les matériaux chimiques",
            "Biotechnologie durable"
          ],
          Doctorat: [
            "Recherche en chimie industrielle",
            "Études avancées en biotechnologie environnementale"
          ]
        },

        //////////////////

            "L'université d'État technologique des polymères végétaux de Saint-Pétersbourg": {
              Licence: [
                "Technologie des polymères végétaux",
                "Chimie appliquée des matériaux naturels",
                "Biotechnologie et biopolymères",
                "Gestion de la production de polymères"
              ],
              Master: [
                "Recherche avancée en polymères végétaux",
                "Développement de matériaux biosourcés",
                "Innovation en chimie des polymères"
              ],
              Doctorat: [
                "Recherche en biopolymères et technologies vertes",
                "Développement de nouveaux matériaux durables"
              ]
            },
            "L'université d'État de Saint-Pétersbourg 'la Faculté de la chimie'": {
              Licence: [
                "Chimie organique et inorganique",
                "Chimie analytique",
                "Technologie chimique",
                "Biotechnologie"
              ],
              Master: [
                "Applications avancées en chimie analytique",
                "Technologies chimiques innovantes",
                "Biotechnologie durable"
              ],
              Doctorat: [
                "Recherche en chimie organique",
                "Études avancées en biotechnologie"
              ]
            },
            "L'université d'État de Tomsk, 'la Faculté de la chimie'": {
              Licence: [
                "Chimie organique",
                "Technologie chimique",
                "Biotechnologie",
                "Matériaux chimiques"
              ],
              Master: [
                "Technologies avancées en chimie analytique",
                "Applications industrielles en biotechnologie",
                "Matériaux innovants"
              ],
              Doctorat: [
                "Recherche en chimie organique",
                "Études avancées en biotechnologie"
              ]
            },
            "L'université d'État de Tioumen, l'Institut chimique": {
              Licence: [
                "Chimie environnementale",
                "Technologie chimique",
                "Biotechnologie",
                "Matériaux avancés"
              ],
              Master: [
                "Applications chimiques pour l'environnement",
                "Technologies avancées en biotechnologie",
                "Matériaux innovants pour l'industrie"
              ],
              Doctorat: [
                "Recherche en chimie environnementale",
                "Études avancées en biotechnologie"
              ]
            },
            "L'université d'État pétrolière technique d'Oufa": {
              Licence: [
                "Chimie pétrolière",
                "Technologie des procédés chimiques",
                "Matériaux chimiques pour l'industrie pétrolière",
                "Gestion environnementale"
              ],
              Master: [
                "Technologies avancées pour les industries pétrochimiques",
                "Chimie environnementale dans le pétrole et le gaz",
                "Matériaux innovants pour l'énergie"
              ],
              Doctorat: [
                "Recherche en chimie pétrochimique",
                "Études avancées en durabilité énergétique"
              ]
            },
            "L'université du sud fédérale, 'la Faculté de la chimie'": {
              Licence: [
                "Chimie organique et inorganique",
                "Technologie chimique",
                "Biotechnologie",
                "Matériaux chimiques"
              ],
              Master: [
                "Technologies avancées en chimie analytique",
                "Applications industrielles en biotechnologie",
                "Matériaux innovants"
              ],
              Doctorat: [
                "Recherche en chimie organique",
                "Études avancées en biotechnologie"
              ]
            },

////////////////////////

    "L'université d'État de la Bachkirie, 'la Faculté de la géologie et la géomorphologie'": {
      Licence: [
        "Géologie appliquée",
        "Géomorphologie et cartographie",
        "Sciences de l'environnement",
        "Gestion des ressources naturelles"
      ],
      Master: [
        "Applications avancées en géomorphologie",
        "Technologies de gestion durable des ressources",
        "Géologie structurale et exploratoire"
      ],
      Doctorat: [
        "Recherche en géomorphologie",
        "Études avancées en géologie appliquée"
      ]
    },
    "L'université d'État technologique de Belgorod, 'la Faculté minière'": {
      Licence: [
        "Technologie minière",
        "Environnement et extraction minière",
        "Sciences des matériaux miniers",
        "Gestion des industries minières"
      ],
      Master: [
        "Technologies avancées en exploitation minière",
        "Durabilité environnementale et extraction",
        "Applications industrielles des matériaux"
      ],
      Doctorat: [
        "Recherche en technologies minières",
        "Études avancées en gestion industrielle"
      ]
    },
    "L'université d'État de Belgorod, 'la faculté minière'": {
      Licence: [
        "Ingénierie minière",
        "Économie des industries extractives",
        "Géologie appliquée",
        "Gestion des ressources minières"
      ],
      Master: [
        "Technologies minières et durabilité",
        "Applications économiques dans l'industrie",
        "Technologies de la prospection géologique"
      ],
      Doctorat: [
        "Recherche en industries minières",
        "Études avancées en géologie appliquée"
      ]
    },
    "L'Institut des Mines de Vorkuta": {
      Licence: [
        "Exploitation minière en conditions arctiques",
        "Technologies minières innovantes",
        "Gestion environnementale",
        "Matériaux et infrastructures minières"
      ],
      Master: [
        "Applications en technologies minières arctiques",
        "Durabilité environnementale dans les mines",
        "Recherche et innovation en matériaux"
      ],
      Doctorat: [
        "Recherche en exploitation minière arctique",
        "Études avancées en technologies d'infrastructures"
      ]
    },
    "L'université d'État de Voronej, 'la Faculté de la géologie'": {
      Licence: [
        "Géologie exploratoire",
        "Géophysique appliquée",
        "Cartographie géologique",
        "Gestion des ressources naturelles"
      ],
      Master: [
        "Technologies avancées en géophysique",
        "Applications géologiques pour l'industrie",
        "Durabilité dans l'exploration géologique"
      ],
      Doctorat: [
        "Recherche en géophysique appliquée",
        "Études avancées en exploration géologique"
      ]
    },
    "L'université d'Extrême Orient fédérale, 'la Faculté de la géologie, la géophysique et la géoécologie'": {
      Licence: [
        "Géologie marine et terrestre",
        "Géoécologie",
        "Cartographie et systèmes géographiques",
        "Gestion des ressources géologiques"
      ],
      Master: [
        "Applications avancées en géophysique",
        "Technologies en gestion des écosystèmes",
        "Recherche géologique durable"
      ],
      Doctorat: [
        "Recherche en géoécologie",
        "Études approfondies en géophysique appliquée"
      ]
    },
    "L'université d'État de la Transbaïkalie 'la Faculté de l'industrie minière'": {
      Licence: [
        "Extraction minière",
        "Technologie des ressources minérales",
        "Environnement et industries minières",
        "Gestion des ressources naturelles"
      ],
      Master: [
        "Technologies avancées en exploitation minière",
        "Durabilité environnementale dans les mines",
        "Économie des industries extractives"
      ],
      Doctorat: [
        "Recherche en extraction minière",
        "Études avancées en économie minière"
      ]
    },
    "L'université d'État technique d'Irkoutsk, l'Institut de la gestion et le traitement des ressources minérales": {
      Licence: [
        "Traitement des ressources minérales",
        "Technologies d'extraction avancées",
        "Économie des matériaux miniers",
        "Gestion environnementale"
      ],
      Master: [
        "Technologies innovantes en traitement minier",
        "Durabilité dans la gestion des ressources",
        "Applications industrielles en traitement des matériaux"
      ],
      Doctorat: [
        "Recherche en traitement minéral",
        "Études avancées en gestion environnementale"
      ]
    },
    "L'université d'État d'Irkoutsk, 'la Faculté de la géologie'": {
      Licence: [
        "Exploration géologique",
        "Cartographie géologique",
        "Géophysique appliquée",
        "Gestion des ressources naturelles"
      ],
      Master: [
        "Technologies géologiques avancées",
        "Applications en géophysique environnementale",
        "Recherche durable en géologie"
      ],
      Doctorat: [
        "Recherche en géophysique",
        "Études approfondies en exploration"
      ]
    },
    "L'université de Kazan fédérale, l'Institut de la géologie": {
      Licence: [
        "Sciences de la Terre",
        "Géophysique",
        "Cartographie et SIG (Systèmes d'information géographique)",
        "Gestion des ressources naturelles"
      ],
      Master: [
        "Géologie pétrolière avancée",
        "Technologies géophysiques",
        "Recherche en ressources naturelles"
      ],
      Doctorat: [
        "Recherche en géologie pétrolière",
        "Études avancées en cartographie SIG"
      ]
    },
    "L'université d'État de Kuban, 'la Faculté géologique'": {
      Licence: [
        "Géologie et sciences environnementales",
        "Cartographie et systèmes géographiques",
        "Exploration des ressources minérales",
        "Géophysique appliquée"
      ],
      Master: [
        "Gestion environnementale avancée",
        "Technologies géophysiques",
        "Recherche en ressources minérales"
      ],
      Doctorat: [
        "Recherche en géophysique appliquée",
        "Études avancées en exploration géologique"
      ]
    },
    "L'université d'État technique de Kouzbass, l'Institut des Mines": {
      Licence: [
        "Ingénierie minière",
        "Technologies d'extraction",
        "Environnement et industries minières",
        "Géologie appliquée"
      ],
      Master: [
        "Technologies minières avancées",
        "Applications industrielles durables",
        "Recherche en extraction minière"
      ],
      Doctorat: [
        "Recherche en ingénierie minière",
        "Études avancées en gestion environnementale"
      ]
    },
    "L'université d'État technique de Lipetsk, l'Institut de la métallurgie": {
      Licence: [
        "Métallurgie",
        "Science des matériaux",
        "Technologies environnementales",
        "Gestion des procédés industriels"
      ],
      Master: [
        "Applications avancées en métallurgie",
        "Recherche en matériaux innovants",
        "Technologies durables pour l'industrie"
      ],
      Doctorat: [
        "Recherche en métallurgie",
        "Études avancées en environnement industriel"
      ]
    },
    "L'université d'État technique de Magnitogorsk, l'Institut de l'industrie minière": {
      Licence: [
        "Ingénierie minière",
        "Science des matériaux",
        "Économie industrielle",
        "Gestion des procédés miniers"
      ],
      Master: [
        "Technologies avancées pour l'industrie minière",
        "Recherche en science des matériaux",
        "Durabilité dans l'extraction"
      ],
      Doctorat: [
        "Recherche en extraction industrielle",
        "Études avancées en ingénierie minière"
      ]
    },
    "L'université d'État minière de Moscou": {
      Licence: [
        "Sciences minières",
        "Technologies d'extraction avancées",
        "Environnement et durabilité",
        "Économie industrielle"
      ],
      Master: [
        "Applications industrielles en extraction",
        "Gestion stratégique des industries minières",
        "Technologies vertes pour l'industrie minière"
      ],
      Doctorat: [
        "Recherche en durabilité minière",
        "Études avancées en sciences minières"
      ]
    },
///////////////////////


    "L'université d'État mécanique de Moscou, 'la Faculté de l'industrie minière'": {
      Licence: [
        "Ingénierie minière",
        "Sciences des matériaux",
        "Gestion des industries extractives",
        "Technologies environnementales"
      ],
      Master: [
        "Applications industrielles avancées",
        "Recherche en matériaux innovants",
        "Gestion durable des procédés miniers"
      ],
      Doctorat: [
        "Études avancées en technologies minières",
        "Recherche en durabilité industrielle"
      ]
    },
    "L'université d'État de Moscou M.V.Lomonosov, 'la Faculté de la géologie'": {
      Licence: [
        "Exploration géologique",
        "Cartographie géologique",
        "Géophysique appliquée",
        "Sciences de l'environnement"
      ],
      Master: [
        "Applications avancées en géophysique",
        "Technologies environnementales durables",
        "Études des ressources naturelles"
      ],
      Doctorat: [
        "Recherche en géologie structurale",
        "Études avancées en géophysique"
      ]
    },
    "L'Université nationale minérale et les ressources matières premières 'L'Université minière'": {
      Licence: [
        "Sciences minières",
        "Technologies d'extraction",
        "Gestion des ressources minérales",
        "Environnement et durabilité"
      ],
      Master: [
        "Technologies avancées en exploitation minière",
        "Gestion des industries extractives",
        "Innovations en durabilité environnementale"
      ],
      Doctorat: [
        "Recherche en exploitation minière",
        "Études avancées en gestion durable"
      ]
    },
    "L'université d'État de Novosibirsk, 'la Faculté de la géologie et la géophysique'": {
      Licence: [
        "Géologie exploratoire",
        "Géophysique appliquée",
        "Cartographie SIG (Systèmes d'information géographique)",
        "Gestion des ressources naturelles"
      ],
      Master: [
        "Technologies géologiques avancées",
        "Applications en géophysique environnementale",
        "Recherche durable en géologie"
      ],
      Doctorat: [
        "Études avancées en géophysique",
        "Recherche en gestion des ressources naturelles"
      ]
    },
    "L'institut d'État industriel de Norilsk, 'la Faculté minière et technique'": {
      Licence: [
        "Technologies minières",
        "Extraction des ressources en conditions arctiques",
        "Gestion environnementale",
        "Matériaux et infrastructures minières"
      ],
      Master: [
        "Innovation en extraction arctique",
        "Applications industrielles dans les mines",
        "Durabilité et gestion des matériaux"
      ],
      Doctorat: [
        "Recherche en technologies minières arctiques",
        "Études avancées en gestion environnementale"
      ]
    },
    "L'université d'État d'Orenbourg, 'la Faculté de la géologie et les ressources minérales'": {
      Licence: [
        "Géologie appliquée",
        "Exploration des ressources minérales",
        "Gestion environnementale",
        "Cartographie SIG"
      ],
      Master: [
        "Applications avancées en géologie exploratoire",
        "Technologies durables dans l'extraction",
        "Recherche en gestion des ressources"
      ],
      Doctorat: [
        "Études avancées en ressources minérales",
        "Recherche en géologie environnementale"
      ]
    },
    "L'université d'État de Perm, 'la Faculté de la géologie'": {
      Licence: [
        "Géologie et géomorphologie",
        "Géophysique appliquée",
        "Gestion des ressources naturelles",
        "Technologies d'exploration"
      ],
      Master: [
        "Recherche géologique durable",
        "Applications avancées en géophysique",
        "Études des sciences de la Terre"
      ],
      Doctorat: [
        "Études avancées en géophysique appliquée",
        "Recherche en gestion des écosystèmes naturels"
      ]
    },
    "L'université d'État de Pétrozavodsk, 'la Faculté minière et géologique'": {
      Licence: [
        "Géologie marine et terrestre",
        "Gestion des ressources minières",
        "Cartographie géologique",
        "Géophysique environnementale"
      ],
      Master: [
        "Applications avancées en gestion minière",
        "Recherche en géologie durable",
        "Technologies innovantes en cartographie"
      ],
      Doctorat: [
        "Recherche en géophysique environnementale",
        "Études avancées en ressources naturelles"
      ]
    },
    "L'université russe d'État de prospection géologique": {
      Licence: [
        "Exploration des ressources naturelles",
        "Technologies de prospection",
        "Sciences de la Terre et géomorphologie",
        "Environnement et durabilité"
      ],
      Master: [
        "Applications géologiques avancées",
        "Recherche en prospection durable",
        "Technologies innovantes pour l'exploration"
      ],
      Doctorat: [
        "Recherche en technologies de prospection",
        "Études avancées en sciences géologiques"
      ]
    },
    "L'université russe d'État de la hydrométéorologie": {
      Licence: [
        "Hydrologie",
        "Météorologie appliquée",
        "Gestion des ressources en eau",
        "Environnement et durabilité"
      ],
      Master: [
        "Applications hydrologiques avancées",
        "Recherche en climatologie et durabilité",
        "Gestion des écosystèmes aquatiques"
      ],
      Doctorat: [
        "Recherche en hydrométéorologie",
        "Études avancées en gestion environnementale"
      ]
    },
    "L'Institut d'État des Mines de Saint-Pétersbourg G.V.Plehanov, (l'Université d'État)": {
      Licence: [
        "Technologies minières",
        "Exploitation des ressources naturelles",
        "Gestion environnementale",
        "Sciences des matériaux miniers"
      ],
      Master: [
        "Applications avancées en technologies minières",
        "Recherche en environnement et durabilité",
        "Matériaux innovants pour l'industrie"
      ],
      Doctorat: [
        "Recherche en exploitation minière",
        "Études avancées en gestion stratégique"
      ]
    },
    "L'université d'État de Saint-Pétersbourg, 'la Faculté géologique'": {
      Licence: [
        "Géologie structurale",
        "Cartographie géologique",
        "Géophysique appliquée",
        "Sciences de l'environnement"
      ],
      Master: [
        "Recherche avancée en géophysique",
        "Applications durables en gestion des ressources",
        "Études des sciences géologiques"
      ],
      Doctorat: [
        "Études avancées en cartographie géologique",
        "Recherche en géophysique et durabilité"
      ]
    },
    "L'université d'État de Saratov, 'la Faculté de la géologie'": {
      Licence: [
        "Géologie exploratoire",
        "Gestion des ressources naturelles",
        "Cartographie SIG",
        "Géophysique appliquée"
      ],
      Master: [
        "Applications avancées en exploration géologique",
        "Recherche en technologies géophysiques",
        "Durabilité environnementale"
      ],
      Doctorat: [
        "Recherche en exploration géologique",
        "Études avancées en gestion durable"
      ]
    },
    "L'université d'État de nord-est, 'la Faculté de la géologie et l'industrie minière'": {
      Licence: [
        "Technologies minières",
        "Gestion des ressources naturelles",
        "Géologie et environnement",
        "Matériaux et extraction"
      ],
      Master: [
        "Applications avancées en gestion minière",
        "Recherche en géologie et durabilité",
        "Technologies minières innovantes"
      ],
      Doctorat: [
        "Études avancées en exploitation minière",
        "Recherche en environnement industriel"
      ]
    },
    "L'université de nord-ouest fédérale M.K.Ammosov, l'Institut des Mines": {
      Licence: [
        "Exploitation minière en conditions extrêmes",
        "Géologie appliquée",
        "Gestion des ressources naturelles",
        "Technologies de l'extraction"
      ],
      Master: [
        "Applications industrielles avancées",
        "Technologies pour l'extraction durable",
        "Recherche en géologie arctique"
      ],
      Doctorat: [
        "Recherche en exploitation minière",
        "Études avancées en géologie environnementale"
      ]
    },

    /////////////////////////
    
        "L'institut d'État métallurgique du Nord du Caucase (l'Université d'État technique)": {
          Licence: [
            "Métallurgie et technologie des matériaux",
            "Géologie et exploitation minière",
            "Sciences de l'environnement industriel",
            "Gestion des processus métallurgiques"
          ],
          Master: [
            "Applications avancées en métallurgie",
            "Gestion durable des industries extractives",
            "Technologies innovantes des matériaux"
          ],
          Doctorat: [
            "Recherche en métallurgie industrielle",
            "Études avancées en géologie et ressources naturelles"
          ]
        },
        "L'université d'État des géosystèmes et les géotechnologies sibérienne": {
          Licence: [
            "Géodésie et cartographie",
            "Technologies géophysiques",
            "Systèmes d'information géographique (SIG)",
            "Gestion environnementale des ressources naturelles"
          ],
          Master: [
            "Applications SIG avancées",
            "Recherche en technologies géodésiques",
            "Gestion stratégique des écosystèmes"
          ],
          Doctorat: [
            "Études avancées en géosystèmes",
            "Recherche en géotechnologies"
          ]
        },
        "L'université d'État technique de Tver, 'la Faculté de la géologie appliquée, de la science des mines, d'industrie pétrolière et gazière, et de la géodésie'": {
          Licence: [
            "Géologie appliquée",
            "Exploitation des ressources pétrolières",
            "Cartographie et géodésie",
            "Gestion des industries minières"
          ],
          Master: [
            "Recherche avancée en géologie pétrolière",
            "Technologies environnementales pour l'industrie",
            "Applications industrielles en géodésie"
          ],
          Doctorat: [
            "Études avancées en géologie et géodésie",
            "Recherche en durabilité minière"
          ]
        },
        "L'université d'État de Tomsk, 'la Faculté géologique'": {
          Licence: [
            "Géologie générale",
            "Géophysique appliquée",
            "Systèmes SIG (cartographie numérique)",
            "Gestion des ressources naturelles"
          ],
          Master: [
            "Applications géophysiques avancées",
            "Recherche en technologies géologiques",
            "Études en durabilité géologique"
          ],
          Doctorat: [
            "Études avancées en géophysique environnementale",
            "Recherche en technologies d'exploration"
          ]
        },
        "L'université polytechnique de Tomsk, l'Institut des ressources minérales": {
          Licence: [
            "Technologies minières et d'extraction",
            "Matériaux et gestion industrielle",
            "Géologie appliquée",
            "Environnement et industrie"
          ],
          Master: [
            "Recherche en exploitation minière durable",
            "Applications innovantes en matériaux",
            "Gestion des procédés industriels"
          ],
          Doctorat: [
            "Recherche en industries minières",
            "Études avancées en ressources minérales"
          ]
        },
        "L'université d'État de Toula, l'Institut de l'industrie minière": {
          Licence: [
            "Ingénierie minière",
            "Gestion des ressources naturelles",
            "Cartographie et technologies d'exploration",
            "Environnement et industries extractives"
          ],
          Master: [
            "Technologies industrielles avancées",
            "Recherche en extraction durable",
            "Gestion stratégique des mines"
          ],
          Doctorat: [
            "Études avancées en ingénierie minière",
            "Recherche en durabilité environnementale"
          ]
        },
        "L'université d'État minière d'Oural": {
          Licence: [
            "Ingénierie minière",
            "Technologies de l'extraction",
            "Géologie appliquée",
            "Sciences des matériaux"
          ],
          Master: [
            "Recherche en exploitation minière durable",
            "Technologies innovantes dans l'industrie minière",
            "Études avancées en ressources naturelles"
          ],
          Doctorat: [
            "Recherche en industries minières",
            "Études avancées en gestion industrielle"
          ]
        },
        "L'université d'État technique d'Oukhta, l'Institut de la géologie": {
          Licence: [
            "Géologie pétrolière",
            "Sciences des mines",
            "Technologies environnementales",
            "Cartographie numérique"
          ],
          Master: [
            "Études avancées en géologie et énergie",
            "Recherche en industries pétrolières",
            "Applications environnementales"
          ],
          Doctorat: [
            "Recherche en géologie appliquée",
            "Études en exploration durable"
          ]
        },
        "L'université d'État d'Yugorsk, l'Institut des Mines": {
          Licence: [
            "Ingénierie minière",
            "Gestion des ressources naturelles",
            "Environnement et technologies minières",
            "Cartographie géologique"
          ],
          Master: [
            "Applications minières avancées",
            "Recherche en gestion durable",
            "Technologies innovantes en exploitation"
          ],
          Doctorat: [
            "Études avancées en industries minières",
            "Recherche en durabilité environnementale"
          ]
        },
        "L'université d'État du Sud-Ouest, 'la Faculté d'industrie minière'": {
          Licence: [
            "Technologies minières",
            "Géologie et environnement",
            "Sciences des matériaux",
            "Gestion industrielle"
          ],
          Master: [
            "Applications avancées en industrie minière",
            "Recherche en géosciences",
            "Technologies durables pour l'extraction"
          ],
          Doctorat: [
            "Recherche en technologies minières",
            "Études avancées en environnement industriel"
          ]
        },
        "L'université russe d'État polytechnique du sud M.I.Platov (l'institut polytechnique de Novotcherkassk), 'la Faculté de la géologie, l'industrie minière et d'industrie pétrolière et gazière'": {
          Licence: [
            "Géologie pétrolière et exploration",
            "Technologies minières",
            "Gestion des ressources en énergie",
            "Sciences des matériaux"
          ],
          Master: [
            "Études avancées en exploration pétrolière",
            "Applications géophysiques industrielles",
            "Recherche en industries extractives"
          ],
          Doctorat: [
            "Recherche en géologie pétrolière",
            "Études avancées en gestion des ressources"
          ]
        },
        "L'université du sud fédérale, l'Institut des sciences terrestres": {
          Licence: [
            "Sciences de la Terre",
            "Géophysique et cartographie",
            "Gestion des ressources naturelles",
            "Technologies environnementales"
          ],
          Master: [
            "Recherche avancée en géophysique",
            "Applications géologiques durables",
            "Technologies environnementales innovantes"
          ],
          Doctorat: [
            "Recherche en sciences terrestres",
            "Études avancées en géosciences"
          ]
        },

        ////////////////////// 
   "L'Académie d'État de la laiterie de Vologda N.V. Verechtchagin": {
              Licence: [
                "Technologie laitière",
                "Agronomie et foresterie",
                "Médecine vétérinaire et biotechnologies",
                "Économie et gestion agricole"
              ],
              Master: [
                "Technologies avancées en production laitière",
                "Gestion durable des ressources agricoles",
                "Biotechnologies appliquées"
              ],
              Doctorat: [
                "Recherche en biotechnologies agricoles",
                "Études avancées en gestion laitière"
              ]
            },
            "L'Institut d'État de l'industrie de l'alimentation de Kémérovo": {
              Licence: [
                "Technologie alimentaire",
                "Biotechnologie",
                "Gestion de la production alimentaire",
                "Chimie appliquée"
              ],
              Master: [
                "Applications avancées en biotechnologie alimentaire",
                "Technologies innovantes pour l'industrie alimentaire",
                "Gestion stratégique des procédés alimentaires"
              ],
              Doctorat: [
                "Recherche en biotechnologie alimentaire",
                "Études avancées en chimie alimentaire"
              ]
            },
            "L'Université d'État technologique de Kuban": {
              Licence: [
                "Technologie alimentaire et vinification",
                "Ingénierie des procédés alimentaires",
                "Gestion des systèmes énergétiques",
                "Robotique et mécatronique"
              ],
              Master: [
                "Technologies avancées en vinification",
                "Applications numériques pour l'industrie alimentaire",
                "Recherche en systèmes énergétiques durables"
              ],
              Doctorat: [
                "Recherche en ingénierie alimentaire",
                "Études avancées en robotique industrielle"
              ]
            },
            "L'Université d'État de la production alimentaire de Moscou": {
              Licence: [
                "Technologie alimentaire",
                "Biotechnologie",
                "Nutrition et santé",
                "Gestion de la production"
              ],
              Master: [
                "Applications avancées en biotechnologie alimentaire",
                "Technologies durables pour la nutrition",
                "Recherche en gestion de la production alimentaire"
              ],
              Doctorat: [
                "Recherche en biotechnologie et nutrition",
                "Études avancées en gestion alimentaire"
              ]
            },
            "L'Université d'État des technologies et de la gestion de Moscou K.G. Razoumovskiy": {
              Licence: [
                "Biotechnologie",
                "Écologie et gestion de l'environnement",
                "Automatisation des procédés industriels",
                "Technologie de production alimentaire"
              ],
              Master: [
                "Applications avancées en biotechnologie",
                "Gestion durable des procédés industriels",
                "Recherche en technologies alimentaires"
              ],
              Doctorat: [
                "Recherche en biotechnologie industrielle",
                "Études avancées en gestion environnementale"
              ]
            },
            "L'Université d'État du froid et des biotechnologies de Saint-Pétersbourg": {
              Licence: [
                "Technologie du froid",
                "Biotechnologie alimentaire",
                "Gestion des systèmes de réfrigération",
                "Chimie appliquée"
              ],
              Master: [
                "Applications avancées en biotechnologie du froid",
                "Technologies innovantes pour la conservation alimentaire",
                "Recherche en gestion des systèmes de réfrigération"
              ],
              Doctorat: [
                "Recherche en biotechnologie et conservation",
                "Études avancées en chimie appliquée"
              ]
            },

            //////////////////////

        "L'Académie d'État de l'économie forestière et des technologies de Voronej": {
              Licence: [
                "Gestion forestière",
                    "Technologies de l'industrie du bois",
                    "Économie et durabilité des ressources naturelles",
                    "Sciences environnementales"
                  ],
                  Master: [
                    "Applications avancées en gestion forestière",
                    "Technologies innovantes pour l'industrie du bois",
                    "Recherche en durabilité environnementale"
                  ],
                  Doctorat: [
                    "Recherche en économie forestière",
                    "Études avancées en gestion des ressources naturelles"
                  ]
                },
                "L'Université d'État technique forestière de Saint-Pétersbourg": {
                  Licence: [
                    "Technologie de l'exploitation forestière",
                    "Architecture paysagère et gestion des espaces verts",
                    "Gestion des ressources naturelles",
                    "Biotechnologie et sécurité technosphérique"
                  ],
                  Master: [
                    "Innovation en gestion forestière",
                    "Technologies avancées pour l'industrie du bois",
                    "Recherche en biotechnologie forestière"
                  ],
                  Doctorat: [
                    "Recherche en gestion durable des forêts",
                    "Études avancées en biotechnologie et sécurité environnementale"
                  ]
                },

                    "L'institut d'État pétrolier d'Almetyevsk": {
                      Licence: [
                        "Technologies pétrolières",
                        "Géologie et exploration des hydrocarbures",
                        "Ingénierie mécanique pour le pétrole",
                        "Gestion des systèmes pétroliers"
                      ],
                      Master: [
                        "Applications avancées en exploitation pétrolière",
                        "Technologies environnementales dans l'industrie pétrolière",
                        "Recherche en systèmes énergétiques"
                      ],
                      Doctorat: [
                        "Recherche en technologies pétrolières",
                        "Études avancées en gestion des ressources"
                      ]
                    },
                    "L'université d'État technique d'Arkhangelsk, l'Institut du pétrole et du gaz": {
                      Licence: [
                        "Ingénierie pétrolière et gazière",
                        "Technologies d'exploration",
                        "Gestion environnementale",
                        "Matériaux industriels avancés"
                      ],
                      Master: [
                        "Gestion durable des ressources pétrolières",
                        "Technologies innovantes pour l'exploration",
                        "Recherche en gestion énergétique"
                      ],
                      Doctorat: [
                        "Études avancées en géologie pétrolière",
                        "Recherche en gestion environnementale"
                      ]
                    },
                    "L'université d'État technique d'Astrakhan, l'Institut du pétrole et du gaz": {
                      Licence: [
                        "Technologies pétrolières et maritimes",
                        "Géophysique appliquée",
                        "Matériaux pour l'industrie pétrolière",
                        "Gestion des systèmes offshore"
                      ],
                      Master: [
                        "Applications avancées en exploration maritime",
                        "Technologies énergétiques innovantes",
                        "Recherche en durabilité environnementale"
                      ],
                      Doctorat: [
                        "Recherche en technologies offshore",
                        "Études avancées en gestion énergétique"
                      ]
                    },
                    "L'université d'État technique de Voronej, l'Institut du pétrole et du gaz": {
                      Licence: [
                        "Géologie pétrolière",
                        "Ingénierie pétrolière",
                        "Chimie industrielle appliquée",
                        "Gestion des pipelines"
                      ],
                      Master: [
                        "Technologies avancées en hydrocarbures",
                        "Recherche en génie chimique",
                        "Gestion stratégique des ressources pétrolières"
                      ],
                      Doctorat: [
                        "Recherche en exploration pétrolière",
                        "Études avancées en gestion des pipelines"
                      ]
                    },
                    "L'institut pétrolier de Grozniy l'académicien M.D.Millionchtchikov": {
                      Licence: [
                        "Ingénierie pétrolière",
                        "Géologie des hydrocarbures",
                        "Gestion des ressources énergétiques",
                        "Technologies innovantes pour le gaz"
                      ],
                      Master: [
                        "Recherche avancée en génie pétrolier",
                        "Applications environnementales dans l'industrie gazière",
                        "Gestion stratégique des systèmes pétroliers"
                      ],
                      Doctorat: [
                        "Études avancées en hydrocarbures",
                        "Recherche en gestion des ressources naturelles"
                      ]
                    },
                    "L'université russe d'État du pétrole et du gaz I.M.Goubkine": {
                      Licence: [
                        "Ingénierie pétrolière et gazière",
                        "Chimie appliquée au pétrole",
                        "Technologies de transport des hydrocarbures",
                        "Économie et gestion dans le secteur énergétique"
                      ],
                      Master: [
                        "Applications avancées en chimie pétrolière",
                        "Recherche en exploration offshore",
                        "Gestion stratégique des ressources énergétiques"
                      ],
                      Doctorat: [
                        "Recherche en technologies pétrochimiques",
                        "Études avancées en économie de l'énergie"
                      ]
                    },
                      "L'université d'État technique de Daghestan, l'Institut du pétrole et du gaz": {
                        Licence: [
                          "Ingénierie pétrolière et gazière",
                          "Technologies de forage",
                          "Gestion des ressources énergétiques",
                          "Géologie pétrolière"
                        ],
                        Master: [
                          "Gestion avancée des projets pétroliers",
                          "Technologies innovantes en exploration gazière",
                          "Recherche en géosciences appliquées"
                        ],
                        Doctorat: [
                          "Études avancées en ingénierie pétrolière",
                          "Recherche en technologies de forage",
                          "Innovation en gestion des ressources énergétiques"
                        ]
                      },
                      "L'université d'Extrême Orient fédérale, l'Institut du pétrole et du gaz": {
                        Licence: [
                          "Ingénierie pétrolière et gazière",
                          "Technologies de raffinage",
                          "Gestion des systèmes énergétiques",
                          "Géophysique appliquée"
                        ],
                        Master: [
                          "Recherche en technologies de raffinage avancées",
                          "Gestion durable des ressources énergétiques",
                          "Applications en géophysique moderne"
                        ],
                        Doctorat: [
                          "Études avancées en géophysique",
                          "Recherche en gestion énergétique",
                          "Innovation en technologies pétrolières"
                        ]
                      },
                      "L'université d'État technique d'Irkoutsk, 'la Faculté du pétrole et du gaz'": {
                        Licence: [
                          "Ingénierie pétrolière et gazière",
                          "Technologies de production énergétique",
                          "Gestion des infrastructures pétrolières",
                          "Géologie des hydrocarbures"
                        ],
                        Master: [
                          "Recherche en production énergétique durable",
                          "Gestion stratégique des projets pétroliers",
                          "Applications avancées en géologie des hydrocarbures"
                        ],
                        Doctorat: [
                          "Études avancées en ingénierie énergétique",
                          "Recherche en technologies pétrolières innovantes",
                          "Gestion des systèmes énergétiques complexes"
                        ]
                      },


                        "L'université de Kazan fédérale, l'Institut du pétrole et du gaz": {
                          Licence: [
                            "Ingénierie pétrolière et gazière",
                            "Technologies de raffinage",
                            "Gestion des systèmes énergétiques",
                            "Géophysique appliquée"
                          ],
                          Master: [
                            "Recherche en technologies de raffinage avancées",
                            "Gestion durable des ressources énergétiques",
                            "Applications en géophysique moderne"
                          ],
                          Doctorat: [
                            "Études avancées en géophysique",
                            "Recherche en gestion énergétique",
                            "Innovation en technologies pétrolières"
                          ]
                        },
                        "L'institut des technologies humanitaires et d'ingénieur de Kama": {
                          Licence: [
                            "Technologies humanitaires appliquées",
                            "Ingénierie des systèmes énergétiques",
                            "Gestion des infrastructures pétrolières",
                            "Géologie des hydrocarbures"
                          ],
                          Master: [
                            "Gestion stratégique des projets humanitaires",
                            "Recherche en ingénierie énergétique durable",
                            "Applications avancées en géologie des hydrocarbures"
                          ],
                          Doctorat: [
                            "Études avancées en ingénierie humanitaire",
                            "Recherche en technologies énergétiques innovantes",
                            "Gestion des systèmes complexes"
                          ]
                        },
                        "L'université d'État technique de Kuban, 'la Faculté du pétrole et du gaz'": {
                          Licence: [
                            "Ingénierie pétrolière et gazière",
                            "Technologies de production énergétique",
                            "Gestion des infrastructures pétrolières",
                            "Géologie des hydrocarbures"
                          ],
                          Master: [
                            "Recherche en production énergétique durable",
                            "Gestion stratégique des projets pétroliers",
                            "Applications avancées en géologie des hydrocarbures"
                          ],
                          Doctorat: [
                            "Études avancées en ingénierie énergétique",
                            "Recherche en technologies pétrolières innovantes",
                            "Gestion des systèmes énergétiques complexes"
                          ]
                        },
                        "L'institut d'État technologique de Maikop, 'la Faculté du pétrole et du gaz'": {
                          Licence: [
                            "Ingénierie pétrolière et gazière",
                            "Technologies de forage",
                            "Gestion des ressources énergétiques",
                            "Géologie pétrolière"
                          ],
                          Master: [
                            "Gestion avancée des projets pétroliers",
                            "Technologies innovantes en exploration gazière",
                            "Recherche en géosciences appliquées"
                          ],
                          Doctorat: [
                            "Études avancées en ingénierie pétrolière",
                            "Recherche en technologies de forage",
                            "Innovation en gestion des ressources énergétiques"
                          ]
                        },
                        
                          "L'université d'État ouverte de Moscou, l'Institut du pétrole et du gaz": {
                            Licence: [
                              "Ingénierie pétrolière et gazière",
                              "Technologies de forage",
                              "Gestion des ressources énergétiques",
                              "Géologie pétrolière"
                            ],
                            Master: [
                              "Gestion avancée des projets pétroliers",
                              "Technologies innovantes en exploration gazière",
                              "Recherche en géosciences appliquées"
                            ],
                            Doctorat: [
                              "Études avancées en ingénierie pétrolière",
                              "Recherche en technologies de forage",
                              "Innovation en gestion des ressources énergétiques"
                            ]
                          },
                          "L'institut du business de l'industrie pétrolière et gazière de Moscou": {
                            Licence: [
                              "Gestion des entreprises pétrolières",
                              "Économie de l'industrie pétrolière",
                              "Logistique et chaîne d'approvisionnement",
                              "Marketing dans le secteur énergétique"
                            ],
                            Master: [
                              "Stratégies de gestion dans l'industrie pétrolière",
                              "Recherche en économie énergétique",
                              "Applications avancées en logistique pétrolière"
                            ],
                            Doctorat: [
                              "Études avancées en gestion énergétique",
                              "Recherche en innovation économique",
                              "Développement durable dans l'industrie pétrolière"
                            ]
                          },
                          "L'université d'État technique d'Omsk, 'la Faculté du pétrole et du gaz'": {
                            Licence: [
                              "Ingénierie pétrolière et gazière",
                              "Technologies de production énergétique",
                              "Gestion des infrastructures pétrolières",
                              "Géologie des hydrocarbures"
                            ],
                            Master: [
                              "Recherche en production énergétique durable",
                              "Gestion stratégique des projets pétroliers",
                              "Applications avancées en géologie des hydrocarbures"
                            ],
                            Doctorat: [
                              "Études avancées en ingénierie énergétique",
                              "Recherche en technologies pétrolières innovantes",
                              "Gestion des systèmes énergétiques complexes"
                            ]
                          },

                  
                            "L'université d'État technique de Perm, 'la Faculté du pétrole et du gaz'": {
                              Licence: [
                                "Ingénierie pétrolière et gazière",
                                "Technologies de forage",
                                "Gestion des ressources énergétiques",
                                "Géologie pétrolière"
                              ],
                              Master: [
                                "Gestion avancée des projets pétroliers",
                                "Technologies innovantes en exploration gazière",
                                "Recherche en géosciences appliquées"
                              ],
                              Doctorat: [
                                "Études avancées en ingénierie pétrolière",
                                "Recherche en technologies de forage",
                                "Innovation en gestion des ressources énergétiques"
                              ]
                            }
                          ,                          
                                                








                    "L'université d'État de Sakhaline, 'la Faculté du pétrole et du gaz'": {
                      Licence: [
                        "Exploitation pétrolière et marine",
                        "Chimie industrielle appliquée",
                        "Gestion environnementale offshore",
                        "Technologies de forage"
                      ],
                      Master: [
                        "Applications en gestion des ressources maritimes",
                        "Recherche en technologies pétrolières offshore",
                        "Innovation en environnement et durabilité"
                      ],
                      Doctorat: [
                        "Recherche en gestion marine",
                        "Études avancées en exploration pétrolière"
                      ]
                    },
    
                        "L'université du nord (Arctique) fédérale M.V.Lomonosov, l'Institut du pétrole et du gaz": {
                          Licence: [
                            "Ingénierie pétrolière et gazière",
                            "Géologie appliquée",
                            "Technologies de transport des hydrocarbures",
                            "Gestion environnementale dans l'Arctique"
                          ],
                          Master: [
                            "Applications avancées en exploration arctique",
                            "Technologies durables pour l'industrie pétrolière",
                            "Recherche en gestion des ressources énergétiques"
                          ],
                          Doctorat: [
                            "Recherche en technologies arctiques",
                            "Études avancées en géologie pétrolière"
                          ]
                        },
                        "L'université d'État technique du Nord du Caucase, l'Institut du pétrole et du gaz": {
                          Licence: [
                            "Technologies pétrolières",
                            "Géophysique appliquée",
                            "Gestion des ressources énergétiques",
                            "Chimie industrielle"
                          ],
                          Master: [
                            "Recherche en technologies pétrolières",
                            "Applications environnementales dans l'industrie gazière",
                            "Gestion stratégique des systèmes énergétiques"
                          ],
                          Doctorat: [
                            "Études avancées en hydrocarbures",
                            "Recherche en gestion des ressources naturelles"
                          ]
                        },
                        "L'institut du pétrole et du gaz de Surgut (l'université d'État de gaz et de pétrole de Tioumen)": {
                          Licence: [
                            "Ingénierie pétrolière",
                            "Technologies de forage",
                            "Gestion des pipelines",
                            "Géologie des hydrocarbures"
                          ],
                          Master: [
                            "Applications avancées en exploration pétrolière",
                            "Technologies innovantes pour le gaz",
                            "Recherche en durabilité énergétique"
                          ],
                          Doctorat: [
                            "Recherche en technologies pétrolières",
                            "Études avancées en gestion des pipelines"
                          ]
                        },
                        "L'université d'État de Tomsk, l'Institut du pétrole et du gaz": {
                          Licence: [
                            "Géologie pétrolière",
                            "Ingénierie pétrolière et gazière",
                            "Chimie industrielle appliquée",
                            "Gestion des systèmes énergétiques"
                          ],
                          Master: [
                            "Technologies avancées en hydrocarbures",
                            "Recherche en génie chimique",
                            "Gestion stratégique des ressources pétrolières"
                          ],
                          Doctorat: [
                            "Recherche en exploration pétrolière",
                            "Études avancées en gestion des pipelines"
                          ]
                        },
                        "L'université d'État de gaz et de pétrole de Tioumen": {
                          Licence: [
                            "Ingénierie pétrolière et gazière",
                            "Technologies de transport des hydrocarbures",
                            "Géologie appliquée",
                            "Gestion des ressources énergétiques"
                          ],
                          Master: [
                            "Applications avancées en exploration pétrolière",
                            "Technologies durables pour l'industrie pétrolière",
                            "Recherche en gestion des ressources énergétiques"
                          ],
                          Doctorat: [
                            "Recherche en technologies pétrolières",
                            "Études avancées en géologie pétrolière"
                          ]
                        },
                        "L'université d'État pétrolière technique d'Oufa": {
                          Licence: [
                            "Technologies pétrolières",
                            "Géophysique appliquée",
                            "Gestion des ressources énergétiques",
                            "Chimie industrielle"
                          ],
                          Master: [
                            "Recherche en technologies pétrolières",
                            "Applications environnementales dans l'industrie gazière",
                            "Gestion stratégique des systèmes énergétiques"
                          ],
                          Doctorat: [
                            "Études avancées en hydrocarbures",
                            "Recherche en gestion des ressources naturelles"
                          ]
                        },
                        "L'université d'État technique d'Oukhta, l'Institut du pétrole et du gaz": {
                          Licence: [
                            "Ingénierie pétrolière",
                            "Technologies de forage",
                            "Gestion des pipelines",
                            "Géologie des hydrocarbures"
                          ],
                          Master: [
                            "Applications avancées en exploration pétrolière",
                            "Technologies innovantes pour le gaz",
                            "Recherche en durabilité énergétique"
                          ],
                          Doctorat: [
                            "Recherche en technologies pétrolières",
                            "Études avancées en gestion des pipelines"
                          ]
                        },
                        "L'université russe d'État technique du sud, l'Institut du pétrole et du gaz": {
                          Licence: [
                            "Géologie pétrolière",
                            "Ingénierie pétrolière et gazière",
                            "Chimie industrielle appliquée",
                            "Gestion des systèmes énergétiques"
                          ],
                          Master: [
                            "Technologies avancées en hydrocarbures",
                            "Recherche en génie chimique",
                            "Gestion stratégique des ressources pétrolières"
                          ],
                          Doctorat: [
                            "Recherche en exploration pétrolière",
                            "Études avancées en gestion des pipelines"
                          ]
                        },
                        "L'institut de gaz et de pétrole de Yamal (l'université d'État de gaz et de pétrole de Tioumen)": {
                          Licence: [
                            "Ingénierie pétrolière et gazière",
                            "Technologies de transport des hydrocarbures",
                            "Géologie appliquée",
                            "Gestion des ressources énergétiques"
                          ],
                          Master: [
                            "Applications avancées en exploration pétrolière",
                            "Technologies durables pour l'industrie pétrolière",
                            "Recherche en gestion des ressources énergétiques"
                          ],
                          Doctorat: [
                            "Recherche en technologies pétrolières",
                            "Études avancées en géologie pétrolière"
                          ]
                        },

    ////////////////////////////////
    
    
                      
        "L'institut d'aviation de Moscou (l'Université Nationale scientifique)": {
          Licence: [
            "Ingénierie aérospatiale",
            "Conception et fabrication d'aéronefs",
            "Systèmes de propulsion",
            "Technologies numériques pour l'aéronautique"
          ],
          Master: [
            "Applications avancées en ingénierie aérospatiale",
            "Recherche en systèmes de propulsion",
            "Technologies d’automatisation aéronautique"
          ],
          Doctorat: [
            "Recherche en conception d'aéronefs",
            "Études avancées en ingénierie spatiale"
          ]
        },
        "L'université d'État technique de l'aviation civile de Moscou": {
          Licence: [
            "Gestion des opérations aériennes",
            "Technologie des systèmes avioniques",
            "Maintenance aéronautique",
            "Sécurité des vols"
          ],
          Master: [
            "Gestion stratégique de l'aviation",
            "Recherche en systèmes avioniques",
            "Applications avancées en sécurité aérienne"
          ],
          Doctorat: [
            "Recherche en technologies aéronautiques",
            "Études avancées en gestion des vols"
          ]
        },
        "L'université d'État technique de Moscou Bauman": {
          Licence: [
            "Ingénierie mécanique et robotique",
            "Systèmes de contrôle et d’automatisation",
            "Conception de systèmes aérospatiaux",
            "Sciences des matériaux"
          ],
          Master: [
            "Technologies avancées pour l'industrie aérospatiale",
            "Robotique appliquée",
            "Recherche en matériaux innovants"
          ],
          Doctorat: [
            "Recherche en ingénierie spatiale",
            "Études en matériaux avancés"
          ]
        },
        "L'université d'État d'aviation technique de Rybinsk R.A.Solov'ev": {
          Licence: [
            "Propulsion aéronautique",
            "Conception d'aéronefs",
            "Systèmes de navigation et avionique",
            "Gestion industrielle"
          ],
          Master: [
            "Systèmes avancés de propulsion",
            "Recherche en navigation aéronautique",
            "Applications innovantes en gestion industrielle"
          ],
          Doctorat: [
            "Recherche en technologies de propulsion",
            "Études avancées en avionique"
          ]
        },
        "L'université d'État aérospatiale de Samara l'académicien S.P.Korolev": {
          Licence: [
            "Ingénierie aérospatiale",
            "Conception de fusées",
            "Technologies spatiales",
            "Matériaux pour l'aéronautique"
          ],
          Master: [
            "Recherche avancée en technologies spatiales",
            "Applications dans l’ingénierie des fusées",
            "Gestion des projets aérospatiaux"
          ],
          Doctorat: [
            "Recherche en conception de fusées",
            "Études avancées en technologies spatiales"
          ]
        },
        "L'université d'État de la construction d'appareils aérospatiale de Saint-Pétersbourg": {
          Licence: [
            "Ingénierie de systèmes aérospatiaux",
            "Systèmes de contrôle pour aéronefs",
            "Fabrication de composants aéronautiques",
            "Technologies de l’automatisation"
          ],
          Master: [
            "Conception avancée d’appareils aérospatiaux",
            "Automatisation des processus industriels",
            "Recherche en systèmes aéronautiques"
          ],
          Doctorat: [
            "Recherche en ingénierie aérospatiale",
            "Études en technologies d’automatisation"
          ]
        },
        "L'université d'État d'aviation civile de Saint-Pétersbourg": {
          Licence: [
            "Gestion de l'aviation civile",
            "Maintenance et sécurité des avions",
            "Technologie des systèmes avioniques",
            "Gestion environnementale aéronautique"
          ],
          Master: [
            "Gestion stratégique des compagnies aériennes",
            "Sécurité et maintenance avancée",
            "Applications en technologie des vols"
          ],
          Doctorat: [
            "Recherche en sécurité aérienne",
            "Études avancées en avionique"
          ]
        },
        "L'université d'État aérospatiale sibérienne": {
          Licence: [
            "Systèmes de navigation et avionique",
            "Conception et fabrication d’aéronefs",
            "Technologies spatiales",
            "Gestion de projets aérospatiaux"
          ],
          Master: [
            "Applications avancées en navigation",
            "Recherche en technologies spatiales",
            "Gestion industrielle des projets"
          ],
          Doctorat: [
            "Recherche en technologies spatiales",
            "Études avancées en gestion aéronautique"
          ]
        },
        "L'école supérieure d'aviation civile d'Oulianovsk": {
          Licence: [
            "Formation des pilotes professionnels",
            "Gestion des vols",
            "Sécurité aérienne et réglementation",
            "Maintenance des systèmes avioniques"
          ],
          Master: [
            "Gestion stratégique des vols",
            "Technologies avancées en aviation",
            "Recherche en sécurité aéronautique"
          ]
        },
        "L'université d'État d'aviation technique d'Oufa": {
          Licence: [
            "Conception et fabrication d'aéronefs",
            "Systèmes avioniques",
            "Propulsion aéronautique",
            "Gestion industrielle"
          ],
          Master: [
            "Applications avancées en propulsion aéronautique",
            "Recherche en navigation et avionique",
            "Gestion des processus industriels"
          ],
          Doctorat: [
            "Recherche en technologies de propulsion",
            "Études avancées en ingénierie aéronautique"
          ]
        },


        //////////////////////////////


        
            "L'académie d'État baltique de la flotte de pêche": {
              Licence: [
                "Technologies de la pêche",
                "Gestion des ressources maritimes",
                "Ingénierie maritime",
                "Économie et commerce maritime"
              ],
              Master: [
                "Gestion durable des pêches",
                "Technologies avancées en ingénierie maritime",
                "Recherche en économie maritime"
              ],
              Doctorat: [
                "Études avancées en gestion des ressources maritimes",
                "Recherche en technologies de la pêche",
                "Économie des industries maritimes"
              ]
            },
            "Le collège maritime de pêche de Volga et Kaspiysk": {
              Licence: [
                "Technologies de la pêche",
                "Gestion des opérations maritimes",
                "Maintenance des équipements maritimes",
                "Écologie marine"
              ],
              Master: [
                "Applications avancées en gestion maritime",
                "Technologies innovantes pour la pêche",
                "Recherche en écologie marine"
              ],
              Doctorat: [
                "Recherche en gestion des pêches",
                "Études avancées en technologies maritimes",
                "Écologie et durabilité marine"
              ]
            },
            "L'académie d'État du transport par eau de Volga": {
              Licence: [
                "Transport maritime et fluvial",
                "Gestion des infrastructures portuaires",
                "Technologies de navigation",
                "Économie des transports"
              ],
              Master: [
                "Gestion stratégique des transports maritimes",
                "Technologies avancées en navigation",
                "Recherche en économie des transports"
              ],
              Doctorat: [
                "Études avancées en gestion portuaire",
                "Recherche en technologies de navigation",
                "Économie des systèmes de transport"
              ]
            },
            "L'académie d'État maritime S.O.Makarov": {
              Licence: [
                "Navigation maritime",
                "Ingénierie des navires",
                "Gestion des transports maritimes",
                "Technologies de communication maritime"
              ],
              Master: [
                "Applications avancées en navigation",
                "Technologies innovantes pour les navires",
                "Recherche en gestion maritime"
              ],
              Doctorat: [
                "Recherche en ingénierie navale",
                "Études avancées en navigation maritime",
                "Gestion stratégique des transports"
              ]
            },
            "L'académie d'État maritime F.F.Ouchakov": {
              Licence: [
                "Transport maritime et logistique",
                "Technologies de navigation",
                "Gestion des opérations maritimes",
                "Économie maritime"
              ],
              Master: [
                "Logistique maritime avancée",
                "Technologies innovantes en navigation",
                "Recherche en économie maritime"
              ],
              Doctorat: [
                "Études avancées en logistique maritime",
                "Recherche en technologies de navigation",
                "Économie des transports maritimes"
              ]
            },
            "L'université d'État maritime F.F.Ouchakova, Novosibirsk": {
              Licence: [
                "Technologies maritimes",
                "Gestion des ressources aquatiques",
                "Ingénierie navale",
                "Économie et commerce maritime"
              ],
              Master: [
                "Applications avancées en ingénierie maritime",
                "Gestion durable des ressources aquatiques",
                "Recherche en économie maritime"
              ],
              Doctorat: [
                "Recherche en technologies maritimes",
                "Études avancées en gestion des ressources aquatiques",
                "Économie des industries maritimes"
              ]
            },


            ////////////////////////

    
                "L'université d'État de la flotte marine et la flotte fluviale S.O.Makarov": {
                  Licence: [
                    "Navigation maritime",
                    "Gestion des transports maritimes et fluviaux",
                    "Technologies de construction navale",
                    "Sécurité maritime"
                  ],
                  Master: [
                    "Logistique des transports maritimes",
                    "Technologies avancées en navigation",
                    "Gestion stratégique des systèmes maritimes"
                  ],
                  Doctorat: [
                    "Recherche en ingénierie navale",
                    "Études avancées en sécurité maritime",
                    "Gestion des infrastructures portuaires"
                  ]
                },
                "L'université d'État technique d’industrie de la pêche d'Extrême Orient": {
                  Licence: [
                    "Technologies de la pêche",
                    "Biologie marine et aquaculture",
                    "Gestion des ressources maritimes",
                    "Économie maritime"
                  ],
                  Master: [
                    "Applications avancées en aquaculture",
                    "Technologies innovantes pour la pêche",
                    "Recherche en gestion des ressources maritimes"
                  ],
                  Doctorat: [
                    "Études avancées en biologie marine",
                    "Recherche en technologies de la pêche",
                    "Économie des industries maritimes"
                  ]
                },
                "L'institut du transport par eau G.Ya.Sedov": {
                  Licence: [
                    "Transport maritime et fluvial",
                    "Technologies de navigation",
                    "Gestion des opérations portuaires",
                    "Économie des transports"
                  ],
                  Master: [
                    "Logistique des transports maritimes",
                    "Technologies avancées en navigation",
                    "Recherche en gestion portuaire"
                  ],
                  Doctorat: [
                    "Études avancées en transport maritime",
                    "Recherche en technologies de navigation",
                    "Économie des systèmes de transport"
                  ]
                },
                "L'institut des technologies maritimes de l'université d'État technique d'Astrakhan": {
                  Licence: [
                    "Technologies maritimes",
                    "Gestion des ressources aquatiques",
                    "Ingénierie navale",
                    "Économie maritime"
                  ],
                  Master: [
                    "Applications avancées en ingénierie maritime",
                    "Gestion durable des ressources aquatiques",
                    "Recherche en économie maritime"
                  ],
                  Doctorat: [
                    "Recherche en technologies maritimes",
                    "Études avancées en gestion des ressources aquatiques",
                    "Économie des industries maritimes"
                  ]
                },
                "L'institut d’industrie de la pêche de l'université d'État technique d'Astrakhan": {
                  Licence: [
                    "Technologies de la pêche",
                    "Biologie marine et aquaculture",
                    "Gestion des ressources maritimes",
                    "Économie maritime"
                  ],
                  Master: [
                    "Applications avancées en aquaculture",
                    "Technologies innovantes pour la pêche",
                    "Recherche en gestion des ressources maritimes"
                  ],
                  Doctorat: [
                    "Études avancées en biologie marine",
                    "Recherche en technologies de la pêche",
                    "Économie des industries maritimes"
                  ]
                },
                "L'université d'État technique de Kaliningrad (Marines et Maritimes)": {
                  Licence: [
                    "Technologies de la pêche",
                    "Gestion des ressources maritimes",
                    "Ingénierie maritime",
                    "Économie et commerce maritime"
                  ],
                  Master: [
                    "Gestion durable des pêches",
                    "Technologies avancées en ingénierie maritime",
                    "Recherche en économie maritime"
                  ],
                  Doctorat: [
                    "Études avancées en gestion des ressources maritimes",
                    "Recherche en technologies de la pêche",
                    "Économie des industries maritimes"
                  ]
                },

///////////////////////////////


    "L'université d'État technique du Komsomolsk-sur-Amour": {
      Licence: [
        "Ingénierie maritime",
        "Technologies de construction navale",
        "Gestion des ressources maritimes",
        "Économie maritime"
      ],
      Master: [
        "Applications avancées en ingénierie navale",
        "Technologies innovantes pour la construction maritime",
        "Recherche en gestion des ressources maritimes"
      ],
      Doctorat: [
        "Recherche en technologies maritimes",
        "Études avancées en gestion maritime",
        "Économie des industries maritimes"
      ]
    },
    "L'académie maritime de l'université d'État technique de Mourmansk": {
      Licence: [
        "Navigation maritime",
        "Technologies de construction navale",
        "Gestion des transports maritimes",
        "Sécurité maritime"
      ],
      Master: [
        "Logistique maritime avancée",
        "Technologies innovantes en navigation",
        "Recherche en gestion maritime"
      ],
      Doctorat: [
        "Études avancées en ingénierie navale",
        "Recherche en technologies maritimes",
        "Gestion stratégique des systèmes maritimes"
      ]
    },
    "L'université d'État maritime G.I.Nevel'skiy": {
      Licence: [
        "Technologies maritimes",
        "Gestion des ressources aquatiques",
        "Ingénierie navale",
        "Économie maritime"
      ],
      Master: [
        "Applications avancées en ingénierie maritime",
        "Gestion durable des ressources aquatiques",
        "Recherche en économie maritime"
      ],
      Doctorat: [
        "Recherche en technologies maritimes",
        "Études avancées en gestion des ressources aquatiques",
        "Économie des industries maritimes"
      ]
    },
    "L'académie d'État du transport par eau de Moscou": {
      Licence: [
        "Transport maritime et fluvial",
        "Technologies de navigation",
        "Gestion des opérations portuaires",
        "Économie des transports"
      ],
      Master: [
        "Logistique des transports maritimes",
        "Technologies avancées en navigation",
        "Recherche en gestion portuaire"
      ],
      Doctorat: [
        "Études avancées en transport maritime",
        "Recherche en technologies de navigation",
        "Économie des systèmes de transport"
      ]
    },
    "L'académie de Novosibirsk d'État du transport par eau": {
      Licence: [
        "Transport maritime et fluvial",
        "Technologies de navigation",
        "Gestion des infrastructures portuaires",
        "Économie des transports"
      ],
      Master: [
        "Gestion stratégique des transports maritimes",
        "Technologies avancées en navigation",
        "Recherche en économie des transports"
      ],
      Doctorat: [
        "Études avancées en gestion portuaire",
        "Recherche en technologies de navigation",
        "Économie des systèmes de transport"
      ]
    },
   
  //////////////////////////////////////////

    "L'université d'État maritime technique de Saint-Pétersbourg": {
      Licence: [
        "Ingénierie navale",
        "Technologies maritimes",
        "Gestion des ressources maritimes",
        "Économie maritime"
      ],
      Master: [
        "Applications avancées en ingénierie maritime",
        "Technologies innovantes pour la construction navale",
        "Recherche en gestion des ressources maritimes"
      ],
      Doctorat: [
        "Recherche en technologies maritimes",
        "Études avancées en gestion maritime",
        "Économie des industries maritimes"
      ]
    },
    "L'université d'État des communications aquatiques de Saint-Pétersbourg": {
      Licence: [
        "Transport maritime et fluvial",
        "Technologies de navigation",
        "Gestion des infrastructures portuaires",
        "Économie des transports"
      ],
      Master: [
        "Gestion stratégique des transports maritimes",
        "Technologies avancées en navigation",
        "Recherche en économie des transports"
      ],
      Doctorat: [
        "Études avancées en gestion portuaire",
        "Recherche en technologies de navigation",
        "Économie des systèmes de transport"
      ]
    },
    "L'académie maritime de Sébastopol": {
      Licence: [
        "Navigation maritime",
        "Technologies de construction navale",
        "Gestion des transports maritimes",
        "Sécurité maritime"
      ],
      Master: [
        "Logistique maritime avancée",
        "Technologies innovantes en navigation",
        "Recherche en gestion maritime"
      ],
      Doctorat: [
        "Études avancées en ingénierie navale",
        "Recherche en technologies maritimes",
        "Gestion stratégique des systèmes maritimes"
      ]
    },
        "L'université d'État médicale d'Altaï": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Pédiatrie",
            "Stomatologie"
          ],
          Master: [
            "Médecine préventive",
            "Pharmacologie avancée",
            "Recherche en pédiatrie"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie clinique"
          ]
        },
        "L'académie d'État médicale d'Amour": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie d'État médicale d'Astrakhan": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médicale de la Bachkirie": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Pédiatrie",
            "Stomatologie"
          ],
          Master: [
            "Médecine préventive",
            "Pharmacologie avancée",
            "Recherche en pédiatrie"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie clinique"
          ]
        },
        "L'université d'État de Belgorod, 'la Faculté de médecine'": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État de la Bouriatie, 'la Faculté de médecine'": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médicale de Vladivostok": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie militaire-médicale S.M.Kirov": {
          Licence: [
            "Médecine militaire",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine militaire",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine militaire",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médicale de Volgograd": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie d'État médicale de Voronej N.N.Bourdenko": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie d'État classique Maymonid, 'la Faculté de médecine'": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie d'État médicale de Daghestan": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },

////////////////////////

"L'université d'État médicale d'Extrême-Orient": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Pharmacie",
        "Stomatologie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Pharmacologie clinique",
        "Recherche en pédiatrie"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État médicale d'Ivanovo": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Applications avancées en médecine préventive",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en pédiatrie",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État médicale d'Ijevsk": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pharmacie",
        "Médecine préventive"
      ],
      Master: [
        "Applications avancées en médecine préventive",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale d'Irkoutsk": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État du Kabardino-Balkarie, 'la Faculté de médecine'": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Pharmacie",
        "Médecine préventive"
      ],
      Master: [
        "Applications avancées en médecine préventive",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale de Kazan": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État médicale de Kémérovo": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État médicale de Kirov": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
        "L'université d'État médicale de Krasnoïarsk V.F.Voyno-Yasenetsky": {
          Licence: [
            "Médecine générale",
            "Pédiatrie",
            "Pharmacie",
            "Stomatologie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Pharmacologie clinique",
            "Recherche en pédiatrie"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médicale de Kuban": {
          Licence: [
            "Médecine générale",
            "Pédiatrie",
            "Pharmacie",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en pharmacologie",
            "Technologies médicales innovantes"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en pédiatrie",
            "Pharmacologie clinique"
          ]
        },
        "L'université d'État médicale de Koursk": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pharmacie",
            "Psychologie clinique"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en psychologie clinique",
            "Pharmacologie appliquée"
          ]
        },
        "L'institut de médecine V.M.Molotov": {
          Licence: [
            "Médecine générale",
            "Pédiatrie",
            "Pharmacie",
            "Stomatologie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en pédiatrie",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État de la Mordovie N.P.Ogarev (Domaine Médical)": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médical et dentaire de Moscou A.I.Evdokimov": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pharmacie",
            "Psychologie clinique"
          ],
          Master: [
            "Applications avancées en médecine dentaire",
            "Recherche en psychologie clinique",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine dentaire",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État de Moscou M.V.Lomonosov, 'la Faculté de médecine'": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine préventive",
            "Biotechnologie médicale"
          ],
          Master: [
            "Recherche en biotechnologie médicale",
            "Applications avancées en médecine préventive",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en biotechnologie",
            "Recherche en médecine générale",
            "Pharmacologie appliquée"
          ]
        },
        "L'institut médico-social de reabilitology de Moscou": {
          Licence: [
            "Réhabilitation médicale",
            "Psychologie clinique",
            "Physiothérapie",
            "Gestion des soins de santé"
          ],
          Master: [
            "Applications avancées en réhabilitation",
            "Recherche en physiothérapie",
            "Gestion stratégique des soins de santé"
          ],
          Doctorat: [
            "Études avancées en réhabilitation médicale",
            "Recherche en psychologie clinique",
            "Gestion des systèmes de santé"
          ]
        },
            "L'institut de médecine du Ministère de la santé de la Fédération de Russie de Moscou (le Premier MGMU)": {
              Licence: [
                "Médecine générale",
                "Pharmacie",
                "Médecine dentaire",
                "Médecine préventive"
              ],
              Master: [
                "Applications avancées en médecine préventive",
                "Recherche en médecine dentaire",
                "Pharmacologie clinique"
              ],
              Doctorat: [
                "Études avancées en médecine générale",
                "Recherche en médecine préventive",
                "Pharmacologie appliquée"
              ]
            },
            "L'académie d'État médicale de Nizhniy Novrogod": {
              Licence: [
                "Médecine générale",
                "Pédiatrie",
                "Médecine dentaire",
                "Médecine préventive"
              ],
              Master: [
                "Applications avancées en pédiatrie",
                "Recherche en médecine dentaire",
                "Pharmacologie clinique"
              ],
              Doctorat: [
                "Études avancées en médecine générale",
                "Recherche en pédiatrie",
                "Pharmacologie appliquée"
              ]
            },
            "L'université d'État de Novgorod Iaroslav le Sage, 'la Faculté de médecine'": {
              Licence: [
                "Médecine générale",
                "Médecine dentaire",
                "Pharmacie",
                "Médecine préventive"
              ],
              Master: [
                "Applications avancées en médecine préventive",
                "Recherche en médecine dentaire",
                "Pharmacologie clinique"
              ],
              Doctorat: [
                "Études avancées en médecine générale",
                "Recherche en médecine préventive",
                "Pharmacologie appliquée"
              ]
            },
            "L'université d'État médicale de Novosibirsk": {
              Licence: [
                "Médecine générale",
                "Médecine dentaire",
                "Pédiatrie",
                "Pharmacie"
              ],
              Master: [
                "Médecine préventive avancée",
                "Recherche en pédiatrie",
                "Pharmacologie clinique"
              ],
              Doctorat: [
                "Recherche en médecine générale",
                "Études avancées en stomatologie",
                "Pharmacologie appliquée"
              ]
            },
            "L'université d'État de Novosibirsk, 'la Faculté de médecine'": {
              Licence: [
                "Médecine générale",
                "Médecine dentaire",
                "Pharmacie",
                "Médecine préventive"
              ],
              Master: [
                "Applications avancées en médecine préventive",
                "Recherche en médecine dentaire",
                "Pharmacologie clinique"
              ],
              Doctorat: [
                "Études avancées en médecine générale",
                "Recherche en médecine préventive",
                "Pharmacologie appliquée"
              ]
            },
            "L'académie d'État médicale d'Omsk": {
              Licence: [
                "Médecine générale",
                "Médecine dentaire",
                "Pédiatrie",
                "Pharmacie"
              ],
              Master: [
                "Médecine préventive avancée",
                "Recherche en pédiatrie",
                "Pharmacologie clinique"
              ],
              Doctorat: [
                "Recherche en médecine générale",
                "Études avancées en stomatologie",
                "Pharmacologie appliquée"
              ]
            },
                    
////////////////////////////

    "L'académie d'État médicale d'Orenbourg": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Pharmacie",
        "Stomatologie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État de Penza, l'Institut de médecine": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Médecine préventive"
      ],
      Master: [
        "Applications avancées en médecine préventive",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "La première université d'État médicale de Moscou I.M.Setchenov": {
      Licence: [
        "Médecine générale",
        "Pharmacie",
        "Médecine préventive",
        "Biotechnologie médicale"
      ],
      Master: [
        "Applications avancées en biotechnologie médicale",
        "Recherche en médecine préventive",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en biotechnologie médicale",
        "Études avancées en médecine générale",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État médicale de Perm": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Médecine préventive",
        "Pharmacie"
      ],
      Master: [
        "Recherche avancée en médecine préventive",
        "Applications en pharmacologie",
        "Technologies médicales"
      ],
      Doctorat: [
        "Études en médecine générale",
        "Pharmacologie clinique",
        "Recherche en pédiatrie"
      ]
    },
    "L'académie d'État pharmaceutique de Perm": {
      Licence: [
        "Pharmacie",
        "Chimie pharmaceutique",
        "Biotechnologie",
        "Analyse de médicaments"
      ],
      Master: [
        "Applications avancées en chimie pharmaceutique",
        "Pharmacologie clinique",
        "Recherche en biotechnologie"
      ],
      Doctorat: [
        "Recherche en pharmacologie",
        "Études avancées en biotechnologie",
        "Développement de nouveaux médicaments"
      ]
    },
    "L'université d'État de Pétrozavodsk": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État pharmaceutique de Piatigorsk": {
      Licence: [
        "Pharmacie",
        "Chimie pharmaceutique",
        "Analyse de médicaments",
        "Biotechnologie"
      ],
      Master: [
        "Recherche en pharmacologie clinique",
        "Biotechnologie pharmaceutique avancée",
        "Applications en chimie pharmaceutique"
      ],
      Doctorat: [
        "Études avancées en pharmacologie",
        "Recherche en biotechnologie pharmaceutique",
        "Développement pharmaceutique innovant"
      ]
    },
    "L'université russe nationale scientifique médicale N.I.Pirogov": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Stomatologie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en stomatologie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en biotechnologie médicale",
        "Pharmacologie appliquée"
      ]
    },
    "L'université russe de l'amitié des peuples": {
      Licence: [
        "Médecine générale",
        "Pharmacie",
        "Biotechnologie médicale",
        "Médecine dentaire"
      ],
      Master: [
        "Médecine internationale et développement",
        "Biotechnologie médicale avancée",
        "Recherche en médecine préventive"
      ],
      Doctorat: [
        "Recherche en technologies médicales",
        "Études avancées en biotechnologie",
        "Médecine clinique appliquée"
      ]
    },
    "L'université d'État médicale de Rostov": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Stomatologie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en stomatologie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en pédiatrie",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale de Riazan I.P.Pavlov": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Applications en pharmacologie",
        "Recherche en médecine dentaire"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en pharmacologie clinique",
        "Technologies médicales innovantes"
      ]
    } ,
    ////////////////////////////
        "L'université d'État médicale de Samara": {
          Licence: [
            "Médecine générale",
            "Pédiatrie",
            "Pharmacie",
            "Stomatologie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en pédiatrie",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie appliquée"
          ]
        },
        "L'institut de médecine 'Reaviz' de Samara": {
          Licence: [
            "Médecine générale",
            "Pharmacie",
            "Médecine dentaire",
            "Réhabilitation médicale"
          ],
          Master: [
            "Applications avancées en réhabilitation",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en réhabilitation",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie d'État chimique et pharmaceutique de Saint-Pétersbourg": {
          Licence: [
            "Pharmacie",
            "Chimie pharmaceutique",
            "Biotechnologie",
            "Analyse de médicaments"
          ],
          Master: [
            "Recherche en pharmacologie clinique",
            "Biotechnologie pharmaceutique avancée",
            "Applications en chimie pharmaceutique"
          ],
          Doctorat: [
            "Études avancées en pharmacologie",
            "Recherche en biotechnologie pharmaceutique",
            "Développement pharmaceutique innovant"
          ]
        },
        "L'université d'État médicale de Saint-Pétersbourg I.P.Pavlov": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pédiatrie",
            "Pharmacie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en pédiatrie",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État pédiatrique et médicale de Saint-Pétersbourg": {
          Licence: [
            "Pédiatrie",
            "Médecine générale",
            "Pharmacie",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en pédiatrie",
            "Recherche en médecine préventive",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en pédiatrie",
            "Recherche en médecine générale",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État de Saint-Pétersbourg, 'la Faculté de médecine'": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pharmacie",
            "Biotechnologie médicale"
          ],
          Master: [
            "Recherche en biotechnologie médicale",
            "Applications avancées en médecine préventive",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en biotechnologie",
            "Recherche en médecine générale",
            "Pharmacologie appliquée"
          ]
        },
        "L'institut médical et technique de Saint-Pétersbourg": {
          Licence: [
            "Technologies médicales",
            "Réhabilitation médicale",
            "Biotechnologie",
            "Gestion des soins de santé"
          ],
          Master: [
            "Applications avancées en technologies médicales",
            "Recherche en réhabilitation",
            "Gestion stratégique des soins de santé"
          ],
          Doctorat: [
            "Études avancées en biotechnologie médicale",
            "Recherche en technologies médicales",
            "Gestion des systèmes de santé"
          ]
        },
        
//////////////////////
    "L'université d'État médicale de Saratov V.I.Razoumovsky": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Pharmacie",
        "Stomatologie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale du nord, Arkhangelsk": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Applications avancées en médecine préventive",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'université fédérale de nord-est M.K.Ammosov, l'institut de médecine": {
      Licence: [
        "Médecine générale",
        "Pédiatrie",
        "Pharmacie",
        "Médecine préventive"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale de nord-ouest I.I.Metchnikov": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État du Nord médicale de Ossétie": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Applications avancées en médecine préventive",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale sibérienne": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en pédiatrie",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Recherche en médecine générale",
        "Études avancées en stomatologie",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État médicale de Smolensk": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale de Stavropol": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'académie d'État médicale de Tver": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    "L'université d'État médicale du Pacifique": {
      Licence: [
        "Médecine générale",
        "Médecine dentaire",
        "Pédiatrie",
        "Pharmacie"
      ],
      Master: [
        "Médecine préventive avancée",
        "Recherche en médecine dentaire",
        "Pharmacologie clinique"
      ],
      Doctorat: [
        "Études avancées en médecine générale",
        "Recherche en médecine préventive",
        "Pharmacologie appliquée"
      ]
    },
    //////////////////////////////////:


        "L'université d'État de Toula, l'Institut de médecine": {
          Licence: [
            "Médecine générale",
            "Pédiatrie",
            "Pharmacie",
            "Stomatologie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en pédiatrie",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie d'État médicale de Tioumen": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pharmacie",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État d'Oulianovsk, l'Institut de la médecine et l'écologie d'Oulianovsk (ULGU)": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pédiatrie",
            "Écologie médicale"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en écologie médicale",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en écologie médicale",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médicale d'Oural (Ekaterinbourg)": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pédiatrie",
            "Pharmacie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État de la Tchétchénie, 'la Faculté de médecine'": {
          Licence: [
            "Médecine générale",
            "Pédiatrie",
            "Médecine dentaire",
            "Pharmacie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie appliquée"
          ]
        },
        "L'académie d'État médicale de Tchita": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pédiatrie",
            "Médecine préventive"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en pédiatrie",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine dentaire",
            "Pharmacologie appliquée"
          ]
        },
        "L'institut de médecine de Chkalovsk": {
          Licence: [
            "Médecine générale",
            "Pédiatrie",
            "Pharmacie",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en pédiatrie",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Recherche en médecine générale",
            "Études avancées en stomatologie",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État de la Tchouvachie, 'la Faculté de médecine'": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pédiatrie",
            "Médecine préventive"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médicale sud d'Oural": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pédiatrie",
            "Pharmacie"
          ],
          Master: [
            "Médecine préventive avancée",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },
        "L'université d'État médicale d'Iaroslavl": {
          Licence: [
            "Médecine générale",
            "Médecine dentaire",
            "Pédiatrie",
            "Pharmacie"
          ],
          Master: [
            "Applications avancées en médecine préventive",
            "Recherche en médecine dentaire",
            "Pharmacologie clinique"
          ],
          Doctorat: [
            "Études avancées en médecine générale",
            "Recherche en médecine préventive",
            "Pharmacologie appliquée"
          ]
        },

/////////////////////////////


  "L'université d'État agraire d'Altaï": {
    Licence: [
      "Agronomie",
      "Économie agricole",
      "Technologies agroalimentaires",
      "Gestion des ressources naturelles"
    ],
    Master: [
      "Gestion durable en agriculture",
      "Technologies innovantes en agroalimentaire",
      "Recherche en économie rurale"
    ],
    Doctorat: [
      "Études avancées en agronomie",
      "Recherche en gestion des ressources naturelles",
      "Économie des systèmes agricoles"
    ]
  },
  "L'université d'État agraire de la Bachkirie": {
    Licence: [
      "Agriculture et élevage",
      "Technologies alimentaires",
      "Écologie et gestion environnementale",
      "Mécanisation agricole"
    ],
    Master: [
      "Applications avancées en technologies alimentaires",
      "Gestion environnementale durable",
      "Recherche en mécanisation agricole"
    ],
    Doctorat: [
      "Études avancées en agriculture durable",
      "Recherche en écologie rurale",
      "Technologies innovantes en production agricole"
    ]
  },
  "L'Académie d'État d'Agriculture du Briansk": {
    Licence: [
      "Agronomie",
      "Technologies agro-industrielles",
      "Gestion des entreprises agricoles",
      "Économie rurale"
    ],
    Master: [
      "Gestion stratégique des entreprises agricoles",
      "Technologies avancées en agro-industrie",
      "Recherche en économie rurale"
    ],
    Doctorat: [
      "Études avancées en agronomie",
      "Recherche en gestion des entreprises agricoles",
      "Économie des systèmes agro-industriels"
    ]
  },
  "L'Académie d'État d'Agriculture de la Bouriatie V.P.Filippov": {
    Licence: [
      "Agriculture et élevage",
      "Technologies agroalimentaires",
      "Gestion des ressources naturelles",
      "Écologie rurale"
    ],
    Master: [
      "Applications avancées en gestion des ressources naturelles",
      "Recherche en technologies agroalimentaires",
      "Gestion durable en agriculture"
    ],
    Doctorat: [
      "Études avancées en écologie rurale",
      "Recherche en agriculture durable",
      "Technologies innovantes en agroalimentaire"
    ]
  },

  //////////////////////////////

    "L'université d'État agraire d'Extrême Orient": {
      Licence: [
        "Agronomie",
        "Technologies agroalimentaires",
        "Gestion des ressources naturelles",
        "Économie agricole"
      ],
      Master: [
        "Gestion durable en agriculture",
        "Technologies innovantes en agroalimentaire",
        "Recherche en économie rurale"
      ],
      Doctorat: [
        "Études avancées en agronomie",
        "Recherche en gestion des ressources naturelles",
        "Économie des systèmes agricoles"
      ]
    },
    "L'Académie d'État d'Agriculture d'Irkoutsk": {
      Licence: [
        "Agriculture et élevage",
        "Technologies alimentaires",
        "Écologie et gestion environnementale",
        "Mécanisation agricole"
      ],
      Master: [
        "Applications avancées en technologies alimentaires",
        "Gestion environnementale durable",
        "Recherche en mécanisation agricole"
      ],
      Doctorat: [
        "Études avancées en agriculture durable",
        "Recherche en écologie rurale",
        "Technologies innovantes en production agricole"
      ]
    },
    "L'Académie d'État d'Agriculture d'Ijevsk": {
      Licence: [
        "Agronomie",
        "Technologies agro-industrielles",
        "Gestion des entreprises agricoles",
        "Économie rurale"
      ],
      Master: [
        "Gestion stratégique des entreprises agricoles",
        "Technologies avancées en agro-industrie",
        "Recherche en économie rurale"
      ],
      Doctorat: [
        "Études avancées en agronomie",
        "Recherche en gestion des entreprises agricoles",
        "Économie des systèmes agro-industriels"
      ]
    },
////////////////////////////

  "L'université d'État agraire du Kabardino-Balkarie V.M.Kokov": {
    Licence: [
      "Agronomie de base",
      "Technologies agroalimentaires",
      "Gestion des ressources naturelles",
      "Économie agricole"
    ],
    Master: [
      "Gestion durable en agriculture",
      "Innovation agro-technologique",
      "Recherche en agroécologie"
    ],
    Doctorat: [
      "Études avancées en agronomie",
      "Recherche en gestion des exploitations agricoles",
      "Développement des systèmes agricoles"
    ]
  },
  "L'université d'État agraire de Kazan": {
    Licence: [
      "Agronomie",
      "Agroalimentaire",
      "Mécanisation agricole",
      "Gestion des exploitations agricoles"
    ],
    Master: [
      "Technologies avancées en agroalimentaire",
      "Gestion intégrée des ressources agricoles",
      "Économie agro-industrielle"
    ],
    Doctorat: [
      "Recherche en agronomie",
      "Développement durable et écologie agricole",
      "Innovation en agro-technologie"
    ]
  },
  "L'université d'État agraire de Kuban": {
    Licence: [
      "Agronomie",
      "Technologies agricoles",
      "Agro-industrie",
      "Gestion des ressources naturelles"
    ],
    Master: [
      "Gestion durable en agriculture",
      "Technologies agro-industrielles avancées",
      "Recherche en agroéconomie"
    ],
    Doctorat: [
      "Études avancées en agronomie",
      "Recherche en gestion des ressources naturelles",
      "Innovation en systèmes agricoles"
    ]
  },

  ////////////////////////////

    "L'université d'État agraire Mitchourin": {
      Licence: [
        "Agronomie de base",
        "Sciences végétales et du sol",
        "Technologies agroalimentaires",
        "Économie agricole"
      ],
      Master: [
        "Gestion durable des exploitations agricoles",
        "Innovations en agroalimentaire",
        "Recherche en agronomie appliquée"
      ],
      Doctorat: [
        "Études avancées en agronomie",
        "Recherche en écologie agricole",
        "Innovation en systèmes de production agricole"
      ]
    },
    "L'Académie d'État d'Agriculture de Nizhniy Novrogod": {
      Licence: [
        "Agronomie",
        "Technologies agro-industrielles",
        "Gestion des entreprises agricoles",
        "Économie rurale"
      ],
      Master: [
        "Gestion stratégique agricole",
        "Technologies avancées en agro-industrie",
        "Recherche en économie rurale"
      ],
      Doctorat: [
        "Recherche en agronomie",
        "Études avancées en gestion agricole",
        "Innovation en systèmes agro-industriels"
      ]
    },
    "L'université d'État agraire de Novosibirsk": {
      Licence: [
        "Agronomie",
        "Biotechnologie agricole",
        "Économie et gestion agricole",
        "Sciences du sol et de l'eau"
      ],
      Master: [
        "Techniques modernes en agroalimentaire",
        "Gestion durable des ressources naturelles",
        "Recherche en biotechnologies agricoles"
      ],
      Doctorat: [
        "Études avancées en agronomie intégrée",
        "Recherche en technologies agricoles",
        "Innovation en systèmes de production durable"
      ]
    },

    ///////////

      "L'université d'État agraire d'Omsk": {
        Licence: [
          "Agronomie",
          "Technologies agroalimentaires",
          "Gestion des ressources naturelles",
          "Économie agricole"
        ],
        Master: [
          "Gestion durable en agriculture",
          "Technologies innovantes en agroalimentaire",
          "Recherche en économie rurale"
        ],
        Doctorat: [
          "Études avancées en agronomie",
          "Recherche en gestion des ressources naturelles",
          "Économie des systèmes agricoles"
        ]
      },
      "L'université d'État agraire d'Orenbourg": {
        Licence: [
          "Agriculture et élevage",
          "Technologies alimentaires",
          "Écologie et gestion environnementale",
          "Mécanisation agricole"
        ],
        Master: [
          "Applications avancées en technologies alimentaires",
          "Gestion environnementale durable",
          "Recherche en mécanisation agricole"
        ],
        Doctorat: [
          "Études avancées en agriculture durable",
          "Recherche en écologie rurale",
          "Technologies innovantes en production agricole"
        ]
      },
      "L'Académie d'État d'Agriculture de Penza": {
        Licence: [
          "Agronomie",
          "Technologies agro-industrielles",
          "Gestion des entreprises agricoles",
          "Économie rurale"
        ],
        Master: [
          "Gestion stratégique des entreprises agricoles",
          "Technologies avancées en agro-industrie",
          "Recherche en économie rurale"
        ],
        Doctorat: [
          "Études avancées en agronomie",
          "Recherche en gestion des entreprises agricoles",
          "Économie des systèmes agro-industriels"
        ]
      },


      ////////////////////////
        "L'Académie d'État d'Agriculture de Perm l'académicien Pryanichnikov": {
          Licence: [
            "Agronomie",
            "Technologies agroalimentaires",
            "Gestion des ressources naturelles",
            "Économie agricole"
          ],
          Master: [
            "Gestion durable en agriculture",
            "Technologies innovantes en agroalimentaire",
            "Recherche en économie rurale"
          ],
          Doctorat: [
            "Études avancées en agronomie",
            "Recherche en gestion des ressources naturelles",
            "Économie des systèmes agricoles"
          ]
        },
        "L'Académie d'État maritime d'Agriculture": {
          Licence: [
            "Agriculture maritime",
            "Technologies aquacoles",
            "Gestion des ressources marines",
            "Économie maritime"
          ],
          Master: [
            "Applications avancées en aquaculture",
            "Gestion durable des ressources marines",
            "Recherche en économie maritime"
          ],
          Doctorat: [
            "Études avancées en aquaculture",
            "Recherche en gestion des écosystèmes marins",
            "Innovation en technologies maritimes"
          ]
        },
        "L'académie d'État de la construction d'équipement agricole du Rostov": {
          Licence: [
            "Conception d'équipement agricole",
            "Technologies agro-industrielles",
            "Gestion des systèmes mécaniques",
            "Économie industrielle"
          ],
          Master: [
            "Applications avancées en construction mécanique",
            "Recherche en technologies agro-industrielles",
            "Gestion stratégique des systèmes agricoles"
          ],
          Doctorat: [
            "Études avancées en ingénierie agricole",
            "Recherche en conception d'équipement",
            "Innovation en systèmes mécaniques agricoles"
          ]
        },
        "L'université russe d'État agraire K.A.Timiryazev": {
          Licence: [
            "Agronomie",
            "Biotechnologie agricole",
            "Économie et gestion agricole",
            "Sciences du sol et de l'eau"
          ],
          Master: [
            "Techniques modernes en agroalimentaire",
            "Gestion durable des ressources naturelles",
            "Recherche en biotechnologies agricoles"
          ],
          Doctorat: [
            "Études avancées en agronomie intégrée",
            "Recherche en technologies agricoles",
            "Innovation en systèmes de production durable"
          ]
        },

    /////////////////////////////////////

      "L'université d'État agrotechnologique de Riazan P.A.Kostitchev": {
        Licence: [
          "Agronomie",
          "Médecine vétérinaire",
          "Biotechnologie",
          "Technologies agroalimentaires"
        ],
        Master: [
          "Gestion durable en agriculture",
          "Recherche en biotechnologie agricole",
          "Technologies avancées en agroalimentaire"
        ],
        Doctorat: [
          "Études avancées en agronomie",
          "Recherche en médecine vétérinaire",
          "Innovation en systèmes agricoles"
        ]
      },
      "L'université d'État agraire de Saint-Pétersbourg": {
        Licence: [
          "Agronomie",
          "Horticulture",
          "Technologies agroalimentaires",
          "Économie agricole"
        ],
        Master: [
          "Gestion durable des ressources agricoles",
          "Recherche en horticulture avancée",
          "Technologies innovantes en agroalimentaire"
        ],
        Doctorat: [
          "Études avancées en agronomie",
          "Recherche en gestion des ressources naturelles",
          "Innovation en systèmes agricoles"
        ]
      },
      "L'Académie d'État d'Agriculture de Samara": {
        Licence: [
          "Agronomie",
          "Protection des plantes",
          "Technologies agroalimentaires",
          "Économie rurale"
        ],
        Master: [
          "Gestion stratégique des entreprises agricoles",
          "Recherche en protection des plantes",
          "Technologies avancées en agroalimentaire"
        ],
        Doctorat: [
          "Études avancées en agronomie",
          "Recherche en gestion agricole",
          "Innovation en systèmes agro-industriels"
        ]
      },
  ////////////////////////////////////////

    "L'université d'État agraire du nord d'Oural": {
      Licence: [
        "Agronomie",
        "Technologies agroalimentaires",
        "Gestion des ressources naturelles",
        "Économie agricole"
      ],
      Master: [
        "Gestion durable en agriculture",
        "Technologies innovantes en agroalimentaire",
        "Recherche en économie rurale"
      ],
      Doctorat: [
        "Études avancées en agronomie",
        "Recherche en gestion des ressources naturelles",
        "Économie des systèmes agricoles"
      ]
    },
    "L'université d'État agraire de Stavropol": {
      Licence: [
        "Agronomie",
        "Médecine vétérinaire",
        "Technologies agroalimentaires",
        "Économie agricole"
      ],
      Master: [
        "Gestion stratégique des entreprises agricoles",
        "Recherche en médecine vétérinaire",
        "Technologies avancées en agroalimentaire"
      ],
      Doctorat: [
        "Études avancées en agronomie",
        "Recherche en gestion agricole",
        "Innovation en systèmes agro-industriels"
      ]
    },
    "L'Académie d'État d'Agriculture d'Oulyanovsk P.A.Stolypin": {
      Licence: [
        "Agronomie",
        "Protection des plantes",
        "Technologies agroalimentaires",
        "Économie rurale"
      ],
      Master: [
        "Gestion durable des exploitations agricoles",
        "Recherche en protection des plantes",
        "Technologies avancées en agroalimentaire"
      ],
      Doctorat: [
        "Études avancées en agronomie",
        "Recherche en gestion agricole",
        "Innovation en systèmes agro-industriels"
      ]
    },
    ////////////////////////////////////////////////
  
      "L'université d'État agraire de Volgograd": {
        Licence: [
          "Agronomie",
          "Technologies agroalimentaires",
          "Gestion des ressources naturelles",
          "Économie agricole"
        ],
        Master: [
          "Gestion durable en agriculture",
          "Technologies innovantes en agroalimentaire",
          "Recherche en économie rurale"
        ],
        Doctorat: [
          "Études avancées en agronomie",
          "Recherche en gestion des ressources naturelles",
          "Économie des systèmes agricoles"
        ]
      },
      "L'université d'État agraire de Voronej Pierre le Grand": {
        Licence: [
          "Agronomie",
          "Sciences des sols",
          "Technologies agro-industrielles",
          "Économie agricole"
        ],
        Master: [
          "Recherche en agrochimie",
          "Gestion des ressources naturelles",
          "Technologies avancées en agro-industrie"
        ],
        Doctorat: [
          "Études avancées en agronomie",
          "Recherche en écologie agricole",
          "Innovation en systèmes agro-industriels"
        ]
      },
      "L'Académie d'État d'Agriculture d'Yakoutsk": {
        Licence: [
          "Agriculture et élevage",
          "Technologies agroalimentaires",
          "Gestion des ressources naturelles",
          "Économie rurale"
        ],
        Master: [
          "Applications avancées en gestion des ressources naturelles",
          "Recherche en technologies agroalimentaires",
          "Gestion durable en agriculture"
        ],
        Doctorat: [
          "Études avancées en écologie rurale",
          "Recherche en agriculture durable",
          "Technologies innovantes en agroalimentaire"
        ]
      },
 ///////////////////////////////
              
          
    
      
              
          
          
      
      
  
  
  
        
          
      
      
  
          
          
    




    
  


////////////////////////////////////////

            


        // Ajoutez d'autres universités et leurs niveaux ici
    }

};

