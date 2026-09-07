import React, { useState } from 'react';
import { ActiveTab, UserFinancialProfile } from '../types';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  ShieldAlert, 
  TrendingUp, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  Building2, 
  Coins, 
  BookOpen,
  ArrowUpRight,
  Shield,
  Layers
} from 'lucide-react';

interface OnboardingScreenProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSelectModule: (moduleId: number) => void;
  onOpenCover: () => void;
  profile: UserFinancialProfile;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  setActiveTab,
  onSelectModule,
  onOpenCover,
  profile,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      tag: 'Le Problème',
      title: 'L\'Épargne Dormante Perd Silencieusement de la Valeur',
      desc: 'En Afrique de l\'Ouest, l\'inflation annuelle (4% à 7%) érode impitoyablement tout salaire laissé sur un compte bancaire classique. 1 000 000 FCFA immobile aujourd\'hui ne vaudra plus que la moitié de son pouvoir d\'achat dans 10 ans.',
      stat: '5.2% / an',
      statLabel: 'Inflation moyenne UEMOA',
      icon: ShieldAlert,
      badgeColor: 'bg-[#FFDAD6] text-[#93000A]',
      imageSeed: 'epargne-probleme',
      accentText: 'L\'épargne sans investissement est une dévaluation programmée.'
    },
    {
      id: 1,
      tag: 'La Solution',
      title: 'La BRVM : Le Trésor Méconnu de nos 8 Pays',
      desc: 'La Bourse Régionale des Valeurs Mobilières (BRVM) regroupe les fleurons économiques de la zone franc CFA : Sonatel, Orange, Coris Bank, TotalEnergies, SGBCI. Devenez copropriétaire d\'entreprises tangibles et encaissez des dividendes de 7% à 11% par an sans impôt sur les plus-values.',
      stat: '7% à 11%',
      statLabel: 'Rendement en dividendes des leaders',
      icon: Building2,
      badgeColor: 'bg-[#AEEECB] text-[#002114]',
      imageSeed: 'brvm-bourse-afrique',
      accentText: 'Possédez une part de l\'économie réelle ouest-africaine.'
    },
    {
      id: 2,
      tag: 'La Promesse',
      title: 'La Méthode 3.0 : Une Architecture en 3 Étapes',
      desc: '1. Diagnostiquer votre trésorerie (Règle 50/20/30) • 2. Séquestrer 30% dès le jour de paie pour votre fonds de sécurité puis vos actions • 3. Automatiser l\'achat mensuel (DCA) pour activer l\'effet multiplicateur des intérêts composés.',
      stat: '30%',
      statLabel: 'Règle de séquestration stratégique',
      icon: Sparkles,
      badgeColor: 'bg-[#FFE088] text-[#241A00]',
      imageSeed: 'methode-investissement',
      accentText: 'Bâtissez une rente de dividendes transmissible pour votre famille.'
    },
  ];

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Hero Welcome Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7E8E9] border border-[#C5C6CE]/50 text-xs font-semibold text-[#031632] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#CCA730]" />
          <span>Programme Numérique d'Éducation Financière</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#031632] tracking-tight leading-tight mb-4">
          Votre salaire peut travailler pour vous.
        </h1>
        <p className="text-base md:text-xl text-[#44474D] font-normal max-w-2xl mx-auto leading-relaxed">
          Maîtrisez les fondamentaux de l'épargne stratégique et bâtissez un portefeuille d'actions rentable sur la <strong className="text-[#031632]">BRVM</strong>.
        </p>
      </div>

      {/* 3 Interactive Introduction Slides Carousel */}
      <div className="bg-white rounded-2xl border border-[#C5C6CE]/30 shadow-md p-5 md:p-8 mb-8 overflow-hidden relative">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 bg-pattern-subtle opacity-60 pointer-events-none" />

        {/* Slide Indicators */}
        <div className="flex items-center justify-between mb-6 relative z-10 border-b border-[#E1E3E4] pb-4">
          <div className="flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx 
                    ? 'w-8 bg-[#031632]' 
                    : 'w-2.5 bg-[#C5C6CE]/60 hover:bg-[#8293B5]'
                }`}
                aria-label={`Aller au slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#44474D]">
            Étape {currentSlide + 1} sur 3
          </span>
        </div>

        {/* Current Slide Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
          {/* Left / Top: Info text */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-4">
            <div>
              <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-2.5 ${slides[currentSlide].badgeColor}`}>
                {slides[currentSlide].tag}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#031632] leading-snug mb-3">
                {slides[currentSlide].title}
              </h2>
              <p className="text-sm md:text-base text-[#44474D] leading-relaxed">
                {slides[currentSlide].desc}
              </p>
            </div>

            {/* Key stat card */}
            <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#C5C6CE]/40 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#75777E] uppercase tracking-wider font-semibold block">
                  {slides[currentSlide].statLabel}
                </span>
                <span className="text-xs text-[#031632] font-medium italic mt-0.5 block">
                  {slides[currentSlide].accentText}
                </span>
              </div>
              <div className="text-xl md:text-2xl font-serif font-bold text-[#2C694E] ml-4 shrink-0">
                {slides[currentSlide].stat}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 2))}
                className="p-2.5 rounded-full border border-[#C5C6CE]/50 text-[#031632] hover:bg-[#F3F4F5] transition-colors"
                aria-label="Slide précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0))}
                className="p-2.5 rounded-full border border-[#C5C6CE]/50 text-[#031632] hover:bg-[#F3F4F5] transition-colors"
                aria-label="Slide suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-[#75777E] italic ml-2">
                Glissez ou cliquez pour explorer
              </span>
            </div>
          </div>

          {/* Right: Dynamic Visual Card */}
          <div className="md:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-md border border-[#1A2B48]/10 bg-[#031632] text-white p-5 flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#1A2B48] flex items-center justify-center text-[#B1F0CE]">
                  {React.createElement(slides[currentSlide].icon, { className: 'w-6 h-6' })}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B6C7EB]">
                  UEMOA · 8 PAYS
                </span>
              </div>
              
              <div className="my-auto">
                <img
                  src={`https://picsum.photos/seed/${slides[currentSlide].imageSeed}/400/240`}
                  alt={slides[currentSlide].title}
                  className="w-full h-32 object-cover rounded-lg mb-3 brightness-90 contrast-105"
                  loading="lazy"
                />
              </div>

              <div className="text-xs text-[#D7E2FF] flex items-center justify-between pt-2 border-t border-[#8293B5]/20">
                <span>Programme 3.0</span>
                <span className="font-bold text-[#FFE088]">Bourse BRVM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Action CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <button
          onClick={() => setActiveTab('diagnostic')}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-[#031632] text-white hover:bg-[#1A2B48] transition-all duration-200 shadow-md active:scale-[0.98] border border-[#1A2B48]"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#2C694E] flex items-center justify-center text-[#B1F0CE] group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-xs text-[#B6C7EB] uppercase font-bold tracking-wider block">
                Étape 1 Recommandée
              </span>
              <span className="text-base md:text-lg font-bold font-serif text-white">
                Commencer mon diagnostic
              </span>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-[#B1F0CE] group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={() => setActiveTab('simulator')}
          className="group relative flex items-center justify-between p-5 rounded-2xl bg-white text-[#031632] hover:bg-[#F3F4F5] transition-all duration-200 shadow-sm border border-[#C5C6CE]/40 active:scale-[0.98]"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#FFE088]/40 flex items-center justify-center text-[#735C00] group-hover:scale-105 transition-transform">
              <Coins className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-xs text-[#75777E] uppercase font-bold tracking-wider block">
                Simulateur de Rente
              </span>
              <span className="text-base md:text-lg font-bold font-serif text-[#031632]">
                Projeter mon patrimoine
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#2C694E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Quick overview of the 6 modules */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#031632]">
              Le Parcours de Formation (6 Modules)
            </h3>
            <p className="text-xs text-[#44474D]">
              De l'audit de votre salaire à la gestion de vos premières actions BRVM
            </p>
          </div>
          <button
            onClick={() => setActiveTab('modules')}
            className="text-xs font-bold text-[#2C694E] hover:underline flex items-center gap-1"
          >
            <span>Voir tout</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { num: '01', title: 'Diagnostic & Mindset', desc: 'Déconstruire les mythes et la règle des 30%' },
            { num: '02', title: 'Épargne Stratégique', desc: 'Fonds d\'urgence 3 à 6 mois et trésorerie' },
            { num: '03', title: 'Comprendre la BRVM', desc: 'Marché UEMOA, SGI, cotations et fiscalité' },
            { num: '04', title: 'Choisir ses Actions', desc: 'Analyse fondamentale, PER et dividendes' },
            { num: '05', title: 'Achats Programmés (DCA)', desc: 'Investir chaque mois sans subir le stress' },
            { num: '06', title: 'Suivi & Plan d\'Action', desc: 'Erreurs à éviter et passage à l\'action SGI' },
          ].map((item, idx) => (
            <button
              key={item.num}
              onClick={() => {
                onSelectModule(idx + 1);
                setActiveTab('module-detail');
              }}
              className="p-4 rounded-xl bg-white border border-[#C5C6CE]/30 hover:border-[#2C694E] transition-all text-left group hover:shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#031632] text-white flex items-center justify-center text-xs font-bold font-serif group-hover:bg-[#2C694E] transition-colors">
                  {item.num}
                </span>
                <h4 className="font-serif text-sm font-bold text-[#031632] group-hover:text-[#2C694E] transition-colors">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-[#44474D] line-clamp-1 pl-10">
                {item.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="p-6 rounded-2xl bg-[#1A2B48] text-white border border-[#031632] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#2C694E] flex items-center justify-center text-[#B1F0CE] shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-0.5">
              100% Adapté à l'Espace Financier UEMOA
            </h4>
            <p className="text-xs text-[#D7E2FF]/80 max-w-xl">
              Données conformes aux réglementations de l'AMF-UMOA, cotations en FCFA, fiscalité locale et annuaire des SGI agréées en Côte d'Ivoire, Sénégal, Bénin, Burkina, Togo, Mali, Niger.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenCover}
          className="px-4 py-2 rounded-lg bg-[#FFE088] text-[#241A00] hover:bg-[#CCA730] hover:text-white font-bold text-xs transition-colors shrink-0 whitespace-nowrap"
        >
          Découvrir l'E-book
        </button>
      </div>
    </div>
  );
};
