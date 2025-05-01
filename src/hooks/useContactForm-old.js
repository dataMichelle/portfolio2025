import { useState } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name}, Value: ${value}`);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission started...");
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    console.log("Form data:", Object.fromEntries(formData));

    try {
      const response = await fetch(
        "http://localhost:8888/netlify/functions/sendEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Test User",
            email: "test@example.com",
            message: "Hello!",
          }),
        }
      );

      console.log("Response status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        setSuccessMessage(data.message);
      } else {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Error response data:", errorData);
          setErrorMessage(errorData.message || "Something went wrong.");
        } else {
          const errorText = await response.text(); // Log raw response text
          console.error("Error response text:", errorText);
          setErrorMessage("Something went wrong.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      console.log("Form submission ended.");
    }
  };
  return {
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    successMessage,
    errorMessage,
  };
};

export default useContactForm;
