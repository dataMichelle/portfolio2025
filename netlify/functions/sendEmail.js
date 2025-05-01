import nodemailer from "nodemailer";
import { google } from "googleapis";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env.local",
});

// Load credentials
const credentialsPath = path.resolve("config", "credentials.json");
const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf-8"));

// OAuth2 client setup
const oAuth2Client = new google.auth.OAuth2(
  credentials.installed.client_id,
  credentials.installed.client_secret,
  "http://localhost:8888/netlify/functions/oauth2callback" // Use your correct redirect URI
);

// Set credentials with the refresh token from the .env
oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Send the email
async function sendEmail({ name, email, message }) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to obtain access token");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "datamichelleportfolio@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "datamichelleportfolio@gmail.com",
      to: "data_Michelle@proton.me", // Recipient's email
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent successfully!",
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error sending email",
        error: error.message,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    };
  }
}
console.log("Returning response:", {
  statusCode: 200,
  body: JSON.stringify({
    message: "Email sent successfully!",
  }),
});

// Netlify function handler
export async function handler(event) {
  console.log("Received event:", event);

  if (event.httpMethod === "OPTIONS") {
    console.log("OPTIONS request received");

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod === "POST") {
    console.log("POST request received with body:", event.body);

    try {
      const body = JSON.parse(event.body); // Parse the request body
      return await sendEmail(body); // Pass the parsed body to sendEmail
    } catch (error) {
      console.error("Error parsing request body:", error);
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: "Invalid request body",
          error: error.message,
        }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      };
    }
  }
  console.log("Unsupported HTTP method:", event.httpMethod);

  return {
    statusCode: 405,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "Method Not Allowed" }),
  };
}
