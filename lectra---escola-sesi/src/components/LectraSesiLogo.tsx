import React from 'react';
import { SesiLogo } from './SesiLogo';

interface LectraSesiLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export const LectraSesiLogo: React.FC<LectraSesiLogoProps> = ({
  className = '',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`} id="lectra-sesi-branding">
      {/* Lectra Wordmark with stylized circuit nodes */}
      <div className="flex items-center">
        <span
          className={`font-semibold tracking-tight text-[17px] sm:text-[19px] ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          <span className="font-bold">L</span>
          <span>e</span>
          <span className="relative inline-block">
            c
            {/* Upper node dot */}
            <span
              className={`absolute -top-1 left-0 w-1.5 h-1.5 rounded-full ${
                isLight ? 'bg-white' : 'bg-slate-800'
              }`}
            />
          </span>
          <span>t</span>
          <span>r</span>
          <span className="relative inline-block">
            a
            {/* Lower node dot */}
            <span
              className={`absolute -bottom-1 -right-0.5 w-1.5 h-1.5 rounded-full ${
                isLight ? 'bg-white' : 'bg-slate-800'
              }`}
            />
          </span>
        </span>
      </div>

      {/* Divider */}
      <div
        className={`h-6 w-[1.5px] ${
          isLight ? 'bg-white/40' : 'bg-slate-800/80'
        }`}
      />

      {/* Escola SESI Logo */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-[0.2em] text-[7.5px] uppercase ${
            isLight ? 'text-white/90' : 'text-slate-700 font-extrabold'
          }`}
        >
          ESCOLA
        </span>
        <span
          className={`font-black italic tracking-tighter text-[15px] transform -skew-x-12 ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          SESI
        </span>
      </div>
    </div>
  );
};
