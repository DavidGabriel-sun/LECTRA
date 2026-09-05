import React from 'react';
import { Home, CalendarDays, ClipboardList, Bell, Search } from 'lucide-react';

export type MainNavTab = 'home' | 'plan' | 'tasks' | 'alerts' | 'search';

interface BottomNavigationProps {
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
  unreadAlertsCount?: number;
  tasksCount?: number;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
  unreadAlertsCount = 2,
  tasksCount = 4,
}) => {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'plan' as const, label: 'Plan', icon: CalendarDays },
    { id: 'tasks' as const, label: 'Tasks', icon: ClipboardList, badge: tasksCount },
    { id: 'alerts' as const, label: 'Alerts', icon: Bell, badge: unreadAlertsCount },
    { id: 'search' as const, label: 'Search', icon: Search },
  ];

  return (
    <nav
      id="bottom-navigation-bar"
      aria-label="Navegação Principal"
      className="w-full bg-white border-t border-slate-100/90 px-3 py-1.5 flex items-center justify-around shrink-0 z-30 select-none shadow-[0_-4px_12px_rgba(0,0,0,0.03)]"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            id={`bottom-nav-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all relative group cursor-pointer focus:outline-none ${
              isActive ? 'text-[#007AFF]' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <Icon
                className={`w-[22px] h-[22px] transition-transform ${
                  isActive ? 'scale-105 stroke-[2.4]' : 'stroke-[1.9]'
                }`}
              />
              {tab.badge && tab.badge > 0 && (
                <span
                  className={`absolute -top-1 -right-2 text-[9px] font-black px-1.5 py-0.2 rounded-full leading-none text-white ${
                    tab.id === 'alerts' ? 'bg-[#EA3829]' : 'bg-slate-800'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </div>
            {tab.label !== 'Search' && (
              <span
                className={`text-[10.5px] mt-0.5 tracking-tight font-medium ${
                  isActive ? 'font-bold text-[#007AFF]' : 'text-slate-500'
                }`}
              >
                {tab.label}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
