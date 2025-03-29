import React from "react";
import { Link } from "react-router-dom";
import { CiLight, CiDark } from "react-icons/ci";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-primary-50 dark:bg-neutrals-900 sticky top-0 z-20 shadow-lg transition-all duration-300">
      {/* Left Links */}
      <div className="flex space-x-8">
        <Link
          to="/"
          className="relative text-primary-700 dark:text-primary-200 font-nunito font-medium text-lg hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-500 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="relative text-primary-700 dark:text-primary-200 font-nunito font-medium text-lg hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-500 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="relative text-primary-700 dark:text-primary-200 font-nunito font-medium text-lg hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-500 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
        >
          Projects
        </Link>
      </div>

      {/* Right Links and Dark Mode Toggle */}
      <div className="flex items-center space-x-8">
        <Link
          to="/contact"
          className="relative text-primary-700 dark:text-primary-200 font-nunito font-medium text-lg hover:text-primary-500 dark:hover:text-primary-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-500 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </Link>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full border transition-all duration-300 ${
            isDarkMode
              ? "bg-primary-600 border-primary-500 text-white hover:bg-primary-500 hover:border-primary-400"
              : "bg-primary-100 border-primary-200 text-primary-700 hover:bg-yellow-100 hover:border-yellow-300"
          } focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-400`}
        >
          {isDarkMode ? <CiLight size={24} /> : <CiDark size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
