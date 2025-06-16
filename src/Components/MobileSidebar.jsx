import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';

const MobileSidebar = ({ isOpen, onClose, onScrollTo }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Slide-in Panel */}
                    <motion.div
                        className="fixed top-0 left-0 h-full w-72  z-50 shadow-xl overflow-y-auto max-h-screen p-4"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween' }}
                    >

                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 px-3 py-1 rounded-full text-white bg-white/20 hover:bg-white/30 text-sm z-50"
                        >
                            ✕
                        </button>


                        <Sidebar onScrollTo={(id) => {
                            onScrollTo(id);
                            onClose();
                        }} />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileSidebar;
