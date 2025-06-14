import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import MainGlassCard from './MainGlassCard';
import SettingsDrawer from './SettingsDrawer';
import { useTheme } from '../Contexts/ThemeContext';
import { useColorBlind } from '../Contexts/ColorBlindContext';
import { backgroundMap, textColorMap } from '../Config';
const Body = () => {
    const { theme } = useTheme();
    const { mode } = useColorBlind();
  
    const backgroundClass =
      theme === 'dark'
        ? backgroundMap.dark
        : backgroundMap[mode] || backgroundMap.normal;

        const textColorClass =
        theme === 'dark'
          ? textColorMap.dark
          : textColorMap[mode] || textColorMap.normal;

          const glassStyle = `rounded-2xl shadow-xl bg-white/20 backdrop-blur-md border border-white/20`;
  return (
    
    <div className={`min-h-screen w-full transition-all duration-500 ${backgroundClass} px-4 py-6 sm:px-10 sm:py-10`}>
      
    <div className={`max-w-7xl mx-auto flex flex-col gap-6 `}>
      <div className={`${glassStyle} ${textColorClass} p-6`}>
        <Header />
      </div>
      <div className="flex gap-6">
        <div className={`w-1/4 ${glassStyle} ${textColorClass} p-4`}>
          <Sidebar />
        </div>
        <div className={`flex-1 ${glassStyle} ${textColorClass} p-4`}>
          <MainGlassCard />
        </div>
      </div>
    </div>
    <SettingsDrawer />
  </div>
  )
}

export default Body
