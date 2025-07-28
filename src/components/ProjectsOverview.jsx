import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projectsData } from "../data/projects-data.js";
import Project from "./Project";
import SEO from "./SEO";

const ProjectsOverview = () => {
  return (
    <>
      <SEO
        title="Projects - Michelle Salazar Portfolio"
        description="Explore Michelle Salazar's full-stack development projects including React applications, Next.js websites, accessibility-focused designs, and modern web solutions."
        keywords="Michelle Salazar projects, React projects, Next.js portfolio, full-stack projects, web development portfolio, accessible websites, modern web applications"
        url="https://portfolio2025.netlify.app/projects"
      />
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
    </>
  );
};

export default ProjectsOverview;
