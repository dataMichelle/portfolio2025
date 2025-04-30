import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/profilePic6.png";
import bayousideImg from "../assets/images/projects-bayouside.png";
import SkillsAnimation from "./SkillsAnimation";

const Home = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-bg-color">
      {/* Blurb Section */}
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-primary-700 dark:text-primary-200">
          Hi, I'm Michelle 👋
        </h1>
        <p className="text-xl md:text-2xl text-neutrals-700 dark:text-neutrals-300">
          A front-end developer crafting{" "}
          <span className="text-yellow-500 font-semibold">user-friendly</span>,
          <span className="text-yellow-500 font-semibold">
            visually appealing
          </span>{" "}
          websites and apps using modern tools like React, Tailwind, and
          Next.js.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <Link
            to="/projects"
            className="inline-block px-8 py-3 bg-primary-600 text-primary-900 font-semibold rounded-lg shadow-xl hover:scale-105 hover:bg-primary-500 transition-transform duration-300 border-2 border-primary-600 dark:border-primary-500"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-xl hover:scale-105 hover:bg-primary-500 transition-transform duration-300 border-2 border-primary-900 bg-primary-900"
          >
            Let's Connect
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={profileImg}
          alt="Michelle Salazar"
          className="rounded-full w-48 h-48 border-4 border-primary-300 dark:border-primary-500 shadow-lg"
        />
      </div>

      {/* Skills section */}
      <div className="md:col-span-2 mt-16">
        <SkillsAnimation />
      </div>
    </section>
  );
};

export default Home;
