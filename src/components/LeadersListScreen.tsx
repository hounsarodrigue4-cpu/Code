import React, { useState } from 'react';
import { ActiveTab, BRVMStockLeader } from '../types';
import { BRVM_LEADERS } from '../data/brvmData';
import { 
  ArrowLeft, 
  TrendingUp, 
  Search, 
  Filter, 
  Sparkles, 
  Building2, 
  Coins, 
  ShieldCheck, 
  Zap, 
  ChevronRight, 
  ExternalLink,
  Info
} from 'lucide-react';

interface LeadersListScreenProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const LeadersListScreen: React.FC<LeadersListScreenProps> = ({ setActiveTab }) => {
  const [selectedSector, setSelectedSector] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStock, setSelectedStock] = useState<BRVMStockLeader | null>(null);

  const sectors = ['Tous', 'Télécom', 'Banque', 'Énergie', 'Agro-industrie', 'Distribution', 'Industrie'];

  const filteredLeaders = BRVM_LEADERS.filter((s) => {
    const matchesSector = selectedSector === 'Tous' || s.sector === selectedSector;
    const matchesSearch = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  const formatFCFA = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA';
  };

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-5xl mx-auto space-y-6">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#E1E3E4] pb-3">
        <button
          onClick={() => setActiveTab('dashboard')}
          className="flex items-center gap-1.5 text-xs font-bold text-[#031632] hover:text-[#2C694E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au Dashboard</span>
        </button>

        <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#FFE088]/40 text-[#735C00]">
          Données Marché BRVM
        </span>
      </div>

      {/* Hero Header */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#031632]">
          Palmarès des 20 Leaders BRVM
        </h1>
        <p className="text-sm md:text-base text-[#44474D] max-w-2xl">
          Une analyse approfondie des entreprises les plus performantes, guidée par les dynamiques de cash-flow, la solidité bilancielle et les rendements en dividendes.
        </p>
      </div>

      {/* Analysis Highlights Section (Tech & Energy Shift) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#EAF7EE] text-[#2C694E] flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#031632]">
              Le Shift vers la Tech & Fintech
            </h3>
          </div>
          <p className="text-xs text-[#44474D] leading-relaxed">
            La domination des acteurs télécoms (Sonatel, Orange CI, Onatel BF) illustre une transition numérique fulgurante. Leur capacité à générer des flux de trésorerie massifs via le Mobile Money et la data en fait les piliers de rentabilité du marché.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#C5C6CE]/30 shadow-xs relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-[#FFE088]/40 text-[#735C00] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#031632]">
              L'Effet Halo Énergie & Utilités
            </h3>
          </div>
          <p className="text-xs text-[#44474D] leading-relaxed">
            Les valeurs d'énergie et services publics (TotalEnergies CI, CIE, SODECI) bénéficient d'une stabilité structurelle. Elles offrent des dividendes constants et jouent le rôle de valeurs refuges protectrices face à l'inflation.
          </p>
        </div>
      </div>

      {/* Top 1 Hero Card (Sonatel) */}
      <div className="bg-[#031632] text-white p-6 rounded-2xl border border-[#1A2B48] shadow-md relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#FFE088] text-[#241A00] text-xs font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
              #1 Leader BRVM
            </span>
            <span className="bg-[#1A2B48] text-[#D7E2FF] text-xs px-2 py-0.5 rounded border border-[#8293B5]/30">
              🇸🇳 Télécom
            </span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
            Sonatel (SNTS)
          </h2>
          <p className="text-xs md:text-sm text-[#D7E2FF]/90 max-w-lg">
            Champion historique de la croissance et de l'innovation. Présence solide au Sénégal, Mali, Guinée, Guinée-Bissau et Sierra Leone.
          </p>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 w-full md:w-auto text-left md:text-right shrink-0">
          <span className="text-[10px] text-[#D7E2FF] uppercase tracking-wider block">
            Rendement Annuel Estimé
          </span>
          <div className="font-serif text-2xl md:text-3xl font-bold text-[#B1F0CE] flex items-center md:justify-end gap-1">
            <span>8.5%</span>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="w-full md:w-36 bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-[#B1F0CE] h-full w-[95%] rounded-full" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#75777E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher par nom, symbole (SNTS, ORAC, CBIBF) ou pays..."
            className="w-full bg-white border border-[#C5C6CE]/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#031632] focus:outline-none focus:border-[#031632] transition-colors"
          />
        </div>

        <div className="flex overflow-x-auto gap-1.5 pb-1 sm:pb-0">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedSector === sec
                  ? 'bg-[#031632] text-white shadow-xs'
                  : 'bg-white text-[#44474D] border border-[#C5C6CE]/40 hover:bg-[#F3F4F5]'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Complete Leaders Table */}
      <div className="bg-white rounded-2xl border border-[#C5C6CE]/30 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-[#E1E3E4] flex justify-between items-center bg-[#F8F9FA]">
          <span className="font-serif font-bold text-sm text-[#031632]">
            {filteredLeaders.length} Entreprises cotées analysées
          </span>
          <span className="text-[11px] text-[#75777E]">
            Cliquez sur une ligne pour voir la thèse d'investissement
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E1E3E4] bg-[#F8F9FA] text-[11px] font-bold text-[#75777E] uppercase tracking-wider">
                <th className="py-3 px-4">Rang / Ticker</th>
                <th className="py-3 px-4">Entreprise & Pays</th>
                <th className="py-3 px-4">Secteur</th>
                <th className="py-3 px-4 text-right">Cours Actuel</th>
                <th className="py-3 px-4 text-right">Rendement Div.</th>
                <th className="py-3 px-4 text-right">PER</th>
                <th className="py-3 px-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E1E3E4] text-xs">
              {filteredLeaders.map((stock) => (
                <tr
                  key={stock.ticker}
                  onClick={() => setSelectedStock(stock)}
                  className="hover:bg-[#F3F4F5] transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 font-serif font-bold text-[#031632]">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#031632] text-white flex items-center justify-center text-[10px] group-hover:bg-[#2C694E] transition-colors">
                        {stock.rank}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#2C694E]">
                        {stock.ticker}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-serif font-bold text-[#031632] block">
                      {stock.name}
                    </span>
                    <span className="text-[10px] text-[#75777E]">
                      {stock.countryFlag} {stock.country}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#E7E8E9] text-[#44474D]">
                      {stock.sector}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-serif font-bold text-[#031632]">
                    {formatFCFA(stock.price)}
                  </td>
                  <td className="py-3 px-4 text-right font-bold text-[#2C694E]">
                    {stock.dividendYield}%
                  </td>
                  <td className="py-3 px-4 text-right text-[#44474D] font-mono">
                    {stock.perRatio}x
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-[#EAF7EE] text-[#0E5138]">
                      {stock.stabilityScore}/100
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Detail Modal / Drawer */}
      {selectedStock && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-[#C5C6CE]/40 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#031632] text-white">
                    Rang #{selectedStock.rank}
                  </span>
                  <span className="text-xs text-[#75777E]">{selectedStock.countryFlag} {selectedStock.country} · {selectedStock.sector}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#031632]">
                  {selectedStock.name} ({selectedStock.ticker})
                </h3>
              </div>
              <button
                onClick={() => setSelectedStock(null)}
                className="p-1 rounded-lg text-[#75777E] hover:bg-[#F3F4F5] text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#44474D] leading-relaxed">
              {selectedStock.description}
            </p>

            <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4] space-y-2">
              <span className="text-[10px] uppercase font-bold text-[#2C694E] tracking-wider block">
                Point Fort & Thèse d'Investissement
              </span>
              <p className="text-xs font-medium text-[#031632]">
                {selectedStock.highlight}
              </p>
            </div>

            {/* Key Ratios Grid */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-[#F3F4F5] border border-[#E1E3E4]">
                <span className="text-[10px] text-[#75777E] block">Cours BRVM</span>
                <span className="font-serif font-bold text-xs text-[#031632]">
                  {formatFCFA(selectedStock.price)}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#EAF7EE] border border-[#2C694E]/20">
                <span className="text-[10px] text-[#2C694E] block">Dividende Net</span>
                <span className="font-serif font-bold text-xs text-[#2C694E]">
                  {selectedStock.dividendYield}% / an
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#F3F4F5] border border-[#E1E3E4]">
                <span className="text-[10px] text-[#75777E] block">PER / Ratio</span>
                <span className="font-serif font-bold text-xs text-[#031632]">
                  {selectedStock.perRatio}x
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedStock(null)}
              className="w-full py-3 rounded-xl bg-[#031632] hover:bg-[#1A2B48] text-white text-xs font-bold transition-colors"
            >
              Fermer la fiche
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
