import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LESSONS_DATA, ALL_SUBJECT_LESSONS } from './data/lessonsData';
import { LessonItem } from './types';
import { PhoneFrame } from './components/PhoneFrame';
import { AulasHojeScreen } from './components/AulasHojeScreen';
import { AulaLeituraScreen } from './components/AulaLeituraScreen';
import { GravacaoScreen } from './components/GravacaoScreen';
import { AlertsScreen } from './components/AlertsScreen';
import { PlanScreen } from './components/PlanScreen';
import { TasksScreen } from './components/TasksScreen';
import { SearchScreen } from './components/SearchScreen';
import { AuthScreens } from './components/AuthScreens';
import { LessonReplayView } from './components/LessonReplayView';
import { AppHeader, ScreenType } from './components/AppHeader';
import { MainNavTab } from './components/BottomNavigation';

export default function App() {
  const [lessons] = useState<LessonItem[]>(LESSONS_DATA);
  const [selectedLesson, setSelectedLesson] = useState<LessonItem>(
    LESSONS_DATA.find((l) => l.key === 'matematica') || LESSONS_DATA[3]
  );
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [previousScreen, setPreviousScreen] = useState<ScreenType>('home');
  const [isMockupView, setIsMockupView] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<string>('26 de out. de 2026');

  // If date changes, update display for lessons
  const displayedLessons = lessons.map((l) => ({
    ...l,
    date: selectedDate,
  }));

  const navigateTo = (screen: ScreenType) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const handleSelectLesson = (lesson: LessonItem) => {
    setSelectedLesson(lesson);
    navigateTo('leitura');
  };

  const handleNavigateFromAlert = (subjectKey: string) => {
    const found =
      ALL_SUBJECT_LESSONS.find((l) => l.key === subjectKey) ||
      displayedLessons.find((l) => l.key === subjectKey) ||
      displayedLessons[3];
    setSelectedLesson(found);
    navigateTo('leitura');
  };

  const handleOpenLectureFromRecording = (lectureTitle: string) => {
    setSelectedLesson({
      ...displayedLessons[3],
      topic: lectureTitle,
    });
    navigateTo('leitura');
  };

  const handleTabChange = (tab: MainNavTab) => {
    switch (tab) {
      case 'home':
        navigateTo('home');
        break;
      case 'plan':
        navigateTo('plan');
        break;
      case 'tasks':
        navigateTo('tasks');
        break;
      case 'alerts':
        navigateTo('alerts');
        break;
      case 'search':
        navigateTo('search');
        break;
    }
  };

  // Determine frame styling based on active screen
  const getFrameConfig = () => {
    switch (currentScreen) {
      case 'player':
        return { screenBg: 'bg-slate-900', statusBarTheme: 'light' as const };
      default:
        return { screenBg: 'bg-white', statusBarTheme: 'dark' as const };
    }
  };

  const frameConfig = getFrameConfig();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Top utility and screen switcher bar */}
      <AppHeader
        isMockupView={isMockupView}
        setIsMockupView={setIsMockupView}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        activeLessonTitle={selectedLesson?.title}
        currentScreen={currentScreen}
        onChangeScreen={(screen) => navigateTo(screen)}
        onGoHome={() => navigateTo('home')}
      />

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-4 overflow-x-hidden">
        <PhoneFrame
          isMockupView={isMockupView}
          currentTime="9:41"
          screenBg={frameConfig.screenBg}
          statusBarTheme={frameConfig.statusBarTheme}
        >
          <AnimatePresence mode="wait">
            {/* 1. HOME SCREEN (Video 00:07 - 00:08, 00:11) */}
            {currentScreen === 'home' && (
              <AulasHojeScreen
                key="home-screen"
                lessons={displayedLessons}
                onSelectLesson={handleSelectLesson}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('alerts')}
              />
            )}

            {/* 2. PLAN SCREEN (Video 00:14) */}
            {currentScreen === 'plan' && (
              <PlanScreen
                key="plan-screen"
                onNavigateToLecture={handleNavigateFromAlert}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('alerts')}
              />
            )}

            {/* 3. TASKS SCREEN (Video 00:15 - 00:18) */}
            {currentScreen === 'tasks' && (
              <TasksScreen
                key="tasks-screen"
                onNavigateToLecture={handleNavigateFromAlert}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('alerts')}
              />
            )}

            {/* 4. ALERTS SCREEN (Video 00:12 - 00:13) */}
            {currentScreen === 'alerts' && (
              <AlertsScreen
                key="alerts-screen"
                onNavigateToLecture={handleNavigateFromAlert}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('home')}
              />
            )}

            {/* 5. SEARCH SCREEN (Video 00:07 search icon in bottom bar) */}
            {currentScreen === 'search' && (
              <SearchScreen
                key="search-screen"
                lessons={displayedLessons}
                onSelectLesson={handleSelectLesson}
                onTabChange={handleTabChange}
                onOpenProfile={() => navigateTo('auth')}
                onOpenOptions={() => navigateTo('home')}
              />
            )}

            {/* 6. AULA LEITURA (Video 00:09 - 00:10) */}
            {currentScreen === 'leitura' && (
              <AulaLeituraScreen
                key={`leitura-${selectedLesson.id}`}
                lesson={selectedLesson}
                onBack={() => navigateTo(previousScreen || 'home')}
                onOpenVideoPlayer={() => navigateTo('player')}
              />
            )}

            {/* 7. GRAVAÇÃO SCREEN (Lectra Voice Recorder) */}
            {currentScreen === 'gravacao' && (
              <GravacaoScreen
                key="gravacao-screen"
                onBack={() => navigateTo('home')}
                onOpenLecture={handleOpenLectureFromRecording}
              />
            )}

            {/* 8. AUTH SCREENS (Login & Signup, Video 00:00 - 00:06) */}
            {currentScreen === 'auth' && (
              <AuthScreens
                key="auth-screens"
                onLoginSuccess={() => navigateTo('home')}
                onClose={() => navigateTo('home')}
              />
            )}

            {/* 9. VIDEO REPLAY PLAYER */}
            {currentScreen === 'player' && (
              <LessonReplayView
                key={`replay-${selectedLesson.id}`}
                lesson={selectedLesson}
                onBack={() => navigateTo('leitura')}
                onSelectOtherLesson={(l) => {
                  setSelectedLesson(l);
                  navigateTo('leitura');
                }}
                allLessons={displayedLessons}
              />
            )}
          </AnimatePresence>
        </PhoneFrame>
      </main>
    </div>
  );
}
