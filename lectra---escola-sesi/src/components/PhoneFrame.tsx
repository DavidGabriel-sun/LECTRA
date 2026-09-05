import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  currentTime?: string;
  isMockupView?: boolean;
  statusBarTheme?: 'light' | 'dark'; // 'light' means light text on dark background, 'dark' means dark text on light background
  screenBg?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  currentTime = '9:41',
  isMockupView = true,
  statusBarTheme = 'light',
  screenBg = 'bg-[#54565e]',
}) => {
  const isDarkIcons = statusBarTheme === 'dark';
  const statusTextColor = isDarkIcons ? 'text-slate-900' : 'text-white';
  const statusBorderColor = isDarkIcons ? 'border-slate-800' : 'border-white/90';
  const statusFillColor = isDarkIcons ? 'bg-slate-900' : 'bg-white';
  const homeIndicatorColor = isDarkIcons ? 'bg-slate-400' : 'bg-white/80';

  if (!isMockupView) {
    return (
      <div className={`w-full max-w-md mx-auto min-h-screen ${screenBg} flex flex-col shadow-2xl overflow-hidden relative`}>
        {/* Status Bar */}
        <div className={`w-full pt-3 pb-2 px-7 flex items-center justify-between ${statusTextColor} select-none z-20`}>
          <span className="text-[15px] font-semibold tracking-tight">{currentTime}</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-3.5 fill-current" viewBox="0 0 16 12">
              <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
              <rect x="4" y="5.5" width="2.5" height="6.5" rx="0.5" />
              <rect x="8" y="3" width="2.5" height="9" rx="0.5" />
              <rect x="12" y="0" width="2.5" height="12" rx="0.5" />
            </svg>
            <Wifi className="w-4 h-4" />
            <div className="flex items-center">
              <div className={`w-5 h-2.5 rounded-sm border ${statusBorderColor} p-0.5 flex items-center`}>
                <div className={`h-full w-3.5 ${statusFillColor} rounded-2xs`} />
              </div>
              <div className={`w-0.5 h-1 ${statusFillColor} rounded-r-xs -ml-px`} />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 flex flex-col overflow-y-auto">{children}</div>

        {/* Home Indicator */}
        <div className="w-full py-2 flex justify-center items-center select-none bg-transparent">
          <div className={`w-32 h-1 ${homeIndicatorColor} rounded-full`} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto my-4 sm:my-8 transition-all duration-300">
      {/* External Titanium Phone Body */}
      <div
        className="relative w-[340px] sm:w-[380px] h-[700px] sm:h-[780px] rounded-[52px] p-[10px] sm:p-[12px] shadow-2xl flex flex-col"
        style={{
          background: 'linear-gradient(145deg, #828388, #4f5056, #2d2e33)',
          boxShadow:
            '0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0,0,0,0.6)',
        }}
      >
        {/* Antenna bands & buttons hints on phone edge */}
        <div className="absolute -left-[3px] top-[115px] w-[3px] h-[36px] bg-[#696a71] rounded-l" />
        <div className="absolute -left-[3px] top-[165px] w-[3px] h-[55px] bg-[#696a71] rounded-l" />
        <div className="absolute -left-[3px] top-[230px] w-[3px] h-[55px] bg-[#696a71] rounded-l" />
        <div className="absolute -right-[3px] top-[175px] w-[3px] h-[80px] bg-[#696a71] rounded-r" />

        {/* Black Bezel Border */}
        <div className="relative w-full h-full rounded-[42px] bg-black p-[6px] overflow-hidden flex flex-col">
          {/* Inner Display Area */}
          <div className={`relative w-full h-full rounded-[36px] ${screenBg} overflow-hidden flex flex-col transition-colors duration-200`}>
            {/* Top Status Bar with Dynamic Island */}
            <div className={`relative z-30 pt-3 px-6 flex items-center justify-between ${statusTextColor} select-none shrink-0`}>
              <span className="text-[14px] font-semibold tracking-tight w-12 pl-1">
                {currentTime}
              </span>

              {/* Dynamic Island */}
              <div className="w-24 sm:w-28 h-7 bg-black rounded-full flex items-center justify-between px-3 shadow-sm mx-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-blue-900/30 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                </div>
                <div className="w-2 h-2 rounded-full bg-[#1c1c1e]" />
              </div>

              {/* Signal, WiFi, Battery */}
              <div className="flex items-center gap-1.5 w-12 justify-end pr-1">
                {/* Signal bars */}
                <svg className="w-3.5 h-3 fill-current" viewBox="0 0 16 12">
                  <rect x="0" y="8" width="2.5" height="4" rx="0.5" />
                  <rect x="4" y="5.5" width="2.5" height="6.5" rx="0.5" />
                  <rect x="8" y="3" width="2.5" height="9" rx="0.5" />
                  <rect x="12" y="0" width="2.5" height="12" rx="0.5" />
                </svg>

                {/* WiFi */}
                <Wifi className="w-3.5 h-3.5" />

                {/* Battery */}
                <div className="flex items-center">
                  <div className={`w-4 h-2.5 rounded-[3px] border ${statusBorderColor} p-[1.5px] flex items-center`}>
                    <div className={`h-full w-full ${statusFillColor} rounded-[1px]`} />
                  </div>
                  <div className={`w-[1.5px] h-1.5 ${statusFillColor} rounded-r-[1px] -ml-[0.5px]`} />
                </div>
              </div>
            </div>

            {/* Screen Viewport Content */}
            <div className="flex-1 flex flex-col overflow-y-auto relative no-scrollbar">
              {children}
            </div>

            {/* Home Indicator Bar */}
            <div className="w-full py-2 flex justify-center items-center select-none bg-transparent shrink-0">
              <div className={`w-32 h-1 ${homeIndicatorColor} rounded-full`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
