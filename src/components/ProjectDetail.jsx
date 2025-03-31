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
    <main className=" p-8 min-h-screen flex flex-col gap-8">
      {/* Title Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary-700 dark:text-primary-300 text-center mb-4">
          {project.title}
        </h2>
      </section>

      {/* Image and Description Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/2 relative">
          <img
            src={project.imageURL}
            alt={project.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          {/* Links Section */}
          <div className="flex flex-row justify-end gap-4 mt-4">
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

        {/* Description Section */}
        <div className="flex-grow">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {project.goal}
          </p>
        </div>
      </section>
      {/* Process Section */}
      <section className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
          Process
        </h3>
        <div className="text-gray-700 dark:text-gray-300">
          {project.process?.map((step, index) => (
            <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
              {step}
            </p>
          ))}
        </div>
      </section>
      {/* Additional Images Section */}
      <section className="max-w-6xl mx-auto">
        {project.additionalImages && (
          <div className="my-4">
            {/* Find the image with id 1 */}
            {(() => {
              const image = project.additionalImages.find(
                (img) => img.id === 1
              );
              return image ? (
                <>
                  <img
                    src={image.url}
                    alt={image.alt}
                    style={{
                      maxWidth: "100%", // Ensures the image does not exceed the container width
                      height: "auto", // Maintains the aspect ratio
                    }}
                    className="rounded-lg shadow-lg"
                  />
                  <p className=" text-gray-600 dark:text-gray-400 mt-2">
                    {image.caption}
                  </p>
                </>
              ) : (
                <p className="text-gray-500">Image not found.</p>
              );
            })()}
          </div>
        )}
      </section>
    </main>
  );
};

export default ProjectDetail;
