import React from 'react';
import { User, MoreHorizontal } from 'lucide-react';
import { LectraSesiLogo } from './LectraSesiLogo';

interface HomeTopBarProps {
  onOpenProfile?: () => void;
  onOpenOptions?: () => void;
  theme?: 'light' | 'dark';
}

export const HomeTopBar: React.FC<HomeTopBarProps> = ({
  onOpenProfile,
  onOpenOptions,
  theme = 'dark',
}) => {
  return (
    <div className="w-full pt-3 px-5 pb-2 flex items-center justify-between z-20 shrink-0 select-none">
      {/* Left Action Buttons: Avatar and More (...) */}
      <div className="flex items-center gap-2">
        <button
          id="btn-user-profile"
          onClick={onOpenProfile}
          className="w-8 h-8 rounded-full bg-slate-200/90 hover:bg-slate-300 active:scale-95 flex items-center justify-center text-slate-700 transition-colors focus:outline-none shadow-2xs cursor-pointer"
          title="Perfil do Estudante / Conta"
          aria-label="Perfil do Estudante"
        >
          <User className="w-4 h-4 stroke-[2.2]" />
        </button>

        <button
          id="btn-more-options"
          onClick={onOpenOptions}
          className="w-8 h-8 rounded-full bg-slate-200/90 hover:bg-slate-300 active:scale-95 flex items-center justify-center text-slate-700 transition-colors focus:outline-none shadow-2xs cursor-pointer"
          title="Mais opções"
          aria-label="Mais opções"
        >
          <MoreHorizontal className="w-4 h-4 stroke-[2.2]" />
        </button>
      </div>

      {/* Right: Lectra | ESCOLA SESI Logo */}
      <LectraSesiLogo theme={theme} />
    </div>
  );
};
