import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-primary-50 dark:bg-neutrals-900 min-h-screen">
      {/* Blurb Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300">
          Hi, I'm Michelle.
        </h1>
        <p className="text-lg text-neutrals-700 dark:text-neutrals-300 leading-relaxed">
          I'm a passionate web developer with a love for creating modern,
          user-friendly websites and applications. With experience in
          JavaScript, React, and Node.js, I enjoy solving problems and bringing
          ideas to life through code.
        </p>
        <a href="/projects">
          <a className="inline-block px-6 py-3 bg-primary-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors">
            View My Work
          </a>
        </a>
      </div>

      {/* Portrait Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="w-64 h-64 bg-primary-100 dark:bg-neutrals-800 rounded-full shadow-lg flex items-center justify-center">
          <span className="text-primary-500 dark:text-primary-300 text-2xl font-semibold">
            Your Portrait
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
