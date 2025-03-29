import React, { useEffect, useState } from "react";
import projectsData from "../data/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data (if needed, here we directly use the imported data)
    setProjects(projectsData);
  }, []);

  return (
    <div className="p-8 bg-white dark:bg-neutrals-900 min-h-screen">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-8 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-primary-50 dark:bg-neutrals-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={project.projectsImage}
              alt={project.title}
              className="h-60 w-auto object-cover rounded-t-lg mx-auto"
            />

            <h2 className="text-xl font-semibold text-primary-700 dark:text-primary-300 mt-4">
              {project.title}
            </h2>
            <p className="text-neutrals-700 dark:text-neutrals-300 mt-2">
              {project.description}
            </p>
            <a
              href={project.link}
              className="text-yellow-500 dark:text-yellow-300 mt-4 inline-block hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
