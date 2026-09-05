import React from 'react';
import { motion } from 'motion/react';
import { SesiLogo } from './SesiLogo';
import { LessonItem } from '../types';

interface ClassCardProps {
  lesson: LessonItem;
  index: number;
  onSelect: (lesson: LessonItem) => void;
}

export const ClassCard: React.FC<ClassCardProps> = ({ lesson, index, onSelect }) => {
  const isMatematica = lesson.key === 'matematica';

  return (
    <motion.div
      id={`card-${lesson.key}`}
      onClick={() => onSelect(lesson)}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ scale: 1.015, filter: 'brightness(1.04)' }}
      whileTap={{ scale: 0.985 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(lesson);
        }
      }}
      className={`relative w-full ${lesson.themeBg} text-white rounded-[26px] p-5 shadow-lg select-none cursor-pointer overflow-hidden flex flex-col justify-between min-h-[145px] sm:min-h-[160px] transition-shadow duration-200 focus:outline-none focus:ring-4 focus:ring-white/40`}
      style={{
        boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Background Large Play Triangle Icon (exactly as in the photo) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-32 h-32 transform translate-x-1"
          style={{
            fill: 'rgba(0, 0, 0, 0.15)',
          }}
        >
          <polygon points="28,15 85,50 28,85" rx="4" />
        </svg>
      </div>

      {/* Top Section */}
      <div className="relative z-10 flex items-start justify-between">
        {/* Escola SESI Logo */}
        <SesiLogo size="md" />

        {/* Subject & Professor */}
        <div className="text-right flex flex-col items-end">
          <h2
            className="text-[21px] sm:text-[23px] font-extrabold tracking-wide uppercase leading-tight text-white drop-shadow-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {lesson.title}
          </h2>
          <span className="text-[13px] sm:text-[14px] font-medium text-white/95 leading-tight mt-0.5">
            {lesson.key === 'matematica'
              ? 'Prof. Vilson'
              : lesson.professorName || lesson.professorRole}
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col justify-end pt-5">
        <div className="flex items-end justify-between w-full">
          <div>
            <span className="text-[13px] sm:text-[14px] font-medium text-white/95 block leading-tight">
              {lesson.duration}
            </span>
            {isMatematica && (
              <span className="text-[13px] sm:text-[14px] font-medium text-white/95 block mt-0.5 leading-tight">
                {lesson.date}
              </span>
            )}
          </div>

          {isMatematica && (
            <div className="text-right">
              <span className="text-[13px] sm:text-[14px] font-medium text-white/95 block leading-tight lowercase">
                assunto
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
