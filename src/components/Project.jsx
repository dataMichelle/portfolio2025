import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Project = ({
  title,
  description,
  tags,
  imageURL,
  projectURL,
  liveURL,
  githubURL,
}) => {
  return (
    <section className="group bg-neutral-50 dark:bg-neutral-900 w-full sm:w-[40rem] max-w-full sm:max-w-[42rem] border-neutral-900/5 overflow-hidden relative min-h-[22rem] sm:h-[22rem] mb-3 sm:mb-8 last:mb-0 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition flex flex-col rounded-lg">
      {/* Content */}
      <div className="flex flex-col justify-between h-full pt-4 pb-5 px-4 sm:px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] sm:group-even:pl-8 sm:group-even:ml-[18rem]">
        <h2 className="text-xl sm:text-2xl font-semibold leading-relaxed text-neutral-900 dark:text-neutral-300">
          {title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-900 dark:text-neutral-300 flex-grow line-clamp-3">
          {description}
        </p>
        <ul className="tags flex flex-wrap gap-2 mt-2">
          {tags && tags.map((tag, index) => (
            <li
              className="bg-neutral-900/[0.7] dark:bg-neutral-700/50 px-3 py-1 text-[0.6rem] sm:text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-4 mt-auto pt-4 pb-4">
          <a
            href={liveURL}
            className="text-accent-300 dark:text-accent-100 inline-block hover:text-accent-200 dark:hover:text-accent-200 transition-colors mr-2 sm:mr-4 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <Link
            to={`/project/${projectURL}`}
            className="text-accent-300 dark:text-accent-100 hover:text-accent-200 dark:hover:text-accent-200 transition-colors mr-2 text-sm sm:text-base"
          >
            Project Details
          </Link>
          <a
            href={githubURL}
            className="text-primary-500 dark:text-primary-300 inline-block hover:text-accent-200 dark:hover:text-accent-100 hover:scale-110 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
      {/* Image */}
      <img
        src={imageURL}
        alt={title}
        className="relative sm:absolute top-0 sm:top-8 w-full sm:w-[28.25rem] h-48 sm:h-[20rem] object-cover rounded-t-lg sm:rounded-t-lg shadow-2xl transition sm:-right-40 sm:group-hover:-translate-x-3 sm:group-hover:scale-[1.04] sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-even:right-[initial] sm:group-even:-left-40 sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:rotate-2"
        quality={95}
      />
    </section>
  );
};

export default Project;
