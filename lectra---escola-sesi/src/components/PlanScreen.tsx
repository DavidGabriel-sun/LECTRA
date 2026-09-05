import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';

interface PlanScreenProps {
  onNavigateToLecture: (subjectKey: string) => void;
  onTabChange: (tab: MainNavTab) => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

interface CalendarDay {
  day: number;
  hasEvent?: boolean;
  eventColor?: 'red' | 'blue' | 'yellow' | 'green';
  eventLabel?: string;
}

export const PlanScreen: React.FC<PlanScreenProps> = ({
  onNavigateToLecture,
  onTabChange,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [currentMonth, setCurrentMonth] = useState<string>('April 2026');
  const [selectedDay, setSelectedDay] = useState<number>(20);

  // April 2026 calendar days: starts Wednesday April 1 (3 blank days: Sun, Mon, Tue)
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const daysData: { [key: number]: { color: 'red' | 'blue' | 'yellow' | 'green'; label: string } } = {
    20: { color: 'red', label: 'Due today! Math' },
    25: { color: 'blue', label: 'Deadline approaching! Humanities' },
    26: { color: 'yellow', label: 'School family day' },
    29: { color: 'green', label: 'Deadline ahead! Math' },
  };

  // 3 empty slots for Sun, Mon, Tue before Apr 1
  const leadingBlanks = [null, null, null];
  const daysInApril = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <motion.div
      id="screen-plan"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Header Bar */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        theme="dark"
      />

      {/* Main Scrollable Content */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        {/* Title */}
        <h1
          className="text-[26px] sm:text-[28px] font-black text-slate-950 tracking-tight mb-2"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Plan
        </h1>

        {/* Month Selector Row */}
        <div className="flex items-center justify-between py-1 mb-2">
          <span
            className="text-[17px] sm:text-[18px] font-bold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {currentMonth}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentMonth('March 2026')}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-600 active:scale-95 transition-transform"
              title="Mês anterior"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              onClick={() => setCurrentMonth('May 2026')}
              className="p-1 rounded-full hover:bg-slate-100 text-slate-600 active:scale-95 transition-transform"
              title="Próximo mês"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="w-full mb-4">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 text-center mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {weekdays.map((w) => (
              <div key={w} className="py-1">
                {w}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 text-center gap-y-1 text-[13px] font-semibold text-slate-800">
            {leadingBlanks.map((_, idx) => (
              <div key={`blank-${idx}`} className="h-8" />
            ))}

            {daysInApril.map((day) => {
              const event = daysData[day];
              const isSelected = selectedDay === day;

              let badgeStyle = 'text-slate-800 hover:bg-slate-100';
              if (event?.color === 'red') {
                badgeStyle = isSelected
                  ? 'bg-[#EA3829] text-white ring-2 ring-red-400 ring-offset-1 font-bold'
                  : 'bg-red-50 text-[#EA3829] font-bold border border-red-200';
              } else if (event?.color === 'blue') {
                badgeStyle = isSelected
                  ? 'bg-[#007AFF] text-white ring-2 ring-blue-400 ring-offset-1 font-bold'
                  : 'bg-blue-50 text-[#007AFF] font-bold border border-blue-200';
              } else if (event?.color === 'yellow') {
                badgeStyle = isSelected
                  ? 'bg-[#E59819] text-white ring-2 ring-amber-400 ring-offset-1 font-bold'
                  : 'bg-amber-100 text-amber-800 font-bold border border-amber-300';
              } else if (event?.color === 'green') {
                badgeStyle = isSelected
                  ? 'bg-[#1EB954] text-white ring-2 ring-emerald-400 ring-offset-1 font-bold'
                  : 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-200';
              } else if (isSelected) {
                badgeStyle = 'bg-slate-900 text-white font-bold';
              }

              return (
                <button
                  key={`day-${day}`}
                  onClick={() => setSelectedDay(day)}
                  className={`h-8 w-8 mx-auto rounded-full flex items-center justify-center transition-all cursor-pointer ${badgeStyle}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Agenda Event Cards for Selected Period (Exact look from video at 00:14) */}
        <div className="flex flex-col gap-3">
          {/* Card 1: Red Card Due today! */}
          <div
            id="plan-card-math-today"
            className="w-full bg-[#EA3829] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-3.5 pb-2.5">
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className="text-[17px] sm:text-[19px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Due today!
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-bold text-white/95">
                  Sunday Day 20
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] sm:text-[11.5px] font-medium text-white/95">
                <span className="max-w-[70%] leading-tight">
                  Subject: Math - Exponential and Logarithmic Functions
                </span>
                <div className="text-right leading-none shrink-0">
                  <span className="text-[6px] uppercase font-bold tracking-wider block opacity-90">
                    ESCOLA
                  </span>
                  <span className="text-[12px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                    SESI
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToLecture('matematica')}
              className="w-full bg-[#B81F14] hover:bg-[#A3170E] py-1.5 px-4 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-white transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-2">Go to "Math Lecture"</span>
              <span className="text-[8px]">▶</span>
            </button>
          </div>

          {/* Card 2: Blue Card Humanities */}
          <div
            id="plan-card-humanities"
            className="w-full bg-[#007AFF] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-3.5 pb-2.5">
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className="text-[17px] sm:text-[19px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Subject: Humanities - The Brazilian Empire
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-bold text-white/95 shrink-0 ml-2">
                  Friday May 25
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] font-medium text-white/95 mt-1">
                <span>Escola SESI História e Sociedade</span>
                <div className="text-right leading-none shrink-0">
                  <span className="text-[6px] uppercase font-bold tracking-wider block opacity-90">
                    ESCOLA
                  </span>
                  <span className="text-[12px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                    SESI
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToLecture('humanas')}
              className="w-full bg-[#0060C9] hover:bg-[#0051AB] py-1.5 px-4 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-white transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-2">Watch the "History Seminar"</span>
              <span className="text-[8px]">▶</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="plan" onTabChange={onTabChange} />
    </motion.div>
  );
};
