import React, { useState } from 'react';
import { ActiveTab, UserFinancialProfile } from '../types';
import { 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  PiggyBank, 
  Coins, 
  Percent, 
  HelpCircle,
  Sparkles,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DiagnosticScreenProps {
  profile: UserFinancialProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserFinancialProfile>>;
  setActiveTab: (tab: ActiveTab) => void;
}

export const DiagnosticScreen: React.FC<DiagnosticScreenProps> = ({
  profile,
  setProfile,
  setActiveTab,
}) => {
  const [salary, setSalary] = useState<number>(profile.monthlySalary || 500000);
  const [fixedExpenses, setFixedExpenses] = useState<number>(profile.fixedExpenses || 250000);
  const [discretionary, setDiscretionary] = useState<number>(profile.discretionaryExpenses || 100000);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Calculations
  const calculatedSavings = Math.max(0, salary - fixedExpenses - discretionary);
  const currentSavingsRate = salary > 0 ? Math.round((calculatedSavings / salary) * 100) : 0;
  
  // Program 3.0 targets
  const targetNeeds = salary * 0.50; // 50%
  const targetWants = salary * 0.20; // 20%
  const targetInvest = salary * 0.30; // 30% rule
  const emergencyFundTarget = fixedExpenses * 6; // 6 months of fixed charges

  // Health Score Assessment
  let healthScore: 'critical' | 'moderate' | 'optimal' = 'optimal';
  let healthMessage = 'Votre structure financière est idéale pour déployer la méthode 3.0 !';

  if (fixedExpenses > salary * 0.65 || currentSavingsRate < 10) {
    healthScore = 'critical';
    healthMessage = 'Vos charges fixes absorbent plus de 65% de votre salaire. Il est urgent d\'optimiser vos dépenses avant d\'investir de gros montants.';
  } else if (currentSavingsRate < 25) {
    healthScore = 'moderate';
    healthMessage = 'Vous dégagez une épargne, mais vous n\'atteignez pas encore le seuil d\'accumulation stratégique de 30%.';
  }

  const handleSaveProfile = () => {
    setProfile(prev => ({
      ...prev,
      monthlySalary: salary,
      fixedExpenses,
      discretionaryExpenses: discretionary,
      savingsRate: Math.max(5, currentSavingsRate),
      hasCompletedDiagnostic: true,
      simulatedPortfolioValue: prev.simulatedPortfolioValue || (salary * 0.30 * 12),
    }));

    setSavedSuccess(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSavedSuccess(false);
    }, 4000);
  };

  const formatFCFA = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(Math.round(val)) + ' FCFA';
  };

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6 md:mb-8 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AEEECB]/50 text-[#0E5138] text-xs font-bold uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Étape Initiale</span>
        </div>
        <h1 className="font-serif text-2xl md:text-4xl font-bold text-[#031632] mb-2">
          Diagnostic Financier du Salarié
        </h1>
        <p className="text-sm md:text-base text-[#44474D]">
          Évaluez votre capacité d'épargne réelle et découvrez la répartition 50/20/30 adaptée à votre salaire net.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column: Input Form */}
        <div className="lg:col-span-7 space-y-5">
          {/* Salary Input Box */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#C5C6CE]/30 shadow-xs">
            <label className="block text-xs font-bold uppercase text-[#44474D] tracking-wider mb-2">
              1. Salaire Mensuel Net (FCFA)
            </label>
            <div className="relative mb-3">
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value) || 0)}
                step="25000"
                min="50000"
                className="w-full bg-[#F8F9FA] border-2 border-[#1A2B48]/20 focus:border-[#031632] rounded-xl px-4 py-3 text-lg md:text-xl font-bold text-[#031632] focus:outline-none transition-colors"
                placeholder="Ex: 500000"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#75777E]">
                FCFA / mois
              </span>
            </div>

            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-2">
              {[250000, 500000, 750000, 1000000, 1500000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setSalary(val)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                    salary === val
                      ? 'bg-[#031632] text-white border-[#031632] font-semibold'
                      : 'bg-[#F3F4F5] text-[#44474D] border-[#C5C6CE]/40 hover:bg-[#E7E8E9]'
                  }`}
                >
                  {new Intl.NumberFormat('fr-FR').format(val / 1000)}k
                </button>
              ))}
            </div>
          </div>

          {/* Fixed Expenses Slider */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <label className="text-xs font-bold uppercase text-[#44474D] tracking-wider block">
                  2. Charges Incompressibles Fixes
                </label>
                <span className="text-[11px] text-[#75777E]">
                  Loyer, scolarité, alimentation, CIE/SODECI/Senelec, transport
                </span>
              </div>
              <span className="font-serif font-bold text-base text-[#031632]">
                {formatFCFA(fixedExpenses)}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={salary * 0.9}
              step="10000"
              value={fixedExpenses}
              onChange={(e) => setFixedExpenses(Number(e.target.value))}
              className="w-full h-2 bg-[#E1E3E4] rounded-lg appearance-none cursor-pointer accent-[#031632]"
            />

            <div className="flex justify-between text-[11px] text-[#75777E]">
              <span>0 FCFA</span>
              <span className="font-semibold text-[#031632]">
                {salary > 0 ? Math.round((fixedExpenses / salary) * 100) : 0}% du salaire
              </span>
              <span>Cible max : 50%</span>
            </div>
          </div>

          {/* Discretionary Expenses Slider */}
          <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <label className="text-xs font-bold uppercase text-[#44474D] tracking-wider block">
                  3. Plaisirs & Sollicitations Famille
                </label>
                <span className="text-[11px] text-[#75777E]">
                  Sorties, vêtements, aides ponctuelles, imprévus mineurs
                </span>
              </div>
              <span className="font-serif font-bold text-base text-[#031632]">
                {formatFCFA(discretionary)}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={salary * 0.6}
              step="5000"
              value={discretionary}
              onChange={(e) => setDiscretionary(Number(e.target.value))}
              className="w-full h-2 bg-[#E1E3E4] rounded-lg appearance-none cursor-pointer accent-[#CCA730]"
            />

            <div className="flex justify-between text-[11px] text-[#75777E]">
              <span>0 FCFA</span>
              <span className="font-semibold text-[#CCA730]">
                {salary > 0 ? Math.round((discretionary / salary) * 100) : 0}% du salaire
              </span>
              <span>Cible : 20% max</span>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              onClick={handleSaveProfile}
              className="w-full py-4 px-6 rounded-xl bg-[#031632] hover:bg-[#1A2B48] text-white font-bold font-serif text-base shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <CheckCircle2 className="w-5 h-5 text-[#B1F0CE]" />
              <span>Valider & Enregistrer mon Diagnostic</span>
            </button>
            {savedSuccess && (
              <p className="text-center text-xs text-[#2C694E] font-bold mt-2 animate-bounce">
                ✓ Diagnostic enregistré et appliqué à votre profil !
              </p>
            )}
          </div>
        </div>

        {/* Right column: Results & 50/20/30 Visual Breakdown */}
        <div className="lg:col-span-5 space-y-5">
          {/* Main Capacité d'Épargne Card */}
          <div className="bg-[#031632] text-white p-6 rounded-2xl border border-[#1A2B48] shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2C694E]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-[#B6C7EB] font-bold">
                Capacité d'Épargne Réelle
              </span>
              <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                currentSavingsRate >= 30 ? 'bg-[#AEEECB] text-[#002114]' : 'bg-[#FFE088] text-[#241A00]'
              }`}>
                {currentSavingsRate}% actuel
              </span>
            </div>

            <div className="font-serif text-3xl md:text-4xl font-bold text-[#B1F0CE] mb-1">
              {formatFCFA(calculatedSavings)}
              <span className="text-xs font-normal text-[#D7E2FF] block mt-0.5">par mois disponible</span>
            </div>

            {/* Target 30% Goal Comparison */}
            <div className="mt-4 pt-4 border-t border-[#8293B5]/20 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#D7E2FF]">Objectif Règle des 30% :</span>
                <span className="font-bold text-[#FFE088]">{formatFCFA(targetInvest)} / mois</span>
              </div>
              <div className="w-full bg-[#1A2B48] h-2.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    currentSavingsRate >= 30 ? 'bg-[#2C694E]' : 'bg-[#CCA730]'
                  }`}
                  style={{ width: `${Math.min(100, (currentSavingsRate / 30) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {/* 50/20/30 Adapted Visual Breakdown */}
          <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs">
            <h3 className="font-serif text-base font-bold text-[#031632] mb-3 flex items-center justify-between">
              <span>Répartition 50 / 20 / 30 Recommandée</span>
              <Sparkles className="w-4 h-4 text-[#CCA730]" />
            </h3>

            <div className="space-y-3">
              {/* Needs (50%) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#031632]" />
                  <div>
                    <span className="text-xs font-bold text-[#031632] block">50% Vivre & Vital</span>
                    <span className="text-[10px] text-[#75777E]">Loyer, courses, factures</span>
                  </div>
                </div>
                <span className="font-serif text-xs font-bold text-[#031632]">
                  {formatFCFA(targetNeeds)}
                </span>
              </div>

              {/* Wants (20%) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#CCA730]" />
                  <div>
                    <span className="text-xs font-bold text-[#735C00] block">20% Liberté & Loisirs</span>
                    <span className="text-[10px] text-[#75777E]">Famille élargie, sorties</span>
                  </div>
                </div>
                <span className="font-serif text-xs font-bold text-[#735C00]">
                  {formatFCFA(targetWants)}
                </span>
              </div>

              {/* Invest (30%) */}
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#EAF7EE] border border-[#2C694E]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#2C694E]" />
                  <div>
                    <span className="text-xs font-bold text-[#2C694E] block">30% Bourse BRVM & Capital</span>
                    <span className="text-[10px] text-[#0E5138]">Investissement programmé</span>
                  </div>
                </div>
                <span className="font-serif text-xs font-bold text-[#2C694E]">
                  {formatFCFA(targetInvest)}
                </span>
              </div>
            </div>
          </div>

          {/* Emergency Fund Target Card */}
          <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF7EE] flex items-center justify-center text-[#2C694E] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[11px] text-[#75777E] uppercase font-bold tracking-wider block">
                  Étape Préalable
                </span>
                <h4 className="font-serif text-sm font-bold text-[#031632]">
                  Fonds de Sécurité Cible (6 mois)
                </h4>
                <p className="text-lg font-serif font-bold text-[#031632] mt-0.5">
                  {formatFCFA(emergencyFundTarget)}
                </p>
                <p className="text-[11px] text-[#44474D] mt-1">
                  À constituer sur livret bancaire sécurisé avant ou en parallèle de vos premiers achats d'actions.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('simulator')}
              className="flex-1 py-3 px-4 rounded-xl bg-[#2C694E] hover:bg-[#1E4D38] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Projeter sur 20 ans</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className="flex-1 py-3 px-4 rounded-xl bg-white border border-[#C5C6CE]/50 hover:bg-[#F3F4F5] text-[#031632] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Voir Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
