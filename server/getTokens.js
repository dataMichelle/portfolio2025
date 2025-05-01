import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
  path: "../.env.local",
});

console.log("Current __dirname:", __dirname);
console.log("Current working directory:", process.cwd());

const credentialsPath = path.join(__dirname, "../config/credentials.json");
console.log("Credentials path:", credentialsPath);

let credentials;
try {
  credentials = JSON.parse(fs.readFileSync(credentialsPath));
  console.log("Credentials loaded:", credentials);
} catch (error) {
  console.error("Error reading credentials.json:", error);
  process.exit(1);
}

const oAuth2Client = new google.auth.OAuth2(
  credentials.installed.client_id,
  credentials.installed.client_secret,
  credentials.installed.redirect_uris[0]
);

async function getTokens() {
  try {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/gmail.send"],
      prompt: "consent",
    });
    console.log("Authorize this app by visiting this URL:", authUrl);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter the code from the redirect URL: ", async (code) => {
      try {
        const { tokens } = await oAuth2Client.getToken(code);
        oAuth2Client.setCredentials(tokens);
        console.log("Access Token:", tokens.access_token);
        console.log("Refresh Token:", tokens.refresh_token);
        console.log("Add to .env.local:");
        console.log(`REFRESH_TOKEN=${tokens.refresh_token}`);
      } catch (error) {
        console.error("Error retrieving tokens:", error);
      }
      rl.close();
    });
  } catch (error) {
    console.error("Error generating auth URL:", error);
  }
}

getTokens();
