// functions/sendEmail.js
const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  // Get the form data from the request
  const { name, email, message } = JSON.parse(event.body);

  // Create a transporter using your email provider (e.g., Gmail, SMTP server)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "data_Michelle@proton.me",
      pass: "9NSWSZ37E4aJDOft0gEzpw",
    },
  });

  // Define the email options
  const mailOptions = {
    from: email, // Sender's email
    to: "your-email@gmail.com", // Recipient's email
    subject: `New message from ${name}`,
    text: message,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
