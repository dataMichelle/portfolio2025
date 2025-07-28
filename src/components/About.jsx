import React from "react";
import { motion as Motion } from "framer-motion";
import profileImg from "../assets/images/profilePic6.png";
import SEO from "./SEO";

// Animation variants for portrait
const portraitVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } },
};

// Animation variants for text content
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
};

// Animation variants for highlights
const highlightVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.6 + Math.min(i, 6) * 0.1 },
  }),
};

const About = () => {
  return (
    <>
      <SEO
        title="About Michelle Salazar - Full-Stack Developer"
        description="Learn about Michelle Salazar, a full-stack developer with expertise in React, Next.js, and accessible web development. Former Dell analyst and university instructor with MFA and business background."
        keywords="about Michelle Salazar, full-stack developer background, React developer, web accessibility expert, Dell experience, MFA developer"
        url="https://portfolio2025.netlify.app/about"
      />
      <section 
        className="min-h-fit px-0 sm:px-8 md:px-14 pt-16 sm:pt-12 sm:mt-16 md:mt-28 md:pt-16 lg:pt-20 pb-16 bg-transparent flex justify-center"
        role="main"
        aria-label="About Michelle Salazar"
        id="main-content"
      >
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-start mx-auto">
        {/* Profile Image */}
        <Motion.div
          className="max-w-[80%] md:w-1/3 flex justify-center mx-auto text-center"
          variants={portraitVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative mx-auto">
            <div className="absolute -inset-4 sm:-inset-6 bg-primary-300 dark:bg-primary-200 opacity-20 rounded-t-full blur-xl"></div>
            <img
              src={profileImg}
              alt="Michelle Salazar, Full-Stack Developer - Professional headshot"
              className="relative rounded-t-full max-w-[80%] sm:max-w-[70%] md:max-w-[70%] h-auto border-1 border-b-0 bg-primary-100 border-primary-300 dark:border-primary-200 shadow-xl transform hover:scale-105 transition-transform duration-500 object-contain aspect-[32/36] mx-auto"
            />
          </div>
        </Motion.div>

        {/* Content Section */}
        <Motion.div
          className="w-full md:w-2/3 space-y-4 sm:space-y-6 text-center md:text-left mt-6 sm:mt-8 md:mt-0"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Title */}
          <h1 className="text-3xl sm:text-4xl font-raleway font-bold text-primary-700 dark:!text-primary-50 mb-4 sm:mb-6">
            About Me
          </h1>

          {/* Introduction */}
          <p className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-raleway leading-relaxed">
            I'm a{" "}
            <Motion.span
              className="text-primary-700 dark:text-primary-100 font-semibold"
              variants={highlightVariants}
              custom={0}
            >
              full-stack developer
            </Motion.span>{" "}
            focused on building{" "}
            <Motion.span
              className="text-accent-100 dark:text-accent-200 font-semibold italic"
              variants={highlightVariants}
              custom={1}
            >
              fast, accessible, and user-centered
            </Motion.span>{" "}
            websites. I specialize in{" "}
            <Motion.span
              className="text-accent-100 dark:text-accent-200 font-semibold"
              variants={highlightVariants}
              custom={2}
            >
              UI/UX design and back-end development
            </Motion.span>
            , delivering{" "}
            <Motion.span
              className="text-primary-700 dark:text-primary-100 font-semibold"
              variants={highlightVariants}
              custom={3}
            >
              high-performance solutions
            </Motion.span>{" "}
            optimized for{" "}
            <Motion.span
              className="text-accent-100 dark:text-accent-200 font-semibold italic"
              variants={highlightVariants}
              custom={4}
            >
              SEO, usability, and scalability
            </Motion.span>
            .
          </p>

          {/* Career Journey */}
          <p className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-raleway leading-relaxed">
            My path to tech wasn't typical: I've worked as a{" "}
            <Motion.span
              className="text-primary-700 dark:text-primary-100 font-semibold"
              variants={highlightVariants}
              custom={5}
            >
              rapid-delivery contract developer
            </Motion.span>
            , taught university courses, and built{" "}
            <Motion.span
              className="text-primary-700 dark:text-primary-100 font-semibold"
              variants={highlightVariants}
              custom={6}
            >
              internal tools at Dell
            </Motion.span>{" "}
            as a sales operations analyst. That mix of{" "}
            <Motion.span
              className="text-accent-100 dark:text-accent-200 font-semibold"
              variants={highlightVariants}
              custom={7}
            >
              creative problem-solving and business insight
            </Motion.span>{" "}
            shaped my approach—{" "}
            <Motion.span
              className="text-accent-100 dark:text-accent-200 font-semibold italic"
              variants={highlightVariants}
              custom={8}
            >
              efficient, curious, and always focused on impact
            </Motion.span>
            .
          </p>

          {/* Education & Future */}
          <p className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-raleway leading-relaxed">
            I hold an MFA and a BA in Liberal Studies with a focus on international business, and I bring that{" "}
            <Motion.span
              className="text-accent-100 dark:text-accent-200 font-semibold"
              variants={highlightVariants}
              custom={9}
            >
              interdisciplinary mindset
            </Motion.span>{" "}
            to everything I build. I'm passionate about{" "}
            <Motion.span
              className="text-primary-700 dark:text-primary-100 font-semibold"
              variants={highlightVariants}
              custom={10}
            >
              performance, automation, and AI integration
            </Motion.span>
            —and I'm constantly exploring new tools to{" "}
            <Motion.span
              className="text-accent-100 dark:text-accent-200 font-semibold italic"
              variants={highlightVariants}
              custom={11}
            >
              push development further, faster
            </Motion.span>
            .
          </p>

        </Motion.div>
      </div>
    </section>
    </>
  );
};

export default About;
