import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projectDetails } from "../data/project-details";
import { FaGithub } from "react-icons/fa";
import SEO from "./SEO";

const ProjectDetail = () => {
  const { projectURL } = useParams();
  const project = projectDetails.find((p) => p.projectURL === projectURL);

  if (!project) {
    return <p className="text-center text-error">Project not found!</p>;
  }

  return (
    <>
      <SEO
        title={`${project.title} - Project Details | Michelle Salazar`}
        description={project.description || `Explore ${project.title}, a full-stack development project by Michelle Salazar showcasing modern web technologies and best practices.`}
        keywords={`${project.title}, ${project.tags?.join(', ')}, Michelle Salazar project, full-stack development, web application`}
        url={`https://portfolio2025.netlify.app/project/${project.projectURL}`}
        image={project.imageURL || "https://portfolio2025.netlify.app/logo.svg"}
        type="article"
      />
      <section className="p-4 sm:p-8 min-h-screen flex flex-col pt-20 sm:pt-28 gap-2 sm:gap-4 bg-transparent">
      {/* Return Link */}
      <div className="max-w-6xl mx-auto mb-4 sm:mb-6">
        <Link
          to="/projects"
          className="text-accent-300 dark:text-accent-200 hover:text-accent-200 dark:hover:text-accent-200 transition-colors text-sm sm:text-base font-nunito font-medium flex items-center gap-2"
        >
          <span>←</span> Back to Projects
        </Link>
      </div>
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-300 text-center mb-4 sm:mb-6">
          {project.title}
        </h2>
      </section>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8 items-center">
        <div className="flex-shrink-0 w-full md:w-1/2 relative">
          <img
            src={project.imageURL}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto max-w-full object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-row justify-end gap-2 sm:gap-4 mt-4">
            <a
              href={project.liveURL}
              className="text-accent-300 dark:text-accent-100 hover:text-accent-200 dark:hover:text-accent-200 transition-colors text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <a
              href={project.githubURL}
              className="text-primary-500 dark:text-primary-100 hover:text-accent-200 dark:hover:text-accent-100 hover:scale-110 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
        <div className="flex-grow">
          <p className="text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-300">
            {project.goal?.map((goal, index) => (
              <p
                key={index}
                className="text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-100 mb-4"
              >
                {goal}
              </p>
            ))}
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Process
        </h3>
        <div className="text-neutral-900 dark:text-neutral-300">
          {project.process?.map((step, index) => (
            <p
              key={index}
              className="text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-100 mb-4"
            >
              {step}
            </p>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-primary-700 dark:text-primary-100 mb-4">
          Additional Images
        </h3>
        {project.additionalImages && (
          <div className="my-4 sm:my-8 grid grid-cols-1 gap-6 sm:gap-8 md:gap-16">
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
                  loading="lazy"
                  className="w-full max-w-full h-auto rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4 md:ml-4 object-contain"
                  style={{ maxWidth: image.width || '600px', maxHeight: image.height || '450px' }}
                />
                <div className="flex-grow">
                  <h4 className="text-md sm:text-lg font-bold text-primary-700 dark:text-primary-100 mb-2">
                    {image.caption}
                  </h4>
                  <div className="text-neutral-900 dark:text-neutral-100">
                    {image.process?.map((step, stepIndex) => (
                      <p
                        key={stepIndex}
                        className="text-sm sm:text-base md:text-lg text-neutral-900 dark:text-neutral-100 mb-4"
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
    </>
  );
};

export default ProjectDetail;
