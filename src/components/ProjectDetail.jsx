import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projectDetails } from "../data/project-details";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext";
import { FaGithub } from "react-icons/fa";

// Animation variants for name
const nameVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProjectDetail = () => {
  const { projectURL } = useParams();
  const project = projectDetails.find((p) => p.projectURL === projectURL);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  if (!project) {
    return <p className="text-center text-error">Project not found!</p>;
  }

  return (
    <section className="p-8 min-h-screen flex flex-col pt-28 gap-8 bg-transparent">
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
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
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-700 dark:text-primary-300 text-center mb-4">
          {project.title}
        </h2>
      </section>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 w-full md:w-1/2 relative">
          <img
            src={project.imageURL}
            alt={project.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-row justify-end gap-4 mt-4">
            <a
              href={project.liveURL}
              className="text-accent-300 dark:text-accent-100 hover:text-accent-200 dark:hover:text-accent-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href={project.githubURL}
              className="text-primary-500 dark:text-primary-300 hover:text-accent-200 dark:hover:text-accent-100 hover:scale-110 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-lg text-neutral-900 dark:text-neutral-300">
            {project.goal?.map((goal, index) => (
              <p
                key={index}
                className="text-neutral-900 dark:text-neutral-300 mb-4"
              >
                {goal}
              </p>
            ))}
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Process
        </h3>
        <div className="text-neutral-900 dark:text-neutral-300">
          {project.process?.map((step, index) => (
            <p
              key={index}
              className="text-neutral-900 dark:text-neutral-300 mb-4"
            >
              {step}
            </p>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Additional Images
        </h3>
        {project.additionalImages && (
          <div className="my-8 grid grid-cols-1 gap-16">
            {project.additionalImages.map((image, index) => (
              <div
                key={image.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  style={{
                    width: image.width || "100%",
                    height: image.height || "auto",
                  }}
                  className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4 md:ml-4"
                />
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-primary-700 dark:text-primary-300 mb-2">
                    {image.caption}
                  </h4>
                  <div className="text-neutral-900 dark:text-neutral-300">
                    {image.process?.map((step, stepIndex) => (
                      <p
                        key={stepIndex}
                        className="text-lg text-neutral-900 dark:text-neutral-300 mb-4"
                      >
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
};

export default ProjectDetail;
