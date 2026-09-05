import React from 'react';

interface SesiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SesiLogo: React.FC<SesiLogoProps> = ({ className = '', size = 'md' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`inline-flex flex-col select-none leading-none tracking-tight ${className}`} id="sesi-logo-brand">
      <span
        className={`font-bold tracking-[0.22em] uppercase text-white/95 ${
          isSm ? 'text-[9px]' : isLg ? 'text-[13px]' : 'text-[10px]'
        }`}
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        ESCOLA
      </span>
      <span
        className={`font-black italic tracking-tighter text-white transform -skew-x-12 ${
          isSm ? 'text-[18px]' : isLg ? 'text-[32px]' : 'text-[22px]'
        }`}
        style={{
          fontFamily: "'Plus Jakarta Sans', 'Arial Black', sans-serif",
          textShadow: '0 1px 2px rgba(0,0,0,0.1)',
        }}
      >
        SESI
      </span>
    </div>
  );
};
