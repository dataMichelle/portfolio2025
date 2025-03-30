import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData.js";

const ProjectDetail = () => {
  const { projectURL } = useParams();
  const project = projectsData.find((p) => p.projectURL === projectURL);

  if (!project) {
    return <p className="text-center text-red-500">Project not found!</p>;
  }

  return (
    <main className="p-8 bg-white dark:bg-neutrals-900 min-h-screen flex flex-col gap-8">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-700 dark:text-primary-300 text-center mb-4">
          {project.title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
          {project.description}
        </p>
      </div>

      {/* Tags and Links Section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <ul className="tags flex flex-wrap gap-2 justify-center">
          {project.tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a
            href={project.liveURL}
            className="text-yellow-500 dark:text-yellow-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <a
            href={project.githubURL}
            className="text-primary-500 dark:text-primary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Project Image Section */}
      <div className="max-w-6xl mx-auto">
        <img
          src={project.imageURL}
          alt={project.title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Project Goal Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Project Goal
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Web Stack Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Web Stack
        </h3>
        <div className="flex flex-wrap gap-4">
          <div className="w-1/3 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="w-1/3 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="w-1/3 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="w-1/3 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="w-1/3 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Process
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </main>
  );
};

export default ProjectDetail;
