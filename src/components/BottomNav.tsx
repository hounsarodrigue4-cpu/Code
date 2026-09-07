import React from 'react';
import { ActiveTab } from '../types';
import { 
  Home, 
  Compass, 
  LayoutDashboard, 
  BookOpen, 
  Calculator, 
  User,
  ArrowLeft,
  Grid,
  ArrowRight
} from 'lucide-react';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onPrev?: () => void;
  onNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  onPrev,
  onNext,
  canPrev = false,
  canNext = false,
}) => {
  const navItems = [
    {
      id: 'onboarding' as ActiveTab,
      label: 'Accueil',
      icon: Home,
    },
    {
      id: 'diagnostic' as ActiveTab,
      label: 'Diagnostic',
      icon: Compass,
    },
    {
      id: 'dashboard' as ActiveTab,
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'modules' as ActiveTab,
      label: 'Modules',
      icon: BookOpen,
    },
    {
      id: 'simulator' as ActiveTab,
      label: 'Simulateur',
      icon: Calculator,
    },
    {
      id: 'profile' as ActiveTab,
      label: 'Profil',
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#F8F9FA]/95 backdrop-blur-lg border-t border-[#C5C6CE]/30 shadow-lg px-2 py-1.5 md:py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id || (item.id === 'modules' && activeTab === 'module-detail');

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'bg-[#AEEECB]/70 text-[#0E5138] font-bold shadow-xs'
                  : 'text-[#44474D] hover:text-[#031632] hover:bg-[#E7E8E9]/50'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-[10px] tracking-tight whitespace-nowrap ${isActive ? 'font-bold text-[#0E5138]' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
