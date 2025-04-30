import React from "react";
import useContactForm from "../hooks/useContactForm";

const Contact = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    successMessage,
    errorMessage,
  } = useContactForm();

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900"
    >
      <div
        className="p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl border border-gray-300 dark:border-gray-700"
        style={{ backgroundColor: "white" }}
      >
        <h1 className="text-2xl sm:text-3xl font-nunito text-black dark:text-white mb-4 text-center">
          Get in Touch
        </h1>
        <form
          id="contactForm"
          className="space-y-4 text-sm sm:text-base"
          onSubmit={handleSubmit} // Use React's `onSubmit` handler
        >
          <div>
            <label
              className="block text-black dark:text-white mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange} // Use React's `onChange` handler
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              className="block text-black dark:text-white mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange} // Use React's `onChange` handler
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              className="block text-black dark:text-white mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange} // Use React's `onChange` handler
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 mt-4 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
