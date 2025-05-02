import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext";

// Animation variants for name
const nameVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const links = [
    {
      to: "/",
      text: "Home",
      icon: <FaHome className="w-5 h-5 md:w-4 md:h-4 lg:w-6 lg:h-6" />,
    },
    {
      to: "/about",
      text: "About",
      icon: <FaUser className="w-5 h-5 md:w-4 md:h-4 lg:w-6 lg:h-6" />,
    },
    {
      to: "/projects",
      text: "Projects",
      icon: (
        <FaProjectDiagram className="w-5 h-5 md:w-4 md:h-4 lg:w-6 lg:h-6" />
      ),
    },
    {
      to: "/contact",
      text: "Contact",
      icon: <FaEnvelope className="w-5 h-5 md:w-4 md:h-4 lg:w-6 lg:h-6" />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger Menu */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-filter backdrop-blur-md shadow-md text-primary-700 dark:text-primary-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Extended Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-6 pt-4 bg-transparent z-30">
        {/* Name */}
        <Motion.div
          className="md:ml-4 md:mr-4 lg:ml-4 lg:mr-4 flex-1 md:flex-none flex justify-center md:justify-start min-w-0 w-full md:w-auto text-center md:text-left"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/"
            className="text-primary-700 dark:!text-primary-50 font-poiret font-bold text-base sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl hover:text-primary-500 dark:hover:!text-primary-100 transition-colors duration-200 mx-auto md:mx-0"
          >
            Michelle Salazar
          </Link>
        </Motion.div>

        {/* Centered Icon Navigation (Pill-Shaped, md and above) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-neutral-100/50 dark:bg-neutral-900/50 navbar-glass rounded-full shadow-lg px-4 py-4 md:px-3 md:py-3 lg:px-6 lg:py-5 backdrop-filter backdrop-blur-md md:mt-1 lg:mt-6 pointer-events-none">
          <div className="flex items-center justify-center space-x-6 sm:space-x-8 md:space-x-4 lg:space-x-10 pointer-events-auto">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-primary-700 dark:!text-primary-100 group hover:text-accent-300 dark:hover:!text-primary-50 transition-colors duration-200 ${
                    isActive ? "text-accent-300 dark:!text-primary-50" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-1">
                  {link.icon}
                  <span className="text-sm md:text-xs lg:text-base font-nunito font-medium group-hover:underline">
                    {link.text}
                  </span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Dark Mode Toggle (Right Corner) */}
        <div className="flex-1 flex justify-end md:mr-4 lg:mr-4 z-40">
          <DarkModeToggle
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />
        </div>
      </nav>

      {/* Mobile Menu (below md) */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-filter backdrop-blur-md shadow-lg z-40 flex flex-col items-center py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 text-primary-700 dark:!text-primary-100 py-2 hover:text-accent-300 dark:hover:!text-primary-50 transition-colors duration-200 ${
                  isActive
                    ? "text-accent-300 dark:!text-primary-50 underline underline-offset-4"
                    : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              <span className="text-2xl font-nunito font-medium">
                {link.text}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
