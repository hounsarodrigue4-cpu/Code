import React, { useState } from 'react';
import { ActiveTab, CourseModule, UserFinancialProfile } from '../types';
import { COURSE_MODULES, BRVM_LEADERS } from '../data/brvmData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  BookOpen, 
  Bookmark, 
  Share2, 
  TrendingUp, 
  Coins, 
  ShieldCheck, 
  Award, 
  RotateCcw,
  BarChart2,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModuleDetailScreenProps {
  moduleId: number;
  setModuleId: (id: number) => void;
  setActiveTab: (tab: ActiveTab) => void;
  profile: UserFinancialProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserFinancialProfile>>;
}

export const ModuleDetailScreen: React.FC<ModuleDetailScreenProps> = ({
  moduleId,
  setModuleId,
  setActiveTab,
  profile,
  setProfile,
}) => {
  const currentModule = COURSE_MODULES.find((m) => m.id === moduleId) || COURSE_MODULES[0];
  
  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [activeTabSection, setActiveTabSection] = useState<'content' | 'quiz'>('content');

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleEvaluateQuiz = () => {
    let correctCount = 0;
    currentModule.quiz.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const scorePercentage = Math.round((correctCount / currentModule.quiz.length) * 100);
    setQuizScore(scorePercentage);
    setQuizSubmitted(true);

    if (scorePercentage >= 60) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Mark module as completed in profile
      setProfile(prev => ({
        ...prev,
        completedModules: Array.from(new Set([...prev.completedModules, currentModule.id])),
        quizScores: {
          ...prev.quizScores,
          [currentModule.id]: scorePercentage,
        }
      }));
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const handleNextModule = () => {
    if (moduleId < COURSE_MODULES.length) {
      setModuleId(moduleId + 1);
      setActiveTabSection('content');
      setSelectedAnswers({});
      setQuizSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveTab('profile');
    }
  };

  const handlePrevModule = () => {
    if (moduleId > 1) {
      setModuleId(moduleId - 1);
      setActiveTabSection('content');
      setSelectedAnswers({});
      setQuizSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveTab('modules');
    }
  };

  const isCompleted = profile.completedModules.includes(currentModule.id);

  return (
    <div className="min-h-screen pb-28 pt-20 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Top Header & Breadcrumb */}
      <div className="flex items-center justify-between mb-4 border-b border-[#E1E3E4] pb-3">
        <button
          onClick={() => setActiveTab('modules')}
          className="flex items-center gap-1.5 text-xs font-bold text-[#031632] hover:text-[#2C694E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sommaire des Modules</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#AEEECB]/60 text-[#0E5138]">
            Module {currentModule.number} / 06
          </span>
          {isCompleted && (
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#2C694E] text-white flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Validé
            </span>
          )}
        </div>
      </div>

      {/* Main Content Article Container */}
      <article className="bg-white rounded-2xl border border-[#C5C6CE]/30 p-6 md:p-10 shadow-sm relative overflow-hidden mb-8">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 bg-pattern-subtle opacity-50 pointer-events-none" />

        <div className="relative z-10">
          {/* Module Heading */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2C694E] block mb-1">
              MODULE {currentModule.number} · {currentModule.category.toUpperCase()}
            </span>
            <h1 className="font-serif text-2xl md:text-4xl font-bold text-[#031632] mb-3 leading-tight">
              {currentModule.title}
            </h1>
            <p className="font-serif italic text-base md:text-lg text-[#44474D] max-w-2xl leading-relaxed">
              {currentModule.subtitle}
            </p>
          </div>

          {/* Module Hero Image */}
          <figure className="mb-8 rounded-xl overflow-hidden shadow-sm border border-[#031632]/10">
            <img
              src={`https://picsum.photos/seed/${currentModule.imageSeed}/800/420`}
              alt={currentModule.title}
              className="w-full h-56 md:h-80 object-cover brightness-95 contrast-105"
            />
            <figcaption className="p-3 bg-[#F8F9FA] text-[11px] text-[#75777E] text-center border-t border-[#E1E3E4]">
              Programme 3.0 — Architecture Financière & Bourse Régionale des Valeurs Mobilières (UEMOA).
            </figcaption>
          </figure>

          {/* Tabs: Content vs Quiz */}
          <div className="flex border-b border-[#E1E3E4] mb-6">
            <button
              onClick={() => setActiveTabSection('content')}
              className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
                activeTabSection === 'content'
                  ? 'border-[#031632] text-[#031632]'
                  : 'border-transparent text-[#75777E] hover:text-[#031632]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Contenu Pédagogique</span>
            </button>
            <button
              onClick={() => setActiveTabSection('quiz')}
              className={`pb-3 px-4 text-xs font-bold transition-all border-b-2 flex items-center gap-1.5 ${
                activeTabSection === 'quiz'
                  ? 'border-[#2C694E] text-[#2C694E]'
                  : 'border-transparent text-[#75777E] hover:text-[#2C694E]'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Quiz de Validation ({currentModule.quiz.length} questions)</span>
              {isCompleted && <span className="text-[10px] bg-[#AEEECB] text-[#002114] px-1.5 py-0.2 rounded font-bold">Validé</span>}
            </button>
          </div>

          {/* Content Section */}
          {activeTabSection === 'content' && (
            <div className="space-y-6">
              {currentModule.sections.map((section) => (
                <div key={section.id} className="space-y-4">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-[#031632]">
                    {section.title}
                  </h2>

                  {/* Paragraphs */}
                  <div className="space-y-3 text-sm md:text-base text-[#191C1D] leading-relaxed font-sans">
                    {section.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Special Callouts (The 30% Rule, Quotes, Insights) */}
                  {section.callout && (
                    <div className="my-6 p-5 md:p-6 rounded-xl bg-[#031632] text-white border-l-4 border-[#2C694E] shadow-sm relative overflow-hidden">
                      <div className="relative z-10">
                        <h3 className="font-serif text-lg font-bold text-[#FFE088] mb-1.5">
                          {section.callout.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#D7E2FF] leading-relaxed">
                          {section.callout.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Key Takeaways Bento Grid */}
                  {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                      {section.keyTakeaways.map((takeaway, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[#F8F9FA] border border-[#C5C6CE]/40 hover:border-[#2C694E]/60 transition-colors"
                        >
                          <span className="text-xs font-bold uppercase tracking-wider text-[#2C694E] block mb-1">
                            {takeaway.title}
                          </span>
                          <p className="text-xs md:text-sm text-[#44474D]">
                            {takeaway.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Lexicon Items */}
                  {section.lexiconItems && section.lexiconItems.length > 0 && (
                    <div className="my-6 p-5 rounded-xl bg-[#F8F9FA] border border-[#CCA730]/30 relative">
                      <h3 className="font-serif text-base font-bold text-[#031632] mb-4 flex items-center gap-2">
                        <Coins className="w-5 h-5 text-[#CCA730]" />
                        <span>Lexique de l'Investisseur BRVM</span>
                      </h3>
                      <div className="space-y-3">
                        {section.lexiconItems.map((item, idx) => (
                          <div key={idx} className="border-l-2 border-[#031632] pl-3">
                            <span className="font-serif font-bold text-sm text-[#031632] block">
                              {item.term}
                            </span>
                            <span className="text-xs text-[#44474D] block mt-0.5 leading-relaxed">
                              {item.definition}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* In-Module Interactive Tools Shortcut */}
              <div className="p-5 md:p-6 rounded-2xl bg-[#031632] text-white flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    Prêt à simuler votre stratégie ?
                  </h3>
                  <p className="text-xs text-[#D7E2FF] max-w-md">
                    Projetez la croissance de votre épargne mensuelle avec les intérêts composés et dividendes réinvestis.
                  </p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button
                    onClick={() => setActiveTab('simulator')}
                    className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-[#2C694E] hover:bg-[#1E4D38] text-white text-xs font-bold transition-colors whitespace-nowrap"
                  >
                    Ouvrir le Simulateur
                  </button>
                  <button
                    onClick={() => setActiveTabSection('quiz')}
                    className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-[#FFE088] hover:bg-[#CCA730] text-[#241A00] hover:text-white text-xs font-bold transition-colors whitespace-nowrap"
                  >
                    Passer le Quiz
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Section */}
          {activeTabSection === 'quiz' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E1E3E4]">
                <h3 className="font-serif text-base font-bold text-[#031632] mb-1">
                  Validation du Module {currentModule.number}
                </h3>
                <p className="text-xs text-[#44474D]">
                  Répondez correctement à ces {currentModule.quiz.length} questions pour valider vos acquis et débloquer votre badge.
                </p>
              </div>

              {/* Question list */}
              <div className="space-y-6">
                {currentModule.quiz.map((q, qIndex) => {
                  const isSelected = selectedAnswers[q.id] !== undefined;
                  const isCorrect = selectedAnswers[q.id] === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-xl bg-[#F8F9FA] border border-[#C5C6CE]/40 space-y-3"
                    >
                      <div className="flex items-start gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#031632] text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {qIndex + 1}
                        </span>
                        <h4 className="font-serif text-sm md:text-base font-bold text-[#031632]">
                          {q.question}
                        </h4>
                      </div>

                      {/* Options */}
                      <div className="space-y-2 pt-1 pl-8">
                        {q.options.map((option, optIdx) => {
                          const isOptionChosen = selectedAnswers[q.id] === optIdx;
                          let btnStyle = 'bg-white border-[#C5C6CE]/40 text-[#191C1D] hover:bg-[#F3F4F5]';

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'bg-[#EAF7EE] border-[#2C694E] text-[#0E5138] font-bold';
                            } else if (isOptionChosen) {
                              btnStyle = 'bg-[#FFDAD6] border-[#BA1A1A] text-[#93000A] font-bold';
                            } else {
                              btnStyle = 'bg-white border-[#E1E3E4] text-[#75777E] opacity-60';
                            }
                          } else if (isOptionChosen) {
                            btnStyle = 'bg-[#031632] text-white border-[#031632] font-semibold';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={quizSubmitted}
                              className={`w-full text-left p-3 rounded-xl border text-xs md:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{option}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-[#2C694E] shrink-0 ml-2" />
                              )}
                              {quizSubmitted && isOptionChosen && optIdx !== q.correctIndex && (
                                <XCircle className="w-4 h-4 text-[#BA1A1A] shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation if submitted */}
                      {quizSubmitted && (
                        <div className="mt-3 p-3 rounded-lg bg-white border border-[#E1E3E4] text-xs text-[#44474D] pl-8">
                          <span className="font-bold text-[#031632] block mb-0.5">
                            💡 Explication :
                          </span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit / Results Actions */}
              <div className="pt-4 border-t border-[#E1E3E4]">
                {!quizSubmitted ? (
                  <button
                    onClick={handleEvaluateQuiz}
                    disabled={Object.keys(selectedAnswers).length < currentModule.quiz.length}
                    className="w-full py-4 px-6 rounded-xl bg-[#2C694E] hover:bg-[#1E4D38] disabled:bg-[#C5C6CE] disabled:cursor-not-allowed text-white font-bold font-serif text-sm shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Valider mes réponses</span>
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-xl text-center ${
                      quizScore >= 60 ? 'bg-[#EAF7EE] text-[#0E5138]' : 'bg-[#FFDAD6] text-[#93000A]'
                    }`}>
                      <h4 className="font-serif text-lg font-bold">
                        {quizScore >= 60 ? '🎉 Félicitations ! Module validé' : '⚠️ Score insuffisant (moins de 60%)'}
                      </h4>
                      <p className="text-xs mt-1">
                        Votre score : <strong>{quizScore}%</strong> ({Math.round((quizScore / 100) * currentModule.quiz.length)}/{currentModule.quiz.length} bonnes réponses)
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleResetQuiz}
                        className="flex-1 py-3 px-4 rounded-xl bg-white border border-[#C5C6CE]/50 hover:bg-[#F3F4F5] text-[#031632] text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Recommencer le Quiz</span>
                      </button>
                      <button
                        onClick={handleNextModule}
                        className="flex-1 py-3 px-4 rounded-xl bg-[#031632] hover:bg-[#1A2B48] text-white text-xs font-bold flex items-center justify-center gap-1.5"
                      >
                        <span>Module Suivant</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Chapter Navigation Controls */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-[#C5C6CE]/30 shadow-xs">
        <button
          onClick={handlePrevModule}
          className="flex items-center gap-1.5 text-xs font-bold text-[#44474D] hover:text-[#031632] px-3 py-2 rounded-lg hover:bg-[#F3F4F5]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Précédent</span>
        </button>

        <button
          onClick={() => setActiveTab('modules')}
          className="text-xs font-bold text-[#031632] px-3 py-2 rounded-lg bg-[#F8F9FA] hover:bg-[#E7E8E9]"
        >
          Table des Matières
        </button>

        <button
          onClick={handleNextModule}
          className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#031632] hover:bg-[#1A2B48] px-4 py-2 rounded-lg shadow-xs"
        >
          <span>Suivant</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
