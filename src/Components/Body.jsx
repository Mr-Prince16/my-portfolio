import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainGlassCard from './MainGlassCard';
import MoreAboutDrawer from './MoreAboutDrawer';
import MobileSidebar from './MobileSidebar';

import { useTheme } from '../Contexts/ThemeContext';
import { useColorBlind } from '../Contexts/ColorBlindContext';
import { backgroundMap, textColorMap } from '../Config';

const Body = () => {
  const { theme } = useTheme();
  const { mode } = useColorBlind();

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const backgroundClass =
    theme === 'dark'
      ? backgroundMap.dark
      : backgroundMap[mode] || backgroundMap.normal;

  const textColorClass =
    theme === 'dark'
      ? textColorMap.dark
      : textColorMap[mode] || textColorMap.normal;

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`h-screen w-full transition-all duration-500 ${backgroundClass} `}>
      <div className="max-w-[1400px] mx-auto flex flex-col gap-2 h-full">

        {/* Header */}
        <div className={`sticky top-0 z-50 ${textColorClass}`}>
          <Header textColorClass={textColorClass} toggleSidebar={() => setIsMobileSidebarOpen(true)} />
        </div>

        {/* Main content layout */}
        <div className={`flex-1 flex flex-col lg:flex-row gap-2 ${textColorClass} drop-shadow-[0_1px_3px_rgba(255,255,255,0.2)] overflow-hidden`}>
          {/* Sidebar (desktop only) */}
          <div className="hidden lg:block w-full lg:w-[260px]">
            <Sidebar onScrollTo={handleScroll} />
          </div>

          {/* Main Glass Content */}
          <div className="flex-1 h-full">
            <MainGlassCard />
          </div>
        </div>

        {/* Right-side drawer */}
        <div className={`${textColorClass}`}>
          <MoreAboutDrawer />
        </div>

        {/* Mobile Sidebar */}
        <div className={`${textColorClass}`}>
        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
          onScrollTo={handleScroll}
        />
        </div>

      </div>
    </div>
  );
};

export default Body;
