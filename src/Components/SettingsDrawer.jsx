import React from 'react'
import { useColorBlind } from '../Contexts/ColorBlindContext';
const modes = [
    'normal',
    'protanopia',
    'deuteranopia',
    'tritanopia',
    'achromatopsia',
    'blueConeMonochromacy',
    'lavenderSunset',
    'oceanBreeze',
    'mintCream',
    'peachDream'
  ];
const SettingsDrawer = () => {
    const { setMode } = useColorBlind();
  return (
    <div className="fixed top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 z-50">
      <p className="mb-2 font-bold">Color Mode</p>
      <select
        className="bg-transparent border border-white/30 p-1 rounded"
        onChange={(e) => setMode(e.target.value)}
      >
        {modes.map((m) => (
          <option key={m} value={m} className="text-black">
            {m}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SettingsDrawer
