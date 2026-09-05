import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Volume2,
  RefreshCw,
  Info,
  Check,
  ChevronLeft,
  Lock,
  Mail,
} from 'lucide-react';
import { LectraSesiLogo } from './LectraSesiLogo';

interface AuthScreensProps {
  onLoginSuccess: () => void;
  initialMode?: 'login' | 'signup';
  onClose?: () => void;
}

export const AuthScreens: React.FC<AuthScreensProps> = ({
  onLoginSuccess,
  initialMode = 'login',
  onClose,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);

  // Login State
  const [loginEmail, setLoginEmail] = useState<string>('0000214532@escolamail.com.br');
  const [loginPassword, setLoginPassword] = useState<string>('sesi@2026');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showRipple, setShowRipple] = useState<boolean>(false);

  // Signup State
  const [checkAnuncios, setCheckAnuncios] = useState<boolean>(true);
  const [checkApps, setCheckApps] = useState<boolean>(true);
  const [captchaCode, setCaptchaCode] = useState<string>('LEP8L');
  const [captchaInput, setCaptchaInput] = useState<string>('LEP8L');
  const [captchaAudible, setCaptchaAudible] = useState<boolean>(false);

  // Audio helper for visual impairment
  const playCaptchaAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const spelled = captchaCode.split('').join(' ');
      const utterance = new SpeechSynthesisUtterance(`Código: ${spelled}`);
      utterance.lang = 'pt-BR';
      window.speechSynthesis.speak(utterance);
      setCaptchaAudible(true);
      setTimeout(() => setCaptchaAudible(false), 2500);
    }
  };

  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let res = '';
    for (let i = 0; i < 5; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(res);
    setCaptchaInput(res);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowRipple(true);

    // Simulate authentication with the circular ripple transition from video 00:06
    setTimeout(() => {
      onLoginSuccess();
      setIsSubmitting(false);
      setShowRipple(false);
    }, 700);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // After signup, switch to login or log in directly
    setIsSubmitting(true);
    setTimeout(() => {
      onLoginSuccess();
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <motion.div
      id="screen-auth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex-1 flex flex-col bg-white text-slate-900 overflow-y-auto no-scrollbar relative select-none"
    >
      {/* Expanding Circular Ripple Effect (Video 00:06) */}
      <AnimatePresence>
        {showRipple && (
          <motion.div
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: 25, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            className="fixed inset-0 m-auto w-12 h-12 rounded-full bg-[#007AFF] z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Top Header / Switch Mode */}
      <div className="pt-3 px-5 flex items-center justify-between">
        {onClose ? (
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        ) : (
          <div className="w-5" />
        )}

        {/* Toggle between Signup and Login to test both screens */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full text-xs font-semibold">
          <button
            onClick={() => setMode('login')}
            className={`px-3 py-1 rounded-full transition-all ${
              mode === 'login'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`px-3 py-1 rounded-full transition-all ${
              mode === 'signup'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Criar Conta
          </button>
        </div>

        <div className="w-5" />
      </div>

      {mode === 'signup' ? (
        /* ================= SCREEN 1: CRIE SUA CONTA (Video 00:00 - 00:03) ================= */
        <div className="px-6 py-4 flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-center text-[19px] font-bold text-slate-800 mb-4">
              Crie sua Conta
            </h1>

            {/* Lectra Logo */}
            <div className="flex justify-center mb-6">
              <LectraSesiLogo theme="dark" showSesi={false} />
            </div>

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              {/* Checkbox 1: Anúncios */}
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={checkAnuncios}
                  onChange={(e) => setCheckAnuncios(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <div className="text-xs leading-relaxed text-slate-600">
                  <strong className="text-slate-900 block text-[13px] font-semibold">
                    Anúncios
                  </strong>
                  Receba e-mails e comunicados da Lectra com recomendações e atualizações sobre as
                  novas tecnologias, serviços e software da Lectra.
                </div>
              </label>

              {/* Checkbox 2: Apps e Propagandas */}
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={checkApps}
                  onChange={(e) => setCheckApps(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <div className="text-xs leading-relaxed text-slate-600">
                  <strong className="text-slate-900 block text-[13px] font-semibold">
                    Apps e Propagandas...
                  </strong>
                  Receba e-mails e comunicados da Lectra com novos lançamentos, conteúdo exclusivo,
                  ofertas especiais, recomendações e etc...
                </div>
              </label>

              {/* CAPTCHA Card (Video 00:02 - 00:03) */}
              <div className="pt-2">
                <div className="w-full bg-slate-100 p-3 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden select-none">
                  {/* Distorted styled letters */}
                  <div
                    className="text-2xl font-mono font-black tracking-widest text-slate-800 transform -skew-x-12 select-none"
                    style={{
                      textShadow: '2px 2px 3px rgba(0,0,0,0.2)',
                      letterSpacing: '0.3em',
                    }}
                  >
                    {captchaCode}
                  </div>
                  {/* Scratch lines on captcha */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(45deg,transparent_45%,#000_50%,transparent_55%)] bg-[size:10px_10px]" />
                </div>

                {/* Input for Captcha */}
                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                  placeholder="Digite o código"
                  className="w-full mt-2 px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Audio and Refresh Actions */}
                <div className="flex items-center justify-between text-xs text-blue-600 mt-2">
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Novo código</span>
                  </button>

                  <button
                    type="button"
                    onClick={playCaptchaAudio}
                    className="flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Pessoas com deficiência visual</span>
                  </button>
                </div>
              </div>

              {/* Privacy Disclaimer */}
              <p className="text-[10.5px] leading-relaxed text-slate-500 pt-2 text-justify">
                Usamos as informações da sua Conta Lectra para possibilitar um início de sessão
                seguro e acessar seus dados. A Lectra registrará determinados dados para fins de
                segurança, suporte e geração de relatórios. Se você concordar, a Lectra também poderá
                usar as informações da sua Conta Lectra para enviar e-mails e comunicações.
              </p>

              {/* Blue Action Button */}
              <button
                type="submit"
                className="w-full bg-[#007AFF] hover:bg-[#0069D9] active:scale-[0.98] text-white font-bold py-3 rounded-full text-[14.5px] shadow-sm transition-all cursor-pointer mt-2"
              >
                Continuar
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* ================= SCREEN 2: FAÇA LOGIN COM SEU CPF/EMAIL (Video 00:04 - 00:06) ================= */
        <div className="px-6 py-4 flex-1 flex flex-col justify-between">
          <div>
            {/* Lectra Logo */}
            <div className="flex justify-center mb-4">
              <LectraSesiLogo theme="dark" showSesi={false} />
            </div>

            <h1 className="text-center text-[19px] font-bold text-slate-900 mb-5">
              Faça login com seu CPF/Email
            </h1>

            {/* Login Card Container */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 shadow-2xs mb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                  🪪
                </div>
                <span className="text-[14px] font-bold text-slate-900">
                  Número do CPF/Email
                </span>
              </div>
              <p className="text-[11.5px] text-slate-500 mb-3 ml-8">
                Digite seu CPF/Email para criar ou acessar sua conta
              </p>

              <form onSubmit={handleLoginSubmit} className="space-y-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Email ou CPF
                  </label>
                  <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="ex: 0000214532@escolamail.com.br"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                    Digite sua senha
                  </label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                  />
                </div>

                {/* Blue Continuar Button (Triggers Ripple at 00:06) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#007AFF] hover:bg-[#0069D9] active:scale-[0.98] text-white font-bold py-2.5 rounded-full text-[14px] shadow-sm transition-all cursor-pointer mt-3"
                >
                  Continuar
                </button>
              </form>
            </div>

            {/* Help Note Link */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 hover:text-blue-600 transition-colors cursor-pointer text-center">
              <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Está com dúvidas e precisa de ajuda? Termo de Uso e Aviso de Privacidade</span>
            </div>
          </div>

          {/* Bottom Illustration (Classroom anime students studying with Lectra stationery, Video 00:04 - 00:06) */}
          <div className="mt-4 pt-3 flex flex-col items-center opacity-90">
            <div className="w-full h-32 bg-gradient-to-t from-blue-50/70 to-transparent rounded-2xl p-2 flex items-center justify-center relative overflow-hidden border border-blue-100/50">
              {/* Stylized Classroom Vector Illustration */}
              <svg viewBox="0 0 300 120" className="w-full h-full max-w-[280px]">
                {/* Desks */}
                <rect x="20" y="75" width="75" height="35" rx="5" fill="#E2E8F0" />
                <rect x="115" y="65" width="80" height="45" rx="5" fill="#CBD5E1" />
                <rect x="210" y="75" width="75" height="35" rx="5" fill="#E2E8F0" />

                {/* Student 1 (Left) */}
                <circle cx="58" cy="45" r="14" fill="#93C5FD" />
                <rect x="44" y="58" width="28" height="20" rx="6" fill="#3B82F6" />

                {/* Student 2 (Center - with Lectra tablet) */}
                <circle cx="155" cy="35" r="16" fill="#FCA5A5" />
                <rect x="138" y="50" width="34" height="26" rx="8" fill="#EF4444" />
                {/* Lectra Screen in hand */}
                <rect x="143" y="66" width="24" height="15" rx="2" fill="#FFFFFF" stroke="#007AFF" strokeWidth="1.5" />
                <text x="155" y="76" fontSize="5" fontWeight="bold" fill="#007AFF" textAnchor="middle">Lectra</text>

                {/* Student 3 (Right) */}
                <circle cx="248" cy="45" r="14" fill="#86EFAC" />
                <rect x="234" y="58" width="28" height="20" rx="6" fill="#10B981" />

                {/* Books & Notes */}
                <rect x="35" y="73" width="18" height="4" rx="1" fill="#F59E0B" />
                <rect x="225" y="73" width="16" height="4" rx="1" fill="#8B5CF6" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
