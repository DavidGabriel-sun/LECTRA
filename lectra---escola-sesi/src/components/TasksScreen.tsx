import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';

interface TasksScreenProps {
  onNavigateToLecture: (subjectKey: string) => void;
  onTabChange: (tab: MainNavTab) => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const TasksScreen: React.FC<TasksScreenProps> = ({
  onNavigateToLecture,
  onTabChange,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('Apr');

  const months = [
    { id: 'Feb', label: 'Feb' },
    { id: 'Mar', label: 'Mar' },
    { id: 'Apr', label: 'Apr', badge: 4 },
    { id: 'May', label: 'May', badge: 2 },
    { id: 'Jun', label: 'Jun' },
    { id: 'Jul', label: 'Jul' },
  ];

  return (
    <motion.div
      id="screen-tasks"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Header */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        theme="dark"
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        {/* Title */}
        <h1
          className="text-[26px] sm:text-[28px] font-black text-slate-950 tracking-tight mb-2"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Tasks
        </h1>

        {/* Horizontal Month Slider with Badges (exact match from video 00:15 - 00:17) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 mb-3">
          {months.map((m) => {
            const isSelected = selectedMonth === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelectedMonth(m.id)}
                className={`relative px-4 py-1.5 rounded-full text-[13px] font-bold transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#4B515D] text-white shadow-sm ring-1 ring-slate-600'
                    : 'bg-[#ECEFF3] text-slate-700 hover:bg-[#E2E6EC]'
                }`}
              >
                <span>{m.label}</span>
                {m.badge && (
                  <span className="absolute -top-1.5 -right-1 w-4 h-4 bg-[#EA3829] text-white text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-white">
                    {m.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Task Cards Stack (Video 00:17 - 00:18) */}
        <div className="flex flex-col gap-3">
          {/* 1. Green Card: Deadline ahead! */}
          <div
            id="task-card-cell-structure"
            className="w-full bg-[#1EB954] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-3.5 pb-2.5">
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className="text-[17px] sm:text-[19px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Deadline ahead!
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-bold text-white/95">
                  Tuesday Day 29
                </span>
              </div>

              <div className="flex items-start justify-between text-[11px] sm:text-[11.5px] font-medium text-white/95 leading-tight">
                <div>
                  <span className="block font-semibold">Subject: Module 1 • Page 22</span>
                  <span className="block text-white/90 mt-0.5">Summarize and complete activity</span>
                </div>
                <div className="text-right leading-none shrink-0 ml-2">
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
              onClick={() => onNavigateToLecture('natureza')}
              className="w-full bg-[#159442] hover:bg-[#117C37] py-1.5 px-4 flex items-center justify-center gap-1.5 text-[11.5px] font-semibold text-white transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-2">Go to "Cell Structure"</span>
              <span className="text-[8px]">▶</span>
            </button>
          </div>

          {/* 2. Red Card: Due today! */}
          <div
            id="task-card-math"
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

              <div className="flex items-start justify-between text-[11px] sm:text-[11.5px] font-medium text-white/95 leading-tight">
                <div>
                  <span className="block font-semibold">Subject: Math - Exponential Functions</span>
                  <span className="block text-white/90 mt-0.5">Module 2 • Page 45</span>
                  <span className="block text-white/80 mt-0.5 text-[10.5px]">
                    Solve exercises and review examples
                  </span>
                </div>
                <div className="text-right leading-none shrink-0 ml-2">
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

          {/* 3. Blue Card: Deadline approaching! */}
          <div
            id="task-card-history"
            className="w-full bg-[#007AFF] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-3.5 pb-2.5">
              <div className="flex items-baseline justify-between mb-1">
                <span
                  className="text-[17px] sm:text-[19px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Deadline approaching!
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-bold text-white/95">
                  Friday Day 25
                </span>
              </div>

              <div className="flex items-start justify-between text-[11px] sm:text-[11.5px] font-medium text-white/95 leading-tight">
                <div>
                  <span className="block font-semibold">Subject: Module 3 • Page 78</span>
                  <span className="block text-white/90 mt-0.5">Read text and answer questions</span>
                </div>
                <div className="text-right leading-none shrink-0 ml-2">
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

          {/* 4. Orange/Yellow Card */}
          <div
            id="task-card-school-review"
            className="w-full bg-[#E59819] text-white rounded-2xl p-3.5 shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="flex items-baseline justify-between mb-1">
              <span
                className="text-[17px] sm:text-[19px] font-black tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Deadline approaching!
              </span>
              <span className="text-[12.5px] sm:text-[13px] font-bold text-white/95">
                Wednesday Day 1
              </span>
            </div>

            <div className="flex items-center justify-between text-[11px] font-medium text-white/95">
              <span>Subject: School project review</span>
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
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="tasks" onTabChange={onTabChange} />
    </motion.div>
  );
};
