import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setShowSuccessMessage(true); // Show the success message
        e.target.reset(); // Reset the form
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          onSubmit={handleSubmit} // Handle form submission
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
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>

      {/* Success Message Overlay */}
      {showSuccessMessage && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowSuccessMessage(false)} // Close on click
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your message has been sent successfully.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowSuccessMessage(false)} // Close on button click
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
