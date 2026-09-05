import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, GraduationCap } from 'lucide-react';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';
import { LessonItem } from '../types';
import { ALL_SUBJECT_LESSONS, FACULTY_DIRECTORY } from '../data/lessonsData';

interface SearchScreenProps {
  lessons: LessonItem[];
  onSelectLesson: (lesson: LessonItem) => void;
  onTabChange: (tab: MainNavTab) => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  lessons,
  onSelectLesson,
  onTabChange,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Pool of all lessons (both the 4 daily classes and the 12 individual subject lessons)
  const combinedLessons = [...lessons];
  ALL_SUBJECT_LESSONS.forEach((sl) => {
    if (!combinedLessons.some((cl) => cl.id === sl.id || cl.key === sl.key)) {
      combinedLessons.push(sl);
    }
  });

  const term = searchTerm.toLowerCase().trim();

  const filteredLessons = term
    ? combinedLessons.filter(
        (l) =>
          l.title.toLowerCase().includes(term) ||
          (l.subject && l.subject.toLowerCase().includes(term)) ||
          (l.area && l.area.toLowerCase().includes(term)) ||
          l.topic.toLowerCase().includes(term) ||
          l.description.toLowerCase().includes(term) ||
          l.professorName.toLowerCase().includes(term) ||
          (l.professorRaw && l.professorRaw.toLowerCase().includes(term))
      )
    : combinedLessons;

  const quickCategories = [
    { label: 'Vilson (Matemática)', query: 'vilson' },
    { label: 'Matheus (Geografia)', query: 'matheus' },
    { label: 'Tatiana (História)', query: 'tatiana' },
    { label: 'Katia (Sociologia)', query: 'katia' },
    { label: 'Olivia (Filosofia)', query: 'olivia' },
    { label: 'Regina (Português)', query: 'regina' },
    { label: 'Marcão (Artes)', query: 'marcão' },
    { label: 'Iracema (Ed. Física)', query: 'iracema' },
    { label: 'Folks (Inglês)', query: 'folks' },
    { label: 'Camila (Biologia)', query: 'camila' },
    { label: 'Rafael (Física)', query: 'rafael' },
    { label: 'Gabriela (Química)', query: 'gabriela' },
  ];

  return (
    <motion.div
      id="screen-search"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Bar */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        theme="dark"
      />

      {/* Content */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        <h1
          className="text-[26px] sm:text-[28px] font-black text-slate-950 tracking-tight mb-2.5"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Pesquisar
        </h1>

        {/* Search Input */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por professor, matéria, tema ou aula..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200/80 rounded-2xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        {/* Quick Category Chips for Faculty */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mb-3">
          {quickCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSearchTerm(cat.query)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap cursor-pointer transition-colors flex items-center gap-1 ${
                searchTerm.toLowerCase() === cat.query.toLowerCase()
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <GraduationCap className="w-3 h-3" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
              {searchTerm ? `Resultados (${filteredLessons.length})` : 'Aulas das Matérias do SESI'}
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-[11px] text-blue-600 hover:underline cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>

          <div className="space-y-2">
            {filteredLessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl border border-slate-200/60 flex items-center justify-between cursor-pointer transition-all active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-xs shrink-0"
                    style={{ backgroundColor: lesson.hexColor }}
                  >
                    {lesson.title.substring(0, 3)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 leading-tight">
                      {lesson.title} - {lesson.topic}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="font-semibold text-blue-700">
                        {lesson.professorName}
                      </span>
                      <span>•</span>
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="search" onTabChange={onTabChange} />
    </motion.div>
  );
};
