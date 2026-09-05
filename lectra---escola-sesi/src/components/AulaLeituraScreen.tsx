import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  Volume2,
  VolumeX,
  Heart,
  Mic,
  Send,
  Film,
  MessageCircle,
} from 'lucide-react';
import { LessonItem } from '../types';

interface AulaLeituraScreenProps {
  lesson: LessonItem;
  onBack: () => void;
  onOpenVideoPlayer?: () => void;
}

interface CommentItem {
  id: string;
  author: string;
  handle: string;
  timeAgo: string;
  text: string;
  avatarColor: string;
  likes: number;
  isLiked?: boolean;
}

export const AulaLeituraScreen: React.FC<AulaLeituraScreenProps> = ({
  lesson,
  onBack,
  onOpenVideoPlayer,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('pt-BR');
  const [isReadingSpeech, setIsReadingSpeech] = useState<boolean>(false);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: '1',
      author: 'Dan',
      handle: '@danilo_coelho09',
      timeAgo: '2h',
      text: 'não entendi direito a questão da atividade remarcada prapra segunda de qual semana?',
      avatarColor: 'bg-rose-500',
      likes: 2,
    },
    {
      id: '2',
      author: 'TH0',
      handle: '@tiago_corrt',
      timeAgo: '13min',
      text: 'a atividade pode ser entregue por aqui?',
      avatarColor: 'bg-red-600',
      likes: 1,
    },
  ]);

  const languages = [
    { id: 'pt-BR', label: 'português (Brasil)' },
    { id: 'en-US', label: 'Inglês (EUA)' },
    { id: 'fr-FR', label: 'Francês' },
  ];

  const quickSuggestions = ['Pode', 'posso', 'ponto'];

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    if (isReadingSpeech) {
      window.speechSynthesis.cancel();
      setIsReadingSpeech(false);
    } else {
      const textToRead =
        'Então, hoje a gente vai começar falando sobre lorem ipsum dolor sit amet, consectetur adipiscing elit. Primeiro ponto importante: prestem atenção na atividade e no prazo de entrega.';

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = selectedLanguage;
      utterance.onend = () => setIsReadingSpeech(false);
      utterance.onerror = () => setIsReadingSpeech(false);
      window.speechSynthesis.speak(utterance);
      setIsReadingSpeech(true);
    }
  };

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              likes: c.isLiked ? c.likes - 1 : c.likes + 1,
              isLiked: !c.isLiked,
            }
          : c
      )
    );
  };

  const handleSendComment = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newCommentText.trim()) return;

    const newC: CommentItem = {
      id: Date.now().toString(),
      author: 'Você',
      handle: '@aluno.sesi',
      timeAgo: 'agora',
      text: newCommentText.trim(),
      avatarColor: 'bg-blue-600',
      likes: 0,
    };

    setComments([...comments, newC]);
    setNewCommentText('');
  };

  const handleChipClick = (chip: string) => {
    setNewCommentText((prev) => (prev ? `${prev} ${chip}` : chip));
  };

  const headerBgColor = lesson.hexColor || '#EF4444';

  return (
    <motion.div
      id="screen-aula-leitura"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="w-full flex-1 flex flex-col bg-white text-slate-900 overflow-hidden relative select-text"
    >
      {/* Top Header with Gradient Transition (Video 00:09) */}
      <div
        className="w-full pt-2 pb-4 px-5 relative shrink-0 shadow-sm"
        style={{
          backgroundColor: headerBgColor,
          backgroundImage: `linear-gradient(to bottom, ${headerBgColor} 80%, rgba(255, 255, 255, 0.05) 92%, #ffffff 100%)`,
        }}
      >
        {/* Row 1: Back button and Subject/Professor */}
        <div className="flex items-start justify-between">
          <button
            id="btn-leitura-back"
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-white/25 hover:bg-white/35 active:scale-95 flex items-center justify-center text-white transition-all focus:outline-none cursor-pointer"
            aria-label="Voltar"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <div className="text-right">
            <h1
              className="text-[19px] sm:text-[20px] font-black uppercase tracking-wide text-white leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {lesson.title || 'MATEMATICA'}
            </h1>
            <span className="text-[13px] text-white/95 font-medium leading-tight block mt-0.5">
              {lesson.professorName || lesson.professorRole || 'Professor'}
            </span>
          </div>
        </div>

        {/* Row 2: Date and Assunto label */}
        <div className="flex items-center justify-between text-[12.5px] text-white/95 font-medium mt-3 px-0.5">
          <span>{lesson.date || '26 de out. de 2026'}</span>
          <span className="lowercase">assunto</span>
        </div>

        {/* Row 3: Horizontal Language Selection Pills */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar">
          {languages.map((lang) => {
            const isSelected = selectedLanguage === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`px-3.5 py-1 rounded-full text-[11.5px] font-medium transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-white/40 text-white font-bold ring-1 ring-white/50'
                    : 'bg-white/20 hover:bg-white/30 text-white/90'
                }`}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Action Bar (Audio & Video) */}
      <div className="px-5 py-1.5 flex items-center justify-between border-b border-slate-100 text-xs text-slate-500 bg-slate-50/50">
        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
          <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>Dúvidas & Comentários</span>
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSpeech}
            className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold transition-colors cursor-pointer ${
              isReadingSpeech
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-slate-200/80 text-slate-700 hover:bg-slate-300'
            }`}
            title="Ouvir leitura do texto"
          >
            {isReadingSpeech ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
            <span>{isReadingSpeech ? 'Parar' : 'Ouvir'}</span>
          </button>

          {onOpenVideoPlayer && (
            <button
              onClick={onOpenVideoPlayer}
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-semibold transition-colors cursor-pointer"
            >
              <Film className="w-3 h-3" />
              <span>Vídeo Aula</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Lecture Content and Discussion (Video 00:09 - 00:10) */}
      <div className="flex-1 overflow-y-auto px-5 py-3 space-y-3.5 no-scrollbar">
        {/* Title */}
        <h2
          className="text-[24px] sm:text-[26px] font-black tracking-tight text-slate-950 leading-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          Aula Lorem Ipsum
        </h2>

        {/* Content Body (Video 00:09) */}
        <div className="text-[13.5px] sm:text-[14px] leading-[1.55] text-slate-800 space-y-3 font-normal">
          <p>
            Então, hoje a gente vai começar falando sobre lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            <strong className="font-bold text-slate-950">Primeiro ponto importante:</strong> ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </p>

          <p>
            <strong className="font-bold text-slate-950">Agora, prestem atenção nisso:</strong>{' '}
            excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <p>
            Outro ponto importante é que lorem ipsum pode ser aplicado em diferentes contextos,
            dependendo da necessidade do conteúdo apresentado.
          </p>

          <div className="pt-0.5">
            <p>
              <strong className="font-bold text-slate-950">Durante a aula foi solicitado:</strong>{' '}
              Lorem ipsum dolor sit amet Consectetur adipiscing elit Sed do eiusmod tempor
              incididunt
            </p>
          </div>

          <div>
            <strong className="font-bold text-slate-950 block">Atividade passada</strong>
            <p className="mt-0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div>
            <strong className="font-bold text-slate-950 block">Prazo</strong>
            <span className="text-slate-600 block mt-0.5">Entrega: dd/mm/aaaa</span>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[12.5px] text-slate-700 italic">
            Revisar o conteúdo antes da próxima aula e trazer dúvidas, caso necessário.
          </div>
        </div>

        {/* Discussion / Comments Section (Video 00:10) */}
        <div className="pt-3 border-t border-slate-200">
          <h3 className="text-[13px] font-black uppercase tracking-wider text-slate-400 mb-2.5">
            Comentários da Turma ({comments.length})
          </h3>

          <div className="flex flex-col gap-2.5">
            {comments.map((c) => (
              <div
                key={c.id}
                className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {/* Avatar circle */}
                <div
                  className={`w-7 h-7 rounded-full ${c.avatarColor} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs`}
                >
                  {c.author.charAt(0)}
                </div>

                {/* Comment content */}
                <div className="flex-1 leading-snug">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">{c.author}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{c.handle}</span>
                    <span className="text-[10px] text-slate-400">• {c.timeAgo}</span>
                  </div>

                  <p className="text-[12.5px] text-slate-700 mt-0.5">{c.text}</p>
                </div>

                {/* Like Button */}
                <button
                  onClick={() => handleLike(c.id)}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-red-500 pt-1 cursor-pointer transition-colors"
                  title="Curtir dúvida"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      c.isLiked ? 'fill-red-500 text-red-500' : 'text-slate-400'
                    }`}
                  />
                  {c.likes > 0 && <span className="font-semibold">{c.likes}</span>}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Comment Input Bar with Predictive Suggestions (Video 00:10) */}
      <div className="w-full bg-white border-t border-slate-200 p-2 sm:p-2.5 shrink-0">
        {/* Quick Suggestion Chips (Video 00:10: "Pode", "posso", "ponto") */}
        <div className="flex items-center gap-2 mb-1.5 px-1 overflow-x-auto no-scrollbar">
          {quickSuggestions.map((chip) => (
            <button
              key={chip}
              onClick={() => handleChipClick(chip)}
              className="px-3 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition-colors cursor-pointer"
            >
              "{chip}"
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSendComment} className="flex items-center gap-1.5">
          <input
            type="text"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder="Tire sua dúvida com o professor..."
            className="flex-1 bg-slate-100 hover:bg-slate-150 focus:bg-white text-slate-900 text-xs px-3.5 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />

          <button
            type="button"
            onClick={toggleSpeech}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer transition-colors"
            title="Gravar áudio da dúvida"
          >
            <Mic className="w-4 h-4" />
          </button>

          <button
            type="submit"
            disabled={!newCommentText.trim()}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white cursor-pointer transition-colors"
            title="Enviar mensagem"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};
