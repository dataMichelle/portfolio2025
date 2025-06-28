import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import SkillsAnimation from "./SkillsAnimation";
import { useDarkMode } from "../../context/DarkModeContext";

// Animation variants for header
const headerVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Animation variants for blurb highlights
const highlightVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

const Home = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <section className="min-h-screen px-6 md:px-14 pt-28 md:pt-32 pb-24 bg-transparent flex flex-col items-center">
        <div className="flex flex-col items-center gap-6">
          <Motion.div
            className="max-w-[640px] mx-auto space-y-6 text-center"
            initial="hidden"
            animate="visible"
            style={{ zIndex: 15 }}
          >
            <Motion.h1
              className="text-5xl md:text-6xl font-raleway font-bold leading-tight bg-gradient-to-r from-primary-700 to-primary-500 text-transparent bg-clip-text dark:!text-primary-50"
              variants={headerVariants}
            >
              Welcome
            </Motion.h1>
            <p className="text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 max-w-[640px] mx-auto font-raleway leading-relaxed">
              I'm a full-stack developer who creates{" "}
              <Motion.span
                className="text-accent-100 dark:text-accent-200 font-semibold group-hover:underline"
                variants={highlightVariants}
                custom={0}
              >
                user-friendly
              </Motion.span>
              ,{" "}
              <Motion.span
                className="text-accent-100 dark:text-accent-200 font-semibold group-hover:underline"
                variants={highlightVariants}
                custom={1}
              >
                visually appealing
              </Motion.span>{" "}
              websites with{" "}
              <Motion.span
                className="text-primary-500 dark:text-primary-300 font-semibold group-hover:underline"
                variants={highlightVariants}
                custom={2}
              >
                React
              </Motion.span>{" "}
              and{" "}
              <Motion.span
                className="text-primary-500 dark:text-primary-300 font-semibold group-hover:underline"
                variants={highlightVariants}
                custom={3}
              >
                Tailwind
              </Motion.span>
              —backed by solid{" "}
              <Motion.span
                className="text-primary-500 dark:text-primary-300 font-semibold group-hover:underline"
                variants={highlightVariants}
                custom={4}
              >
                API and database integration
              </Motion.span>{" "}
              for real-world performance.
            </p>
            <div className="flex justify-center gap-6">
              <Motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  aria-label="View Michelle's projects"
                  className="inline-block px-6 py-2 text-sm  text-primary-900 border-1 border-primary-600  dark:border-neutral-100 dark:text-neutral-100 font-nunito font-semibold rounded-full hover:bg-primary-600 hover:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:text-primary-900 transition-all duration-300"
                >
                  View My Work
                </Link>
              </Motion.div>
              <Motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  aria-label="Contact Michelle"
                  className="inline-block px-6 py-[.55rem]  text-sm bg-primary-500 text-neutral-50 dark:bg-primary-500 dark:text-neutral-50 dark:shadow-[0_2px_4px_rgba(200,200,200,0.3)] font-nunito font-semibold rounded-full hover:bg-primary-300 dark:hover:bg-primary-300 transition-all duration-300"
                >
                  Let's Connect
                </Link>
              </Motion.div>
            </div>
          </Motion.div>
          <div className="max-w-[500px] mx-auto mt-10" style={{ zIndex: 5 }}>
            <SkillsAnimation />
          </div>
          <div className="mt-16 text-center" style={{ zIndex: 15 }}>
            <h2 className="text-3xl font-bold text-primary-700 dark:!text-primary-50">
              Ready to see what I can do?
            </h2>
            <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                aria-label="Explore Michelle's projects"
                className="mt-6 inline-block px-10 py-4 bg-accent-100 text-neutral-50 dark:bg-primary-500 dark:text-neutral-50 font-nunito font-semibold rounded-full shadow-lg dark:shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:shadow-xl dark:hover:shadow-[0_8px_12px_rgba(0,0,0,0.8)] transition-all duration-300"
              >
                Explore My Projects
              </Link>
            </Motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
