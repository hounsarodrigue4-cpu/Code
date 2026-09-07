import React, { useState } from 'react';
import { ActiveTab, UserFinancialProfile } from '../types';
import { 
  Calculator, 
  TrendingUp, 
  Coins, 
  ArrowRight, 
  Sparkles, 
  Info, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Download,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SimulatorScreenProps {
  profile: UserFinancialProfile;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectModule: (moduleId: number) => void;
}

export const SimulatorScreen: React.FC<SimulatorScreenProps> = ({
  profile,
  setActiveTab,
  onSelectModule,
}) => {
  const [salary, setSalary] = useState<number>(profile.monthlySalary || 500000);
  const [savingsRate, setSavingsRate] = useState<number>(profile.savingsRate || 30);
  const [returnRate, setReturnRate] = useState<number>(8.5); // BRVM average return
  const [selectedYears, setSelectedYears] = useState<number>(20);
  const [showPlanModal, setShowPlanModal] = useState<boolean>(false);

  // Monthly investment calculation
  const monthlyInvestment = salary * (savingsRate / 100);

  // Compound interest formula: FV = P * [ ((1 + r/12)^(n*12) - 1) / (r/12) ]
  const calculateFutureValue = (years: number, monthly: number, annualRate: number) => {
    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    if (monthlyRate === 0) return monthly * months;
    return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  };

  const totalCapitalInvested = monthlyInvestment * selectedYears * 12;
  const estimatedFutureValue = calculateFutureValue(selectedYears, monthlyInvestment, returnRate);
  const interestEarned = Math.max(0, estimatedFutureValue - totalCapitalInvested);
  const monthlyPassiveIncome = (estimatedFutureValue * (returnRate / 100)) / 12;

  // Comparison for 5, 10, 20 years for the interactive visual bars
  const val5Years = calculateFutureValue(5, monthlyInvestment, returnRate);
  const val10Years = calculateFutureValue(10, monthlyInvestment, returnRate);
  const val20Years = calculateFutureValue(20, monthlyInvestment, returnRate);

  const formatFCFA = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(Math.round(val)) + ' FCFA';
  };

  const handleGenerateStrategy = () => {
    setShowPlanModal(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE088]/40 text-[#735C00] text-xs font-bold uppercase tracking-wider mb-2">
          <Calculator className="w-3.5 h-3.5" />
          <span>Calculateur de Rente BRVM</span>
        </div>
        <h1 className="font-serif text-2xl md:text-4xl font-bold text-[#031632] mb-2">
          Simulateur d'Investissement & Intérêts Composés
        </h1>
        <p className="text-sm md:text-base text-[#44474D] max-w-2xl">
          Projetez la croissance exponentielle de votre épargne mensuelle sur la BRVM grâce au réinvestissement des dividendes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Input Sliders & Controls */}
        <div className="lg:col-span-5 space-y-4">
          {/* Salary Input */}
          <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs relative overflow-hidden">
            <label className="block text-xs font-bold uppercase text-[#44474D] tracking-wider mb-2">
              Salaire Mensuel Net (FCFA)
            </label>
            <div className="relative">
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value) || 0)}
                step="25000"
                min="50000"
                className="w-full bg-[#F8F9FA] border border-[#031632]/20 focus:border-[#031632] rounded-xl px-4 py-3 text-lg font-serif font-bold text-[#031632] focus:outline-none transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#75777E]">
                FCFA
              </span>
            </div>
          </div>

          {/* Savings Rate Slider */}
          <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase text-[#44474D] tracking-wider">
                Capacité d'Épargne
              </label>
              <span className="font-serif font-bold text-lg text-[#2C694E]">
                {savingsRate}%
              </span>
            </div>

            <input
              type="range"
              min="5"
              max="70"
              step="1"
              value={savingsRate}
              onChange={(e) => setSavingsRate(Number(e.target.value))}
              className="w-full h-2 bg-[#E1E3E4] rounded-lg appearance-none cursor-pointer accent-[#2C694E]"
            />

            <div className="flex justify-between text-[11px] text-[#75777E]">
              <span>5%</span>
              <span className="font-semibold text-[#2C694E]">Recommandé 30%</span>
              <span>70%</span>
            </div>

            <div className="pt-3 border-t border-[#E1E3E4] flex items-center justify-between text-xs">
              <span className="text-[#44474D]">Investissement mensuel :</span>
              <span className="font-serif font-bold text-[#031632]">
                {formatFCFA(monthlyInvestment)}
              </span>
            </div>
          </div>

          {/* Expected Return Slider */}
          <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <label className="text-xs font-bold uppercase text-[#44474D] tracking-wider block">
                  Rendement Annuel Estimé (BRVM)
                </label>
                <span className="text-[10px] text-[#75777E]">Dividendes réinvestis + plus-values</span>
              </div>
              <span className="font-serif font-bold text-lg text-[#CCA730]">
                {returnRate}%
              </span>
            </div>

            <input
              type="range"
              min="2"
              max="15"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full h-2 bg-[#E1E3E4] rounded-lg appearance-none cursor-pointer accent-[#CCA730]"
            />

            <div className="flex justify-between text-[11px] text-[#75777E]">
              <span>2% (Prudent)</span>
              <span className="font-semibold text-[#CCA730]">8.5% (Moyenne BRVM)</span>
              <span>15% (Agressif)</span>
            </div>
          </div>

          {/* Year Horizon Selector */}
          <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-3">
            <label className="text-xs font-bold uppercase text-[#44474D] tracking-wider block">
              Horizon de Placement
            </label>
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 5, 10, 20, 30].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYears(yr)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedYears === yr
                      ? 'bg-[#031632] text-white shadow-xs'
                      : 'bg-[#F8F9FA] text-[#44474D] hover:bg-[#E7E8E9]'
                  }`}
                >
                  {yr} {yr > 1 ? 'Ans' : 'An'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Projection Graphic & Final Wealth Showcase */}
        <div className="lg:col-span-7 space-y-5">
          {/* Main Visual Projection Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#C5C6CE]/30 shadow-xs relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-bold text-[#031632]">
                Projection de Patrimoine
              </h3>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#EAF7EE] text-[#2C694E]">
                Horizon {selectedYears} ans
              </span>
            </div>

            {/* Custom Interactive Bars comparing 5, 10, 20 ans */}
            <div className="h-56 bg-[#F8F9FA] rounded-xl border border-[#E1E3E4] p-4 flex items-end justify-around gap-4 relative">
              {/* 5 Ans */}
              <div 
                onClick={() => setSelectedYears(5)}
                className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-full bg-[#2C694E]/20 rounded-t-lg transition-all group-hover:bg-[#2C694E]/30 relative h-[25%]">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#031632] text-white text-[10px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    ~{formatFCFA(val5Years)}
                  </div>
                </div>
                <span className={`text-xs font-semibold ${selectedYears === 5 ? 'text-[#031632] font-bold' : 'text-[#75777E]'}`}>
                  5 Ans
                </span>
              </div>

              {/* 10 Ans */}
              <div 
                onClick={() => setSelectedYears(10)}
                className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-full bg-[#2C694E]/60 rounded-t-lg transition-all group-hover:bg-[#2C694E]/70 relative h-[55%]">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#031632] text-white text-[10px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    ~{formatFCFA(val10Years)}
                  </div>
                </div>
                <span className={`text-xs font-semibold ${selectedYears === 10 ? 'text-[#031632] font-bold' : 'text-[#75777E]'}`}>
                  10 Ans
                </span>
              </div>

              {/* 20 Ans */}
              <div 
                onClick={() => setSelectedYears(20)}
                className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="w-full bg-[#2C694E] rounded-t-lg transition-all group-hover:bg-[#1E4D38] relative h-[90%] shadow-[0_0_15px_rgba(44,105,78,0.25)]">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#031632] text-white text-[10px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    ~{formatFCFA(val20Years)}
                  </div>
                </div>
                <span className={`text-xs font-semibold ${selectedYears === 20 ? 'text-[#031632] font-bold' : 'text-[#75777E]'}`}>
                  20 Ans
                </span>
              </div>
            </div>

            {/* Highlighted Value Display matching reference image */}
            <div className="mt-6 text-center md:text-left pt-4 border-t border-[#E1E3E4]">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#75777E] block mb-1">
                VALEUR ESTIMÉE À {selectedYears} ANS
              </span>
              <div className="font-serif text-3xl md:text-5xl font-bold text-[#2C694E] tracking-tight">
                ~{formatFCFA(estimatedFutureValue)}
              </div>
            </div>

            {/* Breakdown details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#E1E3E4]">
              <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4]">
                <span className="text-[10px] text-[#75777E] uppercase font-bold block">
                  Total de votre épargne versée
                </span>
                <span className="font-serif font-bold text-sm text-[#031632]">
                  {formatFCFA(totalCapitalInvested)}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-[#EAF7EE] border border-[#2C694E]/20">
                <span className="text-[10px] text-[#2C694E] uppercase font-bold block">
                  Gains & Dividendes générés
                </span>
                <span className="font-serif font-bold text-sm text-[#2C694E]">
                  +{formatFCFA(interestEarned)}
                </span>
              </div>
            </div>

            {/* Monthly Passive Income generated */}
            <div className="mt-4 p-4 rounded-xl bg-[#031632] text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#B6C7EB] font-bold block">
                  Rente Mensuelle Passive Projetée
                </span>
                <span className="text-xs text-[#D7E2FF]">À la fin de la période d'accumulation</span>
              </div>
              <div className="font-serif text-xl md:text-2xl font-bold text-[#FFE088]">
                {formatFCFA(monthlyPassiveIncome)} / mois
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-6">
              <button
                onClick={handleGenerateStrategy}
                className="w-full py-4 px-6 rounded-xl bg-[#031632] hover:bg-[#1A2B48] text-white font-bold font-serif text-sm shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4 text-[#FFE088]" />
                <span>Voir ma Stratégie Personnalisée</span>
              </button>
            </div>
          </div>

          {/* Legal Disclaimer Box matching reference */}
          <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#C5C6CE]/40 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#75777E] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#44474D] leading-relaxed">
              <strong>Avertissement :</strong> Ces projections sont fournies à titre purement indicatif et éducatif dans le cadre du <em>Programme 3.0</em>. Elles reposent sur des hypothèses de rendement constant et ne tiennent pas compte de l'inflation, des frais de courtage SGI ou de la volatilité inhérente au marché de la BRVM. Les performances passées ne préjugent pas des performances futures. Consultez un conseiller financier agréé par l'AMF-UMOA avant tout investissement.
            </p>
          </div>
        </div>
      </div>

      {/* Strategy Summary Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#C5C6CE]/40 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between border-b border-[#E1E3E4] pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2C694E] block">
                  Programme 3.0 · Synthèse
                </span>
                <h3 className="font-serif text-xl font-bold text-[#031632]">
                  Votre Plan d'Action Personnalisé
                </h3>
              </div>
              <button
                onClick={() => setShowPlanModal(false)}
                className="text-[#75777E] hover:bg-[#F3F4F5] p-1 rounded-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#44474D]">
              <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4] space-y-1">
                <span className="font-bold text-[#031632] block">1. Effort d'épargne mensuel :</span>
                <p>
                  Versez <strong>{formatFCFA(monthlyInvestment)}</strong> (soit {savingsRate}% de votre salaire) chaque mois par virement automatique dès le jour de paye.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4] space-y-1">
                <span className="font-bold text-[#031632] block">2. Répartition d'amorçage :</span>
                <p>
                  Constitution d'un fonds de sécurité de <strong>{formatFCFA(salary * 0.5 * 4)}</strong> sur livret bancaire liquide, puis achat programmé des 5 valeurs piliers BRVM (Sonatel, Orange CI, Coris Bank, TotalEnergies, SGBCI).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#EAF7EE] border border-[#2C694E]/20 space-y-1">
                <span className="font-bold text-[#2C694E] block">3. Capital visé à {selectedYears} ans :</span>
                <p className="font-serif font-bold text-sm text-[#0E5138]">
                  ~{formatFCFA(estimatedFutureValue)} générant ~{formatFCFA(monthlyPassiveIncome)} de rente mensuelle.
                </p>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setShowPlanModal(false);
                  onSelectModule(3);
                  setActiveTab('module-detail');
                }}
                className="flex-1 py-3 rounded-xl bg-[#031632] hover:bg-[#1A2B48] text-white text-xs font-bold transition-colors"
              >
                Découvrir la BRVM (Module 3)
              </button>
              <button
                onClick={() => setShowPlanModal(false)}
                className="px-4 py-3 rounded-xl bg-[#F3F4F5] hover:bg-[#E7E8E9] text-[#031632] text-xs font-semibold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
