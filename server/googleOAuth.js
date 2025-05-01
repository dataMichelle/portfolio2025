import { google } from "googleapis";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({
  path: "../.env.local",
});

// Load OAuth2 credentials from the config folder
const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../config/credentials.json")) // Correct path to config folder
);

// Setup OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  credentials.installed.client_id,
  credentials.installed.client_secret,
  "http://localhost:8888/netlify/functions/oauth2callback" // Adjust this to your redirect URI
);

// Set credentials with refresh token
oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN, // Use an environment variable for the refresh token
});

async function sendEmail() {
  try {
    // Get access token (async)
    const accessToken = await oAuth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to obtain access token");
    }

    // Create the Nodemailer transporter with OAuth2 authentication
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "datamichelleportfolio@gmail.com", // Replace with your email
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "datamichelleportfolio@gmail.com",
      to: "datamichelleportfolio@gmail.com", // Replace with actual recipient email
      subject: "Test Email",
      text: "This is a test email.",
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendEmail();
