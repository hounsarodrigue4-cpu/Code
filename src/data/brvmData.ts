import { BRVMIndex, BRVMStockLeader, CourseModule } from '../types';

export const BRVM_INDICES: BRVMIndex[] = [
  {
    symbol: 'BRVM-C',
    name: 'BRVM Composite',
    value: 284.65,
    change: +0.72,
    isPositive: true,
    volume: '1.42 Md FCFA',
    date: 'Séance du jour',
  },
  {
    symbol: 'BRVM-30',
    name: 'BRVM 30',
    value: 143.10,
    change: +0.85,
    isPositive: true,
    volume: '1.18 Md FCFA',
    date: 'Séance du jour',
  },
  {
    symbol: 'BRVM-PRES',
    name: 'BRVM Prestige',
    value: 119.45,
    change: -0.18,
    isPositive: false,
    volume: '240 M FCFA',
    date: 'Séance du jour',
  },
  {
    symbol: 'BRVM-10',
    name: 'Indice BRVM 10',
    value: 214.50,
    change: +1.20,
    isPositive: true,
    volume: '890 M FCFA',
    date: 'Séance du jour',
  },
];

export const BRVM_LEADERS: BRVMStockLeader[] = [
  {
    rank: 1,
    ticker: 'SNTS',
    name: 'Sonatel',
    country: 'Sénégal',
    countryFlag: '🇸🇳',
    sector: 'Télécom',
    price: 21500,
    ytdReturn: 8.5,
    dividendYield: 8.5,
    stabilityScore: 96,
    perRatio: 9.8,
    description: 'Champion de la croissance, leader télécom & fintech (Orange Money) en Afrique de l\'Ouest.',
    highlight: 'Pilier historique de distribution de dividendes réguliers depuis plus de 20 ans.',
    marketCap: '2 150 Md FCFA',
  },
  {
    rank: 2,
    ticker: 'CBIBF',
    name: 'Coris Bank Int.',
    country: 'Burkina Faso',
    countryFlag: '🇧🇫',
    sector: 'Banque',
    price: 10450,
    ytdReturn: 4.2,
    dividendYield: 7.9,
    stabilityScore: 92,
    perRatio: 7.4,
    description: 'Résilience historique et expansion régionale panafricaine soutenue dans l\'UEMOA.',
    highlight: 'Modèle de rentabilité financière (ROE > 20%) et gestion exemplaire du risque crédit.',
    marketCap: '335 Md FCFA',
  },
  {
    rank: 3,
    ticker: 'ORAC',
    name: 'Orange CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Télécom',
    price: 13900,
    ytdReturn: 2.8,
    dividendYield: 9.1,
    stabilityScore: 94,
    perRatio: 10.2,
    description: 'Leader des télécoms en Côte d\'Ivoire avec une politique de distribution de dividende très attractive.',
    highlight: 'Forte génération de cash-flow libre et position hégémonique sur la data mobile et la fibre.',
    marketCap: '2 090 Md FCFA',
  },
  {
    rank: 4,
    ticker: 'SGCB',
    name: 'SGBCI (Société Générale)',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Banque',
    price: 18750,
    ytdReturn: 6.5,
    dividendYield: 7.5,
    stabilityScore: 90,
    perRatio: 8.1,
    description: 'Première banque de Côte d\'Ivoire par le bilan, solidité institutionnelle remarquable.',
    highlight: 'Portefeuille de clients corporate de premier plan et croissance continue des dépôts.',
    marketCap: '580 Md FCFA',
  },
  {
    rank: 5,
    ticker: 'ONABF',
    name: 'Onatel BF',
    country: 'Burkina Faso',
    countryFlag: '🇧🇫',
    sector: 'Télécom',
    price: 2450,
    ytdReturn: 3.1,
    dividendYield: 10.2,
    stabilityScore: 86,
    perRatio: 6.9,
    description: 'Opérateur historique au Burkina Faso, réputé pour son très fort rendement de distribution.',
    highlight: 'Rendement en dividende supérieur à 10% annuel moyen réinvestissable.',
    marketCap: '166 Md FCFA',
  },
  {
    rank: 6,
    ticker: 'BOAB',
    name: 'BOA Bénin',
    country: 'Bénin',
    countryFlag: '🇧🇯',
    sector: 'Banque',
    price: 6800,
    ytdReturn: 5.4,
    dividendYield: 8.2,
    stabilityScore: 85,
    perRatio: 6.5,
    description: 'Fleuron du groupe Bank of Africa, leader bancaire dynamique sur le segment des PME béninoises.',
    highlight: 'Dividendes stables et excellente maîtrise des créances en souffrance.',
    marketCap: '136 Md FCFA',
  },
  {
    rank: 7,
    ticker: 'TTLC',
    name: 'TotalEnergies CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Énergie',
    price: 2300,
    ytdReturn: 4.8,
    dividendYield: 8.7,
    stabilityScore: 88,
    perRatio: 8.4,
    description: 'Premier réseau de distribution de carburants et lubrifiants en Côte d\'Ivoire.',
    highlight: 'Activité stable liée à la consommation énergétique quotidienne incompressible.',
    marketCap: '145 Md FCFA',
  },
  {
    rank: 8,
    ticker: 'CIEC',
    name: 'CIE (Compagnie Ivoirienne d\'Électricité)',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Énergie',
    price: 2150,
    ytdReturn: 3.9,
    dividendYield: 8.0,
    stabilityScore: 87,
    perRatio: 7.8,
    description: 'Monopole de concession de service public pour la fourniture et distribution électrique.',
    highlight: 'Visibilité totale sur les revenus et politique de dividende pérenne.',
    marketCap: '120 Md FCFA',
  },
  {
    rank: 9,
    ticker: 'PALC',
    name: 'Palmci',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Agro-industrie',
    price: 6750,
    ytdReturn: -1.2,
    dividendYield: 11.4,
    stabilityScore: 80,
    perRatio: 5.8,
    description: 'Leader de l\'huile de palme en Afrique de l\'Ouest, filiale du groupe SIFCA.',
    highlight: 'Forte rentabilité liée au cycle des matières premières et dividendes massifs.',
    marketCap: '175 Md FCFA',
  },
  {
    rank: 10,
    ticker: 'NSBC',
    name: 'NSIA Banque CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Banque',
    price: 6100,
    ytdReturn: 7.2,
    dividendYield: 7.6,
    stabilityScore: 84,
    perRatio: 7.1,
    description: 'Banque universelle ivoirienne adossée à un groupe bancassurance de référence.',
    highlight: 'Synergies bancassurance et digitalisation accrue des opérations.',
    marketCap: '152 Md FCFA',
  },
  {
    rank: 11,
    ticker: 'ECOC',
    name: 'Ecobank CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Banque',
    price: 7400,
    ytdReturn: 9.3,
    dividendYield: 7.8,
    stabilityScore: 89,
    perRatio: 7.9,
    description: 'Filiale ivoirienne du mastodonte panafricain Ecobank Transnational Inc.',
    highlight: 'Performances financières solides et croissance soutenue de la banque de détail.',
    marketCap: '410 Md FCFA',
  },
  {
    rank: 12,
    ticker: 'STBC',
    name: 'SITAB',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Industrie',
    price: 6900,
    ytdReturn: 1.5,
    dividendYield: 12.1,
    stabilityScore: 78,
    perRatio: 5.2,
    description: 'Société Ivoirienne des Tabacs, l\'un des rendements de dividende historiques les plus élevés.',
    highlight: 'Capacité de génération de cash constante malgré les contraintes réglementaires.',
    marketCap: '48 Md FCFA',
  },
  {
    rank: 13,
    ticker: 'SHEC',
    name: 'Vivo Energy CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Énergie',
    price: 890,
    ytdReturn: 2.1,
    dividendYield: 7.1,
    stabilityScore: 82,
    perRatio: 9.0,
    description: 'Distributeur des carburants Shell et services de proximité en stations-service.',
    highlight: 'Modèle économique défensif et implantation stratégique sur les grands axes.',
    marketCap: '54 Md FCFA',
  },
  {
    rank: 14,
    ticker: 'SDCC',
    name: 'SODECI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Énergie',
    price: 5200,
    ytdReturn: 3.4,
    dividendYield: 7.0,
    stabilityScore: 88,
    perRatio: 8.5,
    description: 'Société de Distribution d\'Eau de Côte d\'Ivoire, service d\'utilité publique indispensable.',
    highlight: 'Stabilité exceptionnelle des revenus et faible volatilité du titre.',
    marketCap: '47 Md FCFA',
  },
  {
    rank: 15,
    ticker: 'BOAC',
    name: 'BOA Côte d\'Ivoire',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Banque',
    price: 7200,
    ytdReturn: 6.8,
    dividendYield: 8.1,
    stabilityScore: 86,
    perRatio: 6.8,
    description: 'Succursale dynamique du réseau BOA avec une forte progression de ses parts de marché.',
    highlight: 'Bonne qualité du portefeuille de crédits et distribution régulière.',
    marketCap: '144 Md FCFA',
  },
  {
    rank: 16,
    ticker: 'BNBC',
    name: 'Bernabé CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Distribution',
    price: 1100,
    ytdReturn: -0.8,
    dividendYield: 6.9,
    stabilityScore: 76,
    perRatio: 8.2,
    description: 'Leader de la distribution de quincaillerie, matériaux de construction et outillage.',
    highlight: 'Bénéficiaire direct du boom de la construction et des infrastructures en Côte d\'Ivoire.',
    marketCap: '24 Md FCFA',
  },
  {
    rank: 17,
    ticker: 'PRSC',
    name: 'Tractafric Motors CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Distribution',
    price: 2200,
    ytdReturn: 4.5,
    dividendYield: 7.4,
    stabilityScore: 79,
    perRatio: 7.6,
    description: 'Concessionnaire automobile et engins de travaux publics de grandes marques internationales.',
    highlight: 'Croissance de la demande en mobilité et véhicules industriels.',
    marketCap: '32 Md FCFA',
  },
  {
    rank: 18,
    ticker: 'NTLC',
    name: 'Nestlé CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Agro-industrie',
    price: 7800,
    ytdReturn: 5.1,
    dividendYield: 9.5,
    stabilityScore: 83,
    perRatio: 7.2,
    description: 'Transformation agroalimentaire (Maggi, Nescafé) rayonnant sur toute la sous-région.',
    highlight: 'Marques incontournables dans le panier de la ménagère ouest-africaine.',
    marketCap: '102 Md FCFA',
  },
  {
    rank: 19,
    ticker: 'UNXC',
    name: 'Uniwax CI',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Industrie',
    price: 430,
    ytdReturn: -2.4,
    dividendYield: 5.5,
    stabilityScore: 70,
    perRatio: 11.5,
    description: 'Fabricant emblématique de véritable pagne Wax africain imprimé à Abidjan.',
    highlight: 'Forte valeur patrimoniale et marque reconnue à l\'international.',
    marketCap: '9 Md FCFA',
  },
  {
    rank: 20,
    ticker: 'SMBC',
    name: 'SMB (Société Multinationale de Bitumes)',
    country: 'Côte d\'Ivoire',
    countryFlag: '🇨🇮',
    sector: 'Énergie',
    price: 11200,
    ytdReturn: 8.9,
    dividendYield: 10.8,
    stabilityScore: 84,
    perRatio: 5.9,
    description: 'Unique raffinerie spécialisée dans la production de bitumes routiers pour l\'Afrique de l\'Ouest.',
    highlight: 'Croissance portée par les plans d\'infrastructures et de routes régionales.',
    marketCap: '54 Md FCFA',
  },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    number: '01',
    title: 'Diagnostic & Mindset Financier',
    subtitle: 'Passer de l\'épargne dormante au capital d\'amorçage',
    shortDesc: 'Déconstruire les mythes de l\'enrichissement rapide et maîtriser la Règle des 30%.',
    category: 'Diagnostic',
    estimatedMinutes: 12,
    iconName: 'school',
    imageSeed: 'finance-mindset',
    heroImage: 'https://picsum.photos/seed/finance-mindset/800/500',
    sections: [
      {
        id: 'sec-1-1',
        title: 'La Réalité Économique du Salarié en Afrique de l\'Ouest',
        content: [
          'Chaque mois, des millions de salariés en zone UEMOA (Abidjan, Dakar, Cotonou, Lomé, Ouagadougou, Bamako) perçoivent leur salaire avec une certitude : l\'inflation grignote leur pouvoir d\'achat de 4% à 7% par an.',
          'Garder son argent uniquement sur un compte courant bancaire ou sous son matelas revient à accepter une perte de valeur programmée. Le livret bancaire classique (rémunéré à 3.5%) ne compense même pas le coût de la vie.',
          'La véritable sécurité financière ne consiste pas à accumuler des liquidités immobiles, mais à acquérir des actifs productifs qui génèrent des dividendes et prennent de la valeur au fil du temps.'
        ],
        callout: {
          title: 'La Règle des 30% du Programme 3.0',
          text: 'Le pilier de ce programme repose sur un principe non négociable : la séquestration stratégique de 30% de vos revenus dès réception de votre virement. Ce n\'est pas une épargne résiduelle (ce qu\'il reste à la fin du mois), c\'est votre priorité d\'investissement n°1.',
          type: 'rule'
        },
        keyTakeaways: [
          {
            icon: 'trending_up',
            title: 'L\'inflation est une taxe silencieuse',
            text: '1 000 000 FCFA laissé dormant perd la moitié de son pouvoir d\'achat en 10 ans sans investissement.'
          },
          {
            icon: 'savings',
            title: 'Payez-vous en premier',
            text: 'Investissez vos 30% dès le jour de paye avant d\'engager la moindre dépense accessoire.'
          }
        ]
      },
      {
        id: 'sec-1-2',
        title: 'L\'Architecture des 3 Piliers',
        content: [
          'Le Programme 3.0 structure vos finances en 3 poches distinctes et étanches :',
          '1. La Poche Vivre (50% max) : Loyer, scolarité, alimentation, factures CIE/SODECI/Senelec, transport.',
          '2. La Poche Liberté & Plaisir (20% max) : Loisirs, famille élargie, imprévus mineurs, célébrations.',
          '3. La Poche Capital & BRVM (30%) : Fonds de sécurité (3 mois de charges) puis investissement boursier mensuel automatisé.'
        ],
        callout: {
          title: 'Citation Clé',
          text: '"L\'indépendance financière n\'est pas un accident. C\'est l\'exécution méticuleuse d\'une stratégie d\'accumulation."',
          type: 'quote'
        }
      }
    ],
    quiz: [
      {
        id: 101,
        question: 'Pourquoi l\'épargne gardée uniquement sur un compte bancaire non rémunéré est-elle dangereuse ?',
        options: [
          'La banque peut fermer à tout moment',
          'L\'inflation érode silencieusement le pouvoir d\'achat de l\'argent chaque année',
          'Les impôts confisquent 50% de l\'épargne',
          'Il n\'y a aucun danger'
        ],
        correctIndex: 1,
        explanation: 'En zone UEMOA, une inflation moyenne de 4% à 6% diminue le pouvoir d\'achat réel de toute somme non investie dans des actifs rentables.'
      },
      {
        id: 102,
        question: 'Selon la méthode Programme 3.0, à quel moment devez-vous prélever vos 30% d\'épargne/investissement ?',
        options: [
          'À la fin du mois, avec ce qui reste après les sorties',
          'Dès la réception du salaire, selon le principe de se payer en premier',
          'Une seule fois par an lors du 13ème mois',
          'Quand les cours de bourse sont au plus bas'
        ],
        correctIndex: 1,
        explanation: 'Se payer en premier garantit la régularité et empêche le salaire d\'être absorbé par les dépenses superflues ou les sollicitations extérieures.'
      },
      {
        id: 103,
        question: 'Quelle est la répartition budgétaire cible du Programme 3.0 ?',
        options: [
          '80% Dépenses / 10% Loisirs / 10% Épargne',
          '50% Besoins vitaux / 20% Loisirs / 30% Capital & Investissement',
          '100% Investissement',
          '30% Besoins vitaux / 50% Loisirs / 20% Épargne'
        ],
        correctIndex: 1,
        explanation: 'La répartition 50/20/30 permet un niveau de vie sain tout en bâtissant une machine financière puissante grâce aux 30% alloués au capital.'
      }
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Fondamentaux de l\'Épargne Stratégique',
    subtitle: 'Bâtir son bouclier financier et éliminer les dettes toxiques',
    shortDesc: 'Comment constituer un fonds de sécurité résilient de 3 à 6 mois avant d\'investir.',
    category: 'Fondamentaux',
    estimatedMinutes: 15,
    iconName: 'savings',
    imageSeed: 'savings-shield',
    heroImage: 'https://picsum.photos/seed/savings-shield/800/500',
    sections: [
      {
        id: 'sec-2-1',
        title: 'Le Fonds de Sécurité : Votre Bouclier Inviolable',
        content: [
          'Avant d\'acheter votre première action à la BRVM, une étape préalable est absolue : la création d\'un Fonds de Sécurité.',
          'Ce fonds doit représenter l\'équivalent de 3 à 6 mois de vos charges incompressibles (loyer, nourriture, électricité, charges familiales). Par exemple, si vos charges mensuelles sont de 250 000 FCFA, votre fonds de sécurité doit atteindre entre 750 000 FCFA et 1 500 000 FCFA.',
          'Pourquoi ? Si un imprévu médical ou professionnel survient, vous ne serez JAMAIS contraint de revendre vos actions BRVM dans l\'urgence ou à perte.'
        ],
        callout: {
          title: 'Où placer son fonds de sécurité ?',
          text: 'Le fonds de sécurité ne doit pas être risqué. Placez-le sur un compte d\'épargne bancaire rémunéré (Livret à 3.5% défiscalisé) ou des OPCVM monétaires liquides auprès d\'une SGI agréée.',
          type: 'insight'
        },
        keyTakeaways: [
          {
            icon: 'shield',
            title: 'Sérénité psychologique',
            text: 'Ne jamais investir en bourse de l\'argent dont on pourrait avoir besoin dans les 12 prochains mois.'
          },
          {
            icon: 'account_balance_wallet',
            title: 'Liquidité immédiate',
            text: 'Le fonds de sécurité doit être retirable en moins de 48 heures sans pénalités.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 201,
        question: 'Combien de mois de charges incompressibles doit idéalement représenter le Fonds de Sécurité ?',
        options: ['1 semaine', '1 mois', '3 à 6 mois', '5 ans'],
        correctIndex: 2,
        explanation: '3 à 6 mois offrent une marge de manœuvre confortable pour absorber tout aléa de la vie sans toucher au portefeuille d\'investissement.'
      },
      {
        id: 202,
        question: 'Pourquoi est-il risqué d\'investir en bourse sans fonds de sécurité préalable ?',
        options: [
          'La bourse refuse les personnes sans compte bloqué',
          'En cas d\'imprévu, on risque de devoir vendre ses actions au mauvais moment et à perte',
          'Les dividendes sont annulés si on n\'a pas de fonds de sécurité',
          'Ce n\'est pas risqué'
        ],
        correctIndex: 1,
        explanation: 'La volatilité à court terme peut survenir. Avoir du cash de secours permet d\'attendre sereinement la maturité des investissements.'
      },
      {
        id: 203,
        question: 'Quel est le support idéal pour loger son fonds de sécurité ?',
        options: [
          'Des cryptomonnaies hautement volatiles',
          'Un livret d\'épargne sécurisé ou un OPCVM monétaire liquide',
          'Des terrains non titrés',
          'Sous forme de billets cachés dans sa voiture'
        ],
        correctIndex: 1,
        explanation: 'Le fonds de sécurité recherche la sécurité du capital et la liquidité instantanée, pas la spéculation.'
      }
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Comprendre la BRVM',
    subtitle: 'Le marché financier régional des 8 pays de l\'UEMOA',
    shortDesc: 'Fonctionnement de la bourse, rôle des SGI, cotations et fiscalité avantageuse.',
    category: 'BRVM',
    estimatedMinutes: 18,
    iconName: 'account_balance',
    imageSeed: 'brvm-trading',
    heroImage: 'https://picsum.photos/seed/brvm-trading/800/500',
    sections: [
      {
        id: 'sec-3-1',
        title: 'Qu\'est-ce que la BRVM ?',
        content: [
          'La Bourse Régionale des Valeurs Mobilières (BRVM) est l\'une des rares bourses au monde commune à 8 États membres : Bénin, Burkina Faso, Côte d\'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal et Togo.',
          'Basée à Abidjan avec des antennes nationales dans chaque capitale, la BRVM permet aux citoyens d\'acheter des parts (actions) des plus grandes entreprises de notre région et des obligations émises par les États et entreprises.',
          'Investir à la BRVM, ce n\'est pas parier dans un casino : c\'est devenir copropriétaire d\'entreprises tangibles que vous utilisez tous les jours (opérateurs télécoms comme Sonatel et Orange, banques comme Coris Bank ou SGBCI, distributeurs d\'énergie comme TotalEnergies ou CIE).'
        ],
        callout: {
          title: 'La Fiscalité BRVM : Un avantage exceptionnel',
          text: 'En zone UEMOA, les plus-values réalisées sur les actions cotées à la BRVM sont totalement exonérées d\'impôt sur le revenu pour les particuliers résidents. Les dividendes d\'actions cotées ne subissent qu\'une retenue à la source très modérée (environ 2% à 7% selon les pays, contre 15% sur les entreprises non cotées).',
          type: 'insight'
        },
        lexiconItems: [
          {
            term: 'Action',
            definition: 'Titre de propriété représentant une fraction du capital d\'une société. Donne droit aux dividendes et aux votes en assemblée générale.'
          },
          {
            term: 'Dividende',
            definition: 'Part du bénéfice net annuel votée par l\'assemblée générale et distribuée directement en cash aux actionnaires sur leur compte SGI.'
          },
          {
            term: 'SGI (Société de Gestion et d\'Intermédiation)',
            definition: 'Courtier agréé par l\'AMF-UMOA, intermédiaire obligatoire pour ouvrir son compte de titres, passer des ordres et encaisser les dividendes.'
          },
          {
            term: 'BRVM Composite',
            definition: 'Indice général qui mesure l\'évolution globale de la capitalisation de toutes les sociétés cotées sur la bourse régionale.'
          }
        ]
      },
      {
        id: 'sec-3-2',
        title: 'Comment se déroule un achat d\'action ?',
        content: [
          '1. Vous ouvrez un compte de titres auprès d\'une SGI agréée (ex: Société Générale Capital Securities, CGF Bourse, BOA Capital, Hudson & Cie, Sirius Capital, EDC Investment, etc.).',
          '2. Vous alimentez votre compte par virement bancaire ou Mobile Money.',
          '3. Vous passez votre ordre d\'achat en ligne ou via l\'application de votre SGI.',
          '4. Vos titres sont sécurisés auprès du Dépositaire Central / Banque de Règlement (DC/BR), garantissant l\'inviolabilité de vos avoirs même en cas de faillite de la SGI.'
        ]
      }
    ],
    quiz: [
      {
        id: 301,
        question: 'Combien de pays composent le marché boursier régional de la BRVM ?',
        options: ['1 seul (Côte d\'Ivoire)', '8 pays de l\'UEMOA', '15 pays de la CEDEAO', '54 pays d\'Afrique'],
        correctIndex: 1,
        explanation: 'La BRVM regroupe les 8 pays de l\'UEMOA utilisant le Franc CFA (XOF) : Bénin, Burkina Faso, Côte d\'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal, Togo.'
      },
      {
        id: 302,
        question: 'Quel est le rôle d\'une SGI (Société de Gestion et d\'Intermédiation) ?',
        options: [
          'Prêter de l\'argent aux salariés',
          'Être l\'intermédiaire officiel agréé pour exécuter les achats et ventes de titres à la BRVM',
          'Imprimer les billets de Franc CFA',
          'Remplacer les banques centrales'
        ],
        correctIndex: 1,
        explanation: 'Seules les SGI agréées ont l\'habilitation légale pour exécuter des ordres de bourse à la BRVM pour le compte des particuliers et institutions.'
      },
      {
        id: 303,
        question: 'Quel est l\'avantage fiscal majeur des actions cotées à la BRVM pour un particulier ?',
        options: [
          'On ne paie aucun impôt sur les plus-values réalisées',
          'On est obligé de donner 40% de ses gains à l\'État',
          'Les dividendes sont bloqués pendant 20 ans',
          'Il n\'y a aucun avantage fiscal'
        ],
        correctIndex: 0,
        explanation: 'Les plus-values sur les actions cotées à la BRVM sont exonérées d\'impôt sur les plus-values mobilières dans l\'espace UEMOA afin d\'encourager l\'actionnariat populaire.'
      }
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'Choisir ses Valeurs & Analyse Fondamentale',
    subtitle: 'Comment sélectionner les champions de votre portefeuille',
    shortDesc: 'Décrypter les ratios essentiels (PER, Rendement du dividende, Solidité du bilan, ROE) et identifier les 20 leaders.',
    category: 'Stratégie',
    estimatedMinutes: 20,
    iconName: 'trending_up',
    imageSeed: 'stock-analysis',
    heroImage: 'https://picsum.photos/seed/stock-analysis/800/500',
    sections: [
      {
        id: 'sec-4-1',
        title: 'L\'Analyse Fondamentale Simplifiée pour les Salariés',
        content: [
          'Investir à la BRVM nécessite de regarder au-delà des fluctuations quotidiennes. L\'analyse fondamentale consiste à évaluer la santé financière intrinsèque d\'une entreprise pour déterminer si son action est valorisée à son juste prix.',
          'Nous nous focalisons sur 4 indicateurs fondamentaux clés :',
          '1. La Solidité du Bilan : Niveau d\'endettement maîtrisé et capitaux propres robustes.',
          '2. La Croissance des Bénéfices : Résultat net en progression continue sur 3 à 5 ans.',
          '3. Le Rendement du Dividende (Dividend Yield) : Dividende net versé rapporté au cours d\'achat de l\'action (idéalement entre 6% et 10% net à la BRVM).',
          '4. Le PER (Price Earning Ratio) : Nombre d\'années de bénéfices que vaut l\'entreprise. Un PER inférieur à 10 ou 12 sur la BRVM indique souvent une valeur à cours attractif.'
        ],
        callout: {
          title: 'Le Top 5 Stratégique du Programme 3.0',
          text: 'Les entreprises comme Sonatel (SNTS), Orange CI (ORAC), Coris Bank (CBIBF) et SGBCI (SGCB) combinent une forte génération de trésorerie, un fossé concurrentiel solide ("moat") et un historique de distribution ininterrompu.',
          type: 'insight'
        },
        keyTakeaways: [
          {
            icon: 'insights',
            title: 'Le Shift vers la Tech',
            text: 'Les télécoms profitent de l\'explosion de la data mobile et des services financiers (Mobile Money).'
          },
          {
            icon: 'bolt',
            title: 'L\'Effet Halo Énergétique & Utilités',
            text: 'L\'énergie et l\'eau (TotalEnergies, CIE, SODECI) offrent une stabilité structurelle décorrélée des crises.'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 401,
        question: 'Qu\'indique un Rendement du Dividende (Dividend Yield) de 9% ?',
        options: [
          'L\'action a baissé de 9%',
          'Pour 100 000 FCFA investis dans l\'action au cours actuel, vous recevez environ 9 000 FCFA de cash chaque année',
          'Vous devez payer 9% de frais à la banque',
          'L\'entreprise va fermer dans 9 ans'
        ],
        correctIndex: 1,
        explanation: 'Le rendement du dividende mesure le revenu annuel en espèces que génère chaque franc CFA investi dans l\'action.'
      },
      {
        id: 402,
        question: 'Qu\'est-ce que le PER (Price-to-Earnings Ratio) ?',
        options: [
          'Le prix d\'une action divisé par le bénéfice net par action',
          'Le pourcentage d\'impôts payé par la société',
          'Le salaire du directeur général',
          'La dette totale de l\'État'
        ],
        correctIndex: 0,
        explanation: 'Le PER permet de mesurer la cherté d\'une action. Un PER raisonnable avec de bons bénéfices signale une opportunité d\'achat.'
      },
      {
        id: 403,
        question: 'Pourquoi les entreprises à "fossé concurrentiel" (Monopole/Leader) sont privilégiées par le Programme 3.0 ?',
        options: [
          'Parce qu\'elles ont le pouvoir d\'ajuster leurs prix et de protéger leurs marges face à l\'inflation',
          'Parce qu\'elles ne paient jamais de dividendes',
          'Parce qu\'elles sont réservées aux banques',
          'Parce qu\'elles ne peuvent jamais voir leur cours fluctuer'
        ],
        correctIndex: 0,
        explanation: 'Les leaders comme Sonatel ou CIE disposent d\'une clientèle captive et de barrières à l\'entrée qui protègent durablement la rentabilité.'
      }
    ]
  },
  {
    id: 5,
    number: '05',
    title: 'Investissement Programmé & Diversification',
    subtitle: 'La puissance des achats mensuels (DCA) en Franc CFA',
    shortDesc: 'Comment automatiser ses achats chaque mois sans stresser face à la volatilité.',
    category: 'Action',
    estimatedMinutes: 14,
    iconName: 'calculate',
    imageSeed: 'compound-interest',
    heroImage: 'https://picsum.photos/seed/compound-interest/800/500',
    sections: [
      {
        id: 'sec-5-1',
        title: 'La Méthode DCA (Dollar Cost Averaging) Adaptée au Salaire',
        content: [
          'Tenter de "prédire" le point le plus bas de la bourse est la première cause d\'échec des débutants.',
          'La méthode du Programme 3.0 repose sur le DCA : investir une somme fixe (ex: 100 000 FCFA ou 150 000 FCFA) le même jour chaque mois, que le marché monte ou qu\'il baisse.',
          'Quand le marché baisse, votre somme fixe achète PLUS d\'actions à prix soldé. Quand le marché monte, la valeur de votre portefeuille global progresse. Sur 5 à 10 ans, le coût moyen d\'acquisition est lissé et le rendement est optimisé.'
        ],
        callout: {
          title: 'La Règle de Diversification Sectorielle',
          text: 'Ne mettez jamais tous vos œufs dans le même panier. Un portefeuille équilibré à la BRVM répartit le capital sur au moins 3 à 4 secteurs : Télécoms (35%), Banques (30%), Énergie/Utilités (20%), Agro-industrie/Consommation (15%).',
          type: 'rule'
        }
      }
    ],
    quiz: [
      {
        id: 501,
        question: 'En quoi consiste la stratégie du DCA (Investissement Programmé Régulier) ?',
        options: [
          'Vendre tout son portefeuille dès que la bourse baisse',
          'Investir un montant fixe chaque mois de manière automatique, quel que soit le niveau des cours',
          'Acheter des actions uniquement le 31 décembre',
          'Attendre 10 ans sans rien faire'
        ],
        correctIndex: 1,
        explanation: 'Le DCA supprime l\'émotion, évite d\'essayer de deviner le marché et lisse le prix de revient global de vos actions.'
      },
      {
        id: 502,
        question: 'Que faut-il faire de ses dividendes perçus pendant la phase d\'accumulation (les 5 à 10 premières années) ?',
        options: [
          'Les dépenser immédiatement en sorties de week-end',
          'Les réinvestir immédiatement pour acheter de nouvelles actions et déclencher l\'effet boule de neige',
          'Les laisser sur le compte sans rien faire',
          'Les donner à sa banque'
        ],
        correctIndex: 1,
        explanation: 'Le réinvestissement des dividendes est le moteur principal des intérêts composés, multipliant la valeur du patrimoine sur la durée.'
      },
      {
        id: 503,
        question: 'Combien de secteurs différents est-il recommandé d\'avoir dans son portefeuille BRVM ?',
        options: ['1 seul', 'Au moins 3 à 4 secteurs majeurs', '50 secteurs', 'Aucun secteur'],
        correctIndex: 1,
        explanation: 'Avoir des valeurs dans les télécoms, banques, énergies et agro-alimentaire protège le portefeuille si un secteur spécifique traverse une année difficile.'
      }
    ]
  },
  {
    id: 6,
    number: '06',
    title: 'Suivi de Portefeuille & Erreurs à Éviter',
    subtitle: 'La discipline sur le long terme et votre plan d\'action',
    shortDesc: 'Gérer ses émotions, sécuriser ses avoirs et planifier sa rente de retraite ou d\'autonomie.',
    category: 'Action',
    estimatedMinutes: 10,
    iconName: 'flag',
    imageSeed: 'financial-freedom',
    heroImage: 'https://picsum.photos/seed/financial-freedom/800/500',
    sections: [
      {
        id: 'sec-6-1',
        title: 'Les 5 Pièges Mortels de l\'Investisseur Débutant',
        content: [
          '1. La Panique à la Première Baisse : La bourse respire en vagues. Les corrections temporaires sont des opportunités d\'accumulation.',
          '2. Le Trading Impulsif Quotidien : La BRVM est un marché d\'investissement patrimonial et de dividendes, pas un casino de day-trading.',
          '3. Les Rumeurs & Conseils Non Vérifiés : Ne suivez jamais aveuglément les groupes WhatsApp ou forums non officiels sans analyser les bilans.',
          '4. Oublier de Réinvestir les Dividendes : Toucher 500 000 FCFA de dividendes et les dépenser au lieu de racheter des titres brise l\'effet des intérêts composés.',
          '5. Ne Pas Tenir de Journal de Bord : Consignez vos achats, vos prix de revient et vos dividendes encaissés chaque année.'
        ],
        callout: {
          title: 'Votre Avenir Financier Commence Aujourd\'hui',
          text: 'Félicitations pour votre engagement dans le Programme 3.0. Vous détenez désormais l\'architecture intellectuelle et les outils pratiques pour dompter la BRVM avec méthode et discipline.',
          type: 'insight'
        }
      }
    ],
    quiz: [
      {
        id: 601,
        question: 'Quelle est la réaction recommandée lorsqu\'une entreprise solide de votre portefeuille voit son cours baisser temporairement ?',
        options: [
          'Vendre toutes ses actions dans la panique',
          'Vérifier que les fondamentaux de l\'entreprise restent intacts et continuer ses achats programmés à prix avantageux',
          'Arrêter d\'épargner',
          'Fermer son compte de titres'
        ],
        correctIndex: 1,
        explanation: 'Si les bénéfices et la santé financière de l\'entreprise restent solides, une baisse de cours est souvent une opportunité d\'achat à bon prix.'
      },
      {
        id: 602,
        question: 'À quelle fréquence est-il recommandé de faire le bilan de son portefeuille boursier BRVM ?',
        options: [
          'Toutes les 5 minutes',
          'Une fois par trimestre ou semestre de manière posée',
          'Une fois tous les 25 ans',
          'Jamais'
        ],
        correctIndex: 1,
        explanation: 'Un suivi trimestriel lors de la publication des résultats d\'entreprises suffit amplement pour un investisseur à long terme.'
      },
      {
        id: 603,
        question: 'Quel est l\'objectif ultime du Programme 3.0 ?',
        options: [
          'Devenir millionnaire en 48 heures sans effort',
          'Transformer l\'effort d\'épargne régulier en une machine à dividendes et en liberté financière durable',
          'Quitter son emploi sans aucune source de revenus',
          'Spéculer sur des devises étrangères'
        ],
        correctIndex: 1,
        explanation: 'L\'objectif est de construire une rente passive et un patrimoine réel transmissible grâce aux champions économiques de notre continent.'
      }
    ]
  }
];

export const SGI_DIRECTORY: import('../types').SGIDirectoryItem[] = [
  {
    id: 'sgi-1',
    name: 'Société Générale Capital Securities WA',
    country: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    city: 'Abidjan (Plateau)',
    app: 'SOGEBourse',
    website: 'https://societegenerale.ci',
    type: 'Banque & Institutionnel',
    feeStructure: '0.8% à 1% / transaction',
    contactPhone: '+225 27 20 20 12 34',
  },
  {
    id: 'sgi-2',
    name: 'CGF Bourse',
    country: 'Sénégal',
    flag: '🇸🇳',
    city: 'Dakar (Fann Résidence)',
    app: 'CGF Access & CGF Mobile',
    website: 'https://cgfbourse.com',
    type: 'Pionnier Indépendant',
    feeStructure: '0.9% / ordre en ligne',
    contactPhone: '+221 33 869 36 36',
  },
  {
    id: 'sgi-3',
    name: 'BOA Capital Securities',
    country: 'Bénin',
    flag: '🇧🇯',
    city: 'Cotonou / Abidjan / Dakar',
    app: 'BOA Capital Direct',
    website: 'https://boacapital.com',
    type: 'Réseau Bancaire Panafricain',
    feeStructure: '0.85% / transaction',
    contactPhone: '+229 21 31 32 28',
  },
  {
    id: 'sgi-4',
    name: 'Hudson & Cie',
    country: 'Côte d\'Ivoire',
    flag: '🇨🇮',
    city: 'Abidjan (Cocody)',
    app: 'Hudson Online Trading',
    website: 'https://hudson-cie.net',
    type: 'Historique Indépendant',
    feeStructure: '0.75% à 1% / transaction',
    contactPhone: '+225 27 22 48 48 00',
  },
  {
    id: 'sgi-5',
    name: 'EDC Investment Corporation (Ecobank)',
    country: 'Togo',
    flag: '🇹🇬',
    city: 'Lomé / Abidjan',
    app: 'Ecobank Investor App',
    website: 'https://ecobank.com',
    type: 'Groupe Panafricain',
    feeStructure: '0.8% / transaction',
    contactPhone: '+228 22 21 72 14',
  },
  {
    id: 'sgi-6',
    name: 'Coris Bourse',
    country: 'Burkina Faso',
    flag: '🇧🇫',
    city: 'Ouagadougou / Abidjan',
    app: 'Coris Bourse Direct',
    website: 'https://coris-bourse.com',
    type: 'Groupe Bancaire Innovant',
    feeStructure: '0.8% / transaction',
    contactPhone: '+226 25 30 75 00',
  },
];
