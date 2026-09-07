import React, { useState } from 'react';
import { ActiveTab, UserFinancialProfile } from '../types';
import { SGI_DIRECTORY, COURSE_MODULES } from '../data/brvmData';
import { 
  User, 
  Award, 
  CheckCircle2, 
  PiggyBank, 
  Plus, 
  Trash2, 
  Building2, 
  Compass, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Phone, 
  MapPin,
  Calendar,
  RotateCcw,
  BookOpen,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProfileScreenProps {
  profile: UserFinancialProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserFinancialProfile>>;
  setActiveTab: (tab: ActiveTab) => void;
  onSelectModule: (moduleId: number) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  profile,
  setProfile,
  setActiveTab,
  onSelectModule,
}) => {
  const [showAddLogModal, setShowAddLogModal] = useState(false);
  const [logAmount, setLogAmount] = useState<number>(profile.monthlySalary * 0.3 || 150000);
  const [logCategory, setLogCategory] = useState<'emergency_fund' | 'brvm_investment'>('brvm_investment');
  const [logNotes, setLogNotes] = useState<string>('Achat programmé 5 actions Sonatel (SNTS)');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('Tous');

  const completedCount = profile.completedModules.length;
  const totalModules = COURSE_MODULES.length;
  const progressPercent = Math.round((completedCount / totalModules) * 100);

  const formatFCFA = (val: number) => {
    return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA';
  };

  const totalSavedLogged = profile.monthlySavingsHistory.reduce((acc, curr) => acc + curr.amount, 0);

  const handleAddSavingsLog = (e: React.FormEvent) => {
    e.preventDefault();
    const newLog = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      amount: logAmount,
      category: logCategory,
      notes: logNotes,
    };

    setProfile(prev => ({
      ...prev,
      monthlySavingsHistory: [newLog, ...prev.monthlySavingsHistory],
      simulatedPortfolioValue: logCategory === 'brvm_investment' 
        ? prev.simulatedPortfolioValue + logAmount 
        : prev.simulatedPortfolioValue,
    }));

    setShowAddLogModal(false);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleDeleteLog = (logId: string) => {
    setProfile(prev => ({
      ...prev,
      monthlySavingsHistory: prev.monthlySavingsHistory.filter(l => l.id !== logId),
    }));
  };

  const badges = [
    {
      id: 'diag',
      title: 'Diagnostic Accompli',
      desc: 'A audité son salaire et défini la règle 50/20/30',
      unlocked: profile.hasCompletedDiagnostic,
      icon: Compass,
      color: 'bg-[#AEEECB] text-[#002114]',
    },
    {
      id: 'course_half',
      title: 'Stratège 30%',
      desc: 'A validé au moins 3 modules du programme',
      unlocked: completedCount >= 3,
      icon: Sparkles,
      color: 'bg-[#FFE088] text-[#241A00]',
    },
    {
      id: 'brvm_master',
      title: 'Maître BRVM',
      desc: 'A complété l\'intégralité des 6 modules',
      unlocked: completedCount === 6,
      icon: Award,
      color: 'bg-[#031632] text-white',
    },
    {
      id: 'first_dca',
      title: 'Investisseur Actif',
      desc: 'A enregistré au moins un versement d\'épargne BRVM',
      unlocked: profile.monthlySavingsHistory.length > 0,
      icon: TrendingUp,
      color: 'bg-[#EAF7EE] text-[#2C694E]',
    },
  ];

  const filteredSGI = SGI_DIRECTORY.filter(
    sgi => selectedCountryFilter === 'Tous' || sgi.country === selectedCountryFilter
  );

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-5xl mx-auto space-y-8">
      {/* Profile Banner */}
      <div className="bg-[#031632] text-white p-6 md:p-8 rounded-2xl border border-[#1A2B48] shadow-md relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#1A2B48] border-2 border-[#B1F0CE] flex items-center justify-center text-[#B1F0CE] font-serif text-2xl font-bold">
            {profile.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-serif text-xl md:text-2xl font-bold text-white">
                {profile.name}
              </h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#AEEECB] text-[#002114]">
                {completedCount === 6 ? 'Investisseur Confirmé' : 'Apprenti Investisseur'}
              </span>
            </div>
            <p className="text-xs text-[#D7E2FF]/80">
              Salaire audité : <strong className="text-white">{formatFCFA(profile.monthlySalary)}</strong> · Taux d'épargne : <strong className="text-[#FFE088]">{profile.savingsRate}%</strong>
            </p>
          </div>
        </div>

        {/* Course Progress Widget */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 w-full md:w-64 space-y-2 relative z-10">
          <div className="flex justify-between text-xs text-[#D7E2FF]">
            <span>Formation Programme 3.0</span>
            <span className="font-bold text-[#B1F0CE]">{completedCount}/{totalModules} modules</span>
          </div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#B1F0CE] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] text-[#D7E2FF]/70 block text-right">
            {progressPercent}% complété
          </span>
        </div>
      </div>

      {/* Badges & Achievements */}
      <div className="bg-white p-6 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-4">
        <h2 className="font-serif text-lg font-bold text-[#031632] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#CCA730]" />
          <span>Badges & Succès Débloqués</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-2 ${
                  b.unlocked
                    ? 'bg-[#F8F9FA] border-[#2C694E]/40'
                    : 'bg-[#F3F4F5] border-[#E1E3E4] opacity-50 grayscale'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${b.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  {b.unlocked && (
                    <span className="text-[10px] font-bold text-[#2C694E] flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      Acquis
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#031632]">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-[#44474D] mt-0.5 leading-tight">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real Savings Tracker & Logbook */}
      <div className="bg-white p-6 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-serif text-lg font-bold text-[#031632] flex items-center gap-2">
              <PiggyBank className="w-5 h-5 text-[#2C694E]" />
              <span>Mon Carnet d'Épargne & DCA BRVM</span>
            </h2>
            <p className="text-xs text-[#75777E]">
              Enregistrez vos versements réels du jour de paye (fonds d'urgence ou actions SGI).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#2C694E] bg-[#EAF7EE] px-3 py-1 rounded-lg">
              Total épargné : {formatFCFA(totalSavedLogged)}
            </span>
            <button
              onClick={() => setShowAddLogModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#031632] hover:bg-[#1A2B48] text-white text-xs font-semibold shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Nouveau versement</span>
            </button>
          </div>
        </div>

        {/* History List */}
        {profile.monthlySavingsHistory.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-[#E1E3E4] rounded-xl">
            <PiggyBank className="w-8 h-8 text-[#C5C6CE] mx-auto mb-2" />
            <p className="text-xs text-[#75777E]">
              Aucun versement enregistré pour le moment.
            </p>
            <button
              onClick={() => setShowAddLogModal(true)}
              className="mt-2 text-xs font-bold text-[#2C694E] hover:underline"
            >
              + Enregistrer mon premier versement mensuel
            </button>
          </div>
        ) : (
          <div className="divide-y divide-[#E1E3E4] border border-[#E1E3E4] rounded-xl overflow-hidden">
            {profile.monthlySavingsHistory.map((log) => (
              <div key={log.id} className="p-3.5 flex items-center justify-between hover:bg-[#F8F9FA] transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    log.category === 'brvm_investment' ? 'bg-[#EAF7EE] text-[#2C694E]' : 'bg-[#E7E8E9] text-[#031632]'
                  }`}>
                    {log.category === 'brvm_investment' ? <TrendingUp className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-xs text-[#031632]">
                        {formatFCFA(log.amount)}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#F3F4F5] text-[#44474D]">
                        {log.category === 'brvm_investment' ? 'Investissement BRVM' : 'Fonds de Sécurité'}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#75777E]">{log.notes || 'Versement mensuel'} · <span className="italic">{log.date}</span></p>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteLog(log.id)}
                  className="text-[#75777E] hover:text-[#BA1A1A] p-1.5 rounded-md transition-colors"
                  title="Supprimer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Guide Pratique : "Ouvrir son compte SGI en 4 étapes" */}
      <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#C5C6CE]/30 shadow-xs space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE088]/40 text-[#735C00] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Passage à l'Action</span>
          </div>
          <h2 className="font-serif text-xl font-bold text-[#031632]">
            Guide Pratique : Comment Ouvrir son Compte Titres (SGI)
          </h2>
          <p className="text-xs text-[#44474D]">
            Les SGI (Sociétés de Gestion et d'Intermédiation) sont les seuls intermédiaires habilités par l'AMF-UMOA pour acheter des actions BRVM.
          </p>
        </div>

        {/* 4 Steps Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { step: '01', title: 'Choisir sa SGI', desc: 'Sélectionnez une SGI dans votre pays offrant une plateforme d\'ordres en ligne ou mobile.' },
            { step: '02', title: 'Fournir les Pièces', desc: 'Pièce d\'identité (CNI/Passeport), justificatif de domicile et un RIB de votre banque.' },
            { step: '03', title: 'Premier Dépôt', desc: 'Effectuez un virement bancaire pour approvisionner votre compte espèces SGI.' },
            { step: '04', title: 'Premier Ordre', desc: 'Achetez vos premières actions sur une valeur défensive à fort dividende (ex: Sonatel).' },
          ].map((s) => (
            <div key={s.step} className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4]">
              <span className="font-serif font-bold text-lg text-[#2C694E] block mb-1">
                Étape {s.step}
              </span>
              <h3 className="font-serif font-bold text-xs text-[#031632] mb-1">
                {s.title}
              </h3>
              <p className="text-[11px] text-[#44474D] leading-snug">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Annuaire des SGI agréées */}
        <div className="pt-4 border-t border-[#E1E3E4] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-serif text-base font-bold text-[#031632]">
              Annuaire des Principales SGI Agréées (UEMOA)
            </h3>

            {/* Country filter */}
            <div className="flex gap-1 overflow-x-auto">
              {['Tous', 'Côte d\'Ivoire', 'Sénégal', 'Burkina Faso', 'Bénin', 'Togo'].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCountryFilter(c)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCountryFilter === c
                      ? 'bg-[#031632] text-white'
                      : 'bg-[#F3F4F5] text-[#44474D] hover:bg-[#E7E8E9]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSGI.map((sgi) => (
              <div key={sgi.id} className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4] flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif font-bold text-xs text-[#031632]">
                      {sgi.name}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#E7E8E9] text-[#44474D]">
                      {sgi.country}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#75777E] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#2C694E] shrink-0" />
                    <span>{sgi.city}</span>
                  </p>
                  <p className="text-[11px] text-[#44474D] mt-1">
                    Frais : <strong className="text-[#031632]">{sgi.feeStructure}</strong>
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E1E3E4] flex items-center justify-between text-[11px]">
                  <span className="text-[#2C694E] font-medium">{sgi.contactPhone}</span>
                  <a
                    href={sgi.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#031632] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Visiter</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Savings Log Modal */}
      {showAddLogModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C5C6CE]/40 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-[#E1E3E4] pb-3">
              <h3 className="font-serif text-lg font-bold text-[#031632]">
                Enregistrer un Versement d'Épargne
              </h3>
              <button
                onClick={() => setShowAddLogModal(false)}
                className="text-[#75777E] hover:bg-[#F3F4F5] p-1 rounded-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSavingsLog} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#44474D] uppercase tracking-wider mb-1">
                  Montant Épargné (FCFA)
                </label>
                <input
                  type="number"
                  required
                  value={logAmount}
                  onChange={(e) => setLogAmount(Number(e.target.value))}
                  step="5000"
                  min="5000"
                  className="w-full bg-[#F8F9FA] border border-[#031632]/20 rounded-xl px-3.5 py-2.5 font-serif font-bold text-sm text-[#031632] focus:outline-none focus:border-[#031632]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#44474D] uppercase tracking-wider mb-1">
                  Destination du Versement
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLogCategory('brvm_investment')}
                    className={`py-2 px-3 rounded-xl border text-center font-semibold transition-colors ${
                      logCategory === 'brvm_investment'
                        ? 'bg-[#031632] text-white border-[#031632]'
                        : 'bg-[#F8F9FA] text-[#44474D] border-[#E1E3E4]'
                    }`}
                  >
                    Bourse BRVM (SGI)
                  </button>
                  <button
                    type="button"
                    onClick={() => setLogCategory('emergency_fund')}
                    className={`py-2 px-3 rounded-xl border text-center font-semibold transition-colors ${
                      logCategory === 'emergency_fund'
                        ? 'bg-[#031632] text-white border-[#031632]'
                        : 'bg-[#F8F9FA] text-[#44474D] border-[#E1E3E4]'
                    }`}
                  >
                    Fonds d'Urgence
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#44474D] uppercase tracking-wider mb-1">
                  Notes / Titres Achetés
                </label>
                <input
                  type="text"
                  value={logNotes}
                  onChange={(e) => setLogNotes(e.target.value)}
                  placeholder="Ex: Achat 3 actions Sonatel, 2 Orange CI..."
                  className="w-full bg-[#F8F9FA] border border-[#031632]/20 rounded-xl px-3.5 py-2.5 text-[#031632] focus:outline-none focus:border-[#031632]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#2C694E] hover:bg-[#1E4D38] text-white font-bold transition-colors shadow-xs"
              >
                Confirmer l'enregistrement
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
