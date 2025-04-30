import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import profileImg from "../assets/images/profilePic6.png";
import HeroProject from "./HeroProject"; // Import the HeroProject component
import bayousideImg from "../assets/images/projects-bayouside.png";
import SkillsAnimation from "./SkillsAnimation";

const Home = () => {
  return (
    <section className="mx-40 flex flex-col md:flex-row items-center justify-between p-8   min-h-screen">
      {/* Blurb Section */}
      <div className="md:w-2/5 text-center md:text-left space-y-6 md:ml-20">
        {" "}
        {/* Reduced width to md:w-2/5 */}
        <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300">
          Hi, I'm Michelle.
        </h1>
        <p className="text-2xl text-neutrals-700 dark:text-neutrals-300 leading-relaxed">
          I'm a passionate web developer specializing in front-end development.
          I enjoy solving problems and building modern, user-friendly websites
          and applications.
        </p>
        <Link
          to="/projects"
          className="inline-block px-6 py-3 bg-primary-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-primary-500 bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
        >
          View My Work
        </Link>
      </div>
      {/* Hero Project */}
      {/* <HeroProject
        imageURL={bayousideImg}
        title="Bayouside Tennis"
        altText="Bayouside Tennis booking and payments screenshot"
      /> */}

      {/* Skills section */}
      <SkillsAnimation />

      {/* Portrait Section */}
      {/* <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center relative">
        <div className="flex items-center justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-t-full -mt-12 md:-mt-16 border-1 border-b-0 bg-primary-100  border-blue-300 shadow-xl"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Home;
