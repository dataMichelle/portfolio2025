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

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-700 focus:text-white focus:rounded focus:font-semibold focus:ring-2 focus:ring-primary-300"
        role="button"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Fixed Navbar Container */}
      <nav 
        className="fixed top-0 left-0 w-full bg-transparent backdrop-filter backdrop-blur-md z-50 px-4 sm:px-6 md:px-6 pt-0"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center mt-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-filter backdrop-blur-md shadow-md text-primary-700 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-300"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Name */}
          <Motion.div
            className="flex-1 flex justify-center md:justify-start md:ml-4 md:mr-4 md:flex-none w-full md:w-auto text-center md:text-left mt-3"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/"
              className="text-primary-700 dark:!text-primary-50 font-poiret font-bold text-2xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl hover:text-primary-500 dark:hover:!text-primary-100 transition-colors duration-200"
              aria-label="Michelle Salazar - Go to homepage"
            >
              Michelle Salazar
            </Link>
          </Motion.div>

          {/* Centered Icon Navigation (Pill-Shaped, md and above) */}
          <div 
            className="hidden md:flex md:items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:w-auto bg-neutral-100/50 dark:bg-neutral-900/50 navbar-glass rounded-full shadow-lg px-4 py-4 md:px-3 md:py-3 lg:px-6 lg:py-5 backdrop-filter backdrop-blur-md mt-3 z-50"
            role="menubar"
            aria-label="Main navigation menu"
          >
            <div className="flex items-center justify-center mx-auto space-x-6 sm:space-x-8 md:space-x-4 lg:space-x-10">
              {links.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 text-primary-700 dark:!text-primary-100 group hover:text-accent-300 dark:hover:!text-primary-50 transition-colors duration-200 cursor-pointer relative z-60 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:rounded ${
                      isActive ? "text-accent-300 dark:!text-primary-50" : ""
                    }`
                  }
                  role="menuitem"
                  tabIndex={0}
                  aria-label={`Navigate to ${link.text} page`}
                >
                  <span aria-hidden="true">{link.icon}</span>
                  <span className="text-sm md:text-xs lg:text-base font-nunito font-medium group-hover:underline">
                    {link.text}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center mt-3">
            <DarkModeToggle
              toggleDarkMode={toggleDarkMode}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu (below md) */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed top-12 left-0 w-full bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-filter backdrop-blur-md shadow-lg z-40 flex flex-col items-center py-4"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 text-primary-700 dark:!text-primary-100 py-2 hover:text-accent-300 dark:hover:!text-primary-50 transition-colors duration-200 cursor-pointer relative z-60 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:rounded ${
                  isActive
                    ? "text-accent-300 dark:!text-primary-50 underline underline-offset-4"
                    : ""
                }`
              }
              onClick={handleMobileLinkClick}
              role="menuitem"
              tabIndex={0}
              aria-label={`Navigate to ${link.text} page`}
            >
              <span aria-hidden="true">{link.icon}</span>
              <span className="text-base font-nunito font-medium">
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
