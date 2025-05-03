import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContactForm from "../hooks/useContactForm";
import { useDarkMode } from "../../context/DarkModeContext";

const Contact = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    successMessage,
    errorMessage,
  } = useContactForm();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [successMessage, errorMessage]);

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen bg-transparent text-neutral-900 dark:text-primary-100"
    >
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border-none bg-primary-500 dark:bg-primary-500">
        <h1 className="text-2xl font-bold sm:text-3xl font-nunito text-neutral-50 dark:text-primary-100 mb-4 text-center">
          Get in Touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-sm sm:text-base"
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 mx-auto p-2 bg-primary-100 text-neutral-900 dark:bg-primary-700 dark:text-primary-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Contact;
