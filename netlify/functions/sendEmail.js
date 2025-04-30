// netlify/functions/sendEmail.js
const nodemailer = require("nodemailer"); // Keep using require

exports.handler = async function (event) {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email service
    auth: {
      user: "data_Michelle@proton.me",
      pass: "9NSWSZ37E4aJDOft0gEzpw",
    },
  });

  const mailOptions = {
    from: email, // Sender's email address
    to: "your-email@gmail.com", // Recipient's email address
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
