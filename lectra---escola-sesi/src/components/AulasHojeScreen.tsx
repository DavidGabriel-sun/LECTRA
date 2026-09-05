import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, GraduationCap, Users, BookOpen } from 'lucide-react';
import { LessonItem, AreaKey } from '../types';
import { ClassCard } from './ClassCard';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';
import { FACULTY_DIRECTORY, ALL_SUBJECT_LESSONS } from '../data/lessonsData';

interface AulasHojeScreenProps {
  lessons: LessonItem[];
  onSelectLesson: (lesson: LessonItem) => void;
  onTabChange: (tab: MainNavTab) => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const AulasHojeScreen: React.FC<AulasHojeScreenProps> = ({
  lessons,
  onSelectLesson,
  onTabChange,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [activeView, setActiveView] = useState<'aulas' | 'materias'>('aulas');
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<AreaKey | 'todas'>('todas');

  const areas: { id: AreaKey | 'todas'; label: string; color: string }[] = [
    { id: 'todas', label: 'Todas (12)', color: 'bg-slate-800 text-white' },
    { id: 'humanas', label: 'Humanas (4)', color: 'bg-blue-600 text-white' },
    { id: 'linguagens', label: 'Linguagens (4)', color: 'bg-orange-600 text-white' },
    { id: 'natureza', label: 'Natureza (3)', color: 'bg-emerald-600 text-white' },
    { id: 'matematica', label: 'Matemática (1)', color: 'bg-red-600 text-white' },
  ];

  const filteredFaculty = selectedAreaFilter === 'todas'
    ? FACULTY_DIRECTORY
    : FACULTY_DIRECTORY.filter((f) => f.area === selectedAreaFilter);

  const handleOpenSubjectByFaculty = (subjectKey: string) => {
    const lesson = ALL_SUBJECT_LESSONS.find((l) => l.key === subjectKey);
    if (lesson) {
      onSelectLesson(lesson);
    }
  };

  return (
    <motion.div
      id="screen-home-aulas-hoje"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Header Bar with Avatar, ... and Lectra | SESI logo (Video 00:07) */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        theme="dark"
      />

      {/* Scrollable Center Content */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        {/* "Tarefas Atrasadas" Banner Card (Video 00:07) */}
        <div
          id="banner-tarefas-atrasadas"
          onClick={() => onTabChange('tasks')}
          className="w-full bg-[#ECEEF2] rounded-3xl p-1.5 flex items-center justify-between mb-2.5 cursor-pointer shadow-2xs hover:brightness-[0.98] transition-all"
        >
          {/* Left Red Gradient Badge */}
          <div
            className="rounded-2xl px-4 py-3 text-white flex flex-col justify-center leading-tight shadow-sm"
            style={{
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
            }}
          >
            <span
              className="text-[17px] sm:text-[18px] font-black tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Tarefas
            </span>
            <span
              className="text-[17px] sm:text-[18px] font-black tracking-tight uppercase"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Atrasadas
            </span>
          </div>

          {/* Right Giant Red Number "02" */}
          <div className="pr-6 flex items-center justify-center">
            <span
              className="text-[44px] sm:text-[48px] font-black tracking-tighter text-[#EF4444] leading-none"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              02
            </span>
          </div>
        </div>

        {/* 3 Pills: This Month, Last Week, This Week (Video 00:07) */}
        <div className="flex flex-col gap-1.5 mb-3.5">
          <button
            onClick={() => onTabChange('tasks')}
            className="w-full bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all rounded-full px-4 py-2.5 flex items-center justify-between cursor-pointer"
          >
            <span className="text-[13px] font-bold text-slate-800">This Month</span>
            <ChevronRight className="w-4 h-4 text-slate-600 stroke-[2.2]" />
          </button>

          <button
            onClick={() => onTabChange('tasks')}
            className="w-full bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all rounded-full px-4 py-2.5 flex items-center justify-between cursor-pointer"
          >
            <span className="text-[13px] font-bold text-slate-800">Last Week</span>
            <ChevronRight className="w-4 h-4 text-slate-600 stroke-[2.2]" />
          </button>

          <button
            onClick={() => onTabChange('tasks')}
            className="w-full bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all rounded-full px-4 py-2.5 flex items-center justify-between cursor-pointer"
          >
            <span className="text-[13px] font-bold text-slate-800">This Week</span>
            <ChevronRight className="w-4 h-4 text-slate-600 stroke-[2.2]" />
          </button>
        </div>

        {/* View Switcher: Aulas de Hoje vs. Matérias & Professores */}
        <div className="flex items-center justify-between mb-3 bg-[#F0F2F6] p-1 rounded-2xl">
          <button
            onClick={() => setActiveView('aulas')}
            className={`flex-1 py-1.5 rounded-xl text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeView === 'aulas'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Aulas de Hoje</span>
          </button>
          <button
            onClick={() => setActiveView('materias')}
            className={`flex-1 py-1.5 rounded-xl text-[12px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeView === 'materias'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Matérias & Professores</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeView === 'aulas' ? (
            <motion.div
              key="view-aulas"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
            >
              {/* Section Title: "Aulas de Hoje" */}
              <div className="flex items-baseline justify-between mb-2">
                <h2
                  className="text-[23px] sm:text-[25px] font-black text-slate-950 tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                >
                  Aulas de Hoje
                </h2>
                <span className="text-[11px] font-medium text-slate-500">
                  4 Áreas do SESI
                </span>
              </div>

              {/* Classes Stack / Cards (Video 00:07 - 00:08) */}
              <div className="flex flex-col gap-2.5">
                {lessons.map((lesson, index) => (
                  <ClassCard
                    key={lesson.id}
                    lesson={lesson}
                    index={index}
                    onSelect={onSelectLesson}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="view-materias"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex flex-col"
            >
              {/* Filter Chips by Area */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-2">
                {areas.map((a) => {
                  const isSelected = selectedAreaFilter === a.id;
                  return (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAreaFilter(a.id)}
                      className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? `${a.color} shadow-xs scale-[1.02]`
                          : 'bg-[#ECEEF2] text-slate-700 hover:bg-[#E2E5EB]'
                      }`}
                    >
                      {a.label}
                    </button>
                  );
                })}
              </div>

              {/* List of Subjects and Faculty */}
              <div className="flex flex-col gap-2">
                {filteredFaculty.map((fac) => (
                  <div
                    key={fac.subjectKey}
                    onClick={() => handleOpenSubjectByFaculty(fac.subjectKey)}
                    className="p-3 rounded-2xl bg-[#ECEEF2] hover:bg-[#E2E5EB] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between border border-slate-200/60 shadow-2xs"
                  >
                    <div className="flex items-center gap-3">
                      {/* Area Colored Icon Dot */}
                      <div
                        className={`w-9 h-9 rounded-xl ${fac.themeBg} flex items-center justify-center text-white font-black text-[13px] shadow-xs shrink-0`}
                      >
                        {fac.subjectName.slice(0, 2).toUpperCase()}
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[14px] font-black text-slate-900 leading-tight">
                            {fac.subjectName}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                            • {fac.areaName}
                          </span>
                        </div>
                        <span className="text-[12.5px] font-bold text-blue-700 leading-tight mt-0.5 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          <span>{fac.professorName}</span>
                        </span>
                        <span className="text-[10.5px] text-slate-500 line-clamp-1 mt-0.5">
                          {fac.description}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 stroke-[2.2] shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation (Video 00:07) */}
      <BottomNavigation activeTab="home" onTabChange={onTabChange} />
    </motion.div>
  );
};

