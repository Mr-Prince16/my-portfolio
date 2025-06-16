import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGuitar,
  FaGamepad,
  FaDumbbell,
  FaMoon,
  FaBookOpen,
  FaCoffee
} from 'react-icons/fa';

const hobbies = [
  { icon: <FaGuitar />, text: 'Strumming melodies on guitar' },
  { icon: <FaGamepad />, text: 'Battling bosses in video games' },
  { icon: <FaDumbbell />, text: 'Lifting weights like a hero' },
  { icon: <FaMoon />, text: 'Late-night anime marathons' },
  { icon: <FaBookOpen />, text: 'Collecting strange trivia' },
  { icon: <FaCoffee />, text: 'Fueled entirely by coffee ☕' },
];

const MoreAboutDrawer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed top-1/3 right-0 z-50 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ width: 70 }}
        animate={{ width: isHovered ? 340 : 50 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="h-full bg-white/10 backdrop-blur-lg border-l border-white/20 rounded-l-xl shadow-2xl overflow-hidden flex items-center"
      >
        <div className="p-4 text-sm w-full">
          {isHovered ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold bg-clip-text tracking-wide mb-1">
                ✨ More About Me
              </h3>

              <ul className="space-y-2">
                {hobbies.map((hobby, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 hover: transition duration-300"
                  >
                    <span className="text-lg mt-[2px]">{hobby.icon}</span>
                    <span className="text-sm leading-snug">{hobby.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <div className="-rotate-90 origin-center text-[11px] tracking-widest font-semibold ">
                MORE ABOUT ME
              </div>
            </div>


          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MoreAboutDrawer;
