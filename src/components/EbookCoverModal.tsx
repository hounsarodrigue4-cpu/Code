import React from 'react';
import { Sparkles, X, BookOpen, Download, Share2, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';

interface EbookCoverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCourse: () => void;
}

export const EbookCoverModal: React.FC<EbookCoverModalProps> = ({
  isOpen,
  onClose,
  onStartCourse,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-2xl w-full bg-[#031632] text-white rounded-3xl border border-[#1A2B48] shadow-2xl p-6 md:p-10 my-8 overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2C694E]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFE088]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1A2B48] text-white/80 hover:text-white hover:bg-[#2C694E] flex items-center justify-center transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Presentation Frame */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
          {/* Ebook Realistic 3D Mockup */}
          <div className="w-56 md:w-64 shrink-0 rounded-2xl bg-gradient-to-br from-[#031632] via-[#1A2B48] to-[#0E1E38] p-5 shadow-2xl border border-[#8293B5]/30 relative overflow-hidden flex flex-col justify-between aspect-[1/1.45] group">
            {/* Geometric luxury grid */}
            <div className="absolute inset-0 bg-pattern-subtle opacity-30 pointer-events-none" />

            {/* Top book badges */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#B1F0CE] bg-[#2C694E]/40 px-2 py-0.5 rounded border border-[#2C694E]/40">
                  Édition Complète
                </span>
                <span className="text-[9px] font-bold text-[#FFE088]">UEMOA</span>
              </div>
              <div className="w-8 h-1 bg-[#FFE088] rounded-full mb-3" />
            </div>

            {/* Book Title */}
            <div className="relative z-10 my-auto text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B6C7EB] block mb-1">
                Programme Numérique
              </span>
              <h2 className="font-serif text-2xl font-bold text-white tracking-tight leading-tight mb-2">
                PROGRAMME 3.0
              </h2>
              <div className="h-0.5 w-12 bg-[#2C694E] mb-2" />
              <p className="font-serif italic text-xs text-[#D7E2FF] leading-snug">
                Épargner et investir son salaire : Maîtrisez la BRVM et bâtissez votre patrimoine.
              </p>
            </div>

            {/* Book Footer */}
            <div className="relative z-10 pt-3 border-t border-[#8293B5]/20 flex items-center justify-between text-[9px] text-[#D7E2FF]/80">
              <span>Guide Pratique Salarié</span>
              <span className="font-bold text-[#FFE088]">8 PAYS</span>
            </div>
          </div>

          {/* Book Details and Syllabus */}
          <div className="flex-1 space-y-4 text-left">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#FFE088] block mb-1">
                Le Manuel de Référence
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                Devenir Rentier Grâce à son Salaire & la BRVM
              </h3>
              <p className="text-xs text-[#D7E2FF]/90 mt-1 leading-relaxed">
                Ce programme d'éducation financière a été spécialement conçu pour les salariés d'Afrique de l'Ouest désireux de passer de l'épargne passive à l'actionnariat à fort rendement.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#8293B5]/20 text-xs text-[#D7E2FF]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B1F0CE] shrink-0" />
                <span>6 Modules complets & Quiz interactifs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B1F0CE] shrink-0" />
                <span>Analyse détaillée des 20 valeurs leaders de la BRVM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B1F0CE] shrink-0" />
                <span>Simulateur de rente et intérêts composés sur 30 ans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B1F0CE] shrink-0" />
                <span>Annuaire officiel des SGI de Côte d'Ivoire, Sénégal, Bénin, Burkina, Togo</span>
              </div>
            </div>

            <div className="pt-3 flex gap-3">
              <button
                onClick={() => {
                  onClose();
                  onStartCourse();
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#2C694E] hover:bg-[#1E4D38] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Commencer la Lecture</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-3 rounded-xl bg-[#1A2B48] hover:bg-[#2A3F66] text-[#D7E2FF] text-xs font-semibold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
