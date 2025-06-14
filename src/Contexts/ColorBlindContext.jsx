import React from 'react'
import  { createContext, useContext, useState } from 'react';
const ColorBlindContext = createContext();
export const ColorBlindProvider = ({ children }) => {
    const [mode, setMode] = useState('normal'); // modes: normal, protanopia, deuteranopia, tritanopia, achromatopsia, blueConeMonochromacy
  
    return (
      <ColorBlindContext.Provider value={{ mode, setMode }}>
        {children}
      </ColorBlindContext.Provider>
    );
  };
  export const useColorBlind = () => useContext(ColorBlindContext);