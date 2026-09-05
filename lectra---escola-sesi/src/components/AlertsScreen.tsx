import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Bell } from 'lucide-react';
import { HomeTopBar } from './HomeTopBar';
import { BottomNavigation, MainNavTab } from './BottomNavigation';

interface AlertsScreenProps {
  onNavigateToLecture: (subjectKey: string) => void;
  onTabChange: (tab: MainNavTab) => void;
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
}

export const AlertsScreen: React.FC<AlertsScreenProps> = ({
  onNavigateToLecture,
  onTabChange,
  onOpenProfile,
  onOpenOptions,
}) => {
  const [completedAlerts, setCompletedAlerts] = useState<string[]>([]);
  const [showToast, setShowToast] = useState<string | null>(null);

  const toggleComplete = (id: string, name: string) => {
    if (completedAlerts.includes(id)) {
      setCompletedAlerts(completedAlerts.filter((i) => i !== id));
      setShowToast(`Alerta reaberto: ${name}`);
    } else {
      setCompletedAlerts([...completedAlerts, id]);
      setShowToast(`Marcado como concluído: ${name}`);
    }
    setTimeout(() => setShowToast(null), 3000);
  };

  return (
    <motion.div
      id="screen-alerts"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="w-full flex-1 flex flex-col justify-between bg-white text-slate-900 overflow-hidden relative select-none"
    >
      {/* Top Header Bar (Video 00:12) */}
      <HomeTopBar
        onOpenProfile={onOpenProfile}
        onOpenOptions={onOpenOptions}
        theme="dark"
      />

      {/* Screen Title & Cards Stack */}
      <div className="flex-1 flex flex-col px-5 pt-1 overflow-y-auto no-scrollbar pb-3">
        <h1
          className="text-[26px] sm:text-[28px] font-black text-slate-950 tracking-tight mb-3"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Alerts
        </h1>

        {/* Alerts Cards Stack */}
        <div className="flex flex-col gap-3.5 flex-1">
          {/* 1. Red Card: Due today! */}
          <div
            id="alert-card-math-today"
            className="w-full bg-[#EA3829] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-4 pb-3">
              <div className="flex items-baseline justify-between mb-1.5">
                <span
                  className="text-[19px] sm:text-[21px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Due today!
                </span>
                <span className="text-[13px] sm:text-[14px] font-bold text-white/95">
                  Sunday Day 20
                </span>
              </div>

              <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-white/95">
                <span className="max-w-[70%]">
                  Subject: Math - Exponential and Logarithmic Functions
                </span>
                <div className="text-right leading-none shrink-0">
                  <span className="text-[6.5px] uppercase font-bold tracking-wider block opacity-90">
                    ESCOLA
                  </span>
                  <span className="text-[13px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                    SESI
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToLecture('matematica')}
              className="w-full bg-[#B81F14] hover:bg-[#A3170E] py-2 px-4 flex items-center justify-center gap-1.5 text-[12px] font-semibold text-white transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-2">Go to "Math Lecture"</span>
              <span className="text-[9px]">▶</span>
            </button>
          </div>

          {/* 2. Yellow Card: Deadline coming up! */}
          <div
            id="alert-card-family-day"
            className="w-full bg-[#E59819] text-white rounded-2xl p-4 shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="flex items-baseline justify-between mb-1.5">
              <span
                className="text-[18px] sm:text-[20px] font-black tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Deadline coming up!
              </span>
              <span className="text-[13px] sm:text-[14px] font-bold text-white/95">
                Saturday April 26
              </span>
            </div>

            <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-white/95">
              <span className="max-w-[70%]">Subject: School family day for students</span>
              <div className="text-right leading-none shrink-0">
                <span className="text-[6.5px] uppercase font-bold tracking-wider block opacity-90">
                  ESCOLA
                </span>
                <span className="text-[13px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                  SESI
                </span>
              </div>
            </div>
          </div>

          {/* 3. Blue Card: Deadline approaching! */}
          <div
            id="alert-card-humanities"
            className="w-full bg-[#007AFF] text-white rounded-2xl overflow-hidden shadow-sm transition-transform active:scale-[0.99]"
          >
            <div className="p-4 pb-3">
              <div className="flex items-baseline justify-between mb-1.5">
                <span
                  className="text-[18px] sm:text-[20px] font-black tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Deadline approaching!
                </span>
                <span className="text-[13px] sm:text-[14px] font-bold text-white/95">
                  Friday Day 25
                </span>
              </div>

              <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-white/95">
                <span className="max-w-[70%]">Subject: Humanities - The Brazilian Empire</span>
                <div className="text-right leading-none shrink-0">
                  <span className="text-[6.5px] uppercase font-bold tracking-wider block opacity-90">
                    ESCOLA
                  </span>
                  <span className="text-[13px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                    SESI
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToLecture('humanas')}
              className="w-full bg-[#0060C9] hover:bg-[#0051AB] py-2 px-4 flex items-center justify-center gap-1.5 text-[12px] font-semibold text-white transition-colors cursor-pointer"
            >
              <span className="underline underline-offset-2">Watch the "History Seminar"</span>
              <span className="text-[9px]">▶</span>
            </button>
          </div>

          {/* 4. Green Card: Deadline ahead! */}
          <div
            id="alert-card-math-ahead"
            className="w-full bg-[#1EB954] text-white rounded-2xl p-4 shadow-sm transition-transform active:scale-[0.99] relative overflow-hidden"
          >
            <div className="flex items-baseline justify-between mb-1.5">
              <span
                className="text-[18px] sm:text-[20px] font-black tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Deadline ahead!
              </span>
              <span className="text-[13px] sm:text-[14px] font-bold text-white/95">
                Tuesday Day 29
              </span>
            </div>

            <div className="flex items-center justify-between text-[11.5px] sm:text-[12px] font-medium text-white/95">
              <span className="max-w-[70%]">
                Subject: Math - Exponential and Logarithmic Functions
              </span>
              <div className="text-right leading-none shrink-0">
                <span className="text-[6.5px] uppercase font-bold tracking-wider block opacity-90">
                  ESCOLA
                </span>
                <span className="text-[13px] font-black italic tracking-tighter transform -skew-x-12 inline-block">
                  SESI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg flex items-center gap-2"
        >
          <Bell className="w-3.5 h-3.5 text-amber-400" />
          <span>{showToast}</span>
        </motion.div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="alerts" onTabChange={onTabChange} />
    </motion.div>
  );
};
