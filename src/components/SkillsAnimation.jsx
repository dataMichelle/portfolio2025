import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Github",
  "MongoDB",
  "Zustand",
];

const SkillsAnimation = () => {
  return (
    <div className="flex flex-wrap ml-40 justify-center gap-4 max-w-[20rem] mx-auto my-8">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`inline-block px-4 py-2 bg-primary-500 text-white text-sm font-nunito font-medium rounded-full shadow-md animate-bounce`}
          style={{ animationDelay: `${index * 0.2}s` }} // Staggered animation
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsAnimation;
