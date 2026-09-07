import React, { useState } from 'react';
import { ActiveTab, UserFinancialProfile } from '../types';
import { BRVM_INDICES, BRVM_LEADERS } from '../data/brvmData';
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  PieChart, 
  ArrowUpRight, 
  Coins, 
  Sparkles, 
  BookOpen, 
  ChevronRight, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Building2,
  Calendar,
  Zap,
  ArrowRight
} from 'lucide-react';

interface DashboardScreenProps {
  profile: UserFinancialProfile;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectModule: (moduleId: number) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  profile,
  setActiveTab,
  onSelectModule,
}) => {
  const [timeframe, setTimeframe] = useState<'1M' | '6M' | '1A' | '3A' | 'TOUT'>('1A');

  const monthlyInvest = profile.monthlySalary * (profile.savingsRate / 100);
  const estimatedPortfolio = profile.simulatedPortfolioValue || (monthlyInvest * 24 * 1.12);
  const estimatedAnnualDividends = estimatedPortfolio * 0.085; // ~8.5% dividend yield avg
  const emergencyFund = profile.fixedExpenses * 4;

  const formatFCFA = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(Math.round(val)) + ' FCFA';
  };

  // Performance chart data points simulation
  const chartPoints = [
    { label: 'Jan', val: 65 },
    { label: 'Fév', val: 68 },
    { label: 'Mar', val: 72 },
    { label: 'Avr', val: 70 },
    { label: 'Mai', val: 75 },
    { label: 'Juin', val: 81 },
    { label: 'Juil', val: 84 },
    { label: 'Août', val: 89 },
    { label: 'Sep', val: 87 },
    { label: 'Oct', val: 92 },
    { label: 'Nov', val: 96 },
    { label: 'Déc', val: 100 },
  ];

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-6xl mx-auto space-y-6">
      {/* Top Welcome / Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#2C694E] block">
            Tableau de Bord BRVM
          </span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#031632]">
            Patrimoine & Marché Financier
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('simulator')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#C5C6CE]/50 text-[#031632] hover:bg-[#F3F4F5] text-xs font-semibold shadow-xs"
          >
            <Coins className="w-3.5 h-3.5 text-[#CCA730]" />
            <span>Simulateur</span>
          </button>
          <button
            onClick={() => setActiveTab('diagnostic')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#031632] text-white hover:bg-[#1A2B48] text-xs font-semibold shadow-xs"
          >
            <Wallet className="w-3.5 h-3.5 text-[#B1F0CE]" />
            <span>Mon Budget</span>
          </button>
        </div>
      </div>

      {/* Overview Metric Cards (Bento Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Portefeuille BRVM Simulé */}
        <div className="bg-[#031632] text-white p-5 rounded-2xl border border-[#1A2B48] shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#2C694E]/20 rounded-bl-full pointer-events-none" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-[#B6C7EB] font-bold">
              Portefeuille BRVM
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#AEEECB] text-[#002114]">
              +8.5% YTD
            </span>
          </div>
          <div className="font-serif text-2xl font-bold text-[#B1F0CE] mb-1">
            {formatFCFA(estimatedPortfolio)}
          </div>
          <div className="text-[11px] text-[#D7E2FF]/80 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-[#B1F0CE]" />
            <span>Valorisation avec dividendes réinvestis</span>
          </div>
        </div>

        {/* Card 2: Dividendes Annuels Estimés */}
        <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-[#75777E] font-bold">
              Rente Dividendes
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#FFE088]/40 flex items-center justify-center text-[#735C00]">
              <Coins className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-2xl font-bold text-[#CCA730] mb-1">
            {formatFCFA(estimatedAnnualDividends)}
          </div>
          <div className="text-[11px] text-[#44474D]">
            Soit ~{formatFCFA(estimatedAnnualDividends / 12)} / mois de cash passif
          </div>
        </div>

        {/* Card 3: Épargne Mensuelle Investie */}
        <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-[#75777E] font-bold">
              Effort Mensuel DCA
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#EAF7EE] flex items-center justify-center text-[#2C694E]">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-2xl font-bold text-[#031632] mb-1">
            {formatFCFA(monthlyInvest)}
          </div>
          <div className="text-[11px] text-[#44474D]">
            {profile.savingsRate}% du salaire net séquestré
          </div>
        </div>

        {/* Card 4: Fonds d'Urgence Sécurisé */}
        <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-[#75777E] font-bold">
              Fonds de Sécurité
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#E7E8E9] flex items-center justify-center text-[#031632]">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="font-serif text-2xl font-bold text-[#031632] mb-1">
            {formatFCFA(emergencyFund)}
          </div>
          <div className="text-[11px] text-[#2C694E] font-semibold">
            ✓ 4 mois de charges liquides
          </div>
        </div>
      </div>

      {/* Main Chart & Market Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Evolution Performance Chart */}
        <div className="lg:col-span-8 bg-white p-5 md:p-6 rounded-2xl border border-[#C5C6CE]/30 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="font-serif text-lg font-bold text-[#031632]">
                Évolution de la Performance BRVM
              </h2>
              <p className="text-xs text-[#75777E]">
                Croissance de l'indice de référence BRVM Composite vs Épargne Dormante
              </p>
            </div>

            {/* Timeframe selector */}
            <div className="flex bg-[#F3F4F5] p-1 rounded-xl gap-1 self-start">
              {(['1M', '6M', '1A', '3A', 'TOUT'] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    timeframe === tf
                      ? 'bg-[#031632] text-white shadow-xs'
                      : 'text-[#44474D] hover:text-[#031632]'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive CSS & SVG Chart */}
          <div className="h-56 w-full flex flex-col justify-end pt-4 pb-2 border-b border-[#E1E3E4]">
            <div className="h-full w-full flex items-end justify-between gap-1.5 sm:gap-3 px-2">
              {chartPoints.map((pt, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#031632] text-white text-[10px] px-1.5 py-0.5 rounded font-bold whitespace-nowrap mb-1">
                    +{pt.val}%
                  </div>
                  {/* Bar */}
                  <div 
                    className="w-full bg-[#EAF7EE] group-hover:bg-[#2C694E] rounded-t-sm transition-all relative overflow-hidden"
                    style={{ height: `${pt.val}%` }}
                  >
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-[#2C694E] rounded-t-sm transition-all"
                      style={{ height: `${Math.max(20, pt.val * 0.9)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-[#75777E] font-medium group-hover:text-[#031632]">
                    {pt.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between pt-3 text-xs text-[#44474D]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#2C694E]" />
                <span>Portefeuille BRVM (+18.4% cumulé)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#C5C6CE]" />
                <span>Compte Épargne (3.5%)</span>
              </div>
            </div>
            <span className="font-semibold text-[#031632]">
              Rendement Dividendes Réinvestis inclus
            </span>
          </div>
        </div>

        {/* Right: Live Indices BRVM Mini-Cards */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-base font-bold text-[#031632]">
                Indices BRVM en Direct
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EAF7EE] text-[#2C694E] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2C694E] animate-pulse" />
                Séance Ouverte
              </span>
            </div>

            <div className="space-y-3">
              {BRVM_INDICES.map((idx) => (
                <div
                  key={idx.symbol}
                  className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4] flex items-center justify-between hover:border-[#2C694E]/40 transition-colors"
                >
                  <div>
                    <span className="text-xs font-bold text-[#031632] block">
                      {idx.name}
                    </span>
                    <span className="text-[10px] text-[#75777E]">
                      Vol : {idx.volume}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-serif font-bold text-sm text-[#031632]">
                      {idx.value.toFixed(2)} pts
                    </div>
                    <span className={`text-xs font-bold flex items-center justify-end gap-0.5 ${
                      idx.isPositive ? 'text-[#2C694E]' : 'text-[#BA1A1A]'
                    }`}>
                      {idx.isPositive ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {idx.isPositive ? `+${idx.change}%` : `${idx.change}%`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Learning CTA */}
          <div className="bg-[#1A2B48] text-white p-5 rounded-2xl border border-[#031632] shadow-sm relative overflow-hidden">
            <h4 className="font-serif text-base font-bold text-[#FFE088] mb-1">
              Prêt pour le Module 4 ?
            </h4>
            <p className="text-xs text-[#D7E2FF] mb-3">
              Apprenez à analyser les bilans de Sonatel, Orange et Coris Bank pour faire vos premiers achats.
            </p>
            <button
              onClick={() => {
                onSelectModule(4);
                setActiveTab('module-detail');
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#2C694E] hover:bg-[#1E4D38] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Accéder au Module 4</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Top 5 Strategic Stocks Section */}
      <div className="bg-white p-5 md:p-6 rounded-2xl border border-[#C5C6CE]/30 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-xl font-bold text-[#031632]">
                Le Top 5 Stratégique BRVM
              </h2>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFE088]/40 text-[#735C00]">
                Programme 3.0
              </span>
            </div>
            <p className="text-xs text-[#75777E]">
              Entreprises leaders sélectionnées pour leur régularité de dividende et leur solidité de bilan.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('leaders-list')}
            className="text-xs font-bold text-[#2C694E] hover:underline flex items-center gap-1 self-start"
          >
            <span>Voir le Palmarès des 20 Leaders</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Top 5 list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BRVM_LEADERS.slice(0, 5).map((stock) => (
            <div
              key={stock.ticker}
              className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4] hover:border-[#2C694E] transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#031632] text-white">
                      #{stock.rank}
                    </span>
                    <span className="text-xs text-[#75777E]">{stock.countryFlag} {stock.sector}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#031632] group-hover:text-[#2C694E] transition-colors">
                    {stock.name} ({stock.ticker})
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-serif font-bold text-sm text-[#031632] block">
                    {formatFCFA(stock.price)}
                  </span>
                  <span className="text-xs font-bold text-[#2C694E]">
                    +{stock.ytdReturn}% YTD
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#44474D] line-clamp-2">
                {stock.highlight}
              </p>

              <div className="pt-2 border-t border-[#E1E3E4] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#75777E] block text-[10px]">Rendement Dividende</span>
                  <span className="font-bold text-[#2C694E]">{stock.dividendYield}% / an</span>
                </div>
                <div>
                  <span className="text-[#75777E] block text-[10px]">Score Stabilité</span>
                  <span className="font-bold text-[#031632]">{stock.stabilityScore}/100</span>
                </div>
              </div>
            </div>
          ))}

          {/* Quick 6th card to open full list */}
          <div
            onClick={() => setActiveTab('leaders-list')}
            className="p-5 rounded-xl bg-[#031632] text-white border border-[#1A2B48] flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#1A2B48] transition-colors group"
          >
            <Building2 className="w-8 h-8 text-[#B1F0CE] mb-2 group-hover:scale-110 transition-transform" />
            <h4 className="font-serif text-base font-bold text-white mb-1">
              Explorer les 20 Leaders
            </h4>
            <p className="text-xs text-[#D7E2FF] mb-3">
              Télécoms, Banques, Énergies, Agro-industries cotées à la BRVM
            </p>
            <span className="text-xs font-bold text-[#FFE088] group-hover:underline flex items-center gap-1">
              <span>Ouvrir l'analyse</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
