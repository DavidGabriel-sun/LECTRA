export type AreaKey = 'humanas' | 'linguagens' | 'natureza' | 'matematica';

export type SubjectKey =
  | 'humanas'
  | 'natureza'
  | 'portugues'
  | 'linguagens'
  | 'matematica'
  | 'geografia'
  | 'historia'
  | 'sociologia'
  | 'filosofia'
  | 'artes'
  | 'ed_fisica'
  | 'ingles'
  | 'biologia'
  | 'fisica'
  | 'quimica';

export interface Exercise {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MaterialItem {
  id: string;
  title: string;
  type: 'pdf' | 'slides' | 'resumo' | 'link';
  size: string;
  pages?: number;
}

export interface VideoChapter {
  timeInSeconds: number;
  label: string;
  summary: string;
}

export interface LessonItem {
  id: string;
  key: SubjectKey;
  area?: AreaKey;
  areaTitle?: string;
  subject?: string;
  title: string; // e.g. "HUMANAS", "NATUREZA", "PORTUGUÊS", "MATEMATICA", "GEOGRAFIA", etc.
  labelAbove?: string;
  professorRole: string; // e.g. "Professor", "Professora"
  professorName: string; // e.g. "Prof. Vilson", "Prof. Matheus", "Profa. Tatiana"
  professorRaw?: string; // e.g. "vilson", "matheus", "tatiana"
  professorAvatar?: string;
  duration: string; // "45 Min."
  durationSeconds: number; // 2700
  date: string; // "26 de out. de 2026"
  topic: string; // "assunto" / "Geometria Espacial"
  themeBg: string; // Tailwind class or hex
  accentColor: string;
  hexColor: string;
  playIconColor: string;
  badgeBg: string;
  description: string;
  chapters: VideoChapter[];
  summaryPoints: string[];
  exercises: Exercise[];
  materials: MaterialItem[];
}

export interface FacultyMember {
  area: AreaKey;
  areaName: string;
  subjectKey: SubjectKey;
  subjectName: string;
  professorName: string;
  professorRaw: string;
  gender: 'M' | 'F';
  themeBg: string;
  accentColor: string;
  description: string;
}

export interface AppNotification {
  id: string;
  message: string;
  time: string;
}

