import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import profileImg from "../assets/images/profilePic6.png";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext";

// Animation variants for name
const nameVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for portrait
const portraitVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const About = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <section>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      {/* Name Div */}
      <div className="fixed top-4 left-16 md:left-20 z-40">
        <Motion.div variants={nameVariants} initial="hidden" animate="visible">
          <Link
            to="/"
            className="text-primary-700 dark:!text-primary-50 font-poiret font-bold text-2xl md:text-5xl hover:text-primary-500 dark:hover:!text-primary-100 transition-colors duration-200"
          >
            Michelle Salazar
          </Link>
        </Motion.div>
      </div>
      {/* Portrait Div */}
      <div className="fixed top-40 md:top-60 left-16 md:left-20 z-10">
        <Motion.div
          variants={portraitVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-primary-300 dark:bg-primary-200 opacity-20 rounded-t-full blur-xl"></div>
            <img
              src={profileImg}
              alt="Michelle Salazar"
              className="relative rounded-t-full w-48 h-56 md:w-72 md:h-80 border-1 border-b-0 bg-primary-100 border-primary-300 dark:border-primary-200 shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Motion.div>
      </div>
      {/* Content Section */}
      <section className="min-h-screen px-8 md:px-14 pt-28 md:pt-32 pb-24 bg-transparent">
        <div className="max-w-[640px] mx-auto space-y-6">
          {/* About Title */}
          <h1 className="text-4xl font-raleway font-bold text-primary-700 dark:!text-primary-50 mb-6 text-center">
            About Me
          </h1>
          {/* Introduction */}
          <p className="text-lg text-neutrals-900 dark:text-neutral-100 font-raleway leading-relaxed text-black">
            I'm Michelle Salazar, a web developer skilled in HTML, CSS,
            JavaScript, React, Node.js, and WordPress, with a passion for
            building responsive, user-friendly websites. I specialize in
            creating sites optimized for performance and SEO, leveraging tools
            like Google Analytics and HubSpot, and I thrive on solving complex
            problems, fueled by curiosity and continuous learning.
          </p>
          {/* Aha Moment */}
          <p className="text-lg text-neutrals-900 dark:text-neutral-100 font-raleway leading-relaxed text-black">
            My career journey has been anything but traditional: I've worked as
            a contract web developer, day trader, university instructor, and
            even a sales operations analyst at Dell, where I built internal
            tools and launched a projector product website. I hold an MFA from
            the University of North Texas and a BA in International Business, a
            background that blends creativity with business savvy. I'm also
            passionate about data visualization, automated workflows, and
            creative coding, and I'm always looking to learn new technologies
            and bring fresh ideas to my projects.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
