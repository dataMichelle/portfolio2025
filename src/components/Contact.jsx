import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContactForm from "../hooks/useContactForm";
import SEO from "./SEO";

const Contact = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    successMessage,
    errorMessage,
  } = useContactForm();

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [successMessage, errorMessage]);

  return (
    <>
      <SEO
        title="Contact Michelle Salazar - Full-Stack Developer"
        description="Get in touch with Michelle Salazar for web development projects, collaborations, or consulting. Specializing in React, Next.js, and accessible web solutions."
        keywords="contact Michelle Salazar, hire full-stack developer, React developer contact, web development services, freelance developer, project collaboration"
        url="https://portfolio2025.netlify.app/contact"
      />
      <div
        id="contact"
        className="flex justify-center min-h-fit bg-transparent text-neutral-900 dark:text-primary-100 pt-12 sm:pt-16 md:pt-28"
      >
      <div className="px-4 sm:px-8 pb-0 pt-4 sm:pt-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-4 sm:mx-6 md:mx-auto mt-4 sm:mt-6 md:mt-0 mb-0 border-none bg-primary-500 dark:bg-primary-500">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-nunito text-neutral-50 dark:text-primary-100 mb-2 sm:mb-3 text-center">
          Get in Touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base"
        >
          <div>
            <label
              className="block text-neutral-50 dark:text-primary-100 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-100 rounded bg-primary-100 text-neutral-900 dark:bg-primary-700 dark:text-neutral-50 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-2 focus:ring-primary-100 dark:focus:ring-neutral-700 transition duration-300"
              required
            />
          </div>
          <div>
            <label
              className="block text-neutral-50 dark:text-primary-100 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-100 rounded bg-primary-100 text-neutral-900 dark:bg-primary-700 dark:text-neutral-50 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-2 focus:ring-primary-100 dark:focus:ring-neutral-700 transition duration-300"
              required
            />
          </div>
          <div>
            <label
              className="block text-neutral-50 dark:text-primary-100 mb-2"
              htmlFor="title"
            >
              Subject
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-100 rounded bg-primary-100 text-neutral-900 dark:bg-primary-700 dark:text-neutral-50 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-2 focus:ring-primary-100 dark:focus:ring-neutral-700 transition duration-300"
              required
            />
          </div>
          <div>
            <label
              className="block text-neutral-50 dark:text-primary-100 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-neutral-100 rounded bg-primary-100 text-neutral-900 dark:bg-primary-700 dark:text-neutral-50 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:ring-2 focus:ring-primary-100 dark:focus:ring-neutral-700 transition duration-300"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-center mb-0 pt-0">
            <button
              type="submit"
              className="w-32 mb-10 mx-auto p-2 bg-primary-100 text-neutral-900 dark:bg-primary-700 dark:text-primary-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
    </>
  );
};

export default Contact;
