import { useState } from "react";
import emailjs from "emailjs-com";

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { name, email, message } = formData;

      // Replace these with your EmailJS credentials
      const serviceId = "service_hp5m8wp";
      const templateId = "your_template_id";
      const userId = "your_user_id";

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);

      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send your message. Please try again later.");
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
