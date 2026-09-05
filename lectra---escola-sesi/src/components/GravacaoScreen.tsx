import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, SquarePen, ChevronRight, Mic, Square, Pause, Play, Check, Trash2 } from 'lucide-react';
import { LectraSesiLogo } from './LectraSesiLogo';

interface LectureRecord {
  id: string;
  title: string;
  date: string;
  subject: string;
}

interface GravacaoScreenProps {
  onBack: () => void;
  onOpenLecture: (lectureTitle: string) => void;
}

export const GravacaoScreen: React.FC<GravacaoScreenProps> = ({
  onBack,
  onOpenLecture,
}) => {
  const [lectures, setLectures] = useState<LectureRecord[]>([
    { id: '1', title: '2026-05-05 - English Grammar Class', date: '2026-05-05', subject: 'Inglês' },
    { id: '2', title: '2026-05-08 - Biology Lab', date: '2026-05-08', subject: 'Biologia' },
    { id: '3', title: '2026-05-12 - Chemistry Basics', date: '2026-05-12', subject: 'Química' },
    { id: '4', title: '2026-05-15 - Geography Seminar', date: '2026-05-15', subject: 'Geografia' },
    { id: '5', title: '2026-05-02 - Physics Lecture', date: '2026-05-02', subject: 'Física' },
  ]);

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>('');

  // Live recording timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isRecording && !isPaused) {
      timer = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRecording, isPaused]);

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartRecord = () => {
    setRecordingSeconds(0);
    setIsPaused(false);
    setIsRecording(true);
  };

  const handleStopAndSave = () => {
    const today = new Date().toISOString().slice(0, 10);
    const newId = Date.now().toString();
    const newLecture: LectureRecord = {
      id: newId,
      title: `${today} - Nova Aula Gravada #${lectures.length + 1}`,
      date: today,
      subject: 'Gravação Recente',
    };
    setLectures([newLecture, ...lectures]);
    setIsRecording(false);
    setRecordingSeconds(0);
  };

  const handleStartEdit = (e: React.MouseEvent, lecture: LectureRecord) => {
    e.stopPropagation();
    setEditingId(lecture.id);
    setEditingTitle(lecture.title);
  };

  const handleSaveEdit = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editingId) return;
    setLectures(
      lectures.map((l) => (l.id === editingId ? { ...l, title: editingTitle } : l))
    );
    setEditingId(null);
  };

  return (
    <motion.div
      id="screen-tela-gravacao"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Bar */}
      <div className="pt-3 px-5 pb-2 flex items-center justify-between z-20 shrink-0">
        <button
          id="btn-gravacao-back"
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 active:scale-95 flex items-center justify-center text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-label="Voltar"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <LectraSesiLogo theme="dark" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col px-5 pt-2 z-10 overflow-y-auto no-scrollbar">
        {/* Title */}
        <h1
          className="text-[23px] sm:text-[25px] font-black text-slate-950 tracking-tight mb-3"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Recent Lectures
        </h1>

        {/* List of Lectures */}
        <div className="flex flex-col gap-2.5">
          {lectures.map((lecture) => {
            const isEditing = editingId === lecture.id;

            return (
              <div
                key={lecture.id}
                onClick={() => !isEditing && onOpenLecture(lecture.title)}
                className="w-full bg-[#E5E7EB] hover:bg-[#DCDFE5] transition-colors rounded-full px-4 py-2.5 flex items-center justify-between cursor-pointer group shadow-2xs"
              >
                {isEditing ? (
                  <form onSubmit={handleSaveEdit} className="flex-1 flex items-center gap-2 mr-2">
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                      className="w-full bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-900 focus:outline-none ring-2 ring-blue-500"
                    />
                    <button
                      type="submit"
                      onClick={handleSaveEdit}
                      className="p-1 rounded-full bg-blue-600 text-white"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </form>
                ) : (
                  <span className="text-[12px] sm:text-[13px] font-bold text-slate-800 tracking-tight truncate mr-2">
                    {lecture.title}
                  </span>
                )}

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={(e) => handleStartEdit(e, lecture)}
                    className="p-1 text-slate-600 hover:text-slate-900 rounded-full transition-colors"
                    title="Editar título"
                  >
                    <SquarePen className="w-3.5 h-3.5" />
                  </button>
                  <ChevronRight className="w-4 h-4 text-slate-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recording Overlay if active */}
      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="absolute inset-x-4 bottom-24 z-30 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-3xl border border-slate-700 shadow-2xl flex flex-col items-center"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                {isPaused ? 'Gravação Pausada' : 'Gravando Aula...'}
              </span>
            </div>

            <div className="text-2xl font-black font-mono text-white mb-3">
              {formatSeconds(recordingSeconds)}
            </div>

            {/* Audio Waveform Bars Simulation */}
            <div className="flex items-center gap-1 h-8 mb-4">
              {[40, 75, 95, 60, 85, 100, 45, 90, 65, 80, 50, 70].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-blue-400 rounded-full transition-all duration-150"
                  style={{
                    height: isPaused ? '4px' : `${Math.max(6, Math.round(h * Math.random()))}px`,
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 text-slate-200"
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                <span>{isPaused ? 'Retomar' : 'Pausar'}</span>
              </button>

              <button
                onClick={handleStopAndSave}
                className="px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white flex items-center gap-1.5 shadow-md"
              >
                <Square className="w-3 h-3 fill-current" />
                <span>Finalizar e Salvar</span>
              </button>

              <button
                onClick={() => setIsRecording(false)}
                className="p-1.5 rounded-full bg-slate-800 hover:bg-red-600/30 text-slate-400 hover:text-red-400 text-xs"
                title="Descartar gravação"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Glowing Blue Gradient with Microphone Icon and "Record Class" */}
      <div
        className="w-full h-[270px] sm:h-[290px] relative flex flex-col items-center justify-end pb-8 shrink-0 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 140% 100% at 50% 100%, #0084FF 0%, #0D8BFF 45%, #60B0FF 72%, rgba(255, 255, 255, 0) 100%)',
        }}
      >
        {/* Soft background pulse effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0072DF] to-transparent opacity-30" />

        {/* Microphone Container & Icon */}
        <button
          id="btn-start-record-class"
          onClick={handleStartRecord}
          className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none transform active:scale-95 transition-transform"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform">
            {/* Outline Microphone as depicted in the picture */}
            <svg
              viewBox="0 0 64 64"
              className="w-20 h-20 sm:w-24 sm:h-24 fill-none stroke-white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Mic pill body */}
              <rect x="22" y="8" width="20" height="32" rx="10" />
              {/* Pickup arc around mic */}
              <path d="M14 26 C14 42, 50 42, 50 26" />
              {/* Stand vertical line */}
              <path d="M32 42 L32 54" />
              {/* Stand base line */}
              <path d="M22 54 L42 54" />
            </svg>
          </div>

          {/* Underlined "Record Class" text */}
          <span
            className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight mt-1 underline underline-offset-4 decoration-2 decoration-white hover:text-white/90 transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Record Class
          </span>
        </button>
      </div>
    </motion.div>
  );
};
