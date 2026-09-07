export interface SavingsHistoryItem {
  id: string;
  date: string;
  amount: number;
  category: 'emergency_fund' | 'brvm_investment';
  notes?: string;
}

export interface UserFinancialProfile {
  name: string;
  monthlySalary: number;
  fixedExpenses: number;
  discretionaryExpenses: number;
  savingsRate: number; // percentage (e.g. 30%)
  riskTolerance?: 'prudent' | 'moderate' | 'dynamic';
  hasCompletedDiagnostic: boolean;
  completedModules: number[]; // module IDs [1, 2, 3, 4, 5, 6]
  quizScores: Record<number, number>; // moduleId -> score in percentage (0-100)
  simulatedPortfolioValue: number;
  monthlySavingsHistory: SavingsHistoryItem[];
}

export interface BRVMIndex {
  symbol: string;
  name: string;
  value: number;
  change: number; // percentage
  isPositive: boolean;
  volume: string;
  date: string;
}

export interface BRVMStockLeader {
  rank: number;
  ticker: string;
  name: string;
  country: string;
  countryFlag: string;
  sector: 'Télécom' | 'Banque' | 'Énergie' | 'Agro-industrie' | 'Distribution' | 'Industrie';
  price: number; // in FCFA
  ytdReturn: number; // percentage
  dividendYield: number; // percentage
  stabilityScore: number; // /100
  perRatio: number;
  description: string;
  highlight: string;
  marketCap: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ModuleSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string[];
  callout?: {
    title: string;
    text: string;
    type: 'rule' | 'quote' | 'insight' | 'warning';
  };
  keyTakeaways?: Array<{
    icon: string;
    title: string;
    text: string;
  }>;
  lexiconItems?: Array<{
    term: string;
    definition: string;
  }>;
}

export interface CourseModule {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  category: 'Diagnostic' | 'Fondamentaux' | 'BRVM' | 'Stratégie' | 'Outils' | 'Action';
  estimatedMinutes: number;
  iconName: string;
  imageSeed: string;
  heroImage?: string;
  sections: ModuleSection[];
  quiz: QuizQuestion[];
}

export interface SGIDirectoryItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  city: string;
  app: string;
  website: string;
  type: string;
  feeStructure: string;
  contactPhone: string;
}

export type ActiveTab = 
  | 'onboarding' 
  | 'diagnostic' 
  | 'dashboard' 
  | 'modules' 
  | 'module-detail' 
  | 'simulator' 
  | 'profile' 
  | 'leaders-list';
