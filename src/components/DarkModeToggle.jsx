import React from "react";
import { motion as Motion } from "framer-motion";
import { CiLight, CiDark } from "react-icons/ci";

const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <Motion.div
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
    >
      <button
        onClick={toggleDarkMode}
        className={`p-2 md:p-2 lg:p-3 rounded-full text-neutral-50 shadow-2xl backdrop-filter backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "bg-accent-50 border-2 text-primary-900 border-primary-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            : "bg-primary-900 border-2 text-white border-primary-500 hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        }`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <CiLight size={24} /> : <CiDark size={24} />}
      </button>
    </Motion.div>
  );
};

export default DarkModeToggle;
