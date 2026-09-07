import React, { useState, useEffect } from 'react';
import { ActiveTab, UserFinancialProfile } from './types';
import { COURSE_MODULES } from './data/brvmData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { OnboardingScreen } from './components/OnboardingScreen';
import { DiagnosticScreen } from './components/DiagnosticScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { ModulesScreen } from './components/ModulesScreen';
import { ModuleDetailScreen } from './components/ModuleDetailScreen';
import { LeadersListScreen } from './components/LeadersListScreen';
import { SimulatorScreen } from './components/SimulatorScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { EbookCoverModal } from './components/EbookCoverModal';

const STORAGE_KEY = 'programme_3_0_profile_v1';

const defaultProfile: UserFinancialProfile = {
  name: 'Kouamé Diallo',
  monthlySalary: 500000,
  fixedExpenses: 250000,
  discretionaryExpenses: 100000,
  savingsRate: 30,
  riskTolerance: 'moderate',
  completedModules: [1],
  quizScores: { 1: 100 },
  hasCompletedDiagnostic: true,
  simulatedPortfolioValue: 3600000,
  monthlySavingsHistory: [
    {
      id: 'init-1',
      date: '2025-01-28',
      amount: 150000,
      category: 'brvm_investment',
      notes: 'Premier achat 6 actions Sonatel (SNTS) via SGI',
    },
    {
      id: 'init-2',
      date: '2025-02-28',
      amount: 150000,
      category: 'brvm_investment',
      notes: 'Achat 10 actions Orange CI (ORAC)',
    },
  ],
};

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('onboarding');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [isCoverModalOpen, setIsCoverModalOpen] = useState<boolean>(false);

  // Load or initialize user profile from localStorage
  const [profile, setProfile] = useState<UserFinancialProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not load profile from localStorage', e);
    }
    return defaultProfile;
  });

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('Could not save profile to localStorage', e);
    }
  }, [profile]);

  // Scroll to top on tab change
  const handleTabChange = (newTab: ActiveTab) => {
    setActiveTab(newTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModule = (modId: number) => {
    setSelectedModuleId(modId);
    setActiveTab('module-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#191C1D] flex flex-col font-sans selection:bg-[#AEEECB] selection:text-[#002114]">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        profile={profile}
        completedModulesCount={profile.completedModules.length}
        totalModulesCount={COURSE_MODULES.length}
        onOpenCover={() => setIsCoverModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'onboarding' && (
          <OnboardingScreen
            setActiveTab={handleTabChange}
            onSelectModule={handleSelectModule}
            onOpenCover={() => setIsCoverModalOpen(true)}
            profile={profile}
          />
        )}

        {activeTab === 'diagnostic' && (
          <DiagnosticScreen
            profile={profile}
            setProfile={setProfile}
            setActiveTab={handleTabChange}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardScreen
            profile={profile}
            setActiveTab={handleTabChange}
            onSelectModule={handleSelectModule}
          />
        )}

        {activeTab === 'modules' && (
          <ModulesScreen
            profile={profile}
            setActiveTab={handleTabChange}
            onSelectModule={handleSelectModule}
          />
        )}

        {activeTab === 'module-detail' && (
          <ModuleDetailScreen
            moduleId={selectedModuleId}
            setModuleId={setSelectedModuleId}
            setActiveTab={handleTabChange}
            profile={profile}
            setProfile={setProfile}
          />
        )}

        {activeTab === 'leaders-list' && (
          <LeadersListScreen
            setActiveTab={handleTabChange}
          />
        )}

        {activeTab === 'simulator' && (
          <SimulatorScreen
            profile={profile}
            setActiveTab={handleTabChange}
            onSelectModule={handleSelectModule}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileScreen
            profile={profile}
            setProfile={setProfile}
            setActiveTab={handleTabChange}
            onSelectModule={handleSelectModule}
          />
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Book Cover Modal */}
      <EbookCoverModal
        isOpen={isCoverModalOpen}
        onClose={() => setIsCoverModalOpen(false)}
        onStartCourse={() => {
          setIsCoverModalOpen(false);
          handleSelectModule(1);
        }}
      />
    </div>
  );
}

export default App;
