import React from "react";

const About = () => {
  return (
    <div id="about" className="p-8 bg-white dark:bg-neutrals-900 min-h-screen">
      {/* About Title */}
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-6">
        About Me
      </h1>

      {/* About Content */}
      <div className="space-y-6">
        {/* Introduction */}
        <p className="text-lg text-neutrals-700 dark:text-neutrals-300 leading-relaxed">
          My coding journey kicked off 20 years ago, tinkering with HTML and
          CSS, which led to me creating freelance websites for a few customers.
          I really enjoyed the immediacy of watching the changes in my code come
          to life but was contracting in technical writing at the time which
          took precedence.
        </p>

        {/* Aha Moment */}
        <p className="text-lg text-neutrals-700 dark:text-neutrals-300 leading-relaxed">
          After being contracted to help create an online manager course at Dell
          I was hired on in Sales Operations. I asked for some side work and
          learned how the Dell.com websites were created. This led to the
          opportunity for me to design the website for the first projector Dell
          launch. This work led to me creating an internal web-based product
          selector for our team. The goal was to help our sales team quickly
          find the right product for their sales customers to recommend. I
          designed the front-end and logic while a colleague handled the
          back-end code.
        </p>

        {/* Current Skills */}
        <p className="text-lg text-neutrals-700 dark:text-neutrals-300 leading-relaxed">
          I left the workforce for some time to raise my children and because we
          were transferred overseas for my husband's job. Upon return I went
          back to school but after graduation our department program was
          disbanded so I focused on day trading. I still missed coding and
          started relearning HTML and CSS. I then learned JavaScript and React.
          I am now learning Node.js and Express.
        </p>
      </div>
    </div>
  );
};

export default About;
