import React, { useState } from 'react';
import { ActiveTab, CourseModule, UserFinancialProfile } from '../types';
import { COURSE_MODULES } from '../data/brvmData';
import { 
  BookOpen, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  GraduationCap,
  Layers,
  Search,
  Filter
} from 'lucide-react';

interface ModulesScreenProps {
  profile: UserFinancialProfile;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectModule: (moduleId: number) => void;
}

export const ModulesScreen: React.FC<ModulesScreenProps> = ({
  profile,
  setActiveTab,
  onSelectModule,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredModules = COURSE_MODULES.filter((m) => {
    const matchesCat = filterCategory === 'Tous' || m.category === filterCategory;
    const matchesSearch = 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const completedCount = profile.completedModules.length;
  const progressPercent = Math.round((completedCount / COURSE_MODULES.length) * 100);

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-center md:text-left mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF7EE] text-[#2C694E] text-xs font-bold uppercase tracking-wider mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Aperçu du cours</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#031632] mb-2">
          Table des Matières
        </h1>
        <p className="text-sm md:text-base text-[#44474D] max-w-2xl leading-relaxed">
          Naviguez à travers les 6 modules conçus pour transformer votre approche de l'épargne et bâtir un portefeuille résilient sur le marché de la BRVM.
        </p>

        {/* Global Progress Bar */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-[#C5C6CE]/30 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#031632] text-white flex items-center justify-center font-serif font-bold text-sm">
              {completedCount}/6
            </div>
            <div>
              <span className="text-xs font-bold text-[#031632] block">
                Progression du Programme 3.0
              </span>
              <span className="text-[11px] text-[#75777E]">
                {completedCount === 6 ? 'Félicitations ! Programme complété.' : `${6 - completedCount} modules restants`}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-48">
            <div className="w-full bg-[#E1E3E4] h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#2C694E] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-xs font-bold text-[#2C694E]">{progressPercent}%</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#75777E] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un module, concept, mot-clé..."
            className="w-full bg-white border border-[#C5C6CE]/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#031632] focus:outline-none focus:border-[#031632] transition-colors"
          />
        </div>

        {/* Category filters */}
        <div className="flex overflow-x-auto gap-1.5 pb-1 sm:pb-0">
          {['Tous', 'Diagnostic', 'Fondamentaux', 'BRVM', 'Stratégie', 'Action'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                filterCategory === cat
                  ? 'bg-[#031632] text-white shadow-xs'
                  : 'bg-white text-[#44474D] border border-[#C5C6CE]/40 hover:bg-[#F3F4F5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {filteredModules.map((module) => {
          const isCompleted = profile.completedModules.includes(module.id);
          const score = profile.quizScores[module.id];

          return (
            <div
              key={module.id}
              onClick={() => {
                onSelectModule(module.id);
                setActiveTab('module-detail');
              }}
              className="group block bg-white border border-[#C5C6CE]/30 rounded-2xl p-5 md:p-6 hover:shadow-md hover:border-[#2C694E] transition-all duration-200 cursor-pointer relative overflow-hidden"
            >
              {/* Decorative faint background number */}
              <span className="absolute -right-2 -bottom-4 font-serif text-8xl font-bold text-[#031632] opacity-[0.03] pointer-events-none group-hover:scale-105 transition-transform">
                {module.number}
              </span>

              <div className="flex items-start sm:items-center gap-4 relative z-10">
                {/* Number Badge */}
                <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-serif text-lg font-bold transition-colors ${
                  isCompleted 
                    ? 'bg-[#EAF7EE] text-[#2C694E] border border-[#2C694E]/30' 
                    : 'bg-[#F8F9FA] text-[#031632] border border-[#C5C6CE]/40 group-hover:bg-[#031632] group-hover:text-white'
                }`}>
                  {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : module.number}
                </div>

                {/* Info Text */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F3F4F5] text-[#44474D]">
                      {module.category}
                    </span>
                    <span className="text-[11px] text-[#75777E] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {module.estimatedMinutes} min
                    </span>
                    {score !== undefined && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#AEEECB] text-[#002114]">
                        Quiz validé : {score}%
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-base md:text-lg font-bold text-[#031632] group-hover:text-[#2C694E] transition-colors leading-snug">
                    {module.title}
                  </h2>
                  <p className="text-xs md:text-sm text-[#44474D] mt-1 line-clamp-2">
                    {module.shortDesc}
                  </p>
                </div>

                {/* Right Arrow */}
                <div className="shrink-0 text-[#75777E] group-hover:text-[#2C694E] group-hover:translate-x-1 transition-all pt-1 sm:pt-0">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
