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
    <section className="group bg-neutral-50 dark:bg-neutral-900 max-w-[42rem] border-neutral-900/5 overflow-hidden sm:pr-8 relative h-[22rem] w-[40rem] mb-3 sm:mb-8 last:mb-0 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition flex flex-col rounded-lg">
      <div className="flex flex-col justify-between h-full pt-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] group-even:sm:pl-8 group-even:ml-[18rem]">
        <h2 className="text-2xl font-semibold leading-relaxed text-neutral-900 dark:text-neutral-300">
          {title}
        </h2>
        <p className="mt-2 text-neutral-900 dark:text-neutral-300 flex-grow line-clamp-3">
          {description}
        </p>
        <ul className="tags flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-neutral-900/[0.7] dark:bg-neutral-700/50 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 mt-auto pt-4 pb-6">
          <a
            href={liveURL}
            className="text-accent-300 dark:text-accent-100 inline-block hover:text-accent-200 dark:hover:text-accent-200 transition-colors mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <Link
            to={`/project/${projectURL}`}
            className="text-accent-300 dark:text-accent-100 hover:text-accent-200 dark:hover:text-accent-200 transition-colors mr-2"
          >
            Project Details
          </Link>
          <a
            href={githubURL}
            className="text-primary-500 dark:text-primary-300 inline-block hover:text-accent-200 dark:hover:text-accent-100 hover:scale-110 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>
      <img
        src={imageURL}
        alt={title}
        className="absolute top-8 -right-40 w-[28.25rem] h-[20rem] object-cover rounded-t-lg shadow-2xl transition  
          group-hover:-translate-x-3    
          group-hover:scale-[1.04] 
          group-hover:translate-y-3 
          group-hover:-rotate-2 
          group-even:right-[initial]
          group-even:-left-40
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2"
        quality={95}
      />
    </section>
  );
};

export default Project;
