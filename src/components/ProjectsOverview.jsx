import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projectsData } from "../data/projects-data.js";
import Project from "./Project";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext";

// Animation variants for name
const nameVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProjectsOverview = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <section className="p-8 bg-transparent min-h-screen pt-28">
      {/* Dark Mode Toggle */}
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      {/* Name Div */}
      <div className="fixed top-4 left-16 md:left-20 z-40">
        <Motion.div variants={nameVariants} initial="hidden" animate="visible">
          <Link
            to="/"
            className="text-primary-700 dark:text-primary-300 font-poiret font-bold text-2xl md:text-5xl hover:text-primary-500 dark:hover:text-primary-100 transition-colors duration-200"
          >
            Michelle Salazar
          </Link>
        </Motion.div>
      </div>
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-8 text-center">
        My Projects
      </h1>
      <section>
        <div className="flex flex-col gap-8 items-center">
          {projectsData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageURL={project.imageURL}
              projectURL={project.projectURL}
              liveURL={project.liveURL}
              githubURL={project.githubURL}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProjectsOverview;
