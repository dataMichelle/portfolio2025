import React from "react";
import { motion as Motion } from "framer-motion";
import profileImg from "../assets/images/profilePic6.png";

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

const About = () => {
  return (
    <section className="min-h-fit px-4 sm:px-8 md:px-14 pt-16 sm:pt-12 md:pt-16 lg:pt-20 pb-16 bg-transparent flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-start">
        {/* Profile Image */}
        <Motion.div
          className="w-full md:w-1/3 flex justify-center"
          variants={portraitVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div className="absolute -inset-4 sm:-inset-6 bg-primary-300 dark:bg-primary-200 opacity-20 rounded-t-full blur-xl"></div>
            <img
              src={profileImg}
              alt="Michelle Salazar"
              className="relative rounded-t-full w-full max-w-[80%] sm:max-w-[70%] md:max-w-[50%] h-auto border-1 border-b-0 bg-primary-100 border-primary-300 dark:border-primary-200 shadow-xl transform hover:scale-105 transition-transform duration-500 object-contain aspect-[32/36]"
            />
          </div>
        </Motion.div>

        {/* Content Section */}
        <Motion.div
          className="w-full md:w-2/3 space-y-4 sm:space-y-6 text-center md:text-left"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {/* About Title */}
          <h1 className="text-3xl sm:text-4xl font-raleway font-bold text-primary-700 dark:!text-primary-50 mb-4 sm:mb-6">
            About Me
          </h1>
          {/* Introduction */}
          <p className="text-base sm:text-lg text-neutrals-900 dark:text-neutral-100 font-raleway leading-relaxed">
            I'm Michelle Salazar, a web developer skilled in HTML, CSS,
            JavaScript, React, Node.js, and WordPress, with a passion for
            building responsive, user-friendly websites. I specialize in
            creating sites optimized for performance and SEO, leveraging tools
            like Google Analytics and HubSpot, and I thrive on solving complex
            problems, fueled by curiosity and continuous learning.
          </p>
          {/* Aha Moment */}
          <p className="text-base sm:text-lg text-neutrals-900 dark:text-neutral-100 font-raleway leading-relaxed">
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
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
