import gildedImg from "../assets/images/projectsGilded.png";
import bayousideImg from "../assets/images/projects-bayouside.png";
import pizzeriaImg from "../assets/images/projectsPizzeria.png";
import stayHealthyImg from "../../../../Portfolio/images/placeholder.png";

export const projectDetails = [
  {
    projectURL: "gilded-plate",
    title: "The Gilded Plate",
    description:
      "I built this restaurant website to showcase the menu, allow users to make reservations, and find the location easily.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    imageURL: gildedImg,
    liveURL: "https://gildedplate-seven.vercel.app/",
    githubURL: "https://github.com/dataMichelle/gildedplate",
    goal: [
      "To create a modern and responsive website for a restaurant, allowing users to view the menu, make reservations, and find the location easily.",
    ],
    process: [
      "Designed the UI/UX using Figma to ensure a clean and user-friendly interface.",
      "Developed the frontend using React and styled it with Tailwind CSS.",
      "Integrated a reservation system using Next.js API routes.",
    ],
    webStack: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    additionalImages: [
      "/assets/images/gilded-1.png",
      "/assets/images/gilded-2.png",
      "/assets/images/gilded-3.png",
    ],
  },
  {
    projectURL: "bayouside-tennis",
    title: "Bayouside Tennis",
    description:
      "Tennis court rental website with booking, login, and a dashboard for owners and coaches.",
    tags: ["React", "JavaScript", "MongoDB"],
    imageURL: bayousideImg,
    liveURL: "https://bayouside-tennis.netlify.app/",
    githubURL: "https://github.com/dataMichelle/bayouside-tennis",
    goal: [
      "The Bayouside Tennis website aimed to create an easy-to-use platform for renting a private backyard tennis court, with an optional ball machine, per the client’s request. It needed to handle online bookings and payments while offering the owner and coaches a dashboard to manage schedules and revenue.",
      "Designed from scratch, the site delivers a seamless experience for players to reserve court time and a robust toolset for the client to oversee their rental business efficiently. The focus was on functionality, security, and accessibility tailored to this unique backyard setup.",
    ],
    process: [
      "I built the Bayouside Tennis website from the ground up, using MongoDB to manage users, bookings, coach hours, and payments, and Firebase for secure user authentication. Next.js was chosen over React for its SEO advantages and streamlined routing, ideal for both the booking system and the admin dashboard.",
      "The custom design includes a simple booking interface with payment integration for players, plus a dashboard for the client to track bookings and payments. Every component was crafted to meet the client’s needs, ensuring a scalable, user-friendly solution for their backyard tennis court rental.",
    ],
    webStack: ["React", "Node.js", "MongoDB", "Express"],
    additionalImages: [
      "/assets/images/bayouside-1.png",
      "/assets/images/bayouside-2.png",
      "/assets/images/bayouside-3.png",
    ],
  },
  {
    projectURL: "pizzeria-rustica",
    title: "Pizzeria Rustica",
    description: "A pizza restaurant website with an online ordering system.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageURL: pizzeriaImg,
    liveURL: "https://pizzeria-rustica.vercel.app/",
    githubURL: "https://github.com/dataMichelle/pizzeria-rustica",
    goal: [
      "To create a simple and elegant website for a pizza restaurant, allowing users to order online.",
    ],
    process: [
      "Designed the layout using HTML and CSS.",
      "Added interactivity with JavaScript for the online ordering system.",
      "Ensured the website is responsive and works well on all devices.",
    ],
    webStack: ["HTML", "CSS", "JavaScript"],
    additionalImages: [
      "/assets/images/pizzeria-1.png",
      "/assets/images/pizzeria-2.png",
      "/assets/images/pizzeria-3.png",
    ],
  },
  {
    projectURL: "stay-healthy",
    title: "Stay Healthy",
    description: "This is a health and wellness blog with articles and tips.",
    tags: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    imageURL: stayHealthyImg,
    liveURL: "https://stayhealthy-react.netlify.app/",
    githubURL: "https://github.com/dataMichelle/stayhealthy-react",
    goal: [
      "To create a modern and responsive website for a restaurant, allowing users to view the menu, make reservations, and find the location easily.",
    ],
    process: [
      "Designed the UI/UX using Figma to ensure a clean and user-friendly interface.",
      "Developed the frontend using React and styled it with Tailwind CSS.",
      "Integrated a reservation system using Next.js API routes.",
    ],
    webStack: ["React", "Next.js", "Tailwind CSS", "Zustand"],
    additionalImages: [
      "/assets/images/gilded-1.png",
      "/assets/images/gilded-2.png",
      "/assets/images/gilded-3.png",
    ],
  },
];
