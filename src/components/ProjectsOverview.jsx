import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projectsData } from "../data/projects-data.js";
import Project from "./Project";

const ProjectsOverview = () => {
  return (
    <section className="p-4 sm:p-8 bg-transparent min-h-screen pt-20 sm:pt-28">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary-700 dark:text-primary-300 mb-6 sm:mb-8 text-center">
        My Projects
      </h1>
      <section>
        <div className="flex flex-col gap-4 sm:gap-8 items-center">
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
