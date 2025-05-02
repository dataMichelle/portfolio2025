import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { to: "/", text: "Home", icon: <FaHome className="w-5 h-5" /> },
    { to: "/about", text: "About", icon: <FaUser className="w-5 h-5" /> },
    {
      to: "/projects",
      text: "Projects",
      icon: <FaProjectDiagram className="w-5 h-5" />,
    },
    {
      to: "/contact",
      text: "Contact",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[50%] max-w-lg bg-neutral-100/50 dark:bg-neutral-900/50 navbar-glass rounded-full shadow-lg z-30 flex items-center justify-center px-4 py-4 backdrop-filter backdrop-blur-md">
      <div className="flex items-center space-x-10">
        {" "}
        {/* Increased space between groups */}
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center space-x-2 text-primary-700 dark:!text-primary-100 group hover:text-accent-300 dark:hover:!text-primary-50 transition-colors duration-200 ${
                isActive
                  ? "active:text-accent-300 dark:active:!text-primary-50"
                  : ""
              }`
            }
          >
            <div className="flex items-center space-x-1">
              {" "}
              {/* Tight grouping for icon and text */}
              {link.icon}
              <span className="hidden md:inline-block text-sm font-nunito font-medium group-hover:underline">
                {link.text}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
