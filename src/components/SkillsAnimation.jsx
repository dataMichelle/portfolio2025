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
          className="inline-block px-4 py-2 bg-primary-500 text-white text-sm font-nunito font-medium rounded-full shadow-md animate-skillFade"
          style={{ animationDelay: `${index * 0.2}s` }} // Staggered animation
        >
          {skill}
        </span>
      ))}
      <style jsx>{`
        @keyframes skillFade {
          0%,
          100% {
            opacity: 0.5;
            transform: translateY(10px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-skillFade {
          animation: skillFade 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsAnimation;
