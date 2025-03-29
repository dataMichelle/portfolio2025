import React from "react";
import projectsData from "../../data/projects.json";

const ProjectDetail5 = () => {
  const project = projectsData.find((project) => project.index === 5);

  return (
    <div className="p-8 bg-white dark:bg-neutrals-900 min-h-screen">
      {/* Project Title */}
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-6">
        {project.title}
      </h1>

      {/* Project Image */}
      <img
        src={project.projectsImage}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-6 shadow-md"
      />

      {/* Project Description */}
      <p className="text-lg text-neutrals-700 dark:text-neutrals-300 mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mt-6">
        Tech Stack
      </h2>
      <p className="text-neutrals-700 dark:text-neutrals-300">
        {project.techStack}
      </p>

      {/* Purpose */}
      <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mt-6">
        Purpose
      </h2>
      <p className="text-neutrals-700 dark:text-neutrals-300">
        {project.purpose}
      </p>

      {/* Stack Explanation */}
      <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mt-6">
        Stack Explanation
      </h2>
      <p className="text-neutrals-700 dark:text-neutrals-300">
        {project.stackExplanation}
      </p>

      {/* Live Project Link */}
      <a
        href={project.liveLink}
        className="inline-block mt-6 text-lg font-medium text-yellow-500 hover:text-yellow-600 dark:text-yellow-300 dark:hover:text-yellow-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Live Project
      </a>
    </div>
  );
};

export default ProjectDetail5;
