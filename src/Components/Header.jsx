import React, { useState } from 'react'
import { useColorBlind } from '../Contexts/ColorBlindContext';
import { FaPalette } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const modes = [
    { key: 'normal', label: 'Normal', color: 'from-pink-100 to-blue-200' },
    { key: 'protanopia', label: 'Protanopia', color: 'from-blue-900 via-red-900 to-yellow-800' },
    { key: 'deuteranopia', label: 'Deuteranopia', color: 'from-green-900 via-yellow-700 to-purple-800' },
    { key: 'tritanopia', label: 'Tritanopia', color: 'from-purple-900 via-green-700 to-blue-500' },
    { key: 'achromatopsia', label: 'Achromatopsia', color: 'from-gray-600 via-gray-800 to-black' },
    { key: 'blueConeMonochromacy', label: 'Blue Cone', color: 'from-blue-700 via-cyan-800 to-gray-900' },
    { key: 'lavenderSunset', label: 'Lavender Sunset', color: 'from-pink-300 via-purple-400 to-yellow-200' },
    { key: 'oceanBreeze', label: 'Ocean Breeze', color: 'from-cyan-300 via-blue-400 to-indigo-300' },
    { key: 'mintCream', label: 'Mint Cream', color: 'from-green-200 via-teal-300 to-blue-100' },
    { key: 'peachDream', label: 'Peach Dream', color: 'from-orange-200 via-pink-300 to-yellow-100' },
];
const Header = ({ toggleSidebar }) => {
    const { setMode } = useColorBlind();
    const [open, setOpen] = useState(false);

    return (
        <header
            className={`flex items-center relative z-10 justify-between w-full px-6 py-4 rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border border-white/20  transition-all duration-500 hover:scale-[1.01]`}
        >
            {/* Logo on left */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                        src="src\assets\DSC_0470.jpg"
                        alt="Logo"
                        className="object-cover w-full h-full"
                    />
                </div>
                <h1 className="text-2xl font-bold tracking-wide">My Portfolio</h1>
            </div>

            {/* Centered title */}
            <div className="hidden sm:block text-center">
                <motion.p
                    className="text-lg sm:text-xl font-semibold bg-gradient-to-r bg-clip-text animate-pulse"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Elevating Ideas with Code
                </motion.p>
            </div>

            {/* Right-side color palette */}
            <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl transition">
                    <FaPalette className=" text-lg" />
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-0 mt-2 w-64 p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl
 grid grid-cols-2 gap-3 z-50"
                        >
                            {modes.map((mode) => (
                                <div key={mode.key} className="relative">
                                    <button
                                        onClick={() => {
                                            setMode(mode.key);
                                            setOpen(false);
                                        }}
                                        className={`group h-12 w-full rounded-xl border border-white/30 shadow-md transition-transform transform hover:scale-105 bg-gradient-to-r ${mode.color}`}
                                    >
                                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 rounded bg-white/90 text-xs text-black font-medium shadow opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                                            {mode.label}
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg border border-white/20 hover:bg-white/20 transition"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

        </header>
    );
}

export default Header
