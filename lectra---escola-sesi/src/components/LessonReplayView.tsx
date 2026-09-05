import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  BookOpen,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  Share2,
  Sparkles,
  HelpCircle,
  Save,
  Check,
} from 'lucide-react';
import { LessonItem } from '../types';
import { SesiLogo } from './SesiLogo';

interface LessonReplayViewProps {
  lesson: LessonItem;
  onBack: () => void;
  onSelectOtherLesson: (lesson: LessonItem) => void;
  allLessons: LessonItem[];
}

export const LessonReplayView: React.FC<LessonReplayViewProps> = ({
  lesson,
  onBack,
  onSelectOtherLesson,
  allLessons,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(145); // started a few minutes in
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'resumo' | 'exercicios' | 'materiais' | 'notas'>('resumo');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({});
  const [userNotes, setUserNotes] = useState<string>(() => {
    return localStorage.getItem(`notes_${lesson.id}`) || '';
  });
  const [notesSaved, setNotesSaved] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Timer simulation for playback
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= lesson.durationSeconds) {
            setIsPlaying(false);
            return lesson.durationSeconds;
          }
          return prev + 1 * playbackSpeed;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playbackSpeed, lesson.durationSeconds]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const handleSkip = (delta: number) => {
    setCurrentTime((prev) => {
      const next = prev + delta;
      return Math.max(0, Math.min(lesson.durationSeconds, next));
    });
  };

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIdx]);
  };

  const handleAnswerSelect = (exerciseId: string, optIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [exerciseId]: optIndex }));
    setShowFeedback((prev) => ({ ...prev, [exerciseId]: true }));
  };

  const handleSaveNotes = () => {
    localStorage.setItem(`notes_${lesson.id}`, userNotes);
    setNotesSaved(true);
    setTimeout(() => setNotesSaved(false), 2500);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && playerContainerRef.current) {
      playerContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <motion.div
      id="lesson-replay-screen"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -24 }}
      transition={{ duration: 0.3 }}
      className="w-full flex flex-col min-h-full bg-slate-900 text-slate-100"
    >
      {/* Top Header Bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
        <button
          id="btn-back-to-home"
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </button>

        <div className="flex items-center gap-2">
          <span
            className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase text-white shadow-sm"
            style={{ backgroundColor: lesson.hexColor }}
          >
            {lesson.title}
          </span>
          <span className="text-xs text-slate-400 font-medium">Escola SESI</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            title="Compartilhar aula"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Link da aula copiado!');
              }
            }}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Video Lecture Area */}
      <div
        ref={playerContainerRef}
        className="relative w-full aspect-video bg-black flex flex-col justify-between overflow-hidden shadow-2xl group"
      >
        {/* Animated Blackboard / Slides Presentation Canvas */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none"
          style={{
            background: `radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)`,
          }}
        >
          {/* Subtle SESI Watermark */}
          <div className="absolute top-4 left-4 opacity-20">
            <SesiLogo size="sm" />
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>GRAVAÇÃO SESI • 26/10/2026</span>
          </div>

          {/* Slide Content Representation */}
          <div className="max-w-md w-full p-4 rounded-xl border border-slate-700/60 bg-slate-800/60 backdrop-blur-sm shadow-inner">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-700/50">
              <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">
                Módulo 4 • {lesson.title}
              </span>
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded text-white"
                style={{ backgroundColor: lesson.hexColor }}
              >
                {lesson.duration}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
              {lesson.topic}
            </h3>

            <p className="text-xs text-slate-300 font-medium mb-3">
              Ministrada por {lesson.professorName}
            </p>

            {/* Dynamic visual indicator that pulses with lecture progress */}
            <div className="flex items-center justify-center gap-1.5 py-2">
              <div className="h-1 w-8 rounded-full bg-slate-600" />
              <div
                className="h-1.5 w-16 rounded-full"
                style={{ backgroundColor: lesson.hexColor }}
              />
              <div className="h-1 w-8 rounded-full bg-slate-600" />
            </div>

            <div className="text-[11px] text-slate-400 italic">
              {isPlaying ? 'Reproduzindo conteúdo...' : 'Pausado no momento atual'}
            </div>
          </div>
        </div>

        {/* Big Center Play/Pause button on hover or pause */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
            <button
              onClick={() => setIsPlaying(true)}
              className="p-4 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transform hover:scale-110 active:scale-95 transition-all shadow-xl"
            >
              <Play className="w-10 h-10 fill-white translate-x-0.5" />
            </button>
          </div>
        )}

        {/* Video Scrubber & Controls Overlay */}
        <div className="relative z-20 mt-auto bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-6">
          {/* Progress Timeline */}
          <div className="relative flex items-center mb-2.5">
            <input
              type="range"
              min="0"
              max={lesson.durationSeconds}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white"
              style={{
                background: `linear-gradient(to right, ${lesson.hexColor} 0%, ${
                  lesson.hexColor
                } ${(currentTime / lesson.durationSeconds) * 100}%, #334155 ${
                  (currentTime / lesson.durationSeconds) * 100
                }%, #334155 100%)`,
              }}
            />
          </div>

          {/* Controls Bottom Row */}
          <div className="flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                title={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={() => handleSkip(-10)}
                className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
                title="Voltar 10s"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleSkip(10)}
                className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
                title="Avançar 10s"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>

              <span className="font-mono text-[11px] text-slate-300 ml-1">
                {formatTime(currentTime)} / {formatTime(lesson.durationSeconds)}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Playback Speed */}
              <button
                onClick={cycleSpeed}
                className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 text-[11px] font-bold text-slate-200"
              >
                {playbackSpeed}x
              </button>

              {/* Mute */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Details & Interactive Content */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {/* Info Header Card */}
        <div className="bg-slate-800/70 border border-slate-700/60 rounded-2xl p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: lesson.hexColor }}
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {lesson.title}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-400">{lesson.date}</span>
              </div>
              <h1 className="text-lg font-bold text-white leading-snug">
                {lesson.topic}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
                <span className="font-semibold text-white">{lesson.professorName}</span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {lesson.duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-800/80 rounded-xl border border-slate-700/50 text-xs font-medium">
          <button
            id="tab-resumo"
            onClick={() => setActiveTab('resumo')}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'resumo'
                ? 'bg-slate-700 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Resumo</span>
          </button>

          <button
            id="tab-exercicios"
            onClick={() => setActiveTab('exercicios')}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'exercicios'
                ? 'bg-slate-700 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Exercícios ({lesson.exercises.length})</span>
          </button>

          <button
            id="tab-materiais"
            onClick={() => setActiveTab('materiais')}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'materiais'
                ? 'bg-slate-700 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Materiais</span>
          </button>

          <button
            id="tab-notas"
            onClick={() => setActiveTab('notas')}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'notas'
                ? 'bg-slate-700 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Minhas Notas</span>
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'resumo' && (
            <motion.div
              key="resumo"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Visão Geral da Aula
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lesson.description}
                </p>
              </div>

              {/* Key takeaways */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Pontos Principais para Lembrar
                </h4>
                <ul className="space-y-2.5">
                  {lesson.summaryPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: lesson.hexColor }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chapters / Timeline markers */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Momentos da Aula (Clique para ir)
                </h4>
                <div className="space-y-2">
                  {lesson.chapters.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentTime(ch.timeInSeconds);
                        setIsPlaying(true);
                      }}
                      className="w-full text-left p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700/40 flex items-center justify-between transition-colors group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                          {ch.label}
                        </div>
                        <div className="text-[11px] text-slate-400">{ch.summary}</div>
                      </div>
                      <span className="font-mono text-xs text-slate-400 bg-slate-900/60 px-2 py-1 rounded">
                        {formatTime(ch.timeInSeconds)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'exercicios' && (
            <motion.div
              key="exercicios"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-4"
            >
              {lesson.exercises.map((ex, exIndex) => {
                const selected = selectedAnswers[ex.id];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === ex.correctIndex;

                return (
                  <div
                    key={ex.id}
                    className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">
                        Questão {exIndex + 1} de {lesson.exercises.length}
                      </span>
                      {isAnswered && (
                        <span
                          className={`text-xs font-bold flex items-center gap-1 ${
                            isCorrect ? 'text-emerald-400' : 'text-red-400'
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correto!
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5" /> Incorreto
                            </>
                          )}
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium text-white leading-relaxed">
                      {ex.question}
                    </p>

                    {/* Options */}
                    <div className="space-y-2 pt-1">
                      {ex.options.map((opt, optIndex) => {
                        const isThisSelected = selected === optIndex;
                        const isThisCorrect = ex.correctIndex === optIndex;

                        let optStyles = 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700';
                        if (isAnswered) {
                          if (isThisCorrect) {
                            optStyles = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-200 font-semibold';
                          } else if (isThisSelected && !isThisCorrect) {
                            optStyles = 'bg-red-950/60 border-red-500/80 text-red-200';
                          } else {
                            optStyles = 'bg-slate-800/40 border-slate-800 text-slate-500';
                          }
                        }

                        return (
                          <button
                            key={optIndex}
                            disabled={isAnswered}
                            onClick={() => handleAnswerSelect(ex.id, optIndex)}
                            className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all flex items-start gap-2.5 ${optStyles}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current/40 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIndex)}
                            </span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {isAnswered && (
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 leading-relaxed">
                        <span className="font-bold text-white block mb-1">Explicação:</span>
                        {ex.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'materiais' && (
            <motion.div
              key="materiais"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-3"
            >
              <div className="text-xs text-slate-400 px-1">
                Arquivos e apresentações disponibilizados pelo professor para estudo:
              </div>

              {lesson.materials.map((mat) => (
                <div
                  key={mat.id}
                  className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between gap-3 hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-700 flex items-center justify-center text-slate-300">
                      <FileText className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white leading-tight">
                        {mat.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {mat.size} {mat.pages ? `• ${mat.pages} páginas` : ''}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Baixando material: ${mat.title}`)}
                    className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
                    title="Baixar material"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'notas' && (
            <motion.div
              key="notas"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Caderno Digital do Aluno
                </span>
                <button
                  onClick={handleSaveNotes}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                >
                  {notesSaved ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Salvo!
                    </>
                  ) : (
                    <>
                      <Save className="w-3.5 h-3.5" /> Salvar Notas
                    </>
                  )}
                </button>
              </div>

              <textarea
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="Escreva aqui suas anotações, fórmulas importantes e dúvidas para a próxima aula..."
                rows={7}
                className="w-full p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/50 resize-none"
              />

              <div className="text-[11px] text-slate-500">
                Suas notas são salvas localmente no seu dispositivo e ficam disponíveis sempre que você rever esta aula.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick jump to other classes of today */}
        <div className="pt-3 border-t border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Outras aulas de hoje (26/10)
          </div>
          <div className="grid grid-cols-3 gap-2">
            {allLessons
              .filter((l) => l.id !== lesson.id)
              .map((other) => (
                <button
                  key={other.id}
                  onClick={() => onSelectOtherLesson(other)}
                  className="p-2 rounded-xl text-left transition-all hover:scale-[1.02] flex flex-col justify-between"
                  style={{ backgroundColor: other.hexColor }}
                >
                  <span className="text-[11px] font-extrabold text-white uppercase leading-tight">
                    {other.title}
                  </span>
                  <span className="text-[9px] text-white/90 mt-2 font-medium">
                    {other.duration}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
