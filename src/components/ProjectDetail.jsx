import React from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../data/project-details"; // Import the data file directly

const ProjectDetail = () => {
  const { projectURL } = useParams();
  const project = projectDetails.find((p) => p.projectURL === projectURL); // Find the project by URL

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
      </div>

      {/* Image and Description Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={project.imageURL}
            alt={project.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div className="flex-grow">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
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

      {/* Project Goal Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Project Goal
        </h3>
        <div className="text-gray-700 dark:text-gray-300 mb-4">
          {project.goal.map((paragraph, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Process
        </h3>
        {project.process?.map((step, index) => (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
            {step}
          </p>
        ))}
      </div>

      {/* Web Stack Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Web Stack
        </h3>
        <ul className="tags flex flex-wrap gap-2">
          {project.webStack.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Images Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Additional Images
        </h3>
        <div className="flex flex-wrap gap-4">
          {project.additionalImages?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Additional ${project.title} ${index + 1}`}
              className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
