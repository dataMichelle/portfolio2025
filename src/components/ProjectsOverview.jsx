import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projectsData } from "../data/projects-data.js";
import Project from "./Project";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext";

const ProjectsOverview = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <section className="p-8 bg-transparent min-h-screen pt-28">
      {/* Dark Mode Toggle */}
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

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
