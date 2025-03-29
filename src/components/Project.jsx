import React from "react";
import ProjectDetail from "./ProjectDetail";

const Project = ({
  title,
  description,
  tags,
  imageURL,
  liveURL,
  githubURL,
  children,
}) => {
  return (
    <section className="group bg-gray-100 max-w-[42rem] border-black/5 overflow-hidden sm:pr-8 relative h-[22rem] w-[40rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition flex flex-col">
      <div className="flex flex-col justify-between h-full pt-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] even-pl-8 group-even:ml-[18rem]">
        <h2 className="text-2xl font-semibold leading-relaxed">{title}</h2>
        <p className="mt-2 text-gray-700 flex-grow line-clamp-3">
          {description}
        </p>
        <ul className="tags flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-auto pt-4 pb-6">
          <a
            href={liveURL}
            className="text-yellow-500 dark:text-yellow-300 inline-block hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
          </a>
          <a
            href={githubURL}
            className="text-primary-500 dark:text-primary-300 inline-block hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="#"
            className="text-orange-500 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            Project Details
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
    group-even:hover:translate-x-3 
    group-even:hover:translate-y-3 
    group-even:hover:rotate-2"
        quality={95}
      />

      {children}
    </section>
  );
};

export default Project;
