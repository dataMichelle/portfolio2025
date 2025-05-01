import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    title: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log(
      "EmailJS initialized with Public Key:",
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Debug input changes
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Add timestamp for {{time}}
    const timestamp = new Date().toLocaleString();
    const dataToSend = { ...formData, time: timestamp };

    // Log formData to verify fields
    console.log("Form Data being sent:", dataToSend);
    console.log("Email field specifically:", dataToSend.email);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // service_ywt0leg
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // template_wkb2s2s
        dataToSend
      );
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "", title: "", time: "" });
    } catch (error) {
      setErrorMessage("Failed to send your message. Please try again.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
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
