import React from "react";
import { projectsData } from "../data/projects-data.js";
import Project from "./Project";

const ProjectsOverview = () => {
  return (
    <div className="p-8 bg-white dark:bg-neutrals-900 min-h-screen">
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
    </div>
  );
};

export default ProjectsOverview;
