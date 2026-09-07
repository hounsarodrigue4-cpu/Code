import React from 'react';
import { ActiveTab, UserFinancialProfile } from '../types';
import { Bookmark, TrendingUp, Sparkles, BookOpen, Menu, User, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  profile: UserFinancialProfile;
  completedModulesCount: number;
  totalModulesCount: number;
  onOpenCover: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  profile,
  completedModulesCount,
  totalModulesCount,
  onOpenCover,
}) => {
  const completionPercentage = Math.round((completedModulesCount / totalModulesCount) * 100);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FA]/95 backdrop-blur-md border-b border-[#C5C6CE]/30 h-16 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('onboarding')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Accueil Programme 3.0"
          >
            {/* Custom Shield & Growth Chart Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#031632] flex items-center justify-center text-white shadow-sm border border-[#1A2B48] group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#B1F0CE]" />
                <span className="absolute -bottom-1 -right-1 text-[9px] font-bold text-[#FFE088]">3.0</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-[#031632] text-lg tracking-tight leading-none">
                  Programme 3.0
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#AEEECB]/50 text-[#0E5138] uppercase tracking-wider hidden sm:inline-block">
                  BRVM
                </span>
              </div>
              <span className="text-xs text-[#44474D] font-normal leading-tight hidden xs:inline-block">
                Épargner & Investir son salaire
              </span>
            </div>
          </button>
        </div>

        {/* Center: Quick stats / Progress bar (desktop) */}
        <div className="hidden md:flex items-center gap-4 bg-white px-4 py-1.5 rounded-full border border-[#C5C6CE]/40 shadow-xs">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#2C694E]" />
            <span className="text-xs font-medium text-[#44474D]">Progression :</span>
            <span className="text-xs font-bold text-[#031632]">{completedModulesCount}/{totalModulesCount} modules</span>
          </div>
          <div className="w-24 bg-[#E1E3E4] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#2C694E] h-full transition-all duration-500 rounded-full"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className="text-xs font-bold text-[#2C694E]">{completionPercentage}%</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Ebook Cover Button */}
          <button
            onClick={onOpenCover}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#031632] bg-[#E7E8E9]/70 hover:bg-[#E1E3E4] rounded-lg transition-colors border border-[#C5C6CE]/40 active:scale-95"
            title="Voir la couverture du Programme 3.0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#CCA730]" />
            <span className="hidden sm:inline">Édition Complète</span>
          </button>

          {/* Diagnostic quick action if not completed */}
          {!profile.hasCompletedDiagnostic ? (
            <button
              onClick={() => setActiveTab('diagnostic')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#2C694E] hover:bg-[#1E4D38] rounded-lg transition-colors shadow-xs active:scale-95"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Diagnostic</span>
            </button>
          ) : (
            <button
              onClick={() => setActiveTab('profile')}
              className="w-8 h-8 rounded-full bg-[#031632] text-white flex items-center justify-center hover:bg-[#1A2B48] transition-colors border border-[#8293B5]/30 active:scale-95"
              aria-label="Mon Profil"
            >
              <User className="w-4 h-4 text-[#B1F0CE]" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
