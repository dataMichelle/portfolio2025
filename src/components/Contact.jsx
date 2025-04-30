import React from "react";

const Contact = () => {
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
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you" // Redirect to the Thank You page after submission
          className="space-y-4 text-sm sm:text-base"
        >
          {/* Hidden input for Netlify form handling */}
          <input type="hidden" name="form-name" value="contact" />
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
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
