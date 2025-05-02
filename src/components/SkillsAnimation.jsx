import React, { useState, useRef, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCode,
  FaGithub,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiFirebase,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { useDarkMode } from "../../context/DarkModeContext";

const skills = [
  {
    id: "html",
    name: "HTML",
    icon: (
      <FaHtml5 className="w-12 h-12 text-orange-500 dark:text-orange-300" />
    ),
    story:
      "I started with HTML 20 years ago, crafting my first freelance websites with simple tags and a lot of curiosity!",
  },
  {
    id: "css3",
    name: "CSS3",
    icon: <FaCss3Alt className="w-12 h-12 text-blue-500 dark:text-blue-300" />,
    story:
      "CSS3 brought my designs to life, from basic layouts to complex animations, making every project visually stunning.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: <FaJs className="w-12 h-12 text-yellow-500 dark:text-yellow-300" />,
    story:
      "JavaScript unlocked dynamic interactivity, letting me build engaging features for my portfolio!",
  },
  {
    id: "react",
    name: "React",
    icon: <FaReact className="w-12 h-12 text-cyan-500 dark:text-cyan-300" />,
    story:
      "React transformed my workflow, enabling me to create reusable components for fast, scalable web apps.",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: (
      <SiTailwindcss className="w-12 h-12 text-teal-500 dark:text-teal-300" />
    ),
    story:
      "Tailwind streamlined my styling, letting me focus on crafting beautiful, responsive designs with ease.",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    icon: <SiFramer className="w-12 h-12 text-black dark:text-neutral-100" />,
    story:
      "Framer Motion brought my interfaces to life with smooth, declarative animations, enhancing user experiences.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: <FaNodeJs className="w-12 h-12 text-green-500 dark:text-green-300" />,
    story:
      "Node.js opened the backend world, allowing me to build full-stack apps with JavaScript’s power.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: (
      <SiMongodb className="w-12 h-12 text-green-600 dark:text-green-300" />
    ),
    story:
      "MongoDB enabled flexible data storage, powering my real-time apps with efficient NoSQL databases.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: (
      <SiNextdotjs className="w-12 h-12 text-black dark:text-neutral-100" />
    ),
    story:
      "Next.js supercharged my React projects with server-side rendering and static site generation, making them faster and SEO-friendly.",
  },
  {
    id: "zustand",
    name: "Zustand",
    icon: <FaCode className="w-12 h-12 text-black dark:text-neutral-100" />,
    story:
      "Zustand simplified state management in my React apps, providing a minimalistic and efficient solution for global state.",
  },
  {
    id: "github",
    name: "GitHub",
    icon: (
      <FaGithub className="w-12 h-12 text-gray-800 dark:text-neutral-100" />
    ),
    story:
      "GitHub has been my go-to platform for version control and collaboration, enabling seamless teamwork and project management.",
  },
  {
    id: "sass",
    name: "SASS/SCSS",
    icon: <FaSass className="w-12 h-12 text-pink-500 dark:text-pink-300" />,
    story:
      "SASS/SCSS has helped me write cleaner, more maintainable CSS with features like variables, nesting, and mixins.",
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: (
      <FaWordpress className="w-12 h-12 text-blue-600 dark:text-blue-300" />
    ),
    story:
      "WordPress has enabled me to create dynamic, customizable websites with ease, leveraging its vast ecosystem of plugins and themes.",
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: (
      <SiFirebase className="w-12 h-12 text-yellow-500 dark:text-yellow-300" />
    ),
    story:
      "Firebase has been my go-to for building real-time apps with authentication, cloud storage, and hosting, all in one platform.",
  },
  {
    id: "python",
    name: "Python",
    icon: <SiPython className="w-12 h-12 text-blue-500 dark:text-blue-300" />,
    story:
      "Python has been my go-to language for data analysis and machine learning, thanks to its simplicity and powerful libraries.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: (
      <SiPostgresql className="w-12 h-12 text-blue-500 dark:text-blue-300" />
    ),
    story:
      "PostgreSQL has been my choice for relational databases, offering powerful features like advanced querying and data integrity.",
  },
];

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SkillsAnimation = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { isDarkMode } = useDarkMode();
  const cardRefs = useRef(skills.map(() => React.createRef()));
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleCardClick = (index, event) => {
    event.stopPropagation();
    setSelectedCard(selectedCard === index ? null : index);
  };

  const handleCardHover = (index) => {
    setSelectedCard(index);
  };

  const handleCardLeave = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    if (selectedCard !== null && cardRefs.current[selectedCard]?.current) {
      const cardRect =
        cardRefs.current[selectedCard].current.getBoundingClientRect();
      const containerRect = cardRefs.current[selectedCard].current
        .closest(".relative")
        .getBoundingClientRect();
      setTooltipPosition({
        top: cardRect.top - containerRect.top,
        left: cardRect.right - containerRect.left + 8, // Equivalent to ml-2
      });
    }
  }, [selectedCard]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-full ${
        isDarkMode ? "skills-animation-dark" : ""
      }`}
    >
      <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-100 mb-8">
        Technical Skills
      </h2>
      <Motion.div
        className="grid grid-cols-4 gap-8 z-0"
        style={{ width: "fit-content", height: "fit-content" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((card, index) => (
          <Motion.div
            key={card.id}
            ref={cardRefs.current[index]}
            className="relative w-25 h-25 group cursor-pointer z-0"
            variants={cardVariants}
            onClick={(event) => handleCardClick(index, event)}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            whileHover={{
              scale: 1.2,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 },
            }}
          >
            <div
              className={`w-full h-full ${
                isDarkMode
                  ? "bg-primary-500 border-0 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                  : "bg-primary-100 border-1 border-primary-200 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
              } rounded-md flex flex-col items-center justify-center gap-2`}
            >
              {card.icon}
              <span className="text-sm font-nunito text-primary-900 dark:text-neutral-100">
                {card.name}
              </span>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
      {selectedCard !== null && (
        <Motion.div
          className="absolute w-64 p-4 bg-primary-50 border-1 border-primary-500 dark:bg-primary-700 dark:border-primary-500 rounded-md shadow-md text-base text-neutral-700 dark:text-neutral-100 z-40"
          style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          initial={{ opacity: 0, scale: 0.8, x: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: 10 }}
          transition={{ duration: 0.3 }}
        >
          {skills[selectedCard].story}
        </Motion.div>
      )}
    </div>
  );
};

export default SkillsAnimation;
