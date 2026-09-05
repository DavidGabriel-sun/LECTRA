import React from 'react';
import { Smartphone, Monitor, Calendar, LogIn } from 'lucide-react';

export type ScreenType =
  | 'home'
  | 'plan'
  | 'tasks'
  | 'alerts'
  | 'leitura'
  | 'gravacao'
  | 'player'
  | 'auth'
  | 'search';

interface AppHeaderProps {
  isMockupView: boolean;
  setIsMockupView: (val: boolean) => void;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  activeLessonTitle?: string;
  currentScreen: ScreenType;
  onChangeScreen: (screen: ScreenType) => void;
  onGoHome: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  isMockupView,
  setIsMockupView,
  selectedDate,
  setSelectedDate,
  currentScreen,
  onChangeScreen,
  onGoHome,
}) => {
  return (
    <header className="w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-3 sm:px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-slate-200 z-40 text-xs">
      {/* Left: App Identity */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 font-bold text-sm text-white hover:text-blue-400 transition-colors cursor-pointer"
        >
          <span className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white text-[11px] font-black italic">
            S
          </span>
          <span className="hidden sm:inline font-bold">Lectra • Escola SESI</span>
          <span className="sm:hidden font-bold">SESI</span>
        </button>

        {/* Screen Switcher Buttons for Quick Demo Testing */}
        <div className="flex items-center bg-slate-800/90 p-0.5 rounded-lg border border-slate-700/60 overflow-x-auto no-scrollbar max-w-[280px] sm:max-w-none">
          <button
            onClick={() => onChangeScreen('home')}
            className={`px-2 py-1 rounded-md transition-colors text-[11px] font-semibold whitespace-nowrap cursor-pointer ${
              currentScreen === 'home'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🏠 Home
          </button>
          <button
            onClick={() => onChangeScreen('plan')}
            className={`px-2 py-1 rounded-md transition-colors text-[11px] font-semibold whitespace-nowrap cursor-pointer ${
              currentScreen === 'plan'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📅 Plan
          </button>
          <button
            onClick={() => onChangeScreen('tasks')}
            className={`px-2 py-1 rounded-md transition-colors text-[11px] font-semibold whitespace-nowrap cursor-pointer ${
              currentScreen === 'tasks'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📋 Tasks
          </button>
          <button
            onClick={() => onChangeScreen('alerts')}
            className={`px-2 py-1 rounded-md transition-colors text-[11px] font-semibold whitespace-nowrap cursor-pointer ${
              currentScreen === 'alerts'
                ? 'bg-red-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🔔 Alerts
          </button>
          <button
            onClick={() => onChangeScreen('leitura')}
            className={`px-2 py-1 rounded-md transition-colors text-[11px] font-semibold whitespace-nowrap cursor-pointer ${
              currentScreen === 'leitura'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📖 Leitura
          </button>
          <button
            onClick={() => onChangeScreen('gravacao')}
            className={`px-2 py-1 rounded-md transition-colors text-[11px] font-semibold whitespace-nowrap cursor-pointer ${
              currentScreen === 'gravacao'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🎙️ Gravação
          </button>
          <button
            onClick={() => onChangeScreen('auth')}
            className={`px-2 py-1 rounded-md transition-colors text-[11px] font-semibold whitespace-nowrap cursor-pointer flex items-center gap-1 ${
              currentScreen === 'auth'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <LogIn className="w-3 h-3" />
            <span>Login / Cadastro</span>
          </button>
        </div>
      </div>

      {/* Right Controls: Date picker & View Switcher */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Date Selector */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/60 text-slate-300 text-xs">
          <Calendar className="w-3.5 h-3.5 text-blue-400" />
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-transparent border-none text-slate-200 focus:outline-none cursor-pointer text-xs"
          >
            <option value="26 de out. de 2026" className="bg-slate-800 text-white">
              26 de out. de 2026 (Hoje)
            </option>
            <option value="25 de out. de 2026" className="bg-slate-800 text-white">
              25 de out. de 2026 (Ontem)
            </option>
            <option value="24 de out. de 2026" className="bg-slate-800 text-white">
              24 de out. de 2026 (Anterior)
            </option>
          </select>
        </div>

        {/* Mockup Frame Toggle */}
        <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700/70">
          <button
            onClick={() => setIsMockupView(true)}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors text-[11px] font-medium ${
              isMockupView
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Ver com a moldura do iPhone idêntica à foto"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">iPhone</span>
          </button>
          <button
            onClick={() => setIsMockupView(false)}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors text-[11px] font-medium ${
              !isMockupView
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="Ver em tela cheia / adaptável"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Adaptável</span>
          </button>
        </div>
      </div>
    </header>
  );
};
